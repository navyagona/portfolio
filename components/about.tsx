"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Lightbulb, Rocket, Users } from "lucide-react"

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Certifications", value: "3" },
  { label: "Technologies", value: "15+" },
  { label: "CGPA", value: "7.5" },
]

const passions = [
  {
    icon: <Target size={20} />,
    title: "Problem Solving",
    desc: "Translating complex business problems into data-driven solutions with measurable impact.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Continuous Learning",
    desc: "Always exploring cutting-edge AI research, new frameworks, and emerging cloud technologies.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Building at Scale",
    desc: "Passionate about deploying ML models that serve real users through cloud-native architectures.",
  },
  {
    icon: <Users size={20} />,
    title: "Collaboration",
    desc: "Thrive in cross-functional teams where data insights fuel strategic decision-making.",
  },
]

export function About() {
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
    <section id="about" className="relative py-28" ref={sectionRef}>
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.17_180/0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">01.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        {/* Main content */}
        <div
          className={`flex flex-col gap-16 transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Bio text */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a{" "}
                <span className="font-medium text-foreground">
                  B.Tech Computer Science student
                </span>{" "}
                at Lovely Professional University with a deep passion for
                Artificial Intelligence, Machine Learning, and Cloud Computing.
                My journey in tech started with curiosity about how data can
                transform decision-making, and has evolved into building
                end-to-end AI systems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in crafting{" "}
                <span className="font-medium text-foreground">
                  intelligent, production-ready systems
                </span>{" "}
                -- from data preprocessing and feature engineering to model
                development, explainability, and cloud deployment. Whether it is
                predicting health risks with explainable AI or analyzing
                customer behavior patterns, I bring a holistic approach to every
                project.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond technical skills, I am driven by the belief that{" "}
                <span className="font-medium text-foreground">
                  technology should serve people
                </span>
                . I focus on creating solutions that are not just accurate but
                interpretable and actionable. My experience spans across Python,
                cloud platforms like AWS and Azure, and frameworks including
                TensorFlow, PyTorch, and PySpark.
              </p>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Generative AI",
                  "Cloud Computing",
                  "Data Engineering",
                  "Deep Learning",
                  "NLP",
                ].map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs font-medium text-primary"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.72_0.17_180/0.06)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <span className="font-mono text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* What drives me */}
          <div className="flex flex-col gap-8">
            <h3 className="font-mono text-lg font-semibold text-foreground">
              What Drives Me
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {passions.map((item, i) => (
                <div
                  key={item.title}
                  className={`group flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 transition-all duration-500 hover:border-primary/30 hover:bg-card ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-mono text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
