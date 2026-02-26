"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  highlights: string[]
  impact: string
  image: string
  github?: string
}

const projects: Project[] = [
  {
    title: "AI Health Prediction System",
    description: "End-to-End ML Pipeline with Cloud Deployment",
    longDescription:
      "A comprehensive machine learning system that predicts health risks using patient data. Features include automated data preprocessing, advanced feature engineering with SMOTE for class balancing, a Random Forest classifier with hyperparameter tuning, SHAP-based model explainability, and serverless deployment on AWS Lambda for real-time predictions. The system generates personalized health reports powered by AI insights.",
    tech: ["Python", "AWS Lambda", "EC2", "Scikit-learn", "SHAP", "React"],
    highlights: [
      "Built Random Forest model achieving high accuracy on imbalanced health data",
      "Implemented SMOTE oversampling and advanced feature engineering pipeline",
      "Deployed as serverless API on AWS Lambda for real-time inference",
      "Integrated SHAP explainability for transparent medical predictions",
      "Generated AI-powered personalized health risk assessment reports",
    ],
    impact: "Production-ready ML system with explainable AI for healthcare",
    image: "/images/project-health-ai.jpg",
    github: "https://github.com/navyagona",
  },
  {
    title: "Customer Churn Analysis",
    description: "Data-Driven Retention Strategy",
    longDescription:
      "An in-depth exploratory data analysis project focused on understanding customer churn patterns in the telecom industry. Analyzed over 10,000 customer records to identify key drivers of attrition including contract types, payment methods, and service usage patterns. Delivered actionable insights through compelling visualizations that informed targeted retention strategies.",
    tech: ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
    highlights: [
      "Analyzed 10,000+ telecom customer records for churn pattern identification",
      "Performed comprehensive EDA with statistical hypothesis testing",
      "Created 15+ visualizations revealing hidden churn correlations",
      "Identified top 5 churn predictors with feature importance analysis",
      "Delivered actionable retention strategy recommendations to stakeholders",
    ],
    impact: "Data-driven insights enabling targeted customer retention",
    image: "/images/project-churn.jpg",
    github: "https://github.com/navyagona",
  },
  {
    title: "Zomato Clone Application",
    description: "Full-Stack Desktop Food Ordering System",
    longDescription:
      "A complete desktop food ordering system built with Python and MySQL, featuring a modern Tkinter GUI. The application simulates real-world food ordering with secure backend data management, user authentication, menu browsing, cart management, and order processing. Validated through 100+ simulated transactions for reliability testing.",
    tech: ["Python", "MySQL", "Tkinter", "OOP"],
    highlights: [
      "Developed full desktop food ordering application with modern UI",
      "Built secure backend with MySQL for persistent data management",
      "Implemented user authentication and session management",
      "Designed intuitive menu browsing and cart management system",
      "Validated reliability through 100+ simulated transactions",
    ],
    impact: "Complete full-stack application demonstrating software engineering skills",
    image: "/images/project-zomato.jpg",
    github: "https://github.com/navyagona",
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-28" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.17_180/0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">03.</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-mono text-3xl font-bold text-foreground md:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-lg text-muted-foreground">
            Real-world projects showcasing end-to-end AI development, from data
            analysis to cloud deployment.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_oklch(0.72_0.17_180/0.06)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className={`grid gap-0 lg:grid-cols-5 ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                {/* Project image */}
                <div
                  className={`relative h-56 overflow-hidden lg:h-auto lg:col-span-2 ${
                    index % 2 !== 0 ? "lg:col-start-4" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40" />
                  {/* Project number overlay */}
                  <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                    <span className="font-mono text-5xl font-bold text-primary/20 lg:text-7xl">
                      {"0" + (index + 1)}
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div
                  className={`flex flex-col gap-5 p-6 lg:col-span-3 lg:p-8 ${
                    index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-xs text-primary">
                      {project.description}
                    </p>
                    <h3 className="font-mono text-xl font-bold text-foreground md:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.longDescription}
                  </p>

                  {/* Key highlights */}
                  <ul className="flex flex-col gap-2">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <ArrowUpRight
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-primary"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Impact + Link */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="rounded-lg bg-primary/5 px-4 py-2">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-mono font-semibold text-primary">
                          Impact:{" "}
                        </span>
                        {project.impact}
                      </p>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 font-mono text-xs font-semibold text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                      >
                        <Github size={14} />
                        <span>View Source</span>
                        <ExternalLink size={12} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
