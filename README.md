# LVI Landing Page

Staattisesti deployattava Next.js-landing page LVI-yrityksen asiakashankintaan.

## Sisältö

- Hero: Enemmän tarjouspyyntöjä, vähemmän säätöä.
- Ongelma: asiakashankinta on satunnaista
- Ratkaisu: systemaattinen asiakashankintajärjestelmä
- Referenssit ja luottamusnostot
- Yhteydenottolomake webhook-tuella

## Kehitys

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Repo sisältää GitHub Pages -workflow'n:

```txt
.github/workflows/deploy.yml
```

Workflow rakentaa staattisen Next.js-exportin kansioon `out` ja deployaa sen GitHub Pagesiin.

## Lomake

Lomake lähettää JSON-payloadin osoitteeseen:

```txt
NEXT_PUBLIC_LEAD_WEBHOOK_URL
```

Aseta tämä GitHub Actions secretiksi, jos haluat ohjata liidit esimerkiksi Makeen, Zapieriin, Google Sheetiin, Notioniin tai CRM:ään.

Jos webhookia ei ole asetettu, lomake ei kaadu vaan tulostaa leadin selaimen konsoliin ja näyttää onnistumisviestin.

## Seuraavat parannukset

- Oma domain
- Make/Zapier-webhook CRM:ään
- Google Tag Manager
- Konversioseuranta
- Referenssien vaihtaminen oikeisiin caseihin
