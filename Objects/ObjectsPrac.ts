function Employee(empId, fName, lName, sal, isMarried, department) {
    this.empId = empId;
    this.fName = fName;
    this.lName = lName;
    this.sal = sal;
    this.isMarried = isMarried;
    this.department = department;
    this.departments = ["Testing", "Developer", "Implemention", "Production"];
    this.getDepartmentName = function(){
        console.log("Department Id: "+this.department);
        console.log("Department Name: "+this.departments[this.department]);        
        return this.departments[department]
    };
    this.getEmployeeClass = function(){
        switch (true) {
            case (this.sal<15000):                
                return "Class3";
            case (this.sal>=15000 && this.sal<30000):
                return "Class2";
            case (this.sal>=30000):
                return "Class1";        
            default:
                break;
        }
    };
}

let employeeAmol = new Employee(112, "Amol", "Benare", 15000, true, 1);
console.log(employeeAmol);
console.log(employeeAmol.getDepartmentName());
console.log(employeeAmol.getEmployeeClass());

//Fuction Overriding
employeeAmol.getEmployeeClass = function(){
    return "Testing Method Overriding"
}
console.log(employeeAmol.getEmployeeClass());

employeeAmol.departments = ["Testing", "Developer", "Implemention", "Production", "HR"];
console.log(employeeAmol.departments);
employeeAmol.departments.forEach(element => {
    console.log(element);
    
});

for (let index = 0; index < employeeAmol.departments.length; index++) {
    const element = employeeAmol.departments[index];
    console.log(element); 
}



