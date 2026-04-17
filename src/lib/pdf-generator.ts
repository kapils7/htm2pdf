import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

// Disable the download in local development if you have Chrome installed
// Local Dev: you can set this to false and provide the executablePath manually

const browser = await puppeteer.launch({
  args: chromium.args,
  defaultViewport: chromium.defaultViewport,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless, // This replaces 'setHeadlessMode'
});

interface PdfOptions {
  html?: string;
  url?: string;
}

export async function generatePdf(options: PdfOptions): Promise<Buffer> {
  // Configures sparticuz/chromium to use the local Chrome if needed for local test,
  // or fetches the binary when running on serverless
  const isLocal = process.env.NODE_ENV === 'development';
  
  const browser = await puppeteer.launch({
    args: isLocal ? ['--no-sandbox', '--disable-setuid-sandbox'] : chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: isLocal ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' : await chromium.executablePath(),
    headless: isLocal ? true : chromium.headless,
  });

  const page = await browser.newPage();
  
  // Set the content or navigate to URL
  if (options.url) {
    await page.goto(options.url, { waitUntil: 'networkidle0' });
  } else if (options.html) {
    await page.setContent(options.html, { waitUntil: 'networkidle0' });
  }
  
  // Generate the PDF
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
  return Buffer.from(pdfBuffer);
}
