const Employee = require("./Employee");

// Engineer constructor 
class Engineer extends Employee{
    constructor (name, empID, email, github) {
        super(name,empID,email)
      
        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee Role 
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 