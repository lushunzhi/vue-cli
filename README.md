### vue项目：
在程序开发中，有三种方式使用vue：
- 本地引入vue.js,下载vue.js文件
- 使用cdn引入vue.js,cdn引入vue.js;  [github学习地址](https://github.com/lushunzhi/vue-project.git)
- 使用vue-cli创建vue项目。其中vue-cli可以结合webpack打包工具使用，大大方便了开发步骤，使用广泛。

### 项目说明：
本案例使用的是vue-cli的方式创建vue项目，vue-cli依赖环境：
1. nodejs安装：
```
1.下载链接：node.js官网(https://nodejs.org/en/) 下载并安装node
2.你可以根据不同平台系统选择你需要的Node.js安装包，输入node -v 命令，查看node的版本，
  若出现相应的版本号，则说明你安装成功（安装了node也就有了npm,直接输入 npm -v 命令，显示npm的版本信息）
```
2. cnpm安装：
```
1.npm访问外网比较慢，安装淘宝的镜像
2.终端输入命令：npm install -g cnpm --registry=https://registry.npm.taobao.org  安装完成
```
3. 安装vue-cli
```
npm install -g vue-cli / cnpm i -g vue-cli
安装结束之后，使用vue -v查看vue的版本。
```
```
### 输入命令 vue help 给我们提供的帮助
Usage: vue <command> [options]
Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  init           generate a new project from a template
  list           list available official templates
  build          prototype a new project
  create         (for v3 warning only)
  help [cmd]     display help for [cmd]

### 语法提示知道：vue <command>  和 vue [options] 可以帮助我们做一些操作
vue [options] 包含:
vue -V 或者 vue --version 查看vue版本
vue -h 或者 vue --help   查看帮助
vue <command>包含：
vue init  可以从模板中创建一个新的项目
vue list  查看官方提供给我们的模板
...

vue list  官方提供的模板：
  ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
  ★  pwa - PWA template for vue-cli based on the webpack template
  ★  simple - The simplest possible Vue setup in a single HTML file
  ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.

那么在命令行中输入：
vue init 官方模板名  自己的项目名称
vue init webpack  demo

创建适合不同场景的项目!!
```
4. vue-cli创建项目:
- 选择项目所在的位置，通过命令行进入该目录（或者直接在该目录，右键，打开命令行）。
- 使用脚手架安装项目： vue init webpack demo 项目是基于webpack的(demo项目名，可以自己命名)
- Project name（工程名）:回车
- Project description（工程介绍）：回车
- Author：作者名
- Vue build（是否安装编译器）:回车
- Install vue-router（是否安装Vue路由）：n  (路由在这里我们先不加入)
- Use ESLint to lint your code（是否使用ESLint检查js代码）：n
- Set up unit tests（安装单元测试工具）：n
- Setup e2e tests with Nightwatch（是否安装端到端测试工具）：n
- Should we run npm install for you after the project has been created? (recommended)：回车。

5. 启动项目：
- 进入项目目录：cd demo  (demo项目名，可以自己命名)
- 安装项目所需要的依赖：npm install
- 启动项目：npm run dev

启动成功，浏览器打开：localhost:8080，即可看到vue项目。


### 目录说明,可看项目路径下图片：
- image/vue目录说明.png
- image/package.json说明.png
