export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose prose-invert prose-lg max-w-none">
          {children}
        </article>
      </div>
    </div>
  )
}