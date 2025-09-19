import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const { default: pngToIco } = await import('png-to-ico');

(async () => {
  try {
    const svgPath = path.resolve('./public/airplane-favicon.svg');
    const outDir = path.resolve('./public');
    const sizes = [16, 32, 48, 64];
    const pngPaths = [];

    const svg = fs.readFileSync(svgPath);

    for (const size of sizes) {
      const outPng = path.join(outDir, `favicon-${size}.png`);
      await sharp(svg)
        .resize(size, size, { fit: 'contain' })
        .png()
        .toFile(outPng);
      pngPaths.push(outPng);
    }

    const icoBuffer = await pngToIco(pngPaths);
    const icoPath = path.join(outDir, 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('favicon.ico generated at', icoPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
