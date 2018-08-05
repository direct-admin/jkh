(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1284:function(t,n,e){"use strict";e.r(n);var s=e(2247),i=e(1859);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e(2618);var l=e(0),o=e(2616),r=e.n(o),u=Object(l.a)(i.default,s.a,s.b,!1,null,null,null);"function"==typeof r.a&&r()(u),n.default=u.exports},1339:function(t,n,e){var s=e(1371);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4).default)("17c254d0",s,!0,{})},1340:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=o(e(9)),i=o(e(1)),a=o(e(3)),l=e(6);function o(t){return t&&t.__esModule?t:{default:t}}n.default={props:{package:{type:String,required:!1,default:"newpackage"}},data:function(){return{limits:[],features:[],customItems:[],dns:"OFF",serverip:!0,ips:"0",homeOverride:{value:"",options:{}}}},computed:{processedData:function(){return(0,a.default)({},l._.reduce(this.limits,function(t,n,e){var s;return(0,a.default)({},t,(s={},(0,i.default)(s,e,["bandwidth","quota"].includes(e)?String(n.value/Math.pow(2,20)):n.value),(0,i.default)(s,"u"+e,n.unlimited||null),s))},{}),l._.reduce(this.customItems,function(t,n){return(0,a.default)({},t,(0,i.default)({},n.name,!0===n.value?"ON":n.value))},{}),l._.mapValues(this.features,function(t){return t?"ON":"OFF"}),{serverip:this.serverip?"ON":null,dns:this.dns,ips:this.ips,create_user_home_override:this.canOverrideHome?this.homeOverride.value:null})},canOverrideHome:function(){return this.homeOverride&&!!(0,s.default)(this.homeOverride.options).length}},methods:{checkEmptyness:function(t){t.value||(t.unlimited=!0)}},watch:{processedData:function(t){this.$emit("update",t)}},created:function(){this.limitLabels={bandwidth:this.$gettext("Bandwidth"),quota:this.$gettext("Disk Space"),inode:this.$state.app.tokens.HAVE_INODE?this.$gettext("Inode"):void 0,vdomains:this.$gettext("Domains"),nsubdomains:this.$gettext("Sub-Domains"),nemails:this.$gettext("E-mail Accounts"),nemailf:this.$gettext("E-mail Forwarders"),nemailml:this.$gettext("Mailing Lists"),nemailr:this.$gettext("AutoResponders"),mysql:this.$gettext("MySQL Databases"),domainptr:this.$gettext("Domain Pointers"),ftp:this.$gettext("FTP Accounts")},this.featureLabels={aftp:this.$gettext("Anonymous FTP Accounts"),cgi:this.$gettext("CGI Access"),php:this.$gettext("PHP Access"),spam:this.$gettext("SpamAssassin"),catchall:this.$gettext("Catch-All E-mail"),ssl:this.$gettext("SSL Access"),ssh:this.$gettext("SSH Access"),userssh:this.$gettext("SSH Access for Users"),oversell:this.$gettext("Allow Overselling"),cron:this.$gettext("Cron Jobs"),sysinfo:this.$gettext("System Info"),login_keys:this.$gettext("Login Keys"),dnscontrol:this.$gettext("DNS Control")};var t=this.$state.api.GET_RESELLER_PACKAGE.response;this.limits=l._.cloneDeep(t.limits),this.features=l._.cloneDeep(t.features),this.customItems=l._.cloneDeep(t.customItems),this.ips=t.ips,this.homeOverride=l._.cloneDeep(t.homeOverride),null===this.package&&(this.limits.bandwidth.value*=Math.pow(2,20),this.limits.quota.value*=Math.pow(2,20))}}},1341:function(t,n,e){"use strict";e.r(n);var s=e(1340),i=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);n.default=i.a},1350:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"reseller-package"},[t._l(t.limitLabels,function(n,s){return n&&t.limits[s]?e("ui-form-element",{key:s},[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n))]),t._v(" "),e(["bandwidth","quota"].includes(s)?"input-size":"input-text",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],tag:"component",attrs:{slot:"content",disabled:t.limits[s].unlimited,number:""},on:{blur:function(n){t.checkEmptyness(t.limits[s])}},slot:"content",model:{value:t.limits[s].value,callback:function(n){t.$set(t.limits[s],"value",n)},expression:"limits[key].value"}},[e("ui-button",{attrs:{slot:"additions:right",tabindex:"-1"},on:{click:function(n){t.limits[s].unlimited=!t.limits[s].unlimited}},slot:"additions:right"},[e("input-checkbox",{attrs:{label:t.$gettext("Unlimited")},model:{value:t.limits[s].unlimited,callback:function(n){t.$set(t.limits[s],"unlimited",n)},expression:"limits[key].unlimited"}})],1)],1)],1):t._e()}),t._v(" "),e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v("IPs")]),t._v(" "),e("input-text",{attrs:{slot:"content",number:""},slot:"content",model:{value:t.ips,callback:function(n){t.ips=n},expression:"ips"}})],1),t._v(" "),t._l(t.featureLabels,function(n,s){return n&&void 0!==t.features[s]?e("ui-form-element",{key:s,class:{dimmed:!t.features[s]},attrs:{verticalOnPhone:!1,reverse:t.$_Client.isPhone}},[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n))]),t._v(" "),e("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.features[s],callback:function(n){t.$set(t.features,s,n)},expression:"features[key]"}})],1):t._e()}),t._v(" "),e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Personal DNS's")]),t._v(" "),e("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},[e("input-check",{attrs:{type:"radio",value:"OFF"},model:{value:t.dns,callback:function(n){t.dns=n},expression:"dns"}},[e("translate",[t._v("None")])],1),t._v(" "),e("input-check",{attrs:{type:"radio",value:"TWO"},model:{value:t.dns,callback:function(n){t.dns=n},expression:"dns"}},[e("translate",[t._v("Uses 2 IP's, domain uses one of them")])],1),t._v(" "),e("input-check",{attrs:{type:"radio",value:"Three"},model:{value:t.dns,callback:function(n){t.dns=n},expression:"dns"}},[e("translate",[t._v("Uses 3 IP's, domain gets own IP")])],1)],1)],1),t._v(" "),e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Share Server IP")]),t._v(" "),e("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.serverip,callback:function(n){t.serverip=n},expression:"serverip"}},[e("translate",[t._v("Allow Reseller to create sites with server IP")])],1)],1),t._v(" "),t.canOverrideHome?e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Home Directory")]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("input-usual-select",{attrs:{options:t.homeOverride.options},model:{value:t.homeOverride.value,callback:function(n){t.$set(t.homeOverride,"value",n)},expression:"homeOverride.value"}})],1)],1):t._e(),t._v(" "),t._l(t.customItems,function(n){return e("ui-form-element",{key:n.name},[e("span",{attrs:{slot:"title"},domProps:{textContent:t._s(n.label)},slot:"title"}),t._v(" "),"checkbox"===n.type?e("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"customItem.value"}},[t._v("\n            "+t._s(n.description)+"\n        ")]):e("text"===n.type?"input-text":"input-usual-select",{tag:"component",attrs:{slot:"content",options:"listbox"===n.type?n.options:[]},slot:"content",model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"customItem.value"}},[e("ui-button",{attrs:{slot:"additions:right"},slot:"additions:right"},[t._v("\n                "+t._s(n.description)+"\n            ")])],1)],1)})],2)},i=[];e.d(n,"a",function(){return s}),e.d(n,"b",function(){return i})},1371:function(t,n,e){(t.exports=e(5)(!0)).push([t.i,".reseller-package input[type=text]{width:1px}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/admin/reseller-packages/_components/reseller-package.vue"],names:[],mappings:"AAkOA,mCACyB,SAAU,CAAI",file:"reseller-package.vue?vue&type=style&index=0&lang=scss",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.reseller-package {\n    input[type="text"] { width: 1px; }\n}\n'],sourceRoot:""}])},1372:function(t,n,e){"use strict";var s=e(1339);e.n(s).a},1373:function(t,n,e){"use strict";e.r(n);var s=e(1350),i=e(1341);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e(1372);var l=e(0),o=Object(l.a)(i.default,s.a,s.b,!1,null,null,null);n.default=o.exports},1857:function(t,n,e){var s=e(2617);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4).default)("6fe84b84",s,!0,{})},1858:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=u(e(1)),i=u(e(3)),a=e(7),l=e(17),o=e(6),r=u(e(1373));function u(t){return t&&t.__esModule?t:{default:t}}n.default=(0,i.default)({},(0,a.preload)({GET_MODIFY_RESELLER_DATA:function(t){return t.params}}),{components:{ResellerPackage:r.default},data:function(){return{package:"",limits:{},features:{},customItems:[]}},props:{user:{type:String,required:!0}},computed:(0,i.default)({},(0,l.mapState)({data:function(t){return t.api.GET_MODIFY_RESELLER_DATA.response}}),{packageData:function(){var t=o.fp.transformObject(function(t,n){var e,i=t.value,a=t.unlimited;return e={},(0,s.default)(e,n,["bandwidth","quota"].includes(n)?i+" B":i),(0,s.default)(e,"u"+n,a||null),e}),n=o.fp.mapValues(function(t){return t?"ON":"OFF"}),e=o.fp.transformObject(function(t){var n=t.value,e=t.name;return(0,s.default)({},e,!0===n?"ON":n)});return o.fp.filter(o.fp.notEmpty)((0,i.default)({},t(this.limits),e(this.customItems),n(this.features)))}}),methods:{savePackage:function(){this.$actionRequest("SET_RESELLER_PACKAGE",{user:this.user,package:this.package})},savePackageData:function(){this.$actionRequest("SET_RESELLER_PACKAGE_DATA",(0,i.default)({user:this.user},this.packageData))},toggleLimit:function(t){this.limits[t].unlimited=!this.limits[t].unlimited;var n=this.$refs.limits.find(function(n){return n.$attrs["data-key"]===t});this.$nextTick(function(){return n.$validate(n.value)})}},created:function(){this.package=this.data.package,this.limits=o._.cloneDeep(this.data.packageData.limits),this.features=o._.cloneDeep(this.data.packageData.features),this.customItems=o._.cloneDeep(this.data.custom),this.limitLabels={bandwidth:this.$gettext("Bandwidth (MB)"),quota:this.$gettext("Disk Space (MB)"),inode:this.$state.app.tokens.HAVE_INODE?this.$gettext("Inode"):void 0,vdomains:this.$gettext("Domains"),nsubdomains:this.$gettext("Sub-Domains"),nemails:this.$gettext("E-mail Accounts"),nemailf:this.$gettext("E-mail Forwarders"),nemailml:this.$gettext("Mailing Lists"),nemailr:this.$gettext("AutoResponders"),mysql:this.$gettext("MySQL Databases"),domainptr:this.$gettext("Domain Pointers"),ftp:this.$gettext("FTP Accounts")},this.featureLabels={aftp:this.$gettext("Anonymous FTP Accounts"),cgi:this.$gettext("CGI Access"),php:this.$gettext("PHP Access"),spam:this.$gettext("SpamAssassin"),catchall:this.$gettext("Catch-All E-mail"),ssl:this.$gettext("SSL Access"),ssh:this.$gettext("SSH Access"),userssh:this.$gettext("SSH Access for Users"),oversell:this.$gettext("Allow Overselling"),cron:this.$gettext("Cron Jobs"),sysinfo:this.$gettext("System Info"),login_keys:this.$gettext("Login Keys"),dnscontrol:this.$gettext("DNS Control")}}})},1859:function(t,n,e){"use strict";e.r(n);var s=e(1858),i=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);n.default=i.a},2247:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("app-page",{attrs:{id:"modify-reseller"}},[e("translate",{attrs:{slot:"page:title"},slot:"page:title"},[t._v("\n        Modify Reseller: "+t._s(t.user)+"\n    ")]),t._v(" "),e("app-page-section",[e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Set Package to")]),t._v(" "),e("input-usual-select",{attrs:{slot:"content",options:t.data.packages},slot:"content",model:{value:t.package,callback:function(n){t.package=n},expression:"package"}},[e("ui-button",{attrs:{slot:"additions:right",theme:"safe",size:"normal",disabled:!t.package},on:{click:t.savePackage},slot:"additions:right"},[e("translate",[t._v("Save")])],1)],1)],1)],1),t._v(" "),e("app-page-section",[e("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("Manually Change Settings")]),t._v(" "),t._l(t.limitLabels,function(n,s){return n&&t.limits[s]&&("inode"!==s||t.data.haveInode)?e("ui-form-element",{key:s,attrs:{group:"modifyReseller",validators:{required:!t.limits[s].unlimited}}},[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n))]),t._v(" "),e("ui-input-group",{attrs:{slot:"content"},slot:"content"},[e(["bandwidth","quota"].includes(s)?"input-size":"input-text",{ref:"limits",refInFor:!0,tag:"component",attrs:{slot:"input",number:"",disabled:t.limits[s].unlimited,"data-key":s},slot:"input",model:{value:t.limits[s].value,callback:function(n){t.$set(t.limits[s],"value",n)},expression:"limits[key].value"}}),t._v(" "),e("ui-button",{attrs:{slot:"additions:right"},on:{click:function(n){t.toggleLimit(s)}},slot:"additions:right"},[e("input-checkbox",{attrs:{model:t.limits[s].unlimited,label:t.$gettext("Unlimited")}})],1)],1)],1):t._e()}),t._v(" "),t._l(t.featureLabels,function(n,s){return n&&void 0!==t.features[s]?e("ui-form-element",{key:s,class:{dimmed:!t.features[s]},attrs:{verticalOnPhone:!1,reverse:t.$_Client.isPhone}},[e("translate",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n))]),t._v(" "),e("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.features[s],callback:function(n){t.$set(t.features,s,n)},expression:"features[key]"}})],1):t._e()}),t._v(" "),t._l(t.customItems,function(n){return e("ui-form-element",{key:n.name,attrs:{verticalOnPhone:"checkbox"!==n.type,reverse:"checkbox"===n.type&&t.$_Client.isPhone}},[e("span",{attrs:{slot:"title"},domProps:{textContent:t._s(n.label)},slot:"title"}),t._v(" "),n.description?e("span",{attrs:{slot:"tooltip"},domProps:{textContent:t._s(n.description)},slot:"tooltip"}):t._e(),t._v(" "),e("template",{slot:"content"},["text"===n.type?e("input-text",{model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"customItem.value"}}):"checkbox"===n.type?e("input-checkbox",{model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"customItem.value"}}):"listbox"===n.type?e("input-usual-select",{attrs:{options:n.options},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"customItem.value"}}):t._e()],1)],2)})],2),t._v(" "),e("ui-button",{attrs:{slot:"footer:buttons",validateGroup:"modifyReseller",theme:"safe"},on:{click:t.savePackageData},slot:"footer:buttons"},[e("translate",[t._v("Save")])],1)],1)},i=[];e.d(n,"a",function(){return s}),e.d(n,"b",function(){return i})},2616:function(t,n){},2617:function(t,n,e){(t.exports=e(5)(!0)).push([t.i,"#modify-reseller input[type=text]{width:1px}#modify-reseller .dimmed{opacity:.7}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/admin/users/resellers/modify.vue"],names:[],mappings:"AAkOA,kCAEQ,SAAU,CAFlB,yBAIc,UAAW,CAAI",file:"modify.vue?vue&type=style&index=0&lang=scss",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#modify-reseller {\n    input[type="text"] {\n        width: 1px;\n    }\n    .dimmed { opacity: .7; }\n}\n'],sourceRoot:""}])},2618:function(t,n,e){"use strict";var s=e(1857);e.n(s).a}}]);