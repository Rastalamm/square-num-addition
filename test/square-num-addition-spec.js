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
    var result = squares.squareFunc(9)

    result.should.equal(6);
  });
  it('should return false from prime numbers', function () {
    var result = squares.squareFunc(7)
    result.should.be.false;

  });
});