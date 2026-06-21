function generateResearch(){

let topic = document.getElementById("topic").value;

if(topic==""){
alert("Enter topic");
return;
}

document.getElementById("output").innerHTML =
`
<h2>Your Research Topic</h2>

<p>${topic}</p>

<h3>Abstract</h3>
<p>This is a sample research abstract about ${topic}.</p>

<h3>Introduction</h3>
<p>${topic} is an important area of study.</p>
`;

}
