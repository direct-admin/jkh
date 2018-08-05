(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1255:function(n,t,a){"use strict";a.r(t);var e=a(2218),s=a(1717);for(var o in s)"default"!==o&&function(n){a.d(t,n,function(){return s[n]})}(o);a(2515);var c=a(0),i=a(2513),l=a.n(i),u=Object(c.a)(s.default,e.a,e.b,!1,null,"2db91bc0",null);"function"==typeof l.a&&l()(u),t.default=u.exports},1715:function(n,t,a){var e=a(2514);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,a(4).default)("0c4bafcb",e,!0,{})},1716:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{backupOptions:["domain","subdomain","email","email_data","emailsettings","forwarder","autoresponder","vacation","list","ftp","ftpsettings","database","database_data"]}},methods:{createBackup:function(){this.$actionRequest("CREATE_USER_BACKUP",{select:this.backupOptions})}}}},1717:function(n,t,a){"use strict";a.r(t);var e=a(1716),s=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,function(){return e[n]})}(o);t.default=s.a},2218:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("app-page",{staticClass:"backup"},[a("template",{slot:"header:buttons"},[a("ui-button-link",{attrs:{theme:"primary",name:"user/backup/restore"}},[a("translate",[n._v("Restore Backup")])],1)],1),n._v(" "),a("app-page-section",{staticClass:"backup-create"},[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[n._v("Select Items to include in Backup")]),n._v(" "),a("translate",{staticClass:"subheading",attrs:{tag:"strong"}},[n._v("Website Data")]),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"domain"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Domains Directory: Backs up all user files for all domains\n                ")])],1)],1),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"subdomain"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Subdomains Lists: Backs up the list of subdomains for each domain\n                ")])],1)],1),n._v(" "),a("translate",{staticClass:"subheading",attrs:{tag:"strong"}},[n._v("E-mail")]),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"email"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    E-mail Accounts List for all domains (names and passwords)\n                ")])],1)],1),n._v(" "),n.backupOptions.includes("email")?a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"email_data"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    E-mail Data: Includes the messages from the Inbox, IMAP Folders, and webmail data.\n                ")])],1)],1):n._e(),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"emailsettings"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    E-mail Settings: Includes the filters and the catchall address.\n                ")])],1)],1),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"forwarder"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Forwarders: Includes all forwarding addresses.\n                ")])],1)],1),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"autoresponder"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Autoresponders: Includes all autoresponders and messages.\n                ")])],1)],1),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"vacation"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Vacation Messages: Includes all vacation messages and times.\n                ")])],1)],1),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"list"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Mailing Lists: Includes the list, digest-list and archives.\n                ")])],1)],1),n._v(" "),a("translate",{staticClass:"subheading",attrs:{tag:"strong"}},[n._v("FTP")]),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"ftp"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    FTP Accounts\n                ")])],1)],1),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"ftpsettings"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    FTP Settings\n                ")])],1)],1),n._v(" "),a("translate",{staticClass:"subheading",attrs:{tag:"strong"}},[n._v("Databases")]),n._v(" "),a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"database"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Database Settings: Backs up all DB Users and DB Settings\n                ")])],1)],1),n._v(" "),n.backupOptions.includes("database")?a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content",value:"database_data"},slot:"content",model:{value:n.backupOptions,callback:function(t){n.backupOptions=t},expression:"backupOptions"}},[a("translate",[n._v("\n                    Database Data\n                ")])],1)],1):n._e()],1),n._v(" "),a("template",{slot:"footer:buttons"},[a("ui-button",{attrs:{theme:"safe"},on:{click:n.createBackup}},[a("translate",[n._v("Create Backup")])],1)],1)],2)},s=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return s})},2513:function(n,t){},2514:function(n,t,a){(n.exports=a(5)(!0)).push([n.i,".backup .backup-create .subheading[data-v-2db91bc0]{display:block;margin-top:2rem}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/user/backup/index.vue"],names:[],mappings:"AA4JA,oDAGY,cACA,eAAgB,CACnB",file:"index.vue?vue&type=style&index=0&id=2db91bc0&lang=scss&scoped=true",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.backup {\n    .backup-create {\n        .subheading {\n            display: block;\n            margin-top: 2rem;\n        }\n    }\n}\n"],sourceRoot:""}])},2515:function(n,t,a){"use strict";var e=a(1715);a.n(e).a}}]);