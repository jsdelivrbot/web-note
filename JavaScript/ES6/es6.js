/*
 * ES6 新特性简介（2015）
 * 
 * createDate: 2017/07/12
 * author: NARUTOne
 * 
 * */

//1、ES6中的默认参数

//ES5
function log(x, y) {
  if (typeof y === 'undefined') {
	  y = 'World';
	}
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

//ES6
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello