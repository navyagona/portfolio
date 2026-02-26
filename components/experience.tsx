"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, ArrowUpRight } from "lucide-react"

export function Experience() {
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
    <section id="experience" className="relative py-28" ref={sectionRef}>
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">04.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-4xl">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div
          className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_oklch(0.72_0.17_180/0.06)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.17 180 / 0.06), transparent 50%)"
            }}
          />

          <div className="relative flex flex-col gap-6 p-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase size={22} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-lg font-bold text-foreground md:text-xl">
                    Business Analyst Intern
                  </h3>
                  <p className="font-mono text-sm text-primary">
                    Futurense Technology
                  </p>
                </div>
              </div>
              <span className="rounded-lg bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary sm:self-start">
                Jun 2025 -- Aug 2025
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Contributed to data analytics initiatives as part of the Business
              Intelligence team. Focused on transforming raw business datasets
              into strategic insights through rigorous analysis, cleaning, and
              visualization techniques.
            </p>

            {/* Achievements */}
            <div className="flex flex-col gap-3">
              {[
                "Analyzed 5+ complex business datasets to derive actionable strategic insights for stakeholders",
                "Performed extensive data cleaning, transformation, and feature engineering on multi-source datasets",
                "Identified customer behavior patterns that contributed to improved marketing targeting strategies",
                "Collaborated with cross-functional teams to present data findings through clear visualizations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <ArrowUpRight
                    size={14}
                    className="mt-1 flex-shrink-0 text-primary"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills used */}
            <div className="flex flex-wrap gap-2">
              {[
                "Data Analysis",
                "Feature Engineering",
                "Python",
                "Pandas",
                "Data Visualization",
                "Business Intelligence",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
