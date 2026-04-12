\# TextUtils — React Text Utility App

Live demo: https://codeheavetextutils.onrender.com

## Overview

TextUtils is a small React application that provides a collection of text manipulation utilities and a live preview. It includes a responsive UI with a theme toggle (light/dark) and an alert system for operation feedback.

## Key Features

- Convert text to Uppercase / Lowercase
- Capitalize words, Sentence case, Reverse text, Slugify text
- Remove extra spaces, line breaks, punctuation, numbers, emojis
- Remove duplicate words, shuffle or sort words
- Copy text to clipboard and clear text
- Convert text to binary
- Count vowels, consonants and show longest word
- Undo/redo-like history with Previous / Next buttons (limited history)
- Live preview: words, characters and estimated reading time
- Responsive layout using Bootstrap components

These features are implemented in `src/components/TextForm.js` and exposed via buttons in the UI.

## Project Structure (important files)

- `src/App.js` — app shell, routing and mode state
- `src/components/Navbar.js` — navigation and theme toggle
- `src/components/TextForm.js` — main text utilities and preview
- `src/components/Alert.js` — toast/alert messages
- `src/components/About.js`, `Footer.js` — informational pages

## Installation

Clone the repo and install dependencies:

```bash
npm install
```

Bootstrap is used in the project; it is included via `package.json` dependencies or CDN as configured in the app.

## Run (development)

```bash
npm start
```

Open http://localhost:3000 to view the app. The dev server supports hot-reload.

## Build (production)

```bash
npm run build
```

This outputs a production-ready `build/` folder you can deploy.

## Usage Notes

- Type or paste text into the textarea and use the utility buttons to transform it.
- Buttons are disabled when there is no text available; alerts inform the user of actions or warnings.
- The Preview button expands a collapsible panel showing word count, character count, estimated reading time and a readonly preview textarea.

## Contributing

Feel free to open issues or PRs to add new text utilities or improve UX. Keep changes focused and include tests where appropriate.

