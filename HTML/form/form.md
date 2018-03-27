## form
> 一些 form 小记

### form submit
> http://david-chen-blog.logdown.com/posts/177766-how-forms-submit-when-pressing-enter

- 按下 Enter 时，如果 <form> 要触发 submit 事件，要符合两种情况之一：只有一个输入框（可以没有提交按钮），或者至少有一个提交按钮。<input type="submit"> 和 <button> 都可以看成是提交按钮。jQuery 的 submit() API 也对此有所提及。

- 达到第一条触发 submit 的条件后，不管是按提交按钮，还是按下 Enter ，<form> 都会执行一样的流程：先触发按钮的 click 事件（如果有按钮），然后触发 submit 事件。这算是提交的标准流程。

- 但如果提交按钮有多个，<form> 会把第一个出现的按钮作为默认提交按钮，按下 Enter 触发 click 事件时，也只会触发这一个按钮的事件。想触发其他按钮的 click 事件，只能去手动点击。

>这里有一个坑，一般情况下我们都不会去在一个 form 里写两个 <input type="submit">，但有可能会去写两个 <button> 。这种情况因为 <button> 就跟提交按钮无异。那怎么避免这种问题呢？我查了一下 button 的文档。原来它还有一个 type 属性，可以设置成 button，reset 和 submit 。但 submit 是默认值，所以 <input type="submit"> 等价于 <button type="submit">。如果要让它表现得像普通按钮，记得加上 type="button" 。

> e.preventDefault(), 均不会触发

**enter**
Enter 或者点击按钮，事件执行顺序为：

- keydown
- keypress
- click
- submit
- keyup
从这里可以看到只有 keydown 和 keypress 触发在 click 之前，那么我们试试对这两个事件用一下 preventDefault。过程就不写了，结果如下：

当 keydown 加上 preventDefault 时， keypress， click， submit 都不会触发。
当 keypress 加上 preventDefault 时， click 和 submit 都不会触发。

因此可知， keypress 使用 preventDefault 的效果是取消了 click，进而引发了 submit 也不会触发。而 keydown 则是因为取消了 keypress 导致没有触发 form 提交。