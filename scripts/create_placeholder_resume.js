const { jsPDF } = require("jspdf");
const fs = require("fs");

try {
  const doc = new jsPDF();
  doc.setFontSize(22);
  doc.text("Gona Navya Ramani", 20, 20);
  doc.setFontSize(14);
  doc.text("Data Scientist & ML Engineer", 20, 30);
  
  doc.setFontSize(12);
  doc.text("This is a placeholder for Navya Ramani's Resume.", 20, 50);
  doc.text("Please replace this file with the actual Navya_Ramani_Resume.pdf", 20, 60);
  
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync("public/Navya_Ramani_Resume.pdf", buffer);
  console.log("Placeholder resume created successfully in public/Navya_Ramani_Resume.pdf");
} catch (error) {
  console.error("Error creating PDF:", error);
  // Fallback: create a text file if jspdf fails in this environment
  fs.writeFileSync("public/Navya_Ramani_Resume.pdf", "Placeholder Resume Content. Please replace with actual PDF.");
  console.log("Fallback placeholder created (text file).");
}
