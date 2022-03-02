const Employee = require("./Employee");

// Constructs the intern
class Intern extends Employee{
    constructor (name, empID, email, school) {
      super(name, empID, email)
        this.school = school; 
    }
    // Returns school from input
    getSchool () {
        return this.school;
    }

    // Overrides employee role
    getRole () {
        return "Intern";
    }
    
}

// to be exported 
module.exports = Intern; 