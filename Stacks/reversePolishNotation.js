/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6


Input  : <array>  tokens
Output : <int>

const OPERATORS = {
  '+' : (a, b) => a + b,
  '-' : (a, b) => a + b,
  '\' : (a, b) => a / b,
  '*' : (a, b) => a * b
}

function evalRPN (tokens)
  operatorStack = []
  operandStack = []
  return tokens.reduce(memo, oper, index)
    if (oper in OPERATORS)
      let right = operandStack.pop()
      let left = operandStack.pop()
      let result = OPERATORS[oper](left, right);
      memo += result
    else
      operandStack.push(oper)

    return memo;

*/

"use strict";

var OPERATORS = {
  '+' : (a, b) => a + b,
  '-' : (a, b) => a + b,
  '/' : (a, b) => a / b,
  '*' : (a, b) => a * b
}

var evalRPN = function (tokens) {
  return tokens.reduce(function(memo, oper){
    if (oper in OPERATORS) {
      var right = memo.pop()
      var left = memo.pop();
      var result = OPERATORS[oper](left, right);
      memo.push(Math.sign(result) < 0 ? Math.ceil(result) : Math.floor(result))
    } else {
      memo.push(Number(oper));
    }
    return memo;
  }, [])[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(['18'])); // 18
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22
