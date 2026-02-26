"use client"

import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Professional Data Science",
    issuer: "Oracle",
    color: "oklch(0.72 0.17 180)",
    description:
      "Comprehensive certification covering data science methodologies, statistical analysis, and machine learning fundamentals with Oracle ecosystem tools.",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    color: "oklch(0.72 0.17 180)",
    description:
      "Demonstrated proficiency in complex SQL queries, joins, subqueries, and database optimization techniques through competitive assessments.",
  },
  {
    title: "DP-900: Azure Data Fundamentals",
    issuer: "Microsoft",
    color: "oklch(0.72 0.17 180)",
    description:
      "Microsoft-certified knowledge of core data concepts, relational and non-relational data workloads, and Azure data services architecture.",
  },
]

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section className="relative py-28" ref={sectionRef}>
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">06.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-4xl">
            Certifications & <span className="text-primary">Awards</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.72_0.17_180/0.06)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-primary/30 transition-all duration-300 group-hover:bg-primary" />

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_oklch(0.72_0.17_180/0.15)]">
                    <Award size={20} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-mono text-sm font-bold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-primary">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
