(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-updatepwd"],{"09cd":function(n,i,t){var a=t("b7c2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=t("4f06").default;e("e3c800fc",a,!0,{sourceMap:!1,shadowMode:!1})},"0d0a":function(n,i,t){"use strict";t("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("498a"),t("ac1f"),t("00b4");var a=t("67cf"),e={data:function(){return{old_password:"",idcard:"",mobile:"",uname:"",password1:"",password:"",type:1}},methods:{c:function(){1==this.type?this.type=2:this.type=1},save:function(){var n=this;if(""!=this.uname.trim())if(""!=this.idcard.trim()){/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(this.password1)?this.$toast("提示：您输入的信息含有非法字符！"):""!=this.password1.trim()?this.password1===this.password?(0,a.edit_password)({uname:this.uname,idcard:this.idcard,password:this.password,confirm_password:this.password1,type:this.type}).then((function(i){200==i.code?(n.$toast("保存成功"),n.back()):n.$toast(i.msg)})):this.$toast("两次密码不一样"):this.$toast("请输入合理新密码")}else this.$toast("请输入身份证号");else this.$toast("请输入姓名")}}};i.default=e},3858:function(n,i,t){"use strict";t.r(i);var a=t("0d0a"),e=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){t.d(i,n,(function(){return a[n]}))}(r);i["default"]=e.a},"58a7":function(n,i,t){"use strict";var a=t("09cd"),e=t.n(a);e.a},"5f1b":function(n,i,t){"use strict";t("7a82");var a=t("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.ajax=function(n,i,t,a){return new Promise((function(e,r){var p=a?"application/json":"application/x-www-form-urlencoded";uni.request({url:"https://www.gjxmb.icu"+n,method:t?"GET":"POST",data:i,header:{"content-type":p,token:uni.getStorageSync("token")?uni.getStorageSync("token"):""},success:function(n){301==n.data.code?(uni.hideLoading(),uni.showModal({title:"提示",content:"您登录已过期，请先去登录",confirmColor:"#003467",success:function(n){n.confirm&&uni.reLaunch({url:"/pages/login/login"})}})):302==n.data.code?setTimeout((function(){uni.navigateTo({url:"/pages/mine/shiming"})}),500):303==n.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/mine/bindBank"})}),500),e(n.data)}})}))},i.baseUrl=void 0,t("d3b7");a(t("e143"));i.baseUrl="https://www.gjxmb.icu"},"623f":function(n,i,t){"use strict";t.r(i);var a=t("8f55"),e=t("3858");for(var r in e)["default"].indexOf(r)<0&&function(n){t.d(i,n,(function(){return e[n]}))}(r);t("58a7");var p=t("f0c5"),u=Object(p["a"])(e["default"],a["b"],a["c"],!1,null,"5b24155e",null,!1,a["a"],void 0);i["default"]=u.exports},"67cf":function(n,i,t){"use strict";t("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.account_del=function(n){return(0,a.ajax)("/api.php/index/account_del",n)},i.account_get=function(n){return(0,a.ajax)("/api.php/index/account_get",n)},i.account_list=function(n){return(0,a.ajax)("/api.php/index/account_list",n)},i.account_save=function(n){return(0,a.ajax)("/api.php/index/account_save",n)},i.banks=function(n){return(0,a.ajax)("/api.php/index/banks",n)},i.benefits=function(n){return(0,a.ajax)("/api.php/index/benefits",n)},i.brief_introduction=function(n){return(0,a.ajax)("/api.php/index/brief_introduction",n)},i.clock_in=function(n){return(0,a.ajax)("/api.php/index/clock_in",n)},i.clock_in_status=function(n){return(0,a.ajax)("/api.php/index/clock_in_status",n)},i.clock_supply=function(n){return(0,a.ajax)("/api.php/index/clock_supply",n)},i.culture=function(n){return(0,a.ajax)("/api.php/index/culture",n)},i.donate=function(n){return(0,a.ajax)("/api.php/index/donate",n)},i.edit_password=function(n){return(0,a.ajax)("/api.php/index/edit_password",n)},i.edit_pay_password=function(n){return(0,a.ajax)("/api.php/index/edit_pay_password",n)},i.exchange=function(n){return(0,a.ajax)("/api.php/index/exchange",n)},i.fund_detail_list=function(n){return(0,a.ajax)("/api.php/index/fund_detail_list",n)},i.get_benefits=function(n){return(0,a.ajax)("/api.php/index/get_benefits",n)},i.get_oxygen=function(n){return(0,a.ajax)("/api.php/index/get_oxygen",n)},i.get_planting=function(n){return(0,a.ajax)("/api.php/index/get_planting",n)},i.get_time=function(n){return(0,a.ajax)("/api.php/login/get_time",n)},i.id_card_get=function(n){return(0,a.ajax)("/api.php/index/id_card_get",n)},i.id_card_save=function(n){return(0,a.ajax)("/api.php/index/id_card_save",n)},i.index=function(n){return(0,a.ajax)("/api.php/login/index",n)},i.invite_exchange=function(n){return(0,a.ajax)("/api.php/index/invite_exchange",n)},i.invite_log=function(n){return(0,a.ajax)("/api.php/index/invite_log",n)},i.journalism_get=function(n){return(0,a.ajax)("/api.php/index/journalism_get",n)},i.journalism_list=function(n){return(0,a.ajax)("/api.php/index/journalism_list",n)},i.lottery=function(n){return(0,a.ajax)("/api.php/index/lottery",n)},i.lottery_log_list=function(n){return(0,a.ajax)("/api.php/index/lottery_log_list",n)},i.lottery_page=function(n){return(0,a.ajax)("/api.php/index/lottery_page",n)},i.month_task=function(n){return(0,a.ajax)("/api.php/index/month_task",n)},i.my_team=function(n){return(0,a.ajax)("/api.php/index/my_team",n)},i.online_service=function(n){return(0,a.ajax)("/api.php/login/sys_config",n)},i.oxygen_to_price=function(n){return(0,a.ajax)("/api.php/index/oxygen_to_price",n)},i.pay=function(n){return(0,a.ajax)("/api.php/index/pay",n)},i.personal_center=function(n){return(0,a.ajax)("/api.php/index/personal_center",n)},i.product_detail=function(n){return(0,a.ajax)("/api.php/index/product_detail",n)},i.product_list=function(n){return(0,a.ajax)("/api.php/index/product_list",n)},i.publicwelfare_list=function(n){return(0,a.ajax)("/api.php/index/publicwelfare_list",n)},i.recharge_page=function(n){return(0,a.ajax)("/api.php/index/recharge_page",n)},i.resetPwd=function(n){return(0,a.ajax)("/api.php/login/resetPwd",n)},i.share=function(n){return(0,a.ajax)("/api.php/index/share",n)},i.sign_in=function(n){return(0,a.ajax)("/api.php/index/sign_in",n)},i.sign_status=function(n){return(0,a.ajax)("/api.php/index/sign_status",n)},i.subscribe_list=function(n){return(0,a.ajax)("/api.php/index/subscribe_list",n)},i.subscribe_submit=function(n){return(0,a.ajax)("/api.php/index/subscribe_submit",n)},i.subscription_list=function(n){return(0,a.ajax)("/api.php/index/subscription_list",n)},i.subscription_preview=function(n){return(0,a.ajax)("/api.php/index/subscription_preview",n)},i.subscription_submit=function(n){return(0,a.ajax)("/api.php/index/subscription_submit",n)},i.subscription_url=function(n){return(0,a.ajax)("/api.php/index/curl_pay",n)},i.sys_config=function(n){return(0,a.ajax)("/api.php/login/sys_config",n)},i.task_pick_up=function(n){return(0,a.ajax)("/api.php/index/task_pick_up",n)},i.team_distribution=function(n){return(0,a.ajax)("/api.php/index/team_distribution",n)},i.team_rewards=function(n){return(0,a.ajax)("/api.php/index/equity_certificate",n)},i.team_rewardss=function(n){return(0,a.ajax)("/api.php/index/team_rewards",n)},i.transfer=function(n){return(0,a.ajax)("/api.php/index/transfer",n)},i.transfer_in=function(n){return(0,a.ajax)("/api.php/index/transfer_in",n)},i.transfer_out=function(n){return(0,a.ajax)("/api.php/index/transfer_out",n)},i.uplevel=function(n){return(0,a.ajax)("/api.php/index/uplevel",n)},i.user_check_time=function(n){return(0,a.ajax)("/api.php/index/user_check_time",n)},i.user_login=function(n){return(0,a.ajax)("/api.php/login/user_login",n)},i.user_register=function(n){return(0,a.ajax)("/api.php/login/user_register",n)},i.verify=function(n){return(0,a.ajax)("/api.php/login/verify",n)},i.vouchers=function(n){return(0,a.ajax)("/api.php/index/vouchers",n)},i.welfare=function(n){return(0,a.ajax)("/api.php/index/welfare",n)},i.withdrawal=function(n){return(0,a.ajax)("/api.php/index/withdrawal",n)},i.yuebao_log=function(n){return(0,a.ajax)("/api.php/index/yuebao_log",n)};var a=t("5f1b")},"8f55":function(n,i,t){"use strict";t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return e})),t.d(i,"a",(function(){}));var a=function(){var n=this,i=n.$createElement,a=n._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"itemBox"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[n._v("姓名")]),a("v-uni-input",{attrs:{type:"text",value:"",maxlength:"30",placeholder:"请输入用户名"},model:{value:n.uname,callback:function(i){n.uname=i},expression:"uname"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[n._v("身份证号")]),a("v-uni-input",{attrs:{type:"text",value:"",maxlength:"20",placeholder:"请输入身份证号"},model:{value:n.idcard,callback:function(i){n.idcard=i},expression:"idcard"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[n._v("新密码")]),a("v-uni-input",{attrs:{type:"password",value:"",maxlength:"20",placeholder:"请输入新密码"},model:{value:n.password,callback:function(i){n.password=i},expression:"password"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[n._v("确认密码")]),a("v-uni-input",{attrs:{type:"password",value:"",maxlength:"20",placeholder:"请再次输入新密码"},model:{value:n.password1,callback:function(i){n.password1=i},expression:"password1"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[n._v("修改类型")]),a("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"1",checked:1==n.type,color:"#3AB370"},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.c()}}}),n._v("资金密码")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"2",checked:2==n.type,color:"#3AB370"},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.c()}}}),n._v("登录密码")],1)],1)],1)],1),a("v-uni-view",{staticClass:"note"},[a("v-uni-image",{attrs:{src:t("93f7"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"font-size-24"},[n._v("密码必须是6-20个字母或数字或符号")])],1),a("v-uni-view",{staticClass:"btn",staticStyle:{"margin-top":"70rpx"},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.save.apply(void 0,arguments)}}},[n._v("确认修改")])],1)},e=[]},"93f7":function(n,i){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAACNxJREFUeF7tm32MHVUVwH/3zm4/sALSujNbWmNBRY2Ahtj6gR9BglAUkFiIBEMFo1jaApZ2SxEhovZrq6ulW5SkLSIxbYBKDF1Q4z9AJMagrcQvDE0o3X1vC1Vsst12991rzs48eDtv5s28efPei6T3zzfn3HPO79175tyPUbSpWVAFnEuA2wMX1nqUBhTYNrk0YVa12riFjiLOVWBXAeeG7O8FtcGltEvBeKt9aymQ/TDtJPRiCyuBMxKCfVFB7whm+zwYbSWYpo+QV+HkMfQS4BbArTO4ItDXiemfCf+tUzeTeNOAFMG1aIHwDeCUTN69oSQw+hWmzwWB1LSWO5ACnKHQKyxcD0xL8Nwq7BMiY1EXp8hpoxa2K0yvBy82g0puQIpwjkX3AFcBHQnOloBdCrPehb0iOwwfNL7+IsBJ0JeEW9bflyeYhoEMw/kGtRrUwpT/8A6F2Rj3DxfhTIuWxHtdmhEGdkBj13bB03mAyQREaogizqUWehT2/BSOSA7YqjF9XVBIIS8jxrPoWy3cCJycpGNRTytY71J6vJFapi4gFTWEDO1zkpz0ZwJ9UzD9p8FrKeSrRP4Npx5DS2KWBN2Voo99oARMplomFRCpIaahr1dwGzAvhVP7LfSOYrblVUccgOkdvg8rmulDTSCH4ZTjfg1xc8oaYp9CbeiitLNZlaaM0mGcqy12NfCBFH9OXaM0EojMX4MWCAIjcf6CegZY1+j8TRHc6yLlPAasBvvxFLqp8lgVkCH0VgWL25HhUwQVKTIIn9SoHlCyWExKA1LL7OjGSF6qalXKBXTSarNcA2wo1xBZA8lbrwjnVtRCNWsZDxMJrh4gE2Rr1RB5B5i1P6mWpZapNdIbASJV5cZWrCOyAojTC3KhvK6lTJjUGgHymoc5NW9nW9lfVBo4AeTECHmDwIkREhoNJ4CcAFI7Rb/pRogsLhtZJL6pgAyhN4Ga30Fp4dvhSJbXdd5ArIfRWRxpVKeA/gFwq/QjG0BZoeQNhLgiptGA4/T9lewEDKkyK5p6ppPSwnqPJP6vgcTD8Lko1JddSj+v589oK5ACvAU424Nn63HanxYTI6MPWB6la2FVN2Zjvf22DYjAUDgDFnse6Ms9xn+b1vkAxo+AZVE6Cla6mN60/VXKtQXIMMywOHss9hOBMyNpoQQwfgwsjYFxm4vZlAWG6LQcyCF46zjOnogjiRGF/oLL+K9rJdBh9GYLN8XAWOFiJMFmbi0HMggnaZw9YD8V4XUsFBkZw+h7rb93G9W+6WF+mJlEoNhyIGLXh6IeB/XpiACOBiPlyfIz/8KM3qL8w/Bwk21MgSEJtuHWFiAVUH4F6oJaUAIY/co/lWsqjLbkkMqIgpESB2XUoq5U2MuBr8fAuMXDSILNrbVthJQjCKA8BurCiKgMELUUkGlys4fZnBuJduaQcBAJUKqmiYXl3Zh784YRM2XGPMyUKFtVxxBF9GELb6sUPoqZnmX5HUDZDeqiGoFaC8u6MVuaAUPqI4MOr5IPe5iZqYAU0H8F3lcpbDDvnw1/y+JwAhSBsbQb05+l7zQ6h+A9JfQ/QrL/8jDvTgVkCPWEQn22UtiiFnVTejiNA1Ey/sm92h3q1yq4ycVszdpvGr0izhUWu7tSVmEHXKxc8KlqUWe7vcGVg0rh9R5GTtsztxAUgbHExdyXucOUigX0d4E7QuJ9HmZinyXcIoA4ixR212SiPOdizkvpQ6yYf1dVPQrqMRfzk0b7S6NfwHkW7ILJ8cRvIVQBOQCndaLlTkXlYbEpYd55OhxI40QtGQtagbx6m94OQXcJ/XL4NT+OmTsH5PfkESISQzhPRSzUbvcw65oeRY4GhtA9CsI+/9nDfCjOTOSVgIJ/WSa8jnjJxZzZrJtBOXKY6MqCU0T/M+Ia+R0e5vt1AXkZZnagDwJTQ3PvOpfSz/J2vhn9FXGutdgHQ32Pj2PmxU0XkY29bVNE77D+XdHK9tJRzFlZirRmBB3X5/MwZRb6eWBSraGwD7tYuRgc22KBHISzHL9Im7TuUHCXi/lOKwOs11YBvQb4XkjPGsz82fDHTEBEqYB+CLgm1MExMB/24C/1OtoK+UF4r0Y/B0yfbM/u9rBXJvlQ84LaK3D6OPrvwIxQR3sN5mOzYSTJQCufvwBTZ6B/ryD8FjmmMWd3wQtJ/iTd2CPm1SX9PuRhrk0y0MrnBfT9wFfDNuuZ5olA/NeX8xTYj0YY+raLuaeVQcfZKqBlabE2/NzCnzzMAgVjafxMBOLnEvkkbGJeVn0IFCzdm7KPkSYAkRlCL1EgPoTjOWIwC+pZqacC4kNxLgP7aMS3LLKE78lyopY24FpyQ+ilCmTLMRyLVahFLqVH6rGTGkjwT6ySTzCiDFjY5GGkVJZrnE1vwUb1huCDhCh7azxM1RRKcqwuIAGUqO2BwI79zTj2S3Pg1STDjTz3K2n1AKhLo/pRsMXFRJ4CJtmtG4g/fbScwUYeSMsRjUJ/pdZpXZJTtZ4X6LgAzHbgHTEj9T4PIzkl6Yp6pJlMQKSnIvouC3fHOC/ObDeYntnwSiMAyrrBh0Ry2C0fN8b5vc7FrMkKQ2xlBhIk2hvAyn5o5A428B/g7jHMT+fC0SxggnWJHGjdCcyK6WNMwfI8duAaAuJD4SOgd8YN4SCAQbkv34nZlvb2jxygG/TX5BaRhTk1YBYU5osuyDc7DbeGgYgHgzBLo+4HdUWCR0cUPGgwD3TDH6Jkh2C+Qt8AXJ30AbTFPmKxN+Y1LRueMuGACjjXgJXT+jQfC+4HdhrMgKLDAfM5BZcB70rxNw8p1EqXkiw+c225jJBKjyT5jaLvVP7ll7jckjWI4xY2T8Xck/UrzyTDuQMpGwzK/W8BsgDsTHIk4flxYAeYdR7IyGpaaxqQsscHYW4Helmw+5ZmKlUGK7v/20qY/jx2/NNQbDqQshMWOodxPm8xi4NbAaENnNfdHQH7pEX/wqP0y7Sr1DTBppFpGZBKZ+S818G5yGKl9P5MUA/9TqH2lCgNtHPj6X9Kiy5yNTsTwAAAAABJRU5ErkJggg=="},b7c2:function(n,i,t){var a=t("24fb");i=a(!1),i.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5b24155e]{background-color:#f5f5f5}body.?%PAGE?%[data-v-5b24155e]{background-color:#f5f5f5}.itemBox[data-v-5b24155e]{margin:%?16?% %?20?%;background:#fff;border-radius:%?10?%;padding:%?30?%}.itemBox .item[data-v-5b24155e]{font-size:%?28?%;color:#333}.itemBox .item uni-input[data-v-5b24155e]{background:#f5f5f5;height:%?80?%;border-radius:%?40?%;padding-left:%?30?%;margin-top:%?20?%;margin-bottom:%?30?%;font-size:%?28?%;font-weight:400}.note[data-v-5b24155e]{display:flex;align-items:center;color:#333;font-size:%?28?%;font-weight:400;margin-left:%?48?%;margin-top:%?30?%}.note uni-image[data-v-5b24155e]{width:%?34?%;margin-right:7px}.btn[data-v-5b24155e]{margin:0 %?135?%}',""]),n.exports=i}}]);