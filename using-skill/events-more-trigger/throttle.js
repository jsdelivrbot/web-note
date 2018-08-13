/*
 * @File: throttle.js
 * @Project: events-more-trigger
 * @File Created: Friday, 10th August 2018 2:07:45 pm
 * @Author: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com)
 * -----
 * @Last Modified: Friday, 10th August 2018 2:07:51 pm
 * @Modified By: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com>)
 * -----
 * @Copyright <<projectCreationYear>> - 2018 bairong, bairong
 * @fighting: code is far away from bug with the animal protecting
 *  ┏┓      ┏┓
 *  ┏┛┻━━━┛┻┓ 
 *  |           |
 *  |     ━    |
 *  |  ┳┛ ┗┳ |
 *  |          |
 *  |     ┻   |
 *  |           |
 *  ┗━┓     ┏━┛
 *     |      | 神兽保佑
 *     |      | 代码无BUG！！！
 *     |      ┗━━━┓
 *     |            ┣┓
 *     |            ┏┛
 *     ┗┓┓ ┏━┳┓┏┛
 *      |┫┫   |┫┫
 *      ┗┻┛   ┗┻┛
 */


/**
 * ! 节流法
 * ? 控制执行频率
 */

function throttle (func, wait) {
  var timeout;
  var previous = 0;
  return function () {
    context = this;
    args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context,args);
      }, wait);
    }
  }
}
