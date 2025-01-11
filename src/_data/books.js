import Fetch from "@11ty/eleventy-fetch";
import { downloadFromR2 } from "../utils/r2.js";

const compareDates = (date1, date2) => {
    // Convert to Date objects if they're strings
    const d1 = date1 ? new Date(date1) : null;
    const d2 = date2 ? new Date(date2) : null;
    
    // Handle null cases
    if (!d1 && !d2) return 0;    // both null - consider equal
    if (!d1) return -1;          // first date is null - comes first
    if (!d2) return 1;           // second date is null - comes last
    
    // Compare valid dates
    return d1.getTime() - d2.getTime();
}

export default async function () {
  return Fetch(
    async function () {
      const data = await downloadFromR2();
      const books = data.books
      return books.sort((a, b) => compareDates(b.userReadAt, a.userReadAt)); // b, then a to sort desc;
    },
    {
      requestId: "books",
      duration: "3d",
      type: "json",
    },
  );
}
