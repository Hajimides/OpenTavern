OpenTavern
A lightweight, single-file AI character chat application
with full SillyTavern compatibility
Run a powerful role-playing chat experience instantly — no installation, no backend, just open one HTML file.

✨ Key Features

Zero Setup — Single HTML file. Double-click to run. No installation or server required.
Fully Open Source & Free — Permanent free, no subscriptions, no usage limits.
SillyTavern Compatible — Import and export chara_card_v3 character cards.
Advanced World Info (Lorebook) — Full SillyTavern World Info support.
Smart Summarization — Automatic and manual chat summarization with optional separate API.
Beautiful Modern UI — Glassmorphism design with animated WebGL background.
Mobile Responsive — Fully optimized for phones and tablets.
Multilingual — English, Simplified Chinese, Traditional Chinese.


📸 Screenshots













Main Chat InterfaceCharacter Card & Sidebar













World Book EditorSettings Panel













Mobile ViewSummarization History

🚀 Quick Start
Run Locally (Recommended)

Download OpenTavern.html
Open it with any modern browser
Click the ⚙️ Settings button and enter your API endpoint + key

Deploy to Web
Upload OpenTavern.html to:

GitHub Pages
Cloudflare Pages
Vercel / Netlify


📋 Main Features
Character Cards

Import SillyTavern chara_card_v3 format
Built-in character editor (name, personality, scenario, first message, etc.)
One-click export

World Book / World Info

Full SillyTavern compatibility
Supports keys, regex, selective logic, depth, timed effects, groups, token budget, and more

Chat Summarization

Auto-summarize when context exceeds threshold
Manual summarization
Summary history with edit/delete
Separate summarization API support (recommended for NSFW)

Data Management

Export/import individual or all conversations
Local persistence via browser storage


⚙️ API Configuration
OpenTavern uses OpenAI-compatible APIs.
Popular supported providers:

OpenAI
DeepSeek
SiliconFlow
Any other provider with /v1/chat/completions endpoint

You can configure a separate summarization API in settings for better performance and cost.

🛠️ Technical Stack

Pure HTML + Tailwind CSS (via CDN)
Vanilla JavaScript
WebGL animated background
LocalStorage persistence
Streaming responses


❓ FAQ
Q: Do I need any installation?
A: No. Just open the HTML file in your browser.
Q: Is my data private?
A: Yes. All data is stored locally in your browser.
Q: Can I use it offline?
A: Yes, after initial setup.
Q: Does it support NSFW?
A: Yes. Use a separate summarization API if you encounter refusals.

🤝 Contributing
Contributions are welcome!
Feel free to open issues or pull requests for:

UI/UX improvements
New features
Bug fixes
Documentation


📜 License
MIT License

💬 Feedback
Open an issue on GitHub for any questions or suggestions.

OpenTavern — Powerful character chat, made simple.
