# CLODCANSURVEY Portfolio

Static site (HTML, CSS, JS). No build step. All paths are relative, so it works at `https://USERNAME.github.io/REPO/` and on a custom domain.

## Add your content
Placeholders show a dashed stripe box with the file path. Save a JPG/WebP at that path and it replaces the box automatically.

| File | Used in |
|---|---|
| `assets/img/profile.jpg` | Hero portrait (4:5) |
| `assets/img/about.jpg` | About section (4:5) |
| `assets/img/field/field-1.jpg` … `field-3.jpg` | Field work photos |
| `assets/img/projects/ndvi-1.jpg`, `ndvi-2.jpg`, `dem-1.jpg`, `dem-2.jpg`, `shelter-1.jpg`, `shelter-2.jpg` | Project cards and detail windows |
| `assets/resume.pdf` | Résumé download button |

Search for `[` in `index.html` and `js/main.js` to find every placeholder (role and dates, objectives, methodology, results, contribution). Replace `your.email@example.com` and the LinkedIn, GitHub and Facebook links in the Contact section. Project tools are drafted from your skills list, so confirm them. Project text lives in `js/main.js`; colors are the variables at the top of `css/style.css`.

Preview locally: `python -m http.server` in this folder, then open http://localhost:8000.

## Deploy on GitHub Pages
1. Create a GitHub repository and upload everything in this folder (`index.html` must be at the repo root).
2. Repository **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, Branch `main`, folder `/ (root)`, Save.
3. After a minute the site is live at `https://USERNAME.github.io/REPO/`.

## Connect your DigitalPlat domain
1. Register your name at the DigitalPlat FreeDomain dashboard (extensions offered include `.dpdns.org`, `.us.kg`, `.qzz.io`, `.xx.kg`, `.qd.je`), e.g. `clodcansurvey.dpdns.org`.
2. In the repository **Settings → Pages → Custom domain**, enter your domain and Save. GitHub adds a `CNAME` file to the repo.
3. In the DNS settings for the domain, add these records. If DigitalPlat's dashboard doesn't offer record editing for you, point the domain's nameservers to a DNS host such as Cloudflare and add them there.
   - `A` records for the root domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www`: `USERNAME.github.io` (your username only, no repo name)
4. Wait for DNS to propagate (up to 24 hours), then tick **Enforce HTTPS** in the Pages settings.

Tip: add `<link rel="canonical" href="https://YOUR-DOMAIN/">` to the `<head>` of `index.html` once the domain is live.
