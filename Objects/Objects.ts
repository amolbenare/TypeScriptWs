
//Ways to create objects

// 1 . Using Object literals
let Person = {
    firstName: "Amol",
    lastName: "Benare",
    country:"India",
fullname: function(){return this.firstName +" "+ this.lastName}
};

//Person.age = 45;
//console.log(Person.age);
console.log(Person.fullname());

// 2. Using Object.create()

let person2 = Object.create(new Object())
person2.age = 45;
person2.empId = 3434;
person2.firstName = "Amol";
person2.lastName = "Benare";
person2.getDetails = function () {
    return "Age: "+this.age +"\n"+"Full name: "+ this.firstName + this.lastName;
}

console.log(person2.empId);
console.log(person2.getDetails());


// 3. Using 'new' Keyword
// Constructor method

function Person3(name, email){
    this.name  = name;
    this.email = email;
    this.age = 54;
};

let person31 = new Person3("Amol", "amol@sarvatra.in");
console.log(person31);
console.log(person31.age);

//3 . A function returns an object
function createPerson4(age, name, email, empId) {
    let fullname = name ;
    return{
        age,
        name,
        email,
        empId,
        fullname,
        isMinor(){return age<14}
    };
};

let person4 = createPerson4(45,"amol", "amol@sarvatra.in", 3443)
console.log(person4);
console.log(person4.isMinor())










