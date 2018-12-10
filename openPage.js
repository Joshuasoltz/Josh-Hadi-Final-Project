const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.nike.com/us/en_us/');
  const list= await page.$("li[js-hook='exp-join-login']");
  list.click();

  page.$("input[name='emailAddress']").value = "joshuas2019@headroyce.org"
  page.$("input[name='password']").value = "Cutemonkey327"

  await page.screenshot({path: 'example.png'});

  await browser.close();
})();