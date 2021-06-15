const puppeteer = require("puppeteer");

async function viewportDim(pageUrl) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    }); // the headless false option to show the work of the pupeteer.
    const page = await browser.newPage();
    await page.goto(pageUrl);

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio,
      };
    });

    console.log("Dimensions:", dimensions);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

viewportDim("https://www.youtube.com");
