(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e07d4296"],{"09ab":function(t,e,n){},"0ecf":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(a,r,o){var s=r.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},s.utc=function(e){var n=o(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var i=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),i.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=s.utcOffset;s.utcOffset=function(a,r){var o=this.$utils().u;if(o(a))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof a&&null===(a=function(t){void 0===t&&(t="");var a=t.match(e);if(!a)return null;var r=(""+a[0]).match(n)||["-",0,0],o=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===o?s:-s}(a)))return this;var s=Math.abs(a)<=16?60*a:a,i=this;if(r)return i.$offset=s,i.$u=0===a,i;if(0!==a){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(i=this.local().add(s+u,t)).$offset=s,i.$x.$localOffset=u}else i=this.utc();return i};var l=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var h=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var p=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return p.call(this,t,e,n);var a=this.local(),r=o(t).local();return p.call(a,r,e,n)}}}))},1953:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,a,r){var o,s=function(t,n,a){void 0===a&&(a={});var r=new Date(t);return function(t,n){void 0===n&&(n={});var a=n.timeZoneName||"short",r=t+"|"+a,o=e[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:a}),e[r]=o),o}(n,a).formatToParts(r)},i=function(e,n){for(var a=s(e,n),o=[],i=0;i<a.length;i+=1){var u=a[i],c=u.type,l=u.value,h=t[c];h>=0&&(o[h]=parseInt(l,10))}var p=o[3],g=24===p?0:p,m=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",f=+e;return(r.utc(m).valueOf()-(f-=f%1e3))/6e4},u=a.prototype;u.tz=function(t,e){void 0===t&&(t=o);var n=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:t}),i=Math.round((a-new Date(s))/1e3/60),u=r(s).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-i,!0);if(e){var c=u.utcOffset();u=u.add(n-c,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=s(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var c=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,n){var a=n&&e,s=n||e||o,u=i(+r(),s);if("string"!=typeof t)return r(t).tz(s);var c=function(t,e,n){var a=t-60*e*1e3,r=i(a,n);if(e===r)return[a,e];var o=i(a-=60*(r-e)*1e3,n);return r===o?[a,r]:[t-60*Math.min(r,o)*1e3,Math.max(r,o)]}(r.utc(t,a).valueOf(),u,s),l=c[0],h=c[1],p=r(l).utcOffset(h);return p.$x.$timezone=s,p},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){o=t}}}))},"3d82":function(t,e,n){"use strict";n("09ab")},"525b":function(t,e,n){t.exports=n.p+"img/shabao.min.11635273.jpg"},7423:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=[{msg:"VTuber按钮合集",url:"https://vtbbtn.org/",color:"#00ceff"},{msg:"梦魇按钮",url:"https://ciyana.moe/",color:"#0d2485"},{msg:"豹按钮 (:3っ)∋",url:"https://haruka.fun/",color:"#ffaea6"},{msg:"瑞按钮",url:"http://rhea0807.cn/",color:"#966ede"},{msg:"深按钮",url:"https://service-g4imrhfu-1259477301.gz.apigw.tencentcs.com/",color:"#c3938f"},{msg:"弥按钮",url:"https://www.supermikimiki.com/",color:"#614e6e"},{msg:"孟按钮",url:"https://mahiru.cn/#/",color:"#ff6569"},{msg:"koxia按钮",url:"https://www.koxia.love/",color:"#9d919f"}]},"96cf":function(t,e,n){var a=function(t){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,n){return t[e]=n}}function c(t,e,n,a){var r=e&&e.prototype instanceof v?e:v,o=Object.create(r.prototype),s=new k(a||[]);return o._invoke=x(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=c;var h="suspendedStart",p="suspendedYield",g="executing",m="completed",f={};function v(){}function d(){}function y(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,z=w&&w(w(D([])));z&&z!==n&&a.call(z,o)&&(b=z);var S=y.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(r,o,s,i){var u=l(t[r],t,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"===typeof h&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,i)}),(function(t){n("throw",t,s,i)})):e.resolve(h).then((function(t){c.value=t,s(c)}),(function(t){return n("throw",t,s,i)}))}i(u.arg)}var r;function o(t,a){function o(){return new e((function(e,r){n(t,a,e,r)}))}return r=r?r.then(o,o):o()}this._invoke=o}function x(t,e,n){var a=h;return function(r,o){if(a===g)throw new Error("Generator is already running");if(a===m){if("throw"===r)throw o;return L()}n.method=r,n.arg=o;while(1){var s=n.delegate;if(s){var i=j(s,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var u=l(t,e,n);if("normal"===u.type){if(a=n.done?m:p,u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=m,n.method="throw",n.arg=u.arg)}}}function j(t,n){var a=t.iterator[n.method];if(a===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function D(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function n(){while(++r<t.length)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:L}}function L(){return{value:e,done:!0}}return d.prototype=y,u(S,"constructor",y),u(y,"constructor",d),d.displayName=u(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,i,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var s=new _(c(e,n,a,r),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},O(S),u(S,i,"Generator"),u(S,o,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=D,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return i.type="throw",i.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var u=a.call(s,"catchLoc"),c=a.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:D(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=a}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}},"9d97":function(t,e,n){t.exports=n.p+"img/shabao.11635273.jpg"},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("ReveCard",[n("v-row",{attrs:{algin:"start",justify:"start"}},[n("v-col",{attrs:{cols:"12",sm:"4",md:"3",lg:"2"}},[n("v-img",{staticClass:"rounded-lg",attrs:{src:t.shabao,"lazy-src":t.shabaoMin,width:"220px",contain:""}})],1),n("v-col",{staticClass:"subtitle-1",attrs:{cols:"12",sm:"8",md:"9",lg:"10"}},[t._v(" 欢迎来到 “芙按钮” 项目，这是一个从 "),n("SafeLink",{attrs:{target:"_blank",href:"https://vtbbtn.org/"}},[t._v(" https://vtbbtn.org/ ")]),t._v(" 获得灵感的项目。"),n("br"),n("b",[t._v("新增音声")]),t._v("：请通过B站联系“ "),n("a",{attrs:{target:"_blank",href:"https://space.bilibili.com/134104"}},[t._v(" 兰斯Official")]),t._v(" ”"),n("br"),n("b",[t._v("使用指南")]),t._v("：点击按钮即可播放对应音声；多次点击可以造成相当鬼畜的效果；开启洗脑循环将会一直播放一个音频； 同时开启循环播放和洗脑循环将会出现 地 狱 绘 卷。"),n("br"),n("b",[t._v("声明")]),t._v("：本项目仅为 DD 作品，和 瑞芙Reve、Virtuareal 官方没有关联"),n("br"),n("b",[t._v("特别感谢")]),t._v("：“ "),n("a",{attrs:{target:"_blank",href:"https://github.com/CaoMeiYouRen/shirakami-haruka-button"}},[t._v(" 豹按钮(:3っ)∋")]),t._v(" ” 项目，初版源码基本来自于此项目，本站将于10月开始进行实质的功能性更新"),n("br")],1)],1)],1)],1)],1),n("v-row",[t.enableDynamic?n("v-col",{attrs:{cols:"12"}},[n("ReveCard",{attrs:{"raw-title":t.$t("dynamic.LatestDynamic")}},[t.loading?n("v-row",t._l(3,(function(t){return n("v-col",{key:t,attrs:{cols:"4"}},[n("v-skeleton-loader",{attrs:{type:"card"}})],1)})),1):t._e(),t.loading?t._e():n("v-row",[t.dynamic.length?t._l(t.dynamic,(function(e){return n("v-col",{key:e.guid,attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[n("v-card",{staticClass:"reve-card",attrs:{flat:"",rounded:"xl"}},[n("v-card-text",{staticClass:"subtitle-1"},[t._v(" "+t._s(e.contentSnippet)+" "),n("br"),n("span",[t._v(t._s(t.$t("dynamic.DynamicLink"))+"："),n("a",{attrs:{target:"_blank",href:e.link}},[t._v(t._s(e.link))])]),n("br"),t._v(" "+t._s(t.$t("dynamic.PublishTime"))+"："+t._s(e.isoDate)+" ")])],1)],1)})):t._e(),t.dynamic.length?t._e():[n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[n("v-card",{staticClass:"reve-card",attrs:{flat:"",rounded:"xl"}},[n("v-card-text",{staticClass:"subtitle-1"},[t._v(" "+t._s(t.$t("dynamic.NoDynamic"))+" ")])],1)],1)]],2)],1)],1):t._e()],1),n("v-row",{class:{fixed:t.fixed},attrs:{algin:"start",justify:"start"}},[n("v-col",{attrs:{cols:"12"}},[n("ReveCard",{staticClass:"control",attrs:{"raw-title":t.$t("play.PlaybackControl")}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"pin",on:{click:function(e){t.fixed=!t.fixed}}},"v-icon",r,!1),a),[t._v(" "+t._s(t.fixed?"mdi-pin":"mdi-pin-off")+" ")])]}}])},[n("span",[t._v(t._s(t.$t("play.FixedControlPanel")))])]),n("span",{staticClass:"reve-button"},[n("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.startLoop}},[n("v-icon",[t._v("play_arrow")]),t._v(t._s(t.$t("play.LoopPlayback"))+" ")],1)],1),n("span",{staticClass:"reve-button"},[n("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.startRandomPlay}},[n("v-icon",[t._v("iconfont icon-suijibofang")]),t._v(t._s(t.$t("play.RandomPlay"))+" ")],1)],1),n("span",{staticClass:"reve-button"},[n("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.stopLoop}},[n("v-icon",[t._v("stop")]),t._v(t._s(t.$t("play.StopPlay"))+" ")],1)],1),n("span",{staticClass:"reve-button"},[n("v-btn",{attrs:{color:t.isLoop?"primary":"#fff",rounded:""},on:{click:function(e){t.isLoop=!t.isLoop}}},[n("v-icon",[t._v("mdi-restore")]),t._v(t._s(t.isLoop?t.$t("play.LoopOn"):t.$t("play.LoopOff"))+" ")],1)],1)],1)],1)],1),n("v-row",{attrs:{algin:"start",justify:"start"}},t._l(t.voicesGroup,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12"}},[n("ReveCard",{attrs:{tag:a}},t._l(e,(function(e,a){return n("ReveButton",{key:a,attrs:{path:e.path,messages:e.messages,"is-loop":t.isLoop,"stop-all":t.stopAll},model:{value:e.isPlay,callback:function(n){t.$set(e,"isPlay",n)},expression:"e.isPlay"}})})),1)],1)})),1),n("v-row",{attrs:{algin:"start",justify:"start"}},[n("v-col",{attrs:{cols:"12"}},[n("ReveCard",{attrs:{"raw-title":t.$t("FriendlyLink")}},t._l(t.friendshipLinks,(function(e){return n("v-btn",{key:e.url,staticClass:"friendship-link white--text",attrs:{href:e.url,color:e.color,target:"_blank",rounded:""}},[t._v(" "+t._s(e.msg)+" ")])})),1)],1)],1)],1)},r=[];n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("d3b7");function u(t,e,n,a,r,o,s){try{var i=t[o](s),u=i.value}catch(c){return void n(c)}i.done?e(u):Promise.resolve(u).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){u(o,a,r,s,i,"next",t)}function i(t){u(o,a,r,s,i,"throw",t)}s(void 0)}))}}n("96cf"),n("ac1f"),n("d81d"),n("fb6a"),n("5319"),n("a434");var l=n("9d97"),h=n.n(l),p=n("525b"),g=n.n(p),m=n("759a"),f=n("7423"),v=[{messages:{zh:"嗷",en:"ow",ja:"おお"},path:"嗷.mp3",tag:"Tone"},{messages:{zh:"啊~嗯~",en:"Ah ~um",ja:"あ～うん～"},path:"啊~嗯~.mp3",tag:"Tone"},{messages:{zh:"吃鸡蛋怪叫",en:""},path:"吃鸡蛋怪叫.mp3",tag:"Tone"},{messages:{zh:"伸懒腰",en:""},path:"伸懒腰.mp3",tag:"Tone"},{messages:{zh:"咀嚼音",en:""},path:"咀嚼音.mp3",tag:"Tone"},{messages:{zh:"打我~打我~打我~",en:""},path:"打我~打我~打我~.mp3",tag:"Tone"},{messages:{zh:"小猫叫"},path:"小猫叫.mp3",tag:"Tone"},{messages:{zh:"晚上好~我回来了"},path:"晚上好~我回来了.mp3",tag:"Greet"},{messages:{zh:"工作辛苦了"},path:"工作辛苦了.mp3",tag:"Greet"},{messages:{zh:"晚安啾咪1"},path:"晚安啾咪1.mp3",tag:"Greet"},{messages:{zh:"晚安啾咪2"},path:"晚安啾咪2.mp3",tag:"Greet"},{messages:{zh:"睡吧~睡吧~我亲爱的宝贝"},path:"睡吧~睡吧~我亲爱的宝贝.mp3",tag:"Greet"},{messages:{zh:"我超，冰",en:"",ja:""},path:"我超，冰.mp3",tag:"Chaos"},{messages:{zh:"我只是想脱掉你的外衣",en:"",ja:""},path:"我只是想脱掉你的外衣.mp3",tag:"Chaos"},{messages:{zh:"怎么都想让我吃你们",en:""},path:"怎么都想让我吃你们.mp3",tag:"Chaos"},{messages:{zh:"剥鸡蛋",en:"",ja:""},path:"剥鸡蛋.mp3",tag:"Normal"},{messages:{zh:"我特别喜欢吃蛋的时候把蛋黄挤出来的那一刻，爽到",en:""},path:"我特别喜欢吃蛋的时候把蛋黄挤出来的那一刻，爽到.mp3",tag:"Normal"},{messages:{zh:"嗯~~蛋黄掉出来了",en:"",ja:""},path:"嗯~~蛋黄掉出来了.mp3",tag:"Normal"},{messages:{zh:"吃完了一个蛋，很开心",en:"",ja:""},path:"吃完了一个蛋，很开心.mp3",tag:"Normal"},{messages:{zh:"对不起",en:"",ja:""},path:"对不起.mp3",tag:"Normal"},{messages:{zh:"喝一口奶茶"},path:"喝一口奶茶.mp3",tag:"Normal"},{messages:{zh:"来~我们来继续读书"},path:"来~我们来继续读书.mp3",tag:"Normal"},{messages:{zh:"快给人家充电",en:"",ja:""},path:"快给人家充电.mp3",tag:"Normal"},{messages:{zh:"快来接电话",en:"",ja:""},path:"快来接电话.mp3",tag:"Normal"},{messages:{zh:"我变成猫的话大家会在猫咪中一眼看到我吗",en:""},path:"我变成猫的话大家会在猫咪中一眼看到我吗.mp3",tag:"Normal"},{messages:{zh:"长亭外",en:""},path:"长亭外.mp3",tag:"Song"},{messages:{zh:"处处D",en:""},path:"处处D.mp3",tag:"Song"},{messages:{zh:"BANG BANG BANG",en:""},path:"BANG BANG BANG.mp3",tag:"Song"},{messages:{zh:"dancing tonight",en:""},path:"dancing tonight.mp3",tag:"Song"},{messages:{zh:"green flash",en:""},path:"green flash.mp3",tag:"Song"},{messages:{zh:"I really like you",en:""},path:"I really like you.mp3",tag:"Song"},{messages:{zh:"Into The Unkown （四语）",en:""},path:"Into The Unkown （四语）.mp3",tag:"Song"},{messages:{zh:"Love Story",en:""},path:"Love Story.mp3",tag:"Song"},{messages:{zh:"The show",en:""},path:"The show.mp3",tag:"Song"},{messages:{zh:"Wherever you are",en:""},path:"Wherever you are.mp3",tag:"Song"},{messages:{zh:"爱的飞行日记",en:""},path:"爱的飞行日记.mp3",tag:"Song"},{messages:{zh:"爱人错过",en:""},path:"爱人错过.mp3",tag:"Song"},{messages:{zh:"半生缘",en:""},path:"半生缘.mp3",tag:"Song"},{messages:{zh:"赤伶",en:""},path:"赤伶.mp3",tag:"Song"},{messages:{zh:"放肆爱",en:""},path:"放肆爱.mp3",tag:"Song"},{messages:{zh:"极恶都市",en:""},path:"极恶都市.mp3",tag:"Song"},{messages:{zh:"嘉宾",en:""},path:"嘉宾.mp3",tag:"Song"},{messages:{zh:"恋爱ING",en:""},path:"恋爱ING.mp3",tag:"Song"},{messages:{zh:"恋爱幸运曲奇",en:""},path:"恋爱幸运曲奇.mp3",tag:"Song"},{messages:{zh:"蜜雪冰城",en:""},path:"蜜雪冰城.mp3",tag:"Song"},{messages:{zh:"霓虹甜心",en:""},path:"霓虹甜心.mp3",tag:"Song"},{messages:{zh:"三寸天堂",en:""},path:"三寸天堂.mp3",tag:"Song"},{messages:{zh:"身骑白马",en:""},path:"身骑白马.mp3",tag:"Song"},{messages:{zh:"水星记",en:""},path:"水星记.mp3",tag:"Song"},{messages:{zh:"说爱你1",en:""},path:"说爱你1.mp3",tag:"Song"},{messages:{zh:"说爱你2",en:""},path:"说爱你2.mp3",tag:"Song"},{messages:{zh:"下雨了是我在想你",en:""},path:"下雨了是我在想你.mp3",tag:"Song"},{messages:{zh:"想去海边",en:""},path:"想去海边.mp3",tag:"Song"},{messages:{zh:"想去海边（live）",en:""},path:"想去海边（live）.mp3",tag:"Song"},{messages:{zh:"小幸运",en:""},path:"小幸运.mp3",tag:"Song"},{messages:{zh:"辛德瑞拉",en:""},path:"辛德瑞拉.mp3",tag:"Song"},{messages:{zh:"星光游乐园",en:""},path:"星光游乐园.mp3",tag:"Song"},{messages:{zh:"血腥爱情故事",en:""},path:"血腥爱情故事.mp3",tag:"Song"},{messages:{zh:"燕尾蝶",en:""},path:"燕尾蝶.mp3",tag:"Song"},{messages:{zh:"也罢",en:""},path:"也罢.mp3",tag:"Song"},{messages:{zh:"夜车",en:""},path:"夜车.mp3",tag:"Song"},{messages:{zh:"雨爱",en:""},path:"雨爱.mp3",tag:"Song"},{messages:{zh:"雨樱花",en:""},path:"雨樱花.mp3",tag:"Song"},{messages:{zh:"缘尽世间",en:""},path:"缘尽世间.mp3",tag:"Song"},{messages:{zh:"月亮船",en:""},path:"月亮船.mp3",tag:"Song"},{messages:{zh:"벌써 12시",en:""},path:"벌써 12시.mp3",tag:"Song"},{messages:{zh:"真相是假",en:""},path:"真相是假.mp3",tag:"Song"},{messages:{zh:"捉泥鳅",en:""},path:"捉泥鳅.mp3",tag:"Song"},{messages:{zh:"Dance The Night Away",en:""},path:"Dance The Night Away.mp3",tag:"Song"},{messages:{zh:"Queendom",en:""},path:"Queendom.mp3",tag:"Song"},{messages:{zh:"ReReハロ~終われそうにない夏~",en:""},path:"ReReハロ~終われそうにない夏~.mp3",tag:"Song"},{messages:{zh:"Say So",en:""},path:"Say So.mp3",tag:"Song"},{messages:{zh:"Shopping的回忆",en:""},path:"Shopping的回忆.mp3",tag:"Song"},{messages:{zh:"DUMDi DUMDi",en:""},path:"DUMDi DUMDi.mp3",tag:"Song"},{messages:{zh:"宁夏",en:""},path:"宁夏.mp3",tag:"Song"},{messages:{zh:"夏天结束了",en:""},path:"夏天结束了.mp3",tag:"Song"},{messages:{zh:"夏之回忆",en:""},path:"夏之回忆.mp3",tag:"Song"},{messages:{zh:"線香花火",en:""},path:"線香花火.mp3",tag:"Song"},{messages:{zh:"我的一个道姑朋友 with 狗蛋",en:""},path:"我的一个道姑朋友 with 狗蛋.mp3",tag:"Song"},{messages:{zh:"KTV.刚好遇见你",en:""},path:"KTV.刚好遇见你.mp3",tag:"Song"},{messages:{zh:"KTV.水手",en:""},path:"KTV.水手.mp3",tag:"Song"},{messages:{zh:"KTV.水星记",en:""},path:"KTV.水星记.mp3",tag:"Song"},{messages:{zh:"KTV.我好想你",en:""},path:"KTV.我好想你.mp3",tag:"Song"},{messages:{zh:"KTV.左手指月",en:""},path:"KTV.左手指月.mp3",tag:"Song"}],d=v,y=(n("e01a"),n("498a"),n("b96f")),b=n.n(y),w=new b.a;function z(t){return S.apply(this,arguments)}function S(){return S=c(regeneratorRuntime.mark((function t(e){var n,a,r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.parseString(e);case 2:return s=t.sent,s.description=null===(n=s.description)||void 0===n?void 0:n.trim(),s.title=null===(a=s.title)||void 0===a?void 0:a.trim(),s.image&&(s.image.title=null===(r=s.image.title)||void 0===r?void 0:r.trim()),s.items=null===(o=s.items)||void 0===o?void 0:o.map((function(t){var e,n,a,r;return t.title=null===(e=t.title)||void 0===e?void 0:e.trim(),t.content=null===(n=t.content)||void 0===n?void 0:n.trim(),t.contentSnippet=null===(a=t.contentSnippet)||void 0===a?void 0:a.trim(),t.guid=null===(r=t.guid)||void 0===r?void 0:r.trim(),t})),t.abrupt("return",s);case 8:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}n("25f0");var O=n("6e85"),_=n.n(O),x=n("0ecf"),j=n.n(x),$=n("1953"),T=n.n($);function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss.SSS";return"number"===typeof t&&10===t.toString().length&&t<1e10&&(t*=1e3),_()(t).tz().format(e)}_.a.extend(j.a),_.a.extend(T.a),_.a.tz.setDefault("Asia/Shanghai");var D=n("cebe"),L=n.n(D),C=n("f947"),P=n("a6f4");function N(t,e=!1){const n=Object(P["p"])(!1),a=Object(P["p"])(null);let r=void 0;const o=t=>{r&&(r.cancel(t),n.value=!0,a.value=t)},s=Object(C["f"])(async e=>{r=L.a.CancelToken.source(),n.value=!1,a.value=null;const o=Object(C["c"])(e)?{url:e}:e;return t.request({cancelToken:r.token,...o})},{lazy:!0,throwException:e}),i=Object(P["a"])(()=>s.result.value&&s.result.value.data||s.error.value&&s.error.value.response&&s.error.value.response.data||null),u=Object(P["a"])(()=>s.result.value&&s.result.value.status||s.error.value&&s.error.value.response&&s.error.value.response.status||null),c=Object(P["a"])(()=>s.result.value&&s.result.value.statusText||s.error.value&&s.error.value.response&&s.error.value.response.statusText||null);return{...s,client:t,data:i,status:u,statusText:c,cancel:o,isCancelled:n,cancelledMessage:a}}function M(t,e,n=!1){const a=Object(C["c"])(t)||Object(C["a"])(t)?Object(C["b"])(e)?e:void 0:t;n=Object(C["a"])(t)?t:Object(C["a"])(e)?e:n;const r=L.a.create(a),o=N(r,n);return"string"===typeof t?o.exec({...a,url:t},!1):a&&a.url&&o.exec(a,!1),o}var E=n("60bb"),R=n.n(E);function G(t){if(!t)return{dynamic:[],loading:!1,enableDynamic:!1};var e=M("/bilibili/user/dynamic/".concat(t),{baseURL:m["n"]}),n=e.data,a=e.loading,r=e.cancel,o=Object(C["f"])((function(){return z(n.value)}),{lazy:!0}),s=o.exec,i=o.result;Object(P["u"])(n,(function(){s()}));var u=Object(P["a"])((function(){var t,e=(null===(t=null===i||void 0===i?void 0:i.value)||void 0===t?void 0:t.items)||[];return e.slice(0,3).map((function(t){var e;return t.contentSnippet=null===(e=t.contentSnippet)||void 0===e?void 0:e.replace(/(\n[\s|\t]*\r*\n)/g,"\n"),t.isoDate=k(t.isoDate,"YYYY-MM-DD HH:mm:ss"),t}))}));return Object(P["m"])((function(){a.value&&r()})),{dynamic:u,loading:a,enableDynamic:!0}}function Y(){var t=Object(P["p"])(d.map((function(t){return t.isPlay=!1,t}))),e=Object(P["p"])(!1),n=Object(P["p"])(!1),a=Object(P["p"])(!1),r=Object(P["p"])(t.value.map((function(t,e){return e}))),o=Object(P["a"])((function(){return R.a.groupBy(t.value,"tag")})),s=Object(P["p"])(0),i=Object(P["a"])((function(){return t.value[s.value]})),u=null;function l(){return h.apply(this,arguments)}function h(){return h=c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m(),e.next=3,Object(P["h"])();case 3:i.value.isPlay=!0,s.value=0,u||(u=Object(P["u"])(i,(function(e,n,a){e.isPlay||(s.value+=1,s.value%=t.value.length,i.value.isPlay=!0)}),{deep:!0}));case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function p(){r.value.length<=0&&(r.value=t.value.map((function(t,e){return e})));var e=Math.floor(Math.random()*r.value.length);s.value=r.value[e],r.value.splice(e,1),i.value.isPlay=!0}function g(){m(),p(),u||(u=Object(P["u"])(i,(function(t,e,n){t.isPlay||p()}),{deep:!0}))}function m(){return f.apply(this,arguments)}function f(){return f=c(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u&&(u(),u=null),i.value.isPlay=!1,s.value=0,n.value=!0,t.next=6,Object(P["h"])();case 6:n.value=!1;case 7:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}return{isLoop:e,voicesGroup:o,startLoop:l,startRandomPlay:g,stopLoop:m,fixed:a,stopAll:n}}var U=Object(P["d"])({name:"Home",props:{},setup:function(t,e){var n=Y(),a=G(m["d"]);return i(i(i({},n),{},{shabao:h.a,shabaoMin:g.a,friendshipLinks:f["a"]},a),{},{HTML_TITLE:m["i"],GITHUB_LINK:m["g"]})}}),I=U,H=(n("3d82"),n("2877")),A=Object(H["a"])(I,a,r,!1,null,"9771a53c",null);e["default"]=A.exports}}]);