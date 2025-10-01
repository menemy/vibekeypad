# VibeKeypad

A 6-key DIY keypad for AI-assisted coding. Accept, reject, ask, redo and talk — without leaving the flow.

🌐 **Website**: [vibekeypad.com](https://vibekeypad.com)

## Features

- One-evening build — parts cost ≈ $10–15
- Presets for Claude/Cursor/Copilot (macOS/Windows)
- Printable 12×12 mm icon sheet for keycaps
- Open-source QMK/VIA configs
з- Wireless Bluetooth support

## Quick Start

1. Open [sayodevice.com](https://sayodevice.com/) in Chrome
2. Connect your device via USB
3. Configure 6 key combinations (or 10 with layers)
4. Print and install icon keycaps
5. Start coding!

📖 [Full documentation](https://vibekeypad.com/docs)

## Development

This is a Next.js static site with MDX documentation.

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Output will be in /out directory
```

## Project Structure

```
vibekeypad/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   └── docs/              # Documentation (MDX)
├── components/            # React components
│   ├── Navigation.tsx
│   └── HeroSection.tsx
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions for deployment
```

## Adding Documentation

Create new MDX files in `app/docs/[slug]/page.mdx`:

```mdx
# Your Guide Title

Content here with **markdown** formatting.

## Code examples

\`\`\`js
console.log('Hello VibeKeypad!')
\`\`\`
```

## Deployment

The site automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. Site deploys to your custom domain (configured via CNAME)

## License

- Code: MIT
- Icons: CC-BY-4.0

## Contributing

PRs welcome — presets, icons, docs, translations.

---

Made by Maksim "menemy" Nagaev • Toronto, CA

Tag your build: **#VibeKeypad**