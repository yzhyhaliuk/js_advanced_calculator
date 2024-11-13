'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.operate = (callback, number) => {
    calculator.result = callback(calculator.result, number);

    return calculator;
  };

  calculator.add = (a, b) => a + b;

  calculator.subtract = (a, b) => a - b;

  calculator.multiply = (a, b) => a * b;

  calculator.divide = (a, b) => a / b;

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
