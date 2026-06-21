// =====================================
// ResIQ AI Research Assistant
// OpenRouter AI Version
// =====================================


// ADD YOUR OPENROUTER API KEY

const OPENROUTER_API_KEY = "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";


let currentResearch = "";



// =====================================
// Loading Screen
// =====================================

function loadingTemplate(topic){

return `

<h1>ResIQ Research Report</h1>

<h2>${topic}</h2>


<p>

🤖 AI is generating your research...

<br><br>

✓ Research Titles

<br>

✓ Abstract

<br>

✓ Introduction

<br>

✓ Literature Review

<br>

✓ Methodology

<br>

✓ Questionnaire

<br>

✓ References

</p>

`;

}




// =====================================
// AI CONNECTION
// =====================================


async function askAI(prompt){


let response = await fetch(

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

role:"system",

content:

"You are ResIQ AI, an expert academic research assistant. Give accurate scientific answers."

},


{


role:"user",

content:prompt


}


]


})


}


);



let data = await response.json();



console.log(data);



if(data.error){

return "AI Error: " + data.error.message;

}



return data.choices[0].message.content;



}








// =====================================
// Generate Research
// =====================================


async function generateResearch(){



let topic =

document.getElementById("topic").value;



if(topic.trim()==""){


alert("Enter research topic");

return;

}




let output =

document.getElementById("output");



output.innerHTML =

loadingTemplate(topic);



try{


let result = await askAI(`


Create a complete academic research proposal on:


${topic}



Include:


1. Research Title Suggestions


2. Abstract


3. Introduction


4. Background of Study


5. Literature Review


6. Aim


7. Objectives


8. Research Questions


9. Methodology


10. Questionnaire (15 questions)


11. Expected Outcomes


12. Conclusion


13. References


14. Information Sources


Write professional academic content.


`);




currentResearch=result;



output.innerHTML=


`

<h1>
ResIQ Research Report
</h1>


<div>

${result.replace(/\n/g,"<br>")}

</div>

`;



}


catch(error){


output.innerHTML=

"Error: "+error;


}



}







// =====================================
// Research Correction Search
// =====================================


async function searchCorrection(){



let query =

document.getElementById("searchBox").value;



if(query.trim()==""){


alert("Enter correction");

return;


}



let output =

document.getElementById("output");



output.innerHTML =

`

<h2>
🤖 AI Checking...
</h2>

`;





try{


let answer = await askAI(`


You are a research editor.


Correct and improve this research content:


${query}



Provide:


1. Problems found


2. Corrected version


3. Suggestions for improvement


Use academic writing style.



`);




output.innerHTML =


`

<h2>
Research Correction
</h2>


<p>

${answer.replace(/\n/g,"<br>")}

</p>


`;



}



catch(error){


output.innerHTML=

"Error: "+error;


}



}






// =====================================
// COPY
// =====================================


function copyResearch(){



let text =

document.getElementById("output").innerText;



navigator.clipboard.writeText(text);



alert("Copied successfully");



}







// =====================================
// PDF DOWNLOAD
// =====================================


function downloadPDF(){



const {jsPDF}=window.jspdf;



let pdf=new jsPDF();



let text =

document.getElementById("output").innerText;



let lines =

pdf.splitTextToSize(text,180);



pdf.text(lines,10,10);



pdf.save(

"ResIQ_Research_Report.pdf"

);



}
