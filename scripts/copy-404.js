import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '../dist/index.html');
const dest = path.join(__dirname, '../dist/404.html');
fs.copyFileSync(src, dest);
console.log('Copied index.html to 404.html for GitHub Pages SPA support');
