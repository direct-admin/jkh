(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1223:function(e,t,a){"use strict";a.r(t);var i=a(2168),n=a(1563);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var l=a(0),o=a(2410),r=a.n(o),u=Object(l.a)(n.default,i.a,i.b,!1,null,null,null);"function"==typeof r.a&&r()(u),t.default=u.exports},1562:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(3),s=(i=n)&&i.__esModule?i:{default:i},l=a(7);t.default=(0,s.default)({},(0,l.preload)(["GET_EMAIL_USAGE_INFO","GET_EMAIL_USAGE_BLOCK_CRACKING"]),{data:function(){return{showFrom:"both"}},computed:(0,s.default)({},(0,l.mapResponse)({GET_EMAIL_USAGE_BLOCK_CRACKING:{blockCracking:"options.enabled"},GET_EMAIL_USAGE_INFO:["highest"]}),{totalUsage:function(){return[(0,s.default)({label:this.$gettext("Sender"),tooltip:this.$gettext('The "From" value set in the email header. This value should not be considered as accurate, as a sender can specify any value they wish.')},this.highest.sender),(0,s.default)({label:this.$gettext("Authentication"),tooltip:this.$gettext("If smtp authentication is used, this will show the login name used. Scripts will show the owner of the script. Can be considered accurate.")},this.highest.authenticated_id),(0,s.default)({label:this.$gettext("Sender Host"),tooltip:this.$gettext("If this is set, it will show the IP that connect to the server. If no IP is set, then the email was sent vie a local script.")},this.highest.sender_host_address),(0,s.default)({label:this.$gettext("Path"),tooltip:this.$gettext('If the email was generated from a script, the path value will show the working directory the script was in. An email in the spool will have a path value of "retry" for each attempt.')},this.highest.php_script)]}}),watch:{showFrom:function(){this.$refs.table.reloadTable()}}})},1563:function(e,t,a){"use strict";a.r(t);var i=a(1562),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t.default=n.a},2168:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",[a("app-page-section",[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:e.$_Client.isPhone?"column":"row",cross:e.$_Client.isPhone?"start":"center"},expression:"{\n                dir: $_Client.isPhone ? 'column' : 'row',\n                cross: $_Client.isPhone ? 'start' : 'center',\n            }"},{name:"gutter",rawName:"v-gutter",value:[null,1],expression:"[null, 1]"}]},[a("translate",{staticClass:"txt:bold"},[e._v("Show Usage From: ")]),e._v(" "),a("input-check",{attrs:{type:"radio",value:"today"},model:{value:e.showFrom,callback:function(t){e.showFrom=t},expression:"showFrom"}},[a("translate",[e._v("Today")])],1),e._v(" "),a("input-check",{attrs:{type:"radio",value:"past"},model:{value:e.showFrom,callback:function(t){e.showFrom=t},expression:"showFrom"}},[a("translate",[e._v("This Month (excluding today)")])],1),e._v(" "),a("input-check",{attrs:{type:"radio",value:"both"},model:{value:e.showFrom,callback:function(t){e.showFrom=t},expression:"showFrom"}},[a("translate",[e._v("This Month")])],1)],1)]),e._v(" "),a("app-page-section",[a("ui-table",{attrs:{isCheckable:!1,rows:e.totalUsage,disablePagination:"",isSortable:!1,editable:!1,columns:[{id:"label",label:e.$gettext("Highest")},{id:"value",label:e.$gettext("Value")},{id:"count",label:e.$gettext("Count")},{id:"percent",label:e.$gettext("Percent")}],verticalLayout:e.$_Client.isPhone},scopedSlots:e._u([{key:"col:label",fn:function(t){var i=t.label,n=t.tooltip;return a("ui-tooltip",{attrs:{theme:"safe"}},[a("span",{staticClass:"txt:bold cursor:pointer",attrs:{slot:"trigger"},slot:"trigger"},[e._v("\n                    "+e._s(i)+"\n                    "),a("ui-icon",{attrs:{theme:"safe",id:"question",size:"medium"}})],1),e._v("\n                "+e._s(n)+"\n            ")])}}])},[a("translate",{attrs:{slot:"table:after"},slot:"table:after"},[e._v("\n                Note: For older exim.pl files before version 13, each delivery attempt is counted, including retries.\n            ")])],1)],1),e._v(" "),a("app-page-section",[a("ui-api-table",e._b({ref:"table",attrs:{disableSelect:"",verticalLayout:e.$_Client.isPhone},scopedSlots:e._u([{key:"col:sender",fn:function(t){var i=t.item;return[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:e.$_Client.isPhone?"column":"row"},expression:"{\n                        dir: $_Client.isPhone ? 'column' : 'row'\n                    }"}]},[a("translate",{style:{width:"100px",display:"inline-block"},attrs:{tag:"strong"}},[e._v("Sender: ")]),e._v("\n                    "+e._s(i.sender)+"\n                ")],1),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:e.$_Client.isPhone?"column":"row"},expression:"{\n                        dir: $_Client.isPhone ? 'column' : 'row'\n                    }"}]},[a("translate",{style:{width:"100px",display:"inline-block"},attrs:{tag:"strong"}},[e._v("Destination: ")]),e._v("\n                    "+e._s(i.destination)+"\n                ")],1),e._v(" "),a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:e.$_Client.isPhone?"column":"row"},expression:"{\n                        dir: $_Client.isPhone ? 'column' : 'row'\n                    }"}]},[a("translate",{style:{width:"100px",display:"inline-block"},attrs:{tag:"strong"}},[e._v("Size: ")]),e._v("\n                    "+e._s(e._f("humanReadableSize")(i.size))+"\n                ")],1),e._v(" "),i.sender_host_item?a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:e.$_Client.isPhone?"column":"row"},expression:"{\n                        dir: $_Client.isPhone ? 'column' : 'row'\n                    }"}]},[a("translate",{attrs:{tag:"strong"}},[e._v("Host: ")]),e._v("\n                    "+e._s(i.sender_host_item)+"\n                ")],1):e._e()]}}])},"ui-api-table",{endpoint:"GET_EMAIL_USAGE_INFO",columns:{time:{label:e.$gettext("Time"),filter:"date"},sender:{label:e.$gettext("Details")},authenticated_id:e.$gettext("Auth ID"),path:{label:e.$gettext("Path"),grow:!0},id:e.$gettext("ID")},requestData:{which:e.showFrom}},!1))],1),e._v(" "),a("template",{slot:"bottom:links"},[e.blockCracking?a("ui-link",{attrs:{name:"user/email/usage/blockcracking",bullet:""}},[a("translate",[e._v("BlockCracking Blocked Paths")])],1):e._e(),e._v(" "),a("ui-link",{attrs:{name:"user/email/usage/php-scripts",bullet:""}},[a("translate",[e._v("PHP Scripts")])],1)],1)],2)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},2410:function(e,t){}}]);