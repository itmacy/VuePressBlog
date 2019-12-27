# VuePress构建个人博客网站
> - VuePress Hello World 版本
> - 官网：https://www.vuepress.cn/guide/
> - 参考：https://www.cnblogs.com/softidea/p/10084946.html

## Windows环境搭建
### 安装node.js
> 官网下载，傻瓜式安装

### 全局安装 VuePress
> `npm install -g vuepress`

### 创建项目
> 创建一个名为`vuepress-demo`的项目

### 初始化项目
> 进入到项目后，执行命令 `npm init` 或 `npm init -y`（默认yes），此时会生成一个`package.json`的文件

### 创建文件夹和文件
> 项目目录结构如下
```
|- vuepress-demo
    |- docs
        |- .vuepress
            |- public
            |- config.js
        |- README.md
    |- package.json
```
> 新建文件夹`docs`，在`docs`文件夹里面新建文件夹`.vuepress`和文件`READEME.md`


- 由于直接创建`.vuepress`文件是不成功的，此时需要使用命令行的方式创建文件：`mkdir .vuepress`
- 在`.vuepress`文件里面新建文件夹`public`和文件`config.js`

说明：
> 具体的目录和文件含义可以
> 参考官网：https://www.vuepress.cn/guide/directory-structure.html


### 添加配置
- 在`config.js`中配置网站标题，描述和菜单信息等

```js
module.exports = {
  title: 'itmacy\'s blog',
  description: 'itmacy的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'github', link: 'https://github.com/itmacy'},
      {text: '博客园', link: 'https://www.cnblogs.com/itmacy/'},
      {text: '简书', link: 'https://www.jianshu.com/u/88c9ba7ac8bd' },
      {text: '关于', link: '/about.md' },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};

```

- 在`package.json`中添加两个启动命令

```json
  "scripts": {
	"dev": "vuepress dev docs",
	"build": "vuepress build docs"
  }
```

### 启动项目
- 命令行执行 `npm run dev`
- 浏览器访问：`http://localhost:8080`

## 进阶
### 添加页面
说明约定大于配置，/README.md默认映射到/，即访问http://localhost:8080/默认访问的是docs下的README.md文件，因此可以在该文件的同级目录创建一个
文件夹，来存放其他文件，访问地址则是/文件夹名/文件名，例如创建同级文件夹page,里面创建文件about.md，则访问about.md的路径为
/page/about.md，同理，在page文件夹内创建README.md，由于/README.md默认映射到/，因此访问该文件的路径为：/page/

- 目录如下
```
|- vuepress-demo
    |- docs
        |- .vuepress
            |- public
            |- config.js
        |- page
            |- about.md
            |- README.md
        |- README.md
    |- package.json
```

### 部署
#### 部署到github
> 这里部署到github上使用两个repository，第一个为`USERNAME.github.io`，用于显示页面，另一个用于项目编辑并把项目部署到`USERNAME.github.io`

- 新建第一个repository，名为`USERNAME.github.io`，USERNAME指的是github的账号名，例如我的github账号名为`itmacy`，那么新建的repository名则为
`itmacy.github.io`，里面不需要存放任何文件，也不需要clone到本地。

- 新建第二个repository，名称随意，例如我创建的是`VuePressBlog`,然后clone到本地，把自己搭建的`vuepress-demo`里面的所有文件和目录拷贝到`VuePressBlog`,
并在`VuePressBlog`项目根目录下添加一个deploy.sh文件，在该文件里面拷贝一下内容：
```yaml
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```
这样就可以把项目`VuePressBlog`和`USERNAME.github.io`关联起来，注意把**USERNAME**替换成自己的github账号，例如我的修改后为：
`git push -f git@github.com:itmacy/itmacy.github.io.git master`

最后目录如下
```
|- VuePressBlog
    |- docs
        |- .vuepress
            |- public
            |- config.js
        |- page
            |- about.md
            |- README.md
        |- README.md
    |- deploy.sh
    |- package.json
```

- 在package.json添加一个命令
> windows下：
```json
 "scripts": {
	"build": "vuepress build docs"
  }
```

> linux或mac下（未试过）
```json
 "scripts": {
	"build": "vuepress bash docs"
  }
```

- 运行指令
> `npm run deploy`

- 访问
> `https://USERNAME.github.io/`，例如访问我的：`https://itmacy.github.io/`。


  