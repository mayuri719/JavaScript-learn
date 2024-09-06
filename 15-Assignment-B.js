class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_Rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "It", 40000, "wipro");
const emp_Vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log("============== All Employees===========================");
console.log("                                                                  ");

const arrayEmployee = [emp_anil, emp_radha, emp_Rishi, emp_Sonali, emp_Monika, emp_Vinayak, emp_Mahesh];
for (const element of arrayEmployee) {
    console.log(element.emp_id, element.emp_name, element.emp_dept, element.emp_salary, element.emp_company);
    // console.log(element);
}
console.log("                                                                  ");
console.log("============Employees who works in TCS=====================");
console.log("                                                                  ");

for (const element of arrayEmployee) {
    if (element.emp_company == "TCS") {
        console.log(`${element.emp_name}  having company ${element.emp_company} `);

    }
}
console.log("                                                                  ");
console.log("============Employees who works in TCS=====================");
console.log("                                                                  ");

for (const element of arrayEmployee) {
    if (element.emp_dept == "Finance") {
        console.log(`${element.emp_name} belongs to ${element.emp_dept} department`);

    }
}
console.log("                                                                  ");
console.log("============Employees who works in TCS=====================");
console.log("                                                                  ");

for (const element of arrayEmployee) {
    if (element.emp_name.startsWith("R")) {
        console.log(` Employee ${element.emp_name} strats with letter R`);
        
    }
}

console.log("                                                                  ");
console.log("============Employees whos salary >75000=====================");
console.log("                                                                  ");

for (const element of arrayEmployee) {
    if (element.emp_salary > 75000) {
        console.log(`${element.emp_name} having company ${element.emp_company} with salary ${element.emp_salary}`);
        
    }
}

console.log("                                                                  ");
console.log("============Employees whos salary >= 50000 and dept is IT=====================");
console.log("                                                                  ");
for (const element of arrayEmployee) {
    if (element.emp_salary >=50000 && element.emp_dept == "IT") {
        console.log(`${element.emp_id}  ${element.emp_name} having company ${element.emp_company} and belongs to ${element.emp_dept} department with salary ${element.emp_salary}`);
        
    }
}

console.log("                                                                  ");
console.log("============Employees who works in Infy=====================");
console.log("                                                                  ");

for (const element of arrayEmployee) {
    
    if (element.emp_company=="Infy") {
        console.log(`${element.emp_name} belongs to company ${element.emp_company}`);
        
    }
}

//Map() method usecases
console.log("                                                                  ");
console.log("============Map() method usecases=====================");
console.log("                                                                  ");
arrayEmployee.forEach( (employee) => {
    console.log(employee.emp_name);
})

console.log(`====== Transforming array of objects to array of employee names ===========`);
const employeeNames = arrayEmployee.map( (employee) => {
    return employee.emp_name;
})
console.log(employeeNames);

console.log(`====== Transforming array of objects to array of employee salary ===========`);
const employeeSalaries = arrayEmployee.map( (employee) => {
    return employee.emp_salary;
})
console.log(employeeSalaries);