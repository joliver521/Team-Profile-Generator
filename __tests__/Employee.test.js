const Employee = require('../lib/Employee');

test('Set name via constructor arguments', () => {
  const name = 'Jason';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
