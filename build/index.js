(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},t.apply(this,arguments)}const e=window.wp.element,l=window.wp.i18n,o=window.wp.blocks,a=window.wp.blockEditor;(0,o.registerBlockType)("blockify/tab",{apiVersion:2,title:"Tab",parent:["blockify/tabs"],icon:"table-row-after",attributes:{title:{type:"string",default:(0,l.__)("Tab title","blockify")},style:{type:"object",default:{spacing:{padding:{top:"1em",right:"1em",bottom:"1em",left:"1em"}},border:{radius:"var(--wp--custom--border--radius)"},typography:{lineHeight:"1"}}}},edit:t=>{let{attributes:l,setAttributes:o}=t,n=(0,a.useBlockProps)();return(0,e.createElement)("section",n,(0,e.createElement)(a.RichText,{tagName:"span",className:"blockify-tab-title",value:l.title,onChange:t=>o({title:t})}),(0,e.createElement)("div",{className:"blockify-tab-content"},(0,e.createElement)(a.InnerBlocks,{template:[["core/group",{spacing:{padding:{top:"1em",right:"1em",bottom:"1em",left:"1em"}}},[["core/paragraph"]]]]})))},save:t=>{let{attributes:l}=t,o=a.useBlockProps.save();return(0,e.createElement)("section",o,(0,e.createElement)(a.RichText.Content,{tagName:"span",className:"blockify-tab-title",value:l.title}),(0,e.createElement)("div",{className:"blockify-tab-content"},(0,e.createElement)(a.InnerBlocks.Content,null)))}});const n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blockify/tabs","title":"Tabs","description":"Simple and useful tabbed content section block. Can also be used for creating pricing table switches.","icon":"table-row-after","textdomain":"blockify","category":"blockify","supports":{"align":true,"alignWide":true,"boxShadow":true,"inserter":true,"typography":{"fontSize":true,"lineHeight":true},"color":{"link":true,"background":true,"text":true,"gradients":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"__experimentalBorder":{"width":true,"style":true,"color":true,"radius":true,"__experimentalDefaultControls":{"width":true,"color":true}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex","justifyContent":"left","orientation":"horizontal"}}},"attributes":{"tabColor":{"type":"string"},"tabGradient":{"type":"string"},"tabColorActive":{"type":"string"},"tabGradientActive":{"type":"string"},"tabBackgroundColor":{"type":"string"},"tabBackgroundGradient":{"type":"string"},"tabBackgroundColorActive":{"type":"string"},"tabBackgroundGradientActive":{"type":"string"},"style":{"type":"object","default":{"border":{"color":"var(--wp--custom--border--color)","radius":"var(--wp--custom--border--radius)","style":"var(--wp--custom--border--style)","width":"var(--wp--custom--border--width)"},"spacing":{"margin":{"top":"0px","bottom":"0px"},"padding":{"top":"1em","right":"1em","bottom":"1em","left":"1em"},"blockGap":"0px"}}}},"editorScript":"file:index.tsx","editorStyle":"file:editor.scss","style":"file:style.scss","script":"file:script.tsx","viewScript":"file:view.tsx"}');document.addEventListener("DOMContentLoaded",(t=>i(t)));const i=t=>{const e=document.getElementsByClassName("wp-block-blockify-tabs");let l=20;[...e].forEach((e=>{var o;const a=e.querySelectorAll(".blockify-tab-content");if(t&&e!==t.target&&!e.contains(t.target))return;const n=document.createElement("style");n.id="tabs-css";let i=200;[...a].forEach((t=>{var e;let o=null==t?void 0:t.offsetHeight;var a;null!=t&&t.parentElement&&null!=t&&null!==(e=t.parentElement)&&void 0!==e&&e.offsetHeight&&(l=null==t||null===(a=t.parentElement)||void 0===a?void 0:a.offsetHeight),o>i&&(i=o+l)}));const r=e.querySelectorAll('[data-type="blockify/tab"].has-child-selected .blockify-tab-content, [data-type="blockify/tab"].is-selected .blockify-tab-content');r&&r[0]&&(r[0].parentElement.offsetHeight&&(l=r[0].parentElement.offsetHeight),i=r[0].offsetHeight+l),n.innerHTML="#"+e.id+" { height: "+(i+1)+"px}#"+e.id+" .blockify-tab-content { top: "+l+"px};",null===(o=document.getElementById("tabs-css"))||void 0===o||o.remove(),e.appendChild(n)}))};(0,o.registerBlockType)(n,{edit:o=>{var n,r,d,c,s,b,u,g,p,v;let{attributes:k,setAttributes:y}=o;const{style:m,tabColor:f,tabColorActive:h,tabGradient:C,tabGradientActive:w,tabBackgroundColor:B,tabBackgroundColorActive:E,tabBackgroundGradient:x,tabBackgroundGradientActive:G,tabBorderRadius:A}=k;let _=(0,a.useBlockProps)();const T=(0,a.useInnerBlocksProps)({},{allowedBlocks:["blockify/tab"],template:[["blockify/tab"],["blockify/tab"],["blockify/tab"]]}),j=["wp-block-blockify-tabs","items-justified-"+(null==k||null===(n=k.layout)||void 0===n?void 0:n.justifyContent),"orientation-"+(null==k||null===(r=k.layout)||void 0===r?void 0:r.orientation),"tab-width-"+(null==k?void 0:k.tabWidth),null!=k&&k.flexibleHeight?"has-flexible-height":"",null==_?void 0:_.className];return _.style={..._.style,padding:"0 !important","--tab-padding-top":null==m||null===(d=m.spacing)||void 0===d||null===(c=d.padding)||void 0===c?void 0:c.top,"--tab-padding-right":null==m||null===(s=m.spacing)||void 0===s||null===(b=s.padding)||void 0===b?void 0:b.right,"--tab-padding-bottom":null==m||null===(u=m.spacing)||void 0===u||null===(g=u.padding)||void 0===g?void 0:g.bottom,"--tab-padding-left":null==m||null===(p=m.spacing)||void 0===p||null===(v=p.padding)||void 0===v?void 0:v.right,"--tab-link-border-radius":A,"--tab-link-color":null!=C?C:f,"--tab-link-color-active":null!=w?w:h,"--tab-link-background-color":null!=x?x:B,"--tab-link-background-color-active":null!=G?G:E},delete _.style.paddingTop,delete _.style.paddingRight,delete _.style.paddingBottom,delete _.style.paddingLeft,["load","click","keydown","mouseenter"].map((t=>{window.addEventListener(t,(e=>{console.log(t),i(e)}))})),(0,e.createElement)("div",t({},_,{className:j.join(" ")}),(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(a.__experimentalPanelColorGradientSettings,{title:(0,l.__)("Tab link colors","blockify"),settings:[{colorValue:f,gradientValue:C,label:(0,l.__)("Tab link","blockify"),onColorChange:t=>y({tabColor:t}),onGradientChange:t=>y({tabGradient:t})},{colorValue:h,gradientValue:w,label:(0,l.__)("Tab link active","blockify"),onColorChange:t=>y({tabColorActive:t}),onGradientChange:t=>y({tabGradientActive:t})},{colorValue:B,gradientValue:x,label:(0,l.__)("Tab link background","blockify"),onColorChange:t=>y({tabBackgroundColor:t}),onGradientChange:t=>y({tabBackgroundGradient:t})},{colorValue:E,gradientValue:G,label:(0,l.__)("Tab link background active","blockify"),onColorChange:t=>y({tabBackgroundColorActive:t}),onGradientChange:t=>y({tabBackgroundGradientActive:t})}]})),null==T?void 0:T.children)},save:l=>{var o,n,i,r,d,c,s,b,u,g;let{attributes:p}=l,v=a.useBlockProps.save();const{style:k,tabColor:y,tabColorActive:m,tabGradient:f,tabGradientActive:h,tabBackgroundColor:C,tabBackgroundColorActive:w,tabBackgroundGradient:B,tabBackgroundGradientActive:E}=p,x=["wp-block-blockify-tabs","items-justified-"+(null==p||null===(o=p.layout)||void 0===o?void 0:o.justifyContent),"orientation-"+(null==p||null===(n=p.layout)||void 0===n?void 0:n.orientation),"tab-width-"+(null==p?void 0:p.tabWidth),null!=p&&p.flexibleHeight?"has-flexible-height":"",null==v?void 0:v.className];return v.style={...v.style,padding:"0 !important","--tab-padding-top":null==k||null===(i=k.spacing)||void 0===i||null===(r=i.padding)||void 0===r?void 0:r.top,"--tab-padding-right":null==k||null===(d=k.spacing)||void 0===d||null===(c=d.padding)||void 0===c?void 0:c.right,"--tab-padding-bottom":null==k||null===(s=k.spacing)||void 0===s||null===(b=s.padding)||void 0===b?void 0:b.bottom,"--tab-padding-left":null==k||null===(u=k.spacing)||void 0===u||null===(g=u.padding)||void 0===g?void 0:g.right,"--tab-link-color":null!=f?f:y,"--tab-link-color-active":null!=h?h:m,"--tab-link-background-color":null!=B?B:C,"--tab-link-background-color-active":null!=E?E:w},(0,e.createElement)("div",t({},v,{className:x.join(" ")}),(0,e.createElement)(a.InnerBlocks.Content,null))}})})();