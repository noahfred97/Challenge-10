const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Noah', 50, 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.empID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});