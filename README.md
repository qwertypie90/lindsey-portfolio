# Lindsey McDowell — Portfolio

Acting + writing portfolio. React, TypeScript, Vite.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Updating the site (the part you'll actually do)

**Everything lives in `src/content.ts`.** Add a press item, a film,
a publication, a clip — the page grows automatically. You never need
to touch the components.

### Adding images
1. Drop the file into `public/images/` (e.g. `public/images/set-1.jpg`)
2. In `src/content.ts`, replace the `null` with `"/images/set-1.jpg"`

Until then, every empty slot shows a styled color block on purpose.

### Adding a video clip
In `actingClips`, add:

```ts
{
  id: "new-clip",            // its shareable URL: /acting/clip/new-clip
  title: "Scene Name",
  source: "vimeo",           // or "youtube"
  videoId: "123456789",      // Vimeo: number in URL · YouTube: part after watch?v=
},
```

Every clip gets a deep link — send someone
`lindseymcdowell.com/acting/clip/new-clip` and it opens playing.

### Your resume
Replace `public/resume.pdf` with your real resume (keep the filename).

## Deploying

```bash
npm run build   # output goes to dist/
```

**Vercel (easiest, free):** push this folder to GitHub → import at
vercel.com → it auto-detects Vite. Then in GoDaddy DNS, add the A
record + CNAME Vercel shows you. The included `vercel.json` handles
page refreshes on deep links.

**Netlify:** same flow; add a `_redirects` file in `public/` containing
`/* /index.html 200` if you go this route.

**Heroku:** works but costs ~$5/mo minimum; you'd serve `dist/` with a
tiny static server. Happy to set that up if you choose it.
