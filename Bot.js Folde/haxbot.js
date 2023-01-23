const puppeteer = require('puppeteer');
async function bot () {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.haxball.com/headless', {waitUntil: 'networkidle2'});
    await page.addScriptTag({path: 'bot.js'});
}
bot();
console.log('Bot loaded');