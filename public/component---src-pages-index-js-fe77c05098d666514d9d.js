(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(k,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},k=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,x=e.loading,L=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:I?1:0,transition:R?"opacity "+v+"ms":"none"},d),P="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},N=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&T,{},d,{},f),q={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:S};if(m){var C=m,W=g(m);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),P&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&T)}),W.base64&&l.default.createElement(j,{ariaHidden:!0,src:W.base64,spreadProps:q,imageVariants:C,generateSources:E}),W.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,src:W.tracedSVG,spreadProps:q,imageVariants:C,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,w(C),l.default.createElement(k,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:x},W,{imageVariants:C}))}}))}if(h){var G=h,F=g(h),H=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},P&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},R&&T)}),F.base64&&l.default.createElement(j,{ariaHidden:!0,src:F.base64,spreadProps:q,imageVariants:G,generateSources:E}),F.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,src:F.tracedSVG,spreadProps:q,imageVariants:G,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,w(G),l.default.createElement(k,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:x},F,{imageVariants:G}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),P=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:V,sizes:P,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([P,c.default.arrayOf(P)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=R;t.default=T},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,d=function(e,t,a,r){var i=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("WqO/"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),d=a("9eSz"),o=a.n(d),l=a("vOnD");a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("DNiP"),a("Z2Ku"),a("L9s1"),a("WLL4"),a("DW2E");function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(){var e=c(["\n          @media (min-width: ",") {\n            ","\n          }\n        "]);return u=function(){return e},e}function f(){var e=c(["\n          @media (max-width: ",") {\n            ","\n          }\n        "]);return f=function(){return e},e}function p(){var e=c(["\n    @media (min-width: ",") and\n      (max-width: ",") {\n      ","\n    }\n  "]);return p=function(){return e},e}function g(){var e=c(["\n    @media (min-width: ",") {\n      ","\n    }\n  "]);return g=function(){return e},e}function m(){var e=c(["\n    @media (max-width: ",") {\n      ","\n    }\n  "]);return m=function(){return e},e}var h={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t[e]?t[e]:parseInt(e)?e:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=function(t){return function(){return Object(l.c)(m(),b(t,e),l.c.apply(void 0,arguments))}},a=function(t){return function(){return Object(l.c)(g(),b(t,e),l.c.apply(void 0,arguments))}},r=function(t,a){return function(){return Object(l.c)(p(),b(t,e),b(a,e),l.c.apply(void 0,arguments))}},i=Object.keys(e).reduce((function(t,a){var r=e[a];return t.to[a]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(a,"') instead of old media.to.").concat(a," (Probably we'll deprecate it)")),Object(l.c)(f(),r,l.c.apply(void 0,arguments))},t.from[a]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(a,"') instead of old media.from.").concat(a," (Probably we'll deprecate it)")),Object(l.c)(u(),r,l.c.apply(void 0,arguments))},t}),{to:{},from:{}});return Object.assign({lessThan:t,greaterThan:a,between:r},i)}v();var y=v({xs:"320px",sm:"450px",md:"768px",lg:"1200px",xl:"1440px"});function S(){var e=x(["\n    font-size: 1rem;\n    background-color: rgba(0,255,255, 0.3);\n    border: 1px solid red;\n  "]);return S=function(){return e},e}function w(){var e=x(["\n    font-size: 1.5rem;\n    background-color: skyblue;\n    color: white;\n    border: 10px solid ",";\n  "]);return w=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),e.raw=t,e}var O=l.d.h1.withConfig({displayName:"styles__Title",componentId:"sc-8t2aa6-0"})(["position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);font-size:2rem;display:flex;justify-content:center;align-items:center;color:",";background-color:rgba(255,266,0,0.6);border:5px solid ",";padding:10px;text-transform:uppercase;text-align:center;"," ",""],(function(e){return e.theme.color.firstDark}),(function(e){return e.theme.color.thirdMedium}),y.lessThan("lg")(w(),(function(e){return e.theme.color.firstDark})),y.lessThan("md")(S())),E=a("7oih"),L=a("vrFN");t.default=function(){var e=r.data;return n.a.createElement(E.a,null,n.a.createElement(L.a,{title:"Home"}),n.a.createElement(s.Link,{to:"/About"},"About"),n.a.createElement(o.a,{fluid:e.file.childImageSharp.fluid,alt:"exemplo imagem fundo",style:{maxWidth:"1200px",margin:"0 auto"}}),n.a.createElement(O,null,".:. Projeto Web Gatsby JS .:."))}},WLL4:function(e,t,a){var r=a("XKFU");r(r.S+r.F*!a("nh4g"),"Object",{defineProperties:a("FJW5")})},"WqO/":function(e){e.exports=JSON.parse('{"data":{"file":{"id":"d907492a-1a67-5db7-b37a-cf982dc65624","childImageSharp":{"id":"093ee294-8d5f-52f6-91cb-a19051fa577e","fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'265\'%3e%3cpath%20d=\'M98%20116l-2%204-1%205-1-1c0-3-4-6-6-5l-2%202-3%204c-6%207-8%2012-7%2022%200%2010-1%2011-8%2014-3%201-3%201%203%201%208-1%209-2%209-6v-6l3-7a1243%201243%200%20015-17h3c2-4%205%202%205%2011l1%205v3c-2%200-3%204-1%205%201%201%205-3%204-4l-1-10-1-11c-1-1-1-2%202-1%204%201%206-4%202-7-1-2-2-2-4-1m220%205l-2%202-2%204c-2%201-4%205-5%207-3%205-4%205-4%201v-2l-1%202v19c0%203-4%206-5%204h-6c-1%201%200%201%203%201s3%200%202%201%200%201%203%201l5-1%202-2c1%200%202-3%202-9l2-9h1a1395%201395%200%20008-14c1%202%203%201%204-2%202-4-4-7-7-3m-48%200l-3%207c-2%204-4%205-7%206-4%201-12%207-11%209l3-1%206-3%204-1v8c-1%2010-1%2011-6%2013l-4%202h8c2-1%203%200%204%201l2%202v-1c-2-2-1-4%202-4%204%200%205-2%205-9l1-11c1-5%201-5%203-3h1c-1-2%203-4%205-2%201%201-3%2013-5%2013l-1%203-1%208s-1%202-3%202c-5%203%200%203%206%200%204-2%206-5%208-14%201-5%203-7%205-6l4-5c2-5%203-6%206-3%202%201%202%201%202-1l3-3%202-1-2-1-5-2c-3-3-6-3-7%200-2%204-8%206-12%205l-4-1c-2%202-2-2%200-4%202-1%202-1%200-3h-9m-114%201c-2%200-3%202-4%203-2%201-3%202-5%201-4%200-11%202-11%203l2%201c2-1%208%201%208%202l-1%204-2%2012c-1%208-2%2011-6%2012l-1%202%207-2c5-2%208-3%207-1l4%204v-2c-2-2-2-2-1-7l2-7c0-5%201-8%202-8%202%201%205-2%205-5s5-7%206-5c0%201%201%202%203%202l4%201c3%202%202%200-2-5s-4-6-10-6l-7%201m62%2085l-4%201c-2%200-5%202-10%207l-10%209c-2%202-3%203-3%205s0%202%205%202l4%201h2c1%200%202%200%202%202h1c0-2%201-2%205-2l8-2%209-3c4%200%205-1%207-4l3-3%201-3c0-2%200-3-1-2l-4-2c-3-4-5-5-9-6h-6m121%203l-3%203-3%202c-2%201-3%202-3%204%200%204%202%205%2011%203l14-2c4%200%205%200%2011-3%203-1%205-5%203-6-2-2-12%200-14%202-4%203-9%201-8-3%200-2%200-2-3-2l-5%202m-44%2044h-4c-1%200-2%200-3%202l-3%202-7%204-5%202c-3%201-2%201%203%201%207%200%207%200%2010-3l8-5%207-3h-6\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.5085365853658537,"src":"/static/a7ca5a691113313ccd2d689557d4bb35/47498/bkg-template.jpg","srcSet":"/static/a7ca5a691113313ccd2d689557d4bb35/9dc27/bkg-template.jpg 300w,\\n/static/a7ca5a691113313ccd2d689557d4bb35/4fe8c/bkg-template.jpg 600w,\\n/static/a7ca5a691113313ccd2d689557d4bb35/47498/bkg-template.jpg 1200w,\\n/static/a7ca5a691113313ccd2d689557d4bb35/52258/bkg-template.jpg 1800w,\\n/static/a7ca5a691113313ccd2d689557d4bb35/50587/bkg-template.jpg 2400w,\\n/static/a7ca5a691113313ccd2d689557d4bb35/06565/bkg-template.jpg 4948w","sizes":"(max-width: 1200px) 100vw, 1200px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-fe77c05098d666514d9d.js.map