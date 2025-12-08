import Link from 'next/link'

export default function DocsIndex() {
  const guides = [
    {
      title: 'Quick Start',
      description: 'Get up and running in 5 minutes. Connect, configure keys, update firmware, and start coding with AI assistance.',
      href: '/docs/quick-start',
      icon: '⚡',
      featured: true,
    },
    {
      title: 'Claude Code Preset',
      description: 'Optimized configuration based on real-world usage. Accept, reject, stop, and voice input for maximum productivity.',
      href: '/docs/claude-code-preset',
      icon: '🤙🏻',
      featured: true,
    },
    {
      title: 'Cursor Agent Preset',
      description: 'Apply, skip, allowlist changes and switch modes. Optimized for Cursor Agent workflow.',
      href: '/docs/cursor-agent-preset',
      icon: '🖱️',
      featured: true,
    },
    {
      title: 'Getting Started',
      description: 'Build your VibeKeypad from scratch. Hardware requirements, assembly, firmware flashing, and editor configuration.',
      href: '/docs/getting-started',
      icon: '🚀',
    },
    {
      title: 'Enable Bluetooth',
      description: 'Configure wireless connectivity using SayoDevice. Connect your keypad via Bluetooth for cable-free coding.',
      href: '/docs/enable-bluetooth',
      icon: '📡',
    },
  ]

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Documentation</h1>
          <p className="text-xl text-muted">
            Everything you need to build, configure, and customize your VibeKeypad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{guide.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {guide.title}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {guide.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium">
                Read guide
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06z"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-2/10 border border-accent/20">
          <h2 className="text-2xl font-bold mb-3">Need help?</h2>
          <p className="text-muted text-lg mb-4">
            Can&apos;t find what you&apos;re looking for? Open an issue on GitHub.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/menemy/vibekeypad/issues"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-transform"
            >
              🐛 Report an Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}