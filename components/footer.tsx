import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        {/* Logo */}
        <a href="#" className="font-mono text-lg font-bold text-foreground">
          <span className="text-primary">{"<"}</span>
          NR
          <span className="text-primary">{" />"}</span>
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/navyagona"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/navyaramani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="mailto:ramani04navya@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={14} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-border" />

        {/* Copyright */}
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Gona Navya Ramani
        </p>
      </div>
    </footer>
  )
}
