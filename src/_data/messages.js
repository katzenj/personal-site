const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	const url = process.env.MESSAGES_URL;

	/* This returns a promise */
	return EleventyFetch(url, {
		duration: "1h", // save for 1 hour
		type: "json", // we’ll parse JSON for you
	})
}
