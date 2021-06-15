const puppeteer = require("puppeteer");

async function screenShot(pageUrl) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl);

    await page.screenshot({ path: "screenshot.png" });

    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

screenShot("https://www.youtube.com");
