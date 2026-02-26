"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Phone } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ramani04navya@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-28" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.72_0.17_180/0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col items-center gap-4 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="font-mono text-sm text-primary">07.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-5xl">
            {"Let's Work "}
            <span className="text-primary">Together</span>
          </h2>
          <p className="max-w-md text-muted-foreground">
            {"I'm"} actively looking for opportunities in Data Science, Machine
            Learning, and AI. Feel free to reach out!
          </p>
        </div>

        <div
          className={`grid gap-6 transition-all delay-200 duration-700 md:grid-cols-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Email card */}
          <button
            onClick={handleCopyEmail}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.72_0.17_180/0.06)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_oklch(0.72_0.17_180/0.2)]">
              <Mail size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-xs text-muted-foreground">Email</p>
              <p className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                {copied ? "Copied to clipboard!" : "ramani04navya@gmail.com"}
              </p>
            </div>
            <span className="rounded-lg bg-primary/5 px-3 py-1 font-mono text-[10px] text-primary">
              Click to copy
            </span>
          </button>

          {/* LinkedIn card */}
          <a
            href="https://www.linkedin.com/in/navyaramani"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.72_0.17_180/0.06)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_oklch(0.72_0.17_180/0.2)]">
              <Linkedin size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-xs text-muted-foreground">
                LinkedIn
              </p>
              <p className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                navyaramani
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-lg bg-primary/5 px-3 py-1 font-mono text-[10px] text-primary">
              Open Profile
              <ArrowUpRight size={10} />
            </span>
          </a>

          {/* GitHub card */}
          <a
            href="https://github.com/navyagona"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.72_0.17_180/0.06)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_oklch(0.72_0.17_180/0.2)]">
              <Github size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-xs text-muted-foreground">GitHub</p>
              <p className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                navyagona
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-lg bg-primary/5 px-3 py-1 font-mono text-[10px] text-primary">
              View Repos
              <ArrowUpRight size={10} />
            </span>
          </a>
        </div>

        {/* Career objective */}
        <div
          className={`mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-8 text-center transition-all delay-400 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-xs text-primary uppercase tracking-wider">
            Career Objective
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            To work as a{" "}
            <span className="font-medium text-foreground">
              Data Scientist or ML Engineer
            </span>{" "}
            in a forward-thinking organization where I can apply advanced
            analytics, artificial intelligence, and cloud technologies to solve
            real-world challenges at scale and drive meaningful business outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
