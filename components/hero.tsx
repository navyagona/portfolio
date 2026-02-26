"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight, FileText } from "lucide-react"

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Cloud Enthusiast",
  "AI Developer",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      container.style.setProperty("--mouse-x", `${x}%`)
      container.style.setProperty("--mouse-y", `${y}%`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Ambient glow that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--primary) / 0.07, transparent 40%)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Large decorative rings */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-primary/5 lg:-right-20 lg:-top-20" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-primary/[0.03] lg:-right-12 lg:-top-12" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full border border-primary/[0.04]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 pt-32 pb-24 text-center">
        {/* Status badge */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-sm text-primary">
            Open to Opportunities
          </span>
        </div>

        {/* Name and tagline */}
        <div
          className={`flex flex-col items-center gap-5 transition-all delay-100 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Hello, I am
          </p>
          <h1 className="text-balance font-mono text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Gona Navya
            <br />
            <span className="text-primary">Ramani</span>
          </h1>

          {/* Rotating role */}
          <div className="flex items-center gap-3">
            <ChevronRight size={16} className="text-primary" />
            <span
              key={roleIndex}
              className="font-mono text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500 md:text-xl"
            >
              {roles[roleIndex]}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`max-w-2xl text-base leading-relaxed text-muted-foreground transition-all delay-300 duration-1000 md:text-lg ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Crafting intelligent systems with Machine Learning, Deep Learning, and
          Cloud technologies. Turning complex data into impactful, real-world
          solutions that drive innovation and business value.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-all delay-500 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 font-mono text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
          >
            View My Work
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="/Navya_Ramani_Resume.pdf"
            download
            className="group flex items-center gap-2.5 rounded-2xl border-2 border-primary/30 bg-primary/5 px-7 py-3.5 font-mono text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2.5 rounded-2xl border border-border bg-card px-7 py-3.5 font-mono text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/5"
          >
            Get in Touch
            <Mail size={14} />
          </a>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center gap-5 transition-all delay-700 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {[
            { href: "https://github.com/navyagona", icon: <Github size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/navyaramani", icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: "mailto:ramani04navya@gmail.com", icon: <Mail size={18} />, label: "Email" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
