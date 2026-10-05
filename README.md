# Luvoré — demo sayt

Lüks ətir brendi Luvoré üçün demo vitrin saytı. Təmiz HTML/CSS/JS — framework və build addımı yoxdur.

## Lokal işə salma

```bash
python -m http.server 5500
```

Sonra brauzerdə <http://localhost:5500> açın.

## Deploy

Azure Static Web Apps üzərindən. `main` branch-ına hər push GitHub Actions ilə avtomatik deploy olunur
(`.github/workflows/` — Azure tərəfindən yaradılır).

## Struktur

```
index.html       səhifənin quruluşu
styles.css       dizayn (qara + qızılı tema)
app.js           məhsul kataloqu, səbət, ətir tapıcı, axtarış
assets/logo.jpg  loqo
```

Məhsul siyahısı `app.js`-in əvvəlindəki `PRODUCTS` massivindədir.
