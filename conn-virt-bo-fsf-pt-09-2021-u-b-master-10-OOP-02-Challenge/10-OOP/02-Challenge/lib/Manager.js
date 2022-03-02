
const Employee = require("./Employee");

// Manager constructor 
class Manager extends Employee{
    constructor (name, empID, email, officePhone) {
      super(name, empID, email)
        this.officePhone = officePhone; 
    }
    // returning officePhone from input 
    getOfficePhone() {
        return this.officePhone;
    }

    // override employee Role
    getRole () {
        return "Manager";
    }
    
}
// to be exported 
module.exports = Manager; 