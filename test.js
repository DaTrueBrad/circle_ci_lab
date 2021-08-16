const {getGreeting, add} = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('basic addition', () => {expect(add(1,2)).toEqual(3)})