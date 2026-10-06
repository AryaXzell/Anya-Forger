# Anya Forger

> A feature-rich WhatsApp automation bot built with Node.js and Baileys, with AI tools, media utilities, games, group management, and a modular plugin system.

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-CommonJS-F7DF1E?logo=javascript&logoColor=black)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Multi--Device-25D366?logo=whatsapp&logoColor=white)

Anya Forger is a personal, multi-purpose WhatsApp bot designed around a simple idea: keep common automation, utilities, media tools, games, and group controls in one extensible codebase.

The bot uses the WhatsApp Web Multi-Device protocol through [Baileys](https://github.com/WhiskeySockets/Baileys), supports pairing-code authentication, and organizes functionality across command handlers, plugins, helper libraries, and JSON-based game data.

> **Note:** This project is not affiliated with or endorsed by WhatsApp, Meta, Spy × Family, or its respective rights holders. Use the bot responsibly and comply with the platform's terms and applicable laws.

## Features

### WhatsApp & Core
- Multi-Device WhatsApp connection through Baileys
- Pairing-code authentication
- Automatic reconnection
- Local multi-file session storage
- Message parsing and command routing
- Sticker, media, album, and status utilities
- Owner-only administrative commands

### AI & Image Tools
- Multiple AI-related commands and integrations
- Gemini and other AI utilities
- OCR and image-processing commands
- Image transformation utilities such as anime/real-style conversion, blur, and background manipulation

### Media & Downloads
- YouTube search and media downloads
- TikTok, Instagram, Facebook, CapCut, SnackVideo, MediaFire, Google Drive, and Git repository utilities
- Audio extraction and playback helpers
- Sticker conversion and media processing

### Audio & Conversion
- Audio filters and voice effects
- Bass, deep, earrape, fast, slow, robot, reverse, tupai, and other effects
- Media-to-sticker helpers with EXIF metadata support
- FFmpeg-based media processing

### Games
Game content is stored separately as JSON datasets, making it easy to expand without rewriting the core bot.

Included datasets include:
- Asah Otak
- Family 100
- Susun Kata
- Tebak Bendera
- Tebak Gambar
- Tebak Kata
- Tebak Kimia

### Group Management
- Kick, promote, demote, tag, and mention utilities
- Group open/close controls
- Group profile management
- Anti-link and anti-spam utilities
- WhatsApp link detection and moderation

### Plugin System
The bot includes a simple owner-controlled plugin manager:

- `.addplugin` — add a JavaScript plugin from a replied message
- `.delplugin` — remove a plugin
- `.listplugin` — list installed plugins
- `.getplugin` — read a plugin's source

Plugins are loaded as JavaScript code, so only install code you fully trust.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| Node.js | Runtime |
| JavaScript / CommonJS | Application code |
| Baileys | WhatsApp Web Multi-Device connection |
| FFmpeg | Audio and media processing |
| Axios / node-fetch | HTTP requests and API integrations |
| Cheerio | Web scraping helpers |
| Jimp | Image processing |
| Pino / Chalk / Colors | Logging and terminal UI |
| JSON datasets | Game question storage |

## Project Structure

```text
Anya-Forger/
├── Game/                 # Game datasets in JSON format
├── Plugins/              # Dynamic JavaScript plugins
├── command/              # Standalone command modules
├── lib/                  # Helpers, scrapers, converters, uploaders, database utilities
├── LightSecret.js        # Main command/event handler
├── config.js             # Bot and service configuration
├── gc.js                 # Group participant event handler
├── index.js               # Application entry point and WhatsApp connection
├── menu.js                # Command menu definitions
└── package.json           # Project metadata and dependencies
```

## Requirements

- Node.js **20.0.0 or newer**
- npm
- A WhatsApp account for the bot session
- Internet access for external APIs and media services
- FFmpeg installed and available in `PATH` for commands that execute the `ffmpeg` binary

Baileys currently requires Node.js 20 or newer, so older Node versions are not recommended.

## Installation

Clone the repository:

```bash
git clone https://github.com/AryaXzell/Anya-Forger.git
cd Anya-Forger
```

Install dependencies:

```bash
npm install
```

Configure the bot:

```bash
nano config.js
```

At minimum, review the owner/bot settings, feature toggles, API configuration, and other service credentials before running the bot.

Start the bot:

```bash
npm start
```

## Pairing the WhatsApp Account

On the first run, the bot uses **pairing-code authentication** instead of a QR code.

1. Start the bot with `npm start`.
2. Enter the WhatsApp phone number requested by the terminal.
3. Copy the pairing code printed by the bot.
4. In WhatsApp, open **Linked Devices** and use the phone-number linking option.
5. Complete the linking process.
6. The authentication state will be stored locally in the `session/` directory.

Once the session exists, subsequent starts can reuse the saved credentials.

## Command Examples

The default menu exposes commands across several categories. Examples:

```text
.menu
.menuall

.ai <prompt>
.aiclaude <prompt>

.play <song or query>
.yts <query>

.tiktok <url>
.instagram <url>

.kick @user
.promote @user
.antilinkgc on

.addplugin example.js
.listplugin
.getplugin example.js
```

The exact command set can change as the source code evolves; `menu.js` remains the best reference for the current menu.

## Configuration

Most runtime settings live in `config.js`, including:

- Bot and owner identity
- Prefix and feature toggles
- Group moderation settings
- Social links and channel/group identifiers
- Payment configuration
- Third-party API configuration
- Pterodactyl/Linode-related settings
- Game timers and other runtime state

### Security recommendations

This repository currently contains configuration and credential-like values directly in source files. Before deploying or publishing your own instance:

- Remove or rotate any API keys, access tokens, phone numbers, and other secrets that have been exposed.
- Do not commit WhatsApp authentication data such as the `session/` directory.
- Prefer environment variables or a local, ignored configuration file for secrets.
- Restrict plugin management to trusted administrators.
- Never execute an untrusted plugin: plugins run as Node.js code with the bot process's permissions.

## Development Notes

The project intentionally keeps several responsibilities separated:

- `index.js` handles the WhatsApp connection and core socket utilities.
- `LightSecret.js` contains the main message/command handling logic.
- `command/` contains smaller standalone command modules.
- `Plugins/` provides runtime-extensible JavaScript plugins.
- `lib/` contains reusable helpers for media, scraping, uploads, conversion, databases, and message processing.
- `Game/` keeps game content outside the main command logic.

This makes the bot relatively easy to extend without putting every feature into a single file.

## Updating

After pulling source changes, reinstall dependencies when `package.json` changes:

```bash
git pull
npm install
npm start
```

Keep your `session/` data backed up securely if you are operating a long-lived instance.

## Troubleshooting

### The bot does not install

Check your Node.js version:

```bash
node --version
```

Use Node.js 20 or newer.

### Pairing does not work

Make sure the phone number is entered in the format expected by WhatsApp/Baileys and that the device you are linking from has a stable internet connection.

### Audio conversion fails

Make sure FFmpeg is installed and available from the shell:

```bash
ffmpeg -version
```

### A command returns an API error

Many features depend on third-party APIs or web services. Check the relevant command implementation and verify that the external service is still available.

## Credits

- [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys) — WhatsApp Web Multi-Device library
- [Node.js](https://nodejs.org/) — JavaScript runtime
- FFmpeg and the other open-source libraries used throughout the project

## License

The project metadata currently declares the **MIT** license in `package.json`. If this repository is intended for public redistribution, consider adding a root `LICENSE` file so the licensing terms are explicit to GitHub users.

---

Built and maintained by **AryaXzell**.
