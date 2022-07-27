const ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};ue();function O(){}function G(e,t){for(const n in t)e[n]=t[n];return e}function Zt(e){return e()}function Rt(){return Object.create(null)}function X(e){e.forEach(Zt)}function te(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let it;function yt(e,t){return it||(it=document.createElement("a")),it.href=t,e===it.href}function ae(e){return Object.keys(e).length===0}function ee(e,...t){if(e==null)return O;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function q(e,t,n){e.$$.on_destroy.push(ee(t,n))}function St(e,t,n,r){if(e){const l=ne(e,t,n,r);return e[0](l)}}function ne(e,t,n,r){return e[1]&&r?G(n.ctx.slice(),e[1](r(t))):n.ctx}function Ct(e,t,n,r){if(e[2]&&r){const l=e[2](r(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const s=[],i=Math.max(t.dirty.length,l.length);for(let c=0;c<i;c+=1)s[c]=t.dirty[c]|l[c];return s}return t.dirty|l}return t.dirty}function Pt(e,t,n,r,l,s){if(l){const i=ne(t,n,r,s);e.p(i,l)}}function It(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function vt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function At(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}function h(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode.removeChild(e)}function xt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function S(){return V(" ")}function Lt(){return V("")}function fe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Mt(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:g(e,r,t[r])}function me(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function he(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,r,t),l}let lt;function rt(e){lt=e}function ot(){if(!lt)throw new Error("Function called outside component initialization");return lt}function Ot(e){ot().$$.on_mount.push(e)}function de(e){ot().$$.on_destroy.push(e)}function ge(){const e=ot();return(t,n,{cancelable:r=!1}={})=>{const l=e.$$.callbacks[t];if(l){const s=he(t,n,{cancelable:r});return l.slice().forEach(i=>{i.call(e,s)}),!s.defaultPrevented}return!0}}function Ht(e,t){return ot().$$.context.set(e,t),t}function Y(e){return ot().$$.context.get(e)}const et=[],zt=[],at=[],Dt=[],pe=Promise.resolve();let Tt=!1;function _e(){Tt||(Tt=!0,pe.then(re))}function jt(e){at.push(e)}const pt=new Set;let ct=0;function re(){const e=lt;do{for(;ct<et.length;){const t=et[ct];ct++,rt(t),be(t.$$)}for(rt(null),et.length=0,ct=0;zt.length;)zt.pop()();for(let t=0;t<at.length;t+=1){const n=at[t];pt.has(n)||(pt.add(n),n())}at.length=0}while(et.length);for(;Dt.length;)Dt.pop()();Tt=!1,pt.clear(),rt(e)}function be(e){if(e.fragment!==null){e.update(),X(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(jt)}}const ft=new Set;let W;function dt(){W={r:0,c:[],p:W}}function gt(){W.r||X(W.c),W=W.p}function y(e,t){e&&e.i&&(ft.delete(e),e.i(t))}function x(e,t,n,r){if(e&&e.o){if(ft.has(e))return;ft.add(e),W.c.push(()=>{ft.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e,t){const n={},r={},l={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const o in i)o in c||(r[o]=1);for(const o in c)l[o]||(n[o]=c[o],l[o]=1);e[s]=c}else for(const o in i)l[o]=1}for(const i in r)i in n||(n[i]=void 0);return n}function Bt(e){return typeof e=="object"&&e!==null?e:{}}function C(e){e&&e.c()}function E(e,t,n,r){const{fragment:l,on_mount:s,on_destroy:i,after_update:c}=e.$$;l&&l.m(t,n),r||jt(()=>{const o=s.map(Zt).filter(te);i?i.push(...o):X(o),e.$$.on_mount=[]}),c.forEach(jt)}function N(e,t){const n=e.$$;n.fragment!==null&&(X(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){e.$$.dirty[0]===-1&&(et.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,r,l,s,i,c=[-1]){const o=lt;rt(e);const u=e.$$={fragment:null,ctx:null,props:s,update:O,not_equal:l,bound:Rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:Rt(),dirty:c,skip_bound:!1,root:t.target||o.$$.root};i&&i(u.root);let a=!1;if(u.ctx=n?n(e,t.props||{},(d,m,..._)=>{const f=_.length?_[0]:m;return u.ctx&&l(u.ctx[d],u.ctx[d]=f)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](f),a&&we(e,d)),m}):[],u.update(),a=!0,X(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const d=me(t.target);u.fragment&&u.fragment.l(d),d.forEach(R)}else u.fragment&&u.fragment.c();t.intro&&y(e.$$.fragment),E(e,t.target,t.anchor,t.customElement),re()}rt(o)}class B{$destroy(){N(this,1),this.$destroy=O}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class $e extends B{constructor(t){super(),D(this,t,null,null,z,{})}}function ke(e){let t,n,r;return{c(){t=w("a"),n=w("img"),g(n,"class","rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900 hover:border-neutral-400 transition-all duration-300"),yt(n.src,r=e[1])||g(n,"src",r),g(n,"alt",e[2]),g(t,"class","w-12"),g(t,"href",e[0])},m(l,s){A(l,t,s),h(t,n)},p(l,[s]){s&2&&!yt(n.src,r=l[1])&&g(n,"src",r),s&4&&g(n,"alt",l[2]),s&1&&g(t,"href",l[0])},i:O,o:O,d(l){l&&R(t)}}}function ye(e,t,n){let{link:r}=t,{src:l}=t,{alt:s}=t;return e.$$set=i=>{"link"in i&&n(0,r=i.link),"src"in i&&n(1,l=i.src),"alt"in i&&n(2,s=i.alt)},[r,l,s]}class _t extends B{constructor(t){super(),D(this,t,ye,ke,z,{link:0,src:1,alt:2})}}const Q=[];function ve(e,t){return{subscribe:nt(e,t).subscribe}}function nt(e,t=O){let n;const r=new Set;function l(c){if(z(e,c)&&(e=c,n)){const o=!Q.length;for(const u of r)u[1](),Q.push(u,e);if(o){for(let u=0;u<Q.length;u+=2)Q[u][0](Q[u+1]);Q.length=0}}}function s(c){l(c(e))}function i(c,o=O){const u=[c,o];return r.add(u),r.size===1&&(n=t(l)||O),c(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:l,update:s,subscribe:i}}function xe(e,t,n){const r=!Array.isArray(e),l=r?[e]:e,s=t.length<2;return ve(n,i=>{let c=!1;const o=[];let u=0,a=O;const d=()=>{if(u)return;a();const _=t(r?o[0]:o,i);s?i(_):a=te(_)?_:O},m=l.map((_,f)=>ee(_,p=>{o[f]=p,u&=~(1<<f),c&&d()},()=>{u|=1<<f}));return c=!0,d(),function(){X(m),a()}})}const mt={},ht={};function bt(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function Te(e,t){const n=[];let r=bt(e);return{get location(){return r},listen(l){n.push(l);const s=()=>{r=bt(e),l({location:r,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const i=n.indexOf(l);n.splice(i,1)}},navigate(l,{state:s,replace:i=!1}={}){s={...s,key:Date.now()+""};try{i?e.history.replaceState(s,null,l):e.history.pushState(s,null,l)}catch{e.location[i?"replace":"assign"](l)}r=bt(e),n.forEach(c=>c({location:r,action:"PUSH"}))}}}function je(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(l,s){},removeEventListener(l,s){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(l,s,i){const[c,o=""]=i.split("?");t++,n.push({pathname:c,search:o}),r.push(l)},replaceState(l,s,i){const[c,o=""]=i.split("?");n[t]={pathname:c,search:o},r[t]=l}}}}const Ee=Boolean(typeof window<"u"&&window.document&&window.document.createElement),Et=Te(Ee?window:je()),{navigate:se}=Et,oe=/^:(.+)/,Ut=4,Ne=3,Se=2,Ce=1,Pe=1;function Nt(e,t){return e.substr(0,t.length)===t}function Ie(e){return e===""}function Le(e){return oe.test(e)}function ie(e){return e[0]==="*"}function st(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function wt(e){return e.replace(/(^\/+|\/+$)/g,"")}function Oe(e,t){const n=e.default?0:st(e.path).reduce((r,l)=>(r+=Ut,Ie(l)?r+=Pe:Le(l)?r+=Se:ie(l)?r-=Ut+Ce:r+=Ne,r),0);return{route:e,score:n,index:t}}function Re(e){return e.map(Oe).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function ce(e,t){let n,r;const[l]=t.split("?"),s=st(l),i=s[0]==="",c=Re(e);for(let o=0,u=c.length;o<u;o++){const a=c[o].route;let d=!1;if(a.default){r={route:a,params:{},uri:t};continue}const m=st(a.path),_={},f=Math.max(s.length,m.length);let p=0;for(;p<f;p++){const b=m[p],P=s[p];if(b!==void 0&&ie(b)){const L=b==="*"?"*":b.slice(1);_[L]=s.slice(p).map(decodeURIComponent).join("/");break}if(P===void 0){d=!0;break}let M=oe.exec(b);if(M&&!i){const L=decodeURIComponent(P);_[M[1]]=L}else if(b!==P){d=!0;break}}if(!d){n={route:a,params:_,uri:"/"+s.slice(0,p).join("/")};break}}return n||r||null}function Ae(e,t){return ce([e],t)}function $t(e,t){return e+(t?`?${t}`:"")}function Me(e,t){if(Nt(e,"/"))return e;const[n,r]=e.split("?"),[l]=t.split("?"),s=st(n),i=st(l);if(s[0]==="")return $t(l,r);if(!Nt(s[0],".")){const u=i.concat(s).join("/");return $t((l==="/"?"":"/")+u,r)}const c=i.concat(s),o=[];return c.forEach(u=>{u===".."?o.pop():u!=="."&&o.push(u)}),$t("/"+o.join("/"),r)}function Vt(e,t){return`${wt(t==="/"?e:`${wt(e)}/${wt(t)}`)}/`}function He(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ze(e){let t;const n=e[9].default,r=St(n,e,e[8],null);return{c(){r&&r.c()},m(l,s){r&&r.m(l,s),t=!0},p(l,[s]){r&&r.p&&(!t||s&256)&&Pt(r,n,l,l[8],t?Ct(n,l[8],s,null):It(l[8]),null)},i(l){t||(y(r,l),t=!0)},o(l){x(r,l),t=!1},d(l){r&&r.d(l)}}}function De(e,t,n){let r,l,s,{$$slots:i={},$$scope:c}=t,{basepath:o="/"}=t,{url:u=null}=t;const a=Y(mt),d=Y(ht),m=nt([]);q(e,m,$=>n(6,l=$));const _=nt(null);let f=!1;const p=a||nt(u?{pathname:u}:Et.location);q(e,p,$=>n(5,r=$));const b=d?d.routerBase:nt({path:o,uri:o});q(e,b,$=>n(7,s=$));const P=xe([b,_],([$,I])=>{if(I===null)return $;const{path:k}=$,{route:v,uri:H}=I;return{path:v.default?k:v.path.replace(/\*.*$/,""),uri:H}});function M($){const{path:I}=s;let{path:k}=$;if($._path=k,$.path=Vt(I,k),typeof window>"u"){if(f)return;const v=Ae($,r.pathname);v&&(_.set(v),f=!0)}else m.update(v=>(v.push($),v))}function L($){m.update(I=>{const k=I.indexOf($);return I.splice(k,1),I})}return a||(Ot(()=>Et.listen(I=>{p.set(I.location)})),Ht(mt,p)),Ht(ht,{activeRoute:_,base:b,routerBase:P,registerRoute:M,unregisterRoute:L}),e.$$set=$=>{"basepath"in $&&n(3,o=$.basepath),"url"in $&&n(4,u=$.url),"$$scope"in $&&n(8,c=$.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:$}=s;m.update(I=>(I.forEach(k=>k.path=Vt($,k._path)),I))}if(e.$$.dirty&96){const $=ce(l,r.pathname);_.set($)}},[m,p,b,o,u,r,l,s,c,i]}class Be extends B{constructor(t){super(),D(this,t,De,ze,z,{basepath:3,url:4})}}const Ue=e=>({params:e&4,location:e&16}),Ft=e=>({params:e[2],location:e[4]});function Kt(e){let t,n,r,l;const s=[Fe,Ve],i=[];function c(o,u){return o[0]!==null?0:1}return t=c(e),n=i[t]=s[t](e),{c(){n.c(),r=Lt()},m(o,u){i[t].m(o,u),A(o,r,u),l=!0},p(o,u){let a=t;t=c(o),t===a?i[t].p(o,u):(dt(),x(i[a],1,1,()=>{i[a]=null}),gt(),n=i[t],n?n.p(o,u):(n=i[t]=s[t](o),n.c()),y(n,1),n.m(r.parentNode,r))},i(o){l||(y(n),l=!0)},o(o){x(n),l=!1},d(o){i[t].d(o),o&&R(r)}}}function Ve(e){let t;const n=e[10].default,r=St(n,e,e[9],Ft);return{c(){r&&r.c()},m(l,s){r&&r.m(l,s),t=!0},p(l,s){r&&r.p&&(!t||s&532)&&Pt(r,n,l,l[9],t?Ct(n,l[9],s,Ue):It(l[9]),Ft)},i(l){t||(y(r,l),t=!0)},o(l){x(r,l),t=!1},d(l){r&&r.d(l)}}}function Fe(e){let t,n,r;const l=[{location:e[4]},e[2],e[3]];var s=e[0];function i(c){let o={};for(let u=0;u<l.length;u+=1)o=G(o,l[u]);return{props:o}}return s&&(t=new s(i())),{c(){t&&C(t.$$.fragment),n=Lt()},m(c,o){t&&E(t,c,o),A(c,n,o),r=!0},p(c,o){const u=o&28?le(l,[o&16&&{location:c[4]},o&4&&Bt(c[2]),o&8&&Bt(c[3])]):{};if(s!==(s=c[0])){if(t){dt();const a=t;x(a.$$.fragment,1,0,()=>{N(a,1)}),gt()}s?(t=new s(i()),C(t.$$.fragment),y(t.$$.fragment,1),E(t,n.parentNode,n)):t=null}else s&&t.$set(u)},i(c){r||(t&&y(t.$$.fragment,c),r=!0)},o(c){t&&x(t.$$.fragment,c),r=!1},d(c){c&&R(n),t&&N(t,c)}}}function Ke(e){let t,n,r=e[1]!==null&&e[1].route===e[7]&&Kt(e);return{c(){r&&r.c(),t=Lt()},m(l,s){r&&r.m(l,s),A(l,t,s),n=!0},p(l,[s]){l[1]!==null&&l[1].route===l[7]?r?(r.p(l,s),s&2&&y(r,1)):(r=Kt(l),r.c(),y(r,1),r.m(t.parentNode,t)):r&&(dt(),x(r,1,1,()=>{r=null}),gt())},i(l){n||(y(r),n=!0)},o(l){x(r),n=!1},d(l){r&&r.d(l),l&&R(t)}}}function Je(e,t,n){let r,l,{$$slots:s={},$$scope:i}=t,{path:c=""}=t,{component:o=null}=t;const{registerRoute:u,unregisterRoute:a,activeRoute:d}=Y(ht);q(e,d,b=>n(1,r=b));const m=Y(mt);q(e,m,b=>n(4,l=b));const _={path:c,default:c===""};let f={},p={};return u(_),typeof window<"u"&&de(()=>{a(_)}),e.$$set=b=>{n(13,t=G(G({},t),vt(b))),"path"in b&&n(8,c=b.path),"component"in b&&n(0,o=b.component),"$$scope"in b&&n(9,i=b.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&r&&r.route===_&&n(2,f=r.params);{const{path:b,component:P,...M}=t;n(3,p=M)}},t=vt(t),[o,r,f,p,l,d,m,_,c,i,s]}class tt extends B{constructor(t){super(),D(this,t,Je,Ke,z,{path:8,component:0})}}function We(e){let t,n,r,l;const s=e[16].default,i=St(s,e,e[15],null);let c=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],o={};for(let u=0;u<c.length;u+=1)o=G(o,c[u]);return{c(){t=w("a"),i&&i.c(),Mt(t,o)},m(u,a){A(u,t,a),i&&i.m(t,null),n=!0,r||(l=fe(t,"click",e[5]),r=!0)},p(u,[a]){i&&i.p&&(!n||a&32768)&&Pt(i,s,u,u[15],n?Ct(s,u[15],a,null):It(u[15]),null),Mt(t,o=le(c,[(!n||a&1)&&{href:u[0]},(!n||a&4)&&{"aria-current":u[2]},a&2&&u[1],a&64&&u[6]]))},i(u){n||(y(i,u),n=!0)},o(u){x(i,u),n=!1},d(u){u&&R(t),i&&i.d(u),r=!1,l()}}}function qe(e,t,n){let r;const l=["to","replace","state","getProps"];let s=At(t,l),i,c,{$$slots:o={},$$scope:u}=t,{to:a="#"}=t,{replace:d=!1}=t,{state:m={}}=t,{getProps:_=()=>({})}=t;const{base:f}=Y(ht);q(e,f,k=>n(14,c=k));const p=Y(mt);q(e,p,k=>n(13,i=k));const b=ge();let P,M,L,$;function I(k){if(b("click",k),He(k)){k.preventDefault();const v=i.pathname===P||d;se(P,{state:m,replace:v})}}return e.$$set=k=>{t=G(G({},t),vt(k)),n(6,s=At(t,l)),"to"in k&&n(7,a=k.to),"replace"in k&&n(8,d=k.replace),"state"in k&&n(9,m=k.state),"getProps"in k&&n(10,_=k.getProps),"$$scope"in k&&n(15,u=k.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,P=a==="/"?c.uri:Me(a,c.uri)),e.$$.dirty&8193&&n(11,M=Nt(i.pathname,P)),e.$$.dirty&8193&&n(12,L=P===i.pathname),e.$$.dirty&4096&&n(2,r=L?"page":void 0),e.$$.dirty&15361&&n(1,$=_({location:i,href:P,isPartiallyCurrent:M,isCurrent:L}))},[P,$,r,f,p,I,s,a,d,m,_,M,L,i,c,u,o]}class Ge extends B{constructor(t){super(),D(this,t,qe,We,z,{to:7,replace:8,state:9,getProps:10})}}function Qe(e){let t;return{c(){t=V(e[0])},m(n,r){A(n,t,r)},p(n,r){r&1&&K(t,n[0])},d(n){n&&R(t)}}}function Ye(e){let t,n,r;return n=new Ge({props:{to:e[1],$$slots:{default:[Qe]},$$scope:{ctx:e}}}),{c(){t=w("li"),C(n.$$.fragment),g(t,"class","hover:text-red-600 transition-all")},m(l,s){A(l,t,s),E(n,t,null),r=!0},p(l,[s]){const i={};s&2&&(i.to=l[1]),s&5&&(i.$$scope={dirty:s,ctx:l}),n.$set(i)},i(l){r||(y(n.$$.fragment,l),r=!0)},o(l){x(n.$$.fragment,l),r=!1},d(l){l&&R(t),N(n)}}}function Xe(e,t,n){let{linkName:r}=t,{linkTo:l}=t;return e.$$set=s=>{"linkName"in s&&n(0,r=s.linkName),"linkTo"in s&&n(1,l=s.linkTo)},[r,l]}class ut extends B{constructor(t){super(),D(this,t,Xe,Ye,z,{linkName:0,linkTo:1})}}function Ze(e){let t,n,r,l,s,i,c,o,u,a,d,m,_,f,p,b,P,M,L,$,I,k;return i=new ut({props:{linkName:"Home",linkTo:""}}),o=new ut({props:{linkName:"Info",linkTo:"info"}}),a=new ut({props:{linkName:"Commands",linkTo:"commands"}}),m=new ut({props:{linkName:"Stats",linkTo:"stats"}}),P=new _t({props:{link:"https://twitter.com/helltfx",src:"./twitter-logo.png",alt:"twitter logo link"}}),L=new _t({props:{link:"https://github.com/helltf",src:"./github-logo.png",alt:"github logo link"}}),I=new _t({props:{link:"https://twitch.tv/helltf",src:"./twitch-logo.png",alt:"twitch logo link"}}),{c(){t=w("nav"),n=w("div"),n.innerHTML=`<span class="text-4xl text-red-600">hell</span> 
    <div class="w-[60px]"><img src="./tf.png" alt="trollface logo" width="60" height="60"/></div>`,r=S(),l=w("div"),s=w("ul"),C(i.$$.fragment),c=S(),C(o.$$.fragment),u=S(),C(a.$$.fragment),d=S(),C(m.$$.fragment),_=S(),f=w("a"),f.textContent="Login",p=S(),b=w("div"),C(P.$$.fragment),M=S(),C(L.$$.fragment),$=S(),C(I.$$.fragment),g(n,"class","ml-48 left-nav flex flex-row items-center gap-1 justify-start"),g(f,"href","https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=b6uhkaukifr993zprguyesbminengw&redirect_uri=http://localhost:3000/callback&scope=user%3Aread%3Aemail"),g(s,"class","flex flex-row justify-center gap-6 "),g(l,"class","mid-nav flex w-full h-full justify-center items-center "),g(b,"class","right-nav flex flex-row justify-between items-center gap-2 mr-48 "),g(t,"class","shadow-[0_6px_4px_-2px] shadow-neutral-900 w-full h-20 bg-neutral-800 flex flex-row justify-between items-center min-w-[600px]")},m(v,H){A(v,t,H),h(t,n),h(t,r),h(t,l),h(l,s),E(i,s,null),h(s,c),E(o,s,null),h(s,u),E(a,s,null),h(s,d),E(m,s,null),h(s,_),h(s,f),h(t,p),h(t,b),E(P,b,null),h(b,M),E(L,b,null),h(b,$),E(I,b,null),k=!0},p:O,i(v){k||(y(i.$$.fragment,v),y(o.$$.fragment,v),y(a.$$.fragment,v),y(m.$$.fragment,v),y(P.$$.fragment,v),y(L.$$.fragment,v),y(I.$$.fragment,v),k=!0)},o(v){x(i.$$.fragment,v),x(o.$$.fragment,v),x(a.$$.fragment,v),x(m.$$.fragment,v),x(P.$$.fragment,v),x(L.$$.fragment,v),x(I.$$.fragment,v),k=!1},d(v){v&&R(t),N(i),N(o),N(a),N(m),N(P),N(L),N(I)}}}class tn extends B{constructor(t){super(),D(this,t,null,Ze,z,{})}}function en(e){let t,n,r,l,s,i,c,o,u,a,d,m,_;return{c(){t=w("div"),n=w("h1"),r=V(e[2]),l=S(),s=w("p"),i=V(e[1]),c=S(),o=w("a"),u=w("span"),u.textContent="view commands",a=S(),d=w("img"),g(n,"class","text-3xl "),g(s,"class","text-base lg:w-[300px] w-[500px]"),g(u,"class","text-neutral-500 text-sm"),yt(d.src,m="./arrow.svg")||g(d,"src",m),g(d,"alt","arrow"),g(o,"class","w-[70%] hover:bg-neutral-300 transition-all bg-white rounded-sm flex flew-col justify-between p-2"),g(o,"href",e[3]),g(t,"class",_="w-60 flex flex-col "+e[0]+" p-6 pr-9 pl-9 rounded-lg gap-5 lg:w-[400px] w-[600px]")},m(f,p){A(f,t,p),h(t,n),h(n,r),h(t,l),h(t,s),h(s,i),h(t,c),h(t,o),h(o,u),h(o,a),h(o,d)},p(f,[p]){p&4&&K(r,f[2]),p&2&&K(i,f[1]),p&8&&g(o,"href",f[3]),p&1&&_!==(_="w-60 flex flex-col "+f[0]+" p-6 pr-9 pl-9 rounded-lg gap-5 lg:w-[400px] w-[600px]")&&g(t,"class",_)},i:O,o:O,d(f){f&&R(t)}}}function nn(e,t,n){let{bg:r}=t,{description:l}=t,{title:s}=t,{href:i}=t;return e.$$set=c=>{"bg"in c&&n(0,r=c.bg),"description"in c&&n(1,l=c.description),"title"in c&&n(2,s=c.title),"href"in c&&n(3,i=c.href)},[r,l,s,i]}class kt extends B{constructor(t){super(),D(this,t,nn,en,z,{bg:0,description:1,title:2,href:3})}}function rn(e){let t,n,r,l,s,i,c,o;return r=new kt({props:{bg:"bg-red-600",href:"https://github.com/helltf/twitchbot#readme",description:"First bot I've created with Javascript - This project is no longer maintened but still online",title:"helltfbot"}}),s=new kt({props:{bg:"bg-blue-600",href:"/commands",description:"Full rebuild Version 2 of my previous bot in Typescript - New Features will come in the future - Just a better bot then before",title:"xdforsenxdlol"}}),c=new kt({props:{bg:"bg-gray-600",href:"/home",description:"A random side project I've started - Not much to explore here - May continue this in the future",title:"discordbot"}}),{c(){t=w("section"),n=w("div"),C(r.$$.fragment),l=S(),C(s.$$.fragment),i=S(),C(c.$$.fragment),g(n,"class","lg:flex-row flex-col m-auto flex items-center pl-9 pr-9 pt-12 pb-12 justify-center gap-10"),g(t,"class","bg-neutral-500 p-10 pt-20 pb-20")},m(u,a){A(u,t,a),h(t,n),E(r,n,null),h(n,l),E(s,n,null),h(n,i),E(c,n,null),o=!0},p:O,i(u){o||(y(r.$$.fragment,u),y(s.$$.fragment,u),y(c.$$.fragment,u),o=!0)},o(u){x(r.$$.fragment,u),x(s.$$.fragment,u),x(c.$$.fragment,u),o=!1},d(u){u&&R(t),N(r),N(s),N(c)}}}class ln extends B{constructor(t){super(),D(this,t,null,rn,z,{})}}function sn(e){let t;return{c(){t=w("section"),t.innerHTML=`<div class="w-full flex flex-col justify-start items-center gap-3 pt-32"><h1 class="text-8xl">HELLTF</h1> 
		<h2 class="text-neutral-500 text-4xl">IT-Student \xB7 Developer</h2> 
		<div class="flex flex-row align-middle "><img src="./okayeg.png" alt="okayeg emote"/> 
			<span class="text-8xl">\u{1F44B}</span></div> 
		<p class="text-xl text-center ml-40 mr-40">Hi, I\u2019m helltf, living and studying in Germany. I program stuff as a hobby
			and for my living.</p></div>`,g(t,"class","m-auto pb-20")},m(n,r){A(n,t,r)},p:O,i:O,o:O,d(n){n&&R(t)}}}class on extends B{constructor(t){super(),D(this,t,null,sn,z,{})}}const Jt="https://api.github.com/repos/helltf/",cn=async e=>{var t,n;try{const[r,l]=await Promise.all([fetch(`${Jt}${e}`),fetch(`${Jt}${e}/languages`)]),[s,i]=await Promise.all([r.json(),l.json()]);return{description:(t=s.description)!=null?t:"no description",languages:Object.keys(i).splice(0,4),tags:(n=s.topics)==null?void 0:n.splice(0,3),stars:s.stargazers_count}}catch(r){console.log(r)}};function Wt(e,t,n){const r=e.slice();return r[7]=t[n],r}function qt(e,t,n){const r=e.slice();return r[10]=t[n],r}function Gt(e){let t,n=e[10]+"",r,l;return{c(){t=w("li"),r=V(n),l=S(),g(t,"class","bg-neutral-600 pt-[2px] pb-[2px] pl-2 pr-2 rounded-sm")},m(s,i){A(s,t,i),h(t,r),h(t,l)},p(s,i){i&32&&n!==(n=s[10]+"")&&K(r,n)},d(s){s&&R(t)}}}function Qt(e){let t,n=e[7]+"",r;return{c(){t=w("li"),r=V(n)},m(l,s){A(l,t,s),h(t,r)},p(l,s){s&16&&n!==(n=l[7]+"")&&K(r,n)},d(l){l&&R(t)}}}function un(e){let t,n,r,l,s,i,c,o,u,a,d,m,_,f,p,b,P,M,L,$,I,k,v=e[5],H=[];for(let T=0;T<v.length;T+=1)H[T]=Gt(qt(e,v,T));let J=e[4],U=[];for(let T=0;T<J.length;T+=1)U[T]=Qt(Wt(e,J,T));return{c(){t=w("div"),n=w("div"),r=w("a"),l=w("h3"),s=V(e[0]),i=S(),c=V(e[2]),u=S(),a=w("span"),d=V(e[6]),m=V(" \u2B50"),_=S(),f=w("div"),p=w("p"),b=V(e[3]),P=S(),M=w("div"),L=w("ul");for(let T=0;T<H.length;T+=1)H[T].c();$=S(),I=w("div"),k=w("ul");for(let T=0;T<U.length;T+=1)U[T].c();g(l,"class","text-neutral-100"),g(r,"href",o="https://github.com/helltf/"+e[1]),g(n,"class","top flex justify-between"),g(p,"class","text-neutral-400 mb-2"),g(L,"class","text-neutral-400 flex flex-row gap-2"),g(f,"class","mid"),g(k,"class","flex flex-row justify-center gap-2"),g(I,"class","bot"),g(t,"class","w-[380px] flex flex-col justify-between min-w-[340px] min-h-[200px] bg-neutral-700 rounded-md p-7 shadow-md shadow-neutral-900 gap-2 hover:bg-neutral-500 transition-all")},m(T,F){A(T,t,F),h(t,n),h(n,r),h(r,l),h(l,s),h(l,i),h(l,c),h(n,u),h(n,a),h(a,d),h(a,m),h(t,_),h(t,f),h(f,p),h(p,b),h(f,P),h(f,M),h(M,L);for(let j=0;j<H.length;j+=1)H[j].m(L,null);h(t,$),h(t,I),h(I,k);for(let j=0;j<U.length;j+=1)U[j].m(k,null)},p(T,[F]){if(F&1&&K(s,T[0]),F&4&&K(c,T[2]),F&2&&o!==(o="https://github.com/helltf/"+T[1])&&g(r,"href",o),F&64&&K(d,T[6]),F&8&&K(b,T[3]),F&32){v=T[5];let j;for(j=0;j<v.length;j+=1){const Z=qt(T,v,j);H[j]?H[j].p(Z,F):(H[j]=Gt(Z),H[j].c(),H[j].m(L,null))}for(;j<H.length;j+=1)H[j].d(1);H.length=v.length}if(F&16){J=T[4];let j;for(j=0;j<J.length;j+=1){const Z=Wt(T,J,j);U[j]?U[j].p(Z,F):(U[j]=Qt(Z),U[j].c(),U[j].m(k,null))}for(;j<U.length;j+=1)U[j].d(1);U.length=J.length}},i:O,o:O,d(T){T&&R(t),xt(H,T),xt(U,T)}}}function an(e,t,n){let{title:r}=t,{repoName:l}=t,{icon:s}=t,i="",c=[],o=[],u=0;return Ot(async()=>{const a=await cn(l);n(3,i=a.description),n(4,c=a.languages),n(5,o=a.tags),n(6,u=a.stars)}),e.$$set=a=>{"title"in a&&n(0,r=a.title),"repoName"in a&&n(1,l=a.repoName),"icon"in a&&n(2,s=a.icon)},[r,l,s,i,c,o,u]}class fn extends B{constructor(t){super(),D(this,t,an,un,z,{title:0,repoName:1,icon:2})}}function Yt(e,t,n){const r=e.slice();return r[1]=t[n][0],r[2]=t[n][1],r[3]=t[n][2],r}function Xt(e){let t,n;return t=new fn({props:{icon:e[3],title:e[2],repoName:e[1]}}),{c(){C(t.$$.fragment)},m(r,l){E(t,r,l),n=!0},p:O,i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){x(t.$$.fragment,r),n=!1},d(r){N(t,r)}}}function mn(e){let t,n,r,l,s,i,c=e[0],o=[];for(let a=0;a<c.length;a+=1)o[a]=Xt(Yt(e,c,a));const u=a=>x(o[a],1,1,()=>{o[a]=null});return{c(){t=w("section"),n=w("div"),r=w("div"),r.innerHTML='<h2 class="mb-10 text-3xl ">Projects</h2>',l=S(),s=w("div");for(let a=0;a<o.length;a+=1)o[a].c();g(r,"class","flex lg:justify-start justify-center"),g(s,"class","lg:grid-cols-2 grid grid-cols-1 gap-5 gap-x-9 justify-items-center"),g(n,"class","pr-20 pl-20"),g(t,"class","m-auto")},m(a,d){A(a,t,d),h(t,n),h(n,r),h(n,l),h(n,s);for(let m=0;m<o.length;m+=1)o[m].m(s,null);i=!0},p(a,[d]){if(d&1){c=a[0];let m;for(m=0;m<c.length;m+=1){const _=Yt(a,c,m);o[m]?(o[m].p(_,d),y(o[m],1)):(o[m]=Xt(_),o[m].c(),y(o[m],1),o[m].m(s,null))}for(dt(),m=c.length;m<o.length;m+=1)u(m);gt()}},i(a){if(!i){for(let d=0;d<c.length;d+=1)y(o[d]);i=!0}},o(a){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)x(o[d]);i=!1},d(a){a&&R(t),xt(o,a)}}}function hn(e){return[[["helltfbot-v2","Version 2 of helltfbot","\u{1F916}"],["bot-v1-fullstack","Website and API v1","\u{1F310}"],["twitchbot","Version 1 Twitchbot","\u{1F4BE}"],["bot-v2-backend","Backend for v2","\u{1F980}"],["bot-v2-website","Frontend for v2","\u{1F5A5}\uFE0F"],["go-discord-bot","Old discord bot","\u{1F4A4}"]]]}class dn extends B{constructor(t){super(),D(this,t,hn,mn,z,{})}}function gn(e){let t,n,r,l,s,i,c;return n=new on({}),l=new ln({}),i=new dn({}),{c(){t=w("div"),C(n.$$.fragment),r=S(),C(l.$$.fragment),s=S(),C(i.$$.fragment),g(t,"class","flex flex-col m-auto h-[100vh] gap-24")},m(o,u){A(o,t,u),E(n,t,null),h(t,r),E(l,t,null),h(t,s),E(i,t,null),c=!0},p:O,i(o){c||(y(n.$$.fragment,o),y(l.$$.fragment,o),y(i.$$.fragment,o),c=!0)},o(o){x(n.$$.fragment,o),x(l.$$.fragment,o),x(i.$$.fragment,o),c=!1},d(o){o&&R(t),N(n),N(l),N(i)}}}class pn extends B{constructor(t){super(),D(this,t,null,gn,z,{})}}function _n(e){let t,n;return t=new pn({}),{c(){C(t.$$.fragment)},m(r,l){E(t,r,l),n=!0},p:O,i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){x(t.$$.fragment,r),n=!1},d(r){N(t,r)}}}class bn extends B{constructor(t){super(),D(this,t,null,_n,z,{})}}const wn=()=>new URLSearchParams(document.location.search).get("code"),$n=async e=>{await fetch({VITE_TWITCH_CLIENT_ID:"b6uhkaukifr993zprguyesbminengw",VITE_TWITCH_CLIENT_SECRET:"33nifii0byfc4zuoj05avojhkikos3",VITE_ENV:"prod",VITE_TWITCH_LOGIN:"https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=b6uhkaukifr993zprguyesbminengw&redirect_uri=http://localhost:3000/callback&scope=user%3Aread%3Aemail",BASE_URL:"/bot-v2-website/",MODE:"production",DEV:!1,PROD:!0}.VITE_BACKEND_URL+"token",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e.access_token,refresh_token:e.refresh_token})})},kn=async e=>{const t=new URLSearchParams({client_id:"b6uhkaukifr993zprguyesbminengw",client_secret:"33nifii0byfc4zuoj05avojhkikos3",grant_type:"authorization_code",code:e,redirect_uri:"http://localhost:3000/callback"});return await(await fetch("https://id.twitch.tv/oauth2/token",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json()};function yn(e){return Ot(async()=>{const t=await kn(wn());await $n(t),se("home")}),[]}class vn extends B{constructor(t){super(),D(this,t,yn,null,z,{})}}function xn(e){let t,n;return t=new bn({}),{c(){C(t.$$.fragment)},m(r,l){E(t,r,l),n=!0},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){x(t.$$.fragment,r),n=!1},d(r){N(t,r)}}}function Tn(e){let t;return{c(){t=w("h1"),t.textContent="Oh",g(t,"class","svelte-pu189y")},m(n,r){A(n,t,r)},p:O,d(n){n&&R(t)}}}function jn(e){let t;return{c(){t=w("h1"),t.textContent="Oh",g(t,"class","svelte-pu189y")},m(n,r){A(n,t,r)},p:O,d(n){n&&R(t)}}}function En(e){let t;return{c(){t=w("h1"),t.textContent="Oh",g(t,"class","svelte-pu189y")},m(n,r){A(n,t,r)},p:O,d(n){n&&R(t)}}}function Nn(e){let t,n;return t=new vn({}),{c(){C(t.$$.fragment)},m(r,l){E(t,r,l),n=!0},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){x(t.$$.fragment,r),n=!1},d(r){N(t,r)}}}function Sn(e){let t,n,r,l,s,i,c,o,u,a,d,m,_;return t=new tn({}),l=new tt({props:{path:"",$$slots:{default:[xn]},$$scope:{ctx:e}}}),i=new tt({props:{path:"info",$$slots:{default:[Tn]},$$scope:{ctx:e}}}),o=new tt({props:{path:"commands",$$slots:{default:[jn]},$$scope:{ctx:e}}}),a=new tt({props:{path:"stats",$$slots:{default:[En]},$$scope:{ctx:e}}}),m=new tt({props:{path:"callback",$$slots:{default:[Nn]},$$scope:{ctx:e}}}),{c(){C(t.$$.fragment),n=S(),r=w("div"),C(l.$$.fragment),s=S(),C(i.$$.fragment),c=S(),C(o.$$.fragment),u=S(),C(a.$$.fragment),d=S(),C(m.$$.fragment),g(r,"class","svelte-pu189y")},m(f,p){E(t,f,p),A(f,n,p),A(f,r,p),E(l,r,null),h(r,s),E(i,r,null),h(r,c),E(o,r,null),h(r,u),E(a,r,null),h(r,d),E(m,r,null),_=!0},p(f,p){const b={};p&2&&(b.$$scope={dirty:p,ctx:f}),l.$set(b);const P={};p&2&&(P.$$scope={dirty:p,ctx:f}),i.$set(P);const M={};p&2&&(M.$$scope={dirty:p,ctx:f}),o.$set(M);const L={};p&2&&(L.$$scope={dirty:p,ctx:f}),a.$set(L);const $={};p&2&&($.$$scope={dirty:p,ctx:f}),m.$set($)},i(f){_||(y(t.$$.fragment,f),y(l.$$.fragment,f),y(i.$$.fragment,f),y(o.$$.fragment,f),y(a.$$.fragment,f),y(m.$$.fragment,f),_=!0)},o(f){x(t.$$.fragment,f),x(l.$$.fragment,f),x(i.$$.fragment,f),x(o.$$.fragment,f),x(a.$$.fragment,f),x(m.$$.fragment,f),_=!1},d(f){N(t,f),f&&R(n),f&&R(r),N(l),N(i),N(o),N(a),N(m)}}}function Cn(e){let t,n,r,l,s;return n=new $e({}),l=new Be({props:{url:e[0],basepath:"/bot-v2-website/",$$slots:{default:[Sn]},$$scope:{ctx:e}}}),{c(){t=w("main"),C(n.$$.fragment),r=S(),C(l.$$.fragment),g(t,"class","svelte-pu189y")},m(i,c){A(i,t,c),E(n,t,null),h(t,r),E(l,t,null),s=!0},p(i,[c]){const o={};c&1&&(o.url=i[0]),c&2&&(o.$$scope={dirty:c,ctx:i}),l.$set(o)},i(i){s||(y(n.$$.fragment,i),y(l.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),x(l.$$.fragment,i),s=!1},d(i){i&&R(t),N(n),N(l)}}}function Pn(e,t,n){let{url:r=""}=t;return e.$$set=l=>{"url"in l&&n(0,r=l.url)},[r]}class In extends B{constructor(t){super(),D(this,t,Pn,Cn,z,{url:0})}}new In({target:document.getElementById("app")});
