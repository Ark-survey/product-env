import{r as b}from"./index.5cc7f48e.js";var it=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function yt(o){return o===null||typeof o!="object"?{}:Object.keys(o).reduce((n,s)=>{const c=o[s];return c!=null&&c!==!1&&(n[s]=c),n},{})}function Oe(o,n){return n?typeof n=="boolean"?n:Array.isArray(n)?n.includes(o):!1:!1}var wt={exports:{}};(function(o,n){var s=200,c="__lodash_hash_undefined__",u=9007199254740991,f="[object Arguments]",h="[object Array]",x="[object Boolean]",w="[object Date]",R="[object Error]",C="[object Function]",N="[object GeneratorFunction]",O="[object Map]",F="[object Number]",L="[object Object]",J="[object Promise]",X="[object RegExp]",$="[object Set]",Y="[object String]",U="[object Symbol]",K="[object WeakMap]",Z="[object ArrayBuffer]",G="[object DataView]",Q="[object Float32Array]",a="[object Float64Array]",l="[object Int8Array]",d="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",m="[object Uint8ClampedArray]",vt="[object Uint16Array]",xt="[object Uint32Array]",rr=/[\\^$.*+?()[\]{}|]/g,er=/\w*$/,nr=/^\[object .+?Constructor\]$/,or=/^(?:0|[1-9]\d*)$/,p={};p[f]=p[h]=p[Z]=p[G]=p[x]=p[w]=p[Q]=p[a]=p[l]=p[d]=p[A]=p[O]=p[F]=p[L]=p[X]=p[$]=p[Y]=p[U]=p[S]=p[m]=p[vt]=p[xt]=!0,p[R]=p[C]=p[K]=!1;var ir=typeof it=="object"&&it&&it.Object===Object&&it,sr=typeof self=="object"&&self&&self.Object===Object&&self,T=ir||sr||Function("return this")(),mt=n&&!n.nodeType&&n,Ct=mt&&!0&&o&&!o.nodeType&&o,ar=Ct&&Ct.exports===mt;function cr(t,r){return t.set(r[0],r[1]),t}function ur(t,r){return t.add(r),t}function fr(t,r){for(var e=-1,i=t?t.length:0;++e<i&&r(t[e],e,t)!==!1;);return t}function lr(t,r){for(var e=-1,i=r.length,g=t.length;++e<i;)t[g+e]=r[e];return t}function Ot(t,r,e,i){var g=-1,_=t?t.length:0;for(i&&_&&(e=t[++g]);++g<_;)e=r(e,t[g],g,t);return e}function pr(t,r){for(var e=-1,i=Array(t);++e<t;)i[e]=r(e);return i}function dr(t,r){return t==null?void 0:t[r]}function Tt(t){var r=!1;if(t!=null&&typeof t.toString!="function")try{r=!!(t+"")}catch{}return r}function jt(t){var r=-1,e=Array(t.size);return t.forEach(function(i,g){e[++r]=[g,i]}),e}function at(t,r){return function(e){return t(r(e))}}function St(t){var r=-1,e=Array(t.size);return t.forEach(function(i){e[++r]=i}),e}var hr=Array.prototype,gr=Function.prototype,z=Object.prototype,ct=T["__core-js_shared__"],Et=function(){var t=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Pt=gr.toString,E=z.hasOwnProperty,tt=z.toString,_r=RegExp("^"+Pt.call(E).replace(rr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),It=ar?T.Buffer:void 0,Mt=T.Symbol,Rt=T.Uint8Array,br=at(Object.getPrototypeOf,Object),yr=Object.create,wr=z.propertyIsEnumerable,Ar=hr.splice,Ft=Object.getOwnPropertySymbols,vr=It?It.isBuffer:void 0,xr=at(Object.keys,Object),ut=B(T,"DataView"),W=B(T,"Map"),ft=B(T,"Promise"),lt=B(T,"Set"),pt=B(T,"WeakMap"),q=B(Object,"create"),mr=M(ut),Cr=M(W),Or=M(ft),Tr=M(lt),jr=M(pt),Lt=Mt?Mt.prototype:void 0,$t=Lt?Lt.valueOf:void 0;function P(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var i=t[r];this.set(i[0],i[1])}}function Sr(){this.__data__=q?q(null):{}}function Er(t){return this.has(t)&&delete this.__data__[t]}function Pr(t){var r=this.__data__;if(q){var e=r[t];return e===c?void 0:e}return E.call(r,t)?r[t]:void 0}function Ir(t){var r=this.__data__;return q?r[t]!==void 0:E.call(r,t)}function Mr(t,r){var e=this.__data__;return e[t]=q&&r===void 0?c:r,this}P.prototype.clear=Sr,P.prototype.delete=Er,P.prototype.get=Pr,P.prototype.has=Ir,P.prototype.set=Mr;function j(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var i=t[r];this.set(i[0],i[1])}}function Rr(){this.__data__=[]}function Fr(t){var r=this.__data__,e=rt(r,t);if(e<0)return!1;var i=r.length-1;return e==i?r.pop():Ar.call(r,e,1),!0}function Lr(t){var r=this.__data__,e=rt(r,t);return e<0?void 0:r[e][1]}function $r(t){return rt(this.__data__,t)>-1}function Gr(t,r){var e=this.__data__,i=rt(e,t);return i<0?e.push([t,r]):e[i][1]=r,this}j.prototype.clear=Rr,j.prototype.delete=Fr,j.prototype.get=Lr,j.prototype.has=$r,j.prototype.set=Gr;function k(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var i=t[r];this.set(i[0],i[1])}}function kr(){this.__data__={hash:new P,map:new(W||j),string:new P}}function Dr(t){return et(this,t).delete(t)}function Br(t){return et(this,t).get(t)}function Hr(t){return et(this,t).has(t)}function Vr(t,r){return et(this,t).set(t,r),this}k.prototype.clear=kr,k.prototype.delete=Dr,k.prototype.get=Br,k.prototype.has=Hr,k.prototype.set=Vr;function D(t){this.__data__=new j(t)}function Nr(){this.__data__=new j}function Ur(t){return this.__data__.delete(t)}function Kr(t){return this.__data__.get(t)}function Wr(t){return this.__data__.has(t)}function qr(t,r){var e=this.__data__;if(e instanceof j){var i=e.__data__;if(!W||i.length<s-1)return i.push([t,r]),this;e=this.__data__=new k(i)}return e.set(t,r),this}D.prototype.clear=Nr,D.prototype.delete=Ur,D.prototype.get=Kr,D.prototype.has=Wr,D.prototype.set=qr;function Jr(t,r){var e=gt(t)||ye(t)?pr(t.length,String):[],i=e.length,g=!!i;for(var _ in t)(r||E.call(t,_))&&!(g&&(_=="length"||he(_,i)))&&e.push(_);return e}function Gt(t,r,e){var i=t[r];(!(E.call(t,r)&&Ht(i,e))||e===void 0&&!(r in t))&&(t[r]=e)}function rt(t,r){for(var e=t.length;e--;)if(Ht(t[e][0],r))return e;return-1}function Xr(t,r){return t&&kt(r,_t(r),t)}function dt(t,r,e,i,g,_,v){var y;if(i&&(y=_?i(t,g,_,v):i(t)),y!==void 0)return y;if(!nt(t))return t;var Ut=gt(t);if(Ut){if(y=le(t),!r)return ce(t,y)}else{var H=I(t),Kt=H==C||H==N;if(Ae(t))return re(t,r);if(H==L||H==f||Kt&&!_){if(Tt(t))return _?t:{};if(y=pe(Kt?{}:t),!r)return ue(t,Xr(y,t))}else{if(!p[H])return _?t:{};y=de(t,H,dt,r)}}v||(v=new D);var Wt=v.get(t);if(Wt)return Wt;if(v.set(t,y),!Ut)var qt=e?fe(t):_t(t);return fr(qt||t,function(bt,ot){qt&&(ot=bt,bt=t[ot]),Gt(y,ot,dt(bt,r,e,i,ot,t,v))}),y}function Yr(t){return nt(t)?yr(t):{}}function Zr(t,r,e){var i=r(t);return gt(t)?i:lr(i,e(t))}function Qr(t){return tt.call(t)}function zr(t){if(!nt(t)||_e(t))return!1;var r=Nt(t)||Tt(t)?_r:nr;return r.test(M(t))}function te(t){if(!Bt(t))return xr(t);var r=[];for(var e in Object(t))E.call(t,e)&&e!="constructor"&&r.push(e);return r}function re(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}function ht(t){var r=new t.constructor(t.byteLength);return new Rt(r).set(new Rt(t)),r}function ee(t,r){var e=r?ht(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}function ne(t,r,e){var i=r?e(jt(t),!0):jt(t);return Ot(i,cr,new t.constructor)}function oe(t){var r=new t.constructor(t.source,er.exec(t));return r.lastIndex=t.lastIndex,r}function ie(t,r,e){var i=r?e(St(t),!0):St(t);return Ot(i,ur,new t.constructor)}function se(t){return $t?Object($t.call(t)):{}}function ae(t,r){var e=r?ht(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function ce(t,r){var e=-1,i=t.length;for(r||(r=Array(i));++e<i;)r[e]=t[e];return r}function kt(t,r,e,i){e||(e={});for(var g=-1,_=r.length;++g<_;){var v=r[g],y=i?i(e[v],t[v],v,e,t):void 0;Gt(e,v,y===void 0?t[v]:y)}return e}function ue(t,r){return kt(t,Dt(t),r)}function fe(t){return Zr(t,_t,Dt)}function et(t,r){var e=t.__data__;return ge(r)?e[typeof r=="string"?"string":"hash"]:e.map}function B(t,r){var e=dr(t,r);return zr(e)?e:void 0}var Dt=Ft?at(Ft,Object):me,I=Qr;(ut&&I(new ut(new ArrayBuffer(1)))!=G||W&&I(new W)!=O||ft&&I(ft.resolve())!=J||lt&&I(new lt)!=$||pt&&I(new pt)!=K)&&(I=function(t){var r=tt.call(t),e=r==L?t.constructor:void 0,i=e?M(e):void 0;if(i)switch(i){case mr:return G;case Cr:return O;case Or:return J;case Tr:return $;case jr:return K}return r});function le(t){var r=t.length,e=t.constructor(r);return r&&typeof t[0]=="string"&&E.call(t,"index")&&(e.index=t.index,e.input=t.input),e}function pe(t){return typeof t.constructor=="function"&&!Bt(t)?Yr(br(t)):{}}function de(t,r,e,i){var g=t.constructor;switch(r){case Z:return ht(t);case x:case w:return new g(+t);case G:return ee(t,i);case Q:case a:case l:case d:case A:case S:case m:case vt:case xt:return ae(t,i);case O:return ne(t,i,e);case F:case Y:return new g(t);case X:return oe(t);case $:return ie(t,i,e);case U:return se(t)}}function he(t,r){return r=r==null?u:r,!!r&&(typeof t=="number"||or.test(t))&&t>-1&&t%1==0&&t<r}function ge(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function _e(t){return!!Et&&Et in t}function Bt(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||z;return t===e}function M(t){if(t!=null){try{return Pt.call(t)}catch{}try{return t+""}catch{}}return""}function be(t){return dt(t,!0,!0)}function Ht(t,r){return t===r||t!==t&&r!==r}function ye(t){return we(t)&&E.call(t,"callee")&&(!wr.call(t,"callee")||tt.call(t)==f)}var gt=Array.isArray;function Vt(t){return t!=null&&ve(t.length)&&!Nt(t)}function we(t){return xe(t)&&Vt(t)}var Ae=vr||Ce;function Nt(t){var r=nt(t)?tt.call(t):"";return r==C||r==N}function ve(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=u}function nt(t){var r=typeof t;return!!t&&(r=="object"||r=="function")}function xe(t){return!!t&&typeof t=="object"}function _t(t){return Vt(t)?Jr(t):te(t)}function me(){return[]}function Ce(){return!1}o.exports=be})(wt,wt.exports);var Te=wt.exports;function zt(o){return typeof o!="string"?[]:o.split(".")}function st(o,n,s){const c=zt(o);if(c.length===0)return s;const u=Te(s);if(c.length===1)return u[c[0]]=n,u;let f=u[c[0]];for(let h=1;h<c.length-1;h+=1){if(f===void 0)return u;f=f[c[h]]}return f[c[c.length-1]]=n,u}function V(o,n){const s=zt(o);if(s.length===0)return;let c=n[s[0]];for(let u=1;u<s.length&&c!==void 0;u+=1)c=c[s[u]];return c}function Jt(o){const n=yt(o);return{hasErrors:Object.keys(n).length>0,errors:n}}function At(o,n,s="",c={}){return typeof o!="object"||o===null?c:Object.keys(o).reduce((u,f)=>{const h=o[f],x=`${s===""?"":`${s}.`}${f}`,w=V(x,n);return typeof h=="function"&&(u[x]=h(w,n)),typeof h=="object"&&Array.isArray(w)&&w.forEach((R,C)=>At(h,n,`${x}.${C}`,u)),typeof h=="object"&&typeof w=="object"&&w!==null&&At(h,n,x,u),u},c)}function tr(o,n){return Jt(typeof o=="function"?o(n):At(o,n))}function Xt(o,n,s){if(typeof o!="string")return{hasError:!1,error:null};const c=tr(n,s),u=o in c.errors;return{hasError:u,error:u?c.errors[o]:null}}function je(o,{from:n,to:s},c){const u=V(o,c);if(!Array.isArray(u))return c;const f=[...u],h=u[n];return f.splice(n,1),f.splice(s,0,h),st(o,f,c)}function Se(o,n,s){const c=V(o,s);return Array.isArray(c)?st(o,c.filter((u,f)=>f!==n),s):s}function Ee(o,n,s,c){const u=V(o,c);if(!Array.isArray(u))return c;const f=[...u];return f.splice(typeof s=="number"?s:f.length,0,n),st(o,f,c)}function Pe(o){return n=>{if(!n)o(n);else if(typeof n=="function")o(n);else if(typeof n=="object"&&"nativeEvent"in n){const{currentTarget:s}=n;s instanceof HTMLInputElement&&(s.type==="checkbox"?o(s.checked):o(s.value))}else o(n)}}var Ie=Object.defineProperty,Me=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,Yt=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Zt=(o,n,s)=>n in o?Ie(o,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[n]=s,Qt=(o,n)=>{for(var s in n||(n={}))Fe.call(n,s)&&Zt(o,s,n[s]);if(Yt)for(var s of Yt(n))Le.call(n,s)&&Zt(o,s,n[s]);return o},$e=(o,n)=>Me(o,Re(n));function ke({initialValues:o={},initialErrors:n={},clearInputErrorOnChange:s=!0,validateInputOnChange:c=!1,validate:u}={}){const[f,h]=b.exports.useState(o),[x,w]=b.exports.useState(yt(n)),R=b.exports.useCallback(a=>w(l=>yt(typeof a=="function"?a(l):a)),[]),C=b.exports.useCallback(()=>w({}),[]),N=b.exports.useCallback(()=>{h(o),C()},[]),O=b.exports.useCallback((a,l)=>R(d=>$e(Qt({},d),{[a]:l})),[]),F=b.exports.useCallback(a=>R(l=>{if(typeof a!="string")return l;const d=Qt({},l);return delete d[a],d}),[]),L=b.exports.useCallback((a,l)=>{const d=Oe(a,c);h(A=>{const S=st(a,l,A);if(d){const m=Xt(a,u,S);m.hasError?O(a,m.error):F(a)}return S}),!d&&s&&O(a,null)},[]),J=b.exports.useCallback(a=>{h(a),s&&C()},[]),X=b.exports.useCallback((a,l)=>h(d=>je(a,l,d)),[]),$=b.exports.useCallback((a,l)=>h(d=>Se(a,l,d)),[]),Y=b.exports.useCallback((a,l,d)=>h(A=>Ee(a,l,d,A)),[]),U=b.exports.useCallback(()=>{const a=tr(u,f);return w(a.errors),a},[f,u]),K=b.exports.useCallback(a=>{const l=Xt(a,u,f);return l.hasError?O(a,l.error):F(a),l},[f,u]),Z=(a,{type:l="input",withError:d=l==="input"}={})=>{const A=Pe(m=>L(a,m)),S=m=>(d&&(m.error=x[a]),m);return S(l==="checkbox"?{checked:V(a,f),onChange:A}:{value:V(a,f),onChange:A})},G=(a,l)=>d=>{d.preventDefault();const A=U();A.hasErrors?l==null||l(A.errors,f,d):a(f,d)},Q=b.exports.useCallback(a=>{a.preventDefault(),N()},[]);return{values:f,errors:x,setValues:J,setErrors:R,setFieldValue:L,setFieldError:O,clearFieldError:F,clearErrors:C,reset:N,validate:U,validateField:K,reorderListItem:X,removeListItem:$,insertListItem:Y,getInputProps:Z,onSubmit:G,onReset:Q}}export{ke as u};
