# OpenTavern

**A lightweight, single-file AI character chat application**  
**with full SillyTavern compatibility**

> Run a powerful role-playing chat experience instantly — no installation, no backend, just open one HTML file.

---

## ✨ Key Features

- **Zero Setup** — Single HTML file. Double-click to run. No installation or server required.
- **Fully Open Source & Free** — Permanent free, no subscriptions, no usage limits.
- **SillyTavern Compatible** — Import and export `chara_card_v3` character cards.
- **Advanced World Info (Lorebook)** — Full SillyTavern World Info support including keys, selective logic, timed effects, groups, and token budget control.
- **Smart Summarization** — Automatic and manual chat summarization with optional separate API.
- **Beautiful Modern UI** — Glassmorphism design with animated WebGL background.
- **Mobile Responsive** — Fully optimized for phones and tablets.
- **Multilingual** — Supports English, Simplified Chinese, and Traditional Chinese.
- **Privacy First** — All data stored locally in your browser (LocalStorage).

---

## 📸 Screenshots

| Main Chat Interface                  | Character Card & Sidebar                  |
|--------------------------------------|-------------------------------------------|
| ![Main Chat](screenshots/main-chat.png) | ![Character Card](screenshots/character-card.png) |

| World Book Editor                    | Settings Panel                            |
|--------------------------------------|-------------------------------------------|
| ![World Book](screenshots/world-book.png) | ![Settings](screenshots/settings.png)     |

| Mobile View                          | Summarization History                     |
|--------------------------------------|-------------------------------------------|
| ![Mobile](screenshots/mobile.png)    | ![Summary History](screenshots/summary-history.png) |

---

## 🚀 Quick Start

### Run Locally (Recommended)

1. Download `OpenTavern.html`
2. Open it with any modern browser (Chrome, Edge, Firefox, Safari)
3. Click the **⚙️ Settings** button and configure your API endpoint and key

### Deploy Online

Upload `OpenTavern.html` to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify

---

## 📋 Main Features

### Character Cards
- Import SillyTavern `chara_card_v3` JSON files
- Built-in character editor (name, description, personality, scenario, first message, etc.)
- One-click export

### World Book / World Info
- Complete SillyTavern World Info implementation
- Supports: primary/secondary keys, regex, selective logic, insertion positions, depth, timed effects (Sticky/Cooldow/Delay), group scoring, probability, character filters, and token budget control

### Chat Summarization
- Auto-summarize when context grows too large
- Manual summarization with custom turn count
- Summary history with edit and delete support
- Optional separate summarization API (great for NSFW content)

### Data Management
- Export single conversation or all conversations
- Import previously exported chats
- Local persistence via browser storage

---

## ⚙️ API Configuration

OpenTavern uses **OpenAI-compatible** chat completions API.

Popular supported providers:
- OpenAI (GPT-4o, GPT-4o-mini, etc.)
- DeepSeek
- SiliconFlow
- Any other provider that supports `/v1/chat/completions`

**Tip**: You can configure a **separate summarization API** in Settings for better cost control or to bypass content filters.

---

## 🛠️ Technical Stack

- Pure HTML + Tailwind CSS (via CDN)
- Vanilla JavaScript (no frameworks)
- WebGL animated background
- LocalStorage for persistence
- Streaming responses via Fetch + ReadableStream

---

## ❓ FAQ

**Q: Do I need to install anything?**  
A: No. Just open the HTML file in your browser.

**Q: Is my data private?**  
A: Yes. All data is stored locally in your browser. Nothing is sent to any server except your chosen API provider.

**Q: Can I use it offline?**  
A: Yes, after the initial load and API configuration.

**Q: Does it support NSFW content?**  
A: Yes. For summarization, you can use a separate, more permissive model to avoid refusals.

**Q: How do I update the app?**  
A: Simply download the latest `OpenTavern.html` and replace the old file.

---

## 🤝 Contributing

Contributions are welcome!

Areas where help is appreciated:
- UI/UX improvements
- Additional World Info features
- Better mobile experience
- Documentation and translations
- Bug reports and feature requests

Please open an issue or submit a pull request on GitHub.

---

## 📜 License

MIT License

---

## 💬 Feedback

Feel free to open an issue on GitHub for bugs, suggestions, or questions.

---

**OpenTavern** — Powerful character chat, made simple.

---

> **Note**: Place your screenshots in a `screenshots/` folder in the project root for the images above to display correctly.