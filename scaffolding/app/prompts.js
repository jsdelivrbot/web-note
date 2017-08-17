//prompts.js用于存放输入信息指引的配置。

module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Please input project name (xj-app):',
    default: 'generator-xj-app'
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Please input project title (generator示例):',
    default: 'generator示例'
  },
  {
    type: 'input',
    name: 'projectDesc',
    message: 'Please input project description:'
  },
  {
    type: 'input',
    name: 'projectMain',
    message: 'Main file (src/index.js):',
    default: 'src/index.js'
  },
  {
    type: 'input',
    name: 'projectAuthor',
    message: 'Author (NARUTOne):',
    default: 'NARUTOne'
  },
  {
    type: 'list',
    name: 'projectLicense',
    message: 'Please choose license:',
    choices: ['MIT', 'ISC', 'BSD-2.0', 'BSD-3.0']
  }
]