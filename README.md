# Anya Forger

> Feature-rich WhatsApp automation bot built with Node.js and Baileys, with AI tools, media utilities, games, group management, and a modular plugin system.

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-CommonJS-F7DF1E?logo=javascript&logoColor=black)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Multi--Device-25D366?logo=whatsapp&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

Anya Forger is a personal, multi-purpose WhatsApp bot designed to put common automation, utilities, media tools, games, and group controls into one extensible codebase.

The project uses the WhatsApp Web Multi-Device stack through [Baileys](https://github.com/WhiskeySockets/Baileys), supports pairing-code authentication, and separates functionality across the main handler, command modules, plugins, helper libraries, and JSON-based game data.

> **Disclaimer:** This project is not affiliated with or endorsed by WhatsApp, Meta, Spy x Family, or their respective rights holders. Use it responsibly and comply with WhatsApp's terms and applicable laws.

## ✨ Features

### WhatsApp & Core

- Multi-Device WhatsApp connection through Baileys
- Pairing-code authentication
- Automatic reconnect handling
- Local multi-file authentication state
- Message parsing and command routing
- Sticker, media, album, and status utilities
- Owner-only administration controls

### 🤖 AI & Image Tools

The bot includes a collection of AI and image-processing commands, including:

- AI chat integrations
- Gemini-related utilities
- OCR
- Image search helpers
- Image transformation utilities
- Anime/real-style transformations
- Face blur and other image effects

### 📥 Media & Downloaders

Media-related commands cover a broad range of sources and utilities, including:

- YouTube search and media downloads
- TikTok
- Instagram
- Facebook
- CapCut
- SnackVideo
- MediaFire
- Google Drive
- Git repository downloads
- Audio search and playback
- Sticker/media conversion

> Availability of downloader commands depends on the external APIs and services they use.

### 🎵 Audio & Conversion

FFmpeg-backed utilities provide audio effects and conversion features such as:

- Bass
- Deep
- Fast
- Slow
- Reverse
- Robot
- Tupai
- Earrape
- Other voice/audio filters
- Sticker conversion with EXIF metadata support

### 🎮 Games

Game content is stored separately as JSON datasets, so the question banks can be expanded without rewriting the entire bot.

Included datasets currently include:

- Asah Otak
- Family 100
- Susun Kata
- Tebak Bendera
- Tebak Gambar
- Tebak Kata
- Tebak Kimia

The main handler also maintains runtime state for several game modes.

### 🛡️ Group Management

The bot contains group-administration utilities such as:

- Kick / promote / demote
- Tag-all and mention helpers
- Group open/close controls
- Group profile management
- Anti-link moderation
- Anti-spam support
- Message deletion helpers
- Group participant event handling

### 🧩 Plugin System

Plugins live inside the `Plugins/` directory and can be managed by the owner through commands.

| Command | Purpose |
| --- | --- |
| `.addplugin <file>.js` | Add a JavaScript plugin from a replied message |
| `.delplugin <file>.js` | Remove a plugin |
| `.listplugin` | List installed plugins |
| `.getplugin <file>.js` | Read a plugin's source |

Plugins are JavaScript files loaded by the bot, so **only install code you fully trust**.

## 🧱 Tech Stack

| Technology | Purpose |
| --- | --- |
| Node.js | Runtime |
| JavaScript / CommonJS | Application code |
| Baileys | WhatsApp Web Multi-Device connection |
| FFmpeg | Audio and media processing |
| Axios / node-fetch | HTTP requests and API integrations |
| Cheerio | Scraping helpers |
| Jimp | Image processing |
| Pino / Chalk / Colors | Logging and terminal output |
| JSON | Game datasets and small local data stores |

## 📁 Project Structure

```text
Anya-Forger/
├── Game/                 # Game question datasets
├── Plugins/              # Dynamic JavaScript plugins
├── command/              # Standalone command modules
├── lib/                  # Helpers, scrapers, converters, uploaders, databases
├── LightSecret.js        # Main message and command handler
├── config.js             # Bot/runtime configuration
├── gc.js                 # Group participant event handler
├── index.js              # Application entry point and WhatsApp connection
├── menu.js               # Menu and command definitions
└── package.json          # Project metadata and dependencies
```

## ⚙️ Requirements

- Node.js 20 or newer is recommended
- npm
- A WhatsApp account for the bot session
- Internet access for external APIs and media services
- FFmpeg available in `PATH` for commands that invoke the `ffmpeg` binary

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/AryaXzell/Anya-Forger.git
cd Anya-Forger
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the bot

Review the values in:

```text
config.js
```

Pay special attention to owner settings, feature flags, external service configuration, and any credentials.

### 4. Start the bot

```bash
npm start
```

On the first run, the bot will request a phone number and generate a pairing code.

## 🔐 Pairing Code Login

Anya Forger is configured to use **pairing-code authentication** instead of a QR code.

1. Run `npm start`.
2. Enter the WhatsApp phone number requested by the terminal.
3. Copy the pairing code displayed by the bot.
4. In WhatsApp, open **Linked Devices** and use the phone-number linking flow.
5. Complete the linking process.
6. The authentication state is saved locally under `session/`.

Once the session exists, the bot can reuse the saved credentials on later launches.

## 💻 Usage Examples

Some examples of commands available in the current source:

```text
.menu
.menuall

.ai <prompt>
.aiclaude <prompt>

.play <query>
.yts <query>

.tiktok <url>

.kick @user
.promote @user
.antilinkgc

.addplugin example.js
.listplugin
.getplugin example.js
```

The exact command list can change as the project evolves. For the current menu, see [`menu.js`](./menu.js) and the command implementations in [`LightSecret.js`](./LightSecret.js), [`command/`](./command), and [`Plugins/`](./Plugins).

## 🔧 Configuration

Most runtime settings are centralized in `config.js`, including:

- Bot and owner identity
- Prefixes and feature toggles
- Group moderation settings
- Social/channel/group identifiers
- Payment configuration
- Third-party API settings
- Panel/infrastructure settings
- Game timers and runtime state

### 🔒 Security

Before deploying or publishing your own instance, review the repository carefully for secrets.

The current source contains credential-like and identifying configuration directly in JavaScript files. **Do not copy those values into a new deployment unchanged.** Rotate exposed API credentials where applicable and move secrets into environment variables or another ignored local configuration.

Also:

- Never commit the `session/` directory to a public repository.
- Keep API keys, access tokens, and private identifiers out of source control.
- Only allow trusted users to manage plugins.
- Treat every plugin as executable Node.js code with the same permissions as the bot process.

## 🛠️ Development

The codebase keeps several responsibilities separated:

- **`index.js`** — establishes the WhatsApp connection and shared socket utilities.
- **`LightSecret.js`** — handles incoming messages and the main command flow.
- **`command/`** — contains smaller standalone command modules.
- **`Plugins/`** — provides runtime-extensible JavaScript plugins.
- **`lib/`** — contains reusable helpers for media, scraping, uploads, conversion, databases, and message processing.
- **`Game/`** — stores game content separately from the main command logic.
- **`config.js`** — central runtime configuration.

This structure makes it possible to add or modify features without putting everything into one file.

## 🔄 Updating

After pulling new changes:

```bash
git pull
npm install
npm start
```

Run `npm install` again whenever `package.json` changes.

Keep the `session/` directory backed up securely if you operate a long-lived instance.

## 🩹 Troubleshooting

### Installation fails

Check your Node.js version:

```bash
node --version
npm --version
```

Then retry:

```bash
npm install
```

### Pairing does not work

Make sure:

- The phone number is entered in the expected format.
- WhatsApp is available on the linking device.
- The server has a stable internet connection.
- Existing authentication data is not corrupted.

### Audio conversion fails

Verify FFmpeg:

```bash
ffmpeg -version
```

If the command is not found, install FFmpeg and ensure it is available in your system `PATH`.

### A downloader or AI command fails

Many commands depend on third-party APIs, scrapers, or web services. If one stops working, check the relevant command implementation and whether its external service is still available.

## 📌 Credits

This project builds on a number of open-source projects and services, including:

- [Baileys](https://github.com/WhiskeySockets/Baileys)
- [Node.js](https://nodejs.org/)
- [FFmpeg](https://ffmpeg.org/)
- The npm packages and external APIs used throughout the project

Please respect the licenses and terms of the third-party software and services you use.

## 📄 License

The project currently declares the **MIT License** in `package.json`.

For a public repository, adding a root `LICENSE` file is recommended so GitHub and downstream users can see the complete license text directly.

---

Built and maintained by **AryaXzell**.
