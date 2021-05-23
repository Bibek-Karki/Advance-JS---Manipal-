class Employee{
    constructor(ID, Name, Salary){
        this.id = ID;
        this.name = Name;
        this.salary = Salary;
    }

    printData(){
        document.write("<br>ID : " + this.id);
        document.write("<br>Name : " + this.name);
        document.write("<br>Salary : " + this.salary);
    }

    getAnnualSalary(){
        return this.salary*12;
    }

    //getter
    get AnnualSalary(){
        return this.getAnnualSalary();
    }
}