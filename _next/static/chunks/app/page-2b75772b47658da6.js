(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6707:(e,t,a)=>{Promise.resolve().then(a.bind(a,2747))},2452:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var l=a(5155),s=a(9749);function i(e){let t,a,i,r,n;let c=(0,s.c)(25);c[0]!==e?({children:t,...a}=e,c[0]=e,c[1]=t,c[2]=a):(t=c[1],a=c[2]);let{color:o,disabled:d,fill:m,size:h,uppercase:u,border:x,maxWidth:p,minWidth:f,maxHeight:j,minHeight:g,customBGColor:v,customBorderColor:b,customColor:y,buttonClick:N,formAction:k,classNames:w}=a,S=void 0===o?"default":o,_=void 0===m?"solid":m,C=void 0===h?"medium":h,F=f?f+"px":"",A=p?p+"px":"",E=g?g+"px":"",D=j?j+"px":"";c[3]!==v||c[4]!==b||c[5]!==y||c[6]!==F||c[7]!==A||c[8]!==E||c[9]!==D?(i={minWidth:F,maxWidth:A,minHeight:E,maxHeight:D,backgroundColor:v,color:y,borderColor:b},c[3]=v,c[4]=b,c[5]=y,c[6]=F,c[7]=A,c[8]=E,c[9]=D,c[10]=i):i=c[10];let L=x?"border":"",z=u?"text-uppercase":"",P=w||"";c[11]!==S||c[12]!==_||c[13]!==C||c[14]!==z||c[15]!==P||c[16]!==L?(r=[S,_,C,L,z,P],c[11]=S,c[12]=_,c[13]=C,c[14]=z,c[15]=P,c[16]=L,c[17]=r):r=c[17];let O=r.join(" ");return c[18]!==N||c[19]!==t||c[20]!==d||c[21]!==k||c[22]!==O||c[23]!==i?(n=(0,l.jsx)("button",{style:i,className:O,onClick:N,formAction:k,disabled:d,children:t}),c[18]=N,c[19]=t,c[20]=d,c[21]=k,c[22]=O,c[23]=i,c[24]=n):n=c[24],n}a(9713)},9488:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var l=a(5155),s=a(9749),i=a(1315),r=a(9103);a(245);var n=a(2115);function c(e){let t,a,c,o,d,m,h,u,x,p,f,j,g,v,b;let y=(0,s.c)(37);y[0]!==e?({...t}=e,y[0]=e,y[1]=t):t=y[1];let{images:N,selHeight:k,automatic:w,arrowColor:S,interval:_}=t,C=void 0===S?"black":S,{slides:F,currentSlideIndex:A,slide:E,handleMouseEnter:D,handleMouseLeave:L,back:z,next:P,goto:O}=function(e,t,a){let l,i,r,c,o,d;let m=(0,s.c)(20),[h,u]=(0,n.useState)(0),[x]=(0,n.useState)(!!a),[p]=(0,n.useState)(t||0),[f,j]=(0,n.useState)(!0),g=(0,n.useRef)(null);m[0]!==p||m[1]!==h||m[2]!==x||m[3]!==f||m[4]!==e.length?(l=[p,e.length,h,x,f],m[0]=p,m[1]=h,m[2]=x,m[3]=f,m[4]=e.length,m[5]=l):l=m[5],(0,n.useEffect)(()=>(p>0&&x&&f&&(g.current=window.setInterval(b,p)),()=>{g.current&&clearInterval(g.current)}),l),m[6]!==h||m[7]!==e.length?(i=function(){let t=h-1;u(t<0?e.length-1:t)},m[6]=h,m[7]=e.length,m[8]=i):i=m[8];let v=i;function b(){let t=h+1;u(t===e.length?0:t)}m[9]===Symbol.for("react.memo_cache_sentinel")?(r=function(e){u(e)},m[9]=r):r=m[9];let y=r;m[10]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{j(!1)},m[10]=c):c=m[10];let N=c;m[11]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{j(!0)},m[11]=o):o=m[11];let k=o,w=e[h],S=0===h,_=h===e.length-1;return m[12]!==v||m[13]!==h||m[14]!==b||m[15]!==e||m[16]!==w||m[17]!==S||m[18]!==_?(d={currentSlideIndex:h,slide:w,slides:e,isFirstSlide:S,isLastSlide:_,goto:y,next:b,back:v,handleMouseEnter:N,handleMouseLeave:k},m[12]=v,m[13]=h,m[14]=b,m[15]=e,m[16]=w,m[17]=S,m[18]=_,m[19]=d):d=m[19],d}(N,_,w),H=k+"px";y[2]!==H?(a={height:H},y[2]=H,y[3]=a):a=y[3];let I="".concat(E),R="".concat(E);return y[4]===Symbol.for("react.memo_cache_sentinel")?(c={opacity:0},o={opacity:1},d={opacity:0},m={delay:.3,duration:.3},y[4]=c,y[5]=o,y[6]=d,y[7]=m):(c=y[4],o=y[5],d=y[6],m=y[7]),y[8]!==I||y[9]!==R?(h=(0,l.jsx)(i.N,{children:(0,l.jsx)(r.P.img,{src:R,initial:c,animate:o,exit:d,transition:m,className:"slide fade"},I)}),y[8]=I,y[9]=R,y[10]=h):h=y[10],y[11]!==C?(u={color:C},y[11]=C,y[12]=u):u=y[12],y[13]!==z||y[14]!==u?(x=(0,l.jsx)("a",{className:"prev",style:u,onClick:z,children:"❮"}),y[13]=z,y[14]=u,y[15]=x):x=y[15],y[16]!==C?(p={color:C},y[16]=C,y[17]=p):p=y[17],y[18]!==P||y[19]!==p?(f=(0,l.jsx)("a",{className:"next",style:p,onClick:P,children:"❯"}),y[18]=P,y[19]=p,y[20]=f):f=y[20],y[21]!==h||y[22]!==x||y[23]!==f?(j=(0,l.jsxs)("div",{className:"carousel",children:[h,x,f]}),y[21]=h,y[22]=x,y[23]=f,y[24]=j):j=y[24],y[25]!==A||y[26]!==O||y[27]!==F?(g=F&&F.map((e,t)=>(0,l.jsx)("span",{className:t===A?"dot active":"dot",onClick:()=>O(t)},t)),y[25]=A,y[26]=O,y[27]=F,y[28]=g):g=y[28],y[29]!==g?(v=(0,l.jsx)("div",{className:"text-center",children:g}),y[29]=g,y[30]=v):v=y[30],y[31]!==D||y[32]!==L||y[33]!==j||y[34]!==v||y[35]!==a?(b=(0,l.jsxs)("div",{className:"carousel-container",onMouseEnter:D,onMouseLeave:L,style:a,children:[j,v]}),y[31]=D,y[32]=L,y[33]=j,y[34]=v,y[35]=a,y[36]=b):b=y[36],b}},2747:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var l=a(1932),s=a(5155),i=a(9411);a(3572);var r=a(9488),n=a(2452),c=a(376),o=a(9749),d=a(2115);function m(e){let t,a,l,i,r,n;let c=(0,o.c)(12);c[0]!==e?({...t}=e,c[0]=e,c[1]=t):t=c[1];let{message:m,type:h,state:u}=t,x=void 0===u?"close":u,p=(0,d.useRef)();c[2]===Symbol.for("react.memo_cache_sentinel")?(a=function(e){e.current.classList.remove("open"),e.current.classList.add("close")},c[2]=a):a=c[2];let f=a,j=h+"-toast";c[3]!==x||c[4]!==j?(l=["toast",j,x],c[3]=x,c[4]=j,c[5]=l):l=c[5];let g=l.join(" ");return c[6]!==m?(i=(0,s.jsx)("div",{className:"toast-interior",children:m}),c[6]=m,c[7]=i):i=c[7],c[8]===Symbol.for("react.memo_cache_sentinel")?(r=(0,s.jsx)("a",{className:"toast-close",onClick:()=>f(p)}),c[8]=r):r=c[8],c[9]!==g||c[10]!==i?(n=(0,s.jsxs)("div",{ref:p,className:g,children:[i,r]}),c[9]=g,c[10]=i,c[11]=n):n=c[11],n}a(1275),a(4475);var h=a(7264);function u(e){let t,a,l,i,r,c,u,f;let j=(0,o.c)(10),g=(0,d.useRef)(),v=(0,d.useRef)(),b=(0,d.useRef)(),y=(0,d.useRef)(),[N,k]=(0,d.useState)(!1),w=(0,d.useRef)();return j[0]===Symbol.for("react.memo_cache_sentinel")?(t=async function(e,t,a,l){if(e.preventDefault(),w.current.getValue()){let e={FullName:a.current.value,Email:t.current.value,Comment:l.current.value},s=await fetch("https://d2nbfvp176.execute-api.us-east-2.amazonaws.com/default/sendContactEmail",{method:"POST",body:JSON.stringify(e)}),i=await s;if(200!==i.status)throw Error("Failed to send email");if(200===i.status)return console.log("Email Succesfully sent!"),void(y.current.reset(),k(p),setTimeout(()=>{k(x)},3e3))}else alert("Please verify the reCAPTCHA!")},j[0]=t):t=j[0],j[1]!==N?(a=N&&(0,s.jsx)(m,{state:"open",type:"success",message:"Email Succesfully sent!"}),j[1]=N,j[2]=a):a=j[2],j[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,s.jsx)("p",{className:"text-center font42",children:"Interested in working together?"}),j[3]=l):l=j[3],j[4]===Symbol.for("react.memo_cache_sentinel")?(i=e=>t(e,g,v,b),j[4]=i):i=j[4],j[5]===Symbol.for("react.memo_cache_sentinel")?(r=(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"Email",children:"Email"}),(0,s.jsx)("input",{required:!0,ref:g,type:"email",className:"form-control",name:"Email","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),j[5]=r):r=j[5],j[6]===Symbol.for("react.memo_cache_sentinel")?(c=(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"fullname",children:"Full Name"}),(0,s.jsx)("input",{required:!0,ref:v,type:"text",className:"form-control",name:"FullName",placeholder:"Full Name"})]}),j[6]=c):c=j[6],j[7]===Symbol.for("react.memo_cache_sentinel")?(u=(0,s.jsxs)("div",{className:"form-container",children:[l,(0,s.jsxs)("form",{ref:y,onSubmit:i,children:[r,c,(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"comment",children:"Comment"}),(0,s.jsx)("textarea",{required:!0,ref:b,className:"form-control",rows:5,name:"Comment"})]}),(0,s.jsx)("div",{}),(0,s.jsx)(h.A,{ref:w,sitekey:"6LcvSfApAAAAAKHZLwncTat926y89UVN3ySnK2aO"}),(0,s.jsx)(n.A,{maxWidth:88,children:"Submit"})]})]}),j[7]=u):u=j[7],j[8]!==a?(f=(0,s.jsxs)(s.Fragment,{children:[a,u]}),j[8]=a,j[9]=f):f=j[9],f}function x(e){return!e}function p(e){return!e}function f(e){let t,a,l,i;let r=(0,o.c)(6);r[0]!==e?({...t}=e,r[0]=e,r[1]=t):t=r[1];let{codestring:n}=t;r[2]===Symbol.for("react.memo_cache_sentinel")?(a=function(){},r[2]=a):a=r[2];let c=a;return r[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,s.jsx)("a",{title:"Copy to Clipboard",onClick:c,children:(0,s.jsx)("i",{className:"icon-copy"})}),r[3]=l):l=r[3],r[4]!==n?(i=(0,s.jsxs)("div",{className:"test-code-block",children:[l,(0,s.jsx)("div",{className:"code-block",children:n})]}),r[4]=n,r[5]=i):i=r[5],i}function j(e){let t,a,l,i,r;let n=(0,o.c)(25);n[0]!==e?({children:t,...a}=e,n[0]=e,n[1]=t,n[2]=a):(t=n[1],a=n[2]);let{color:c,disabled:d,fill:m,size:h,uppercase:u,border:x,maxWidth:p,minWidth:f,maxHeight:j,minHeight:g,customBGColor:v,customBorderColor:b,customColor:y,buttonClick:N,formAction:k,classNames:w}=a,S=void 0===c?"default":c,_=void 0===m?"solid":m,C=void 0===h?"medium":h,F=f?f+"px":"",A=p?p+"px":"",E=g?g+"px":"",D=j?j+"px":"";n[3]!==v||n[4]!==b||n[5]!==y||n[6]!==F||n[7]!==A||n[8]!==E||n[9]!==D?(l={minWidth:F,maxWidth:A,minHeight:E,maxHeight:D,backgroundColor:v,color:y,borderColor:b},n[3]=v,n[4]=b,n[5]=y,n[6]=F,n[7]=A,n[8]=E,n[9]=D,n[10]=l):l=n[10];let L=x?"border":"",z=u?"text-uppercase":"",P=w||"";n[11]!==S||n[12]!==_||n[13]!==C||n[14]!==z||n[15]!==P||n[16]!==L?(i=[S,_,C,L,z,P],n[11]=S,n[12]=_,n[13]=C,n[14]=z,n[15]=P,n[16]=L,n[17]=i):i=n[17];let O=i.join(" ");return n[18]!==N||n[19]!==t||n[20]!==d||n[21]!==k||n[22]!==O||n[23]!==l?(r=(0,s.jsx)("button",{style:l,className:O,onClick:N,formAction:k,disabled:d,children:t}),n[18]=N,n[19]=t,n[20]=d,n[21]=k,n[22]=O,n[23]=l,n[24]=r):r=n[24],r}function g(e){let t,{...a}=e,{}=a,[l,i]=(0,d.useState)({Label:"Button",Color:"default",Fill:"solid",Size:"medium",Uppercase:!1,Disabled:!1});function r(e,t,a){"checkbox"===e.target.type&&(a=e.target.value=e.target.checked),i(e=>({...e,[t]:a}))}return t="<Button","default"!=l.Color&&(t+=' color="'.concat(l.Color,'"')),"solid"!=l.Fill&&(t+=' fill="'.concat(l.Fill,'"')),"medium"!=l.Size&&(t+=' size="'.concat(l.Size,'"')),l.Uppercase&&(t+=' uppercase="'.concat(l.Uppercase,'"')),l.Disabled&&(t+=" disabled"),t+=">",""!=l.Label&&(t+="".concat(l.Label)),t+="</Button>",(0,s.jsx)("div",{className:"test-container",children:(0,s.jsxs)("div",{className:"test-button-two-column",children:[(0,s.jsx)("div",{className:"column1",children:(0,s.jsxs)("div",{className:"form-container",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{children:"Label"}),(0,s.jsx)("input",{className:"form-control",value:l.Label,onChange:e=>r(e,"Label",e.target.value)})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{children:"Color"}),(0,s.jsxs)("select",{className:"form-control",value:l.Color,onChange:e=>r(e,"Color",e.target.value),children:[(0,s.jsx)("option",{value:"default",children:"Default"}),(0,s.jsx)("option",{value:"success",children:"Success"}),(0,s.jsx)("option",{value:"warning",children:"Warning"}),(0,s.jsx)("option",{value:"error",children:"Error"})]})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{children:"Fill"}),(0,s.jsxs)("select",{className:"form-control",value:l.Fill,onChange:e=>r(e,"Fill",e.target.value),children:[(0,s.jsx)("option",{value:"solid",children:"Solid"}),(0,s.jsx)("option",{value:"outline",children:"Outline"}),(0,s.jsx)("option",{value:"clear",children:"Clear"})]})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{children:"Size"}),(0,s.jsxs)("select",{className:"form-control",value:l.Size,onChange:e=>r(e,"Size",e.target.value),children:[(0,s.jsx)("option",{value:"small",children:"Small"}),(0,s.jsx)("option",{value:"medium",children:"Medium"}),(0,s.jsx)("option",{value:"large",children:"Large"})]})]}),(0,s.jsx)("div",{className:"form-group",children:(0,s.jsxs)("div",{className:"toggle-switch",children:[(0,s.jsxs)("label",{className:"switch",children:[(0,s.jsx)("input",{type:"checkbox",checked:l.Uppercase,onChange:e=>r(e,"Uppercase",e.target.value)}),(0,s.jsx)("span",{className:"slider round"})]}),"Uppercase"]})}),(0,s.jsx)("div",{className:"form-group",children:(0,s.jsxs)("div",{className:"toggle-switch",children:[(0,s.jsxs)("label",{className:"switch",children:[(0,s.jsx)("input",{type:"checkbox",checked:l.Disabled,onChange:e=>r(e,"Disabled",e.target.value)}),(0,s.jsx)("span",{className:"slider round"})]}),"Disabled"]})})]})}),(0,s.jsx)("div",{className:"column2",children:(0,s.jsxs)("div",{className:"code-block-container",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Test Button"}),(0,s.jsx)(j,{color:l.Color,fill:l.Fill,size:l.Size,uppercase:l.Uppercase,disabled:l.Disabled,children:l.Label})]}),(0,s.jsxs)("div",{className:"code-container",children:[(0,s.jsx)("label",{className:"margin-top25",children:"Code"}),(0,s.jsx)(f,{codestring:t})]})]})})]})})}a(6823),a(6241),a(3912);var v=a(6929),b=a(267),y=a(6988),N=a(9103),k=a(5101);function w(){let e=(0,l._)(["radial-gradient(","  "," at "," ",", #007DBA 50%, ",")"]);return w=function(){return e},e}function S(){let e=(0,c.useRouter)(),t=["#13FFAA","#DD335C"],a=["20%","75%"],l=["75%","95%"],o=(0,v.d)(t[0]),m=(0,v.d)(a[0]),h=(0,v.d)(l[0]),x=(0,b.E)(w(),h,h,m,m,o);return(0,d.useEffect)(()=>{(0,y.i)(o,t,{ease:"easeInOut",duration:10,repeat:1/0,repeatType:"mirror"}),(0,y.i)(m,a,{ease:"easeInOut",duration:6,repeat:1/0,repeatType:"mirror"}),(0,y.i)(h,l,{ease:"easeInOut",duration:6,repeat:1/0,repeatType:"mirror"})},[]),(0,s.jsxs)("div",{className:"home-container",children:[(0,s.jsx)(N.P.section,{style:{backgroundImage:x},className:"flex relative p-[48px]",children:(0,s.jsx)("div",{className:"home-top-text box-border gap-4 lg:gap-12 flex-col items-center lg:flex-row justify-center",children:(0,s.jsxs)(k.x,{transition:{duration:.2,ease:"easeInOut"},children:[(0,s.jsx)("div",{className:"profile flex relative justify-center max-w-[500px] max-h-[500px] h-[320px] w-[320px]",children:(0,s.jsx)(N.P.div,{initial:{opacity:0,y:-20},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50},className:"profilePicContainer flex relative bg-radial-[at_25%_25%] from-white to-zinc-400 to-75% rounded-full aspect-square shadow-[#000000] drop-shadow-xl",children:(0,s.jsx)("img",{className:"max-w-[500px] max-h-[500px] rounded-full aspect-square object-cover shadow-[#000000] drop-shadow-xl bg-transparent",height:320,width:320,src:"/profile-pic.webp"})})}),(0,s.jsxs)("div",{className:"profile flex flex-col relative text-center justify-center justify-items-center lg:justify-items-start lg:text-left lg:justify-start",children:[(0,s.jsx)(N.P.h3,{initial:{opacity:0,y:-20},animate:{y:0,opacity:1},transition:{type:"spring",delay:.5,stiffness:50},className:"flex font-black text-center justify-center lg:justify-start lg:text-left",children:"Experienced Front-End Developer and UX/UI Designer with a demonstrated history of working in the marketing and HR/Payroll industries."}),(0,s.jsx)(N.P.h4,{initial:{opacity:0,y:-20},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50,delay:1},className:"flex font-medium text-center justify-center lg:justify-start lg:text-left",children:"Professional with a Bachelor's of fine art focused in Graphic Design from Georgia State University."}),(0,s.jsx)(N.P.h5,{initial:{opacity:0,y:-20},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50,delay:1.5},className:"flex font-bold items-center lg:items-left text-center justify-center justify-items-center lg:justify-items-left lg:justify-start lg:text-left",children:"Skilled in HTML, CSS, JavaScript, TypeScript, Angular, React, Figma"})]})]})})}),(0,s.jsx)("div",{className:"figma-work flex relative text-center justify-center w-auto p-[24px]",children:(0,s.jsx)("div",{className:"inner-container w-auto flex !flex-row text-center relative justify-center",children:(0,s.jsx)(N.P.h5,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut"},style:{maxWidth:500},className:"flex relative color-white font-bold text-center justify-center",children:"Building the right team contributes to the success of a product and being able to bridge the gap between design and development can take a product to the next level."})})}),(0,s.jsx)("div",{className:"saas-work flex relative p-[24px]",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsx)("p",{className:"text-center",children:"Payroll/HR SaaS application:"}),(0,s.jsx)(N.P.div,{initial:{opacity:0,y:-20},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50,duration:.2,ease:"easeInOut"},children:(0,s.jsx)(i.default,{src:"/troy-homepage-montage-01.webp",alt:"saas-examples",width:"1107",height:"532",sizes:"((max-width: 768px) 100vw, (max-height: auto) 100vh )",style:{objectFit:"contain"}})})]})}),(0,s.jsxs)("div",{className:"component-example",children:[(0,s.jsx)("p",{className:"text-center",children:"Component Library Button Example:"}),(0,s.jsxs)("p",{className:"text-center",children:["To see the full example setup and documentation ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)("a",{href:"https://troybedingfield.github.io/tb-ui/?path=/docs/components-button--docs",target:"_blank",className:"font24",children:"Storybook Link"})]}),(0,s.jsx)("br",{}),(0,s.jsx)(g,{})]}),(0,s.jsx)("div",{className:"figma-work flex relative p-[24px]",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsx)("p",{className:"text-center",children:"Workflow Designs and Design System Components from Figma"}),(0,s.jsx)(r.A,{selHeight:800,interval:6e3,automatic:!0,images:["/carousel-home/4.webp","/carousel-home/1.webp","/carousel-home/2.webp","/carousel-home/3.webp"]}),(0,s.jsx)("p",{className:"text-center",children:"Click to see more designs and prototypes of a user workflow"}),(0,s.jsx)("div",{className:"button-container",children:(0,s.jsx)(n.A,{buttonClick:()=>e.push("/design"),children:"Design"})})]})}),(0,s.jsxs)("div",{className:"marketing-work flex flex-col relative p-[36px]",children:[(0,s.jsx)("p",{className:"text-center",children:"Marketing site's I've managed and/or built:"}),(0,s.jsxs)("div",{className:"home-two-column",children:[(0,s.jsx)("div",{className:"column1",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://iloveicecreamcakes.com",target:"_blank",children:"iloveicecreamcakes.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://electrocore.com",target:"_blank",children:"electrocore.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://gammacore.com",target:"_blank",children:"gammacore.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://thiolaec.com",target:"_blank",children:"thiolaec.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://farmrich.com",target:"_blank",children:"farmrich.com"})})]})}),(0,s.jsx)("div",{className:"column2",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://emflaza.com",target:"_blank",children:"emflaza.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://ptccares.com",target:"_blank",children:"ptccares.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://thiolaechcp.com",target:"_blank",children:"thiolaechcp.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://seapak.com",target:"_blank",children:"seapak.com"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://askewmarketing.com",target:"_blank",children:"askewmarketing.com"})})]})})]})]}),(0,s.jsx)("div",{className:"contact-form flex flex-col relative p-[36px]",children:(0,s.jsx)("div",{className:"form-inner-container",children:(0,s.jsx)(u,{})})})]})}},9713:()=>{},245:()=>{},4475:()=>{},6241:()=>{},3912:()=>{},6823:()=>{},1275:()=>{},3572:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[283,78,930,873,291,735,441,75,358],()=>t(6707)),_N_E=e.O()}]);