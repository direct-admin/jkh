(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1190:function(t,e,a){"use strict";a.r(e);var n=a(2196),r=a(1419);for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);var c=a(0),s=a(2313),i=a.n(s),u=Object(c.a)(r.default,n.a,n.b,!1,null,null,null);"function"==typeof i.a&&i()(u),e.default=u.exports},1418:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=a(3),o=(n=r)&&n.__esModule?n:{default:n},c=a(7);e.default=(0,o.default)({},(0,c.preload)("GET_CA_CERT"),{data:function(){return{cacert:"",active:!1}},computed:(0,c.mapResponse)({GET_CA_CERT:"apiData"}),created:function(){this.active=this.apiData.active,this.cacert=this.apiData.cacert},methods:{submit:function(){this.$actionRequest("SAVE_CA_CERT",this.$get(["active","cacert"]))},copyToClipboard:function(){this.$refs.cacert.select(),document.execCommand("copy")}}})},1419:function(t,e,a){"use strict";a.r(e);var n=a(1418),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e.default=r.a},2196:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",[a("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:t.copyToClipboard},slot:"header:buttons"},[a("translate",[t._v("Copy to clipboard")])],1),t._v(" "),a("app-page-section",[a("ui-form-element",{attrs:{vertical:""}},[a("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("translate",[t._v("Use a CA Cert")])],1)],1),t._v(" "),a("ui-form-element",{attrs:{vertical:""}},[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column",cross:"start"},expression:"{ dir: 'column', cross: 'start' }"},{name:"gutter",rawName:"v-gutter",value:[1,null],expression:"[1, null]"}],attrs:{slot:"content"},slot:"content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cacert,expression:"cacert"}],ref:"cacert",staticClass:"pageSsl-keyArea width:100%",attrs:{rows:"10"},domProps:{value:t.cacert},on:{input:function(e){e.target.composing||(t.cacert=e.target.value)}}})])])],1),t._v(" "),a("ui-button",{attrs:{slot:"footer:buttons",theme:"safe"},on:{click:t.submit},slot:"footer:buttons"},[a("translate",[t._v("Save")])],1)],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},2313:function(t,e){}}]);