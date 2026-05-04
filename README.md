# Netlify Static Starter

Egy minimális, zero-build statikus weboldal Netlify deployhoz.

## Struktúra

```text
.
├── netlify.toml
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   └── assets/
│       ├── css/styles.css
│       ├── js/main.js
│       └── img/favicon.svg
└── README.md
```

## Netlify beállítás

Netlify-n importáld a GitHub/GitLab/Bitbucket repót.

- Build command: hagyd üresen
- Publish directory: `public`

A `netlify.toml` már tartalmazza a publish könyvtárat és néhány alap security/cache headert.

## Lokális futtatás

Pythonnal:

```bash
cd public
python3 -m http.server 8080
```

Majd nyisd meg:

```text
http://localhost:8080
```

Node nélkül is működik, nincs kötelező függőség.

## Módosítandó részek élesítés előtt

1. `public/index.html` — title, description, szövegek, linkek.
2. `public/sitemap.xml` — cseréld a `https://example.netlify.app` URL-t a saját domainedre.
3. `public/robots.txt` — cseréld a sitemap URL-t.
4. `public/manifest.webmanifest` — app/site név.

## Git indulás

```bash
git init
git add .
git commit -m "Initial static site"
git branch -M main
git remote add origin <SAJAT_REPO_URL>
git push -u origin main
```
