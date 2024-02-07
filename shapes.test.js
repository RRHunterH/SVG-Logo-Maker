const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Circle render method', () => {
  const shape = new Circle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Square render method', () => {
  const shape = new Square();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});
