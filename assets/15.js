(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1192:function(t,e,n){"use strict";n.r(e);var s=n(2192),o=n(1441);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n(0),u=n(2322),l=n.n(u),r=Object(a.a)(o.default,s.a,s.b,!1,null,null,null);"function"==typeof l.a&&l()(r),e.default=r.exports},1437:function(t,e,n){var s=n(2323);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4).default)("b75cb048",s,!0,{})},1438:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(n(11)),o=a(n(10)),i=n(7);function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{type:"included",question:"",value:""}},computed:(0,i.mapResponse)({GET_SECURITY_SETTINGS:["questions"]}),watch:{type:function(){this.question=""}},methods:{addQuestion:function(){var t=this;return(0,o.default)(s.default.mark(function e(){var n,o;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="included"===t.type?t.$get(["question","value"]):{custom_question:t.question,value:t.value},o="included"===t.type?"ADD_SECURITY_QUESTION":"ADD_CUSTOM_SECURITY_QUESTION",e.next=4,t.$actionRequest(o,n);case 4:e.sent&&t.$emit("questionAdded");case 6:case"end":return e.stop()}},e,t)}))()}}}},1439:function(t,e,n){"use strict";n.r(e);var s=n(1438),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=o.a},1440:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(n(19)),o=r(n(11)),i=r(n(10)),a=r(n(3)),u=n(7),l=r(n(2325));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({},(0,u.preload)("GET_SECURITY_SETTINGS"),{components:{AddSecurityQuestionDialog:l.default},data:function(){return{activeQuestion:{},newAnswer:"",select:[],settings:{security_questions:!1,api_with_password:!1,notify_on_all_question_failures:!1,max_attempts:"5"}}},computed:(0,u.mapResponse)({GET_SECURITY_SETTINGS:["table","questions"]}),methods:{handleQuestionEdit:function(t){this.activeQuestion=t,this.$dialog("EDIT_QUESTION_DIALOG").open()},handleAnswerSave:function(){var t=this;return(0,i.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$actionRequest("UPDATE_SECURITY_QUESTION",{select:[t.activeQuestion.id],value:t.newAnswer});case 2:e.sent&&(t.activeQuestion={},t.newAnswer="");case 4:case"end":return e.stop()}},e,t)}))()},saveSettings:function(){this.$actionRequest("UPDATE_SECURITY_SETTINGS",this.settings)},deleteCheckedQuestions:function(){var t=this;return(0,i.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$actionRequest("DELETE_SECURITY_QUESTION",t.$get("select"));case 1:case"end":return e.stop()}},e,t)}))()}},created:function(){(0,s.default)(this.settings,this.$state.api.GET_SECURITY_SETTINGS.response.settings)}})},1441:function(t,e,n){"use strict";n.r(e);var s=n(1440),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=o.a},2117:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"ADD_SECURITY_QUESTION_DIALOG",size:"normal"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Add Security Question")]),t._v(" "),n("ui-tabs",{attrs:{slot:"content",radio:"",tabs:[{id:"included",label:t.$gettext("Included")},{id:"custom",label:t.$gettext("Custom")}],selected:t.type},on:{"update:selected":function(e){t.type=e}},slot:"content"},[n("ui-form-element",{attrs:{slot:"tab:included",group:"securityQuestion",validators:{required:!0}},slot:"tab:included"},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Question")]),t._v(" "),n("input-usual-select",{attrs:{slot:"content",options:t.questions},slot:"content",model:{value:t.question,callback:function(e){t.question=e},expression:"question"}})],1),t._v(" "),n("ui-form-element",{attrs:{slot:"tab:custom",group:"securityQuestion",validators:{required:!0}},slot:"tab:custom"},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Question")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.question,callback:function(e){t.question=e},expression:"question"}})],1)],1),t._v(" "),n("ui-form-element",{attrs:{slot:"content",group:"securityQuestion",validators:{required:!0,maxLength:64}},slot:"content"},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Answer")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"safe",validateGroup:"securityQuestion"},on:{click:t.addQuestion},slot:"buttons"},[n("translate",[t._v("Add")])],1)],1)},o=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o})},2192:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",[t.settings.security_questions?t._e():n("app-page-section",[n("translate",{staticClass:"txt:bold",attrs:{tag:"p"}},[t._v("\n            This feature is not turned on.\n        ")]),t._v(" "),t.table.rows.length?t._e():n("translate",{attrs:{tag:"p"}},[t._v("\n            Add one or more Security Question, and then enable it in the options at the bottom of the page.\n        ")])],1),t._v(" "),n("app-page-section",[n("ui-api-table",t._b({on:{"action:del":t.deleteCheckedQuestions},scopedSlots:t._u([{key:"row:actions",fn:function(e){var s=e.item;return n("ui-link",{staticClass:"wrap:nowrap",on:{click:function(e){t.handleQuestionEdit(s)}}},[n("ui-icon",{attrs:{id:"pencil",size:"medium"}}),t._v(" "),t.$_Client.isPhone?t._e():n("translate",[t._v("\n                    Change Answer\n                ")])],1)}}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},"ui-api-table",{endpoint:"GET_SECURITY_SETTINGS",property:"table",rowID:"id",columns:{id:t.$gettext("ID"),q:{label:t.$gettext("Security Question"),grow:!0}},actions:{del:t.$gettext("Delete")},updateOn:["ADD_SECURITY_QUESTION","ADD_CUSTOM_SECURITY_QUESTION","UPDATE_SECURITY_QUESTION","DELETE_SECURITY_QUESTION"],verticalLayout:t.$_Client.isPhone},!1))],1),t._v(" "),n("template",{slot:"bottom:links"},[n("ui-link",{attrs:{bullet:""},on:{click:function(e){t.$dialog("ADD_SECURITY_QUESTION_DIALOG").open()}}},[n("translate",[t._v("Add new Security Question")])],1),t._v(" "),n("ui-link",{attrs:{bullet:""},on:{click:function(e){t.$dialog("SECURITY_QUESTIONS_SETTINGS_DIALOG").open()}}},[n("translate",[t._v("Security Questions options")])],1)],1),t._v(" "),n("add-security-question-dialog"),t._v(" "),n("ui-dialog",{attrs:{id:"EDIT_QUESTION_DIALOG",theme:"safe"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Edit question")]),t._v(" "),n("ui-form-element",{attrs:{slot:"content",vertical:""},slot:"content"},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("New answer:")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.newAnswer,callback:function(e){t.newAnswer=e},expression:"newAnswer"}})],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"safe",disabled:!t.newAnswer},on:{click:t.handleAnswerSave},slot:"buttons"},[n("translate",[t._v("Save")])],1)],1),t._v(" "),n("ui-dialog",{attrs:{id:"SECURITY_QUESTIONS_SETTINGS_DIALOG",theme:"primary",size:"normal"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Security Questions options")]),t._v(" "),n("template",{slot:"content"},[n("ui-form-element",[n("input-checkbox",{attrs:{slot:"content",disabled:!t.table.rows.length},slot:"content",model:{value:t.settings.security_questions,callback:function(e){t.$set(t.settings,"security_questions",e)},expression:"settings.security_questions"}},[n("translate",{staticClass:"txt:bold"},[t._v("\n                        Require valid answers to the Security Questions for login on this account\n                    ")])],1)],1),t._v(" "),n("ui-form-element",[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.settings.api_with_password,callback:function(e){t.$set(t.settings,"api_with_password",e)},expression:"settings.api_with_password"}},[n("translate",[t._v("\n                        Allow API logins with the current User/password. Login Keys and Session Keys are always allowed.\n                    ")])],1)],1),t._v(" "),n("ui-form-element",[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.settings.notify_on_all_question_failures,callback:function(e){t.$set(t.settings,"notify_on_all_question_failures",e)},expression:"settings.notify_on_all_question_failures"}},[n("translate",{attrs:{"translate-params":{count:t.settings.max_attempts}}},[t._v("\n                        Notify me on all failed question attempts. Disabling this option will still notify you after %{ count } failed attempts.\n                    ")])],1)],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"safe"},on:{click:t.saveSettings},slot:"buttons"},[n("translate",[t._v("Save")])],1)],2)],2)},o=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o})},2322:function(t,e){},2323:function(t,e,n){(t.exports=n(5)(!0)).push([t.i,"#ADD_SECURITY_QUESTION_DIALOG .select[data-v-d08a4266],#ADD_SECURITY_QUESTION_DIALOG input[type=text][data-v-d08a4266]{width:100%}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/user/_components/add-security-question-dialog.vue"],names:[],mappings:"AAiGA,uHAEQ,UAAW,CACd",file:"add-security-question-dialog.vue?vue&type=style&index=0&id=d08a4266&lang=scss&scoped=true",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#ADD_SECURITY_QUESTION_DIALOG {\n    .select, input[type=text] {\n        width: 100%;\n    }\n}\n"],sourceRoot:""}])},2324:function(t,e,n){"use strict";var s=n(1437);n.n(s).a},2325:function(t,e,n){"use strict";n.r(e);var s=n(2117),o=n(1439);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n(2324);var a=n(0),u=Object(a.a)(o.default,s.a,s.b,!1,null,"d08a4266",null);e.default=u.exports}}]);