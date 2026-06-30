本项目采用 AGPL v3 许可。
如需商业用途（闭源使用、商业产品集成、SaaS 服务等），请联系作者获取商业许可。
This project is licensed under the AGPL v3.

For commercial use (including closed-source distribution, commercial product integration, or SaaS deployment), please contact the author to obtain a commercial license.
# OpenTavern

**A lightweight, powerful, single-file AI character chat app**  
with full SillyTavern compatibility, advanced memory, and **Group Chat support**.

> Open one HTML file and enjoy professional role-playing with multiple characters. No backend, no installation required.

---

## 🚀 Quick Access (Live Demo)

**Recommended (Faster & More Stable in China):**
- **Cloudflare Pages**: [https://opentavern.pages.dev](https://opentavern.pages.dev)

**Backup:**
- **GitHub Pages**: [https://hajimides.github.io/OpenTavern](https://hajimides.github.io/OpenTavern)

---

## 简体中文

**OpenTavern** 是一个轻量、强大、单文件 AI 角色扮演聊天应用，完全兼容 SillyTavern，支持高级记忆系统和群聊功能。

> 直接打开一个 HTML 文件即可享受专业的多角色扮演。无需后端，无需安装。

### 核心特性（含最新更新）

- **零配置**：单个 HTML 文件，双击即可运行。首次加载后可离线使用。
- **完整 SillyTavern 兼容**：支持导入/导出 `chara_card_v3` 角色卡，完整实现 World Info（世界书）。
- **高级记忆系统**：自动 + 手动总结，支持历史记录、编辑、删除、自定义范围。
- **独立总结 API**：可为长期记忆压缩使用完全不同的（更便宜/无限制）模型。
- **浏览器本地推理（WebLLM，新功能）**：
  - 在「设置」中将「**推理后端**」切换为「**浏览器本地 (WebLLM)**」。
  - **切换后会立即弹出重要确认对话框**（设计如此）：
    > 注意：启用浏览器本地模型需要下载模型文件（约 XXX MB）。
    > 首次下载会使用较多流量，建议在 Wi-Fi 环境下进行。
    > 是否继续？
  - 你必须在确认框中**明确选择**要下载的模型（目前提供 **Llama-3.2-1B q4f16** 约 850 MB 和 **Llama-3.2-3B q4f16** 约 2100 MB）。
  - 下载和初始化过程有专用进度弹窗实时显示。
  - **严格保障**：页面初始化时**完全不引入**任何 WebLLM 代码。没有 `<script type="module">` 标签，没有预加载。**只有**用户点击「继续」后才会执行动态 `import("https://esm.run/@mlc-ai/web-llm")`。
  - 聊天生成完全在本地进行（使用 WebGPU），无需向远程服务器发送对话内容。
  - 总结功能仍可使用你配置的远程总结 API（可保留强大远程模型做记忆压缩，主聊天保持本地隐私）。
  - 需求：浏览器需支持 **WebGPU**（推荐最新版 Chrome 或 Edge）。
- **OPFS 存储**：使用 Origin Private File System，默认容量大、性能好。
- **群聊与 @ 提及**：支持多角色同时对话，通过 @ 精确控制本轮由谁回复。
- **三语言支持**：简体中文 / 繁體中文 / English，界面即时切换。
- **隐私优先**：所有数据仅保存在你的浏览器中。

### 快速开始（简体中文）

1. 下载最新的 `index.html`
2. 用现代浏览器打开（推荐 Chrome / Edge）
3. 点击右上角或侧边栏的 **⚙️ 设置**
4. 配置 API Endpoint 和 Key（支持一键预设 DeepSeek），**或者**直接切换「推理后端」为「浏览器本地 (WebLLM)」（首次会弹出确认并下载模型）
5. （可选）导入 SillyTavern 角色卡
6. 开始聊天！

**本地模式提示**：启用后，主聊天无需填写 API Key。模型下载为一次性操作（浏览器会缓存），之后加载速度会更快。1B 模型适合大多数设备，3B 模型质量更好但需要更强的 GPU。

### 常见问题（新增）

**Q: 可以完全不使用任何云端 API 吗？**  
A: 可以！在设置里把「推理后端」切换为「浏览器本地 (WebLLM)」，按照确认对话框选择并下载模型后，聊天生成就在浏览器本地完成（WebGPU）。总结仍可走远程 API。

**Q: 为什么切换本地后端时会强制弹出确认框并要求选择模型？**  
A: 这是核心设计要求。应用保证**页面加载时完全不执行任何 WebLLM 相关代码**。只有用户主动选择后端并在确认框明确点击模型按钮后，才会开始下载。

更多完整说明请参考下方英文部分或直接查看应用内的设置界面。

---

## English (Original + Updates)

## ✨ Key Features & Major Updates

OpenTavern continues to evolve with cutting-edge browser storage technology. The latest version introduces **OPFS (Origin Private File System)** as the default storage backend — delivering significantly higher capacity, better performance, and long-term reliability compared to IndexedDB or localStorage.

### Core Strengths
- **Zero Setup** — Single HTML file. Double-click to run. Works offline after first load.
- **Full SillyTavern Compatibility** — Import/export `chara_card_v3` character cards. Complete World Info (Lorebook) implementation.
- **Advanced Memory System** — Automatic + manual summarization with history, edit, delete, and custom range support.
- **Separate Summarization API** — Use a different (cheaper / uncensored) model for long-term memory compression.
- **Modern Glassmorphism UI** — Beautiful dark theme with animated WebGL background, smooth animations, and mobile-first design.
- **OPFS Storage** — Origin Private File System for massive capacity (often hundreds of MB to GB), superior performance, and future-proofing. Real-time usage statistics included.
- **Full Transparency** — View the exact prompt sent to the API at any time.
- **Three Languages** — 简体中文 / 繁體中文 / English (full UI translation with instant switching).
- **Privacy First** — Everything stays in your browser. Nothing is sent except to your chosen API provider.
- **Browser Local Inference (WebLLM, New)** — Run chat generation **entirely locally** in the browser using WebLLM (Llama-3.2 1B/3B quantized models). No API calls for the main chat. Strict lazy loading: **zero WebLLM code is loaded or executed on page initialization**. Only after you explicitly switch the backend in Settings and confirm the download warning dialog does the dynamic import begin. Includes mandatory traffic warning, model size info, Wi-Fi recommendation, and real-time progress modal.

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
   - Or switch **推理后端** to **浏览器本地 (WebLLM)** for fully local inference (see section below)
5. (Optional) Import a SillyTavern character card
6. Start chatting!

**Recommended first-time setup**:
- Use **DeepSeek** (fast, cheap, excellent Chinese/English performance) **or** try the new local WebLLM mode
- Set **Context Length** to 20–30
- Enable **Auto Summarize** with threshold ~12–18

**Note on local mode**: When using WebLLM, the first activation will ask you to choose and download a model (1B or 3B). Chat generation then runs locally. Summarization can still use a remote API if you configure one.

---

## 👥 Group Chat & @ Mention Guide

### How to Start a Group Chat
1. Click **New Chat**
2. In the character picker, **long-press or use multi-select** to choose multiple characters
3. Start chatting

### Using @ Mention (Recommended)
- Click the **@** button to the left of the input box
- Select a character from the popup panel (beautiful glassmorphism design with blur)
- Or manually type `@角色名` in the input

The selected character will be the one who replies this turn, and their full character card will be injected into the prompt.

### No @ Behavior
If you send a message without @ anyone, the **last character who spoke** will automatically reply (great for natural back-and-forth).

### Tips
- Only the mentioned character's detailed information is sent (efficient context usage)
- You can still have rich multi-character scenes by @ switching between them
- Works great on mobile

---

## 📋 Main Features (Detailed)

### 1. Character Cards
- Import any `chara_card_v3` JSON from SillyTavern
- Built-in full editor (name, description, personality, scenario, first message, example dialogues, system prompt, post-history instructions, creator notes, tags)
- One-click export back to SillyTavern format
- Automatic first message injection when starting a new chat
- **New Character Picker** when creating fresh conversations

### 2. World Book / World Info (Lorebook)
Complete SillyTavern implementation with modern UI:
- Searchable entry list
- Rich editor: Memo, Primary Keys (supports regex `/pattern/i`), Secondary Keys, Selective Logic (AND ANY / AND ALL / NOT ANY / NOT ALL)
- Strategy: Constant (always active) or Keyword-triggered
- Probability, Insertion Order, Group scoring, Timed effects (Sticky / Cooldown / Delay)
- **Token Budget Control** — Limit total tokens injected per generation (prevents context overflow)
- Full mobile-optimized editor with advanced filters

### 3. Intelligent Summarization System
- **Auto Summarize**: Automatically compresses old messages when threshold is reached (configurable, with safety warnings)
- **Summary Manager** (dedicated modal):
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

### 5. Data Management & Storage (Major Upgrade)
- Export single conversation or **all conversations** (JSON)
- Import previously exported chats
- **OPFS (Origin Private File System)** — Default backend offering:
  - Much higher capacity (often 100MB–several GB)
  - Better performance than IndexedDB
  - Private to the origin (more secure)
- Real-time storage usage display in Settings (used MB / quota with progress bar)
- Automatic migration handling
- Backup reminder system

### 6. Settings & Customization
- **Inference Backend** (New): Choose between **远程 API（OpenAI 兼容）** (default) or **浏览器本地 (WebLLM)**. 
  - Switching to local triggers an **important confirmation dialog** immediately:
    > 注意：启用浏览器本地模型需要下载模型文件（约 XXX MB）。
    > 首次下载会使用较多流量，建议在 Wi-Fi 环境下进行。
    > 是否继续？
  - You explicitly choose the model (Llama-3.2-1B q4f16 ~850MB or Llama-3.2-3B q4f16 ~2100MB) before any download starts.
  - Real-time download & initialization progress modal.
  - **Guarantee**: Page initialization loads **nothing** related to WebLLM (no `<script type="module">`, no top-level import, no pre-execution). Dynamic `import("https://esm.run/@mlc-ai/web-llm")` happens **only** after user clicks "继续".
- API: Endpoint, Key (with optional localStorage save + security warning), Model (used for remote mode)
- Generation params: Temperature, Top P, Max Tokens, Context Length
- User name (replaces `{{user}}`)
- Custom global system prompt (overrides character prompt)
- World Info token budget + enable toggle
- Summarization threshold, max words, separate API settings
- Language switcher (affects entire UI instantly)
- Storage backend status and usage statistics (now prominently shows **OPFS**)
- Low Power Mode (reduces visual effects to lower phone heat)

### 7. Browser Local Inference — WebLLM (New Major Feature)

You can now run the AI **completely locally** in your browser without sending chat messages to any remote server.

**How to enable:**
1. Open **⚙️ Settings**
2. Find **推理后端** (Inference Backend)
3. Select **浏览器本地 (WebLLM)**
4. An important confirmation dialog appears **immediately** (this is by design):
   - Warning about model file download size (currently supports **Llama-3.2-1B** ≈ 850 MB and **Llama-3.2-3B** ≈ 2100 MB, q4f16 quantized)
   - Traffic reminder: "首次下载会使用较多流量，建议在 Wi-Fi 环境下进行。"
   - You must **explicitly choose which model** to download using the buttons in the dialog.
5. Click the desired model button → Download & initialization progress modal appears.
6. Once complete, all chat generation (streaming) happens locally via WebGPU.

**Key technical guarantees (as requested):**
- **Zero impact on page load**: No WebLLM library is fetched or executed during initialization. No `<script type="module">` tags. No preloading.
- Dynamic import only triggers **after** the user clicks "继续" (or a model choice button) in the confirmation dialog.
- Model switching later (while already using local backend) will again show the progress confirmation for the new model.

**Requirements & Notes:**
- Browser must support **WebGPU** (latest Chrome or Microsoft Edge recommended; Firefox support is experimental).
- Summarization still uses your configured remote Summarization API (you can keep using a cheap/uncensored remote model for memory compression while chat runs locally).
- The 1B model is recommended for most devices and mobile. The 3B model gives better quality but requires more VRAM/GPU power.
- After first download, models are cached by the browser. Subsequent loads are much faster.
- When local mode is active, you no longer need to fill in API Key/Endpoint for chat generation (the input placeholder and send button logic adapt automatically).

This gives you a true private, offline-capable chat experience while keeping the powerful remote options available.

### 8. Group Chat with @ Mention (New)
- Create conversations with **multiple characters** at once.
- Use the **@ button** (left of input) to open a beautiful character selection panel.
- Explicitly @ a character (e.g. `@普拉娜` or via panel) to make them reply this turn.
- If you don't @ anyone, the **last replying character** will automatically continue the conversation.
- Full Switch-mode prompt injection — only the mentioned character's complete card is sent.
- Clean, mobile-friendly UI with backdrop blur.

This provides precise control in multi-character scenes while keeping prompts efficient.

### 9. Mobile Experience
- Hamburger sidebar
- Fully optimized modals
- Touch-friendly design
- Excellent @ mention panel on phones

---

## ⚙️ API Configuration

OpenTavern uses the standard **OpenAI-compatible** chat completions API (`/v1/chat/completions`).

### Popular Supported Providers
- **DeepSeek** (recommended — one-click preset, including `deepseek-v4-flash`)
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
- **Storage**: **OPFS (Origin Private File System)** — primary backend (recommended for long-term use) + localStorage fallback
- **i18n**: Built-in translation system with instant language switching (简体中文 / 繁體中文 / English)
- **Local Inference**: WebLLM (lazy-loaded via dynamic ESM import only after explicit user confirmation)
- **Streaming**: Fetch + ReadableStream for real-time token streaming (remote) + WebLLM streaming for local mode
- **No external dependencies** — everything is self-contained in one HTML file (WebLLM is fetched on-demand only when user enables local mode)

---

## ❓ FAQ

**Q: Do I really need nothing installed?**  
A: Correct. Just open the HTML file in a modern browser.

**Q: How much data can I store now?**  
A: With **OPFS**, capacity is significantly higher than before — often hundreds of MB to several GB depending on your browser and device. The app shows real-time usage with a progress bar.

**Q: Why OPFS instead of IndexedDB?**  
A: OPFS offers better performance, larger practical limits, and is designed specifically for private, high-capacity file storage in the browser. It is now the recommended long-term backend.

**Q: Can I use it completely offline?**  
A: Yes — after the first load and API configuration, all chats, characters, and World Books work offline.

**Q: Is NSFW content supported?**  
A: Yes. Use a permissive model and consider the separate summarization API to avoid refusals on long contexts.

**Q: What happens if I update the HTML file?**  
A: Your data remains safe in browser storage (OPFS). Just replace the file.

**Q: Why is there a separate summarization API?**  
A: Long conversations can become expensive or hit content filters. A dedicated summarization model (often cheaper or uncensored) keeps memory efficient without affecting your main chat model.

**Q: How do I report bugs or request features?**  
A: Open an issue on the GitHub repository.

**Q: Can I run the AI completely locally without any cloud API?**  
A: Yes! In Settings, set **推理后端** to **浏览器本地 (WebLLM)**. The first time you do this, an important confirmation will appear. You choose and download either the 1B model (~850 MB) or 3B model (~2100 MB). After that, main chat generation runs 100% in your browser using WebGPU. No API Key or Endpoint is required for chat (the UI adapts automatically).

**Q: What are the requirements for local mode?**  
A: A modern browser with **WebGPU** support (Chrome or Edge latest versions recommended). The confirmation dialog will warn you about download size and recommend Wi-Fi. Note that summarization still uses the remote Summarization API you configure (this is intentional, so you can use a powerful remote model for memory while keeping chat private).

**Q: Why does it ask for confirmation and model choice when I switch to local?**  
A: This is by design. The app guarantees that **no WebLLM code is executed and no model is downloaded** until you explicitly confirm. Changing the backend type immediately shows the critical warning dialog (with exact sizes), and you must pick which of the two supported models (Llama-3.2-1B or 3B) to download.

**Q: Can I switch back to remote API later?**  
A: Yes, just change the Inference Backend back to "远程 API" in Settings. Your previous remote configuration is preserved.

---

## 🔄 Version History Highlights

- **Latest**: Added **Browser Local Inference (WebLLM)**. New "推理后端" option in Settings. Users switching to "浏览器本地 (WebLLM)" immediately see a mandatory confirmation dialog with download size warning and must explicitly choose Llama-3.2-1B (~850MB) or 3B (~2100MB) before any download. Strict lazy-loading: no WebLLM code or network request on page init. Includes progress modal. Summarization remains remote-configurable. Also improved low-power mode and other refinements.
- Previous: Switched primary storage to **OPFS** for superior capacity and performance. Added New Chat Character Picker modal. Refined summary manager, mobile layouts, and World Book editor. Default summarization model updated to `deepseek-v4-flash`.
- Older: IndexedDB storage, Summary Manager with history & custom range, separate summarization API, World Info token budget, full prompt viewer, major mobile UI fixes.

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
Now with optional fully local inference via WebLLM (lazy-loaded, user-confirmed) + OPFS storage.

---

*Last updated: 2026-06*
