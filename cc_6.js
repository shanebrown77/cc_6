// coding challenge 6

// base class employee/ step2
console.log(`---employee management system---`)
class Employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }
describe(){
    return `${this.name} is from the ${this.department} department.`
}

}

// adding subclass manager/ step3

class Manager extends Employee {
    constructor (name, department, teamSize) {
    super(name, department);
        this.teamSize = teamSize;
}

describe(){
return `manager name: ${this.name}, department: ${this.department}, team amount: ${this.teamSize}`;
}

}

// adding sample employees and managers/ step4

const em1 =  new Employee ("Ponky Wonky", "Marketing")       ;
const em2 =  new Employee ("Noah Yates", "Sales")            ;
const mgr1 = new Manager ("Mariano Salaso", "Cyber Security", 20);
const mgr2 = new Manager ("Rino THE Rhino", "Finace", 17)        ; 

// making company class/ step 5

class Company {
    constructor() {
        this.employees = [];
}

addEmployee(employee) {
    this.employees.push(employee);
}

listEmployees(){
    this.employees.forEach(element => {
        console.log(element.describe());
});

}
}

// adding employee and manager instances/ step 6

let myCompany = new Company();

myCompany.addEmployee(em1);
myCompany.addEmployee(em2);
myCompany.addEmployee(mgr1)
myCompany.addEmployee(mgr2)

myCompany.listEmployees();

