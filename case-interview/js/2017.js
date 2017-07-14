// 2017 面试 js

/* 
 * n个随机不重复的整数，指定范围[2,32]
 * @param {name} 整数个数
 * @return {array} 返回数组，n非法，返回[]
 * */
function fn(n) {
	const arr = []
	const min = 2
	const max = 32
	n = parseInt(n)
	
	if (isNaN(n) || n < 0 || n > (max - min + 1)) {
		return []
	}
	
	for (let i = 0; i < n; i++) {
		const num = getRandomNumber(min, max)
		!isInArray(num, arr) ? arr.push(num) : i--
	}
	return arr
	
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	
	function isInArray(el, arr) {
		return arr.some(function (x) {
			return x === el
	  })
	}
}