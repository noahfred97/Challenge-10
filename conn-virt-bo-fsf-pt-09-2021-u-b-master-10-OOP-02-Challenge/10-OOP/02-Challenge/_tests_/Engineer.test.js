const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Noah2', 2, "noahfred97@gmail.com", 555555);
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.empID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
  });