const Employee = require('../lib/Employee');

test('Set name via constructor arguments', () => {
    const name = 'Jason';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Set id via constructor argument', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('Set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Get name via getName()', () => {
    const testValue = 'Alice';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Get id via getId()', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.getId()).toBe(testValue);
});

test('Get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
    const testValue = 'Employee';
    const e = new Employee('Jason', 1, 'test@test.com');
    expect(e.getRole()).toBe(testValue);
});
