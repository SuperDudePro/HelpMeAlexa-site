# Help Me Alexa

Static landing page for a Vista PEAK student voice form.

## Update the Google Form link

Open `script.js` and replace:

```js
const GOOGLE_FORM_URL = "";
```

with the APS-restricted Google Form URL.

## Vercel settings

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `.`
- Environment Variables: none

## v6 accessibility cleanup

- Replaced gradient backgrounds with solid colors so automated WCAG contrast tools can evaluate text contrast.
- Reduced header brand text styling so it is not flagged as a faux heading.
- Changed favicon/tab icon to a VP mark.
