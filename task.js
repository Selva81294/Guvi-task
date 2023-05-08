// Question 1: For a given JSON iterate over all for loops

// Coding:

// Given JSON:

let resume = [{
    "Name" : "Selva Kumaran",
    "Age" : 28,
    "Qualification" : ["10th","Diploma in ECE","BE in ECE"],
    "Experience" : "6 years in RR Donnelley",
    "Place" : "Maraimalai Nagar",
    "Known_Languages" : ["Tamil","English"]
}]

// For loop Coding:

for (i=0;i<resume.length;i++){
    console.log(resume[i]);
    }

// For of loop Coding:

for (i of resume){
    console.log(i.Known_Languages);
}

//For in loop coding:

for (i in resume){
    console.log(resume[i].Experience);
}

//For Each coding;

resume.forEach((data)=>console.log(data.Qualification))

//Question 2: Create your own resume data in JSON format

var ownResume = {
    "Name" : "Selva Kumaran",
    "Age" : 28,
    "Qualification" : ["10th","Diploma in ECE","BE in ECE"],
    "Experience" : "6 years in RR Donnelley",
    "Place" : "Maraimalai Nagar",
    "Known_Languages" : ["Tamil","English"]
}
console.log(ownResume);

