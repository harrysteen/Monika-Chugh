(()=>{var e={};e.id=889,e.ids=[889],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1285:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>f,tree:()=>c}),n(1194),n(6e3),n(5866);var i=n(3191),r=n(8716),o=n(7922),a=n.n(o),s=n(5231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);n.d(t,l);let c=["",{children:["canxiol",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1194)),"C:\\vip codes\\Monika Chugh\\src\\app\\canxiol\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,6e3)),"C:\\vip codes\\Monika Chugh\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\vip codes\\Monika Chugh\\src\\app\\canxiol\\page.js"],p="/canxiol/page",u={require:n,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/canxiol/page",pathname:"/canxiol",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8615:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},314:(e,t,n)=>{Promise.resolve().then(n.bind(n,6935))},5604:(e,t,n)=>{Promise.resolve().then(n.bind(n,5930)),Promise.resolve().then(n.bind(n,7930))},2481:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=n(1174),r=n(8374),o=n(326),a=r._(n(7577)),s=i._(n(962)),l=i._(n(815)),c=n(3078),d=n(5248),p=n(1206);n(576);let u=n(131),f=i._(n(6820)),x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,n,i,r,o,a){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let m=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:i,sizes:r,height:s,width:l,decoding:c,className:d,style:p,fetchPriority:u,placeholder:f,loading:x,unoptimized:m,fill:b,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:j,sizesInput:C,onLoad:k,onError:P,..._}=e;return(0,o.jsx)("img",{..._,...g(u),loading:x,width:l,height:s,decoding:c,"data-nimg":b?"fill":"1",className:d,style:p,sizes:r,srcSet:i,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&h(e,f,v,y,w,m,C))},[n,f,v,y,w,P,m,C,t]),onLoad:e=>{h(e.currentTarget,f,v,y,w,m,C)},onError:e=>{j(!0),"empty"!==f&&w(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,i={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&s.default.preload?(s.default.preload(n.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...i},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(u.RouterContext),i=(0,a.useContext)(p.ImageConfigContext),r=(0,a.useMemo)(()=>{var e;let t=x||i||d.imageConfigDefault,n=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),r=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:n,deviceSizes:r,qualities:o}},[i]),{onLoad:s,onLoadingComplete:l}=e,h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[v,y]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:C,meta:k}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:r,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{...C,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),k.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,n)=>{"use strict";e.exports=n(1616).vendored.contexts.AmpContext},1157:(e,t,n)=>{"use strict";e.exports=n(1616).vendored.contexts.HeadManagerContext},1206:(e,t,n)=>{"use strict";e.exports=n(1616).vendored.contexts.ImageConfigContext},131:(e,t,n)=>{"use strict";e.exports=n(1616).vendored.contexts.RouterContext},8710:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||n&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},3078:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(576);let i=n(380),r=n(5248);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n,s;let l,c,d,{src:p,sizes:u,unoptimized:f=!1,priority:x=!1,loading:h,className:g,quality:m,width:b,height:v,fill:y=!1,style:w,overrideSrc:j,onLoad:C,onLoadingComplete:k,placeholder:P="empty",blurDataURL:_,fetchPriority:S,decoding:z="async",layout:M,objectFit:I,objectPosition:O,lazyBoundary:N,lazyRoot:E,...A}=e,{imgConf:R,showAltText:D,blurComplete:F,defaultLoader:L}=t,q=R||r.imageConfigDefault;if("allSizes"in q)l=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t),i=null==(n=q.qualities)?void 0:n.sort((e,t)=>e-t);l={...q,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=A.loader||L;delete A.loader,delete A.srcSet;let T="__next_img_default"in G;if(T){if("custom"===l.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:n,...i}=t;return e(i)}}if(M){"fill"===M&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!u&&(u=t)}let U="",B=a(b),H=a(v);if("object"==typeof(s=p)&&(o(s)||void 0!==s.src)){let e=o(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,_=_||e.blurDataURL,U=e.src,!y){if(B||H){if(B&&!H){let t=B/e.width;H=Math.round(e.height*t)}else if(!B&&H){let t=H/e.height;B=Math.round(e.width*t)}}else B=e.width,H=e.height}}let Y=!x&&("lazy"===h||void 0===h);(!(p="string"==typeof p?p:U)||p.startsWith("data:")||p.startsWith("blob:"))&&(f=!0,Y=!1),l.unoptimized&&(f=!0),T&&p.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),x&&(S="high");let W=a(m),X=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:O}:{},D?{}:{color:"transparent"},w),V=F||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:H,blurWidth:c,blurHeight:d,blurDataURL:_||"",objectFit:X.objectFit})+'")':'url("'+P+'")',$=V?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:o,sizes:a,loader:s}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))],kind:"x"}}(t,r,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>s({config:t,src:n,quality:o,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:s({config:t,src:n,quality:o,width:l[d]})}}({config:l,src:p,unoptimized:f,width:B,quality:W,sizes:u,loader:G});return{props:{...A,loading:Y?"lazy":h,fetchPriority:S,width:B,height:H,decoding:z,className:g,style:{...X,...$},sizes:J.sizes,srcSet:J.srcSet,src:j||J.src},meta:{unoptimized:f,priority:x,placeholder:P,fill:y}}}},815:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return p}});let i=n(1174),r=n(8374),o=n(326),a=r._(n(7577)),s=i._(n(8003)),l=n(3484),c=n(1157),d=n(8710);function p(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(576);let f=["name","httpEquiv","charSet","itemProp"];function x(e,t){let{inAmpMode:n}=t;return e.reduce(u,[]).reverse().concat(p(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return r=>{let o=!0,a=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){a=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=r.props[t],n=i[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),i[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),i=(0,a.useContext)(c.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:x,headManager:i,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:o,objectFit:a}=e,s=i?40*i:t,l=r?40*r:n,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},9029:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return s}});let i=n(1174),r=n(3078),o=n(2481),a=i._(n(6820));function s(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},6820:(e,t)=>{"use strict";function n(e){var t;let{config:n,src:i,width:r,quality:o}=e,a=o||(null==(t=n.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return n.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),n.__next_img_default=!0;let i=n},8003:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let i=n(7577),r=()=>{},o=()=>{};function a(e){var t;let{headManager:n,reduceComponentsToState:a}=e;function s(){if(n&&n.mountedInstances){let t=i.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(a(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),s(),r(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),r(()=>(n&&(n._pendingUpdate=s),()=>{n&&(n._pendingUpdate=s)})),o(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},5930:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var i=n(326),r=n(9029),o=n.n(r);function a(){return(0,i.jsxs)(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .cx-hero {
          background: #f5eef8;
          position: relative;
          overflow: hidden;
          min-height: 520px;
          display: flex;
          align-items: center;
        }

        /* decorative blob */
        .cx-hero::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -60px;
          width: 520px;
          height: 520px;
          background: radial-gradient(ellipse at 40% 40%, #e8d5f5 0%, #f0e4fa 45%, transparent 75%);
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          z-index: 0;
          opacity: 0.85;
        }
        .cx-hero::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: 120px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #e8d5f5 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          opacity: 0.5;
        }

        .cx-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 40px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* Left content */
        .cx-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .cx-hero-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(40px, 5vw, 62px);
          font-weight: 800;
          color: #3b1a4a;
          line-height: 1.08;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .cx-hero-heading .highlight {
          color: #6b21a8;
        }

        .cx-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          color: #5a4a6a;
          line-height: 1.7;
          max-width: 440px;
          margin: 0 0 32px;
        }

        .cx-hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .cx-hero-btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          background: #3b1a4a;
          border: 2px solid #3b1a4a;
          border-radius: 4px;
          padding: 13px 22px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.22s;
          white-space: nowrap;
        }
        .cx-hero-btn-primary:hover {
          background: #5c2d8a;
          border-color: #5c2d8a;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59,26,74,0.22);
        }
        .cx-hero-btn-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #3b1a4a;
          background: transparent;
          border: 2px solid #3b1a4a;
          border-radius: 4px;
          padding: 13px 22px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.22s;
          white-space: nowrap;
        }
        .cx-hero-btn-secondary:hover {
          background: #3b1a4a;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59,26,74,0.15);
        }

        .cx-hero-disclaimer {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #9a85aa;
          line-height: 1.5;
          font-style: italic;
        }

        /* Right image column */
        .cx-hero-image-col {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          position: relative;
          min-height: 420px;
        }
        .cx-hero-image-wrap {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 480px;
        }
        .cx-hero-image-wrap img {
          object-fit: contain;
          object-position: bottom right;
          filter: drop-shadow(0 16px 48px rgba(59,26,74,0.18));
          transition: transform 0.4s ease;
        }
        .cx-hero-image-wrap:hover img {
          transform: translateY(-6px) scale(1.015);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .cx-hero-inner {
            grid-template-columns: 1fr;
            padding: 40px 24px 0;
            gap: 24px;
          }
          .cx-hero-image-col {
            justify-content: center;
            min-height: 300px;
          }
          .cx-hero-image-wrap {
            height: 340px;
            max-width: 300px;
          }
          .cx-hero::before { width: 340px; height: 340px; }
        }
        @media (max-width: 480px) {
          .cx-hero-btns { flex-direction: column; }
          .cx-hero-btn-primary, .cx-hero-btn-secondary { justify-content: center; }
        }
      `}),i.jsx("section",{id:"canxiol-hero",className:"cx-hero",children:(0,i.jsxs)("div",{className:"cx-hero-inner",children:[(0,i.jsxs)("div",{className:"cx-hero-content",children:[(0,i.jsxs)("h1",{className:"cx-hero-heading",children:[i.jsx("span",{className:"highlight",children:"Heal"})," The way",i.jsx("br",{}),"You Feel"]}),i.jsx("p",{className:"cx-hero-desc",children:"Canxiol\xae is a prescription cannabidiol oral solution for the management of mild to moderate anxiety disorders, in conjunction with cognitive behavioural therapy to be prescribed by Psychiatrists only."}),(0,i.jsxs)("div",{className:"cx-hero-btns",children:[i.jsx("a",{href:"#",className:"cx-hero-btn-primary",children:"Discover Canxiol ↗"}),i.jsx("a",{href:"#",className:"cx-hero-btn-secondary",children:"For Psychiatrists ↗"})]}),i.jsx("p",{className:"cx-hero-disclaimer",children:"Prescription Only medicine. Use only as directed by Psychiatrist"})]}),i.jsx("div",{className:"cx-hero-image-col",children:i.jsx("div",{className:"cx-hero-image-wrap",children:i.jsx(o(),{src:"/images/canxiol_bottle_hand.jpg",alt:"Canxiol Cannabidiol Oral Solution 150mg/mL – hand holding amber dropper bottle",fill:!0,priority:!0,sizes:"(max-width: 900px) 300px, 440px"})})})]})})]})}},7930:(e,t,n)=>{"use strict";n.d(t,{default:()=>o});var i=n(326),r=n(7577);function o(){let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[i.jsx("style",{children:`
        .canxiol-navbar {
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1040;
          box-shadow: 0 1px 0 0 #ede8f0;
        }
        .canxiol-navbar .inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 64px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .canxiol-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          line-height: 1;
          flex-shrink: 0;
        }
        .canxiol-logo .logo-brand {
          font-family: 'Inter', sans-serif;
          font-size: 21px;
          font-weight: 800;
          color: #3b1a4a;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .canxiol-logo .logo-sub {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #9a85aa;
          letter-spacing: 0.04em;
          padding-left: 2px;
          margin-top: 1px;
        }
        .canxiol-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .canxiol-nav-links li { position: relative; }
        .canxiol-nav-links a,
        .canxiol-nav-links .nav-link-btn {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #3b2050;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .canxiol-nav-links a:hover,
        .canxiol-nav-links .nav-link-btn:hover { color: #6b21a8; }
        .chevron-ico { font-size: 9px; transition: transform 0.2s; display: inline-block; }
        .chevron-ico.open { transform: rotate(180deg); }
        .canxiol-dropdown {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border: 1px solid #ede8f0;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(59,26,74,0.13);
          padding: 8px 0;
          min-width: 190px;
          z-index: 200;
          animation: cxDropIn 0.18s ease;
        }
        @keyframes cxDropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .canxiol-dropdown a {
          display: block;
          padding: 10px 22px;
          font-size: 13px;
          color: #3b2050;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .canxiol-dropdown a:hover { background: #f5f0fa; color: #6b21a8; }
        .canxiol-cta-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .cx-btn-outline {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #3b1a4a;
          background: transparent;
          border: 1.5px solid #3b1a4a;
          border-radius: 4px;
          padding: 9px 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cx-btn-outline:hover { background: #3b1a4a; color: #fff; }
        .cx-btn-filled {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #fff;
          background: #3b1a4a;
          border: 1.5px solid #3b1a4a;
          border-radius: 4px;
          padding: 9px 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cx-btn-filled:hover { background: #5c2d8a; border-color: #5c2d8a; color: #fff; }
        .canxiol-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #3b1a4a;
          font-size: 22px;
          line-height: 1;
        }
        .canxiol-mobile-drawer {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid #ede8f0;
          padding: 12px 24px 20px;
          gap: 0;
        }
        .canxiol-mobile-drawer.open { display: flex; }
        .canxiol-mobile-drawer a,
        .canxiol-mobile-drawer button {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #3b2050;
          text-decoration: none;
          background: none;
          border: none;
          border-bottom: 1px solid #f0eaf5;
          padding: 12px 0;
          cursor: pointer;
          text-align: left;
          transition: color 0.2s;
        }
        .canxiol-mobile-drawer a:hover { color: #6b21a8; }
        .mobile-cta-group { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
        @media (max-width: 900px) {
          .canxiol-nav-links, .canxiol-cta-group { display: none; }
          .canxiol-burger { display: flex; }
          .canxiol-navbar .inner { padding: 0 20px; }
        }
      `}),(0,i.jsxs)("header",{className:"canxiol-navbar",children:[(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsxs)("a",{href:"#",className:"canxiol-logo",children:[(0,i.jsxs)("span",{className:"logo-brand",children:[(0,i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[i.jsx("circle",{cx:"12",cy:"4.5",r:"2.5",fill:"#3b1a4a"}),i.jsx("path",{d:"M9 9.5c-.8.4-1.5 1.2-1.8 2l-1.7 4.5h3l.5 4h6l.5-4h3l-1.7-4.5c-.3-.8-1-1.6-1.8-2",fill:"#3b1a4a"})]}),"CANXIOL"]}),i.jsx("span",{className:"logo-sub",children:"By ✦ Leiutis"})]}),(0,i.jsxs)("ul",{className:"canxiol-nav-links",children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"Anxiety and its effects"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Canxiol"})}),(0,i.jsxs)("li",{children:[(0,i.jsxs)("button",{className:"nav-link-btn",onClick:()=>o(!n),children:["Resources ",i.jsx("span",{className:`chevron-ico ${n?"open":""}`,children:"▼"})]}),n&&(0,i.jsxs)("div",{className:"canxiol-dropdown",onMouseLeave:()=>o(!1),children:[i.jsx("a",{href:"#",children:"Patient Resources"}),i.jsx("a",{href:"#",children:"Clinical Guidelines"}),i.jsx("a",{href:"#",children:"FAQs"}),i.jsx("a",{href:"#",children:"Download Brochure"})]})]}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Pharmacovigilance"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"About Leiutis"})})]}),(0,i.jsxs)("div",{className:"canxiol-cta-group",children:[i.jsx("a",{href:"#",className:"cx-btn-outline",children:"For Psychiatrists ↗"}),i.jsx("a",{href:"#",className:"cx-btn-filled",children:"Contact Us ↗"})]}),i.jsx("button",{className:"canxiol-burger",onClick:()=>t(!e),"aria-label":"Toggle menu",children:e?"✕":"☰"})]}),(0,i.jsxs)("nav",{className:`canxiol-mobile-drawer ${e?"open":""}`,children:[i.jsx("a",{href:"#",onClick:()=>t(!1),children:"Anxiety and its effects"}),i.jsx("a",{href:"#",onClick:()=>t(!1),children:"Canxiol"}),i.jsx("a",{href:"#",onClick:()=>t(!1),children:"Resources"}),i.jsx("a",{href:"#",onClick:()=>t(!1),children:"Pharmacovigilance"}),i.jsx("a",{href:"#",onClick:()=>t(!1),children:"About Leiutis"}),(0,i.jsxs)("div",{className:"mobile-cta-group",children:[i.jsx("a",{href:"#",className:"cx-btn-outline",children:"For Psychiatrists ↗"}),i.jsx("a",{href:"#",className:"cx-btn-filled",children:"Contact Us ↗"})]})]})]})]})}},6935:(e,t,n)=>{"use strict";function i(){return null}n.d(t,{default:()=>i}),n(7577)},1194:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l,metadata:()=>s});var i=n(9510),r=n(8570);let o=(0,r.createProxy)(String.raw`C:\vip codes\Monika Chugh\src\components\CanxiolNavbar.js#default`),a=(0,r.createProxy)(String.raw`C:\vip codes\Monika Chugh\src\components\CanxiolHero.js#default`),s={title:"Canxiol — Heal The Way You Feel | Leiutis",description:"Canxiol is a prescription cannabidiol oral solution for management of mild to moderate anxiety disorders, prescribed by Psychiatrists only."};function l(){return(0,i.jsxs)("main",{style:{minHeight:"100vh",backgroundColor:"#f5eef8"},children:[i.jsx(o,{}),i.jsx(a,{})]})}},6e3:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a,metadata:()=>o});var i=n(9510);n(5023);let r=(0,n(8570).createProxy)(String.raw`C:\vip codes\Monika Chugh\src\components\KitFormPopup.js#default`),o={title:"Monika Chugh — Official Website",description:"Official website of author and poet Monika Chugh featuring literary works, books, canvas quotations, and articles."};function a({children:e}){return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,i.jsxs)("body",{children:[e,i.jsx(r,{})]})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),i=t.X(0,[819],()=>n(1285));module.exports=i})();