## github

- [gitmoji](https://gitmoji.carloscuesta.me/) :art:

- [emoji 图标](https://github.com/scotch-io/All-Github-Emoji-Icons)

- [git操作](http://www.bootcss.com/p/git-guide/)

## 修改

```sh
git remote rm origin  移除origin
git remote add origin url 添加 origin

git reset –-hard [版本]:回退

修改用户名、邮箱
git config --global user.name "your name"
git config --global user.email "your email"
本地
git config  user.name "your name"
git config  user.email "your email"

```

## 分支合并：

$ git checkout master
$ git merge --no-ff develop
$ git pull origin master
$ git add *
$ git commit -m "xxx"
$ git push origin master

## 查看

git config user.name
git config user.email

## 创建项目上传项目：

$ git config --global user.name "wuzhong"

$ git config --global user.email "zhong.wu@baifendian.com"

$ git clone url

cd  目标路径

$ git init

$ git remote add origin url

touch README.md

$ git add .

$ git commit  

$ git push -u origin master 

## 创建分支

$ git clone url 

cd 目标路径

$ git checkout -b develop

$ git add *

$ git commit -m "xx"

$ git push origin develop


## 删除分支

git  branch -a  // 查看
git checkout master

(本地)
(需要切换到其他分支master)
git branch -d  name

(远程)
git branch -r -d origin/name 
git push origin :name


## 删除文件

git rm name -r 
接着再commit + push一遍

git reset --hard 版本 回退版本


## 创建 稳定不可以改标签 tags

创建

git tag -a V1.2 -m 'WebSite version 1.2'

查看

git tag

推送tag

git push origin --tags

删除

git tag -d V1.2

git push origin :refs/tags/V1.2

获取版本代码

git fetch origin tag V1.2

## 技巧

- git config --global alias.ac '!git add -A && git commit -m ' 可以将 git add 和 git commit -m 这两条命令合二为一

接下来你可以这样使用 git ac "提交信息"
