(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-invite_gift"],{"0db1":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("67cf"),a={data:function(){return{flagBuy:!1,status:null,__token__:null}},onLoad:function(){this.getToken()},onShow:function(){this.invite_log()},methods:{getToken:function(){var t=this;(0,e.personal_center)().then((function(n){t.__token__=n.data.__token__}))},invite_log:function(){var t=this;(0,e.invite_log)().then((function(n){if(n.data){var i=n.data;i.register&&(t.status=1),i.realname&&(t.status=2),i.subscribe&&(t.status=3),i.register&&i.realname&&i.subscribe?t.flagBuy=!0:t.flagBuy=!1}}))},save:function(){var t=this,n=this;this.flagBuy&&(0,e.invite_exchange)({__token__:this.__token__}).then((function(i){i.msg&&t.$toast(i.msg),setTimeout((function(){n.invite_log()}),5e3)}))}}};n.default=a},1464:function(t,n,i){t.exports=i.p+"static/img/gouxuan@2x.64efee2f.png"},"1abb":function(t,n,i){var e=i("24fb"),a=i("1de5"),r=i("f06e"),u=i("a0ed"),s=i("d8e4");n=e(!1);var o=a(r),c=a(u),p=a(s);n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-16fc3396]{background:url('+o+') top no-repeat;background-size:100%;min-height:%?1680?%}.top[data-v-16fc3396]{background-color:#e5f1ec;text-align:right;position:relative}.top uni-image[data-v-16fc3396]{width:%?292?%}.top .back[data-v-16fc3396]{position:absolute;top:%?65?%;left:%?30?%}.top .back uni-image[data-v-16fc3396]{width:%?22?%}.time[data-v-16fc3396]{padding:%?300?% 0 %?160?% 0;text-align:center}.time .item[data-v-16fc3396]{display:inline-block;height:%?63?%;background:linear-gradient(0deg,#fff,#fff2ac);border-radius:%?32?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700}.time uni-text[data-v-16fc3396]{display:inline-block}.time .txt1[data-v-16fc3396]{margin:%?7?% %?10?%;padding:0 %?26?% 0 %?13?%;height:%?50?%;line-height:%?50?%;background:#ef312b;border-radius:%?25?%;color:#fff4bb}.time .txt2[data-v-16fc3396]{margin:%?7?% %?23?% 0 %?5?%;color:#ef393e}.status[data-v-16fc3396]{text-align:center;font-size:%?28?%;font-weight:500}.status uni-image[data-v-16fc3396]{width:%?80?%;height:%?80?%}.status .itemBox[data-v-16fc3396]{display:flex;align-items:center;justify-content:center}.status .item[data-v-16fc3396]{display:flex;align-items:center;justify-content:center;color:#999}.status .item[data-v-16fc3396]::before{content:"";display:inline-block;width:%?90?%;height:%?4?%;background:#bbb;margin-bottom:%?52?%}.status .item[data-v-16fc3396]:first-child::before{content:none}.status .sel[data-v-16fc3396]{color:#332e28}.status .sel[data-v-16fc3396]::before{background:#f45d40}.Btn[data-v-16fc3396]{padding-top:%?90?%;margin-bottom:%?60?%}.Btn uni-button[data-v-16fc3396]{background:url('+c+") 50% no-repeat;background-size:100%;width:%?424?%;height:%?182?%;font-size:%?48?%;font-family:PingFang SC;font-weight:800;color:#ad2011;text-shadow:0 %?2?% 0 hsla(0,0%,100%,.47)}.Btn uni-button[data-v-16fc3396]:after{content:none}.rule .title[data-v-16fc3396]{text-align:center;font-size:%?40?%;font-family:REEJI;font-weight:400;color:#ff553e;background:url("+p+") 50% no-repeat;background-size:%?358?%}.rule .itemBox[data-v-16fc3396]{margin:%?34?% %?67?%}.rule .item[data-v-16fc3396]{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#6a573f;line-height:%?40?%;margin-bottom:%?20?%}",""]),t.exports=n},"1de5":function(t,n,i){"use strict";t.exports=function(t,n){return n||(n={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"54bd":function(t,n,i){"use strict";var e=i("7ff9"),a=i.n(e);a.a},"5f1b":function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.ajax=function(t,n,i,e){return new Promise((function(a,r){var u=e?"application/json":"application/x-www-form-urlencoded";uni.request({url:"https://www.mlhyvp07.icu"+t,method:i?"GET":"POST",data:n,header:{"content-type":u,token:uni.getStorageSync("token")?uni.getStorageSync("token"):""},success:function(t){301==t.data.code?(uni.hideLoading(),uni.showModal({title:"提示",content:"您登录已过期，请先去登录",confirmColor:"#003467",success:function(t){t.confirm&&uni.reLaunch({url:"/pages/login/login"})}})):302==t.data.code?setTimeout((function(){uni.navigateTo({url:"/pages/mine/shiming"})}),500):303==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/mine/bindBank"})}),500),a(t.data)}})}))},n.baseUrl=void 0,i("d3b7");e(i("e143"));n.baseUrl="https://www.mlhyvp07.icu"},"67cf":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.account_del=function(t){return(0,e.ajax)("/api.php/index/account_del",t)},n.account_get=function(t){return(0,e.ajax)("/api.php/index/account_get",t)},n.account_list=function(t){return(0,e.ajax)("/api.php/index/account_list",t)},n.account_save=function(t){return(0,e.ajax)("/api.php/index/account_save",t)},n.banks=function(t){return(0,e.ajax)("/api.php/index/banks",t)},n.benefits=function(t){return(0,e.ajax)("/api.php/index/benefits",t)},n.brief_introduction=function(t){return(0,e.ajax)("/api.php/index/brief_introduction",t)},n.clock_in=function(t){return(0,e.ajax)("/api.php/index/clock_in",t)},n.clock_in_status=function(t){return(0,e.ajax)("/api.php/index/clock_in_status",t)},n.clock_supply=function(t){return(0,e.ajax)("/api.php/index/clock_supply",t)},n.culture=function(t){return(0,e.ajax)("/api.php/index/culture",t)},n.donate=function(t){return(0,e.ajax)("/api.php/index/donate",t)},n.edit_password=function(t){return(0,e.ajax)("/api.php/index/edit_password",t)},n.edit_pay_password=function(t){return(0,e.ajax)("/api.php/index/edit_pay_password",t)},n.exchange=function(t){return(0,e.ajax)("/api.php/index/exchange",t)},n.fund_detail_list=function(t){return(0,e.ajax)("/api.php/index/fund_detail_list",t)},n.get_benefits=function(t){return(0,e.ajax)("/api.php/index/get_benefits",t)},n.get_oxygen=function(t){return(0,e.ajax)("/api.php/index/get_oxygen",t)},n.get_planting=function(t){return(0,e.ajax)("/api.php/index/get_planting",t)},n.get_time=function(t){return(0,e.ajax)("/api.php/login/get_time",t)},n.id_card_get=function(t){return(0,e.ajax)("/api.php/index/id_card_get",t)},n.id_card_save=function(t){return(0,e.ajax)("/api.php/index/id_card_save",t)},n.index=function(t){return(0,e.ajax)("/api.php/login/index",t)},n.invite_exchange=function(t){return(0,e.ajax)("/api.php/index/invite_exchange",t)},n.invite_log=function(t){return(0,e.ajax)("/api.php/index/invite_log",t)},n.journalism_get=function(t){return(0,e.ajax)("/api.php/index/journalism_get",t)},n.journalism_list=function(t){return(0,e.ajax)("/api.php/index/journalism_list",t)},n.lottery=function(t){return(0,e.ajax)("/api.php/index/lottery",t)},n.lottery_log_list=function(t){return(0,e.ajax)("/api.php/index/lottery_log_list",t)},n.lottery_page=function(t){return(0,e.ajax)("/api.php/index/lottery_page",t)},n.month_task=function(t){return(0,e.ajax)("/api.php/index/month_task",t)},n.my_team=function(t){return(0,e.ajax)("/api.php/index/my_team",t)},n.online_service=function(t){return(0,e.ajax)("/api.php/login/sys_config",t)},n.oxygen_to_price=function(t){return(0,e.ajax)("/api.php/index/oxygen_to_price",t)},n.pay=function(t){return(0,e.ajax)("/api.php/index/pay",t)},n.personal_center=function(t){return(0,e.ajax)("/api.php/index/personal_center",t)},n.product_detail=function(t){return(0,e.ajax)("/api.php/index/product_detail",t)},n.product_list=function(t){return(0,e.ajax)("/api.php/index/product_list",t)},n.publicwelfare_list=function(t){return(0,e.ajax)("/api.php/index/publicwelfare_list",t)},n.recharge_page=function(t){return(0,e.ajax)("/api.php/index/recharge_page",t)},n.resetPwd=function(t){return(0,e.ajax)("/api.php/login/resetPwd",t)},n.share=function(t){return(0,e.ajax)("/api.php/index/share",t)},n.sign_in=function(t){return(0,e.ajax)("/api.php/index/sign_in",t)},n.sign_status=function(t){return(0,e.ajax)("/api.php/index/sign_status",t)},n.subscribe_list=function(t){return(0,e.ajax)("/api.php/index/subscribe_list",t)},n.subscribe_submit=function(t){return(0,e.ajax)("/api.php/index/subscribe_submit",t)},n.subscription_list=function(t){return(0,e.ajax)("/api.php/index/subscription_list",t)},n.subscription_preview=function(t){return(0,e.ajax)("/api.php/index/subscription_preview",t)},n.subscription_submit=function(t){return(0,e.ajax)("/api.php/index/subscription_submit",t)},n.subscription_url=function(t){return(0,e.ajax)("/api.php/index/curl_pay",t)},n.sys_config=function(t){return(0,e.ajax)("/api.php/login/sys_config",t)},n.task_pick_up=function(t){return(0,e.ajax)("/api.php/index/task_pick_up",t)},n.team_distribution=function(t){return(0,e.ajax)("/api.php/index/team_distribution",t)},n.team_rewards=function(t){return(0,e.ajax)("/api.php/index/equity_certificate",t)},n.team_rewardss=function(t){return(0,e.ajax)("/api.php/index/team_rewards",t)},n.transfer=function(t){return(0,e.ajax)("/api.php/index/transfer",t)},n.transfer_in=function(t){return(0,e.ajax)("/api.php/index/transfer_in",t)},n.transfer_out=function(t){return(0,e.ajax)("/api.php/index/transfer_out",t)},n.uplevel=function(t){return(0,e.ajax)("/api.php/index/uplevel",t)},n.user_check_time=function(t){return(0,e.ajax)("/api.php/index/user_check_time",t)},n.user_login=function(t){return(0,e.ajax)("/api.php/login/user_login",t)},n.user_register=function(t){return(0,e.ajax)("/api.php/login/user_register",t)},n.verify=function(t){return(0,e.ajax)("/api.php/login/verify",t)},n.vouchers=function(t){return(0,e.ajax)("/api.php/index/vouchers",t)},n.welfare=function(t){return(0,e.ajax)("/api.php/index/welfare",t)},n.withdrawal=function(t){return(0,e.ajax)("/api.php/index/withdrawal",t)},n.yuebao_log=function(t){return(0,e.ajax)("/api.php/index/yuebao_log",t)};var e=i("5f1b")},"7b2d":function(t,n,i){"use strict";i.r(n);var e=i("0db1"),a=i.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(r);n["default"]=a.a},"7ff9":function(t,n,i){var e=i("1abb");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("2a03c346",e,!0,{sourceMap:!1,shadowMode:!1})},a0ed:function(t,n,i){t.exports=i.p+"static/img/anniu@2x.a7825149.png"},aecc:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABECAMAAADa37fNAAAAAXNSR0IArs4c6QAAAQhQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////kOfX3wAAAFd0Uk5TAAECAwQFBgcICQsNDxETFBYZGx4hJSgsLzM3S1dcYmdsbXJzd3h5fX5/g4SFh4qLkJGWm5yhpqerrLCxtbq+wsPHy8/S09bZ2t3g4+bo6+3w8/T1/P3+u0EIlAAAAUpJREFUSMel1ldPAlEUBOCFFaQqWLFiwV6pNoqAoqIuKsr9///EGPVOeJhlEs7zl93cNuc4jn8te/0TZ2QtvRljDkepTM/81J6/WvTMb+X81MLrnzLvPmr+5V+ZD67mnq36XKVqtmvV1xpVM09WDdapSj9YZbJUpTpQm1RN3UFtU5VsQ+1SlWhBHVAVb0IdUxVrQJ1RFa1D5amarEEVqApXoUoBpkLXUOUgU+4l1IXLVLACdTVBVRnqJsRUoAhVDdNFFqBqEarOoepRqk6hbmNUHUE141TtQ7USVO1AtZNUbUHdT1O1AdVJUZUdWPWY5hng4WMrzthM/Km4BHVD1O1VD0s9evUiqddSveTqkxEfoPqch8Oh4nKnRY0aXGoMqqGqRrQa+Gr7UJuR2trURqm2XbWJqyOBOmAMjSv98YcfdZRSBzN1zLND4zemxPXfZVlm2QAAAABJRU5ErkJggg=="},b3e4:function(t,n,i){t.exports=i.p+"static/img/weiwc@2x.d3a41990.png"},d8e4:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAswAAAAMCAYAAAB2puuHAAAAAXNSR0IArs4c6QAAAipJREFUeF7t2j9OAkEUx/Hfg1BwDTiFCYmJNTTGP9fYCs4AFddQjIVQm2hIPAV4DAoCY8QKBdnZnV0m2e/WM29mP2+KV/xMgT533WmpXhtL6gUqSRkEfASWMkvs8W3qs4m1CCCAAALFCLi7y56c+54LWsWcQFUE/hV4kZTY5P0zhJPlLeJuL5pyjb5MA0nNvPXYj4CnwEqmkdx6aJOPledeliOAAAIIFCiwmxGsMZBTnxmhQGhKHxNYyWkoW4/yzgi5BmZ30+nKbCxZm14hUL6AzVSrJ/bwuij/bE5EAAEEEEgr4O6v2tpuxpLrpt3DOgTCCbiFnEvsaT7LWjPTwEz8Iis3+wIJEL8IBEkZBBBAoEwBYhplanPWAYGpNtvEnudLXx2vgZn4hS8v6wMLEL8IDEo5BBBAoGwBYhpli3PeL4FMMY3UAzPxCx7ceQWIX5zXn9MRQACBsALENMJ6Us1XwC+mcXJgJn7h2wDWBxYgfhEYlHIIIIBATALENGLqRiXvkiqmcXRgJn5RyUcT008Tv4ipG9wFAQQQKFCAmEaBuJROI3AypnFwYCZ+kcaWNcUJEL8ozpbKCCCAQLwCxDTi7U01bnY8prE3MBO/qMZziPgviV9E3ByuhgACCJQlQEyjLGnOOSLwJ6axG5iJX/BgzixA/OLMDeB4BBBAIDYBYhqxdaRy99mLaRjxi8o9gMh+mPhFZA3hOggggEBUAsQ0ompHBS/zE9P4Aij/0+gG9LigAAAAAElFTkSuQmCC"},eed0:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickBack.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:i("aecc"),mode:"widthFix"}})],1)],1),e("v-uni-view",{staticClass:"time"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"txt1"},[t._v("活动时间")]),e("v-uni-text",{staticClass:"txt2"},[t._v("2月5日-2月11日")])],1)],1),e("v-uni-view",{staticClass:"status"},[e("v-uni-view",{staticClass:"itemBox"},[e("v-uni-view",{staticClass:"item",class:t.status&&t.status>=1?"sel":""},[e("v-uni-view",[t.status&&t.status>=1?e("v-uni-image",{attrs:{src:i("1464")}}):e("v-uni-image",{attrs:{src:i("b3e4")}}),e("v-uni-view",[t._v("注册完成")])],1)],1),e("v-uni-view",{staticClass:"item",class:t.status&&t.status>=2?"sel":""},[e("v-uni-view",[t.status&&t.status>=2?e("v-uni-image",{attrs:{src:i("1464")}}):e("v-uni-image",{attrs:{src:i("b3e4")}}),e("v-uni-view",[t._v("实名完成")])],1)],1),e("v-uni-view",{staticClass:"item",class:t.status&&3==t.status?"sel":""},[e("v-uni-view",[t.status&&3==t.status?e("v-uni-image",{attrs:{src:i("1464")}}):e("v-uni-image",{attrs:{src:i("b3e4")}}),e("v-uni-view",[t._v("认购完成")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"Btn"},[e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.save.apply(void 0,arguments)}}},[t._v("确认领取")])],1),e("v-uni-view",{staticClass:"rule"},[e("v-uni-view",{staticClass:"title"},[t._v("活动规则")]),e("v-uni-view",{staticClass:"itemBox"},[e("v-uni-view",{staticClass:"item"},[t._v("1、活动为7天与2023年2月5日开始至2023年2月11日结束，凡是在此活动期间根据要求邀请直推会员加入，完成指定任务即可获得由平台赠送的（零碳绿色种植混合型A）")]),e("v-uni-view",{staticClass:"item"},[t._v("2、参与步骤：活动期间邀请直推会员→直推会员在当天完成注册→直推会员在当天完成实名认证→直推会员在当天完成（新能源汽车充电桩混合型A第二期）购买→点击确认领取即可获得由平台赠送的（零碳绿色种植混合型A）")]),e("v-uni-view",{staticClass:"item"},[t._v("活动只限七天，活动期间内的邀请任务需在当天完成，每晚12点会清零当天的任务邀请， 重新计算，每天只限一人邀请一人，一人领取一份。")])],1)],1)],1)},a=[]},f06e:function(t,n,i){t.exports=i.p+"static/img/inviteGiftBg.08f85fb0.png"},f98b:function(t,n,i){"use strict";i.r(n);var e=i("eed0"),a=i("7b2d");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(r);i("54bd");var u=i("f0c5"),s=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"16fc3396",null,!1,e["a"],void 0);n["default"]=s.exports}}]);