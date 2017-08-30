## github

- [gitmoji](https://gitmoji.carloscuesta.me/) :art:

- [emoji 图标](https://github.com/scotch-io/All-Github-Emoji-Icons)

- [git操作](http://www.bootcss.com/p/git-guide/)

### git操作


git remote rm origin  移除origin

git reset –-hard [版本]:回退

分支合并：
$ git checkout master
$ git merge --no-ff develop
$ git pull origin master
$ git add *
$ git commit -m "xxx"
$ git push origin master

创建项目上传项目：
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


创建分支

$ git clone url 

cd 目标路径

$ git checkout -b develop

$ git add *

$ git commit -m "xx"

$ git push origin develop


删除分支

git  branch -a 

git checkout master

(本地)
(需要切换到其他分支master)

git branch -d  name

(远程)

git branch -r -d origin/name 

git push origin :name

删除文件

git rm name -r 

删除文件夹及其文件

git rm name -r -f


git reset --hard 版本 回退版本 
