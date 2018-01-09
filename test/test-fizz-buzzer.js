// import chai, declare expect variable
const expect = require('chai').expect;

// import fizz-buzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our 'fizzBuzzer' function
describe('fizz-buzzer', function() {

  // test the normal case
  it('should return fizz-buzz for multiples of 15', function() {
    const fizzBuzz = [45, 75, 105];

    fizzBuzz.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('should return buzz for multiples of 5', function() {
    const buzz = [10, 25, 1025];

    buzz.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  it('should return fizz for multiples of 3', function() {
    const fizz = [3, 9, 81];

    fizz.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  it('should throw an error', function(){
    const badHombres = ['boy', 'person', 'non-person'];

    badHombres.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
