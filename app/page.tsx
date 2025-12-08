'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-20 bg-bg relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">
              Crafted for everyone who uses AI regularly.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">🤏</div>
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">Compact & always at hand</h4>
                <p className="text-muted text-lg leading-relaxed">
                  Tiny footprint means it fits anywhere on your desk. Multitask freely — eat, write, read — while your AI assistant is just a tap away.
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">⌨️</div>
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">Mechanical perfection</h4>
                <p className="text-muted text-lg leading-relaxed">
                  Satisfying mechanical switches deliver that perfect click. Every keystroke feels intentional, keeping you in the flow.
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">🔋</div>
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">Wireless & efficient</h4>
                <p className="text-muted text-lg leading-relaxed">
                  USB rechargeable with long battery life. Connect via Bluetooth or 2.4GHz dongle. Cable-free workspace, zero compromises.
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">✨</div>
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">Sleek developer aesthetic</h4>
                <p className="text-muted text-lg leading-relaxed">
                  Clean design that looks at home on any developer desk. Transparent keycaps with custom printed icons add a personal touch.
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">⚙️</div>
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">Browser-based setup</h4>
                <p className="text-muted text-lg leading-relaxed">
                  Configure directly from your browser via sayodevice.com. No software installation. Once set up, it just works.
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:from-white/[0.08] hover:to-white/[0.02] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">🧠</div>
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">6-key muscle memory</h4>
                <p className="text-muted text-lg leading-relaxed">
                  Perfect count for instant recall. No looking down, no thinking. Community presets for different apps and workflows included.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-bg">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
              About
            </h2>
            <div className="p-10 rounded-3xl bg-card border border-line">
              <p className="text-lg text-muted leading-relaxed mb-8">
                VibeKeypad was created by <strong className="text-fg">Maksim Nagaev</strong>, a developer passionate about optimizing workflows and building tools that make coding with AI more intuitive and efficient.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <a
                  href="mailto:nagaev.maksim@gmail.com"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-line text-fg text-base font-semibold transition-transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  nagaev.maksim@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/nagaev-maksim/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-line text-fg text-base font-semibold transition-transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How Section */}
        <section id="how" className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
              Three simple steps.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">⚙️</div>
                <h3 className="text-2xl font-semibold mb-3">1. Remap keys</h3>
                <p className="text-muted text-lg">Use the web app at sayodevice.com. Start with proven configurations like Claude Code preset.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🖨️</div>
                <h3 className="text-2xl font-semibold mb-3">2. Print icons</h3>
                <p className="text-muted text-lg">Print custom icons with any printer and slide them into transparent keycaps.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold mb-3">3. Start using</h3>
                <p className="text-muted text-lg">That&apos;s it! Your keypad is ready. Yes, No, Stop — all at your fingertips.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Presets Section */}
        <section id="presets" className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
              Starter presets.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Claude Code Preset */}
              <div>
                <a href="docs/claude-code-preset.html" className="block text-2xl font-semibold mb-6 text-center hover:text-accent transition-colors">Claude Code</a>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">🤙🏻</div>
                    <p className="text-sm text-muted">Yes</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">⏭</div>
                    <p className="text-sm text-muted">Yes, all</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">🙅‍♂️</div>
                    <p className="text-sm text-muted">No</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">❌</div>
                    <p className="text-sm text-muted">Stop</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">👀</div>
                    <p className="text-sm text-muted">Full output</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">🎤</div>
                    <p className="text-sm text-muted">Dictate</p>
                  </div>
                </div>
              </div>

              {/* Cursor Agent Preset */}
              <div>
                <a href="docs/cursor-agent-preset.html" className="block text-2xl font-semibold mb-6 text-center hover:text-accent transition-colors">Cursor Agent</a>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="text-sm text-muted">Apply</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">⏭</div>
                    <p className="text-sm text-muted">Allowlist</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">🙅‍♂️</div>
                    <p className="text-sm text-muted">Skip</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">❌</div>
                    <p className="text-sm text-muted">Cancel</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">💭</div>
                    <p className="text-sm text-muted">Mode</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-line text-center">
                    <div className="text-4xl mb-2">🎤</div>
                    <p className="text-sm text-muted">Dictate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="text-center">
              <p className="text-muted mb-4">Have your own preset?</p>
              <a href="https://github.com/menemy/vibekeypad/discussions/categories/ideas" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-accent hover:underline font-medium">
                ➕ Submit a new preset
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get" className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-accent/15 to-accent-2/15 border border-line text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <a href="docs/getting-started.html" className="hover:text-accent transition-colors">DIY now.</a>
                {' '}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSesbYZSYzOf_xX1wBvbnHC49dl0MvYEUenVhKOgMxfFkeRIeA/viewform?usp=dialog" target="_blank" rel="noopener" className="hover:text-accent transition-colors">Buy later?</a>
              </h2>
              <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
                VibeKeypad is a DIY project for now. If you&apos;d like a ready-to-use kit, join the interest list.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSesbYZSYzOf_xX1wBvbnHC49dl0MvYEUenVhKOgMxfFkeRIeA/viewform?usp=dialog" target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-accent text-white text-base font-semibold transition-transform hover:scale-105">
                  🛎️ I want to buy (interest list)
                </a>
                <a href="docs/quick-start.html" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-line text-fg text-base font-semibold transition-transform hover:scale-105">
                  📖 Read the Build Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line py-8 text-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <p>
              © 2025 VibeKeypad
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}