# Brigitta és Boldizsár esküvői információs oldala

Egyszerű, reszponzív, build nélküli statikus weboldal Netlify deployhoz.

## Netlify beállítás

- Build command: hagyd üresen
- Publish directory: `public`

## Már beállított adatok

- Pár neve: Brigitta & Boldizsár
- Dátum: 2026. szeptember 12.
- Fő helyszín: Wedding Lake, Budapest XXIII. kerület
- Fő helyszín Google Térkép linkje: `https://maps.app.goo.gl/hK9Usn7z4yHuk33p9`
- Parkolási/bejutási pont: `https://maps.app.goo.gl/C3rP7tR8NgEwPFqRA`
- Parkolás: 50+ parkolóhely

## Még cserélendő helyőrzők

A fő tartalom itt található:

```text
public/index.html
```

Keresd ezeket:

- `https://forms.gle/IDE-JON-A-KERDOIV-LINKJE` – Google Forms vagy Google Docs kérdőív linkje
- `email@example.com` – kapcsolattartó e-mail-cím
- egyházi esküvő pontos helyszíne és időpontja, ha meglesz
- részletes programidőpontok, ha meglesznek
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
