# Esküvői információs oldal – Netlify statikus starter

Egyszerű, reszponzív, build nélküli statikus weboldal Netlify deployhoz.

## Netlify beállítás

- Build command: hagyd üresen
- Publish directory: `public`

## Gyors testreszabás

A fő tartalom itt található:

```text
public/index.html
```

A legfontosabb cserélendő helyőrzők:

- `Anna & Bence`
- `2026. június 20.`
- `https://forms.gle/IDE-JON-A-KERDOIV-LINKJE`
- Helyszín, időpontok, kapcsolattartási adatok
- `public/sitemap.xml` és `public/robots.txt` domain URL-je

## Lokális megnyitás

Nyisd meg a `public/index.html` fájlt böngészőben, vagy futtasd:

```bash
python3 -m http.server 8080 --directory public
```

Majd böngészőben:

```text
http://localhost:8080
```

## Deploy

```bash
git init
git add .
git commit -m "Initial wedding site"
git branch -M main
git remote add origin <SAJAT_REPO_URL>
git push -u origin main
```

Ezután Netlify-ben importáld a GitHub/GitLab/Bitbucket repót.
