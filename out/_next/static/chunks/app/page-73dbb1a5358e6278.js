(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3784:function(e,r,t){Promise.resolve().then(t.bind(t,6590)),Promise.resolve().then(t.bind(t,4166)),Promise.resolve().then(t.bind(t,5955)),Promise.resolve().then(t.bind(t,5585)),Promise.resolve().then(t.t.bind(t,5878,23))},6590:function(e,r,t){"use strict";t.d(r,{Contact:function(){return h}});var a=t(7437),n=t(2869),s=t(2265),i=t(4508);let o=s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});o.displayName="Card";let l=s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...n})});l.displayName="CardHeader";let d=s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});d.displayName="CardTitle";let c=s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...n})});c.displayName="CardDescription";let u=s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...n})});u.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...n})}).displayName="CardFooter";let A=s.forwardRef((e,r)=>{let{className:t,type:n,...s}=e;return(0,a.jsx)("input",{type:n,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});A.displayName="Input";let f=s.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});f.displayName="Textarea";var g=t(4743),m=t(2926);function h(){let[e,r]=(0,s.useState)({name:"",email:"",message:""}),[t,i]=(0,s.useState)(""),h=t=>{r({...e,[t.target.name]:t.target.value})},b=async t=>{t.preventDefault(),i("Sending...");let a="service_ut64wpv",n="template_ei2neia",s="HgIAtj31uZCTafjr6";if(!a||!n||!s){i("Failed to send the message. Missing email service configuration.");return}try{await m.ZP.send(a,n,e,s),i("Message sent successfully!"),r({name:"",email:"",message:""})}catch(e){console.error("Error sending email:",e),i("Failed to send the message. Please try again.")}};return(0,a.jsx)("section",{id:"contact",className:"py-24",children:(0,a.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,a.jsxs)(o,{children:[(0,a.jsxs)(l,{className:"text-center",children:[(0,a.jsx)(d,{className:"text-3xl font-bold",children:"Get in Touch"}),(0,a.jsx)(c,{children:"Have a question or want to work together? Drop me a message!"})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)("form",{className:"space-y-6",onSubmit:b,children:[(0,a.jsx)("div",{className:"space-y-2",children:(0,a.jsx)(A,{name:"name",placeholder:"Your Name",value:e.name,onChange:h,required:!0})}),(0,a.jsx)("div",{className:"space-y-2",children:(0,a.jsx)(A,{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:h,required:!0})}),(0,a.jsx)("div",{className:"space-y-2",children:(0,a.jsx)(f,{name:"message",placeholder:"Your Message",className:"min-h-[150px]",value:e.message,onChange:h,required:!0})}),(0,a.jsxs)(n.z,{className:"w-full",type:"submit",children:[(0,a.jsx)(g.Z,{className:"h-4 w-4 mr-2"}),"Send Message"]})]}),t&&(0,a.jsx)("p",{className:"text-center mt-4 text-sm  text-green-600",children:t})]})]})})})}},2869:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var a=t(7437),n=t(2265),s=t(7053),i=t(7712),o=t(4508);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:n,size:i,className:t})),ref:r,...c})});d.displayName="Button"},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var a=t(1994),n=t(3335);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.m6)((0,a.W)(r))}},4166:function(e,r,t){"use strict";t.r(r),r.default={src:"/_next/static/media/1.7b37fd95.png",height:833,width:1902,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEXz9vj4+fr+/v7O0+To6vLe4uyqtNM7h242AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIUlEQVR4nBXBhw0AAAjDsHTA/ycjbMpT6FROTJDdhdGDAwR1AD2akpE6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},5955:function(e,r,t){"use strict";t.r(r),r.default={src:"/_next/static/media/credit.751689d5.png",height:872,width:1728,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX////19PXq6+zq7vXJ0Ofj6/z59O75+fejsdmYp8/X1uFEHB9lAAAACXBIWXMAABJ0AAASdAHeZh94AAAAIUlEQVR4nGNggAFGJiZGBiYWVgZ2ZmYGLg5OFogoKxsbAAP2AFBcrrxXAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},5585:function(e,r,t){"use strict";t.r(r),r.default={src:"/_next/static/media/ebooking.d78bef03.png",height:871,width:1722,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEV2kLOlp6hukatejMxhjq2os7lhpcuCvvh7nbKIv+tkj8ltmrLW5eaAob9jibqu4Oq+3+ie1e2Ascra0cpGj7JUoMnDt7Jyl5nHAAAACXBIWXMAABJ0AAASdAHeZh94AAAAK0lEQVR4nAXBhwEAIAgDsKog4N7/n2qCc2M0E4FjXnOUjv0coDVDiTxaCh8XMgEmR+1mtQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[317,115,971,117,744],function(){return e(e.s=3784)}),_N_E=e.O()}]);