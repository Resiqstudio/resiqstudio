```javascript
// =====================================
// ResIQ Research Assistant
// =====================================

let currentResearch = "";


// =====================================
// Generate Research
// =====================================

function generateResearch(){

let topic = document.getElementById("topic").value;

let output = document.getElementById("output");

let loading = document.getElementById("loading");

if(topic.trim() === ""){

alert("Enter research topic");

return;

}

loading.style.display = "block";

output.innerHTML = "";

loading.style.display = "none";

// show result immediately

output.innerHTML = currentResearch;
currentResearch = `

Research Title

A Study on ${topic}


Abstract

This research focuses on ${topic}. The study aims to investigate important factors, analyze available evidence, and provide useful academic insights.


Introduction

${topic} is an important area of research. Understanding its impact can help researchers, students, and policymakers make informed decisions.


Background of Study

Previous studies indicate that ${topic} plays a significant role in modern research and practice.


Literature Review

Various authors have examined ${topic} from different perspectives and identified several research gaps.


Aim

To study and evaluate ${topic}.


Objectives

1. To understand ${topic}
2. To identify key factors
3. To evaluate outcomes
4. To suggest improvements


Research Questions

1. What is ${topic}?
2. What factors influence ${topic}?
3. What are the major challenges?
4. What improvements can be recommended?


Methodology

Research Design:
Descriptive Study

Sample Size:
100 Participants

Data Collection:
Questionnaire Survey

Data Analysis:
Statistical Analysis


Questionnaire

1. Age
2. Gender
3. Education
4. Occupation
5. Awareness of ${topic}
6. Experience with ${topic}
7. Benefits observed
8. Challenges faced
9. Satisfaction level
10. Suggestions
11. Future expectations
12. Usage frequency
13. Accessibility
14. Reliability
15. Additional comments


Conclusion

The study provides valuable insights into ${topic} and highlights opportunities for future research.


References

APA/Vancouver style references should be added from authentic sources.

`;

output.innerHTML =
currentResearch.replace(/\n/g,"<br>");

},1500);

}


// =====================================
// Research Correction Search
// =====================================

function searchCorrection(){

let query =
document.getElementById("searchBox").value.toLowerCase();

let output =
document.getElementById("output");

if(query.trim() === ""){

alert("Enter correction request");

return;

}

output.innerHTML =
"<h2>AI Analyzing...</h2>";

setTimeout(() => {

let answer = "";

if(query.includes("title")){

answer = `
<h2>Title Correction</h2>
<p>
Make the title specific, concise, and include key variables.
</p>
`;

}

else if(query.includes("abstract")){

answer = `
<h2>Abstract Improvement</h2>
<p>
Include Background, Objectives, Methods, Results, and Conclusion.
</p>
`;

}

else if(query.includes("methodology")){

answer = `
<h2>Methodology Improvement</h2>
<p>
Add study design, sample size, sampling method, and statistical analysis.
</p>
`;

}

else if(query.includes("grammar")){

answer = `
<h2>Grammar Correction</h2>
<p>
Improve sentence structure, clarity, punctuation, and academic tone.
</p>
`;

}

else{

answer = `
<h2>Research Suggestion</h2>
<p>
Review objectives, methodology, literature review, and references.
</p>
`;

}

output.innerHTML = answer;

},1000);

}


// =====================================
// Copy Research
// =====================================

function copyResearch(){

let text =
document.getElementById("output").innerText;

navigator.clipboard.writeText(text);

alert("Copied Successfully");

}


// =====================================
// Download PDF
// =====================================

function downloadPDF(){

const { jsPDF } = window.jspdf;

let pdf = new jsPDF();

let text =
document.getElementById("output").innerText;

let lines =
pdf.splitTextToSize(text,180);

pdf.text(lines,10,10);

pdf.save("ResIQ_Research_Report.pdf");

}
```
