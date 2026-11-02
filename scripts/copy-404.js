import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');
fs.copyFileSync(src, dest);
console.log('Copied index.html to 404.html for GitHub Pages SPA support');

// gh-pages replaces the published branch, so CNAME must be in dist
// or GitHub unbinds www.semanticengine.org.
const cnamePath = path.join(distDir, 'CNAME');
const cname = fs.existsSync(cnamePath)
  ? fs.readFileSync(cnamePath, 'utf8').trim()
  : '';
if (cname !== 'www.semanticengine.org') {
  throw new Error(
    `dist/CNAME must contain "www.semanticengine.org" (got ${JSON.stringify(cname)}). ` +
      'Keep public/CNAME in source so Vite copies it into the GitHub Pages build.',
  );
}
