"use strict";
const department = ["Administration", "Marketing", "Development", "Finance"]
const level = ["Junior", "Mid-Senior", "Senior"]
const allEmp =[];

const tax = 7.5 / 100;

const netSalary = salary => {
  return salary - (salary * tax)
};

const salary = ({ max, min }) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const limits = level => {
  switch (level) {
    case "Senior": return salary({ max: 2000, min: 1500 });
    case "Mid-Senior": return salary({ max: 1500, min: 1000 });
    case "Junior": return salary({ max: 1000, min: 500 });
    default: return salary({ max: 0, min: 0 });
  }
};


function employeeId(){
    return Math.floor(Math.random() * 10000);
    };

function Employee(fullName, department, level, image){

    this.employeeId = employeeId();
    this.name = fullName;
    this.department= department;
    this.level = level; 
    this.image = image;
    this.salary = netSalary(limits(level)); 
    allEmp.push(this);

}

Employee.prototype.fullsalary = function(){
    console.log(`${this.name} : ${this.salary} `);
    document.write( `
        <tr>
        <td>${this.employeeId}&nbsp;&nbsp;&nbsp;</td>
        <td>${this.name}&nbsp;&nbsp;&nbsp;</td>
        <td>${this.department}&nbsp;&nbsp;&nbsp;</td>
        <td>${this.level}&nbsp;&nbsp;&nbsp;</td>  \n <p>
        </tr>
        `
        )
    
}


const emp1 = new Employee("Ali Mohammad",department[1],level[2],"./ASAC.jpg");
const emp2 = new Employee("Omar Mohammad",department[0],level[0],"./ASAC.jpg");
const emp3 = new Employee("Zaid Rawajbeh",department[2],level[1],"./ASAC.jpg");
const emp4 = new Employee("Salah Rawajbeh",department[1],level[1],"./ASAC.jpg");
const emp5 = new Employee("Mohammad Rawajbeh",department[0],level[2],"./ASAC.jpg");
console.log(emp1);   
/* emp1.fullsalary(); */  

for(let i=0; i < allEmp.length; i++){
    allEmp[i].fullsalary();
}

