import fs from 'node:fs/promises';
import { transform } from 'lightningcss';

const INPUT_FILE = './lib/styles/main.css';
const OUTPUT_FILE = './lib/styles/toasts.css';

async function processCss() {
	try {
		const code = await fs.readFile(INPUT_FILE, 'utf8');

		const { code: processedCode } = transform({
			filename: INPUT_FILE,
			code: Buffer.from(code),
			minify: true,
			bundle: true,
			targets: {
				chrome: 100,
				firefox: 121,
				safari: 16,
				edge: 100,
			},
		});

		await fs.writeFile(OUTPUT_FILE, processedCode);

		console.log(`✅ CSS processed and saved in ${OUTPUT_FILE}`);
	} catch (error) {
		console.error('❌ Error processing CSS:', error);
		process.exit(1);
	}
}

processCss();
