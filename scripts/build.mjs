import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { Script } from 'node:vm';

const root = new URL('../', import.meta.url);
const source = new URL('index.html', root);
const output = new URL('dist/', root);
const html = await readFile(source, 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];

if (!/^<!doctype html>/i.test(html.trimStart()) || scripts.length === 0) {
  throw new Error('index.html must contain a complete HTML document and game script.');
}

// Check syntax without executing browser code, before replacing the build.
for (const [index, match] of scripts.entries()) {
  new Script(match[1], { filename: `index.html:script-${index + 1}` });
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await copyFile(source, new URL('index.html', output));
await writeFile(new URL('.nojekyll', output), '');
console.log('Built dist/index.html for GitHub Pages (JavaScript syntax checked).');
