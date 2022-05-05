(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(s,n,t){s.exports=t.p+"assets/img/robotjs.1e2f202f.png"},388:function(s,n,t){"use strict";t.r(n);var a=t(45),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[a("code",[s._v("npm install --arch=ia32 --platform=win32 electron")])]),s._v(" "),a("blockquote",[a("p",[s._v("指定 arch=ia32 来安装32位的electron，在 windows 平台打包都应该基于 32位 来打。\n这样打出来的包在32位和64位都可以用，维护一套代码就行")])]),s._v(" "),a("h4",{attrs:{id:"常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用"}},[s._v("#")]),s._v(" 常用")]),s._v(" "),a("p",[s._v("IPC通信方式")]),s._v(" "),a("ul",[a("li",[s._v("主进程通知渲染进程")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send\nipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("渲染进程通知主进程")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方式一：")]),s._v("\nipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("invoke\nipcMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handle\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方式二：")]),s._v("\nipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send\nipcMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("invoke和send的区别是，invoke可以等待handle的返回结果，而send方法没有返回值")])]),s._v(" "),a("h4",{attrs:{id:"坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坑"}},[s._v("#")]),s._v(" 坑")]),s._v(" "),a("ol",[a("li",[s._v("当开启notification的时候，触发后没有提示")])]),s._v(" "),a("p",[s._v("解：如果设置了交互，需要在macOS对应的通知模块上打开交互的展示")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Electron 使用 require 报错问题: Uncaught ReferenceError: require is not definend")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("解:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    mainWindow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BrowserWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      webPreferences"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        nodeIntegration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        contextIsolation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("在 electron 中使用 robotjs，浏览器无法直接 require('robotjs')")])]),s._v(" "),a("p",[s._v("解：因为robotjs是基于C++写的，根据不同的node版本环境需要重新编译。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(364),alt:""}})]),s._v(" "),a("p",[s._v("比如："),a("code",[s._v("npm rebuild --runtime=electron --disturl=https://atom.io/download/atom-shell --target=13.0.1 --abi=83")]),s._v("\n其中"),a("code",[s._v("target")]),s._v("表示electron的版本，"),a("code",[s._v("abi")]),s._v("是根据 "),a("a",{attrs:{href:"https://github.com/mapbox/node-pre-gyp/blob/master/lib/util/abi_crosswalk.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("映射表"),a("OutboundLink")],1),s._v("得出，比如当前的 node版本 是 14.16.0，可以看到对应的abi是83")]),s._v(" "),a("h4",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("ol",[a("li",[s._v("生成 icns")])]),s._v(" "),a("p",[s._v("准备一张PNG 图片 icon.png，创建空文件夹 icons.iconset")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("执行以下命令")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" icon.png --out icons.iconset/icon_16x16.pn\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" icon.png --out icons.iconset/icon_16x16@2x.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" icon.png --out icons.iconset/icon_32x32.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" icon.png --out icons.iconset/32x32@2x.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" icon.png --out icons.iconset/icon_64x64.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" icon.png --out icons.iconset/64x64@2x.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" icon.png --out icons.iconset/icon_128x128.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" icon.png --out icons.iconset/icon_128x128@2x.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" icon.png --out icons.iconset/icon_256x256.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" icon.png --out icons.iconset/icon_256x256@2x.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" icon.png --out icons.iconset/icon_512x512.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" icon.png --out icons.iconset/icon_512x512@2x.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" icon.png --out icons.iconset/icon_1024x1024.png\nsips -z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" icon.png --out icons.iconset/icon_1024x1024@2x.png\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("执行 "),a("code",[s._v("iconutil -c icns icons.iconset -a icon.icns")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);