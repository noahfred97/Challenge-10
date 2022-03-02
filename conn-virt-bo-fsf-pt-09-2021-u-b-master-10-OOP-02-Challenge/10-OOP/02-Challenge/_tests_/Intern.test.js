const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Noah3', 2, "email!!!!!", 56324);
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.empID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
  });