const Employee = require("./Employee");

// Intern constructor 
class Intern extends Employee{
    constructor (name, empID, email, school) {
      super(name, empID, email)
        this.school = school; 
    }
    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee Role 
    getRole () {
        return "Intern";
    }
    
}

// to be exported 
module.exports = Intern; 