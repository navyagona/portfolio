import { jsPDF } from "jspdf";
import fs from "fs";

const doc = new jsPDF();
const pageWidth = doc.internal.pageSize.getWidth();
const margin = 20;
const contentWidth = pageWidth - margin * 2;
let y = 20;

function addLine(yPos) {
  doc.setDrawColor(0, 180, 160);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, pageWidth - margin, yPos);
}

function addSectionTitle(title) {
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(0, 150, 136);
  doc.text(title.toUpperCase(), margin, y);
  y += 2;
  addLine(y);
  y += 6;
}

// Header
doc.setFont("helvetica", "bold");
doc.setFontSize(22);
doc.setTextColor(30, 30, 30);
doc.text("GONA NAVYA RAMANI", pageWidth / 2, y, { align: "center" });
y += 8;

doc.setFont("helvetica", "normal");
doc.setFontSize(11);
doc.setTextColor(0, 150, 136);
doc.text("Data Scientist | ML Engineer | Cloud & GenAI Enthusiast", pageWidth / 2, y, { align: "center" });
y += 7;

doc.setFontSize(9);
doc.setTextColor(80, 80, 80);
doc.text("ramani04navya@gmail.com  |  linkedin.com/in/navyaramani  |  github.com/navyagona", pageWidth / 2, y, { align: "center" });
y += 4;
addLine(y);
y += 4;

// Objective
addSectionTitle("Career Objective");
doc.setFont("helvetica", "normal");
doc.setFontSize(10);
doc.setTextColor(50, 50, 50);
const objective = "To work as a Data Scientist or ML Engineer in a forward-thinking organization where I can apply advanced analytics, artificial intelligence, and cloud technologies to solve real-world challenges at scale and drive meaningful business outcomes.";
const objLines = doc.splitTextToSize(objective, contentWidth);
doc.text(objLines, margin, y);
y += objLines.length * 5;

// Education
addSectionTitle("Education");
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(30, 30, 30);
doc.text("B.Tech - Computer Science and Engineering", margin, y);
doc.setFont("helvetica", "normal");
doc.text("CGPA: 7.5", pageWidth - margin, y, { align: "right" });
y += 5;
doc.setFontSize(9);
doc.setTextColor(80, 80, 80);
doc.text("Lovely Professional University, Punjab, India | Aug 2023 - Present", margin, y);
y += 7;

doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(30, 30, 30);
doc.text("Intermediate (Class XII) - Sri Chaitanya Jr. College", margin, y);
doc.setFont("helvetica", "normal");
doc.text("Score: 95%", pageWidth - margin, y, { align: "right" });
y += 7;

doc.setFont("helvetica", "bold");
doc.text("Matriculation (Class X) - Sasi EM High School", margin, y);
doc.setFont("helvetica", "normal");
doc.text("Score: 100%", pageWidth - margin, y, { align: "right" });
y += 4;

// Skills
addSectionTitle("Technical Skills");
doc.setFontSize(9);
doc.setTextColor(50, 50, 50);

const skills = [
  ["Languages:", "Python, Java, JavaScript, SQL"],
  ["ML & AI:", "Scikit-Learn, TensorFlow, PyTorch, XGBoost, LSTM/RNNs"],
  ["Generative AI:", "LLMs, Prompt Engineering, AI Agents, Gemini API"],
  ["Cloud:", "AWS (EC2, Lambda, S3), Azure (ADF, ML), Databricks"],
  ["Data Eng:", "PySpark, ETL Pipelines, Delta Lake"],
  ["Tools:", "Git, Docker, Power BI, VS Code"],
];

skills.forEach(([label, value]) => {
  doc.setFont("helvetica", "bold");
  doc.text(label, margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(value, margin + 28, y);
  y += 5;
});

// Experience
addSectionTitle("Work Experience");
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(30, 30, 30);
doc.text("Business Analyst Intern - Futurense Technology", margin, y);
doc.setFont("helvetica", "normal");
doc.text("Jun 2025 - Aug 2025", pageWidth - margin, y, { align: "right" });
y += 6;

doc.setFontSize(9);
doc.setTextColor(50, 50, 50);
const expItems = [
  "Analyzed 5+ complex business datasets to derive actionable strategic insights",
  "Performed data cleaning, transformation, and feature engineering on multi-source datasets",
  "Identified customer behavior patterns improving marketing targeting strategies",
  "Collaborated with cross-functional teams presenting data findings through visualizations",
];
expItems.forEach((item) => {
  doc.text(`- ${item}`, margin + 2, y);
  y += 5;
});

// Projects
addSectionTitle("Featured Projects");
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(30, 30, 30);

const projects = [
  {
    name: "AI Health Prediction System",
    tech: "Python, AWS Lambda, EC2, Scikit-learn, SHAP, React",
    desc: "End-to-end ML pipeline with Random Forest classifier, SHAP explainability, and serverless AWS deployment for real-time health risk predictions."
  },
  {
    name: "Customer Churn Analysis",
    tech: "Python, NumPy, Pandas, Seaborn, Matplotlib",
    desc: "Analyzed 10,000+ telecom records to identify churn patterns. Created 15+ visualizations revealing hidden correlations for retention strategies."
  },
  {
    name: "Zomato Clone Application",
    tech: "Python, MySQL, Tkinter, OOP",
    desc: "Full desktop food ordering system with modern UI, secure MySQL backend, user authentication, and validated through 100+ simulated transactions."
  },
];

projects.forEach((proj) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  doc.text(proj.name, margin, y);
  y += 4;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(0, 150, 136);
  doc.text(proj.tech, margin, y);
  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(50, 50, 50);
  const descLines = doc.splitTextToSize(proj.desc, contentWidth);
  doc.text(descLines, margin, y);
  y += descLines.length * 4.5 + 4;
});

// Certifications
addSectionTitle("Certifications");
doc.setFontSize(9);
doc.setTextColor(50, 50, 50);
const certs = [
  "Professional Data Science - Oracle",
  "SQL (Intermediate) - HackerRank",
  "DP-900: Azure Data Fundamentals - Microsoft",
];
certs.forEach((cert) => {
  doc.text(`- ${cert}`, margin + 2, y);
  y += 5;
});

// Save
const buffer = doc.output("arraybuffer");
fs.writeFileSync("/vercel/share/v0-project/public/Navya_Ramani_Resume.pdf", Buffer.from(buffer));
console.log("Resume PDF generated successfully!");
