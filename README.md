# OpenTavern

**A lightweight yet powerful single-file AI character chat application**  
**with full SillyTavern compatibility and advanced memory management**

> Run a professional-grade role-playing experience instantly — no installation, no backend, just open one HTML file.

---

## 🚀 Quick Access (Live Demo)

**Recommended (Faster & More Stable in China):**
- **Cloudflare Pages**: [https://opentavern.pages.dev](https://opentavern.pages.dev)

**Backup:**
- **GitHub Pages**: [https://hajimides.github.io/OpenTavern](https://hajimides.github.io/OpenTavern)

---

## ✨ Key Features & Major Updates

OpenTavern has undergone significant evolution. The latest version introduces enterprise-grade local storage, intelligent context management, and a completely redesigned summarization system while keeping the zero-setup philosophy.

### Core Strengths
- **Zero Setup** — Single HTML file. Double-click to run. Works offline after first load.
- **Full SillyTavern Compatibility** — Import/export `chara_card_v3` character cards. Complete World Info (Lorebook) implementation.
- **Advanced Memory System** — Automatic + manual summarization with history, edit, delete, and custom range support.
- **Separate Summarization API** — Use a different (cheaper / uncensored) model for long-term memory compression.
- **Modern Glassmorphism UI** — Beautiful dark theme with animated WebGL background, smooth animations, and mobile-first design.
- **IndexedDB Storage** — Major upgrade from localStorage. Supports much larger conversations, multiple characters, and World Books with real-time usage statistics.
- **Full Transparency** — View the exact prompt sent to the API at any time.
- **Multilingual** — English, 简体中文, 繁體中文 (with in-app language switcher and onboarding modal).
- **Privacy First** — Everything stays in your browser. Nothing is sent except to your chosen API provider.

---

## 📸 Screenshots

| Main Chat Interface                  | Character Card & Sidebar                  |
|--------------------------------------|-------------------------------------------|
| ![Main Chat](screenshots/main-chat.png) | ![Character Card](screenshots/character-card.png) |

| World Book Editor                    | Settings Panel                            |
|--------------------------------------|-------------------------------------------|
| ![World Book](screenshots/world-book.png) | ![Settings](screenshots/settings.png)     |

| Mobile View                          | Summary Manager                           |
|--------------------------------------|-------------------------------------------|
| ![Mobile](screenshots/mobile.png)    | ![Summary Manager](screenshots/summary-manager.png) |

> **Note**: Place your screenshots in a `screenshots/` folder for the images above to display correctly on GitHub.

---

## 🚀 Quick Start

1. Download the latest `index.html` (or `OpenTavern.html`)
2. Open it in any modern browser (Chrome / Edge / Firefox / Safari recommended)
3. Click the **⚙️ Settings** button (top right or sidebar)
4. Configure your **API Endpoint** and **API Key** (one-click preset for DeepSeek available)
5. (Optional) Import a SillyTavern character card
6. Start chatting!

**Recommended first-time setup**:
- Use **DeepSeek** (fast, cheap, excellent Chinese/English performance)
- Set **Context Length** to 20–30
- Enable **Auto Summarize** with threshold ~12–18

---

## 📋 Main Features (Detailed)

### 1. Character Cards
- Import any `chara_card_v3` JSON from SillyTavern
- Built-in full editor (name, description, personality, scenario, first message, example dialogues, system prompt, post-history instructions, creator notes, tags)
- One-click export back to SillyTavern format
- Automatic first message injection when starting a new chat

### 2. World Book / World Info (Lorebook)
Complete SillyTavern implementation with modern UI:
- Searchable entry list
- Rich editor: Memo, Primary Keys (supports regex `/pattern/i`), Secondary Keys, Selective Logic (AND ANY / AND ALL / NOT ANY / NOT ALL)
- Strategy: Constant (always active) or Keyword-triggered
- Probability, Insertion Order, Group scoring
- Disable toggle per entry
- **Token Budget Control** — Limit total tokens injected per generation (prevents context overflow)
- Full mobile-optimized editor

### 3. Intelligent Summarization System (Major New Feature)
- **Auto Summarize**: Automatically compresses old messages when threshold is reached (configurable, with safety warnings)
- **Summary Manager** (new dedicated modal):
  - Two modes: **Recent Messages** or **Custom Range** (start–end turn)
  - Live preview before generating
  - Summary History list with edit / delete
  - Max word limit per summary
- **Separate Summarization API**: Configure a completely different endpoint/model/key for summarization (ideal for NSFW content or cost optimization)
- Summaries are injected as system messages and can be manually managed

### 4. Chat Experience
- Real-time streaming responses
- Stop generation button
- Message actions: Copy, Regenerate (AI messages), Delete
- Visual token/context usage bar with color warnings
- Full prompt viewer modal (see exactly what is sent to the API)
- Dialogue highlighting for Chinese quotes 「」 “”
- Responsive input area with auto-resize

### 5. Data Management & Storage
- Export single conversation or **all conversations** (JSON)
- Import previously exported chats
- **IndexedDB backend** (default for large data) + localStorage fallback
- Real-time storage usage display in Settings (used MB / quota with progress bar)
- Automatic migration from old localStorage on first run
- Backup reminder system

### 6. Settings & Customization
- API: Endpoint, Key (with optional localStorage save + security warning), Model
- Generation params: Temperature, Top P, Max Tokens, Context Length
- User name (replaces `{{user}}`)
- Custom global system prompt (overrides character prompt)
- World Info token budget + enable toggle
- Summarization threshold, max words, separate API settings
- Language switcher (affects entire UI instantly)
- Storage backend status and usage statistics

### 7. Mobile Experience
- Hamburger sidebar
- Fully optimized modals (World Book, Summary Manager, Character Editor, etc.)
- Touch-friendly buttons and inputs
- No horizontal scroll issues on small screens

---

## ⚙️ API Configuration

OpenTavern uses the standard **OpenAI-compatible** chat completions API (`/v1/chat/completions`).

### Popular Supported Providers
- **DeepSeek** (recommended — one-click preset)
- OpenAI (GPT-4o, GPT-4o-mini, o1, etc.)
- SiliconFlow, Together.ai, Fireworks, Groq
- Local servers: Ollama, LM Studio, llama.cpp (with OpenAI compatibility layer)
- Any provider that follows the OpenAI chat format

**Pro Tip**: In Settings you can configure a **completely separate Summarization API**. This is extremely useful when:
- You want to use a cheaper model for memory compression
- Your main model refuses NSFW content
- You want to keep long-term memory while using a different provider

---

## 🛠️ Technical Stack

- **Frontend**: Pure Vanilla JavaScript + Tailwind CSS (CDN) + extensive custom CSS
- **Graphics**: Custom WebGL shader for animated background + vignette overlay
- **Storage**: IndexedDB (primary) + localStorage (fallback) with usage monitoring
- **i18n**: Built-in translation system with instant language switching
- **Streaming**: Fetch + ReadableStream for real-time token streaming
- **No external dependencies** — everything is self-contained in one HTML file

---

## ❓ FAQ

**Q: Do I really need nothing installed?**  
A: Correct. Just open the HTML file in a modern browser.

**Q: How much data can I store?**  
A: With IndexedDB, typically 100MB–several GB depending on your browser/device (far more than the old ~5–10MB localStorage limit). The app shows real-time usage.

**Q: Can I use it completely offline?**  
A: Yes — after the first load and API configuration, all chats, characters, and World Books work offline.

**Q: Is NSFW content supported?**  
A: Yes. Use a permissive model and consider the separate summarization API to avoid refusals on long contexts.

**Q: What happens if I update the HTML file?**  
A: Your data remains safe in browser storage. Just replace the file.

**Q: Why is there a separate summarization API?**  
A: Long conversations can become expensive or hit content filters. A dedicated summarization model (often cheaper or uncensored) keeps memory efficient without affecting your main chat model.

**Q: How do I report bugs or request features?**  
A: Open an issue on the GitHub repository.

---

## 🔄 Version History Highlights

- **Latest**: IndexedDB storage, Summary Manager with history & custom range, separate summarization API, World Info token budget, full prompt viewer, major mobile UI fixes, onboarding announcement modal.
- Previous versions focused on core SillyTavern compatibility and glassmorphism UI.

---

## 🤝 Contributing

Contributions are very welcome!

High-value areas:
- Additional language translations
- More World Info features (timed effects, character filters, etc.)
- UI/UX improvements and accessibility
- Performance optimizations for very long chats
- Better error handling and user guidance
- Documentation improvements

Please open issues or submit pull requests on GitHub.

---

## 📜 License

MIT License — Free for personal and commercial use.

---

## 💬 Feedback & Support

- GitHub Issues: Report bugs, suggest features, ask questions
- The project is actively maintained

---

**OpenTavern** — Powerful character chat, made simple.  
Now with professional-grade memory and storage.

---

*Last updated: May 2026*