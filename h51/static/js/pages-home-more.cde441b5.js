(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-more"],{"0974":function(n,i,e){n.exports=e.p+"static/img/signImg2.40f8289a.png"},"4b8c":function(n,i,e){n.exports=e.p+"static/img/signImg1.dae9c8fe.png"},"57d9":function(n,i,e){var t=e("24fb");i=t(!1),i.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fastLink[data-v-ead51c22]{padding:%?30?% %?20?% %?10?% %?20?%;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.fastLink .nav[data-v-ead51c22]{flex:0 0 23%;margin-bottom:%?30?%;font-size:%?28?%;font-family:PingFang SC;color:#333;text-align:center;white-space:nowrap}.fastLink .nav-icon[data-v-ead51c22]{width:%?80?%;height:%?80?%}',""]),n.exports=i},"5b25":function(n,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c975");var t=e("67cf"),a={data:function(){return{flagSign:!1,navList:[{name:"签到",icon:"../../static/home/nav4.png",page:"/pages/mine/sign_spring"},{name:"邀请好友",icon:"../../static/home/nav3.png",page:"/pages/home/invitation"},{name:"我的团队",icon:"../../static/home/nav10.png",page:"/pages/home/myTeam"},{name:"余额宝",icon:"../../static/home/nav7.png",page:"/pages/home/yuerbao"},{name:"国家公园",icon:"../../static/home/nav1.png",page:"/pages/home/companyProfile"},{name:"转账",icon:"../../static/home/nav5.png",page:"transfer"},{name:"生态交易所",icon:"../../static/home/nav33.png",page:"/pages/home/jiaoyisuo"},{name:"政务平台",icon:"../../static/home/nav222.png",page:"/pages/home/zhengwu"},{name:"电子发票",icon:"../../static/home/nav6.png",page:"/pages/home/fapiao"},{name:"",icon:"",page:""},{name:"",icon:"",page:""}]}},onLoad:function(){},methods:{back:function(){uni.navigateBack()},getTime:function(n){(0,t.get_time)({}).then((function(i){i?n(i):n()}))},goPage:function(n){var i=this,e=this;"/pages/home/jiaoyisuo"!=n?"/pages/home/zhengwu"!=n&&"/pages/home/fapiao"!=n?n&&(1==n?uni.switchTab({url:"/pages/steady/index"}):2==n?uni.switchTab({url:"/pages/shop/index"}):"sign"==n?user_check_time().then((function(n){i.clickPopSign()})):"transfer"==n?(0,t.personal_center)().then((function(n){n&&n.data&&1==n.data.transfer_status?i.clickNext("../home/transfer"):i.$toast("暂未开放")})):n.indexOf("mall_spring")>-1?this.getTime((function(i){var t;t=i?1e3*i:(new Date).getTime();var a=new Date("2023-1-22 00:00:00").getTime(),r=new Date("2023-2-6 00:00:00").getTime();t>=r?e.$toast("时间已过"):t<a?e.$toast("活动未开始"):uni.navigateTo({url:n})})):n.indexOf("newGift_spring")>-1?this.getTime((function(i){var t;t=i?1e3*i:(new Date).getTime();var a=new Date("2023-1-22 00:00:00").getTime(),r=new Date("2023-1-29 00:00:00").getTime();t>=r?e.$toast("暂未开放"):t<a?e.$toast("活动未开始"):uni.navigateTo({url:n})})):n.indexOf("invite_gift")>-1?this.getTime((function(i){var t;t=i?1e3*i:(new Date).getTime();var a=new Date("2023-2-5 00:00:00").getTime(),r=new Date("2023-2-12 00:00:00").getTime();t>=r?e.$toast("活动已结束"):t<a?e.$toast("活动未开始"):uni.navigateTo({url:n})})):uni.navigateTo({url:n})):e.$toast("暂未开放"):e.$toast("生态交易所开户暂未开放，敬请期待！")},clickPopSign:function(){this.flagSign=!this.flagSign}}};i.default=a},"5c94":function(n,i,e){"use strict";e.d(i,"b",(function(){return t})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var t=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"fastLink"},n._l(n.navList,(function(i,e){return t("v-uni-view",{key:e,staticClass:"nav",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.goPage(i.page)}}},[t("v-uni-image",{staticClass:"nav-icon",attrs:{src:i.icon,mode:""}}),t("v-uni-view",{staticStyle:{"font-weight":"800"}},[n._v(n._s(i.name))])],1)})),1),n.flagSign?t("v-uni-view",{staticClass:"pop popSign"},[t("v-uni-view",{staticClass:"bg",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.clickPopSign.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"itemBox"},[t("v-uni-image",{staticClass:"bgImg",attrs:{src:e("4b8c"),mode:"widthFix"}}),t("v-uni-view",{staticClass:"box"},[t("v-uni-view",{staticClass:"title"},[t("v-uni-view",[n._v("Hello")]),t("v-uni-text",[n._v("已为您自动签到")])],1),t("v-uni-view",{staticClass:"item display"},[t("v-uni-image",{attrs:{src:e("0974"),mode:"widthFix"}}),t("v-uni-text",[n._v("余额+1")])],1),t("v-uni-view",{staticClass:"link",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.clickPopSign.apply(void 0,arguments)}}},[n._v("我知道了")])],1)],1)],1):n._e()],1)},a=[]},"5f1b":function(n,i,e){"use strict";e("7a82");var t=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.ajax=function(n,i,e,t){return new Promise((function(a,r){var p=t?"application/json":"application/x-www-form-urlencoded";uni.request({url:"https://www.mlhyvp07.icu"+n,method:e?"GET":"POST",data:i,header:{"content-type":p,token:uni.getStorageSync("token")?uni.getStorageSync("token"):""},success:function(n){301==n.data.code?(uni.hideLoading(),uni.showModal({title:"提示",content:"您登录已过期，请先去登录",confirmColor:"#003467",success:function(n){n.confirm&&uni.reLaunch({url:"/pages/login/login"})}})):302==n.data.code?setTimeout((function(){uni.navigateTo({url:"/pages/mine/shiming"})}),500):303==n.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/mine/bindBank"})}),500),a(n.data)}})}))},i.baseUrl=void 0,e("d3b7");t(e("e143"));i.baseUrl="https://www.mlhyvp07.icu"},"67cf":function(n,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.account_del=function(n){return(0,t.ajax)("/api.php/index/account_del",n)},i.account_get=function(n){return(0,t.ajax)("/api.php/index/account_get",n)},i.account_list=function(n){return(0,t.ajax)("/api.php/index/account_list",n)},i.account_save=function(n){return(0,t.ajax)("/api.php/index/account_save",n)},i.banks=function(n){return(0,t.ajax)("/api.php/index/banks",n)},i.benefits=function(n){return(0,t.ajax)("/api.php/index/benefits",n)},i.brief_introduction=function(n){return(0,t.ajax)("/api.php/index/brief_introduction",n)},i.clock_in=function(n){return(0,t.ajax)("/api.php/index/clock_in",n)},i.clock_in_status=function(n){return(0,t.ajax)("/api.php/index/clock_in_status",n)},i.clock_supply=function(n){return(0,t.ajax)("/api.php/index/clock_supply",n)},i.culture=function(n){return(0,t.ajax)("/api.php/index/culture",n)},i.donate=function(n){return(0,t.ajax)("/api.php/index/donate",n)},i.edit_password=function(n){return(0,t.ajax)("/api.php/index/edit_password",n)},i.edit_pay_password=function(n){return(0,t.ajax)("/api.php/index/edit_pay_password",n)},i.exchange=function(n){return(0,t.ajax)("/api.php/index/exchange",n)},i.fund_detail_list=function(n){return(0,t.ajax)("/api.php/index/fund_detail_list",n)},i.get_benefits=function(n){return(0,t.ajax)("/api.php/index/get_benefits",n)},i.get_oxygen=function(n){return(0,t.ajax)("/api.php/index/get_oxygen",n)},i.get_planting=function(n){return(0,t.ajax)("/api.php/index/get_planting",n)},i.get_time=function(n){return(0,t.ajax)("/api.php/login/get_time",n)},i.id_card_get=function(n){return(0,t.ajax)("/api.php/index/id_card_get",n)},i.id_card_save=function(n){return(0,t.ajax)("/api.php/index/id_card_save",n)},i.index=function(n){return(0,t.ajax)("/api.php/login/index",n)},i.invite_exchange=function(n){return(0,t.ajax)("/api.php/index/invite_exchange",n)},i.invite_log=function(n){return(0,t.ajax)("/api.php/index/invite_log",n)},i.journalism_get=function(n){return(0,t.ajax)("/api.php/index/journalism_get",n)},i.journalism_list=function(n){return(0,t.ajax)("/api.php/index/journalism_list",n)},i.lottery=function(n){return(0,t.ajax)("/api.php/index/lottery",n)},i.lottery_log_list=function(n){return(0,t.ajax)("/api.php/index/lottery_log_list",n)},i.lottery_page=function(n){return(0,t.ajax)("/api.php/index/lottery_page",n)},i.month_task=function(n){return(0,t.ajax)("/api.php/index/month_task",n)},i.my_team=function(n){return(0,t.ajax)("/api.php/index/my_team",n)},i.online_service=function(n){return(0,t.ajax)("/api.php/login/sys_config",n)},i.oxygen_to_price=function(n){return(0,t.ajax)("/api.php/index/oxygen_to_price",n)},i.pay=function(n){return(0,t.ajax)("/api.php/index/pay",n)},i.personal_center=function(n){return(0,t.ajax)("/api.php/index/personal_center",n)},i.product_detail=function(n){return(0,t.ajax)("/api.php/index/product_detail",n)},i.product_list=function(n){return(0,t.ajax)("/api.php/index/product_list",n)},i.publicwelfare_list=function(n){return(0,t.ajax)("/api.php/index/publicwelfare_list",n)},i.recharge_page=function(n){return(0,t.ajax)("/api.php/index/recharge_page",n)},i.resetPwd=function(n){return(0,t.ajax)("/api.php/login/resetPwd",n)},i.share=function(n){return(0,t.ajax)("/api.php/index/share",n)},i.sign_in=function(n){return(0,t.ajax)("/api.php/index/sign_in",n)},i.sign_status=function(n){return(0,t.ajax)("/api.php/index/sign_status",n)},i.subscribe_list=function(n){return(0,t.ajax)("/api.php/index/subscribe_list",n)},i.subscribe_submit=function(n){return(0,t.ajax)("/api.php/index/subscribe_submit",n)},i.subscription_list=function(n){return(0,t.ajax)("/api.php/index/subscription_list",n)},i.subscription_preview=function(n){return(0,t.ajax)("/api.php/index/subscription_preview",n)},i.subscription_submit=function(n){return(0,t.ajax)("/api.php/index/subscription_submit",n)},i.subscription_url=function(n){return(0,t.ajax)("/api.php/index/curl_pay",n)},i.sys_config=function(n){return(0,t.ajax)("/api.php/login/sys_config",n)},i.task_pick_up=function(n){return(0,t.ajax)("/api.php/index/task_pick_up",n)},i.team_distribution=function(n){return(0,t.ajax)("/api.php/index/team_distribution",n)},i.team_rewards=function(n){return(0,t.ajax)("/api.php/index/equity_certificate",n)},i.team_rewardss=function(n){return(0,t.ajax)("/api.php/index/team_rewards",n)},i.transfer=function(n){return(0,t.ajax)("/api.php/index/transfer",n)},i.transfer_in=function(n){return(0,t.ajax)("/api.php/index/transfer_in",n)},i.transfer_out=function(n){return(0,t.ajax)("/api.php/index/transfer_out",n)},i.uplevel=function(n){return(0,t.ajax)("/api.php/index/uplevel",n)},i.user_check_time=function(n){return(0,t.ajax)("/api.php/index/user_check_time",n)},i.user_login=function(n){return(0,t.ajax)("/api.php/login/user_login",n)},i.user_register=function(n){return(0,t.ajax)("/api.php/login/user_register",n)},i.verify=function(n){return(0,t.ajax)("/api.php/login/verify",n)},i.vouchers=function(n){return(0,t.ajax)("/api.php/index/vouchers",n)},i.welfare=function(n){return(0,t.ajax)("/api.php/index/welfare",n)},i.withdrawal=function(n){return(0,t.ajax)("/api.php/index/withdrawal",n)},i.yuebao_log=function(n){return(0,t.ajax)("/api.php/index/yuebao_log",n)};var t=e("5f1b")},"6a92":function(n,i,e){"use strict";e.r(i);var t=e("5c94"),a=e("c9c0");for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("b5d0");var p=e("f0c5"),o=Object(p["a"])(a["default"],t["b"],t["c"],!1,null,"ead51c22",null,!1,t["a"],void 0);i["default"]=o.exports},"9a21":function(n,i,e){var t=e("57d9");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var a=e("4f06").default;a("04a7edea",t,!0,{sourceMap:!1,shadowMode:!1})},b5d0:function(n,i,e){"use strict";var t=e("9a21"),a=e.n(t);a.a},c9c0:function(n,i,e){"use strict";e.r(i);var t=e("5b25"),a=e.n(t);for(var r in t)["default"].indexOf(r)<0&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a}}]);