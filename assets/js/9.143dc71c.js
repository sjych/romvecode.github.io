(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{200:function(e,n,t){e.exports=t.p+"assets/img/vuecli1.656bac74.png"},216:function(e,n,t){"use strict";t.r(n);var r=t(0),o=Object(r.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue-cli脚手架的搭建项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli脚手架的搭建项目","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-cli脚手架的搭建项目")]),e._v(" "),r("ol",[r("li",[e._v("创建项目")])]),e._v(" "),r("div",{staticClass:"language-vue extra-class"},[r("pre",{pre:!0,attrs:{class:"language-vue"}},[r("code",[e._v("进入到linux终端命令行，cd到指定项目文件夹下mkdir需要的脚手架项目 (vue create 项目名称)\n系统默认安装了babel(注意：babel是一个编译转换工具 把ES6代码转换成ES5代码的);\n以及eslint(ESLint 是一个ECMAScript/JavaScript 语法规则和代码风格的检查工具，它的目标是保证代码的一致性和避免错误。)\n\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("安装vue-router")])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("在指定项目下 npm install --save vue-router")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("项目文件创建好后开始进行配置")])]),e._v(" "),r("div",{staticClass:"language-vue extra-class"},[r("pre",{pre:!0,attrs:{class:"language-vue"}},[r("code",[e._v("3.1 在文件src跟目录文件下的components文件下创建一个router配置文件夹，在router文件夹下创建index.js文件。 \n配置内容：(1)引入 import Vue from 'vue'\n       (2)引入vuerouter 模块 import 引入模块 ES6里面的规范 require是nodejs里面使用\n       import VueRouter from 'vue-router'\n       (3)  让VueRouter 作为Vue的一个插件\n           Vue.use(VueRouter)\n       (4)配置VueRouter\n       const router = new VueRouter({\n           "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- history去掉路由 hash自带# --\x3e")]),e._v("\n           mode: \"history\",\n           routes:[{\n                {\n     // 当访问的是/vip这个路径\n     path: '/vip',\n     // 渲染对应的组件\n     component: Vip,\n     children: [\n       {\n         path: 'one',\n         component: One,\n         // 路由命名\n         name: 'one'\n       },\n       {\n         path: 'two',\n         component: Two\n       },\n       {\n         path: 'three',\n         component: Three\n       }\n           }]\n       })\n       (5)最后导出内容\n       export default router\n\n       3.2 在默认main.js文件下需要配置添加\n       "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- main.js 这个文件叫做入口文件 当项目启动首先访问这个文件 --\x3e")]),e._v("\n       import Vue from 'vue'\n       引入App这个组件\n       import App from './App.vue'\n       // 引入router模块\n       import router from './router/'\n       关于产品信息的提示\n       Vue.config.productionTip = false\n\n       new Vue({\n       router,\n       render: h => h(App),\n       }).$mount('#app')\n")])])]),r("p",[e._v("知识点总结.图片\n"),r("img",{attrs:{src:t(200),alt:""}})]),e._v(" "),r("Valine")],1)},[],!1,null,null,null);n.default=o.exports}}]);