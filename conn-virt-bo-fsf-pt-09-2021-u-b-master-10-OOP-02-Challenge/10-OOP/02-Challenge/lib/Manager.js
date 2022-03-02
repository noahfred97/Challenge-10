
const Employee = require("./Employee");

// Constructs the Manager
class Manager extends Employee{
    constructor (name, empID, email, officePhone) {
      super(name, empID, email)
        this.officePhone = officePhone; 
    }
    // returning officePhone value from input 
    getOfficePhone() {
        return this.officePhone;
    }

    // overrides employee Role
    getRole () {
        return "Manager";
    }
    
}
// to be exported 
module.exports = Manager; 