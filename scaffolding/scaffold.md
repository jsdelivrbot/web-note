## 脚手架 

>yeoman的generator 帮助构建脚手架 http://yeoman.io/

- [从0开始搭建脚手架](https://segmentfault.com/a/1190000006190814)
- [*yeoman 自动化搭建前端脚手架](http://luckykun.com/work/2016-09-01/yeoman-reactpackage.html)
- [脚手架介绍](http://www.cnblogs.com/ihardcoder/p/6648423.html)

- [脚手架示例 react](https://github.com/bodyno/react-starter-kit)

## 环境

安装node npm

```
npm install -g n  //首先安装n模块
n stable   //升级node.js到最新稳定版
n 5.0.0   //或者指定版本升级
node -v   //检查更新是否成功
```

安装yeoman

```
npm install -g yo
```

## 创建脚手架

创建项目文件夹（**自定义名称**） 
>因为我们在创建后是要发布的，至于项目的名字一定是用generator-name这种格式，不然到时候yeoman找不到你的这个脚手架。

创建package.json

```
npm init
```

修改示例：
```
{
  "name": "generator-reactpackage",
  "version": "0.0.4",
  "description": "基于ract+webpack的项目目录快速生成器",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/luckykun/generator-reactpackage.git"
  },
  "keywords": [
    "yeoman-generator"
  ],
  "author": "luckykun",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/luckykun/generator-reactpackage/issues"
  },
  "homepage": "https://github.com/luckykun/generator-reactpackage",
  "dependencies": {
    "chai": "^3.3.0",
    "chalk": "^1.1.1",
    "fs-extra": "^0.24.0",
    "mocha": "^2.3.3",
    "yeoman-generator": "^0.24.1",
    "yosay": "^1.0.5"
  }
}
```

>package.json的信息一定要尽可能完整，不然可能上传不到generator-lists

然后在此目录下新建app->index.js，app->templates

- templates目录里面就是我们最后要用到的项目模版文件，里面的内容是一个完整的前端项目，可以自定义。
- index.js是开发脚手架的主要逻辑文件。

编辑index.js 示例 [yeoman 生命周期设置](http://yeoman.io/authoring/running-context.html)

```js
var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
var Reactpackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    generateBasic: function() {  //按照自己的templates目录自定义
        this.directory('src', 'src');    //拷贝目录
        this.directory('data', 'data');
        this.copy('package.json', 'package.json');   //拷贝文件
        this.copy('index.html', 'index.html');
        this.copy('README.md', 'README.md');
        this.copy('webpack.config.js', 'webpack.config.js');
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {      //安装依赖
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});
module.exports = Reactpackage;
```

## 未发布

项目链接到全局Node环境中

```
npm link 
```

尝试构建

```
yo app-name
```

## 发布

发布到npm

```
npm adduser  //如果没有账号，用此命令注册
npm login   //如果有账号，用此命令登陆
npm publish --access=public     //上传到npm官网
```

>上传到npm官网之前需要先将脚手架项目上传到github
脚手架项目的package.json文件一定要尽可能详细，比如git主页，readme文件链接等等

## 使用
确保有node

```
npm install -g yo
```

安装脚手架

```
npm install -g generator-name
```

新建一个文件夹，在文件夹下运行

```
yo reactpackage
```