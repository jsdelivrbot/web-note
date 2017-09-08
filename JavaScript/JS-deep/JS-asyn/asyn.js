/**
 * JS 异步编程
 * @author NARUTOne
 * @date 2017/08/31
 */

// 1、回调函数 示例

var fn = function(callback) {
    // do something here
    ...
    setTimeout(function() {
			callback.apply(this, this.arguments);
    }, 300)
}
 
var mycallback = function(parameter) {
    // do someting in customer callback
}
 
// call the fn with callback as parameter
fn(mycallback);

///2、setTimeout异步 示例

setTimeout(function(){
    console.log("this will be exectued after 1 second!");
},1000);

var start = new Date()
setTimeout(function(){
  var end = new Date()

  console.log(end - start)
},500)

while(new Date - start<1000){

}

// 3、类事件监听 采用 jquery

function f1(){
　setTimeout(function () {
　// f1的任务代码
　　f1.trigger('done');   //触发事件
　}, 1000);
}

f1.on('done', mycallback);
 

// promise , ES6

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});


var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( "Hello World" );
var p3 = Promise.reject( "Oops" );

Promise.race( [p1,p2,p3] )
.then( function(msg){
	console.log( msg );		// 42
} );

Promise.all( [p1,p2,p3] )
.catch( function(err){
	console.error( err );	// "Oops"
} );

Promise.all( [p1,p2] )
.then( function(msgs){
	console.log( msgs );	// [42,"Hello World"]
} );
