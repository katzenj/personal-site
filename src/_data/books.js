import Fetch from "@11ty/eleventy-fetch";
import { downloadFromR2 } from "../utils/r2.js";

export default async function () {
  return Fetch(
    async function () {
      const data = await downloadFromR2();
      return data.books;
    },
    {
      requestId: "books",
      duration: "1d",
      type: "json",
    },
  );
}
