(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{5955:function(e,r,t){Promise.resolve().then(t.bind(t,4327)),Promise.resolve().then(t.bind(t,11)),Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,377)),Promise.resolve().then(t.bind(t,23))},3480:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(e,r)=>{let t=(0,n.forwardRef)((t,l)=>{let{color:a="currentColor",size:s=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:d="",children:f,...b}=t;return(0,n.createElement)("svg",{ref:l,...o,width:s,height:s,stroke:a,strokeWidth:c?24*Number(u)/Number(s):u,className:["lucide","lucide-".concat(i(e)),d].join(" "),...b},[...r.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(f)?f:[f]])});return t.displayName="".concat(e),t}},377:function(e,r,t){"use strict";t.d(r,{default:function(){return f}});var n=t(7437);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,t(3480).Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);var i=t(2265),l=t(1538),a=t(2218),s=t(9354);let u=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,r)=>{let{className:t,variant:o,size:i,asChild:a=!1,...c}=e,d=a?l.g7:"button";return(0,n.jsx)(d,{className:(0,s.cn)(u({variant:o,size:i,className:t})),ref:r,...c})});function d(e){let{children:r,className:t="",...o}=e;return(0,n.jsx)("div",{...o,className:t,children:r})}function f(e){let{children:r,scrollToId:t,delay:l}=e,a=function(e){let r=document.getElementById(e);null==r||r.scrollIntoView({behavior:"smooth"})},[s,u]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{u(!0)},l);return()=>clearTimeout(e)}),(0,n.jsx)(d,{className:"\n        h-full w-auto flex justify-center items-center z-20 filter-none\n\n        before:absolute before:-z-10 before:h-[10rem] before:w-[15rem] before:xl:h-[15rem] before:xl:w-[30rem] before:translate-y-[20%] before:rounded-full before:bg-gradient-radial before:from-slate-300 before:blur-2xl\n        before:dark:from-blue-950\n        \n        transition before:transition duration-300 before:duration-300 ".concat(s?"opacity-100 before:opacity-25":"opacity-0 before:opacity-0"),children:(0,n.jsxs)(c,{variant:"secondary",className:"h-auto flex flex-col justify-center items-center gap-1 hover:bg-card hover:text-bg-card-foreground active:bg-primary active:text-secondary\n        transition duration-300 ".concat(s?"opacity-100":"opacity-0 pointer-events-none"),onClick:()=>a(t),children:[(0,n.jsx)("span",{children:r}),(0,n.jsx)(o,{className:"w-5 h-5"})]})})}c.displayName="Button"},23:function(e,r,t){"use strict";t.d(r,{ScrollArea:function(){return a},ScrollBar:function(){return s}});var n=t(7437),o=t(2265),i=t(2286),l=t(9354);let a=o.forwardRef((e,r)=>{let{className:t,children:o,...a}=e;return(0,n.jsxs)(i.fC,{ref:r,className:(0,l.cn)("relative overflow-hidden",t),...a,children:[(0,n.jsx)(i.l_,{className:"h-full w-full rounded-[inherit]",children:o}),(0,n.jsx)(s,{}),(0,n.jsx)(i.Ns,{})]})});a.displayName=i.fC.displayName;let s=o.forwardRef((e,r)=>{let{className:t,orientation:o="vertical",...a}=e;return(0,n.jsx)(i.gb,{ref:r,orientation:o,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===o&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===o&&"h-2.5 w-[95%] mx-auto flex-col border-t border-t-transparent p-[1px]",t),...a,children:(0,n.jsx)(i.q4,{className:"relative flex-1 rounded-full bg-border"})})});s.displayName=i.gb.displayName},9354:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(4839),o=t(6164);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,o.m6)((0,n.W)(r))}},2218:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n);else for(t in r)r[t]&&(o&&(o+=" "),o+=t)}return o}(e))&&(n&&(n+=" "),n+=r);return n},i=(e,r)=>t=>{var i;if((null==r?void 0:r.variants)==null)return o(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:a}=r,s=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],o=null==a?void 0:a[e];if(null===r)return null;let i=n(r)||n(o);return l[e][i]}),u=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return o(e,s,null==r?void 0:null===(i=r.compoundVariants)||void 0===i?void 0:i.reduce((e,r)=>{let{class:t,className:n,...o}=r;return Object.entries(o).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...u}[r]):({...a,...u})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[327,850,158,971,23,744],function(){return e(e.s=5955)}),_N_E=e.O()}]);