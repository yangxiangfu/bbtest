webpackJsonp([0],{118:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},119:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title"],data:function(){return{toolList:[{text:"重构项目数据"},{text:"重构参数数据"}],fullscreenLoading:!1}},methods:{tools:function(t){switch(this.fullscreenLoading=!0,t){case 0:this.rePro();break;case 1:this.reParams()}},rePro:function(){this.$http.get("base/rebuild").then(function(){window.location.reload(!0)})},reParams:function(){this.$http.get("base/reset").then(function(){window.location.reload(!0)})}}}},120:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(124),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={mixins:[n.default],props:{info:{type:Object,default:{name:"",status:0,item:[]}}},data:function(){return{}},methods:{save:function(){this.$http.get("/api/changeBaseUrl",{params:{id:this.info.id,baseUrl:this.info.baseUrl}})}},created:function(){}}},121:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(45),r=a(n),i=s(44),o=a(i),l=s(68),c=a(l);e.default={data:function(){return{proList:[{createTime:"",id:"",interfaceCount:0,name:"",status:0,updateTime:0,userCount:0}]}},methods:{getPro:function(){var t=this;return(0,o.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/pro");case 2:t.proList=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()},turnItem:function(t){this.$router.push("/interface?id="+t.id)}},created:function(){this.getPro()},components:{vHeader:c.default}}},122:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var s=t.url;return e.filter(function(t){return"rest"===t.type}).map(function(t){s=s.replace("{"+t.key+"}",t.default)}),s}function r(t){var e=t.filter(function(t){return"header"===t.type}),s={};return e.map(function(t){s[t.key]=t.default}),s}function i(t){var e=t.filter(function(t){return"body"===t.type}),s={};return e.map(function(t){switch(t.what){case"String":t.default=""+t.default;break;case"Number":t.default=+t.default;break;default:t.default=""+t.default}s[t.key]=t.default}),s}Object.defineProperty(e,"__esModule",{value:!0});var o=s(43),l=a(o),c=s(45),u=a(c),d=s(126),f=a(d),p=s(44),v=a(p),m=s(68),h=a(m),_=s(187),b=a(_);e.default={data:function(){return{list:[],item:[],showItem:{},info:{name:"",item:[]},description:[],fullscreenLoading:!1,result:{code:"",msg:"",data:""}}},methods:{getSer:function(){var t=this;return(0,v.default)(u.default.mark(function e(){var s,a,n,r,i,o,l;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/ser",{params:{id:t.$route.query.id}});case 2:s=e.sent.data,a=!0,n=!1,r=void 0,e.prev=6,i=(0,f.default)(s);case 8:if(a=(o=i.next()).done){e.next=16;break}return l=o.value,e.next=12,t.getApi(l.id);case 12:l.item=e.sent.data;case 13:a=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),n=!0,r=e.t0;case 22:e.prev=22,e.prev=23,!a&&i.return&&i.return();case 25:if(e.prev=25,!n){e.next=28;break}throw r;case 28:return e.finish(25);case 29:return e.finish(22);case 30:t.list=s;case 31:case"end":return e.stop()}},e,t,[[6,18,22,30],[23,,25,29]])}))()},getApi:function(t){return this.$http.get("/api/interface",{params:{id:t}})},show:function(t){this.showItem=t,this.getParams(t)},changeInfo:function(t){this.info=this.list[t],this.showItem={}},getParams:function(t){var e=this;this.$http.get("/api/params",{params:{id:t.id,did:t.did}}).then(function(t){e.description=t.data.sort(function(t,e){return t.type-e.type}),e.description.map(function(t){switch(t.type){case 1:t.type="body";break;case 0:t.type="header";break;case 2:t.type="rest"}switch(t.required){case 1:t.required="是";break;case 0:t.required="否";break;case null:t.required="未知"}switch(t.what){case null:t.what="";break;case"String":t.what="字符串";break;case"Number":t.what="数字";break;default:t.what="错误"}})})},save:function(t,e,s){return this.$http.get("/api/saveParam",{params:{pid:t,key:e,defaultValue:s}})},saveAll:function(){var t=this,e=this.description.map(function(e){return t.save(e.pid,e.key,e.default,e.what)});l.default.all(e).then(function(e){t.$notify({title:"成功",message:"已经保存到对应的接口",type:"success"})})},post:function(){var t=this.info.baseUrl+n(this.showItem,this.description);switch(this.showItem.method.toLowerCase()){case"post":this.methodPost(t);break;case"get":this.methodGet(t)}},methodPost:function(t){var e=this;r(this.description)["Content-Type"]="application/x-www-form-urlencoded";var s=i(this.description);this.$http({method:"post",url:t,params:s,requestHeader:{"Content-Type":"application/json"},responseType:""}).then(function(t){e.result=t.data})},methodGet:function(t){var e=this,s=r(this.description),a=i(this.description);this.$http.get(t,{headers:s,params:a}).then(function(t){e.result=t.data})}},created:function(){this.getSer()},components:{vHeader:h.default,vInfo:b.default}}},123:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{username:"",userpwd:"",errorText:!1,isActive:!0,isActive2:!0}},methods:{login:function(){var t=this;this.$http.post("/user/login",{username:this.username,userpwd:this.userpwd}).then(function(e){e.data.code?t.$router.push("/index"):(t.errorText=!0,setTimeout(function(){t.errorText=!1},1e3))})}}}},124:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{styles:{type:String,default:""},className:{type:String,default:""}}}},125:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=s(4),r=a(n),i=s(76),o=a(i),l=s(71),c=a(l),u=s(77),d=a(u),f=s(72),p=a(f);s(73),s(74);var v=s(70),m=a(v);s(75),r.default.prototype.$http=m.default;var h=new d.default({routes:c.default});r.default.use(p.default),r.default.use(d.default),new r.default({el:"#app",render:function(t){return t(o.default)},router:h})},177:function(t,e){},178:function(t,e){},179:function(t,e){},180:function(t,e){},181:function(t,e){},182:function(t,e){},187:function(t,e,s){s(177);var a=s(11)(s(120),s(190),"data-v-30fb3f60",null);t.exports=a.exports},188:function(t,e,s){s(182),s(181);var a=s(11)(s(122),s(195),"data-v-c497a180",null);t.exports=a.exports},189:function(t,e,s){s(180);var a=s(11)(s(123),s(193),"data-v-78e1ab70",null);t.exports=a.exports},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.info.item.length?s("el-row",{staticClass:"bg",class:t.className,style:t.styles},[s("el-col",{staticClass:"title",attrs:{span:22,offset:1}},[s("span",{staticClass:"name"},[t._v(t._s(t.info.name))]),t._v(" "),s("span",{staticClass:"status"},[t._v("状态："+t._s(0===t.info.status?"正常":"异常"))]),t._v(" "),s("span",{staticClass:"count"},[t._v("接口数量："+t._s(t.info.item.length))])]),t._v(" "),s("el-col",{attrs:{span:6,offset:1}},[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入baseUrl"},model:{value:t.info.baseUrl,callback:function(e){t.info.baseUrl=e},expression:"info.baseUrl"}})],1),t._v(" "),s("el-col",{attrs:{span:10,offset:7}},[s("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1):t._e()},staticRenderFns:[]}},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"header"},[s("el-col",{staticClass:"item1",attrs:{span:8}},[t._v("BBFE")]),t._v(" "),s("el-col",{staticClass:"item2",attrs:{span:8}},[t._v(t._s(t.title))]),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-dropdown",{staticClass:"item3",attrs:{trigger:"click","menu-align":"start"}},[s("span",{staticClass:"el-dropdown-link"},[s("span",[t._v("tools")]),s("i",{staticClass:"el-icon-caret-bottom el-icon--right i"})]),t._v(" "),s("el-dropdown-menu",{slot:"dropdown"},t._l(t.toolList,function(e,a){return s("el-dropdown-item",{key:e.text},[s("span",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],on:{click:function(e){t.tools(a)}}},[t._v(t._s(e.text))])])}))],1)],1)],1)},staticRenderFns:[]}},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-header",{attrs:{title:"Product List"}}),t._v(" "),s("el-row",{staticClass:"body"},t._l(t.proList,function(e,a){return s("el-col",{key:e.text,staticClass:"pro",attrs:{span:6}},[s("div",{staticClass:"pro-i",on:{click:function(s){t.turnItem(e)}}},[s("el-row",{staticClass:"title"},[s("el-col",{attrs:{span:24}},[t._v(t._s(e.name))])],1),t._v(" "),s("el-row",{staticClass:"info"},[s("el-col",{attrs:{span:24}},[t._v("参与人数："+t._s(e.userCount)+" 接口总数："+t._s(e.interfaceCount))])],1)],1)])}))],1)},staticRenderFns:[]}},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg"},[s("div",{staticClass:"login-box"},[t._m(0),t._v(" "),s("div",{staticClass:"main"},[s("ul",[s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username",autocomplete:"off"},domProps:{value:t.username},on:{focus:function(e){t.isActive=!t.isActive},blur:function(e){t.isActive=!t.isActive},input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("i",{staticClass:"t",class:{t1:t.isActive}}),s("i",{staticClass:"r",class:{r1:t.isActive}}),s("i",{staticClass:"b",class:{b1:t.isActive}}),s("i",{staticClass:"l",class:{l1:t.isActive}})]),t._v(" "),s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userpwd,expression:"userpwd"}],attrs:{type:"password",placeholder:"password",autocomplete:"off"},domProps:{value:t.userpwd},on:{focus:function(e){t.isActive2=!t.isActive2},blur:function(e){t.isActive2=!t.isActive2},input:function(e){e.target.composing||(t.userpwd=e.target.value)}}}),s("i",{staticClass:"t",class:{t1:t.isActive2}}),s("i",{staticClass:"r",class:{r1:t.isActive2}}),s("i",{staticClass:"b",class:{b1:t.isActive2}}),s("i",{staticClass:"l",class:{l1:t.isActive2}})])])]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"btn",on:{click:t.login}},[t._v("登录")]),t._v(" "),s("div",{staticClass:"btn"},[t._v("修改用户")])])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.errorText?s("div",{staticClass:"tips",on:{click:function(e){t.errorText=!t.errorText}}},[s("div",{staticClass:"wrap"},[s("span",[t._v("登录失败,请重新登录")])])]):t._e()])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("Login")])])}]}},194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"body"},[s("v-header",{attrs:{title:"Interface List"}}),t._v(" "),s("el-col",{staticClass:"nav",attrs:{span:4}},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0},on:{open:t.changeInfo}},t._l(t.list,function(e,a){return s("el-submenu",{key:e.id,attrs:{index:a+""}},[s("template",{slot:"title"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.item,function(e,n){return s("el-menu-item",{key:e.id,attrs:{index:a+"-"+n},on:{click:function(s){t.show(e)}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])})],2)}))],1),t._v(" "),s("el-col",{staticClass:"board",attrs:{span:20}},[s("v-info",{attrs:{info:t.info}}),t._v(" "),t.showItem.name?s("el-row",{staticClass:"interface"},[s("el-col",{staticClass:"title",attrs:{span:22,offset:1}},[s("span",{staticClass:"name"},[t._v(t._s(t.showItem.name))]),t._v(" "),s("span",{staticClass:"status"},[t._v("状态："+t._s(0===t.showItem.status?"正常":"异常"))]),t._v(" "),s("span",{staticClass:"status"},[t._v("请求方式："+t._s(t.showItem.method))]),t._v(" "),s("span",{staticClass:"status"},[t._v("url："+t._s(t.showItem.url))])]),t._v(" "),s("el-col",{attrs:{span:22,offset:1}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.description,border:""}},[s("el-table-column",{attrs:{label:"key"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入key值"},model:{value:t.row.key,callback:function(e){t.row.key=e},expression:"scope.row.key"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"value"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入value值"},model:{value:t.row.default,callback:function(e){t.row.default=e},expression:"scope.row.default"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"参数类型"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("el-input",{staticClass:"input",attrs:{placeholder:"String or Number"},model:{value:t.row.what,callback:function(e){t.row.what=e},expression:"scope.row.what"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"type",label:"参数位置"}}),t._v(" "),s("el-table-column",{attrs:{prop:"required",label:"是否必传"}}),t._v(" "),s("el-table-column",{attrs:{prop:"description",label:"描述"}})],1),t._v(" "),s("el-col",{staticClass:"operation",attrs:{span:6,offset:18}},[s("el-button",{on:{click:t.saveAll}},[t._v("保存")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(e){t.post()}}},[t._v("发射")])],1)],1)],1):t._e(),t._v(" "),t.result.code?s("el-row",{staticClass:"res"},[s("el-col",{staticClass:"title",attrs:{span:22,offset:1}},[t._v("测试结果")]),t._v(" "),s("el-col",{staticClass:"result",attrs:{span:22,offset:1}},[t._v("响应状态："+t._s(t.result.code))]),t._v(" "),s("el-col",{staticClass:"result",attrs:{span:22,offset:1}},[t._v("响应报文："+t._s(t.result.data))]),t._v(" "),s("el-col",{staticClass:"result",attrs:{span:22,offset:1}},[t._v("响应消息："+t._s(t.result.msg))])],1):t._e()],1)],1)},staticRenderFns:[]}},68:function(t,e,s){s(178);var a=s(11)(s(119),s(191),"data-v-3a9024a2",null);t.exports=a.exports},69:function(t,e,s){s(179);var a=s(11)(s(121),s(192),"data-v-4d9d178e",null);t.exports=a.exports},70:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(99),n=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default.defaults.baseURL={root:"http://192.168.0.116:3000"}.root,e.default=n.default},71:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=[{path:"/",component:s(69)},{path:"/home",component:s(69)},{path:"/interface",component:s(188)},{path:"/login",component:s(189)}];e.default=a},73:function(t,e){},74:function(t,e){},75:function(t,e){},76:function(t,e,s){var a=s(11)(s(118),s(194),null,null);t.exports=a.exports}},[125]);