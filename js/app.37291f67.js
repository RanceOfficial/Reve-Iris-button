(function(t){function e(e){for(var a,o,c=e[0],u=e[1],l=e[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1e592b1e":"2fcf12aa","chunk-b06a2d6e":"8f24c342","chunk-e07d4296":"7814ec61"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-e07d4296":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1e592b1e":"31d6cfe0","chunk-b06a2d6e":"31d6cfe0","chunk-e07d4296":"0515732c"}[t]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===r))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===a||s===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var f=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Reve-Iris-button/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=s;i.push([0,"chunk-corejs","chunk-libs"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0b75":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.href,rel:"noopener noreferrer",target:t.target}},[t._t("default")],2)},o=[],r=n("a6f4"),i=Object(r["d"])({name:"SafeLink",props:{href:{type:String},target:{type:String,default:"_blank"}}}),c=i,u=n("2877"),l=Object(u["a"])(c,a,o,!1,null,"e5f0fe32",null);e["default"]=l.exports},"1a77":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("60bb"),o=n.n(a),r=n("a6f4");function i(){function t(){var t=window.innerHeight||document.documentElement.clientHeight,e=window.innerWidth||document.documentElement.clientWidth;return{height:t,width:e}}var e=Object(r["p"])(0),n=Object(r["p"])(0),a=o.a.debounce((function(){var a=t();e.value=a.height,n.value=a.width}),200);function i(){window.removeEventListener("resize",a)}return window.addEventListener("resize",a),Object(r["l"])((function(){a()})),Object(r["m"])((function(){window.removeEventListener("resize",a)})),{height:e,width:n,remove:i}}},"2b58":function(t,e,n){},"2d5c":function(t,e,n){"use strict";n("fdab")},4991:function(t,e,n){},"4aea":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"reve-button"},[t.title.length<t.maxLength?n("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.play}},[t._v(t._s(t.title))]):n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",rounded:""},on:{click:t.play}},"v-btn",o,!1),a),[t._v(t._s(t.title))])]}}])},[n("span",[t._v(t._s(t.rawTitle))])]),t.maskList.length?n("span",t._l(t.maskList,(function(e){return n("span",{key:e,staticClass:"process-mask",style:t.style,on:{click:t.play}})})),0):t._e()],1)},o=[],r=(n("b64b"),n("fb6a"),n("99af"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("159b"),n("a6f4")),i=n("8a43"),c=n("1a77"),u=n("fe0b"),l=n("759a"),s=Object.keys(i["a"]);function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return t&&t.length>e?"".concat(t.slice(0,e),"…"):t}function p(t){var e=Object(r["a"])((function(){var e=u["a"].locale,n=t.value[e];if(n)return n;for(var a=0;a<s.length;a++){var o=s[a];if(n=t.value[o],n)return n}return t.value["zh"]})),n=Object(c["a"])(),a=n.width,o=Object(r["a"])((function(){return Math.min(Math.floor((a.value-44)/19),32)})),i=Object(r["a"])((function(){return f(e.value,o.value)}));return{maxLength:o,rawTitle:e,title:i}}function d(t){var e=Object(r["a"])((function(){return"".concat(l["c"],"voices/").concat(t.value)})),n=Object(r["a"])((function(){return"".concat(l["e"]).concat(e.value)}));return{voicesPath:n,localVoicesPath:e}}function v(t){var e=t.path,n=t.isLoop,a=t.isPlay,o=t.stopAll,i=t.playCb,c=Object(r["p"])(new Set),u=Object(r["p"])(!1),l=Object(r["p"])([]),s=Object(r["p"])({animation:""}),f=d(e),p=f.voicesPath;function v(t){if(!u.value){var e=new Audio;e.preload="meta",e.src=p.value,u.value=!0;var a=setTimeout((function(){u.value=!1}),1e4);e.load(),e.oncanplay=function(t){c.value.add(e),e.play().then((function(){clearTimeout(a),u.value=!1,s.value.animation="playing ".concat(e.duration,"s linear forwards"),l.value.push(Date.now())}))},e.onended=function(a){c.value.delete(e),l.value.shift(),"function"===typeof t&&t(),n.value&&v()},e.onerror=function(t){}}}return Object(r["u"])(a,(function(t){t&&v(i)})),Object(r["u"])(o,(function(t){t&&(c.value.forEach((function(t){t.pause(),c.value.delete(t)})),l.value=[])})),{play:v,style:s,maskList:l}}var b=Object(r["d"])({name:"ReveButton",model:{prop:"isPlay",event:"input"},props:{path:{type:String,required:!0},messages:{type:Object,required:!0},isPlay:{type:Boolean,default:!1},isLoop:{type:Boolean,default:!1},stopAll:{type:Boolean,default:!1}},emits:{input:null},setup:function(t,e){var n=Object(r["s"])(t),a=n.isPlay,o=n.isLoop,i=n.stopAll,c=n.path,u=n.messages,l=v({isPlay:a,isLoop:o,stopAll:i,path:c,playCb:function(){e.emit("input",!1)}}),s=l.play,f=l.style,d=l.maskList,b=p(u),h=b.maxLength,m=b.rawTitle,g=b.title;return{play:s,style:f,maskList:d,maxLength:h,rawTitle:m,title:g}}}),h=b,m=(n("2d5c"),n("8165"),n("2877")),g=Object(m["a"])(h,a,o,!1,null,"f2d2fb8e",null);e["default"]=g.exports},5880:function(t,e){t.exports=Vuex},"60bb":function(t,e){t.exports=_},6389:function(t,e){t.exports=VueRouter},"6c5f":function(t,e,n){},"6e85":function(t,e){t.exports=dayjs},"70de":function(t,e,n){"use strict";n("6c5f")},"759a":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return r})),n.d(e,"n",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"l",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return f})),n.d(e,"m",(function(){return d})),n.d(e,"e",(function(){return v})),n.d(e,"g",(function(){return b})),n.d(e,"f",(function(){return h})),n.d(e,"k",(function(){return m})),n.d(e,"j",(function(){return g}));n("99af");var a=Object({NODE_ENV:"production",VUE_APP_AUTHOR:"兰斯Official",VUE_APP_AUTHOR_BILI_UID:"134104",VUE_APP_BAIDU_SITE_VERIFICATION:"code-KL1UmEkEOl",VUE_APP_BAIDU_STATISTICS:"b0a05a2d726354e7c6d5bed7ec67fa0e",VUE_APP_BILI_UID:"666726802",VUE_APP_COPYRIGHT:"RanceOfficial",VUE_APP_GITHUB_NAME:"RanceOfficial",VUE_APP_GITHUB_REPOSITORIE:"Reve-Iris-button",VUE_APP_HTML_TITLE:"芙按钮*.。(๑･∀･๑)*.。",VUE_APP_PRIMARY_COLOR:"#a7cebd",VUE_APP_RSS_BASE_URL:"/rss",VUE_APP_VERSION:"1.0.0",BASE_URL:"/Reve-Iris-button/"}),o=(a.NODE_ENV,a.BASE_URL||""),r=a.VUE_APP_HTML_TITLE||"",i=a.VUE_APP_RSS_BASE_URL||"",c=a.VUE_APP_BILI_UID||"",u=a.VUE_APP_PRIMARY_COLOR||"#fff",l=a.VUE_APP_AUTHOR||"",s=a.VUE_APP_AUTHOR_BILI_UID||"",f=a.VUE_APP_GITHUB_NAME||"",p=a.VUE_APP_GITHUB_REPOSITORIE||"",d="".concat(f,"/").concat(p),v="https://cdn.jsdelivr.net/gh/".concat(d,"@latest/public"),b="https://github.com/".concat(d),h=a.VUE_APP_COPYRIGHT||"",m=a.VUE_APP_POLICE||"",g=a.VUE_APP_ICP||""},8165:function(t,e,n){"use strict";n("9c95")},"85b3":function(t,e){t.exports=VueI18n},"8a43":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a={title:"芙按钮*.。(๑･∀･๑)*.。",langName:"简体中文",appBar:{SwitchLanguage:"切换语言"},menu:{Home:"主页",Bilibili:"哔哩哔哩",About:"关于",Readme:"加入项目",Changelog:"更新日志",Download:"下载音频"},play:{PlaybackControl:"播放控制",LoopPlayback:"循环播放",RandomPlay:"随机播放",StopPlay:"停止播放",LoopOn:"洗脑循环开启中",LoopOff:"洗脑循环已关闭",FixedControlPanel:"固定控制面板"},tags:{Other:"其他",Tone:"芙叫",Greet:"打招芙",Chaos:"怪话芙",Normal:"日常芙",Song:"芙歌",Qingchang:"清唱",Hechang:"虚空合唱",KTV:"KTV"},ProjectAddress:"项目地址",BackToTop:"返回顶部",FriendlyLink:"友情链接",dynamic:{LatestDynamic:"最新动态",DynamicLink:"动态链接",PublishTime:"发布时间",NoDynamic:"当前暂无最新动态"}},o={title:"Reve Button*.。(๑･∀･๑)*.。 ",langName:"English",appBar:{SwitchLanguage:"SwitchLanguage"},menu:{Home:"Home",Bilibili:"Bilibili",About:"About",Readme:"AddProject",Changelog:"Changelog",Download:"Download"},play:{PlaybackControl:"PlaybackControl",LoopPlayback:"LoopPlayback",RandomPlay:"RandomPlay",StopPlay:"StopPlay",LoopOn:"LoopPlayOn",LoopOff:"LoopPlayOff",FixedControlPanel:"FixedControlPanel"},tags:{Other:"Other",Tone:"Tone",Greet:"Greet",Chaos:"Chaos",Normal:"Daily",Song:"Song,",Qingchang:"清唱",Hechang:"虚空合唱",KTV:"KTV"},ProjectAddress:"ProjectAddress",BackToTop:"BackToTop",FriendlyLink:"FriendlyLink",dynamic:{LatestDynamic:"LatestDynamic",DynamicLink:"DynamicLink",PublishTime:"PublishTime",NoDynamic:"There is no latest news at present"}},r={title:"リーブボタン*.。(๑･∀･๑)*.。",langName:"日本語",appBar:{SwitchLanguage:"言語を切り替え"},menu:{Home:"ホームページ",Bilibili:"ビリビリ",About:"について",Readme:"加入する",Changelog:"ログを更新",Download:"ダウンロード"},play:{PlaybackControl:"コントロール",LoopPlayback:"繰り返し再生",RandomPlay:"ランダム再生",StopPlay:"再生停止",LoopOn:"ループ",LoopOff:"ループオフ",FixedControlPanel:"固定コントロールパネル"},tags:{Other:"その他",Tone:"芙が鳴く",Greet:"あいさつする",Chaos:"変な話",Normal:"日常",Song:"歌",Qingchang:"清唱",Hechang:"虚空合唱",KTV:"KTV"},ProjectAddress:"プロジェクトのアドレス",BackToTop:"トップに戻る",FriendlyLink:"相互リンク",dynamic:{LatestDynamic:"最新の動き",DynamicLink:"ダイナミックリンク",PublishTime:"リリース時間",NoDynamic:"現在は最新の動きがありません。"}},i={zh:a,en:o,ja:r}},"8bbf":function(t,e){t.exports=Vue},"8e34":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"app-footer",attrs:{padless:"",app:"",inset:"",absolute:""}},[n("v-card",{staticClass:"card flex text-center",attrs:{flat:"",tile:""}},[n("v-card-text",[n("p",{attrs:{title:"About"}},[n("a",{on:{click:function(e){return e.preventDefault(),t.$router.push("/about")}}},[t._v(" Copyright ©2020 - "+t._s((new Date).getFullYear())+" "),n("strong",[t._v(t._s(t.COPYRIGHT))]),t._v(" All Rights Rese. ")])]),n("p",[n("a",{attrs:{target:"_blank",href:t.GITHUB_LINK}},[n("v-icon",{attrs:{color:"primary"}},[t._v("iconfont icon-github")]),t._v(" "+t._s(t.$t("项目地址"))+" ")],1)]),n("p",{staticClass:"github-info"},[n("a",{attrs:{target:"_blank",href:t.GITHUB_LINK}},t._l(t.githubs,(function(t){return n("img",{key:t.src,attrs:{alt:t.alt,src:t.src}})})),0)])])],1)],1)},o=[],r=n("a6f4"),i=n("759a"),c=Object(r["d"])({name:"CopyrightFooter",props:{},setup:function(t,e){return{POLICE:i["k"],ICP:i["j"],COPYRIGHT:i["f"],REPOSITORIE_NAME:i["m"],GITHUB_LINK:i["g"],githubs:[{alt:"GitHub package.json version",src:"https://img.shields.io/github/package-json/v/".concat(i["m"],"?color=ffaea6")},{alt:"GitHub watchers",src:"https://img.shields.io/github/watchers/".concat(i["m"],"?style=social")},{alt:"GitHub Repo stars",src:"https://img.shields.io/github/stars/".concat(i["m"],"?style=social")},{alt:"GitHub forks",src:"https://img.shields.io/github/forks/".concat(i["m"],"?style=social")}]}}}),u=c,l=(n("70de"),n("2877")),s=Object(l["a"])(u,a,o,!1,null,"3a505908",null);e["default"]=s.exports},"903a":function(t,e,n){"use strict";n("2b58")},"9c95":function(t,e,n){},a2c9:function(t,e){t.exports=Vuetify},b20f:function(t,e,n){},b96f:function(t,e){t.exports=RSSParser},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),o=n.n(a),r=n("a2c9"),i=n.n(r),c=n("759a");o.a.use(i.a);var u=new i.a({theme:{themes:{light:{primary:c["l"]}}}}),l=n("fe0b"),s=n("a6f4");o.a.use(s["c"]);var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},p=[],d=n("f947");function v(){var t=Object(d["d"])(),e=t.language,n=Object(s["p"])("zh");/zh|cn|han/i.test(e.value)?n.value="zh":/ja/i.test(e.value)?n.value="ja":n.value="en",l["a"].locale=n.value}var b=Object(s["d"])({name:"App",setup:function(t,e){return v(),Object(s["v"])((function(){document.title=l["a"].t("title")})),{}}}),h=b,m=n("2877"),g=Object(m["a"])(h,f,p,!1,null,"69f527e3",null),_=g.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6389")),P=n.n(y),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:500,leave:500},mode:"out-in"}},[n("keep-alive",{attrs:{exclude:/^err/g}},[n("router-view")],1)],1),n("CopyrightFooter")],1)},k=[],w=Object(s["d"])({name:"Layout"}),L=w,T=Object(m["a"])(L,O,k,!1,null,null,null),j=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("v-navigation-drawer",{attrs:{fixed:"",app:"","disable-resize-watcher":"","must-sort":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},t._l(t.menuList,(function(e,a){return n("div",{key:e.name},[n("v-list-item",{attrs:{title:e.url||e.path},on:{click:function(n){e.fun?e.fun():t.$router.push(e.path)}}},[n("v-list-item-action",[n("v-icon",{attrs:{color:e.color||"primary"}},[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))])],1)],1),a<t.menuList.length-1?n("v-divider"):t._e()],1)})),0)],1),n("v-app-bar",{staticClass:"reve-app-bar-boxshadow",attrs:{app:"",color:"primary",dense:"",dark:"",flat:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"align-center mr-5"},[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"white--text",attrs:{icon:"",href:t.GITHUB_LINK,target:"_blank"}},Object.assign({},a)),[n("v-icon",{attrs:{size:"28"}},[t._v(" iconfont icon-github2 ")])],1)]}}])},[n("span",[t._v(t._s(t.$t("ProjectAddress")))])]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"white--text",attrs:{icon:""}},Object.assign({},o,a)),[n("v-icon",[t._v("translate")])],1)]}}],null,!0)},[n("span",[t._v(t._s(t.$t("appBar.SwitchLanguage")))])])]}}])},[n("v-list",t._l(t.langList,(function(e){return n("v-list-item",{key:e.lang,on:{click:function(n){return t.switchLang(e.lang)}}},[n("v-list-item-title",[t._v(t._s(e.label))])],1)})),1)],1)],1),n("v-main",{staticClass:"main"},[n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:500,leave:500},mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-fab-transition",[n("v-btn",t._g({directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],attrs:{color:"primary",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:t.backTop}},a),[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)]}}])},[n("span",[t._v(t._s(t.$t("BackToTop")))])])],1)],1)},A=[],I=(n("d81d"),n("b64b"),n("1a77")),C=n("8a43");function S(t){var e=window.open(t);e&&(e.opener=null)}function R(t){l["a"].locale=t}var U=Object.keys(C["a"]).map((function(t){return{lang:t,label:C["a"][t].langName}})),x=Object(s["a"])((function(){return[{icon:"home",name:l["a"].t("menu.Home"),path:"/"},{icon:"iconfont icon-bilibili2",name:l["a"].t("menu.Bilibili"),url:"https://space.bilibili.com/".concat(c["d"]),fun:function(){S(this.url)}},{icon:"iconfont icon-changelog-clock",name:l["a"].t("menu.Changelog"),path:"/changelog"},{icon:"code",name:l["a"].t("menu.About"),path:"/about"}]}));function B(){u.framework.goTo(0,{duration:500})}var V=Object(s["d"])({name:"HomeLayout",props:{},setup:function(){var t=Object(d["g"])(),e=Object(d["e"])(),n=e.scrollTop,a=e.remove,o=Object(I["a"])(),r=o.height,i=Object(s["a"])((function(){return n.value>=(r.value/3||300)}));return Object(s["m"])((function(){a()})),{GITHUB_LINK:c["g"],title:t,isShowBackTop:i,drawer:null,switchLang:R,langList:U,menuList:x,backTop:B,scrollTop:n}},watch:{$route:function(){this.scrollTop>50&&this.backTop()}}}),H=V,N=(n("903a"),Object(m["a"])(H,E,A,!1,null,"cfffd2d4",null)),D=N.exports;o.a.use(P.a);var G=[{path:"/",component:j,children:[{path:"",component:D,children:[{path:"",name:"Home",component:function(){return Promise.all([n.e("chunk-corejs"),n.e("chunk-e07d4296")]).then(n.bind(null,"bb51"))}},{path:"/changelog",name:"Changelog",component:function(){return n.e("chunk-1e592b1e").then(n.bind(null,"f522"))}},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-corejs"),n.e("chunk-b06a2d6e")]).then(n.bind(null,"f820"))}}]}]}],F=new P.a({mode:"history",base:"/Reve-Iris-button/",routes:G}),$=F,M=n("5880"),K=n.n(M);o.a.use(K.a);var z=new K.a.Store({state:{},mutations:{},actions:{},modules:{}}),Y=(n("159b"),n("ac1f"),n("5319"),n("60bb")),q=n.n(Y),Q=n("ffe0");Q.keys().forEach((function(t){var e=Q(t),n=q.a.upperFirst(q.a.camelCase(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));o.a.component(n,e.default||e)}));n("b20f");o.a.config.productionTip=!1,new o.a({name:"Root",router:$,store:z,i18n:l["a"],vuetify:u,render:function(t){return t(_)}}).$mount("#app")},cebe:function(t,e){t.exports=axios},cf13:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"reve-card",attrs:{flat:"",rounded:"xl"}},[t.title?n("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.title)+" ")]):t._e(),n("v-card-text",[t._t("default")],2)],1)},o=[],r=n("a6f4"),i=n("fe0b");function c(t,e){var n=Object(r["a"])((function(){return(null===e||void 0===e?void 0:e.value)?e.value:t.value?i["a"].t("tags.".concat(t.value)):""}));return n}var u=Object(r["d"])({name:"ReveCard",props:{tag:{type:String,default:""},rawTitle:{type:String,default:""}},setup:function(t,e){var n=Object(r["s"])(t),a=n.rawTitle,o=n.tag,i=c(o,a);return{title:i}}}),l=u,s=(n("fb7e"),n("2877")),f=Object(s["a"])(l,a,o,!1,null,"1b7b798c",null);e["default"]=f.exports},fb7e:function(t,e,n){"use strict";n("4991")},fdab:function(t,e,n){},fe0b:function(t,e,n){"use strict";var a=n("8bbf"),o=n.n(a),r=n("85b3"),i=n.n(r),c=n("8a43");o.a.use(i.a);var u={locale:"zh",fallbackLocale:"zh",silentFallbackWarn:!0,formatFallbackMessages:!0,messages:c["a"]};e["a"]=new i.a(u)},ffe0:function(t,e,n){var a={"./CopyrightFooter.vue":"8e34","./ReveButton.vue":"4aea","./ReveCard.vue":"cf13","./SafeLink.vue":"0b75"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="ffe0"}});