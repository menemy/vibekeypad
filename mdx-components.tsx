import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-6 text-fg">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold tracking-tight mt-10 mb-4 text-fg">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3 text-fg">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4 text-muted">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-lg text-muted space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-lg text-muted space-y-2">{children}</ol>
    ),
    code: ({ children }) => (
      <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-accent">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card rounded-lg p-4 overflow-x-auto mb-4 font-mono text-sm">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-muted">{children}</blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    ...components,
  }
}