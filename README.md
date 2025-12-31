\# TextUtils — React Text Utility App

Live demo: Not deployed from this repository yet.

To generate a live demo URL using GitHub Pages:

- Set the `homepage` field in `package.json` to `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>`.
- Install `gh-pages` and deploy from this repository with:

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

Alternatively add these scripts to `package.json` and run `npm run deploy`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Replace `<GITHUB_USERNAME>` and `<REPO_NAME>` with your GitHub username and repository name. After deployment your site will be available at `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>/`.

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

## License

This project has no license specified in the repo. Add a `LICENSE` file if you want to choose one.
