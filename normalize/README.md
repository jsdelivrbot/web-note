## 规范

>本文档记录开发中一些规范


### 编辑规范

- .editorconfig: 告诉编辑器该项目的代码规范。
在团队开发中可能涉及的一个问题是，不同的同学可能使用的开发工具和开发习惯并不相同，
有的使用WebStorm，有的使用Visual Studio Code。
所以有可能在你的编辑器中习惯缩进使用的是2个空格，在他的编辑器中缩进使用的是4个空格。
该配置文件就是用于存储统一的样式规范，告诉编辑器统一使用两个空格，不允许空字符串结尾等等。
具体请参考 
[editorconfig.org](http://editorconfig.org/)

### 代码规范

- .eslintrc.js: 这个很好理解，eslint工具的配置文件。eslint是一款专业对js语法和格式进行检测的工具，大部分的编辑器应该都进行了集成，或者当作插件进行安装。该配置文件告诉eslint哪些文件可以忽略，哪些规则可以忽略，哪些文件适配哪些规则等等。具体请参考: 
[eslint](https://eslint.org/docs/user-guide/configuring)

- .stylelintrc.js: 同上，stylelint是对样式文件进行语法规范检测的工具，该配置文件则可以对检测规则进行细节配置。具体规则请参考: 
[stylelint](https://stylelint.io/user-guide/configuration/)

- .flowconfig: flow是Facebook推出一款用于对JavaScript语法进行类型检测的开源工具（有TypeScript的意思）。该文件就是该工具的配置文件，具体可以前往
[flow](https://flow.org/en/docs/config/)