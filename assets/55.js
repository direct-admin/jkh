(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1232:function(n,t,e){"use strict";e.r(t);var o=e(2180),s=e(1592);for(var r in s)"default"!==r&&function(n){e.d(t,n,function(){return s[n]})}(r);e(2432);var a=e(0),i=e(2430),c=e.n(i),l=Object(a.a)(s.default,o.a,o.b,!1,null,null,null);"function"==typeof c.a&&c()(l),t.default=l.exports},1590:function(n,t,e){var o=e(2431);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e(4).default)("575ffe27",o,!0,{})},1591:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(e(11)),s=i(e(10)),r=i(e(3)),a=e(7);function i(n){return n&&n.__esModule?n:{default:n}}t.default=(0,r.default)({},(0,a.preload)("GET_CREATE_AUTORESPONDER_SETTINGS"),{data:function(){return{user:"",text:"",cc:!1,email:"",subjectPrefix:"",encoding:"",onceSelect:"",contentType:""}},computed:(0,a.mapResponse)({GET_CREATE_AUTORESPONDER_SETTINGS:"settings"}),methods:{createAutoresponder:function(){var n=this;return(0,s.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$actionRequest("CREATE_EMAIL_AUTORESPONDER",{user:n.user,subject:n.subjectPrefix,reply_encoding:n.encoding,reply_content_type:n.contentType,reply_once_time:n.onceSelect,text:n.text,cc:n.cc?"ON":"OFF",email:n.$p6e.email2ascii(n.email)});case 2:t.sent&&n.$router.back();case 4:case"end":return t.stop()}},t,n)}))()}},created:function(){this.subjectPrefix=this.settings.subject_prefix,this.encoding=this.settings.reply_encodings.value,this.contentType=this.settings.reply_content_types.value,this.onceSelect=this.settings.reply_once_select.value}})},1592:function(n,t,e){"use strict";e.r(t);var o=e(1591),s=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t.default=s.a},2180:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("app-page",{attrs:{id:"create-autoresponder"}},[e("app-page-section",[e("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Responder Address:\n            ")]),n._v(" "),e("input-text",{attrs:{slot:"content",suffix:"@"+n.$domainUnicode},slot:"content",model:{value:n.user,callback:function(t){n.user=t},expression:"user"}})],1),n._v(" "),n.settings.custom_reply_headers?[e("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("Subject Prefix")]),n._v(" "),e("input-text",{staticClass:"input-1px",attrs:{slot:"content",suffix:n.$gettext(": original subject")},slot:"content",model:{value:n.subjectPrefix,callback:function(t){n.subjectPrefix=t},expression:"subjectPrefix"}})],1),n._v(" "),e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("Reply Encoding")]),n._v(" "),e("input-usual-select",{attrs:{slot:"content",options:n.settings.reply_encodings.options},slot:"content",model:{value:n.encoding,callback:function(t){n.encoding=t},expression:"encoding"}})],1),n._v(" "),e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("Content-Type")]),n._v(" "),e("input-usual-select",{attrs:{slot:"content",options:n.settings.reply_content_types.options},slot:"content",model:{value:n.contentType,callback:function(t){n.contentType=t},expression:"contentType"}})],1),n._v(" "),e("ui-form-element",[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("Reply Frequency")]),n._v(" "),e("input-usual-select",{attrs:{slot:"content",options:n.settings.reply_once_select.options},slot:"content",model:{value:n.onceSelect,callback:function(t){n.onceSelect=t},expression:"onceSelect"}})],1)]:n._e(),n._v(" "),e("ui-form-element",{attrs:{group:"autoresponder",validators:{required:!0}}},[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Responder Message:\n            ")]),n._v(" "),e("input-textarea",{attrs:{slot:"content"},slot:"content",model:{value:n.text,callback:function(t){n.text=t},expression:"text"}})],1),n._v(" "),n.cc?e("ui-form-element",{key:"cc-enabled",attrs:{group:"autoresponder",validators:{required:!0}}},[e("input-check",{attrs:{slot:"title"},slot:"title",model:{value:n.cc,callback:function(t){n.cc=t},expression:"cc"}},[e("translate",[n._v("\n                    Send a CC to:\n                ")])],1),n._v(" "),e("input-text",{attrs:{slot:"content"},slot:"content",model:{value:n.email,callback:function(t){n.email=t},expression:"email"}})],1):e("ui-form-element",{key:"cc-disabled",attrs:{group:"autoresponder"}},[e("input-check",{attrs:{slot:"title"},slot:"title",model:{value:n.cc,callback:function(t){n.cc=t},expression:"cc"}},[e("translate",[n._v("\n                    Send a CC to:\n                ")])],1),n._v(" "),e("input-text",{attrs:{slot:"content",value:n.email,disabled:""},slot:"content"})],1)],2),n._v(" "),e("ui-button",{attrs:{slot:"footer:buttons",theme:"safe",validateGroup:"autoresponder"},on:{click:n.createAutoresponder},slot:"footer:buttons"},[n._v("\n        Save\n    ")])],1)},s=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return s})},2430:function(n,t){},2431:function(n,t,e){(n.exports=e(5)(!0)).push([n.i,"#create-autoresponder textarea{max-height:unset!important;min-height:12rem!important;width:100%!important}#create-autoresponder .input-1px input[type=text]{width:1px}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/user/email/autoresponders/create.vue"],names:[],mappings:"AA4KA,+BAEQ,2BACA,2BACA,oBAAsB,CAJ9B,kDAOQ,SAAU,CACb",file:"create.vue?vue&type=style&index=0&lang=scss",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#create-autoresponder {\n    textarea {\n        max-height:unset !important;\n        min-height: 12rem !important;\n        width: 100% !important;\n    };\n    .input-1px input[type="text"]{\n        width: 1px;\n    }\n}\n'],sourceRoot:""}])},2432:function(n,t,e){"use strict";var o=e(1590);e.n(o).a}}]);