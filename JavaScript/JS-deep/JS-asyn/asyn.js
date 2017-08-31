/**
 * JS 异步编程
 * @author NARUTOne
 * @date 2017/08/31
 */

// 回调函数 示例

var fn = function(callback) {
    // do something here
    ...
    callback.apply(this, this.arguments);
}
 
var mycallback = function(parameter) {
    // do someting in customer callback
}
 
// call the fn with callback as parameter
fn(mycallback);

// 异步 示例

setTimeout(function(){
    console.log("this will be exectued after 1 second!");
},1000);


