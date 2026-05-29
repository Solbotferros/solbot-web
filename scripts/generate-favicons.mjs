import { writeFile } from 'node:fs/promises';
import pngToIco from 'png-to-ico';
import sharp from 'sharp';

const input = 'public/favicon-source.svg';
const bg = '#ebe7e1';

const makePng = (size, output) =>
  sharp(input)
    .resize({
      width: Math.round(size * 0.76),
      height: Math.round(size * 0.76),
    })
    .flatten({ background: bg })
    .png()
    .toFile(output);

await makePng(180, 'public/apple-touch-icon.png');
await makePng(192, 'public/icon-192.png');
await makePng(512, 'public/icon-512.png');
await makePng(16, 'public/favicon-16.png');
await makePng(32, 'public/favicon-32.png');
await makePng(48, 'public/favicon-48.png');

const ico = await pngToIco([
  'public/favicon-16.png',
  'public/favicon-32.png',
  'public/favicon-48.png',
]);

await writeFile('public/favicon.ico', ico);
