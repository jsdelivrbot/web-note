/**
 * Function 类型
 * @author  NARUTOne
 * @date  2017/08/31
 */


/**
 * Function 定义
 * @list 声明式
 * @list 表达式
 * @list Function构造式
 */

(() => {
	// 声明式
	
	function foo (a, b) { return a + b}

	// 表达式
	
	var foo = function (a, b) { return a + b}

	// 构造式
	
	var foo = new Function('a', 'b', 'return a + b')
})();

// 函数没有重载，覆盖前任;函数名 即 指针

(() => {
	function foo (a, b) {
		return a + b;
	}

	function foo (a, b) {
		return a * b;
	}

	foo(2, 3); // 6
})();

// 函数声明 提升， 函数表达式不提升

(() => {
	foo(2, 3); // 5
	foo1(2, 3); // error
	function foo (a, b) {
		return a + b;
	}
	var foo1 = function (a, b) {
		return a + b;
	}

})();