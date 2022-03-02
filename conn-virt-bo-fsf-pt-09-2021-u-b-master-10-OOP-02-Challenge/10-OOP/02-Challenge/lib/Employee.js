class Employee {
    constructor (name, empID, email) {
        this.name = name;
        this.empID = empID;
        this.email = email;
    }
    // getting data from user input to prompts 
    getName () {
        return this.name;
    }

    getEmpID () {
        return this.empID;
    }   

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee'; 
    }
};


module.exports = Employee; 