# The homepage

`/` is the scroll story in `public/home.html`: plain HTML, CSS and Three.js, no React. `next.config.mjs` rewrites `/` to that file. Every other route (`/about`, `/blog`, `/contact`, `/api/send`) still runs through Next.js like before. The homepage just doesn't link to them.

## Files

| File | What it is |
| --- | --- |
| `public/home.html` | The whole homepage: story text, styles and the Three.js scene |
| `public/DeeptanshuSanghani_Resume.pdf` | The resume people download from the header, chapter VII and the contact screen |
| `public/assets/resume-page.png` | Page 1 of the resume. Chapter VII prints it onto the page, sharp enough to read |
| `public/assets/three.min.js` | Three.js r128 for the homepage. The npm `three` package is untouched |
| `public/assets/og.png` | The preview image when the link is shared |
| `public/favicon.svg` | The gold Enter key |

## Run it

`npm run dev`, then open http://localhost:3000.

## Update the resume

1. Save the new PDF over `public/DeeptanshuSanghani_Resume.pdf`. Keep the file name, every link points to it.
2. Export page 1 as a PNG and save it over `public/assets/resume-page.png`. Around 1300 x 1650 px keeps the text sharp on screen.
3. Before exporting from Word, set File > Info > Properties: Title and Author. Browsers show the PDF's Title in the tab.

The old `public/resume/DeeptanshuSanghani - Resume.pdf` is the previous resume. Old links to it still work.

## Undo

Delete the `rewrites` block in `next.config.mjs` and `/` is the old homepage again.
