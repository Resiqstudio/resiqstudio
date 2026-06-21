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


    setTimeout(() => {


        currentResearch = `


<h2>Research Title</h2>

A Study on ${topic}


<h2>Abstract</h2>

This research focuses on ${topic}. The study aims to investigate important factors, analyze available evidence, and provide useful academic insights.


<h2>Introduction</h2>

${topic} is an important area of research. Understanding its impact can help researchers, students, and policymakers make informed decisions.


<h2>Background of Study</h2>

Previous studies indicate that ${topic} plays a significant role in modern research and practice.


<h2>Literature Review</h2>

Various authors have examined ${topic} from different perspectives and identified several research gaps.


<h2>Aim</h2>

To study and evaluate ${topic}.


<h2>Objectives</h2>

1. To understand ${topic}<br>
2. To identify key factors<br>
3. To evaluate outcomes<br>
4. To suggest improvements


<h2>Research Questions</h2>

1. What is ${topic}?<br>
2. What factors influence ${topic}?<br>
3. What are the major challenges?<br>
4. What improvements can be recommended?


<h2>Methodology</h2>

Research Design: Descriptive Study<br><br>

Sample Size: 100 Participants<br><br>

Data Collection: Questionnaire Survey<br><br>

Data Analysis: Statistical Analysis


<h2>Questionnaire</h2>

1. Age<br>
2. Gender<br>
3. Education<br>
4. Occupation<br>
5. Awareness of ${topic}<br>
6. Experience with ${topic}<br>
7. Benefits observed<br>
8. Challenges faced<br>
9. Satisfaction level<br>
10. Suggestions


<h2>Conclusion</h2>

The study provides valuable insights into ${topic} and highlights opportunities for future research.


<h2>References</h2>

APA/Vancouver style references should be added from authentic sources.


`;


        output.innerHTML = currentResearch;


        loading.style.display = "none";


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

Make the title specific, concise, and include key variables.

`;

}


else if(query.includes("abstract")){


answer = `

<h2>Abstract Improvement</h2>

Include Background, Objectives, Methods, Results, and Conclusion.

`;

}


else if(query.includes("methodology")){


answer = `

<h2>Methodology Improvement</h2>

Add study design, sample size, sampling method, and statistical analysis.

`;

}


else if(query.includes("grammar")){


answer = `

<h2>Grammar Correction</h2>

Improve sentence structure, clarity, punctuation, and academic tone.

`;

}


else{


answer = `

<h2>Research Suggestion</h2>

Review objectives, methodology, literature review, and references.

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
