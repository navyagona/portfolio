"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Award, MapPin } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  location: string
  score: string
  scoreLabel: string
  period: string
  description: string
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech -- Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    score: "7.5",
    scoreLabel: "CGPA",
    period: "Aug 2023 -- Present",
    description:
      "Specializing in Data Science, Machine Learning, and Cloud Computing. Active participant in hackathons and coding competitions. Coursework includes Data Structures, Algorithms, DBMS, and AI.",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Sri Chaitanya Jr. College",
    location: "Andhra Pradesh, India",
    score: "95%",
    scoreLabel: "Score",
    period: "Completed",
    description:
      "Graduated with distinction in Mathematics, Physics, and Chemistry. Built a strong analytical foundation that fueled interest in computer science and data analytics.",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Sasi EM High School",
    location: "Andhra Pradesh, India",
    score: "100%",
    scoreLabel: "Score",
    period: "Completed",
    description:
      "Achieved a perfect score, demonstrating exceptional dedication and academic excellence. This early achievement established a lifelong commitment to rigorous learning.",
  },
]

export function Education() {
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
    <section id="education" className="relative py-28" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.72_0.17_180/0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">05.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-4xl">
            Education <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-border md:block" />

          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`group relative flex flex-col gap-6 md:flex-row md:gap-8 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="relative hidden flex-shrink-0 md:flex md:w-12 md:justify-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/30 bg-background transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_oklch(0.72_0.17_180/0.2)]">
                  <GraduationCap size={18} className="text-primary" />
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.72_0.17_180/0.06)]">
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-mono text-base font-bold text-foreground md:text-lg">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-primary">{edu.institution}</p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
                        {edu.period}
                      </span>
                      <div className="flex flex-col items-center rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5">
                        <span className="font-mono text-lg font-bold text-primary">
                          {edu.score}
                        </span>
                        <span className="font-mono text-[9px] uppercase text-muted-foreground">
                          {edu.scoreLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
