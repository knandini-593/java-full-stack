const roles = [

"Future Software Engineer",

"Java Developer",

"Frontend Developer",

"Continuous Learner",

"Problem Solver"

];

let index = 0;

function changeRole(){

document.getElementById("role").textContent =
roles[index];

index++;

if(index >= roles.length){
index = 0;
}

}

changeRole();

setInterval(changeRole,2500);

function welcomeMessage(){

alert(
"Welcome to K. Nandini's Professional Portfolio."
);

}

function portfolioAssistant(){

let question = prompt(
"Portfolio Assistant\n\nAsk about:\nSkills\nEducation\nCertificates\nHobbies"
);

if(question == null) return;

question = question.toLowerCase();

if(question.includes("skills")){

alert(
"Communication, C Programming, Java, HTML, CSS, JavaScript"
);

}

else if(question.includes("education")){

alert(
"10th Standard, Intermediate, B.Tech 3rd Year (Currently Pursuing)"
);

}

else if(question.includes("certificate")){

alert(
"NPTEL DBMS and NPTEL Java Programming"
);

}

else if(question.includes("hobbies")){

alert(
"Learning New Topics, Reading Books, Exploring Technologies"
);

}

else{

alert(
"Hello! I am K. Nandini's Portfolio Assistant."
);

}

}