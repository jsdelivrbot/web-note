/*
 * @File: promise.js
 * @Project: 1
 * @File Created: Wednesday, 1st August 2018 11:10:49 pm
 * @Author: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com)
 * -----
 * @Last Modified: Thursday, 2nd August 2018 12:13:29 am
 * @Modified By: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com>)
 * -----
 * @Copyright <<projectCreationYear>> - 2018 bairong, bairong
 * @fighting: code is far away from bug with the animal protecting
 *  ┏┓　 ┏┓
 * ┏┛┻━━━┛┻┓
 * ┃　　　　　　┃   
 * ┃　 ━　 ━　  ┃     
 * ┃　┳┛　┗┳　 ┃      
 * ┃　　　　　　　┃   
 * ┃　　　┻　　　┃    
 * ┃　　　　　　　┃   
 * ┗━┓　　　 ┏━┛       
 * 　　┃　　　┃ 护码神兽
 * 　　┃　　　┃ 代码零BUG！
 * 　　┃　　　┗━━━┓   
 * 　　┃　　　　　　　┣┓
 * 　　┃　　　　　　　┏┛━ ━
 * 　　┗┓┓┏━┳┓┏┛  ━    
 * 　　　┃┫┫　┃┫┫     
 * 　　　┗┻┛　┗┻┛     
 */

 /**
  * 
const timeout = (ms = 0) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});
const ajax1 = () => timeout(1000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(1000).then(() => {
  console.log('3');
  return 3;
});

// 分别采用 ES5 ES6 实现 ? 执行结果：1 2 3 done [1, 2, 3]
  */


const timeout = (ms = 0) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

/**
 * TODO 合并ajax,返回数据顺序集合
 * ? ES6
 * ? ES5
 */

const mergeAjax = (ajaxArray) => {
  /**
  * ! ES6 
  */

  // ? async await
  return new Promise((resolve, reject) => {
    const result = [];
    (async () => {
      try {
        for (let item of ajaxArray) {
          if (typeof item === "function") {
            const val = await item();
            result.push(val);
          } else {
            result.push(item);
          }
        };
        resolve(result);
      }
      catch (err) {
        console.error(err);
        reject(error);
      }
      
    })();
  });

  // 嵌套调用
  // for (let item of ajaxArray) {
  //   if (typeof item === 'function') {
  //     item().then(val => {

  //     })
  //   }
  // }

  /**
   * ! ES5
   */
  
}

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(2000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});


mergeAjax([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data);
});

// ? 执行结果：1 2 3 done [1, 2, 3]
