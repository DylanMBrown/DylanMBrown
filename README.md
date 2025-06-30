- 👋 Hi, I’m @DylanMBrown
- 👀 I’m interested in ... learning to become Web developer 
- 🌱 I’m currently learning ... Web Dev 
- 💞️ I’m looking to collaborate on ... web Developers
- 📫 How to reach me ... https://www.linkedin.com/in/dylan-brown-a065881bb/

<!---
DylanMBrown/DylanMBrown is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

## Modern Bible App

This repository contains a very small sample web app that demonstrates how you might build a multi-translation Bible reader. The app loads sample verses from `data/bible_sample.json` and highlights words spoken by Jesus in **red** and words spoken by the Father in **blue**.

### Running

Open `index.html` in any modern web browser. Select the translation from the dropdown to view the available text. The provided sample only includes a few verses from the public domain King James Version (KJV). Other translations are left blank for you to fill in with appropriately licensed text.

### Adding Data

Edit `data/bible_sample.json` to include additional verses and translations. Use the `<jesus>...</jesus>` and `<father>...</father>` tags around phrases that should be color-coded.

### Hosting Locally

Run `python3 server.py` from the repository root to start a simple web server.
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Hosting on GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, enable **GitHub Pages** and choose the `main` branch.
3. Visit the provided URL (e.g. `https://<username>.github.io/<repo>`). Your Bible app will be served there.
