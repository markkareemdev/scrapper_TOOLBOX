const puppeteer = require("puppeteer");

async function pdfCreator(pageUrl) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, {
      waitUntil: "networkidle2",
    });
    await page.pdf({ path: "new.pdf", format: "a4" });
    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

pdfCreator("https://www.youtube.com");
