(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1282:function(n,e,t){"use strict";t.r(e);var o=t(2245),i=t(1846);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);t(2600);var s=t(0),r=t(2598),l=t.n(r),u=Object(s.a)(i.default,o.a,o.b,!1,null,null,null);"function"==typeof l.a&&l()(u),e.default=u.exports},1832:function(n,e,t){var o=t(2599);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4).default)("00aa83f0",o,!0,{})},1833:function(n,e,t){var o=t(2601);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4).default)("be09e78a",o,!0,{})},1834:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=c(t(1842)),i=c(t(66)),a=c(t(389)),s=c(t(577)),r=c(t(388)),l=c(t(576)),u=t(67);function c(n){return n&&n.__esModule?n:{default:n}}var d=i.default.$exports.sizes.reverse()[0],p=s.default.props.timeout.default;e.default={components:{KitchenSinkComponent:o.default},data:function(){var n=this;return{icons:{component:i.default,ids:i.default.$exports.icons,biggestSize:d,options:[{id:"size",values:i.default.$exports.sizes,value:d},"theme","color","original"]},button:{component:a.default,options:[{id:"theme",value:a.default.$exports.themes[0]},"size","disabled",{id:"icon",values:[null,"check","close","plus-fill","pencil"],value:"check"},{id:"textSlot",type:"textSlot",value:"Button"}]},notification:{component:s.default,renderedOptions:{},options:["theme",{id:"timeout",values:[1/0,5*p,2*p,p,p/2,p/5],value:1/0},{id:"title",value:"Notification"},{id:"content",type:"html",value:"This is quite a long notification message which wraps into several lines"},{id:"reactiveData",type:"reactive",value:["state","permanent"]},{id:"actions",type:"buttons",value:[{label:"App notification test",handler:function(){return n.$notify((0,u.reduceToObject)(n.notification.renderedOptions,["theme","title","content","timeout"]))}}]}]},loaderBar:{component:r.default,componentInstance:function(){return n.$refs.loaderBar},options:["theme","size",{id:"timeout",value:3e3},{id:"reactiveData",type:"reactive",value:["state","timeStarted","timeNow","timeEnd","timeLeft","progress","progressOffset","progressVisible"]},{id:"actions",type:"buttons",value:["Start","Extend","End","Pause","Continue"].map(function(e){return{label:e,handler:function(){return n.$refs.loaderBar[e.toLowerCase()]()}}})}]},badge:{component:l.default,options:["theme","size","icon","uppercase",{id:"textSlot",type:"textSlot",value:"Badge"}]}}}}},1835:function(n,e,t){"use strict";t.r(e);var o=t(1834),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=i.a},1836:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=u(t(1842)),i=u(t(582)),a=u(t(581)),s=u(t(580)),r=u(t(579)),l=u(t(578));function u(n){return n&&n.__esModule?n:{default:n}}e.default={components:{KitchenSinkComponent:o.default},data:function(){return{text:{component:i.default,options:["disabled","placeholder","prefix","suffix"],model:""},password:{component:a.default,options:["disabled","autocomplete"],model:""},range:{component:s.default,options:["size","theme","min","max","step"],model:50},dropzone:{component:r.default,options:["size","multiple",{id:"maxFiles",value:1,min:1},{id:"accept",values:[null,["image/*"],[".tar.gz"],[".sql",".sql.gz"]]}],model:null},color:{component:l.default,options:[{id:"predefinedColors",value:!0}],colors:["#555","#123456","#987645","#aabbcc","#9f8ac5"],model:""}}}}},1837:function(n,e,t){"use strict";t.r(e);var o=t(1836),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=i.a},1838:function(n,e,t){var o=t(2605);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4).default)("076b3ebb",o,!0,{})},1839:function(n,e,t){var o=t(2607);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4).default)("3d49afcb",o,!0,{})},1840:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d(t(19)),i=d(t(9)),a=d(t(76)),s=d(t(1)),r=d(t(3)),l=d(t(58)),u=t(56),c=t(67);function d(n){return n&&n.__esModule?n:{default:n}}e.default={props:{component:Object,componentInstance:Function,values:Object,options:{type:Array,default:function(){return[]},validator:function(n){return n.every(function(n){return["string","object"].includes(void 0===n?"undefined":(0,l.default)(n))})}},model:{required:!1}},data:function(){return{shouldRender:!0,normalizedOptions:[],tempValue:null,instance:null}},computed:{modelOption:function(){return this.normalizedOptions.find(function(n){return n.isModel})||{}},textSlot:function(){var n=this.normalizedOptions.find(function(n){return"textSlot"===n.type});return!!n&&n.value}},methods:{resetComponent:function(){var n=this;this.shouldRender=!1,this.$nextTick(function(){n.shouldRender=!0}),this.$nextTick(function(){n.$forceUpdate()},1)},renderedOptions:function(n){return this.normalizedOptions.filter(function(e){return!n||e.isProp}).reduce(function(n,e){return(0,r.default)({},n,(0,s.default)({},e.id,"array"===e.type?u._.get(e,"value.value"):e.value))},{})},valueToString:function(n){var e=Array.isArray(n),t=(e?n:[n]).map(function(n){return n instanceof File&&(n=(0,c.reduceToObject)(n,["name","size","type","lastModified"])),n});return"object"===(void 0===(t=e?t:t[0])?"undefined":(0,l.default)(t))?(0,a.default)(t,null,4):t.toString()},normalizeOptions:function(){var n=this;this.normalizedOptions=this.options.map(function(e){var t="string"==typeof e?e:e.id,a=(0,r.default)({id:t},"object"===(void 0===e?"undefined":(0,l.default)(e))?e:{}),s=n.component&&(0,i.default)(n.component.props).includes(t),u=function(){if(s){var e=n.component.props[t];return"function"==typeof e?{type:e}:e}return{}}(),d=void 0!==a.value?a.value:void 0!==u.default?"function"==typeof u.default?u.default():u.default:void 0,p=a.type?a.type:void 0!==d?(0,c.getType)(d):u.type?(0,c.getTypeFromConstructor)(u.type):void 0;if((0,o.default)(a,{isProp:s,value:d,type:p,values:a.values||u.values||[]}),a.values.length&&((0,o.default)(a,{type:"array",values:a.values.map(function(n){return{value:n,label:""+n}}),value:u.required&&void 0===a.value?a.values[0]:a.value}),a.value=a.values.find(function(n){return n.value===a.value})),"boolean"!==a.type||a.values.length||(a.values=void 0===a.value?[!0,!1,void 0]:[!0,!1]),"reactive"===a.type){var f=a.value;(0,o.default)(a,{type:"code",value:function(){return n.instance?(0,c.reduceToObject)(n.instance,f):null}})}return a})},handleSelectFocus:function(n,e){this.tempValue=this.tempValue||n.value,n.value=e},handleSelectClose:function(n){this.tempValue&&this.tempValue.value!==n.value&&(n.value=this.tempValue),this.tempValue=null}},created:function(){var n=this;this.normalizeOptions(),this.normalizedOptions.forEach(function(e,t){n.$watch(function(){return n.normalizedOptions[t].value},function(t){e.onChange&&e.onChange(t),n.$emit("update:renderedOptions",n.renderedOptions())},{immediate:!0})}),this.$watch("instance",function(){n.$forceUpdate()}),void 0!==this.model&&(this.normalizedOptions.push({id:"v-model",type:"code",value:this.model,isModel:!0}),this.$watch("model",function(e){n.modelOption.value=e}))},beforeUpdate:function(){this.instance=this.componentInstance?this.componentInstance():this.$refs.component}}},1841:function(n,e,t){"use strict";t.r(e);var o=t(1840),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=i.a},1842:function(n,e,t){"use strict";t.r(e);var o=t(2033),i=t(1841);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);t(2608);var s=t(0),r=Object(s.a)(i.default,o.a,o.b,!1,null,null,null);e.default=r.exports},1843:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=u(t(1)),i=u(t(3)),a=u(t(575)),s=u(t(76)),r=u(t(1842)),l=t(36);function u(n){return n&&n.__esModule?n:{default:n}}var c={shadesCount:5,shadesFn:function(n,e){return n+15*(e-Math.floor(this.shadesCount/2))},colors:["primary","safe","danger","neutral"],modifiers:["lightness","saturation","alpha"]};e.default={components:{KitchenSinkComponent:r.default},data:function(){var n=this;return{pre:(0,s.default)({path:"/",meta:{label:"Dashboard",parent:"user"},name:"user/dashboard",props:!0},null,4),colors:l.themeColors,cssColors:{items:c.colors.map(function(n){return{id:n,varName:l.cssVars.varName("color",n),modify:(0,l.scaleColor)(l.cssVars.get("color",n)),shades:(0,a.default)({length:c.shadesCount},function(e,t){return l.cssVars.use("color",n+"-"+t)})}}),options:c.modifiers.map(function(e){return{id:e,value:"alpha"===e?100:0,min:"alpha"===e?0:-100,max:100,type:"range",onChange:function(t){n.cssColors.options.find(function(n){return n.id===e}).value=t,n.cssColorsRecolor()}}})}}},methods:{cssColorsRecolor:function(){var n=this;this.cssColors.items.forEach(function(e){var t=e.id,o=e.modify;e.shades.forEach(function(e,i){var a=n.cssColorMixin,s=a.a,r=a.l,u=a.s;l.cssVars.set("color",t+"-"+i,o({a:s,l:c.shadesFn(r,i),s:c.shadesFn(u,i)}))})})}},computed:{cssColorMixin:function(){var n=this;return c.modifiers.reduce(function(e,t){return(0,i.default)({},e,(0,o.default)({},t[0],n.cssColors.options.find(function(n){return n.id===t}).value))},{})}},mounted:function(){this.cssColorsRecolor()}}},1844:function(n,e,t){"use strict";t.r(e);var o=t(1843),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=i.a},1845:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(t(2609)),i=r(t(2604)),a=r(t(2603)),s=t(56);function r(n){return n&&n.__esModule?n:{default:n}}var l=["typography","inputs","elements"];e.default={components:{TabTypography:o.default,TabInputs:i.default,TabElements:a.default},data:function(){return{tabs:l.map(function(n){return{id:n,label:s._.upperFirst(n)}})}},computed:{tab:function(){return this.$route.params.tab||l[0]}},methods:{handleTabChange:function(n){this.$router.push({name:"kitchen-sink",params:{tab:n}})}}}},1846:function(n,e,t){"use strict";t.r(e);var o=t(1845),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=i.a},2033:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{directives:[{name:"margin",rawName:"v-margin",value:[3,null],expression:"[3, null]"}],staticClass:"kitchenSinkSection radius:def border:a:def overfl:hid"},[t("ui-grid",{directives:[{name:"padding",rawName:"v-padding",value:[1,2],expression:"[1, 2]"}],staticClass:"c:bg:gray2 border:b:def",attrs:{tag:"header",gutter:"medium"}},[t("h2",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"},{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}]},[n._t("title")],2),n._v(" "),t("ui-grid",[n.component?t("ui-button-icon",{attrs:{icon:"delete",title:n.$gettext("Reset component")},on:{click:n.resetComponent}}):n._e()],1)],1),n._v(" "),t("ui-grid",{attrs:{cross:"stretch",gutter:0}},[n.normalizedOptions.length?t("div",{directives:[{name:"padding",rawName:"v-padding",value:1,expression:"1"}],staticClass:"kitchenSinkSection-options border:r:def overfl:auto"},[t("div",{staticClass:"disp:table"},n._l(n.normalizedOptions,function(e){return t("div",{staticClass:"disp:trow"},[t("label",{staticClass:"disp:tcell wrap:nowrap"},[n._v("\n                        "+n._s(e.id)+"\n                    ")]),n._v(" "),t("div",{directives:[{name:"padding",rawName:"v-padding",value:[.5,0,.5,1],expression:"[.5, 0, .5, 1]"}],staticClass:"disp:tcell width:100%"},["string"===e.type||"textSlot"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"option.value"}],staticClass:"width:100%",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||n.$set(e,"value",t.target.value)}}}):n._e(),n._v(" "),"array"===e.type?t("input-select",{staticClass:"width:100%",attrs:{options:e.values},on:{change:function(e){n.tempValue=null},open:function(e){n.tempValue=null},close:function(t){n.handleSelectClose(e)},"focus:change":function(t){n.handleSelectFocus(e,t)}},model:{value:e.value,callback:function(t){n.$set(e,"value",t)},expression:"option.value"}}):n._e(),n._v(" "),"number"===e.type?t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"option.value",modifiers:{number:!0}}],staticClass:"width:100%",attrs:{type:"number",min:e.min,max:e.max},domProps:{value:e.value},on:{input:function(t){t.target.composing||n.$set(e,"value",n._n(t.target.value))},blur:function(e){n.$forceUpdate()}}}):n._e(),n._v(" "),"html"===e.type?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"option.value"}],staticClass:"width:100%",attrs:{rows:"3"},domProps:{value:e.value},on:{input:function(t){t.target.composing||n.$set(e,"value",t.target.value)}}}):n._e(),n._v(" "),"range"===e.type?t("input-range",{staticClass:"width:100%",attrs:{min:e.min,max:e.max},model:{value:e.value,callback:function(t){n.$set(e,"value",t)},expression:"option.value"}}):n._e(),n._v(" "),"boolean"===e.type?t("ui-grid",{attrs:{gutter:"medium"}},n._l(e.values,function(o){return t("input-check",n._b({key:o,attrs:{type:"radio"},model:{value:e.value,callback:function(t){n.$set(e,"value",t)},expression:"option.value"}},"input-check",{value:o},!1),[n._v("\n                                "+n._s(void 0===o?"undefined":o)+"\n                            ")])})):n._e(),n._v(" "),"code"===e.type?t("ui-code-area",{staticClass:"width:100%",attrs:{breakLines:"",content:n.valueToString("function"==typeof e.value?e.value():e.value)||"&nbsp;"}}):n._e(),n._v(" "),"buttons"===e.type?t("ui-grid",{attrs:{wrap:""}},n._l(e.value,function(e){return t("ui-button",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],key:e.label,attrs:{theme:"light",size:"normal"},on:{click:e.handler}},[n._v("\n                                "+n._s(e.label)+"\n                            ")])})):n._e()],1)])}))]):n._e(),n._v(" "),t("section",{directives:[{name:"flex",rawName:"v-flex",value:{main:"center",cross:"center"},expression:"{ main: 'center', cross: 'center'}"},{name:"flex-item",rawName:"v-flex-item",value:{grow:!0,shrink:!0},expression:"{ grow: true, shrink: true }"},{name:"padding",rawName:"v-padding",value:2,expression:"2"}],staticClass:"kitchenSinkSection-preview",class:{"-is-canvas":n.component}},[n.$slots.default?t("div",{staticClass:"width:100%"},[n._t("default")],2):n.shouldRender?n._t("component",[t(n.component,n._b({ref:"component",tag:"component",model:{value:n.modelOption.value,callback:function(e){n.$set(n.modelOption,"value",e)},expression:"modelOption.value"}},"component",n.renderedOptions(),!1),[n.textSlot?[n._v(n._s(n.textSlot))]:n._e()],2)],null,n.renderedOptions(!1)):n._e()],2)])],1)},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},2060:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("kitchen-sink-component",[t("template",{slot:"title"},[n._v("Headings")]),n._v(" "),t("h1",[n._v("Heading 1")]),n._v(" "),t("h2",[n._v("Heading 2")]),n._v(" "),t("h3",[n._v("Heading 3")]),n._v(" "),t("h4",[n._v("Heading 4")]),n._v(" "),t("h5",[n._v("Heading 5")])],2),n._v(" "),t("kitchen-sink-component",[t("template",{slot:"title"},[n._v("Table")]),n._v(" "),t("table",[t("tr",n._l(4,function(e){return t("th",[n._v("\n                    Table header\n                ")])})),n._v(" "),n._l(3,function(e){return t("tr",[t("td",[n._v("Table row")]),n._v(" "),t("td",[n._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),n._v(" "),t("td",[n._v("Table row")]),n._v(" "),t("td",[n._v("Table row")])])})],2)],2),n._v(" "),t("kitchen-sink-component",[t("template",{slot:"title"},[n._v("Preformatted text")]),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.pre)}})],2),n._v(" "),t("kitchen-sink-component",[t("template",{slot:"title"},[n._v("Theme colors")]),n._v(" "),t("table",n._l(n.colors,function(e){return t("tr",[t("td",{staticClass:"txt:medium"},[n._v(n._s(e))]),n._v(" "),t("td",{staticClass:"width:100%",class:["c:bg:"+e]})])}))],2),n._v(" "),t("kitchen-sink-component",{attrs:{options:n.cssColors.options}},[t("template",{slot:"title"},[n._v("Theme colors (CSS variables)")]),n._v(" "),t("div",{staticClass:"pos:rel",attrs:{slot:"component"},slot:"component"},[t("table",{staticStyle:{"table-layout":"fixed"}},n._l(n.cssColors.items,function(e){return t("tr",n._l(e.shades,function(n){return t("td",{style:{background:n}})}))})),n._v(" "),t("table",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"}],staticClass:"pos:abs pos:t:0"},n._l(n.cssColors.items,function(e){return t("tr",{staticStyle:{background:"none"}},[t("td",{staticClass:"txt:medium txt:center"},[n._v(n._s(e.varName))])])}))])],2)],1)},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},2062:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("kitchen-sink-component",n._b({},"kitchen-sink-component",n.text,!1),[t("template",{slot:"title"},[n._v("Text")])],2),n._v(" "),t("kitchen-sink-component",n._b({},"kitchen-sink-component",n.password,!1),[t("template",{slot:"title"},[n._v("Password")])],2),n._v(" "),t("kitchen-sink-component",n._b({},"kitchen-sink-component",n.range,!1),[t("template",{slot:"title"},[n._v("Range")])],2),n._v(" "),t("kitchen-sink-component",n._b({},"kitchen-sink-component",n.dropzone,!1),[t("template",{slot:"title"},[n._v("Dropzone")])],2),n._v(" "),t("kitchen-sink-component",n._b({scopedSlots:n._u([{key:"component",fn:function(e){return t("input-color",n._b({staticClass:"width:100%",attrs:{colors:e.predefinedColors?n.color.colors:[]},model:{value:n.color.model,callback:function(e){n.$set(n.color,"model",e)},expression:"color.model"}},"input-color",e,!1))}}])},"kitchen-sink-component",n.color,!1),[t("template",{slot:"title"},[n._v("Color")])],2)],1)},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},2063:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("kitchen-sink-component",n._b({scopedSlots:n._u([{key:"component",fn:function(e){var o=e.size,i=e.theme,a=e.original,s=e.color;return t("ui-grid",{attrs:{wrap:""}},n._l(n.icons.ids,function(e){return t("div",{staticClass:"pos:rel"},[t("ui-icon",{directives:[{name:"visible",rawName:"v-visible",value:!1,expression:"false"}],attrs:{id:e,size:n.icons.biggestSize}}),n._v(" "),t("div",{directives:[{name:"flex",rawName:"v-flex",value:{main:"center",cross:"center"},expression:"{ main: 'center', cross: 'center' }"}],staticClass:"pos:abs pos:a:0"},[t("ui-icon",n._b({attrs:{title:e}},"ui-icon",{id:e,size:o,theme:i,original:a,color:s},!1))],1)],1)}))}}])},"kitchen-sink-component",n.icons,!1),[t("template",{slot:"title"},[n._v("Icons")])],2),n._v(" "),t("kitchen-sink-component",n._b({},"kitchen-sink-component",n.button,!1),[t("template",{slot:"title"},[n._v("Button")])],2),n._v(" "),t("kitchen-sink-component",n._b({},"kitchen-sink-component",n.badge,!1),[t("template",{slot:"title"},[n._v("Badge")])],2),n._v(" "),t("kitchen-sink-component",n._b({attrs:{renderedOptions:n.notification.renderedOptions},on:{"update:renderedOptions":function(e){n.$set(n.notification,"renderedOptions",e)}}},"kitchen-sink-component",n.notification,!1),[t("template",{slot:"title"},[n._v("Notification")])],2),n._v(" "),t("kitchen-sink-component",n._b({scopedSlots:n._u([{key:"component",fn:function(e){var o=e.theme,i=e.size,a=e.timeout;return t("div",{staticClass:"width:100%"},[t("ui-loader-bar",n._b({ref:"loaderBar"},"ui-loader-bar",{theme:o,size:i,timeout:a},!1))],1)}}])},"kitchen-sink-component",n.loaderBar,!1),[t("template",{slot:"title"},[n._v("LoaderBar")])],2)],1)},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},2245:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("app-page",[e("ui-tabs",this._b({attrs:{radio:"",selected:this.tab},on:{"update:selected":this.handleTabChange}},"ui-tabs",{tabs:this.tabs},!1),[this._l(this.tabs,function(n){return e("template",{slot:"tab:"+n.id},[e("keep-alive",[e("tab-"+n.id,{tag:"component"})],1)],1)})],2)],1)},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},2598:function(n,e){},2599:function(n,e,t){(n.exports=t(5)(!0)).push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue?vue&type=style&index=0&lang=scss",sourceRoot:""}])},2600:function(n,e,t){"use strict";var o=t(1832);t.n(o).a},2601:function(n,e,t){(n.exports=t(5)(!0)).push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"kitchen-sink-tab-elements.vue?vue&type=style&index=0&lang=scss",sourceRoot:""}])},2602:function(n,e,t){"use strict";var o=t(1833);t.n(o).a},2603:function(n,e,t){"use strict";t.r(e);var o=t(2063),i=t(1835);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);t(2602);var s=t(0),r=Object(s.a)(i.default,o.a,o.b,!1,null,null,null);e.default=r.exports},2604:function(n,e,t){"use strict";t.r(e);var o=t(2062),i=t(1837);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);var s=t(0),r=Object(s.a)(i.default,o.a,o.b,!1,null,null,null);e.default=r.exports},2605:function(n,e,t){(n.exports=t(5)(!0)).push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"kitchen-sink-tab-typography.vue?vue&type=style&index=0&lang=scss",sourceRoot:""}])},2606:function(n,e,t){"use strict";var o=t(1838);t.n(o).a},2607:function(n,e,t){(n.exports=t(5)(!0)).push([n.i,".kitchenSinkSection-options{min-width:40%;width:40%}.kitchenSinkSection-preview.-is-canvas{background-image:linear-gradient(45deg,#eee 25%,transparent 0),linear-gradient(-45deg,#eee 25%,transparent 0),linear-gradient(45deg,transparent 75%,#eee 0),linear-gradient(-45deg,transparent 75%,#eee 0);background-size:2rem 2rem;background-position:0 0,0 1rem,1rem -1rem,-1rem 0}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/kitchen-sink/_components/kitchen-sink-component.vue"],names:[],mappings:"AAuVA,4BACI,cACA,SAAU,CACb,uCAQG,2MAKA,0BACA,iDAAmE,CACtE",file:"kitchen-sink-component.vue?vue&type=style&index=0&lang=scss",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.kitchenSinkSection-options {\n    min-width: 40%;\n    width: 40%;\n}\n\n// Checkerboard background\n// https://stackoverflow.com/a/35362074/3841049\n.kitchenSinkSection-preview.-is-canvas {\n    $color: #eee;\n    $size: 2rem;\n    $pos: $size / 2;\n    background-image:\n        linear-gradient(45deg, $color 25%, transparent 25%),\n        linear-gradient(-45deg, $color 25%, transparent 25%),\n        linear-gradient(45deg, transparent 75%, $color 75%),\n        linear-gradient(-45deg, transparent 75%, $color 75%);\n    background-size: $size $size;\n    background-position: 0 0, 0 #{$pos}, #{$pos} #{-$pos}, #{-$pos} 0px;\n}\n"],sourceRoot:""}])},2608:function(n,e,t){"use strict";var o=t(1839);t.n(o).a},2609:function(n,e,t){"use strict";t.r(e);var o=t(2060),i=t(1844);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);t(2606);var s=t(0),r=Object(s.a)(i.default,o.a,o.b,!1,null,null,null);e.default=r.exports}}]);