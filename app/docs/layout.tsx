export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8">
          <a href="../index.html" className="inline-flex items-center gap-2 text-muted hover:text-fg transition-colors">
            <span>←</span>
            <span>VibeKeypad</span>
          </a>
        </nav>
        <article className="prose prose-invert prose-lg max-w-none">
          {children}
        </article>
      </div>
    </div>
  )
}