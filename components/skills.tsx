"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code2,
  Brain,
  Sparkles,
  Cloud,
  Database,
  Wrench,
} from "lucide-react"
import type { ReactNode } from "react"

interface SkillCategory {
  title: string
  icon: ReactNode
  color: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    color: "oklch(0.72 0.17 180)",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 65 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain size={20} />,
    color: "oklch(0.72 0.17 180)",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 72 },
      { name: "XGBoost", level: 80 },
      { name: "LSTM / RNNs", level: 70 },
    ],
  },
  {
    title: "Generative AI",
    icon: <Sparkles size={20} />,
    color: "oklch(0.72 0.17 180)",
    skills: [
      { name: "LLMs", level: 78 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Agents", level: 72 },
      { name: "Gemini API", level: 75 },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud size={20} />,
    color: "oklch(0.72 0.17 180)",
    skills: [
      { name: "AWS (EC2, Lambda, S3)", level: 78 },
      { name: "Azure (ADF, ML)", level: 75 },
      { name: "Databricks", level: 70 },
    ],
  },
  {
    title: "Data Engineering",
    icon: <Database size={20} />,
    color: "oklch(0.72 0.17 180)",
    skills: [
      { name: "PySpark", level: 80 },
      { name: "ETL Pipelines", level: 82 },
      { name: "Delta Lake", level: 68 },
    ],
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={20} />,
    color: "oklch(0.72 0.17 180)",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 72 },
      { name: "Power BI", level: 78 },
      { name: "VS Code", level: 90 },
    ],
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-28" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.72_0.17_180/0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">02.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-4xl">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="max-w-lg text-muted-foreground">
            A comprehensive toolkit spanning from core programming to advanced
            AI and cloud technologies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.72_0.17_180/0.06)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + catIdx * 80}ms` }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(250px circle at top right, oklch(0.72 0.17 180 / 0.08), transparent 70%)"
                }}
              />

              <div className="relative flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_oklch(0.72_0.17_180/0.15)]">
                    {category.icon}
                  </div>
                  <h3 className="font-mono text-sm font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-primary/70">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary/60 transition-all duration-1000 ease-out group-hover:bg-primary"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${400 + catIdx * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
