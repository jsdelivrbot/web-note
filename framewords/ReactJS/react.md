### Welcome to use ReactJS

- [ReactJS](https://facebook.github.io/react/)
- [React-router](https://github.com/ReactTraining/react-router)
- [关于react-router的几种配置方式](https://segmentfault.com/a/1190000010318444)
- [react-router2.x 学习笔记](http://www.cnblogs.com/chenliyang/p/6547825.html)

## react

![](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/react/react-life.png)

### 组件通信

![](https://raw.githubusercontent.com/NARUTOne/resources-github/master/imgs/react/react-connect.jpg)

## redux

createStore方法的一个简单实现，可以了解一下 Store 是怎么生成的。
```js
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};
```

### 小记

- [ReactJS 技术栈学习小记](https://github.com/iuap-design/blog/issues/178)