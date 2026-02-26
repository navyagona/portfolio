"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Download } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group font-mono text-xl font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">{"<"}</span>
          NR
          <span className="text-primary">{" />"}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 font-mono text-xs tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_var(--primary)/0.15]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun size={16} className="transition-transform duration-300 group-hover:rotate-45" />
              ) : (
                <Moon size={16} className="transition-transform duration-300 group-hover:-rotate-12" />
              )}
            </button>
          )}

          {/* Resume download */}
          <a
            href="/Navya_Ramani_Resume.pdf"
            download
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_var(--primary)/0.3] md:flex"
          >
            <Download size={14} />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:border-primary/50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:bg-card hover:text-primary"
              >
                <span className="h-1 w-1 rounded-full bg-primary" />
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="/Navya_Ramani_Resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-mono text-sm font-semibold text-primary-foreground"
            >
              <Download size={16} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
