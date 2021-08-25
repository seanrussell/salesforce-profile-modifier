var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t,n,l){return e[1]&&l?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](l(t))):n.ctx}function i(e,t,n,l,a,o,i){const c=function(e,t,n,l){if(e[2]&&l){const a=e[2](l(n));if(void 0===t.dirty)return a;if("object"==typeof a){const e=[],n=Math.max(t.dirty.length,a.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|a[l];return e}return t.dirty|a}return t.dirty}(t,l,a,o);if(c){const a=s(t,n,l,i);e.p(a,c)}}function c(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function p(){return m(" ")}function h(){return m("")}function v(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}function w(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}function y(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];l.selected=~t.indexOf(l.__value)}}let _;function x(e){_=e}function j(){if(!_)throw new Error("Function called outside component initialization");return _}const O=[],k=[],E=[],M=[],q=Promise.resolve();let P=!1;function F(e){E.push(e)}function R(e){M.push(e)}let I=!1;const A=new Set;function S(){if(!I){I=!0;do{for(let e=0;e<O.length;e+=1){const t=O[e];x(t),C(t.$$)}for(x(null),O.length=0;k.length;)k.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];A.has(t)||(A.add(t),t())}E.length=0}while(O.length);for(;M.length;)M.pop()();P=!1,I=!1,A.clear()}}function C(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const L=new Set;let z;function N(){z={r:0,c:[],p:z}}function D(){z.r||l(z.c),z=z.p}function T(e,t){e&&e.i&&(L.delete(e),e.i(t))}function B(e,t,n,l){if(e&&e.o){if(L.has(e))return;L.add(e),z.c.push((()=>{L.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function V(e,t,n){const l=e.$$.props[t];void 0!==l&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function X(e){e&&e.c()}function H(e,n,o,s){const{fragment:i,on_mount:c,on_destroy:r,after_update:u}=e.$$;i&&i.m(n,o),s||F((()=>{const n=c.map(t).filter(a);r?r.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(F)}function Y(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(O.push(e),P||(P=!0,q.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,a,o,s,i,c,r=[-1]){const d=_;x(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:a.context||[]),callbacks:n(),dirty:r,skip_bound:!1};let m=!1;if(f.ctx=o?o(t,a.props||{},((e,n,...l)=>{const a=l.length?l[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=a)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](a),m&&G(t,e)),n})):[],f.update(),m=!0,l(f.before_update),f.fragment=!!s&&s(f.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();a.intro&&T(t.$$.fragment),H(t,a.target,a.anchor,a.customElement),S()}x(d)}class K{$destroy(){Y(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Q(t){let n;return{c(){n=f("div"),n.innerHTML='<div class="rect1 svelte-182yr1c"></div> \n    <div class="rect2 svelte-182yr1c"></div> \n    <div class="rect3 svelte-182yr1c"></div> \n    <div class="rect4 svelte-182yr1c"></div> \n    <div class="rect5 svelte-182yr1c"></div>',$(n,"class","spinner svelte-182yr1c")},m(e,t){r(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class U extends K{constructor(e){super(),J(this,e,null,Q,o,{})}}function W(e){let t,n,l;return{c(){t=f("div"),n=f("label"),l=m(e[1]),$(n,"for",e[0]),$(n,"class","svelte-1wj3ubi"),$(t,"class","svelte-1wj3ubi")},m(e,a){r(e,t,a),c(t,n),c(n,l)},p(e,t){2&t&&b(l,e[1]),1&t&&$(n,"for",e[0])},d(e){e&&u(t)}}}function Z(e){let t,n,l=e[1]&&W(e);const a=e[3].default,o=function(e,t,n,l){if(e){const a=s(e,t,n,l);return e[0](a)}}(a,e,e[2],null);return{c(){l&&l.c(),t=p(),o&&o.c()},m(e,a){l&&l.m(e,a),r(e,t,a),o&&o.m(e,a),n=!0},p(e,[s]){e[1]?l?l.p(e,s):(l=W(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),o&&o.p&&(!n||4&s)&&i(o,a,e,e[2],s,null,null)},i(e){n||(T(o,e),n=!0)},o(e){B(o,e),n=!1},d(e){l&&l.d(e),e&&u(t),o&&o.d(e)}}}function ee(e,t,n){let{$$slots:l={},$$scope:a}=t,{name:o}=t,{label:s}=t;return e.$$set=e=>{"name"in e&&n(0,o=e.name),"label"in e&&n(1,s=e.label),"$$scope"in e&&n(2,a=e.$$scope)},[o,s,a,l]}class te extends K{constructor(e){super(),J(this,e,ee,Z,o,{name:0,label:1})}}function ne(e,t,n){const l=e.slice();return l[8]=t[n],l}function le(e,t,n){const l=e.slice();return l[8]=t[n],l}function ae(e){let t,n,l,a=e[5],o=[];for(let t=0;t<a.length;t+=1)o[t]=se(ne(e,a,t));return{c(){t=f("select");for(let e=0;e<o.length;e+=1)o[e].c();t.required=e[1],$(t,"name",e[2]),$(t,"id",e[2]),$(t,"class","svelte-1u212q7"),void 0===e[0]&&F((()=>e[7].call(t)))},m(a,s){r(a,t,s);for(let e=0;e<o.length;e+=1)o[e].m(t,null);w(t,e[0]),n||(l=v(t,"change",e[7]),n=!0)},p(e,n){if(32&n){let l;for(a=e[5],l=0;l<a.length;l+=1){const s=ne(e,a,l);o[l]?o[l].p(s,n):(o[l]=se(s),o[l].c(),o[l].m(t,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=a.length}2&n&&(t.required=e[1]),4&n&&$(t,"name",e[2]),4&n&&$(t,"id",e[2]),33&n&&w(t,e[0])},d(e){e&&u(t),d(o,e),n=!1,l()}}}function oe(e){let t,n,l,a=e[5],o=[];for(let t=0;t<a.length;t+=1)o[t]=ie(le(e,a,t));return{c(){t=f("select");for(let e=0;e<o.length;e+=1)o[e].c();t.required=e[1],$(t,"name",e[2]),$(t,"id",e[2]),t.multiple=!0,$(t,"class","svelte-1u212q7"),void 0===e[0]&&F((()=>e[6].call(t)))},m(a,s){r(a,t,s);for(let e=0;e<o.length;e+=1)o[e].m(t,null);y(t,e[0]),n||(l=v(t,"change",e[6]),n=!0)},p(e,n){if(32&n){let l;for(a=e[5],l=0;l<a.length;l+=1){const s=le(e,a,l);o[l]?o[l].p(s,n):(o[l]=ie(s),o[l].c(),o[l].m(t,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=a.length}2&n&&(t.required=e[1]),4&n&&$(t,"name",e[2]),4&n&&$(t,"id",e[2]),33&n&&y(t,e[0])},d(e){e&&u(t),d(o,e),n=!1,l()}}}function se(e){let t,n,l,a=e[8].label+"";return{c(){t=f("option"),n=m(a),t.__value=l=e[8].value,t.value=t.__value},m(e,l){r(e,t,l),c(t,n)},p(e,o){32&o&&a!==(a=e[8].label+"")&&b(n,a),32&o&&l!==(l=e[8].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&u(t)}}}function ie(e){let t,n,l,a=e[8].label+"";return{c(){t=f("option"),n=m(a),t.__value=l=e[8].value,t.value=t.__value},m(e,l){r(e,t,l),c(t,n)},p(e,o){32&o&&a!==(a=e[8].label+"")&&b(n,a),32&o&&l!==(l=e[8].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&u(t)}}}function ce(e){let t;function n(e,t){return"true"===e[4]?oe:ae}let l=n(e),a=l(e);return{c(){a.c(),t=h()},m(e,n){a.m(e,n),r(e,t,n)},p(e,o){l===(l=n(e))&&a?a.p(e,o):(a.d(1),a=l(e),a&&(a.c(),a.m(t.parentNode,t)))},d(e){a.d(e),e&&u(t)}}}function re(e){let t,n;return t=new te({props:{name:e[2],label:e[3],$$slots:{default:[ce]},$$scope:{ctx:e}}}),{c(){X(t.$$.fragment)},m(e,l){H(t,e,l),n=!0},p(e,[n]){const l={};4&n&&(l.name=e[2]),8&n&&(l.label=e[3]),8247&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){Y(t,e)}}}function ue(e,t,n){let{required:l=!1}=t,{name:a}=t,{label:o=""}=t,{value:s}=t,{many:i}=t,{options:c}=t;return e.$$set=e=>{"required"in e&&n(1,l=e.required),"name"in e&&n(2,a=e.name),"label"in e&&n(3,o=e.label),"value"in e&&n(0,s=e.value),"many"in e&&n(4,i=e.many),"options"in e&&n(5,c=e.options)},[s,l,a,o,i,c,function(){var e;e=this,s=[].map.call(e.querySelectorAll(":checked"),(e=>e.__value)),n(0,s),n(5,c)},function(){s=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(0,s),n(5,c)}]}class de extends K{constructor(e){super(),J(this,e,ue,re,o,{required:1,name:2,label:3,value:0,many:4,options:5})}}function fe(e){let t,n,l;return{c(){t=f("input"),$(t,"placeholder",e[3]),t.required=e[6],$(t,"name",e[1]),$(t,"type",e[7]),$(t,"min",e[4]),$(t,"max",e[5]),t.value=e[0],$(t,"id",e[1]),$(t,"class","svelte-1yhr78p")},m(a,o){r(a,t,o),n||(l=v(t,"input",e[10]),n=!0)},p(e,n){8&n&&$(t,"placeholder",e[3]),64&n&&(t.required=e[6]),2&n&&$(t,"name",e[1]),128&n&&$(t,"type",e[7]),16&n&&$(t,"min",e[4]),32&n&&$(t,"max",e[5]),1&n&&t.value!==e[0]&&(t.value=e[0]),2&n&&$(t,"id",e[1])},d(e){e&&u(t),n=!1,l()}}}function me(e){let t,n,l;return{c(){t=f("textarea"),$(t,"placeholder",e[3]),t.required=e[6],$(t,"name",e[1]),$(t,"id",e[1])},m(a,o){r(a,t,o),g(t,e[0]),n||(l=v(t,"input",e[9]),n=!0)},p(e,n){8&n&&$(t,"placeholder",e[3]),64&n&&(t.required=e[6]),2&n&&$(t,"name",e[1]),2&n&&$(t,"id",e[1]),1&n&&g(t,e[0])},d(e){e&&u(t),n=!1,l()}}}function pe(e){let t;function n(e,t){return e[8]?me:fe}let l=n(e),a=l(e);return{c(){a.c(),t=h()},m(e,n){a.m(e,n),r(e,t,n)},p(e,o){l===(l=n(e))&&a?a.p(e,o):(a.d(1),a=l(e),a&&(a.c(),a.m(t.parentNode,t)))},d(e){a.d(e),e&&u(t)}}}function he(e){let t,n;return t=new te({props:{name:e[1],label:e[2],$$slots:{default:[pe]},$$scope:{ctx:e}}}),{c(){X(t.$$.fragment)},m(e,l){H(t,e,l),n=!0},p(e,[n]){const l={};2&n&&(l.name=e[1]),4&n&&(l.label=e[2]),2555&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){Y(t,e)}}}function ve(e,t,n){let{name:l}=t,{label:a=""}=t,{placeholder:o=""}=t,{value:s}=t,{min:i}=t,{max:c}=t,{required:r=!1}=t,{type:u="text"}=t,{textArea:d=!1}=t;return e.$$set=e=>{"name"in e&&n(1,l=e.name),"label"in e&&n(2,a=e.label),"placeholder"in e&&n(3,o=e.placeholder),"value"in e&&n(0,s=e.value),"min"in e&&n(4,i=e.min),"max"in e&&n(5,c=e.max),"required"in e&&n(6,r=e.required),"type"in e&&n(7,u=e.type),"textArea"in e&&n(8,d=e.textArea)},[s,l,a,o,i,c,r,u,d,function(){s=this.value,n(0,s)},e=>{n(0,s=u.match(/^(number|range)$/)?+e.target.value:e.target.value)}]}class $e extends K{constructor(e){super(),J(this,e,ve,he,o,{name:1,label:2,placeholder:3,value:0,min:4,max:5,required:6,type:7,textArea:8})}}function be(e,t,n){const l=e.slice();return l[4]=t[n],l}function ge(e){let t,n,l,a,o,s,i,d,h=e[4].label+"";return{c(){t=f("label"),n=f("input"),a=p(),o=m(h),s=p(),$(n,"type","checkbox"),n.__value=l=e[4].value,n.value=n.__value,$(n,"class","svelte-znoiyp"),e[3][0].push(n),$(t,"class","svelte-znoiyp")},m(l,u){r(l,t,u),c(t,n),n.checked=~e[0].indexOf(n.__value),c(t,a),c(t,o),c(t,s),i||(d=v(n,"change",e[2]),i=!0)},p(e,t){2&t&&l!==(l=e[4].value)&&(n.__value=l,n.value=n.__value),1&t&&(n.checked=~e[0].indexOf(n.__value)),2&t&&h!==(h=e[4].label+"")&&b(o,h)},d(l){l&&u(t),e[3][0].splice(e[3][0].indexOf(n),1),i=!1,d()}}}function we(e){let t,n=e[4].show&&ge(e);return{c(){n&&n.c(),t=h()},m(e,l){n&&n.m(e,l),r(e,t,l)},p(e,l){e[4].show?n?n.p(e,l):(n=ge(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&u(t)}}}function ye(t){let n,l=t[1],a=[];for(let e=0;e<l.length;e+=1)a[e]=we(be(t,l,e));return{c(){n=f("div");for(let e=0;e<a.length;e+=1)a[e].c();$(n,"class","svelte-znoiyp")},m(e,t){r(e,n,t);for(let e=0;e<a.length;e+=1)a[e].m(n,null)},p(e,[t]){if(3&t){let o;for(l=e[1],o=0;o<l.length;o+=1){const s=be(e,l,o);a[o]?a[o].p(s,t):(a[o]=we(s),a[o].c(),a[o].m(n,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=l.length}},i:e,o:e,d(e){e&&u(n),d(a,e)}}}function _e(e,t,n){let{value:l}=t,{options:a}=t;const o=[[]];return e.$$set=e=>{"value"in e&&n(0,l=e.value),"options"in e&&n(1,a=e.options)},[l,a,function(){l=function(e,t,n){const l=new Set;for(let t=0;t<e.length;t+=1)e[t].checked&&l.add(e[t].__value);return n||l.delete(t),Array.from(l)}(o[0],this.__value,this.checked),n(0,l)},o]}class xe extends K{constructor(e){super(),J(this,e,_e,ye,o,{value:0,options:1})}}function je(e,t,n){const l=e.slice();return l[31]=t[n][0],l[32]=t[n][1],l[33]=t,l[34]=n,l}function Oe(e){let t,n,l,a,o,s,i,m,h,b,g,w,y,_,x,j,O,E,M,q,P,F,I,A,S,C,L,z,G,J;function K(t){e[16](t)}let Q={required:!0,label:"Action to take",name:"operation",many:"false",options:[{value:"add",label:"Add"},{value:"edit",label:"Edit"},{value:"delete",label:"Delete"}]};function U(t){e[17](t)}void 0!==e[0]&&(Q.value=e[0]),l=new de({props:Q}),k.push((()=>V(l,"value",K)));let W={required:!0,label:"Metadata to modify",name:"metadata",many:"false",options:[{value:"class",label:"Apex Class"},{value:"page",label:"Visualforce Page"},{value:"object",label:"Object"},{value:"field",label:"Field"}]};function Z(t){e[18](t)}void 0!==e[1]&&(W.value=e[1]),i=new de({props:W}),k.push((()=>V(i,"value",U)));let ee={required:!0,name:"name",label:"Metadata name"};void 0!==e[5]&&(ee.value=e[5]),g=new $e({props:ee}),k.push((()=>V(g,"value",Z)));let te=e[12].showMetadataRename&&qe(e),ne=e[12].showEnabled&&Pe(e),le=e[12].showIncludeFields&&Fe(e),ae=e[12].showPermissions&&Re(e),oe=[...e[13]],se=[];for(let t=0;t<oe.length;t+=1)se[t]=Ie(je(e,oe,t));const ie=e=>B(se[e],1,1,(()=>{se[e]=null}));function ce(t){e[24](t)}let re={options:[{label:"Alphabetize",value:"alphabetize",show:!0}]};return void 0!==e[9]&&(re.value=e[9]),A=new xe({props:re}),k.push((()=>V(A,"value",ce))),{c(){t=f("form"),n=f("div"),X(l.$$.fragment),o=p(),s=f("div"),X(i.$$.fragment),h=p(),b=f("div"),X(g.$$.fragment),y=p(),te&&te.c(),_=p(),ne&&ne.c(),x=p(),le&&le.c(),j=p(),ae&&ae.c(),O=p(),E=f("div"),M=f("span"),M.textContent="Profiles to modify",q=p(),P=f("div");for(let e=0;e<se.length;e+=1)se[e].c();F=p(),I=f("div"),X(A.$$.fragment),C=p(),L=f("button"),L.textContent="MODIFY PROFILES",$(M,"class","modify svelte-hzxud8")},m(a,u){r(a,t,u),c(t,n),H(l,n,null),c(t,o),c(t,s),H(i,s,null),c(t,h),c(t,b),H(g,b,null),c(t,y),te&&te.m(t,null),c(t,_),ne&&ne.m(t,null),c(t,x),le&&le.m(t,null),c(t,j),ae&&ae.m(t,null),c(t,O),c(t,E),c(E,M),c(E,q),c(E,P);for(let e=0;e<se.length;e+=1)se[e].m(P,null);var d;c(t,F),c(t,I),H(A,I,null),c(t,C),c(t,L),z=!0,G||(J=v(L,"click",(d=e[25],function(e){return e.preventDefault(),d.call(this,e)})),G=!0)},p(e,n){const o={};!a&&1&n[0]&&(a=!0,o.value=e[0],R((()=>a=!1))),l.$set(o);const s={};!m&&2&n[0]&&(m=!0,s.value=e[1],R((()=>m=!1))),i.$set(s);const c={};if(!w&&32&n[0]&&(w=!0,c.value=e[5],R((()=>w=!1))),g.$set(c),e[12].showMetadataRename?te?(te.p(e,n),4096&n[0]&&T(te,1)):(te=qe(e),te.c(),T(te,1),te.m(t,_)):te&&(N(),B(te,1,1,(()=>{te=null})),D()),e[12].showEnabled?ne?(ne.p(e,n),4096&n[0]&&T(ne,1)):(ne=Pe(e),ne.c(),T(ne,1),ne.m(t,x)):ne&&(N(),B(ne,1,1,(()=>{ne=null})),D()),e[12].showIncludeFields?le?(le.p(e,n),4096&n[0]&&T(le,1)):(le=Fe(e),le.c(),T(le,1),le.m(t,j)):le&&(N(),B(le,1,1,(()=>{le=null})),D()),e[12].showPermissions?ae?(ae.p(e,n),4096&n[0]&&T(ae,1)):(ae=Re(e),ae.c(),T(ae,1),ae.m(t,O)):ae&&(N(),B(ae,1,1,(()=>{ae=null})),D()),24576&n[0]){let t;for(oe=[...e[13]],t=0;t<oe.length;t+=1){const l=je(e,oe,t);se[t]?(se[t].p(l,n),T(se[t],1)):(se[t]=Ie(l),se[t].c(),T(se[t],1),se[t].m(P,null))}for(N(),t=oe.length;t<se.length;t+=1)ie(t);D()}const r={};!S&&512&n[0]&&(S=!0,r.value=e[9],R((()=>S=!1))),A.$set(r)},i(e){if(!z){T(l.$$.fragment,e),T(i.$$.fragment,e),T(g.$$.fragment,e),T(te),T(ne),T(le),T(ae);for(let e=0;e<oe.length;e+=1)T(se[e]);T(A.$$.fragment,e),z=!0}},o(e){B(l.$$.fragment,e),B(i.$$.fragment,e),B(g.$$.fragment,e),B(te),B(ne),B(le),B(ae),se=se.filter(Boolean);for(let e=0;e<se.length;e+=1)B(se[e]);B(A.$$.fragment,e),z=!1},d(e){e&&u(t),Y(l),Y(i),Y(g),te&&te.d(),ne&&ne.d(),le&&le.d(),ae&&ae.d(),d(se,e),Y(A),G=!1,J()}}}function ke(t){let n;return{c(){n=f("p"),n.textContent="No profiles found in project structure. Please check that you have an SFDX project open and a valid sfdx-project.json file."},m(e,t){r(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}function Ee(t){let n;return{c(){n=f("p"),n.textContent="There is no project file open. Please open an SFDX project folder with a valid sfdx-project.json file."},m(e,t){r(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}function Me(t){let n,l;return n=new U({}),{c(){X(n.$$.fragment)},m(e,t){H(n,e,t),l=!0},p:e,i(e){l||(T(n.$$.fragment,e),l=!0)},o(e){B(n.$$.fragment,e),l=!1},d(e){Y(n,e)}}}function qe(e){let t,n,l,a;function o(t){e[19](t)}let s={required:!0,name:"rename",label:"Rename to"};return void 0!==e[6]&&(s.value=e[6]),n=new $e({props:s}),k.push((()=>V(n,"value",o))),{c(){t=f("div"),X(n.$$.fragment)},m(e,l){r(e,t,l),H(n,t,null),a=!0},p(e,t){const a={};!l&&64&t[0]&&(l=!0,a.value=e[6],R((()=>l=!1))),n.$set(a)},i(e){a||(T(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){e&&u(t),Y(n)}}}function Pe(e){let t,n,l,a;function o(t){e[20](t)}let s={options:[{label:"Enabled",value:"enabled",show:!0}]};return void 0!==e[7]&&(s.value=e[7]),n=new xe({props:s}),k.push((()=>V(n,"value",o))),{c(){t=f("div"),X(n.$$.fragment)},m(e,l){r(e,t,l),H(n,t,null),a=!0},p(e,t){const a={};!l&&128&t[0]&&(l=!0,a.value=e[7],R((()=>l=!1))),n.$set(a)},i(e){a||(T(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){e&&u(t),Y(n)}}}function Fe(e){let t,n,l,a;function o(t){e[21](t)}let s={options:[{label:"Add object fields too?",value:"includeFields",show:!0}]};return void 0!==e[8]&&(s.value=e[8]),n=new xe({props:s}),k.push((()=>V(n,"value",o))),{c(){t=f("div"),X(n.$$.fragment)},m(e,l){r(e,t,l),H(n,t,null),a=!0},p(e,t){const a={};!l&&256&t[0]&&(l=!0,a.value=e[8],R((()=>l=!1))),n.$set(a)},i(e){a||(T(n.$$.fragment,e),a=!0)},o(e){B(n.$$.fragment,e),a=!1},d(e){e&&u(t),Y(n)}}}function Re(e){let t,n,l,a,o,s;function i(t){e[22](t)}let d={options:e[11]};return void 0!==e[10]&&(d.value=e[10]),a=new xe({props:d}),k.push((()=>V(a,"value",i))),{c(){t=f("div"),n=f("span"),n.textContent="Permissions",l=p(),X(a.$$.fragment),$(n,"class","permissions svelte-hzxud8")},m(e,o){r(e,t,o),c(t,n),c(t,l),H(a,t,null),s=!0},p(e,t){const n={};2048&t[0]&&(n.options=e[11]),!o&&1024&t[0]&&(o=!0,n.value=e[10],R((()=>o=!1))),a.$set(n)},i(e){s||(T(a.$$.fragment,e),s=!0)},o(e){B(a.$$.fragment,e),s=!1},d(e){e&&u(t),Y(a)}}}function Ie(e){let t,n,l;function a(t){e[23](t,e[31])}let o={label:e[31],name:e[31],many:"true",options:e[32]};return void 0!==e[14][e[31]]&&(o.value=e[14][e[31]]),t=new de({props:o}),k.push((()=>V(t,"value",a))),{c(){X(t.$$.fragment)},m(e,n){H(t,e,n),l=!0},p(l,a){e=l;const o={};8192&a[0]&&(o.label=e[31]),8192&a[0]&&(o.name=e[31]),8192&a[0]&&(o.options=e[32]),!n&&24576&a[0]&&(n=!0,o.value=e[14][e[31]],R((()=>n=!1))),t.$set(o)},i(e){l||(T(t.$$.fragment,e),l=!0)},o(e){B(t.$$.fragment,e),l=!1},d(e){Y(t,e)}}}function Ae(e){let t,n,l,a;const o=[Me,Ee,ke,Oe],s=[];function i(e,t){return e[2]?0:e[4]?1:e[3]?2:3}return n=i(e),l=s[n]=o[n](e),{c(){t=f("main"),l.c()},m(e,l){r(e,t,l),s[n].m(t,null),a=!0},p(e,a){let c=n;n=i(e),n===c?s[n].p(e,a):(N(),B(s[c],1,1,(()=>{s[c]=null})),D(),l=s[n],l?l.p(e,a):(l=s[n]=o[n](e),l.c()),T(l,1),l.m(t,null))},i(e){a||(T(l),a=!0)},o(e){B(l),a=!1},d(e){e&&u(t),s[n].d()}}}function Se(e,t,n){let l=!0,a=!1,o=!1,s="add",i="class",c="",r="",u=["enabled"],d=[],f=[],m=[],p=[{label:"Create",value:"c",show:!0},{label:"Read",value:"r",show:!0},{label:"Edit",value:"e",show:!0},{label:"Delete",value:"d",show:!0},{label:"View All",value:"v",show:!0},{label:"Modify All",value:"m",show:!0}],h=[],v={showMetadataRename:!1,showEnabled:!1,showPermissions:!1,showIncludeFields:!1},$=new Map,b=[],g=tsvscode.getState();g&&!g.isLoading&&(l=g.isLoading,tsvscode.postMessage({command:"reload",data:""}));const w=()=>{let e=!1;for(const t in b){b[t].length>0&&(e=!0)}if(!e)return void tsvscode.postMessage({command:"onError",data:"Please select at least one profile to modify."});if(!c||""===c.trim())return void tsvscode.postMessage({command:"onError",data:"Metadata name is required to modify profiles."});let t=`sfdx profile:${i}:${s} -n ${c}`;if("edit"===s&&r&&""!==r.trim()&&(t+=` -r ${r}`),"delete"!==s&&("class"!==i&&"page"!==i||u&&(t+=" -e"),"field"!==i&&"object"!==i||(t+=" -m ","field"!==i||m.includes("r")||m.includes("e")||(t+="no"),m.includes("r")&&(t+="r"),m.includes("e")&&(t+="e")),"object"===i&&(m.includes("r")||m.includes("e")||m.includes("c")||m.includes("d")||m.includes("v")||m.includes("m")||(t+="no"),m.includes("c")&&(t+="c"),m.includes("d")&&(t+="d"),m.includes("v")&&(t+="v"),m.includes("m")&&(t+="m"))),Object.keys(b).length){t+=" -p ";let e=[];for(const t of Object.keys(b)){const n=b[t];for(const l of n)e.push(`"${t}${l}"`)}e.length&&(t+=e.join(","))}f.length>0&&(t+=" -a"),d.length>0&&(t+=" -f"),tsvscode.postMessage({command:"modify",data:t}),n(2,l=!0)};function y(e){const t=e.data;switch(t.command){case"profiles":let e=Object();for(const l in t.data){let a=[...t.data[l]];a.sort(((e,t)=>e>t?1:-1)),t.data[l]=a;const o=t.data[l].map((e=>({label:e,value:e})));e[l]=o,n(14,b[l]=[],b)}n(13,$=new Map(Object.entries(e))),n(2,l=!1),tsvscode.setState({isLoading:l});break;case"modify-complete":n(2,l=!1);break;case"no-profile":n(2,l=!1),n(3,a=!0);break;case"project-not-open":n(2,l=!1),n(4,o=!0)}}var _;_=()=>{window.addEventListener("message",y)},j().$$.on_mount.push(_),function(e){j().$$.on_destroy.push(e)}((()=>{window.removeEventListener("message",y)}));return e.$$.update=()=>{3&e.$$.dirty[0]&&(n(12,v=function(e){switch(e){case"add":switch(i){case"class":case"page":n(12,v.showEnabled=!0,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v);break;case"object":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!0,v),n(12,v.showIncludeFields=!0,v),n(11,h=p.map((e=>Object.assign(Object.assign({},e),{show:!0}))));break;case"field":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!0,v),n(12,v.showIncludeFields=!1,v),n(11,h=p.map((e=>"r"===e.value||"e"===e.value?Object.assign(Object.assign({},e),{show:!0}):Object.assign(Object.assign({},e),{show:!1}))))}break;case"edit":switch(i){case"class":case"page":n(12,v.showEnabled=!0,v),n(12,v.showMetadataRename=!0,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v);break;case"object":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!0,v),n(12,v.showPermissions=!0,v),n(12,v.showIncludeFields=!1,v),n(11,h=p.map((e=>Object.assign(Object.assign({},e),{show:!0}))));break;case"field":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!0,v),n(12,v.showPermissions=!0,v),n(12,v.showIncludeFields=!1,v),n(11,h=p.map((e=>"r"===e.value||"e"===e.value?Object.assign(Object.assign({},e),{show:!0}):Object.assign(Object.assign({},e),{show:!1}))))}break;case"delete":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v)}return v}(s)),n(12,v=function(e){switch(e){case"class":case"page":switch(s){case"add":n(12,v.showEnabled=!0,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v);break;case"edit":n(12,v.showEnabled=!0,v),n(12,v.showMetadataRename=!0,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v);break;case"delete":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v)}break;case"object":switch(s){case"add":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!0,v),n(12,v.showIncludeFields=!0,v),n(11,h=p.map((e=>Object.assign(Object.assign({},e),{show:!0}))));break;case"edit":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!0,v),n(12,v.showPermissions=!0,v),n(12,v.showIncludeFields=!1,v),n(11,h=p.map((e=>Object.assign(Object.assign({},e),{show:!0}))));break;case"delete":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!1,v),n(12,v.showIncludeFields=!1,v)}break;case"field":switch(s){case"add":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!0,v),n(11,h=p.map((e=>"r"===e.value||"e"===e.value?Object.assign(Object.assign({},e),{show:!0}):Object.assign(Object.assign({},e),{show:!1}))));break;case"edit":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!0,v),n(12,v.showPermissions=!0,v),n(11,h=p.map((e=>"r"===e.value||"e"===e.value?Object.assign(Object.assign({},e),{show:!0}):Object.assign(Object.assign({},e),{show:!1}))));break;case"delete":n(12,v.showEnabled=!1,v),n(12,v.showMetadataRename=!1,v),n(12,v.showPermissions=!1,v)}}return v}(i)))},[s,i,l,a,o,c,r,u,d,f,m,h,v,$,b,w,function(e){s=e,n(0,s)},function(e){i=e,n(1,i)},function(e){c=e,n(5,c)},function(e){r=e,n(6,r)},function(e){u=e,n(7,u)},function(e){d=e,n(8,d)},function(e){m=e,n(10,m)},function(t,l){e.$$.not_equal(b[l],t)&&(b[l]=t,n(14,b))},function(e){f=e,n(9,f)},()=>{w()}]}return new class extends K{constructor(e){super(),J(this,e,Se,Ae,o,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=Sidebar.js.map
