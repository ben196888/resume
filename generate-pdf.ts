import { chromium, type Browser, type BrowserContext, type Page } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF(): Promise<void> {
    let browser: Browser | null = null;
    try {
        // Launch the browser
        browser = await chromium.launch();
        const context: BrowserContext = await browser.newContext();
        const page: Page = await context.newPage();

        // Navigate to the local development server
        await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });

        // Generate PDF with more compact settings
        await page.pdf({
            path: path.join(__dirname, 'resume.pdf'),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '14mm',
                right: '14mm',
                bottom: '18mm',
                left: '14mm'
            },
            scale: 0.85, // Further reduce scale to match LaTeX layout
            preferCSSPageSize: true
        });

        console.log('PDF generated successfully at resume.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    } finally {
        // Close the browser in the finally block to ensure it's always closed
        if (browser) {
            await browser.close();
        }
    }
}

// Run the function
generatePDF().catch((error: Error) => {
    console.error('Failed to generate PDF:', error);
    process.exit(1);
});
