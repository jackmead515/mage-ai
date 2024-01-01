"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2512],{82571:function(n,e,t){var o=t(21831),i=t(82394),r=t(12691),c=t.n(r),d=t(82684),l=t(34376),a=t(58036),u=t(15338),s=t(97618),f=t(55485),h=t(64888),p=t(93369),g=t(82359),m=t(38276),b=t(30160),v=t(12468),x=t(77417),y=t(72473),w=t(68899),j=t(8059),k=t(70515),I=t(86735),O=t(28598);function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var C=3*k.iI;e.Z=function(n){var e=n.aligned,t=n.navigationItems,i=n.showMore,r=n.visible,Z=(0,l.useRouter)().pathname,_=(0,x.Z)(),S=_.featureEnabled,M=_.project,E=_.projectPlatformActivated,N=(0,d.useMemo)((function(){return function(n){var e=n.featureEnabled,t=(n.project,n.projectPlatformActivated),o=[{Icon:y.$l,id:"files",label:function(){return"Files"},linkProps:{href:"/files"}},{Icon:y.zQ,id:"templates",label:function(){return"Templates"},linkProps:{href:"/templates"}},{Icon:y.Pt,id:"version-control",label:function(){return"Version control"},linkProps:{href:"/version-control"}},{Icon:y.oI,id:"terminal",label:function(){return"Terminal"},linkProps:{href:"/terminal"}},{Icon:y.Zr,id:"settings",label:function(){return"Settings"},linkProps:{href:"/settings"}}];return e(g.d.COMPUTE_MANAGEMENT)&&(o=(0,I.Hk)({Icon:y.Hm,id:"compute",label:function(){return"Compute management (beta)"},linkProps:{href:"/compute"}},4,o)),e(g.d.GLOBAL_HOOKS)&&(o=(0,I.Hk)({Icon:y.u$,id:"global-hooks",label:function(){return"Global hooks (beta)"},linkProps:{href:"/global-hooks"}},4,o),t&&(o=(0,I.Hk)({Icon:y.u$,id:"platform/global-hooks",label:function(){return"Global hooks (platform)"},linkProps:{href:"/platform/global-hooks"}},5,o))),[{id:"main",items:[{Icon:y.G6,id:"overview",label:function(){return"Overview"},linkProps:{href:"/overview"}},{Icon:y.vd,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}},{Icon:y.Bf,id:"triggers",label:function(){return"Triggers"},linkProps:{href:"/triggers"}},{Icon:y.Pf,id:"pipeline-runs",label:function(){return"Pipeline runs"},linkProps:{href:"/pipeline-runs"}},{Icon:y.ie,id:"global-data-products",label:function(){return"Global data products"},linkProps:{href:"/global-data-products"}}]},{id:"misc",items:o}]}({featureEnabled:S,project:M,projectPlatformActivated:E})}),[M]),H=(0,d.useCallback)((function(n,t){var o,d,l,a=n.Icon,u=n.IconSelected,g=n.disabled,x=n.id,y=n.isSelected,I=n.label,_=n.linkProps,S=n.onClick,M=y?y(Z,n):!!Z.match(new RegExp("^/".concat(x,"[/]*"))),E=M&&u?u:a,N=null===I||void 0===I?void 0:I(),H={primary:!E,selected:i&&M,showMore:i,withGradient:u};M&&u?(d=(0,O.jsx)("div",{style:{height:C,width:C},children:(0,O.jsx)(E,{muted:!0,size:C})}),(i||r)&&(d=(0,O.jsx)(w.E7,P(P({},H),{},{children:(0,O.jsx)(E,{muted:!0,size:C})}))),o=(0,O.jsx)(h.Z,{backgroundGradient:j.yr,backgroundPanel:!0,basic:!0,borderWidth:2,disabled:g,linkProps:_,onClick:S,paddingUnits:1,children:d}),i&&(o=d)):(!M||M&&!u)&&(d=(0,O.jsx)(w.E7,P(P({},H),{},{children:E?(0,O.jsx)(E,{muted:!M,size:C}):(0,O.jsx)(b.ZP,{children:"Edit"})})),o=(0,O.jsx)(p.ZP,{disabled:g,inline:!0,linkProps:_,noHoverUnderline:!0,noPadding:!0,onClick:S,primary:M,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(x),children:d}),i&&(o=d)),l="right"===e?(0,O.jsxs)(f.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,O.jsx)(s.Z,{flex:1,justifyContent:"flex-end",children:(0,O.jsx)(b.ZP,{noWrapping:!0,children:N})}),(0,O.jsx)(m.Z,{mr:2}),d]}):(0,O.jsxs)(f.ZP,{alignItems:"center",children:[d,(0,O.jsx)(m.Z,{mr:2}),(0,O.jsx)(s.Z,{flex:1,children:(0,O.jsx)(b.ZP,{noWrapping:!0,children:N})})]});var z,B=(0,O.jsx)(w.J8,{href:"#",onClick:S,selected:M,children:l});return _&&(B=(0,O.jsx)(c(),P(P({},_),{},{passHref:!0,children:B}))),"right"===e&&(o=(0,O.jsx)(f.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:o})),z=r?B:i?o:(0,O.jsx)(v.Z,{appearBefore:"right"===e,height:5*k.iI,label:N,size:null,widthFitContent:!0,children:o}),(0,O.jsx)(m.Z,{mt:i&&r?0:t>=1?k.cd:0,children:z},"button-".concat(x))}),[e,Z,i,r]),z=(0,d.useMemo)((function(){var n=[];return(t||N).forEach((function(e,t){var i=e.id,c=e.items;(null===c||void 0===c?void 0:c.length)>=1?(t>=1&&n.push((0,O.jsx)(m.Z,{my:r?k.cd:k.cd+1,children:(0,O.jsx)(u.Z,{light:!0})},i)),n.push.apply(n,(0,o.Z)(c.map((function(n,e){return H(n,e)}))))):n.push(H(e,t))})),n}),[H,N,t,r]);return(0,O.jsx)(a.Z,{children:z})}},68899:function(n,e,t){t.d(e,{E7:function(){return v},HS:function(){return b},Hn:function(){return y},J8:function(){return x},Nk:function(){return p},k1:function(){return h},lm:function(){return m}});var o=t(82684),i=t(38626),r=t(38276),c=t(44897),d=t(42631),l=t(46684),a=t(70515),u=t(47041),s=t(91437),f=t(28598),h=a.cd*a.iI+5*a.iI+a.cd*a.iI+1,p=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],l.Mz,l.Mz,(function(n){return"\n    background-color: ".concat((n.theme.background||c.Z.background).page,";\n  ")})),g=i.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyleComponent",componentId:"sc-ecogjt-1"})(["height:100%;"," "," "," @keyframes animate-in{0%{width:","px;}100%{width:","px;}}"," ",""],(function(n){return"\n    background-color: ".concat((n.theme.background||c.Z.background).panel,";\n  ")}),(function(n){return!n.borderless&&"right"!==n.aligned&&"\n    border-right: 1px solid ".concat((n.theme.borders||c.Z.borders).medium,";\n  ")}),(function(n){return!n.borderless&&"right"===n.aligned&&"\n    border-left: 1px solid ".concat((n.theme.borders||c.Z.borders).medium,";\n  ")}),21*a.iI,34*a.iI,(function(n){return n.showMore&&n.visible&&"\n    &:hover {\n      animation: animate-in 100ms linear forwards;\n      position: fixed;\n      z-index: 100;\n    }\n  "}),(function(n){return n.showMore&&n.visible&&"right"===n.aligned&&"\n    &:hover {\n      right: 0;\n      top: ".concat(l.Mz,"px;\n    }\n  ")}));function m(n){var e=n.aligned,t=n.borderless,i=n.children,c=n.showMore,d=(0,o.useRef)(null),l=(0,o.useState)(!1),u=l[0],s=l[1];return(0,f.jsx)(g,{aligned:e,borderless:t&&!u,onMouseEnter:c?function(){clearTimeout(d.current),d.current=setTimeout((function(){s(!0)}),300)}:null,onMouseLeave:c?function(){clearTimeout(d.current),s(!1)}:null,showMore:c,visible:u,children:(0,f.jsx)(r.Z,{px:c&&u?0:a.cd,py:c&&u?1:a.cd,children:o.cloneElement(i,{showMore:c,visible:u})})})}var b=i.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["position:sticky;top:0;width:100%;z-index:3;"," ",""],(function(n){return"\n    background-color: ".concat((n.theme.background||c.Z.background).page,";\n    border-bottom: 1px solid ").concat((n.theme.borders||c.Z.borders).light,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding: ".concat(a.cd*a.iI,"px;\n  ")})),v=(i.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],u.w5,(function(n){return"\n    height: calc(100vh - ".concat(l.Mz+(n.heightOffset||0),"px);\n  ")})),i.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["align-items:center;border-radius:","px;display:flex;height:","px;justify-content:center;padding:","px;width:","px;"," "," "," ",""],d.n_,5*a.iI,a.iI,5*a.iI,(function(n){return n.primary&&"\n    ".concat((0,s.eR)(),"\n    background: ").concat((n.theme||c.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((n.theme||c.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((n.theme||c.Z).interactive.linkSecondary,";\n    }\n  ")}),(function(n){return n.selected&&!n.withGradient&&"\n    background-color: ".concat((n.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.selected&&n.withGradient&&"\n    background-color: ".concat((n.theme.background||c.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.selected&&n.showMore&&"\n    background-color: ".concat((n.theme.interactive||c.Z.interactive).defaultBackground,";\n  ")}))),x=i.default.a.withConfig({displayName:"indexstyle__NavigationLinkStyle",componentId:"sc-ecogjt-5"})([""," display:block;padding:","px ","px;"," ",""],(0,s.eR)(),1*a.iI,a.iI*a.cd,(function(n){return!n.selected&&"\n    &:hover {\n      background-color: ".concat((n.theme.interactive||c.Z.interactive).hoverBackground,";\n    }\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||c.Z.interactive).linkPrimaryHover,";\n  ")})),y=i.default.div.withConfig({displayName:"indexstyle__ImageStyle",componentId:"sc-ecogjt-6"})(["background-position:0 0;background-repeat:no-repeat;background-size:contain;height:","px;width:","px;"," ",""],12*a.iI,12*a.iI,(function(n){return"\n    background-image: url(".concat(n.imageUrl,");\n  ")}),(function(n){return n.size&&"\n    height: ".concat(n.size,"px;\n    width: ").concat(n.size,"px;\n  ")}))},2842:function(n,e,t){t.d(e,{E$:function(){return _},MK:function(){return x},MP:function(){return Z},Md:function(){return u},OM:function(){return m},On:function(){return W},PZ:function(){return v},Ru:function(){return P},S9:function(){return B},VW:function(){return h},W7:function(){return k},Wi:function(){return g},YJ:function(){return O},Zj:function(){return N},Zt:function(){return a},aH:function(){return E},bC:function(){return H},dN:function(){return s},ff:function(){return C},l8:function(){return p},lU:function(){return z},rS:function(){return M},uX:function(){return b},v7:function(){return S},ve:function(){return f},ym:function(){return I}});var o=t(38626),i=t(44897),r=t(42631),c=t(46684),d=t(70515),l=t(47041),a=64*d.iI,u=30*d.iI,s=21.25*d.iI,f=35*d.iI,h=.5*d.iI,p=13*d.iI,g=3*d.cd*d.iI,m=6*d.iI,b=2*d.cd*3*d.iI,v=o.default.div.withConfig({displayName:"indexstyle__InlineContainerStyle",componentId:"sc-1lxpneo-0"})(["position:relative;",""],(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),x=(o.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-1lxpneo-1"})(["position:fixed;z-index:3;"," "," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.monotone||i.Z.monotone).grey200,";\n  ")}),(function(n){return!n.beforeVisible&&"\n    width: 100%;\n  "}),(function(n){return n.beforeVisible&&"\n    left: ".concat(f,"px;\n    width: calc(100% - ").concat(f,"px);\n  ")})),o.default.div.withConfig({displayName:"indexstyle__NewHeaderStyle",componentId:"sc-1lxpneo-2"})(["height:","px;position:fixed;top:0;width:100%;z-index:4;"],c.Mz)),y=(o.default.div.withConfig({displayName:"indexstyle__TabStyle",componentId:"sc-1lxpneo-3"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;position:relative;top:1px;"," "," ",""],r.n_,r.n_,1*d.iI,2*d.iI,(function(n){return"\n    border-left: 1px solid ".concat((n.theme.monotone||i.Z.monotone).grey200,";\n    border-right: 1px solid ").concat((n.theme.monotone||i.Z.monotone).grey200,";\n    border-top: 1px solid ").concat((n.theme.monotone||i.Z.monotone).grey200,";\n  ")}),(function(n){return!n.first&&"\n    margin-left: ".concat(1*d.iI,"px;\n  ")}),(function(n){return n.selected&&"\n    border-bottom: 1px solid ".concat((n.theme.monotone||i.Z.monotone).white,";\n  ")})),(0,o.css)(["z-index:2;"," "," ",""],(function(n){return"\n    height: calc(100% - ".concat("undefined"===typeof n.heightOffset?b:n.heightOffset,"px);\n  ")}),(function(n){return n.inline&&"\n    position: absolute;\n  "}),(function(n){return!n.inline&&"\n    background-color: ".concat((n.theme.background||i.Z.background).panel,";\n    position: fixed;\n    top: ").concat("undefined"===typeof n.heightOffset?b:n.heightOffset,"px;\n  ")}))),w=(0,o.css)([""," height:100%;overflow:auto;position:relative;z-index:2;",""],l.w5,(function(n){return"undefined"!==typeof n.verticalOffset&&null!==n.verticalOffset&&"\n    height: calc(100% - ".concat(n.verticalOffset+(n.heightOffset||0),"px);\n    top: ").concat(n.verticalOffset,"px;\n  ")})),j=(0,o.css)(["position:absolute;width:","px;z-index:6;&:hover{","}"," "," ",""],h,(function(n){return!n.disabled&&"\n      border-color: ".concat((n.theme.text||i.Z.text).fileBrowser," !important;\n    ")}),(function(n){return"\n    height: calc(100% + ".concat((null===n||void 0===n?void 0:n.top)||0,"px);\n    top: -").concat((null===n||void 0===n?void 0:n.top)||0,"px;\n  ")}),(function(n){return!n.disabled&&"\n    cursor: col-resize;\n  "}),(function(n){return n.active&&!n.disabled&&"\n    border-color: ".concat((n.theme.text||i.Z.text).fileBrowser," !important;\n  ")})),k=o.default.div.withConfig({displayName:"indexstyle__AsideHeaderStyle",componentId:"sc-1lxpneo-4"})(["border-bottom:1px solid transparent;height:","px;z-index:4;"," "," "," "," ",""],m,(0,l.y$)(),(function(n){return"\n    background-color: ".concat((n.theme.background||i.Z.background).panel,";\n    top: ").concat((null===n||void 0===n?void 0:n.top)||0,"px;\n  ")}),(function(n){return!n.visible&&"\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-bottom-color: ".concat((n.theme.borders||i.Z.borders).medium," !important;\n  ")}),(function(n){return n.contained&&"\n    border-left-color: ".concat((n.theme.borders||i.Z.borders).medium," !important;\n  ")}),(function(n){return!n.inline&&"\n    position: fixed;\n  "})),I=o.default.div.withConfig({displayName:"indexstyle__AsideHeaderInnerStyle",componentId:"sc-1lxpneo-5"})(["display:flex;flex:1;overflow:auto;padding:0 ","px;"," ",""],2*d.iI,(0,l.y$)(),(function(n){return n.noPadding&&"\n    padding: 0;\n  "})),O=o.default.div.withConfig({displayName:"indexstyle__AsideSubheaderStyle",componentId:"sc-1lxpneo-6"})(["border-bottom:1px solid transparent;height:","px;overflow-x:auto;position:absolute;top:","px;"," "," ",""],g,g,(0,l.y$)(),(function(n){return"\n    background-color: ".concat((n.theme.background||i.Z.background).table,";\n  ")}),(function(n){return!n.visible&&"\n    border-color: ".concat((n.theme.borders||i.Z.borders).medium," !important;\n  ")})),Z=o.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-1lxpneo-7"})([""," left:0;"],y),P=o.default.div.withConfig({displayName:"indexstyle__BeforeInnerStyle",componentId:"sc-1lxpneo-8"})([""," overflow:hidden;&:hover{overflow:auto;}",""],w,(function(n){return n.contained&&"\n    border-left: 1px solid ".concat((n.theme.borders||i.Z.borders).medium," !important;\n  ")})),C=o.default.aside.withConfig({displayName:"indexstyle__AfterStyle",componentId:"sc-1lxpneo-9"})([""," right:0;"],y),_=o.default.div.withConfig({displayName:"indexstyle__AfterInnerStyle",componentId:"sc-1lxpneo-10"})([""," "," ",""],w,(function(n){return n.overflow&&"\n    overflow: ".concat(n.overflow,";\n  ")}),(function(n){return n.heightMinus&&"\n    height: calc(100% - ".concat(n.heightMinus,"px);\n  ")})),S=o.default.div.withConfig({displayName:"indexstyle__DraggableStyle",componentId:"sc-1lxpneo-11"})([""," "," "," "," ",""],j,(function(n){return"undefined"!==typeof n.left&&"\n    border-left-style: solid;\n    border-left-width: 1px;\n    left: ".concat(n.left,"px;\n  ")}),(function(n){return"undefined"!==typeof n.right&&"\n    border-right-style: solid;\n    border-right-width: 1px;\n    right: ".concat(n.right,"px;\n  ")}),(function(n){return!n.contrast&&"\n    border-color: ".concat((n.theme.borders||i.Z.borders).medium,";\n  ")}),(function(n){return n.contrast&&"\n    border-color: ".concat((n.theme.borders||i.Z.borders).light,";\n  ")})),M=o.default.div.withConfig({displayName:"indexstyle__MainWrapper",componentId:"sc-1lxpneo-12"})(["height:100%;z-index:1;",""],(function(n){return"\n    background-color: ".concat((n.theme.background||i.Z.background).codeArea,";\n    position: ").concat(n.inline?"absolute":"fixed",";\n  ")})),E=o.default.div.withConfig({displayName:"indexstyle__MainContentStyle",componentId:"sc-1lxpneo-13"})(["z-index:2;"," ",""],(function(n){return"\n    height: calc(100% - ".concat((n.headerOffset||0)+(n.footerOffset||0),"px);\n    position: ").concat(n.inline?"relative":"fixed",";\n  ")}),(function(n){return!n.inline&&"\n    top: ".concat(n.headerOffset||0,"px;\n  ")})),N=o.default.div.withConfig({displayName:"indexstyle__MainContentInnerStyle",componentId:"sc-1lxpneo-14"})([""," height:100%;overflow:auto;"],l.w5),H=o.default.div.withConfig({displayName:"indexstyle__NavigationStyle",componentId:"sc-1lxpneo-15"})(["position:relative;"]),z=o.default.div.withConfig({displayName:"indexstyle__NavigationInnerStyle",componentId:"sc-1lxpneo-16"})(["height:100%;position:fixed;z-index:6;"," ",""],(function(n){return"left"===n.aligned&&"\n    border-right: 1px solid ".concat((n.theme.borders||i.Z.borders).medium,";\n    left: 0;\n  ")}),(function(n){return"right"===n.aligned&&"\n    border-left: 1px solid ".concat((n.theme.borders||i.Z.borders).medium,";\n    right: 0;\n  ")})),B=o.default.div.withConfig({displayName:"indexstyle__NavigationContainerStyle",componentId:"sc-1lxpneo-17"})([""," overflow:auto;position:absolute;width:fit-content;"," "," "," ",""],l.w5,(function(n){return"\n    height: calc(100vh - ".concat(n.heightOffset,"px);\n  ")}),(function(n){return n.fullWidth&&"\n    width: calc(100% - ".concat(n.widthOffset||0,"px);\n  ")}),(function(n){return n.widthOffset&&"left"===n.aligned&&"\n    left: ".concat(n.widthOffset,"px;\n  ")}),(function(n){return n.widthOffset&&"right"===n.aligned&&"\n    right: ".concat(n.widthOffset,"px;\n  ")})),W=o.default.div.withConfig({displayName:"indexstyle__AsideFooterStyle",componentId:"sc-1lxpneo-18"})(["border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;position:fixed;z-index:3;"," "," "," "," ",""],(function(n){return"\n    border-top-color: ".concat((n.theme.borders||i.Z.borders).medium," !important;\n  ")}),(function(n){return!n.inline&&"\n    background-color: ".concat((n.theme.background||i.Z.background).panel,";\n  ")}),(function(n){return n.contained&&"\n    border-left-color: ".concat((n.theme.borders||i.Z.borders).medium," !important;\n  ")}),(function(n){return("undefined"===typeof n.bottom||null===n.bottom)&&"\n    bottom: 0;\n  "}),(function(n){return"undefined"!==typeof n.bottom&&null!==n.bottom&&"\n    bottom: ".concat(n.bottom,"px;\n  ")}))},62547:function(n,e,t){var o=t(82684),i=t(1887),r=t.n(i),c=t(71180),d=t(58036),l=t(97618),a=t(55485),u=t(38276),s=t(12468),f=t(82571),h=t(2842),p=t(72473),g=t(53808),m=t(70515),b=t(68899),v=t(19183),x=t(28598);e.Z=function(n){var e=n.after,t=n.afterDividerContrast,i=n.afterFooter,y=n.afterFooterBottomOffset,w=n.afterHeader,j=n.afterHeaderOffset,k=n.afterHeightOffset,I=n.afterHidden,O=n.afterInnerHeightMinus,Z=n.afterMousedownActive,P=n.afterNavigationItems,C=n.afterOverflow,_=n.afterSubheader,S=n.afterWidth,M=void 0===S?0:S,E=n.before,N=n.beforeContentHeightOffset,H=n.beforeDividerContrast,z=n.beforeFooter,B=n.beforeHeader,W=n.beforeHeaderOffset,F=n.beforeHeightOffset,A=n.beforeHidden,D=n.beforeMousedownActive,L=n.beforeNavigationItems,R=n.beforeWidth,T=void 0===R?0:R,G=n.children,U=n.contained,V=n.footerOffset,$=n.header,X=n.headerOffset,K=void 0===X?0:X,q=n.height,J=n.hideAfterCompletely,Q=n.hideBeforeCompletely,Y=n.inline,nn=n.leftOffset,en=void 0===nn?0:nn,tn=n.mainContainerFooter,on=n.mainContainerHeader,rn=n.mainContainerRef,cn=n.navigationShowMore,dn=n.setAfterHidden,ln=n.setAfterMousedownActive,an=n.setAfterWidth,un=n.setBeforeHidden,sn=n.setBeforeMousedownActive,fn=n.setBeforeWidth,hn=n.uuid,pn=(0,v.i)().width,gn=(0,o.useRef)(null),mn=(0,o.useRef)(null),bn=(0,o.useRef)(null),vn=(0,o.useRef)(null),xn=(0,o.useCallback)((function(){var n=!I;null===dn||void 0===dn||dn(n),(0,g.t8)(hn||g.zg,n)}),[I,dn,hn]),yn=(0,o.useCallback)((function(){var n=!A;null===un||void 0===un||un(n),(0,g.t8)(hn||g.Uu,n)}),[A,un,hn]);(0,o.useEffect)((function(){var n,e,t,o,i=function(n){var e,t;((null===bn||void 0===bn||null===(e=bn.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e))||{}).x;if(pn){var o=n.x;o+h.l8>pn-(I?0:M)&&(o=pn-(I?0:M)-h.l8),o-=2*en,fn(Math.max(o,h.dN))}},r=function(n){var e,t;n.offsetX>=n.target.offsetWidth-h.VW&&n.offsetX<=n.target.offsetWidth+h.VW&&(null===sn||void 0===sn||sn(!0),n.preventDefault(),null===(e=document)||void 0===e||null===(t=e.addEventListener)||void 0===t||t.call(e,"mousemove",i,!1))},c=function(){var n,e;null===sn||void 0===sn||sn(!1),null===(n=document)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousemove",i,!1)};return null===vn||void 0===vn||null===(n=vn.current)||void 0===n||null===(e=n.addEventListener)||void 0===e||e.call(n,"mousedown",r,!1),null===(t=document)||void 0===t||null===(o=t.addEventListener)||void 0===o||o.call(t,"mouseup",c,!1),function(){var n,e,t,o;null===vn||void 0===vn||null===(n=vn.current)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousedown",r,!1),null===(t=document)||void 0===t||null===(o=t.removeEventListener)||void 0===o||o.call(t,"mouseup",c,!1),c()}}),[I,M,A,en,bn,vn,sn,fn,pn]),(0,o.useEffect)((function(){var n,e,t,o,i=function(n){var e,t;((null===gn||void 0===gn||null===(e=gn.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e))||{}).x;if(pn){var o=pn-n.x;o+h.l8>pn-(A?0:T)&&(o=pn-(A?0:T)-h.l8),an(Math.max(o,h.Md))}},r=function(n){var e,t;n.offsetX>=-1*h.VW&&n.offsetX<=h.VW&&(null===ln||void 0===ln||ln(!0),n.preventDefault(),null===(e=document)||void 0===e||null===(t=e.addEventListener)||void 0===t||t.call(e,"mousemove",i,!1))},c=function(){var n,e;null===ln||void 0===ln||ln(!1),null===(n=document)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousemove",i,!1)};return null===mn||void 0===mn||null===(n=mn.current)||void 0===n||null===(e=n.addEventListener)||void 0===e||e.call(n,"mousedown",r,!1),null===(t=document)||void 0===t||null===(o=t.addEventListener)||void 0===o||o.call(t,"mouseup",c,!1),function(){var n,e,t,o;null===mn||void 0===mn||null===(n=mn.current)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousedown",r,!1),null===(t=document)||void 0===t||null===(o=t.removeEventListener)||void 0===o||o.call(t,"mouseup",c,!1),c()}}),[I,A,T,gn,mn,ln,an,pn]);var wn=J&&I,jn=wn?0:I?4*m.iI:M,kn=Q&&A?0:A?4*m.iI:T,In="calc(100% - ".concat(kn+jn+en,"px)"),On=(0,o.useMemo)((function(){return(null===P||void 0===P?void 0:P.length)>=1}),[P]),Zn=(0,o.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(dn||w)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.W7,{inline:Y,style:{width:On?jn-(b.k1-1):jn},top:U?K:h.Wi,visible:I,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:[(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(u.Z,{pl:I?1:2}),(0,x.jsxs)(c.ZP,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return xn()},children:[I&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI}),!I&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI})]})]}),!I&&w]})}),!I&&_&&(0,x.jsx)(h.YJ,{style:{width:On?jn-(b.k1+1):jn},visible:I,children:_})]}),(0,x.jsx)(h.E$,{heightMinus:O,noScrollbarTrackBackground:!0,overflow:C,ref:gn,verticalOffset:w?_?h.Wi+k:j||k:null,children:!I&&e}),i&&!I&&(0,x.jsx)(h.On,{bottom:Y?y:null,inline:Y,style:{overflow:I?"visible":"hidden",width:jn},children:i})]})}),[e,i,y,w,j,k,I,C,_,jn,U,On,K,Y,gn,dn,xn]),Pn=(0,o.useMemo)((function(){return(null===L||void 0===L?void 0:L.length)>=1}),[L]),Cn=(0,o.useRef)(null),_n=(0,o.useMemo)((function(){var n=null,e="undefined"!==typeof N&&null!==N;if("undefined"!==typeof z&&null!==z||e){var t,o;if(n=0,z)n+=(null===Cn||void 0===Cn||null===(t=Cn.current)||void 0===t||null===(o=t.getBoundingClientRect())||void 0===o?void 0:o.height)||0;e&&(n+=N||0)}return n}),[z,N]),Sn=(0,o.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(un||B)&&(0,x.jsx)(h.W7,{contained:U,inline:Y,style:{overflow:A?"visible":"hidden",width:Pn?kn-(b.k1+2):kn},top:U?K:h.Wi,visible:A,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,justifyContent:"space-between",children:[(0,x.jsxs)(h.ym,{noPadding:!0,children:[(0,x.jsx)(u.Z,{pl:A?1:0}),!A&&B]}),(0,x.jsxs)(l.Z,{children:[un&&(0,x.jsx)(s.Z,{appearAbove:!A,appearBefore:!A,block:!0,label:A?"Show sidebar":"Hide sidebar",size:null,widthFitContent:!0,children:(0,x.jsxs)(c.ZP,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return yn()},children:[A&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI}),!A&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI})]})},A?"before-is-hidden":"before-is-visible"),(0,x.jsx)(u.Z,{pr:A?1:2})]})]})}),(0,x.jsx)(h.Ru,{contained:U&&!Y,heightOffset:_n,noScrollbarTrackBackground:!0,ref:bn,verticalOffset:B?W||F:null,children:!A&&E}),z&&(0,x.jsx)(h.On,{contained:U,ref:Cn,style:{overflow:A?"visible":"hidden",width:kn},children:z})]})}),[E,_n,z,Cn,B,W,F,A,kn,U,K,Pn,Y,bn,un,yn]),Mn=(0,o.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(Z&&!I||D&&!A)&&(0,x.jsx)(r(),{children:(0,x.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                body {\n                  cursor: col-resize;\n                }\n              "}})}),$&&(0,x.jsx)(h.MK,{children:$}),E&&(0,x.jsxs)(h.MP,{heightOffset:F,inline:Y,style:{left:en,width:kn},children:[(0,x.jsx)(h.v7,{active:D,disabled:A,contrast:H,ref:vn,right:0,top:U?0:h.Wi}),Pn&&(0,x.jsxs)(h.bC,{children:[!A&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"left",children:(0,x.jsx)(b.lm,{aligned:"left",borderless:!0,showMore:cn,children:(0,x.jsx)(f.Z,{aligned:"left",navigationItems:L})})}),(0,x.jsx)(h.S9,{aligned:"left",fullWidth:!0,heightOffset:F,widthOffset:b.k1+1,children:Sn})]}),A&&Sn]}),!Pn&&Sn]}),(0,x.jsxs)(h.rS,{inline:Y,style:{left:kn+en,width:In},children:[on?"function"===typeof on?null===on||void 0===on?void 0:on({widthOffset:kn+jn+en}):on:null,(0,x.jsx)(h.aH,{headerOffset:U?K:(on?h.uX:h.Wi)+K,footerOffset:V,inline:Y,style:{width:Y?null:In},children:(0,x.jsx)(h.Zj,{noScrollbarTrackBackground:!0,ref:rn,children:G})}),tn]}),e&&!wn&&(0,x.jsxs)(h.ff,{heightOffset:k,inline:Y,style:{width:jn},children:[(0,x.jsx)(h.v7,{active:Z,contrast:t,disabled:I,left:0,ref:mn,top:U?0:h.Wi}),On&&(0,x.jsxs)(h.bC,{children:[!I&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"right",children:(0,x.jsx)(b.lm,{aligned:"right",borderless:!0,showMore:cn,children:(0,x.jsx)(f.Z,{aligned:"right",navigationItems:P})})}),(0,x.jsx)(h.S9,{aligned:"right",fullWidth:!0,heightOffset:k,widthOffset:b.k1+1,children:Zn})]}),I&&Zn]}),!On&&Zn]})]})}),[e,Zn,t,k,I,Z,P,jn,Sn,H,F,A,D,L,kn,G,U,V,On,Pn,$,K,Y,en,tn,on,rn,In,cn,mn,vn,wn]);return(0,x.jsxs)(d.Z,{children:[Y&&(0,x.jsx)(h.PZ,{height:q,children:Mn}),!Y&&Mn]})}},64888:function(n,e,t){var o=t(82394),i=t(26304),r=t(38626),c=t(71180),d=t(44897),l=t(42631),a=t(8059),u=t(70515),s=t(28598),f=["backgroundGradient","backgroundPanel","borderWidth","children","compact","paddingUnits","paddingUnitsHorizontal","paddingUnitsVertical"];function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=r.default.div.withConfig({displayName:"GradientButton__ButtonContentStyle",componentId:"sc-1gzx4r1-0"})(["border-radius:","px;height:fit-content;"," ",""],l.n_,(function(n){return!n.backgroundPanel&&"\n    background-color: ".concat((n.theme.background||d.Z.background).page,";\n  ")}),(function(n){return n.backgroundPanel&&"\n    background-color: ".concat((n.theme.background||d.Z.background).panel,";\n  ")}));e.Z=function(n){var e=n.backgroundGradient,t=void 0===e?a.TD:e,o=n.backgroundPanel,r=n.borderWidth,d=void 0===r?1:r,l=n.children,h=n.compact,m=n.paddingUnits,b=n.paddingUnitsHorizontal,v=void 0===b?1.5:b,x=n.paddingUnitsVertical,y=void 0===x?1.25:x,w=(0,i.Z)(n,f),j=v,k=y;return m&&(j=m,k=m),h&&(j*=.75,k*=.75),(0,s.jsx)(c.ZP,p(p({},w),{},{backgroundGradient:t,noPadding:!0,padding:"".concat(d,"px"),pointerEventsEnabled:!0,children:(0,s.jsx)(g,{backgroundPanel:o,children:(0,s.jsx)("div",{style:{paddingBottom:k*u.iI-d,paddingLeft:j*u.iI-d,paddingRight:j*u.iI-d,paddingTop:k*u.iI-d},children:l})})}))}},24944:function(n,e,t){t.d(e,{HL:function(){return l},lZ:function(){return a},qZ:function(){return d}});var o=t(38626),i=t(44897),r=t(42631),c=t(70515),d=o.default.div.withConfig({displayName:"indexstyle__DividerContainerStyle",componentId:"sc-uiq3r3-0"})([""," ",""],(function(n){return n.short&&"\n    width: ".concat(21*c.iI,"px;\n  ")}),(function(n){return!n.short&&"\n    width: 100%;\n  "})),l=o.default.div.withConfig({displayName:"indexstyle__DividerStyle",componentId:"sc-uiq3r3-1"})(["height:1px;"," "," "," "," "," ",""],(function(n){return!(n.light||n.medium)&&"\n    background-color: ".concat((n.theme.monotone||i.Z.monotone).grey200,";\n  ")}),(function(n){return n.muted&&"\n    background-color: ".concat((n.theme.monotone||i.Z.monotone).grey500,";\n  ")}),(function(n){return n.light&&"\n    background-color: ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.medium&&"\n    background-color: ".concat((n.theme.borders||i.Z.borders).medium,";\n  ")}),(function(n){return n.prominent&&"\n    background-color: ".concat((n.theme.monotone||i.Z.monotone).grey300,";\n  ")}),(function(n){return n.black&&"\n    background-color: ".concat((n.theme.monotone||i.Z.monotone).black,";\n  ")})),a=o.default.div.withConfig({displayName:"indexstyle__VerticalDividerStyle",componentId:"sc-uiq3r3-2"})(["width:1px;align-self:stretch;"," ",""],(function(n){return"\n    border-left: ".concat(r.YF,"px ").concat(r.M8," ").concat((n.theme||i.Z).interactive.defaultBorder,";\n  ")}),(function(n){var e=n.right;return"number"===typeof e&&"\n    position: relative;\n    right: ".concat(e,"px;\n  ")}))},15338:function(n,e,t){var o=t(82394),i=t(26304),r=(t(82684),t(38276)),c=t(24944),d=t(28598),l=["short"];function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.short,t=void 0!==e&&e,o=(0,i.Z)(n,l);return(0,d.jsx)(c.qZ,{short:t,children:(0,d.jsx)(r.Z,u(u({},o),{},{children:(0,d.jsx)(c.HL,u({},o))}))})}},8059:function(n,e,t){t.d(e,{eW:function(){return b},Hv:function(){return d},FI:function(){return p},Sr:function(){return l},rK:function(){return h},TD:function(){return a},R2:function(){return u},AK:function(){return s},yr:function(){return m},J:function(){return f},RK:function(){return g}});var o=t(79633),i="#FF144D",r="#DEBB92",c="#2A60FE",d="linear-gradient(90deg, #4F49F1, #A260F5)",l="linear-gradient(90deg, ".concat(r,", ").concat("#CBFE00",")"),a="linear-gradient(90deg, ".concat(i,", #C86DD7)"),u="linear-gradient(90deg, ".concat("#95ECE2",", ").concat(c,")"),s="linear-gradient(90deg, ".concat("#9B6CA7",", ").concat(r,")"),f="linear-gradient(90deg, ".concat("#C72400",", ").concat(r,")"),h="linear-gradient(100.38deg, ".concat(i," 41.11%, #FF9559 86.99%)"),p="linear-gradient(100.38deg, #37A46F 41.11%, #67B2F8 86.99%)",g=("linear-gradient(100.38deg, ".concat("#6B50D7"," 41.11%, #677FFF 86.99%)"),"linear-gradient(100.38deg, ".concat(c," 41.11%, #B880FF 86.99%)")),m="linear-gradient(90deg, ".concat(o.t4," 20.13%, #2AB2FE)"),b="linear-gradient(90deg, ".concat(o.Ck," 0%, ").concat(o.t4," 53.13%, ").concat(o.X_," 100%)")},98464:function(n,e,t){var o=t(82684);e.Z=function(n){var e=(0,o.useRef)();return(0,o.useEffect)((function(){e.current=n}),[n]),e.current}}}]);