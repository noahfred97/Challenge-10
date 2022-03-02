const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Noah2', 2, "email@email.email", 2585485);
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.empID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
  });