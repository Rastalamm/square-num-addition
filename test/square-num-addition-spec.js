var chai = require('chai');
var should = chai.should();
var squares = require('../js/square-num-addition.js');

describe('Square Root Sum', function () {
  it('squareFunc should be a function', function () {
    squares.squareFunc.should.be.a('function');
  });
  it('The input should be a number', function () {
    var result = squares.squareFunc(9)
    result.should.be.a('number');
  });
  it('function should take the square root of the input and sum from 1 to that num', function () {
    var result = squares.squareFunc(3)
    result.should.equal(4.15);
  });
  it('should return false for not number', function () {
    squares.squareFunc('beans').should.be.false;
  });
});