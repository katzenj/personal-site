import { DateTime } from "luxon";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItLinkAttr from "markdown-it-link-attributes";

const metadata = await import("./src/_data/metadata.json", {
  assert: { type: "json" },
});

import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import EleventyPluginRobotsTxt from "eleventy-plugin-robotstxt";

export default function (eleventyConfig) {
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

  const metadataData = metadata.default;
  // Add plugins
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 15, // 0 means no limit
    },
    metadata: {
      language: metadataData.language,
      title: metadataData.title,
      subtitle: metadataData.description, // assuming your metadata has a description field
      base: metadataData.url,
      author: {
        name: metadataData.author.name,
        email: metadataData.author.email,
      },
    },
  });
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  /** @type {import("eleventy-plugin-robotstxt/typedefs.js").EleventyPluginRobotsTxtOptions} */
  const eleventyPluginRobotsTxtOptions = {
    rules: new Map([["Googlebot-Image", [{ disallow: "/" }]]]),
    shouldBlockAIRobots: true,
  };
  eleventyConfig.addPlugin(
    EleventyPluginRobotsTxt,
    eleventyPluginRobotsTxtOptions,
  );

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

  eleventyConfig.addFilter("maybeISOToString", (dateStr) => {
    if (!dateStr) {
      return "";
    }
    return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATE_MED);
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
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        assistiveText: (title) => `Permalink to “${title}”`,
        symbol:
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z"></path></svg>',
        placement: "after",
      }),
      level: [1, 2, 3],
    })
    .use(markdownItLinkAttr, {
      matcher(href) {
        return !href.startsWith("#");
      },
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
}
