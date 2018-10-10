let arrSample = ["Amol", "Suresh", "Ramesh", "Anil"];
console.log(arrSample);

//Traversing array
//Using for loop
console.log("\nUsing for loop ------------------------");
for(let i=0; i<arrSample.length;i++){
    console.log(arrSample[i]);    
}

//Using forEach loop
console.log("\nUsing forEach loop -------------------");

arrSample.forEach(element =>{
    console.log(element);    
})


//Replace element
arrSample[1] = "Mukesh";
console.log(arrSample);

//Push element in array
arrSample.push("Aniruddh")
console.log(arrSample);


