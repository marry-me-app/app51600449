(window.webpackJsonpminiapp=window.webpackJsonpminiapp||[]).push([[0],{189:function(e,t,r){e.exports=r(281)},275:function(e,t,r){},276:function(e,t,r){},277:function(e,t,r){},279:function(e,t,r){},281:function(e,t,r){"use strict";r.r(t);r(190),r(216),r(218),r(219),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(230),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(239),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258);var a=r(0),n=r.n(a),s=r(40),i=r.n(s),c=(r(266),r(267),r(11)),o=(r(275),r(276),r(277),r(4)),l=r.n(o),u=r(10),p=r(85),f=r(86),h=r(90),d=r(87),m=r(31),g=r(91),_=r(9),C=r.n(_);function v(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";this.back=function(){if(null!==e.state.popout)return e.setState({popout:null}),void window.history.pushState({pop:"popout"},"Title");var t=e.state.history;1===t.length?C.a.send("VKWebAppClose",{status:"success"}):t.length>1&&(t.pop(),e.setState({activePanel:t[t.length-1],history:t,snackbar:null}))},this.go=function(t){var r=e.state.history;"object"===typeof t&&t.currentTarget&&(t=t.currentTarget.dataset.to),r[r.length-1]!==t&&(r.push(t),window.history.pushState({activePanel:t},"Title"),e.setState({activePanel:t,history:r,snackbar:null}))},this.state.history=[t],this.state.activePanel=t}function b(){return{activePanel:this.state.activePanel,onSwipeBack:this.back,history:this.state.history,popout:this.state.popout}}r(279);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var E=n.a.createElement("g",{clipPath:"url(#clip0_5_699)"},n.a.createElement("rect",{width:96,height:96,rx:39.5145,fill:"url(#paint0_linear_5_699)"}),n.a.createElement("g",{filter:"url(#filter0_f_5_699)"},n.a.createElement("circle",{cx:105.469,cy:18.0938,r:36.0938,fill:"url(#paint1_linear_5_699)"})),n.a.createElement("g",{filter:"url(#filter1_f_5_699)"},n.a.createElement("circle",{cx:23.9062,cy:95.9062,r:36.0938,fill:"url(#paint2_linear_5_699)"})),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.4107 36.4687C35.0422 36.4687 29.8795 41.6315 29.8795 48C29.8795 54.3685 35.0422 59.5312 41.4107 59.5312C45.7288 59.5312 49.4926 57.1578 51.4685 53.6442C51.4897 53.6019 51.5125 53.5608 51.5369 53.5209C52.4328 51.8812 52.942 50.0001 52.942 48C52.942 41.6315 47.7792 36.4687 41.4107 36.4687ZM53.7671 56.1959C54.0379 56.2228 54.3121 56.2366 54.5893 56.2366C57.0496 56.2366 59.2595 55.1558 60.7663 53.4486C61.3683 52.7665 61.3034 51.7255 60.6213 51.1234C59.9392 50.5214 58.8982 50.5863 58.2962 51.2684C57.5618 52.1004 56.5558 52.6813 55.4171 52.8731C55.9481 51.3468 56.2366 49.7071 56.2366 48C56.2366 43.6077 54.3266 39.6615 51.2918 36.9467C52.3357 36.6358 53.4422 36.4687 54.5893 36.4687C60.9578 36.4687 66.1205 41.6315 66.1205 48C66.1205 54.3685 60.9578 59.5312 54.5893 59.5312C53.4422 59.5312 52.3357 59.3642 51.2918 59.0533C52.2329 58.2115 53.0658 57.2512 53.7671 56.1959ZM48.0004 61.2846C46.0154 62.2711 43.7778 62.8259 41.4107 62.8259C33.2226 62.8259 26.5848 56.1881 26.5848 48C26.5848 39.8119 33.2226 33.1741 41.4107 33.1741C43.7778 33.1741 46.0154 33.7288 48.0004 34.7154C49.9866 33.7286 52.2251 33.1741 54.5893 33.1741C62.7774 33.1741 69.4152 39.8119 69.4152 48C69.4152 56.1881 62.7774 62.8259 54.5893 62.8259C52.2251 62.8259 49.9866 62.2714 48.0004 61.2846ZM35.3787 51.1234C36.0608 50.5214 37.1018 50.5863 37.7038 51.2684C38.6118 52.2971 39.9349 52.9419 41.4107 52.9419C42.8865 52.9419 44.2097 52.2971 45.1176 51.2684C45.7197 50.5863 46.7607 50.5214 47.4428 51.1234C48.1249 51.7255 48.1898 52.7665 47.5877 53.4486C46.0809 55.1558 43.871 56.2366 41.4107 56.2366C38.9504 56.2366 36.7405 55.1558 35.2337 53.4486C34.6316 52.7665 34.6966 51.7255 35.3787 51.1234ZM36.0569 43.058C34.9197 43.058 33.9978 43.9799 33.9978 45.1172C33.9978 46.2544 34.9197 47.1763 36.0569 47.1763C37.1942 47.1763 38.1161 46.2544 38.1161 45.1172C38.1161 43.9799 37.1942 43.058 36.0569 43.058ZM44.7054 45.1172C44.7054 43.9799 45.6273 43.058 46.7645 43.058C47.9017 43.058 48.8237 43.9799 48.8237 45.1172C48.8237 46.2544 47.9017 47.1763 46.7645 47.1763C45.6273 47.1763 44.7054 46.2544 44.7054 45.1172ZM57.8839 45.1172C57.8839 43.9799 58.8058 43.058 59.9431 43.058C61.0803 43.058 62.0022 43.9799 62.0022 45.1172C62.0022 46.2544 61.0803 47.1763 59.9431 47.1763C58.8058 47.1763 57.8839 46.2544 57.8839 45.1172Z",fill:"white"})),x=n.a.createElement("defs",null,n.a.createElement("filter",{id:"filter0_f_5_699",x:31.125,y:-56.25,width:148.688,height:148.688,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),n.a.createElement("feGaussianBlur",{stdDeviation:19.125,result:"effect1_foregroundBlur_5_699"})),n.a.createElement("filter",{id:"filter1_f_5_699",x:-50.4375,y:21.5625,width:148.688,height:148.688,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),n.a.createElement("feGaussianBlur",{stdDeviation:19.125,result:"effect1_foregroundBlur_5_699"})),n.a.createElement("linearGradient",{id:"paint0_linear_5_699",x1:-48,y1:48,x2:48,y2:144,gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#70B2FF"}),n.a.createElement("stop",{offset:1,stopColor:"#5C9CE6"})),n.a.createElement("linearGradient",{id:"paint1_linear_5_699",x1:33.2812,y1:18.0938,x2:105.469,y2:90.2812,gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#C48AFF"}),n.a.createElement("stop",{offset:1,stopColor:"#AA65F0"})),n.a.createElement("linearGradient",{id:"paint2_linear_5_699",x1:96.0938,y1:95.9062,x2:23.9062,y2:23.7188,gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#65C2C2"}),n.a.createElement("stop",{offset:1,stopColor:"#86D1D1"})),n.a.createElement("clipPath",{id:"clip0_5_699"},n.a.createElement("rect",{width:96,height:96,rx:39.5145,fill:"white"}))),w=function(e){var t=e.svgRef,r=e.title,a=y(e,["svgRef","title"]);return n.a.createElement("svg",k({width:96,height:96,viewBox:"0 0 96 96",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,E,x)},O=n.a.forwardRef((function(e,t){return n.a.createElement(w,k({svgRef:t},e))}));r.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var I=n.a.createElement("rect",{width:96,height:96,rx:39,fill:"url(#paint0_linear_5_844)"}),F=n.a.createElement("g",{filter:"url(#filter0_f_5_844)"},n.a.createElement("circle",{cx:105.469,cy:18.0938,r:36.0938,fill:"url(#paint1_linear_5_844)"})),U=n.a.createElement("g",{filter:"url(#filter1_f_5_844)"},n.a.createElement("circle",{cx:23.9062,cy:95.9062,r:36.0938,fill:"url(#paint2_linear_5_844)"})),M=n.a.createElement("path",{d:"M54.4494 29.9314C57.6664 29.9654 59.3036 30.312 61.0011 31.2199C62.626 32.0889 63.9111 33.374 64.7801 34.9989C65.688 36.6964 66.0346 38.3336 66.0686 41.5506V54.4494C66.0346 57.6664 65.688 59.3036 64.7801 61.0011C63.9111 62.626 62.626 63.9111 61.0011 64.7801C59.3036 65.688 57.6664 66.0346 54.4494 66.0686H41.5506C38.3336 66.0346 36.6964 65.688 34.9989 64.7801C33.374 63.9111 32.0889 62.626 31.2199 61.0011C30.312 59.3036 29.9653 57.6664 29.9314 54.4494V41.5506C29.9653 38.3336 30.312 36.6964 31.2199 34.9989C32.0889 33.374 33.374 32.0889 34.9989 31.2199C36.6964 30.312 38.3336 29.9654 41.5506 29.9314H54.4494ZM41.186 33.2223C38.7557 33.2684 37.6675 33.5188 36.5484 34.1173C35.4961 34.6801 34.68 35.4961 34.1173 36.5484C33.5188 37.6675 33.2684 38.7557 33.2223 41.186V54.814C33.2684 57.2443 33.5188 58.3325 34.1173 59.4516C34.68 60.5039 35.4961 61.3199 36.5484 61.8827C37.6675 62.4812 38.7557 62.7316 41.186 62.7777H54.814C57.2443 62.7316 58.3324 62.4812 59.4515 61.8827C60.5039 61.3199 61.3199 60.5039 61.8827 59.4516C62.4812 58.3325 62.7316 57.2443 62.7777 54.814V41.186C62.7316 38.7557 62.4812 37.6675 61.8827 36.5484C61.3199 35.4961 60.5039 34.6801 59.4515 34.1173C58.3324 33.5188 57.2443 33.2684 54.814 33.2223H41.186Z",fill:"white"}),B=n.a.createElement("path",{d:"M41.186 33.2223C38.7557 33.2684 37.6675 33.5188 36.5484 34.1173C35.4961 34.6801 34.6801 35.4961 34.1173 36.5484C33.5188 37.6675 33.2684 38.7557 33.2223 41.186V54.814C33.2684 57.2443 33.5188 58.3325 34.1173 59.4516C34.6801 60.5039 35.4961 61.3199 36.5484 61.8827C37.6675 62.4812 38.7557 62.7316 41.186 62.7777H54.814C57.2443 62.7316 58.3324 62.4812 59.4516 61.8827C60.5039 61.3199 61.3199 60.5039 61.8827 59.4516C62.4812 58.3325 62.7316 57.2443 62.7777 54.814V41.186C62.7316 38.7557 62.4812 37.6675 61.8827 36.5484C61.3199 35.4961 60.5039 34.6801 59.4516 34.1173C58.3324 33.5188 57.2443 33.2684 54.814 33.2223H41.186Z",fill:"#3F8AE0"}),A=n.a.createElement("g",{mask:"url(#mask0_5_844)"},n.a.createElement("circle",{cx:48,cy:76.75,r:19.7143,stroke:"white",strokeWidth:3.28571}),n.a.createElement("path",{d:"M48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM48 40.6071C45.5035 40.6071 43.4821 42.6285 43.4821 45.125C43.4821 47.6215 45.5035 49.6429 48 49.6429C50.4965 49.6429 52.5178 47.6215 52.5178 45.125C52.5178 42.6285 50.4965 40.6071 48 40.6071Z",fill:"white"})),P=n.a.createElement("path",{d:"M48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM48 40.6071C45.5035 40.6071 43.4821 42.6285 43.4821 45.125C43.4821 47.6215 45.5035 49.6429 48 49.6429C50.4965 49.6429 52.5178 47.6215 52.5178 45.125C52.5178 42.6285 50.4965 40.6071 48 40.6071Z",fill:"white"}),G=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M61.0011 31.2199C59.3036 30.312 57.6664 29.9654 54.4494 29.9314H41.5506C38.3336 29.9654 36.6964 30.312 34.9989 31.2199C33.374 32.0889 32.0889 33.374 31.2199 34.9989C30.312 36.6964 29.9653 38.3336 29.9314 41.5506V54.4494C29.9653 57.6664 30.312 59.3036 31.2199 61.0011C32.0889 62.626 33.374 63.9111 34.9989 64.7801C36.6964 65.688 38.3336 66.0346 41.5506 66.0686H54.4494C57.6664 66.0346 59.3036 65.688 61.0011 64.7801C62.626 63.9111 63.9111 62.626 64.7801 61.0011C65.688 59.3036 66.0346 57.6664 66.0686 54.4494V41.5506C66.0346 38.3336 65.688 36.6964 64.7801 34.9989C63.9111 33.374 62.626 32.0889 61.0011 31.2199ZM36.5484 34.1173C37.6675 33.5188 38.7557 33.2684 41.186 33.2223H54.814C57.2443 33.2684 58.3324 33.5188 59.4515 34.1173C60.5039 34.6801 61.3199 35.4961 61.8827 36.5484C62.4812 37.6675 62.7316 38.7557 62.7777 41.186V54.814C62.7316 57.2443 62.4812 58.3325 61.8827 59.4516C61.7504 59.699 61.6041 59.9333 61.444 60.1544C57.7731 57.1769 53.0949 55.3929 48 55.3929C42.9051 55.3929 38.2269 57.1769 34.556 60.1544C34.3959 59.9333 34.2496 59.699 34.1173 59.4516C33.5188 58.3325 33.2684 57.2443 33.2223 54.814V41.186C33.2684 38.7557 33.5188 37.6675 34.1173 36.5484C34.68 35.4961 35.4961 34.6801 36.5484 34.1173ZM48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM41.186 62.7777H54.814C56.735 62.7413 57.8174 62.5772 58.7394 62.2144C55.737 59.9925 52.022 58.6786 48 58.6786C43.978 58.6786 40.2629 59.9925 37.2605 62.2144C38.1825 62.5772 39.265 62.7413 41.186 62.7777ZM43.4821 45.125C43.4821 42.6285 45.5035 40.6071 48 40.6071C50.4965 40.6071 52.5178 42.6285 52.5178 45.125C52.5178 47.6215 50.4965 49.6429 48 49.6429C45.5035 49.6429 43.4821 47.6215 43.4821 45.125Z",fill:"white"}),R=n.a.createElement("defs",null,n.a.createElement("filter",{id:"filter0_f_5_844",x:-5.88426,y:-93.2593,width:222.706,height:222.706,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),n.a.createElement("feGaussianBlur",{stdDeviation:37.6296,result:"effect1_foregroundBlur_5_844"})),n.a.createElement("filter",{id:"filter1_f_5_844",x:-68.4838,y:3.5162,width:184.78,height:184.78,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),n.a.createElement("feGaussianBlur",{stdDeviation:28.1481,result:"effect1_foregroundBlur_5_844"})),n.a.createElement("linearGradient",{id:"paint0_linear_5_844",x1:-48,y1:48,x2:48,y2:144,gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#70B2FF"}),n.a.createElement("stop",{offset:1,stopColor:"#5C9CE6"})),n.a.createElement("linearGradient",{id:"paint1_linear_5_844",x1:33.2812,y1:18.0938,x2:105.469,y2:90.2812,gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#FFB73D"}),n.a.createElement("stop",{offset:1,stopColor:"#FFA000"})),n.a.createElement("linearGradient",{id:"paint2_linear_5_844",x1:-48.2812,y1:95.9062,x2:23.9062,y2:168.094,gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:"#928FFF"}),n.a.createElement("stop",{offset:1,stopColor:"#4B47B2"})),n.a.createElement("clipPath",{id:"clip0_5_844"},n.a.createElement("rect",{width:96,height:96,rx:39,fill:"white"}))),V=function(e){var t=e.svgRef,r=e.title,a=j(e,["svgRef","title"]);return n.a.createElement("svg",S({width:96,height:96,viewBox:"0 0 96 96",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,n.a.createElement("g",{clipPath:"url(#clip0_5_844)"},I,F,U,M,n.a.createElement("mask",{id:"mask0_5_844",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:33,y:33,width:30,height:30},B),A,P,G),R)},Z=n.a.forwardRef((function(e,t){return n.a.createElement(V,S({svgRef:t},e))})),T=(r.p,r(286));r(88),r(42),r(32);function W(e){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(t){var r,a,n,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},a=r?"?"+Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent("object"===typeof r[e]?JSON.stringify(r[e]):r[e])})).join("&"):"",n="".concat(t).concat(a),e.next=4,new Promise((function(e,t){fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(t){return e({error:{code:-1,text:t.toString()}})}))}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return Math.floor(Math.random()*(t-e+1))+e}var J=function(e){return new Promise((function(t,r){var a=new Image;a.onload=function(){return t(a)},a.crossOrigin="anonymous",a.onstalled=function(e){console.log("Failed to fetch data, but trying.",e),r(e)},a.onerror=function(e){console.log("Failed to fetch data, error.",e),r(e)},a.src=e}))};function H(e){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(l.a.mark((function e(t){var r,a,n,s,i,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(c.length>1&&void 0!==c[1])||c[1],a=document.createElement("canvas"),n=a.getContext("2d"),s="string"===typeof t?t:window.btoa(t),e.next=5,J("string"===typeof t?s:"data:image/svg+xml;base64,".concat(s));case 5:if(i=e.sent,a.height=i.height,a.width=i.width,null!==n){e.next=10;break}return e.abrupt("return","");case 10:return n.drawImage(i,0,0,i.width,i.height),e.abrupt("return",r?a.toDataURL():a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return window.location.search.length>0&&JSON.parse('{"'+decodeURI(window.location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}function z(e){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(t){var r,a,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]&&n[1],e.prev=1,e.next=4,C.a.send("VKWebAppGetAuthToken",{app_id:parseInt(Y().vk_app_id),scope:t});case 4:if((a=e.sent).scope.split(",").length!==t.split(",").length){e.next=9;break}return e.abrupt("return",a.access_token);case 9:return e.abrupt("return",z(t,r));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C.a.subscribe(function(){var t=Object(u.a)(l.a.mark((function t(r){var a,n,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r.detail,n=a.type,s=a.data,void 0!==n&&console.debug(n,s),"VKWebAppUpdateConfig"===n?((i=document.createAttribute("scheme")).value="bright_light",document.body.attributes.setNamedItem(i),e[n]&&"function"===typeof e[n]&&e[n]()):e[n]&&"function"===typeof e[n]&&e[n]();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}var Q=4,X=2,$=3,ee="https://vds2153919.my-ihor.ru:8081/api/",te=ee+"apps.get",re=["https://murmuring-bastion-20764.herokuapp.com/","https://vds2153919.my-ihor.ru:8088/"][D(0,1)],ae=0;function ne(){return{2:{2:{0:23,1:24},1:{2:23,3:24}},3:{2:{0:23,1:29,2:30},1:{3:23,4:29,5:30}},4:{2:{0:16,1:24,2:29,3:30},1:{4:16,5:24,6:29,7:30}}}[Q]}function se(e,t){var r=ne();if(0===e||0===t)return ae;for(var a=r[e],n=Object.keys(a).map((function(e){return[e,a[e]]})),s=0;s<n.length;s++){var i=n[s];if(s===n.length-1)return parseInt(i[0]);if(parseInt(t)<=parseInt(i[1]))return parseInt(i[0])}return ae}function ie(){return ce.apply(this,arguments)}function ce(){return(ce=Object(u.a)(l.a.mark((function e(){var t,r,a,n,s,i,c,o,u,p,f,h,d,m,g,_,v,b,k,y,E,x,w;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=parseInt(Y().vk_app_id||0),e.next=3,W(te,{app_id:t});case 3:for((r=e.sent.response)||(r={app_id:t,group_id_join:new Array(Q*$*2).fill(1),group_id_message:new Array(Q*X*2).fill(1),save_photo_album:!1,need_panel_upload_photo:!1,tg_urls:[],is_show_tg:!1,categories_for_tg:[],category_group_default:0,album_name:"",album_caption:"",need_upload_default_album_photo:!1,album_default_photo_url:""}),a=[],n=[],i=(s=r).category_group_default,c=s.is_show_tg,o=s.categories_for_tg,u=s.need_panel_upload_photo,p=s.group_id_join,f=s.group_id_message,h=s.save_photo_album,d=s.tg_urls,ae=i,m=0;m<p.length;m+=$)a.push(p.slice(m,m+$));for(g=0;g<f.length;g+=X)n.push(f.slice(g,g+X));return e.next=11,C.a.send("VKWebAppGetUserInfo");case 11:return _=e.sent,v=_.sex,b=_.bdate,k=b&&3===b.split(".").length?(new Date).getFullYear()-parseInt(_.bdate.split(".")[2]):0,y=se(v,k),E=a[y],x=n[y],w={groupsJoinCategory:a,groupsJoinUser:E,groupsMessageCategory:n,groupsMessageUser:x,vk_user:_,app:r,showGroupsCategory:y,savePhotoAlbum:h,is_show_tg:c,categories_for_tg:o,need_panel_upload_photo:u,need_panel_sex_years:v||0===k,tg_urls:d,sex:v,years:k},console.debug(w),e.abrupt("return",w);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.e,{onChange:function(t){return e.setState({selectedSex:t.target.value})},defaultValue:0===this.state.sex||1===this.state.sex?"1":"2",options:Object.keys(ne()).map((function(e){return{value:"".concat(e),label:1==e?"\u0436\u0435\u043d\u0441\u043a\u0438\u0439":"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"}}))}),n.a.createElement(c.e,{onChange:function(t){return e.setState({selectedYears:t.target.value})},defaultValue:"".concat(ne()[2][0]),options:Object.keys(ne()[this.state.selectedSex||1]).map((function(t,r,a){var n=ne()[e.state.selectedSex||1][t],s=0===r?"\u043e\u0442 ".concat(n):a[r+1]?"\u043e\u0442 ".concat(ne()[e.state.selectedSex||1][a[r-1]]+1," \u0434\u043e ").concat(n):"\u043e\u0442 ".concat(n);return{value:"".concat(n),label:s}}))}))}function le(e){"object"===typeof e&&e.currentTarget&&(e=e.currentTarget.dataset.to);var t=this.state,r=t.selectedSex,a=t.selectedYears;r||(r=0===this.state.sex||1===this.state.sex?"1":"2"),a||(a="".concat(ne()[2][0]));try{var n=this.state,s=n.groupsJoinCategory,i=n.groupsMessageCategory,c=se(r,a),o=s[c],l=i[c];this.setState({sex:r,years:a,groupsJoinUser:o,groupsMessageUser:l,showGroupsCategory:c,history:[e],activePanel:e}),console.debug({selectedSex:r,selectedYears:a,showGroupsCategory:c,groupsJoinUser:o,groupsMessageUser:l})}catch(u){console.error("ERR",u),console.debug({selectedSex:r,selectedYears:a})}}var ue={subscribe:0,messages:0};function pe(){return fe.apply(this,arguments)}function fe(){return(fe=Object(u.a)(l.a.mark((function e(){var t,r,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.groupsJoinUser,a=ue[r="subscribe"],!(n=t[a])){e.next=10;break}return e.prev=2,e.next=5,C.a.send("VKWebAppJoinGroup",{group_id:n});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:ue[r]++;case 10:case"end":return e.stop()}}),e,this,[[2,7]])})))).apply(this,arguments)}function he(){return de.apply(this,arguments)}function de(){return(de=Object(u.a)(l.a.mark((function e(){var t,r,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.groupsMessageUser,a=ue[r="messages"],!(n=t[a])){e.next=10;break}return e.prev=2,e.next=5,C.a.send("VKWebAppAllowMessagesFromGroup",{group_id:n});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:ue[r]++;case 10:case"end":return e.stop()}}),e,this,[[2,7]])})))).apply(this,arguments)}var me=r(89),ge=r.n(me),_e=0,Ce=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={sticker_info:{}},v.bind(Object(m.a)(r))(),r.skipMain=r.skipMain.bind(Object(m.a)(r)),r.uploadAlbum=r.uploadAlbum.bind(Object(m.a)(r)),r.goWithClick=r.goWithClick.bind(Object(m.a)(r)),r}return Object(g.a)(t,e),Object(f.a)(t,[{key:"goWithClick",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==++_e){e.next=8;break}return e.next=4,pe.bind(this)();case 4:return e.next=6,he.bind(this)();case 6:e.next=11;break;case 8:if(2!==_e){e.next=11;break}return e.next=11,pe.bind(this)();case 11:return e.abrupt("return",this.go(t));case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.t0=this,e.next=4,ie();case 4:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1),C.a.send("VKWebAppInit");case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"uploadAlbum",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,s,i,c,o,p,f,h,d,m,g,_,v,b,k;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.savePhotoAlbum,n=t.need_upload_default_album_photo,s=t.album_default_photo_url,!a){e.next=30;break}return e.next=4,z("photos");case 4:if(!(i=e.sent)||!n){e.next=30;break}return e.next=8,H(s);case 8:return c=e.sent,(o=new Image).src=c,e.next=13,new Promise((function(e){return o.onload=function(){return e(!0)}}));case 13:return p=r(32),f=p.createCanvas,h=f(o.width,o.height),h.getContext("2d").drawImage(o,0,0),e.next=17,new Promise((function(e){return h.toBlob((function(t){return e(t)}))}));case 17:return d=e.sent,m=this.state.app,g=m.album_name,_=m.album_caption,e.next=23,C.a.send("VKWebAppCallAPIMethod",{method:"photos.createAlbum",params:{title:g,v:"5.126",access_token:i}});case 23:return v=e.sent.response.id,e.next=26,C.a.send("VKWebAppCallAPIMethod",{method:"photos.getUploadServer",params:{album_id:v,v:"5.126",access_token:i}});case 26:b=e.sent.response.upload_url,(k=new FormData).append("photo",d,"image.png");try{ge()(re+b,{method:"POST",body:k}).then((function(e){return e.json()})).then(function(){var e=Object(u.a)(l.a.mark((function e(t){var r,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.server,a=t.photos_list,n=t.hash,console.debug("Photo saved: ",t),e.next=4,C.a.send("VKWebAppCallAPIMethod",{method:"photos.save",params:{album_id:v,server:r,photos_list:a,hash:n,caption:_,v:"5.126",access_token:i}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(y){console.error(y)}case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"skipMain",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.state.need_panel_sex_years,e.next=3,pe.bind(this)();case 3:return e.next=5,he.bind(this)();case 5:r?this.go("years"):this.go(t.currentTarget.dataset.to),this.uploadAlbum();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.sticker_info;return n.a.createElement(c.n,b.bind(this)(),n.a.createElement(c.h,{id:"main"},n.a.createElement(c.k,{icon:n.a.createElement(O,null),header:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c",action:n.a.createElement(c.c,{size:"m",onClick:this.skipMain,"data-to":"stickers"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),stretched:!0},"\u0417\u0434\u0435\u0441\u044c \u0441\u043e\u0431\u0440\u0430\u043d\u044b \u0432\u0441\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u0434\u043b\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432")),n.a.createElement(c.h,{id:"years"},n.a.createElement(c.k,{icon:n.a.createElement(Z,null),header:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u043b \u0438 \u0432\u043e\u0437\u0440\u0430\u0441\u0442",action:n.a.createElement(c.c,{size:"m",onClick:le.bind(this),"data-to":"stickers"},"\u0414\u0430\u043b\u044c\u0448\u0435"),stretched:!0},n.a.createElement("div",{className:"Years_Inputs"},oe.bind(this)()))),n.a.createElement(c.h,{id:"stickers"},n.a.createElement(c.i,{separator:!1},"\u0421\u0442\u0438\u043a\u0435\u0440\u044b"),n.a.createElement("div",{className:"StickersBanners"},this.stickers.map((function(t,r){return n.a.createElement(c.m,{key:"sticker_banner_".concat(r),onClick:function(){e.setState({sticker_info:t}),e.goWithClick("sticker")}},n.a.createElement("div",{className:"Sticker_Info"},n.a.createElement("img",{alt:"sticker",src:"https://vk.com/sticker/1-".concat(t.first_sticker,"-256")}),n.a.createElement("div",{className:"Sticker_Titles"},n.a.createElement(c.f,{weight:2,level:1},t.title),n.a.createElement(c.l,null,t.author))),n.a.createElement(T.a,null))})))),n.a.createElement(c.h,{id:"sticker"},n.a.createElement(c.i,{separator:!1,left:n.a.createElement(c.j,{onClick:this.back})},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"),n.a.createElement("div",{className:"Sticker_Info"},n.a.createElement("div",{className:"Sticker_Avatar"},n.a.createElement("img",{alt:"sticker",src:"https://vk.com/sticker/1-".concat(t.first_sticker,"-256")})),n.a.createElement("div",{className:"Sticker_Titles"},n.a.createElement(c.f,{weight:2,level:1},t.title),n.a.createElement(c.l,null,t.author))),n.a.createElement(c.l,{style:{margin:"18px 21px 0 21px"}},"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 ",n.a.createElement(c.g,{target:"_blank",href:t.url},t.url&&t.url.replace("https://",""))," \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\xbb"),n.a.createElement("div",{className:"Stickers"},new Array(t.stickers).fill(0).map((function(e,r){return n.a.createElement("img",{key:"sticker_".concat(r),alt:"sticker",src:"https://vk.com/sticker/1-".concat(t.first_sticker+r,"-128")})})))))}},{key:"stickers",get:function(){return[{title:"\u041c\u0430\u0440\u043a",author:"\u042e\u043b\u0438\u044f \u041a\u0430\u043c\u0435\u043d\u0441\u043a\u0430\u044f",first_sticker:77699,url:"https://vk.com/stickers/catmark",stickers:20},{title:"\u041c\u0430\u0444\u0444\u0438\u043d",author:"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u041f\u044f\u0442\u0435\u0440\u043d\u0438\u043a\u043e\u0432\u0430",first_sticker:71941,url:"https://vk.com/stickers/muffin",stickers:48},{title:"\u042d\u043c\u0438\u043b\u0438",author:"\u041a\u0438\u0440\u0430 \u0411\u0430\u0443\u044d\u0440",first_sticker:72135,url:"https://vk.com/stickers/emily",stickers:48},{title:"\u041c\u0438\u043d\u0442\u043e",author:"\u041b\u0430\u043d\u0430 \u041c\u043e\u0440\u0433\u0430\u043d\u0430",first_sticker:72789,url:"https://vk.com/stickers/minty",stickers:48}]}}]),t}(n.a.Component);i.a.render(n.a.createElement(c.d,{webviewType:c.o.INTERNAL},n.a.createElement(c.a,null,n.a.createElement(c.b,null,n.a.createElement(Ce,null)))),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.083857a3.chunk.js.map