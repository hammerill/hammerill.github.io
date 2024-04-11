"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{843:function(e,t,r){r.d(t,{Z:function(){return i}});var o=r(2265),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(e,t)=>{let r=(0,o.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:d="",children:c,...u},f)=>(0,o.createElement)("svg",{ref:f,...n,width:i,height:i,stroke:r,strokeWidth:s?24*Number(a)/Number(i):a,className:["lucide",`lucide-${l(e)}`,d].join(" "),...u},[...t.map(([e,t])=>(0,o.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},9971:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var o=r(2286),n=r(2265),l=r(9172);function i(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return n.createElement(l.P,(0,o.g)({locale:t},r))}},1749:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let o=r(6921),n=r(1884),l=r(7437),i=n._(r(2265)),a=o._(r(4887)),s=o._(r(2251)),d=r(8630),c=r(6906),u=r(337);r(6184);let f=r(6993),p=o._(r(536)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,o,n,l){let i=null==e?void 0:e.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}}))}function b(e){let[t,r]=i.version.split(".",2),o=parseInt(t,10),n=parseInt(r,10);return o>18||18===o&&n>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:o,sizes:n,height:a,width:s,decoding:d,className:c,style:u,fetchPriority:f,placeholder:p,loading:m,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:k,onLoad:j,onError:C,...z}=e;return(0,l.jsx)("img",{...z,...b(f),loading:m,width:s,height:a,decoding:d,"data-nimg":y?"fill":"1",className:c,style:u,sizes:n,srcSet:o,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,p,v,w,x,h))},[r,p,v,w,x,C,h,t]),onLoad:e=>{g(e.currentTarget,p,v,w,x,h)},onError:e=>{k(!0),"empty"!==p&&x(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,o={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,o),null):(0,l.jsx)(s.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...o},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),o=(0,i.useContext)(u.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=m||o||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[o]),{onLoad:a,onLoadingComplete:s}=e,g=(0,i.useRef)(a);(0,i.useEffect)(()=>{g.current=a},[a]);let b=(0,i.useRef)(s);(0,i.useEffect)(()=>{b.current=s},[s]);let[v,w]=(0,i.useState)(!1),[x,k]=(0,i.useState)(!1),{props:j,meta:C}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:v,showAltText:x});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{...j,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:k,ref:t}),C.priority?(0,l.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5827:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let o=r(6921)._(r(2265)).default.createContext({})},3044:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:o=!1}=void 0===e?{}:e;return t||r&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8630:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(6184);let o=r(7160),n=r(6906);function l(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,d,{src:c,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:b,width:h,height:y,fill:v=!1,style:w,onLoad:x,onLoadingComplete:k,placeholder:j="empty",blurDataURL:C,fetchPriority:z,layout:_,objectFit:S,objectPosition:E,lazyBoundary:P,lazyRoot:O,...M}=e,{imgConf:I,showAltText:A,blurComplete:N,defaultLoader:R}=t,G=I||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let F=M.loader||R;delete M.loader,delete M.srcSet;let T="__next_img_default"in F;if(T){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...o}=t;return e(o)}}if(_){"fill"===_&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!u&&(u=t)}let D="",$=i(h),L=i(y);if("object"==typeof(r=c)&&(l(r)||void 0!==r.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,D=e.src,!v){if($||L){if($&&!L){let t=$/e.width;L=Math.round(e.height*t)}else if(!$&&L){let t=L/e.height;$=Math.round(e.width*t)}}else $=e.width,L=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:D)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,W=!1),a.unoptimized&&(f=!0),T&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(z="high");let B=i(b),U=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:E}:{},A?{}:{color:"transparent"},w),V=N||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:$,heightInt:L,blurWidth:s,blurHeight:d,blurDataURL:C||"",objectFit:U.objectFit})+'")':'url("'+j+'")',Z=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:i,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,i),c=s.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:s.map((e,o)=>a({config:t,src:r,quality:l,width:e})+" "+("w"===d?e:o+1)+d).join(", "),src:a({config:t,src:r,quality:l,width:s[c]})}}({config:a,src:c,unoptimized:f,width:$,quality:B,sizes:u,loader:F});return{props:{...M,loading:W?"lazy":m,fetchPriority:z,width:$,height:L,decoding:"async",className:g,style:{...U,...Z},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:v}}}},2251:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return g}});let o=r(6921),n=r(1884),l=r(7437),i=n._(r(2265)),a=o._(r(7392)),s=r(5827),d=r(7484),c=r(3044);function u(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(6184);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,o={};return n=>{let l=!0,i=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){i=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?l=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=n.props[t],r=o[t]||new Set;("name"!==t||!i)&&r.has(e)?l=!1:(r.add(e),o[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let o=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:o})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(s.AmpStateContext),o=(0,i.useContext)(d.HeadManagerContext);return(0,l.jsx)(a.default,{reduceComponentsToState:m,headManager:o,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l,objectFit:i}=e,a=o?40*o:t,s=n?40*n:r,d=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},337:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let o=r(6921)._(r(2265)),n=r(6906),l=o.default.createContext(n.imageConfigDefault)},6906:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return o}});let r=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},536:function(e,t){function r(e){let{config:t,src:r,width:o,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},7392:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let o=r(2265),n="undefined"==typeof window,l=n?()=>{}:o.useLayoutEffect,i=n?()=>{}:o.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}if(n){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return l(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},9172:function(e,t,r){var o=r(2265),n=r(9116),l=r(3457),i=o&&o.__esModule?o:{default:o};t.P=function(e){let{children:t,defaultTranslationValues:r,formats:a,getMessageFallback:s,locale:d,messages:c,now:u,onError:f,timeZone:p}=e,[m]=o.useState(()=>new Map),g=o.useMemo(()=>({...n.initializeConfig({locale:d,defaultTranslationValues:r,formats:a,getMessageFallback:s,messages:c,now:u,onError:f,timeZone:p}),messageFormatCache:m}),[r,a,s,d,m,c,u,f,p]);return i.default.createElement(l.IntlContext.Provider,{value:g},t)}},9116:function(e,t){function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(".")}function o(e){return r(e.namespace,e.key)}function n(e){console.error(e)}t.defaultGetMessageFallback=o,t.defaultOnError=n,t.initializeConfig=function(e){let{getMessageFallback:t,messages:r,onError:l,...i}=e;return{...i,messages:r,onError:l||n,getMessageFallback:t||o}},t.joinPath=r},2110:function(e,t,r){r.d(t,{Z:function(){return o}});function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}},1266:function(e,t,r){r.d(t,{F:function(){return n},e:function(){return l}});var o=r(2265);function n(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,o.useCallback)(n(...e),e)}},9143:function(e,t,r){r.d(t,{g7:function(){return i}});var o=r(2110),n=r(2265),l=r(1266);let i=(0,n.forwardRef)((e,t)=>{let{children:r,...l}=e,i=n.Children.toArray(r),s=i.find(d);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(a,(0,o.Z)({},l,{ref:t}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,r):null)}return(0,n.createElement)(a,(0,o.Z)({},l,{ref:t}),r)});i.displayName="Slot";let a=(0,n.forwardRef)((e,t)=>{let{children:r,...o}=e;return(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{...function(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o];/^on[A-Z]/.test(o)?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}(o,r.props),ref:t?(0,l.F)(t,r.ref):r.ref}):n.Children.count(r)>1?n.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function d(e){return(0,n.isValidElement)(e)&&e.type===s}},7742:function(e,t,r){r.d(t,{j:function(){return l}});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(o&&(o+=" "),o+=t);return o},l=(e,t)=>r=>{var l;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==a?void 0:a[e];if(null===t)return null;let l=o(t)||o(n);return i[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return n(e,s,null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...d}[t]):({...a,...d})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},3167:function(e,t,r){r.d(t,{W:function(){return o}});function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},1367:function(e,t,r){r.d(t,{m6:function(){return G}});let o=/^\[(.+)\]$/;function n(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let l=/\s+/;function i(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let o="";for(let n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);return o}(e))&&(o&&(o+=" "),o+=t);return o}function a(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let s=/^\[(?:([a-z-]+):)?(.+)\]$/i,d=/^\d+\/\d+$/,c=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,m=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,g=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function b(e){return y(e)||c.has(e)||d.test(e)}function h(e){return M(e,"length",I)}function y(e){return!!e&&!Number.isNaN(Number(e))}function v(e){return M(e,"number",y)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&y(e.slice(0,-1))}function k(e){return s.test(e)}function j(e){return u.test(e)}let C=new Set(["length","size","percentage"]);function z(e){return M(e,C,A)}function _(e){return M(e,"position",A)}let S=new Set(["image","url"]);function E(e){return M(e,S,R)}function P(e){return M(e,"",N)}function O(){return!0}function M(e,t,r){let o=s.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))}function I(e){return f.test(e)&&!p.test(e)}function A(){return!1}function N(e){return m.test(e)}function R(e){return g.test(e)}let G=function(e){let t,r,a;let s=function(l){var i;return r=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map;function n(n,l){r.set(n,l),++t>e&&(t=0,o=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}((i=[].reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,o=t[0],n=t.length;return function(e){let l;let i=[],a=0,s=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===o&&(r||e.slice(d,d+n)===t)){i.push(e.slice(s,d)),s=d+n;continue}if("/"===c){l=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===i.length?e:e.substring(s),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:i,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:l&&l>s?l-s:void 0}}}(i),...function(e){let t=function(e){var t;let{theme:r,prefix:o}=e,l={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),o?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[o+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,o,l){t.forEach(t=>{if("string"==typeof t){(""===t?r:n(r,t)).classGroupId=o;return}if("function"==typeof t){if(t.isThemeGetter){e(t(l),r,o,l);return}r.validators.push({validator:t,classGroupId:o});return}Object.entries(t).forEach(([t,i])=>{e(i,n(r,t),o,l)})})})(t,l,e,r)}),l}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let o=t[0],n=r.nextPart.get(o),l=n?e(t.slice(1),n):void 0;if(l)return l;if(0===r.validators.length)return;let i=t.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId}(r,t)||function(e){if(o.test(e)){let t=o.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let o=r[e]||[];return t&&l[e]?[...o,...l[e]]:o}}}(i)}).cache.get,a=t.cache.set,s=d,d(l)};function d(e){let o=r(e);if(o)return o;let n=function(e,t){let{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:t,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:i}=r(e),a=o(i?l.substring(0,i):l),s=!!i;if(!a){if(!i||!(a=o(l)))return{isTailwindClass:!1,originalClassName:e};s=!1}let d=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:n?d+"!":d,classGroupId:a,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:o}=e,l=t+r;return!i.has(l)&&(i.add(l),n(r,o).forEach(e=>i.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return a(e,n),n}return function(){return s(i.apply(null,arguments))}}(function(){let e=a("colors"),t=a("spacing"),r=a("blur"),o=a("brightness"),n=a("borderColor"),l=a("borderRadius"),i=a("borderSpacing"),s=a("borderWidth"),d=a("contrast"),c=a("grayscale"),u=a("hueRotate"),f=a("invert"),p=a("gap"),m=a("gradientColorStops"),g=a("gradientColorStopPositions"),C=a("inset"),S=a("margin"),M=a("opacity"),I=a("padding"),A=a("saturate"),N=a("scale"),R=a("sepia"),G=a("skew"),F=a("space"),T=a("translate"),D=()=>["auto","contain","none"],$=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",k,t],W=()=>[k,t],B=()=>["",b,h],U=()=>["auto",y,k],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],H=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",k],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[y,v],K=()=>[y,k];return{cacheSize:500,separator:":",theme:{colors:[O],spacing:[b,h],blur:["none","",j,k],brightness:X(),borderColor:[e],borderRadius:["none","","full",j,k],borderSpacing:W(),borderWidth:B(),contrast:X(),grayscale:J(),hueRotate:K(),invert:J(),gap:W(),gradientColorStops:[e],gradientColorStopPositions:[x,h],inset:L(),margin:L(),opacity:X(),padding:W(),saturate:X(),scale:X(),sepia:J(),skew:K(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),k]}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,k]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",w,k]}],"grid-cols":[{"grid-cols":[O]}],"col-start-end":[{col:["auto",{span:["full",w,k]},k]}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":[O]}],"row-start-end":[{row:["auto",{span:[w,k]},k]}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[F]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[F]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,t]}],"min-w":[{"min-w":[k,t,"min","max","fit"]}],"max-w":[{"max-w":[k,t,"none","full","min","max","fit","prose",{screen:[j]},j]}],h:[{h:[k,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,t,"auto","min","max","fit"]}],"font-size":[{text:["base",j,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",v]}],"font-family":[{font:[O]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",y,v]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",b,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",b,h]}],"underline-offset":[{"underline-offset":["auto",b,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",z]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},E]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:Z()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[b,k]}],"outline-w":[{outline:[b,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[b,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",j,P]}],"shadow-color":[{shadow:[O]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":q()}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",j,k]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[A]}],sepia:[{sepia:[R]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[G]}],"skew-y":[{"skew-y":[G]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[b,h,v]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);