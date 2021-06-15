const puppeteer = require("puppeteer");

// async function titleGetter() {
//   const pageTitle = [];
//   for (var i = 0; i < 12; i++) {
//     var titleResult = document.querySelectorAll("div.results h3 > a")[i]
//       .innerText;
//     pageTitle.push(titleResult);
//   }
//   return pageTitle;
// }

// async function logoGetter(){
//     const pageLogos = [];
//     for (var j=0; j < 12; j++){
//         var logoResult = await document.querySelectorAll('div.results div.logo-wrapper img')[j].currentSrc;
//          pageLogos.push(logoResult)
//     return pageLogos;

// }

async function webDetails(pageUrl) {
  try {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(pageUrl);

    const pageTitle = [];

    await page.evaluate(() => {
      for (var i = 0; i < 12; i++) {
        var titleResult = document.querySelectorAll("div.results h3 > a")[i].innerText;
        pageTitle.push(titleResult);
      }
  });

    console.log(pageTitle);
   

    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

webDetails(
  "https://marketingplatform.google.com/about/partners/find-a-partner?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fpartners%2F"
);
