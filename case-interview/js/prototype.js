/**
 * 原型链
 */

Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function foo () {}
var ibtool = new foo();
console.log(ibtool.a); // a, ibtool.__proto__.__proto__ === Object.prototype