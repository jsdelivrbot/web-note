/**
 * String 类型
 * @author: NARUTOne
 * @date: 2017-09-06
 */

var str = 'hello world';

console.log(str.length); //11


/**
 * 字符方法
 */

//获取字符

var char = str.charAt(1); // 'e'

console.log(str[1]); // 'e', IE7+

//获取字符编码

var charCode = str.charCodeAt(1); // '101'

/**
 * 字符串操作
 */

//连接 concat()

var name = 'NARUTOne';

var concatStr = str.concat(name); // 'hello world NARUTOne'
var concatStr1 = str + name + '';

// 截取子字符串, slice, substring, substr

console.log(str.slice(3)); // 'lo world'
console.log(str.substring(3)); // 'lo world'
console.log(str.substr(3)); // 'lo world'

console.log(str.slice(3, 7)); // 'lo w'
console.log(str.substring(3, 7)); // 'lo w'
console.log(str.substr(3, 7)); // 'lo worl'

/**
 * 负数param
 * slice(a, b): a + str.length, b + str.length
 * substr(a, b): a + str.length, b => 0
 * substring(a, b): substring(0, 0)
 * 
 */


