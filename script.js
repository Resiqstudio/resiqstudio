// =====================================
// ResIQ AI Assistant
// OpenRouter AI
// =====================================


const OPENROUTER_API_KEY = "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";



// AI Function

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
"You are ResIQ AI academic research assistant."

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



let output =
document.getElementById("output");



if(topic==""){

alert("Enter research topic");

return;

}



output.innerHTML =
"🤖 AI generating research...";




let result = await askAI(`


Create academic research proposal about:

${topic}



Include:

Research Title

Abstract

Introduction

Background Study

Literature Review

Objectives

Methodology

Questionnaire

Conclusion

References



`);



output.innerHTML =

`

<h2>ResIQ Research Report</h2>

<p>

${result.replace(/\n/g,"<br>")}

</p>

`;



}








// =====================================
// Research Correction Search
// =====================================


async function searchCorrection(){



let query =

document.getElementById("searchBox").value;



let output =

document.getElementById("output");



if(query==""){

alert("Enter correction");

return;

}



output.innerHTML =
"🤖 AI checking...";




let result = await askAI(`


You are a research editor.


Correct this:


${query}



Give:

1. Problems

2. Improved version

3. Suggestions



`);



output.innerHTML =

`

<h2>Research Correction</h2>


<p>

${result.replace(/\n/g,"<br>")}

</p>


`;



}





// =====================================
// Copy
// =====================================


function copyResearch(){


let text =

document.getElementById("output").innerText;


navigator.clipboard.writeText(text);


alert("Copied");

}





// =====================================
// PDF
// =====================================


function downloadPDF(){


const {jsPDF}=window.jspdf;


let pdf=new jsPDF();


let text=

document.getElementById("output").innerText;



pdf.text(text,10,10);


pdf.save("ResIQ.pdf");


}
