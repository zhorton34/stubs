// Import Astral
import { launch } from "jsr:@astral/astral";

// Launch the browser
const browser = await launch();

// Open a new page
const page = await browser.newPage("https://deno.land");

// Run code in the context of the browser
const value = await page.evaluate(() => {
  return document.body.innerHTML;
});
console.log(value);

// Run code with args
const result = await page.evaluate((x, y) => {
  return `The result of adding ${x}+${y} = ${x + y}`;
}, {
  args: [10, 15],
});
console.log(result);

// Close the browser
await browser.close();