(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4150:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1245,23)),Promise.resolve().then(n.t.bind(n,6095,23)),Promise.resolve().then(n.bind(n,2286)),Promise.resolve().then(n.t.bind(n,1241,23))},7722:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var i=n(5155);function s(e){let{children:t,...n}=e,{color:s="default",disabled:o,fill:r="solid",size:l="medium",uppercase:a,border:c,maxWidth:d,minWidth:u,maxHeight:h,minHeight:m,customBGColor:p,customBorderColor:f,customColor:x,buttonClick:g,formAction:v,classNames:b}=n;return(0,i.jsx)("button",{style:{minWidth:u?u+"px":"",maxWidth:d?d+"px":"",minHeight:m?m+"px":"",maxHeight:h?h+"px":"",backgroundColor:p,color:x,borderColor:f},className:[s,r,l,c?"border":"",a?"text-uppercase":"",b||""].join(" "),onClick:g,formAction:v,disabled:o,children:t})}n(9713)},2286:(e,t,n)=>{"use strict";n.d(t,{default:()=>C});var i=n(5155),s=n(7722),o=n(2115);n(4467);var r=n(1921),l=n(2321),a=n(8041),c=n(4712);class d extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:n,anchorX:s}=e,r=(0,o.useId)(),l=(0,o.useRef)(null),a=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=(0,o.useContext)(c.Q);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:i,left:o,right:c}=a.current;if(n||!l.current||!e||!t)return;l.current.dataset.motionPopId=r;let d=document.createElement("style");return u&&(d.nonce=u),document.head.appendChild(d),d.sheet&&d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===s?"left: ".concat(o):"right: ".concat(c),"px !important;\n            top: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(d)}},[n]),(0,i.jsx)(d,{isPresent:n,childRef:l,sizeRef:a,children:o.cloneElement(t,{ref:l})})}let h=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:r,custom:c,presenceAffectsLayout:d,mode:h,anchorX:p}=e,f=(0,l.M)(m),x=(0,o.useId)(),g=(0,o.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;r&&r()},[f,r]),v=(0,o.useMemo)(()=>({id:x,initial:n,isPresent:s,custom:c,onExitComplete:g,register:e=>(f.set(e,!1),()=>f.delete(e))}),d?[Math.random(),g]:[s,g]);return(0,o.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[s]),o.useEffect(()=>{s||f.size||!r||r()},[s]),"popLayout"===h&&(t=(0,i.jsx)(u,{isPresent:s,anchorX:p,children:t})),(0,i.jsx)(a.t.Provider,{value:v,children:t})};function m(){return new Map}var p=n(8086);let f=e=>e.key||"";function x(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var g=n(7530);let v=e=>{let{children:t,custom:n,initial:s=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:d="sync",propagate:u=!1,anchorX:m="left"}=e,[v,b]=(0,p.xQ)(u),j=(0,o.useMemo)(()=>x(t),[t]),w=u&&!v?[]:j.map(f),k=(0,o.useRef)(!0),C=(0,o.useRef)(j),y=(0,l.M)(()=>new Map),[N,E]=(0,o.useState)(j),[P,R]=(0,o.useState)(j);(0,g.E)(()=>{k.current=!1,C.current=j;for(let e=0;e<P.length;e++){let t=f(P[e]);w.includes(t)?y.delete(t):!0!==y.get(t)&&y.set(t,!1)}},[P,w.length,w.join("-")]);let _=[];if(j!==N){let e=[...j];for(let t=0;t<P.length;t++){let n=P[t],i=f(n);w.includes(i)||(e.splice(t,0,n),_.push(n))}return"wait"===d&&_.length&&(e=_),R(x(e)),E(j),null}let{forceRender:L}=(0,o.useContext)(r.L);return(0,i.jsx)(i.Fragment,{children:P.map(e=>{let t=f(e),o=(!u||!!v)&&(j===P||w.includes(t));return(0,i.jsx)(h,{isPresent:o,initial:(!k.current||!!s)&&void 0,custom:o?void 0:n,presenceAffectsLayout:c,mode:d,onExitComplete:o?void 0:()=>{if(!y.has(t))return;y.set(t,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(null==L||L(),R(C.current),u&&(null==b||b()),a&&a())},anchorX:m,children:e},t)})})};var b=n(7491);function j(e){let{...t}=e,{children:n,dropdownItems:s,buttonClick:r}=t,[l,a]=(0,o.useState)(!1),[c,d]=(0,o.useState)(s[0]),u=(0,o.useRef)();function h(){a(e=>!e),u.current&&a(!1)}return(0,o.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&h()}if(u)return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[u]),(0,i.jsxs)("div",{className:"split-container",children:[(0,i.jsx)("button",{className:"",onClick:()=>r(c),children:n||c}),(0,i.jsxs)("div",{className:"dropdown",children:[(0,i.jsx)("button",{onClick:h,children:(0,i.jsx)("span",{className:l?"up-arrow":"down-arrow"})}),(0,i.jsx)(v,{children:l?(0,i.jsx)(b.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"dropdown-content",ref:u,children:s.map((e,t)=>(0,i.jsx)(b.P.a,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},exit:{opacity:0},onClick:()=>{d(e),h()},children:e},t))},"modal"):null})]})]})}n(1483);var w=n(6046);function k(e){let{...t}=e,{children:n,menuItems:s,handleMobileMenuClick:r}=t,[l,a]=(0,o.useState)(!1),[c,d]=(0,o.useState)(s[0]),u=(0,o.useRef)();function h(){a(e=>!e),u.current&&a(!1)}return(0,o.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&h()}if(u)return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mouseup",e)}},[u]),(0,i.jsxs)("div",{className:"mobileMenuContainer flex relative",children:[(0,i.jsx)("div",{id:"desktop-clear",className:"relative flex",onClick:h,children:(0,i.jsxs)("div",{id:"closeIconDesktop",className:l?"open":void 0,children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})}),(0,i.jsx)("div",{className:"dropdown",children:(0,i.jsx)(v,{children:l?(0,i.jsx)(b.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"dropdown-content",ref:u,children:s.map((e,t)=>(0,i.jsx)(b.P.a,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},exit:{opacity:0},onClick:()=>{d(e),r(e),h()},children:e},t))},"modal"):null})})]})}function C(e){let{...t}=e,n=(0,w.useRouter)(),o=(0,w.usePathname)(),{}=t;return(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"header-container",children:[(0,i.jsxs)("div",{className:"left-header left relative flex items-center gap-4",children:[(0,i.jsx)("div",{className:"mobile-left-menu",children:(0,i.jsx)(k,{menuItems:["Home","Design","LinkedIn","GitHub"],handleMobileMenuClick:function(e){"Home"===e?n.push("/"):"Design"===e?n.push("/design"):"LinkedIn"===e?window.open("https://www.linkedin.com/in/troy-bedingfield-0b5850a/","_blank"):"GitHub"===e&&window.open("https://github.com/troybedingfield/","_blank")}})}),(0,i.jsx)("div",{className:"header-name text-center",onClick:()=>n.push("/"),children:"Troy Bedingfield"}),(0,i.jsx)("div",{className:"desktop-left-menu",children:"/design"===o?(0,i.jsx)(s.A,{fill:"clear",customColor:"#000000",customBGColor:"var(--color-clear-button-hover)",maxHeight:36,classNames:"flex items-center",children:"Design"}):(0,i.jsx)(s.A,{fill:"clear",customColor:"#000000",maxHeight:36,classNames:"flex items-center",buttonClick:()=>n.push("/design"),children:"Design"})})]}),(0,i.jsxs)("div",{className:"right",children:[(0,i.jsxs)("div",{className:"desktop-right-menu",children:[(0,i.jsx)(s.A,{fill:"clear",customColor:"#000000",buttonClick:function(){window.open("https://www.linkedin.com/in/troy-bedingfield-0b5850a/","_blank")},children:"LinkedIn"}),(0,i.jsx)(s.A,{fill:"clear",customColor:"#000000",buttonClick:function(){window.open("https://github.com/troybedingfield/","_blank")},children:"GitHub"})]}),(0,i.jsx)(j,{dropdownItems:["PDF","DOC"],buttonClick:function(e){"PDF"===e?window.open("troy-bedingfield-resume.pdf"):"DOC"===e?window.open("troy-bedingfield-resume.doc"):window.open("troy-bedingfield-resume.pdf")},children:"Resume"})]})]})})}n(6203)},9713:()=>{},6095:()=>{},1483:()=>{},6203:()=>{},4467:()=>{},1241:()=>{},1245:e=>{e.exports={style:{fontFamily:"'Roboto', 'Roboto Fallback'"},className:"__className_14d606"}}},e=>{var t=t=>e(e.s=t);e.O(0,[880,864,930,447,756,441,517,358],()=>t(4150)),_N_E=e.O()}]);