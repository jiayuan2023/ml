(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"0b20":function(n,e,i){n.exports=i.p+"static/img/topImg.62252edd.png"},"1de5":function(n,e,i){"use strict";n.exports=function(n,e){return e||(e={}),n=n&&n.__esModule?n.default:n,"string"!==typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},"1fff":function(n,e,i){"use strict";i.r(e);var t=i("dc77"),a=i("a2d7");for(var r in a)["default"].indexOf(r)<0&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("c802");var o=i("f0c5"),u=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"dfe014c2",null,!1,t["a"],void 0);e["default"]=u.exports},"5f1b":function(n,e,i){"use strict";i("7a82");var t=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.ajax=function(n,e,i,t){return new Promise((function(a,r){var o=t?"application/json":"application/x-www-form-urlencoded";uni.request({url:"https://www.mlhyvp07.icu"+n,method:i?"GET":"POST",data:e,header:{"content-type":o,token:uni.getStorageSync("token")?uni.getStorageSync("token"):""},success:function(n){301==n.data.code?(uni.hideLoading(),uni.showModal({title:"提示",content:"您登录已过期，请先去登录",confirmColor:"#003467",success:function(n){n.confirm&&uni.reLaunch({url:"/pages/login/login"})}})):302==n.data.code?setTimeout((function(){uni.navigateTo({url:"/pages/mine/shiming"})}),500):303==n.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/mine/bindBank"})}),500),a(n.data)}})}))},e.baseUrl=void 0,i("d3b7");t(i("e143"));e.baseUrl="https://www.mlhyvp07.icu"},"67cf":function(n,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.account_del=function(n){return(0,t.ajax)("/api.php/index/account_del",n)},e.account_get=function(n){return(0,t.ajax)("/api.php/index/account_get",n)},e.account_list=function(n){return(0,t.ajax)("/api.php/index/account_list",n)},e.account_save=function(n){return(0,t.ajax)("/api.php/index/account_save",n)},e.banks=function(n){return(0,t.ajax)("/api.php/index/banks",n)},e.benefits=function(n){return(0,t.ajax)("/api.php/index/benefits",n)},e.brief_introduction=function(n){return(0,t.ajax)("/api.php/index/brief_introduction",n)},e.clock_in=function(n){return(0,t.ajax)("/api.php/index/clock_in",n)},e.clock_in_status=function(n){return(0,t.ajax)("/api.php/index/clock_in_status",n)},e.clock_supply=function(n){return(0,t.ajax)("/api.php/index/clock_supply",n)},e.culture=function(n){return(0,t.ajax)("/api.php/index/culture",n)},e.donate=function(n){return(0,t.ajax)("/api.php/index/donate",n)},e.edit_password=function(n){return(0,t.ajax)("/api.php/index/edit_password",n)},e.edit_pay_password=function(n){return(0,t.ajax)("/api.php/index/edit_pay_password",n)},e.exchange=function(n){return(0,t.ajax)("/api.php/index/exchange",n)},e.fund_detail_list=function(n){return(0,t.ajax)("/api.php/index/fund_detail_list",n)},e.get_benefits=function(n){return(0,t.ajax)("/api.php/index/get_benefits",n)},e.get_oxygen=function(n){return(0,t.ajax)("/api.php/index/get_oxygen",n)},e.get_planting=function(n){return(0,t.ajax)("/api.php/index/get_planting",n)},e.get_time=function(n){return(0,t.ajax)("/api.php/login/get_time",n)},e.id_card_get=function(n){return(0,t.ajax)("/api.php/index/id_card_get",n)},e.id_card_save=function(n){return(0,t.ajax)("/api.php/index/id_card_save",n)},e.index=function(n){return(0,t.ajax)("/api.php/login/index",n)},e.invite_exchange=function(n){return(0,t.ajax)("/api.php/index/invite_exchange",n)},e.invite_log=function(n){return(0,t.ajax)("/api.php/index/invite_log",n)},e.journalism_get=function(n){return(0,t.ajax)("/api.php/index/journalism_get",n)},e.journalism_list=function(n){return(0,t.ajax)("/api.php/index/journalism_list",n)},e.lottery=function(n){return(0,t.ajax)("/api.php/index/lottery",n)},e.lottery_log_list=function(n){return(0,t.ajax)("/api.php/index/lottery_log_list",n)},e.lottery_page=function(n){return(0,t.ajax)("/api.php/index/lottery_page",n)},e.month_task=function(n){return(0,t.ajax)("/api.php/index/month_task",n)},e.my_team=function(n){return(0,t.ajax)("/api.php/index/my_team",n)},e.online_service=function(n){return(0,t.ajax)("/api.php/login/sys_config",n)},e.oxygen_to_price=function(n){return(0,t.ajax)("/api.php/index/oxygen_to_price",n)},e.pay=function(n){return(0,t.ajax)("/api.php/index/pay",n)},e.personal_center=function(n){return(0,t.ajax)("/api.php/index/personal_center",n)},e.product_detail=function(n){return(0,t.ajax)("/api.php/index/product_detail",n)},e.product_list=function(n){return(0,t.ajax)("/api.php/index/product_list",n)},e.publicwelfare_list=function(n){return(0,t.ajax)("/api.php/index/publicwelfare_list",n)},e.recharge_page=function(n){return(0,t.ajax)("/api.php/index/recharge_page",n)},e.resetPwd=function(n){return(0,t.ajax)("/api.php/login/resetPwd",n)},e.share=function(n){return(0,t.ajax)("/api.php/index/share",n)},e.sign_in=function(n){return(0,t.ajax)("/api.php/index/sign_in",n)},e.sign_status=function(n){return(0,t.ajax)("/api.php/index/sign_status",n)},e.subscribe_list=function(n){return(0,t.ajax)("/api.php/index/subscribe_list",n)},e.subscribe_submit=function(n){return(0,t.ajax)("/api.php/index/subscribe_submit",n)},e.subscription_list=function(n){return(0,t.ajax)("/api.php/index/subscription_list",n)},e.subscription_preview=function(n){return(0,t.ajax)("/api.php/index/subscription_preview",n)},e.subscription_submit=function(n){return(0,t.ajax)("/api.php/index/subscription_submit",n)},e.subscription_url=function(n){return(0,t.ajax)("/api.php/index/curl_pay",n)},e.sys_config=function(n){return(0,t.ajax)("/api.php/login/sys_config",n)},e.task_pick_up=function(n){return(0,t.ajax)("/api.php/index/task_pick_up",n)},e.team_distribution=function(n){return(0,t.ajax)("/api.php/index/team_distribution",n)},e.team_rewards=function(n){return(0,t.ajax)("/api.php/index/equity_certificate",n)},e.team_rewardss=function(n){return(0,t.ajax)("/api.php/index/team_rewards",n)},e.transfer=function(n){return(0,t.ajax)("/api.php/index/transfer",n)},e.transfer_in=function(n){return(0,t.ajax)("/api.php/index/transfer_in",n)},e.transfer_out=function(n){return(0,t.ajax)("/api.php/index/transfer_out",n)},e.uplevel=function(n){return(0,t.ajax)("/api.php/index/uplevel",n)},e.user_check_time=function(n){return(0,t.ajax)("/api.php/index/user_check_time",n)},e.user_login=function(n){return(0,t.ajax)("/api.php/login/user_login",n)},e.user_register=function(n){return(0,t.ajax)("/api.php/login/user_register",n)},e.verify=function(n){return(0,t.ajax)("/api.php/login/verify",n)},e.vouchers=function(n){return(0,t.ajax)("/api.php/index/vouchers",n)},e.welfare=function(n){return(0,t.ajax)("/api.php/index/welfare",n)},e.withdrawal=function(n){return(0,t.ajax)("/api.php/index/withdrawal",n)},e.yuebao_log=function(n){return(0,t.ajax)("/api.php/index/yuebao_log",n)};var t=i("5f1b")},"89b7":function(n,e,i){var t=i("24fb"),a=i("1de5"),r=i("99e5");e=t(!1);var o=a(r);e.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.login[data-v-dfe014c2]{height:calc(100vh - %?88?%)}.login .top[data-v-dfe014c2]{background-color:#e5f1ec;text-align:right}.login .top uni-image[data-v-dfe014c2]{width:%?292?%}.login .top .title[data-v-dfe014c2]{padding-bottom:%?126?%;text-align:center;font-size:%?48?%;font-weight:800;color:#333}.login .topBottom[data-v-dfe014c2]{background:#fff;height:30px;margin-top:-30px;border-radius:%?60?% %?60?% 0 0}.login uni-form[data-v-dfe014c2]{display:block;padding:0 %?55?%}.login uni-form uni-input[data-v-dfe014c2]{width:100%;height:%?100?%;padding-left:%?34?%;margin-bottom:%?40?%;font-size:%?32?%;font-family:PingFang SC;background:#f5f5f5;border-radius:%?50?%}.login uni-form .input-placeholder[data-v-dfe014c2]{font-size:%?32?%;font-weight:400;font-family:PingFang SC;color:#ccc}.login uni-form .verty_wrap[data-v-dfe014c2]{position:relative}.login uni-form .verty_wrap uni-image[data-v-dfe014c2]{position:absolute;right:%?20?%;top:0;bottom:0;width:%?200?%;height:%?80?%;margin:auto;border-radius:%?40?%}.login uni-form .agree_wrap[data-v-dfe014c2]{display:flex;align-items:center;margin-top:%?20?%;margin-bottom:%?96?%}.login uni-form .agree_wrap .renmber_box[data-v-dfe014c2]{margin-right:%?18?%;width:%?30?%;height:%?30?%;background:#f5f5f6;border-radius:50%}.login uni-form .agree_wrap .active[data-v-dfe014c2]{width:%?30?%;height:%?30?%;background:url('+o+") no-repeat 50%;background-size:100%;border:none}.login uni-form .agree_wrap .agreement[data-v-dfe014c2]{font-size:%?24?%;color:#f5f5f6}.login uni-form uni-button[data-v-dfe014c2]{margin:0 %?80?%;height:%?100?%;line-height:%?100?%;background:#3ab370;border-radius:%?50?%;font-size:%?32?%;font-weight:500;color:#fff;margin-top:%?50?%}.login uni-form .login_now[data-v-dfe014c2]{margin-top:%?20?%;display:flex;align-items:center;justify-content:center;font-size:%?28?%;color:#333}.login uni-form .login_now uni-text[data-v-dfe014c2]{margin-left:%?6?%;text-decoration:underline;color:#3ab370}.leixing[data-v-dfe014c2]{width:calc(100% - %?40?%);height:%?100?%;padding-left:%?34?%;margin-top:%?50?%;font-size:%?32?%;font-family:PingFang SC;background:#f5f5f5;border-radius:%?50?%;margin-bottom:22px;line-height:%?100?%;color:#black}",""]),n.exports=e},"99e5":function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAAXNSR0IArs4c6QAAAYBQTFRFAAAA////qqqqv7+/1NTU29vbv7+/xsbGzMzM0dHR1NTUyMjIzMzMycnJzMzMzs7O0NDQyMjIz8/Pzc3Nz8/PycnJy8vLzMzMzMzMzc3Nzs7OzMzMzc3NzMzMzc3Nzs7Ozc3Ny8vLzMzMzc3Ny8vLy8vLzMzMzc3Ny8vLy8vLzMzMy8vLzc3Nzc3Nzc3Nzc3NzMzMzc3Ny8vLzMzMzMzMzc3NzMzMzMzMy8vLzMzMzMzMzMzMzc3Ny8vLzMzMy8vLzMzMzMzMzc3Ny8vLzMzMzMzMy8vLzMzMzMzMzc3NzMzMzMzMzc3Nzc3Ny8vLzMzMzMzMzc3NzMzMy8vLzMzMzMzMzc3NzMzMzc3Ny8vLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMquQRZwAAAH90Uk5TAAEDBAYHCAkKCwwODxMUFRscICQlJicoLS4vNzg8PT5CRUtNTk9QUVNUVVhbYWVmaXBxc3R1eIOFhoeIiYqLlJWWmJmanJ6foKKkpaesra6vsbW3vb/AwsXGx8jNzs/Q0dLU1dfa297f4OHj5OXm6u3u8PHy8/T19vf5+vv8/utnwGoAAAJWSURBVBgZlcEJQ9JgAAbgFwRCQWBZUqlYeWTSLQqmlVZeWNhhmVqY3YMUUMEj8f3rfUOFjQ22PQ+MOLtiC6vZAx4Xfq8uxLqcsMQ1kNqlxm5qwAUz7fE8DeTj7WimNVFiA6XxVjTUl2ETmT4Y80zRxLQHBkJpmkqHoBOWaYEcRp3LOVqSuwQNKUuLshJUvBu0bMOLmlnaMIeqW7RlCGd8W7Rl24dTE7RpEhWBIm0qBqCI04pPqQNWJSB48rTgLtC5y3N5D4AoLXgKYZZVUQBLNPfeCSHFqiXAXaSpn34I3cesKroRoamdMARpiyq9GKGZ8k0InnWqxTBDM2NQzFNjEStUed0z/IN1XjkgPKLWGrKs+eIEgr+o8dkL4UaZWlkcsOYlhI4cVXIShI4C6xyCKt9bIHTts+qoB4L/G3VwTJVpKPrLPHcPguMtdf6hQLUxKB7wzDMo4tQrQKbayR0oHrPigwvC8An1ZKxQ4+g6BEeSwp8ghGv7NLCGGWrtXIHgWib3r0IIyjSyiBHWyUoQ/JsntyG4PtJQDBHW2/RDkB5CMU1jvXAXWW/ZhXP3aazoBpaok3TgVOSIxt4AiFJvAhUXc2wgCsCTp95UG4CIzAbyFyAkaGDv3eImG0pAESjSplIAFZO06QlO+bZpy7YPZ4ZoyxCq5mjDPGq8G7TsqxcqUpYWZSVohHO0JNeJOmGZFshh6ITSNJUOwYDnOU288MBYf4ZNZPrRUNt4iQ2UxtvQTDCep4F8PAgz7sHUHjX2UoNuWNLSPZpc/3vIckFeT452t8DAf5QQX6JySp76AAAAAElFTkSuQmCC"},a2d7:function(n,e,i){"use strict";i.r(e);var t=i("bfd5"),a=i.n(t);for(var r in t)["default"].indexOf(r)<0&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a},bfd5:function(n,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i("67cf"),a={data:function(){return{register:{mobile:"",verification_code:"",password:"",confirm_password:"",parent_code:"",idcard:"",uname:"",__token__:null,uutype:1},codeImgShow:!0,codeImg:"https://www.stjsgy.com/api.php/login/verify",array:["个人用户","机构用户","政府用户"],index:1}},onLoad:function(n){n&&n.invite&&(this.register.parent_code=n.invite),this.getCode()},methods:{getCode:function(){var n=this;(0,t.verify)().then((function(e){n.codeImg=e.data.data,n.register.__token__=e.data.__token__}))},jumpLink:function(n){uni.navigateTo({url:n})},formSubmit:function(){var n=this,e=this.register,i=e.mobile,a=e.verification_code,r=e.password,o=e.confirm_password,u=e.parent_code,c=e.uname,p=e.idcard,s=e.__token__;e.uutype;return""==i?(uni.showToast({title:"输入手机号码进行注册",duration:1500,icon:"none"}),!1):""==c?(uni.showToast({title:"输入真实姓名进行注册",duration:1500,icon:"none"}),!1):""==p||p.length<18?(uni.showToast({title:"输入真实身份证进行注册",duration:1500,icon:"none"}),!1):""==a?(uni.showToast({title:"输入图形验证码",duration:1500,icon:"none"}),!1):""==r?(uni.showToast({title:"请输入密码",duration:1500,icon:"none"}),!1):""==o?(uni.showToast({title:"请再次输入密码",duration:1500,icon:"none"}),!1):r!==o?(uni.showToast({title:"再次输入密码不一致",duration:1500,icon:"none"}),!1):u?void(0,t.user_register)({mobile:i,password:r,confirm_password:o,parent_code:u,verification_code:a,idcard:p,uname:c,__token__:s,uutype:this.register.uutype}).then((function(e){200==e.code?(n.$toast("注册成功"),uni.setStorageSync("token",e.data.token),setTimeout((function(){uni.switchTab({url:"../home/index"})}),500)):n.$toast(e.msg)})):(uni.showToast({title:"请输入邀请码",duration:1500,icon:"none"}),!1)},bindPickerChange:function(n){this.index=n.detail.value+1,this.register.uutype=n.detail.value+1,console.log(this.register.uutype)}}};e.default=a},c802:function(n,e,i){"use strict";var t=i("f131"),a=i.n(t);a.a},dc77:function(n,e,i){"use strict";i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var t=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"login"},[t("v-uni-view",{staticClass:"top"},[t("v-uni-image",{attrs:{src:i("0b20"),mode:"widthFix"}}),t("v-uni-view",{staticClass:"title"},[n._v("欢迎注册")])],1),t("v-uni-view",{staticClass:"topBottom"}),t("v-uni-form",{on:{submit:function(e){arguments[0]=e=n.$handleEvent(e),n.formSubmit.apply(void 0,arguments)}}},[t("v-uni-picker",{staticClass:"leixing",attrs:{value:n.index-1,range:n.array},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.bindPickerChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.array[n.index-1]))])],1),t("v-uni-input",{attrs:{type:"tel",placeholder:"输入手机号码进行注册",maxlength:"11","placeholder-class":"input-placeholder","confirm-type":"done"},model:{value:n.register.mobile,callback:function(e){n.$set(n.register,"mobile",e)},expression:"register.mobile"}}),t("v-uni-input",{attrs:{type:"text",placeholder:"输入姓名",maxlength:"30","placeholder-class":"input-placeholder","confirm-type":"done"},model:{value:n.register.uname,callback:function(e){n.$set(n.register,"uname",e)},expression:"register.uname"}}),t("v-uni-input",{attrs:{type:"text",placeholder:"输入身份证号",maxlength:"19","placeholder-class":"input-placeholder","confirm-type":"done"},model:{value:n.register.idcard,callback:function(e){n.$set(n.register,"idcard",e)},expression:"register.idcard"}}),t("v-uni-view",{staticClass:"verty_wrap"},[t("v-uni-input",{attrs:{type:"tel",placeholder:"输入图形验证码","placeholder-class":"input-placeholder","confirm-type":"done"},model:{value:n.register.verification_code,callback:function(e){n.$set(n.register,"verification_code",e)},expression:"register.verification_code"}}),n.codeImgShow?t("v-uni-image",{attrs:{src:n.codeImg},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.getCode.apply(void 0,arguments)}}}):n._e()],1),t("v-uni-input",{attrs:{type:"text",placeholder:"输入密码","confirm-type":"done","placeholder-class":"input-placeholder",password:"true"},model:{value:n.register.password,callback:function(e){n.$set(n.register,"password",e)},expression:"register.password"}}),t("v-uni-input",{attrs:{type:"text",placeholder:"再次输入密码","confirm-type":"done","placeholder-class":"input-placeholder",password:"true"},model:{value:n.register.confirm_password,callback:function(e){n.$set(n.register,"confirm_password",e)},expression:"register.confirm_password"}}),t("v-uni-input",{attrs:{type:"number",placeholder:"输入邀请码","placeholder-class":"input-placeholder","confirm-type":"done"},model:{value:n.register.parent_code,callback:function(e){n.$set(n.register,"parent_code",e)},expression:"register.parent_code"}}),t("v-uni-button",{attrs:{"form-type":"submit"}},[n._v("立即注册")]),t("v-uni-view",{staticClass:"login_now"},[t("v-uni-view",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.jumpLink("/pages/login/forget")}}},[n._v("已有账号？")]),t("v-uni-text",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.jumpLink("/pages/login/login")}}},[n._v("前往登录")])],1)],1)],1)},a=[]},f131:function(n,e,i){var t=i("89b7");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var a=i("4f06").default;a("aa14427c",t,!0,{sourceMap:!1,shadowMode:!1})}}]);