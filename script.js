// ===============================
// ResIQ AI Research Assistant
// OpenRouter Version
// ===============================


// ADD YOUR OPENROUTER API KEY HERE

const OPENROUTER_API_KEY = "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";


let currentResearch = "";




// ===============================
// Loading Screen
// ===============================

function loadingTemplate(topic){


return `


<h1>
ResIQ Research Report
</h1>


<h2>
${topic}
</h2>


<p>

AI is generating your research...

<br><br>

✓ Research Titles

<br>

✓ Abstract

<br>

✓ Introduction

<br>

✓ Background Study

<br>

✓ Literature Review

<br>

✓ Methodology

<br>

✓ Sample Size Calculation

<br>

✓ Questionnaire

<br>

✓ Expected Outcomes

<br>

✓ References

</p>


`;

}






// ===============================
// OpenRouter AI Function
// ===============================


async function getAIResearch(topic){



const response = await fetch(

"https://openrouter.ai/api/v1/chat/completions",

{


method:"POST",



headers:{


"Authorization":

"Bearer " + OPENROUTER_API_KEY,


"Content-Type":

"application/json"


},




body:JSON.stringify({



model:"google/gemma-3-4b-it",




messages:[


{


role:"user",


content:`



You are ResIQ AI Research Assistant.



Create a detailed academic research proposal about:



${topic}




Generate:




1. Research Title Suggestions

Create 5 titles.



2. Abstract

Write detailed abstract with citations.



3. Introduction

Detailed explanation with citations.



4. Background of Study

Explain history, importance and current situation with citations.



5. Literature Review

Generate 10-12 studies.

Arrange newest to oldest.



For every study include:

Author name

Year

Article title

Main findings

Research gap




6. Research Aim



7. Research Objectives



8. Research Questions



9. Methodology


Include:


Research Design

Study Setting

Study Population

Sampling Technique

Sample Size Calculation


Use formula:


n = Z² × p × q / d²


Explain calculation step by step.



Inclusion Criteria

Exclusion Criteria

Data Collection Method

Data Analysis Method

Ethical Considerations




10. Questionnaire


Create 15 research questions.




11. Expected Outcomes




12. Conclusion




13. References


Include:


Author

Article Title

Journal Name

Year

DOI or URL



Do not create fake references.

If exact references are unavailable explain that they should be verified using PubMed or Google Scholar.




14. Information Sources


14. Information Sources and Research Basis

Write this section like an academic research paper.

Include:

- Databases searched
- Types of sources used
- How previous studies were selected
- How information supports the present study
- Research evidence used for Introduction, Background and Literature Review
- Limitations of available evidence


Write in this format:


Information Sources:

The present research proposal was developed based on a review of scientific literature related to ${topic}. Information was collected from peer-reviewed journal articles, research papers, systematic reviews, meta-analyses, clinical guidelines and academic databases.

The major sources considered include PubMed, Google Scholar, Scopus, Web of Science and other recognized scientific databases. Previous studies were analyzed to understand current knowledge, research gaps, methods used and major findings related to ${topic}.

The information from these sources was used to develop the introduction, background of study, literature review, methodology and expected outcomes of the proposed research.


Research Evidence:

Previous research findings were examined to identify important concepts, variables, and factors associated with ${topic}. Recent studies were prioritized to ensure that the proposal reflects current scientific understanding.


Limitations:

The available evidence may vary depending on study population, geographical area, research design and sample characteristics. Some studies may have limited accessibility due to publication restrictions. Further primary research may be required to validate findings in specific populations.





Write professional academic style.



`

}


]


})



}



);



const data = await response.json();



console.log(data);



if(data.error){


return "OpenRouter Error: " + data.error.message;


}




return data.choices[0].message.content;



}









// ===============================
// Generate Research
// ===============================


async function generateResearch(){



let topic = document.getElementById("topic").value;



if(topic.trim()==""){


alert("Enter research topic");


return;


}




let output = document.getElementById("output");



output.innerHTML = loadingTemplate(topic);




try{


let result = await getAIResearch(topic);



currentResearch = result;




output.innerHTML = `



<h1>
ResIQ Research Report
</h1>


<div>

${result.replace(/\n/g,"<br>")}

</div>


`;



}


catch(error){



output.innerHTML =

"Error: " + error;



}



}








// ===============================
// Copy
// ===============================


function copyResearch(){



let text =

document.getElementById("output").innerText;



navigator.clipboard.writeText(text);



alert("Research copied");



}









// ===============================
// PDF
// ===============================


function downloadPDF(){



const {jsPDF}=window.jspdf;



let pdf = new jsPDF();



let text =

document.getElementById("output").innerText;



let lines =

pdf.splitTextToSize(text,180);



pdf.text(lines,10,10);



pdf.save("ResIQ_Research_Report.pdf");



}