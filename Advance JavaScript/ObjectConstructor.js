function Employee(ID, Name, Salary){
    this.id = ID;
    this.name = Name;
    this.salary = Salary;

    this.printData = function(){
        document.write("<br>ID : " + this.id);
        document.write("<br>Name : " + this.name);
        document.write("<br>Salary : " + this.salary);
    }
}