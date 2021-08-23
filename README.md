### React脚手架

+ react脚手架
  + 脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目
    + 包含了所需要的配置--语法检查，jsx编译，devServer.......
    + 下载好了所有相关的依赖
    + 可以直接运行一个简单效果
  + react提供了一个用于创建react基于脚手架的项目：create-react-app
    + 首先下载这个库：  npm i create-react-app -g
  + 项目整体架构为：react+webpack+es6+eslint
  + 使用脚手架开发的项目特蒂安：模块化、组件化、工程化
  + 在要创建项目的位置打开cmd：create-react-app project-nam
  + 等待创建成功后：npm start  打开这个新建的react项目在浏览器中
+ react脚手架文件夹项目结构
  + `node_modules`
  + `public` 静态资源文件
    + `favicon.ico` 网站图标
    + **`index.html`** SPA（single-page-application--单页面应用）只会有这么一个html页面
    + `.png` 就是图标
    + `manifest.json` 加壳配置文件
    + `robots.txt` 爬虫限制文件
  + `src` 
    + **`App.css`** App组件样式
    + **`App.js` ** App组件
    + `App.text.js` 专门用于App的测试文件
    + `index.css` 共用的css代码
    + **`index.js`** 入口文件
      + `<React.StrictMode>` 可以帮助检查组件里面的代码的合理性 
    + `logo.svg` 一个logo图片
    + `reportWebVitals.js`  记录页面性能
    + `setupTests.js` 用于做整个应用测试的
+ 组件化编码流程
  1. 拆分组件：拆分界面，抽取组件
  2. 实现静态组件：使用组件实现静态页面效果
  3. 实现动态组件
     1. 动态显示初始化数据
        1. 数据类型
        2. 数据名称
        3. 保存在哪个组件
     2. 交互
+ willDo案例相关知识点
  1. 拆分组件、实现静态组件，注意：className、style的写法
  2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
     1. 某个组件使用:放在自身的state中
     2. 某些组件使用：放在他们共同的父组件state中----状态提升
  3. 关于父子通信
     1. 【父组件】给【子组件】传递数据：通过props传递
     2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
  4. 注意defaultChecked 和checked的区别，类似的还有：defaultValue和value
  5. 状态在哪里，操作状态的方法就写在哪里