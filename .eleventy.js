const fs = require("fs");

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItLinkAttr = require("markdown-it-link-attributes");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/static");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  eleventyConfig.addCollection("essays", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/potsts/essays/*.md");
  });

  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/notes/*.md");
  });

  eleventyConfig.addWatchTarget("src/posts/**/*.md");

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addFilter("date", (_, format) => {
    return DateTime.local().toFormat(format);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "UTC",
    }).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("readableTimestampString", (dateStr) => {
    return DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm:ss", { zone: "utc" })
      .toLocal()
      .setZone("America/Los_Angeles")
      .toLocaleString(DateTime.DATETIME_MED);
  });

  eleventyConfig.addFilter("readableDateString", (dateStr) => {
    return DateTime.fromFormat(dateStr, "yyyy-MM-dd", {}).toLocaleString(
      DateTime.DATE_MED,
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["essays", "posts", "notes"].indexOf(tag) === -1,
    );
  }

  eleventyConfig.addFilter("filterTagList", filterTagList);

  eleventyConfig.addShortcode("sort", (tags) => tags.sort());

  function filterNotesList(notes) {
    return (notes || []).filter(
      (note) => note.data && note.data.type === "note",
    );
  }
  eleventyConfig.addFilter("filterNotesList", filterNotesList);

  function filterHighlightsList(notes) {
    return (notes || []).filter(
      (note) => note.data && note.data.type === "highlight",
    );
  }
  eleventyConfig.addFilter("filterHighlightsList", filterHighlightsList);

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]).sort();
  });

  function sortByDateDescending(collection) {
    const arr = Array.from(collection);
    arr.sort((a, b) => b.data.date - a.data.date);
    return arr;
  }

  eleventyConfig.addCollection("sortedNotes", function (collectionApi) {
    return sortByDateDescending(
      collectionApi.getFilteredByGlob("**/notes/*.md"),
    );
  });

  eleventyConfig.addCollection("sortedEssays", function (collectionApi) {
    return sortByDateDescending(
      collectionApi.getFilteredByGlob("**/essays/*.md"),
    );
  });

  eleventyConfig.addCollection("sortedPosts", function (collectionApi) {
    return sortByDateDescending(
      collectionApi.getFilteredByGlob("**/posts/**/*.md"),
    );
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true,
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "direct-link",
        symbol: "<i class=\"ph ph-link\"></i>",
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    })
    .use(markdownItLinkAttr, {
      attrs: { target: "_blank", rel: "noopener" },
    });

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.setServerOptions({
    liveReload: true,
    watch: ["_site/**/*.css"],
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
