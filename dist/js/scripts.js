/*!
 * GSAP 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Pe}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new qt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&!B&&ma(),t.render(e,r,i||B&&e<0&&(t._initted||t._startAt)),ct.length&&!B&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||L,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(B?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==L?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Kt(t,e,n),t._initted?!r&&t._pt&&!B&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Jt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Yt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!B),t.progress()<1&&St(t,"onInterrupt"),t}function wb(t){if(x()){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:fe,add:Qt,kill:_e,modifier:pe,rawVars:0},a={targetTest:0,get:0,getSetter:re,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Pe,i,ge)}else Ct.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Pt+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&Pt,e&Pt]:0:Dt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Dt[e])p=Dt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&Pt,p&Pt,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&Pt,e&Pt]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||Dt.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/Pt,a=p[1]/Pt,s=p[2]/Pt,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=zt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=It[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Lt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):It._CE&&Bt.test(t)?It._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in It[t]=ot[t]=a,It[n=t.toLowerCase()]=r,a)It[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=It[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Im(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Im:"in"===r?function(t){return 1-Im(1-t)}:Tb(Im);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Qm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Qm:"in"===e?function(t){return 1-Qm(1-t)}:Tb(Qm);return t.config=function(t){return Vb(e,t)},t}var I,B,l,L,h,n,a,i,o,f,c,d,p,_,m,g,b,O,k,M,A,C,D,E,z,F,Y,j,V={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},q={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,W=N/4,K=0,G=Math.sqrt,$=Math.cos,H=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},At=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},St=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},Ct=[],Pt=255,Dt={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Et=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Dt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),zt=/hsl[a]?\(/,Rt=(k=Date.now,M=500,A=33,C=k(),D=C,z=E=1e3/240,g={time:0,frame:0,tick:function tick(){xl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Pe,(h.gsapVersions||(h.gsapVersions=[])).push(Pe.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame,Ct.forEach(wb)),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,xl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,A=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),z=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=O&&O--},_listeners:F=[]}),Ft=function _wake(){return!d&&Rt.wake()},It={},Bt=/^[\d.\-M][\d.\-,\s]/,Lt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:It[t]||Ob(t))||e};function xl(t){var e,r,i,n,a=k()-D,s=!0===t;if(M<a&&(C+=a-A),(0<(e=(i=(D+=a)-C)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(E<=e?4:E-e),r=1),s||(p=_(xl)),r)for(O=0;O<F.length;O++)F[O](i,b,n,t)}function fn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),It.Linear.easeNone=It.none=It.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-fn(1-t)},fn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(G(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-$(t*W)}),Sb("Back",Vb("in"),Vb("out"),Vb()),It.SteppedEase=It.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},q.ease=It["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var Vt,qt=function GSCache(t,e){this.id=K++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:re},Ut=((Vt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Vt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Vt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Vt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},Vt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Vt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Vt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Vt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},Vt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Vt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},Vt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},Vt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Vt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},Vt.revert=function revert(t){void 0===t&&(t=lt);var e=B;return B=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),B=e,this},Vt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(t):r},Vt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},Vt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},Vt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Vt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},Vt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},Vt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Vt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Vt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Vt.resume=function resume(){return this.paused(!1)},Vt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},Vt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},Vt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},Vt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Vt.then=function then(t){var i=this;return new Promise(function(e){function Ao(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Ao():i._prom=Ao})},Vt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),L&&Ka(t.parent||L,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Jt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Jt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Jt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==L&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&this._tTime-c*o-this._dur<=0&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&St(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(St(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||B&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&St(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(St(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Jt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Jt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Jt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof Jt?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Jt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===L&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(L._ts&&(na(L,Ga(t,L)),f=Rt.frame),Rt.frame>=mt){mt+=V.autoSleep||120;var e=L._first;if((!e||!e._ts)&&V.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Gt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||J(t))return r(t)?Gt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Gt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new ge(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Wt,Qt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?ee:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new ge(this._pt,t,e,0,1,le,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||V.stringFilter,l)):(c=new ge(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?oe:se,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Kt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,O=m.callbackScope,k=m.runBackwards,M=m.yoyoEase,A=m.keyframes,S=m.autoRevert,C=t._dur,P=t._startAt,D=t._targets,E=t.parent,z=E&&"nested"===E.data?E.vars.targets:D,R="auto"===t._overwrite&&!I,F=t.timeline;if(!F||A&&g||(g="none"),t._ease=jt(g,q.ease),t._yEase=M?Yt(jt(!0===M?g:M,q.ease)):0,M&&t._yoyo&&!t._repeat&&(M=t._yEase,t._yEase=t._ease,t._ease=M),t._from=!F&&!!m.runBackwards,!F||A&&!m.stagger){if(p=(l=D[0]?fa(D[0]).harness:0)&&m[l.prop],i=ua(m,ft),P&&(P._zTime<0&&P.progress(1),e<0&&k&&y&&!S?P.render(-1,!0):P.revert(k&&C?ht:ut),P._lazy=0),v){if(za(t._startAt=Jt.set(D,qa({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!P&&w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:O,stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(B||!y&&!S)&&t._startAt.revert(ht),y&&C&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(k&&C&&!P)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!P&&w(T),immediateRender:y,stagger:0,parent:E},i),p&&(a[l.prop]=p),za(t._startAt=Jt.set(D,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(B?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=C&&w(T)||T&&!C,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||ea(D)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=z===D?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,z)&&(t._pt=s=new ge(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,d,o,z))?f.priority&&(u=1):c[a]=s=Qt.call(t,o,a,"get",i[a],d,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),R&&t._pt&&(Nt=t,L.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(dt[h.id]=1)}u&&me(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,A&&e<=0&&F.render(U,!0,!0)},Gt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},$t=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha($t+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var Jt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,A=r.parent||L,S=(Z(e)||J(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=S.length?ea(S):R("GSAP target "+e+" not found. https://greensock.com",!V.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:A&&"nested"===A.data?A.vars.targets:S})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=S.length,c=T&&eb(T),v(T))for(l in T)~$t.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),d&&yt(u,d),f=S[o],u.duration=+Gt(_,_assertThisInitialized(a),o,f,S),u.delay=(+Gt(m,_assertThisInitialized(a),o,f,S)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,S):0),s._ease=It.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var C,P,D,E=0;if(Z(x))x.forEach(function(t){return s.to(S,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(C=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<C.length;o++)(D={ease:(P=C[o]).e,duration:(P.t-(o?C[o-1].t:0))/100*_})[l]=P.v,s.to(S,D,E),E+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||I||(Nt=_assertThisInitialized(a),L.killTweensOf(S),Nt=0),Ka(A,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(A._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==A.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-X<t&&!_?d:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&!a&&(St(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),St(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&St(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(St(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||B||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&St(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&St(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||B||(St(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Rt.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Kt(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Kt(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Mt(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return L.killTweensOf(t,e,r)},Tween}(Ut);qa(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},ee=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},re=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},se=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},oe=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},le=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},fe=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},pe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},_e=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},me=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ge=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||se,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Jt,ot.TimelineLite=ot.TimelineMax=Xt,L=new Xt({sortChildren:!1,defaults:q,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),V.stringFilter=Fb;function Dc(t){return(be[t]||xe).map(function(t){return t()})}function Ec(){var t=Date.now(),o=[];2<t-Oe&&(Dc("matchMediaInit"),Te.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Dc("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),Oe=t,Dc("matchMedia"))}var ye,Te=[],be={},xe=[],Oe=0,Me=((ye=Context.prototype).add=function add(t,i,n){function Dw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Dw,t===s?Dw(a):t?a[t]=Dw:Dw},ye.ignore=function ignore(t){var e=l;l=null,t(this),l=e},ye.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Jt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},ye.clear=function clear(){this._r.length=this.data.length=0},ye.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof Ut)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t){var n=Te.indexOf(this);~n&&Te.splice(n,1)}},ye.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var Ae,Se=((Ae=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Me(0,r||this.scope),o=s.conditions={};for(n in this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(Te.indexOf(s)<0&&Te.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Ec):i.addEventListener("change",Ec));return a&&e(s),this},Ae.revert=function revert(t){this.kill(t||{})},Ae.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Ce={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return L.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return Pe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&fe(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Vx(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Pe.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Vx.tween=n,Vx},isTweening:function isTweening(t){return 0<L.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,q.ease)),ta(q,t||{})},config:function config(t){return ta(V,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){It[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):It},getById:function getById(t){return L.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),L.remove(n),n._dp=0,n._time=n._tTime=L._time,r=L._first;r;)i=r._next,!e&&!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(L,n,0),n},context:function context(t,e){return t?new Me(t,e):l},matchMedia:function matchMedia(t){return new Se(t)},matchMediaRefresh:function matchMediaRefresh(){return Te.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Ec()},addEventListener:function addEventListener(t,e){var r=be[t]||(be[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=be[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return At(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:At,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Qt.call(c,e,s,"get",i[s]);a=function func(t){return fe(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:L,core:{PropTween:ge,globals:S,Tween:Jt,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return B},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return I=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ce[t]=Jt[t]}),Rt.add(Xt.updateRoot),c=Ce.to({},{duration:0});function Ic(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Kc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Ic(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Pe=Ce.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)B?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Kc("roundProps",fb),Kc("modifiers"),Kc("snap",gb))||Ce;Jt.version=Xt.version=Pe.version="3.11.5",o=1,x()&&Ft();function ud(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function vd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function xd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function yd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function zd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Ad(t,e,r){return t.style[e]=r}function Bd(t,e,r){return t.style.setProperty(e,r)}function Cd(t,e,r){return t._gsap[e]=r}function Dd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Ed(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Fd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Id(t,e){var r=this,i=this.target,n=i.style;if(t in nr){if(this.tfm=this.tfm||{},"transform"===t)return fr.transform.split(",").forEach(function(t){return Id.call(r,t,e)});if(~(t=fr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=vr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:vr(i,t),0<=this.props.indexOf(cr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(dr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Jd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Kd(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(ur,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Jd(n),a.uncache=1)}}function Ld(t,e){var r={target:t,props:[],revert:Kd,save:Id};return t._gsap||Pe.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Nd(t,e){var r=Ee.createElementNS?Ee.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ee.createElement(t);return r.style?r:Ee.createElement(t)}function Od(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ur,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Od(t,_r(e)||e,1)||""}function Rd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(De=window,Ee=De.document,ze=Ee.documentElement,Fe=Nd("div")||{style:{}},Nd("div"),cr=_r(cr),dr=cr+"Origin",Fe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Le=!!_r("perspective"),Be=Pe.core.reverting,Re=1)}function Sd(t){var e,r=Nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ze.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Sd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ze.removeChild(r),this.style.cssText=a,e}function Td(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Ud(e){var r;try{r=e.getBBox()}catch(t){r=Sd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Sd||(r=Sd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Td(e,["x","cx","x1"])||0,y:+Td(e,["y","cy","y1"])||0,width:0,height:0}}function Vd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Ud(t))}function Wd(t,e){if(e){var r=t.style;e in nr&&e!==dr&&(e=cr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(ur,"-$1").toLowerCase())):r.removeAttribute(e)}}function Xd(t,e,r,i,n,a){var s=new ge(t._pt,e,r,0,1,a?zd:yd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function $d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Fe.style,f=hr.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||mr[i]||mr[h]?u:("px"===h||p||(u=$d(t,e,r,"px")),o=t.getCTM&&Vd(t),!_&&"%"!==h||!nr[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Ee&&a.appendChild||(a=Ee.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||gr[Od(a,"display")]||(l.position=Od(t,"position")),a===t&&(l.position="static"),a.appendChild(Fe),n=Fe[d],a.removeChild(Fe),l.position="absolute",f&&_&&((s=fa(a)).time=Rt.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function ae(t,e,r,i){if(!r||"none"===r){var n=_r(e,t,1),a=n&&Od(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Od(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new ge(this._pt,t.style,e,0,1,le),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Od(t,e)||i,t.style[e]=r),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||V.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=$d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?zd:yd;return nt.test(i)&&(g.e=0),this._pt=g}function ce(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=yr[r]||r,e[1]=yr[i]||i,e.join(" ")}function de(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],nr[r]&&(i=1,r="transformOrigin"===r?dr:cr),Wd(a,r);i&&(Wd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),xr(a,1),u.uncache=1,Jd(s)))}}function he(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function ie(t){var e=Od(t,cr);return he(e)?br:e.substr(7).match(et).map(ia)}function je(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=ie(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?br:u:(u!==br||t.offsetParent||t===ze||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,ze.appendChild(t)),u=ie(t),n?o.display=n:Wd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ze.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function ke(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||je(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==br&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Ud(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[dr]="0px 0px",a&&(Xd(a,h,"xOrigin",f,w),Xd(a,h,"yOrigin",c,x),Xd(a,h,"xOffset",d,h.xOffset),Xd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function ne(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat($d(t,"x",r+"px",i)))+i}function ue(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?ar:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new ge(t._pt,e,i,n,l,vd),o.e=f,o.u="deg",t._props.push(i),o}function ve(t,e){for(var r in e)t[r]=e[r];return t}function we(t,e,r){var i,n,a,s,o,u,h,l=ve({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=xr(r,1),Wd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=xr(r,1),f[cr]=a),nr)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?$d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ge(t._pt,i,n,o,u-o,ud),t._pt.u=h||0,t._props.push(n));ve(i,l)}var De,Ee,ze,Re,Fe,Ie,Be,Le,Ye=It.Power0,Ve=It.Power1,qe=It.Power2,Ue=It.Power3,Xe=It.Power4,Ne=It.Linear,We=It.Quad,Qe=It.Cubic,Ke=It.Quart,Ge=It.Quint,$e=It.Strong,He=It.Elastic,Je=It.Back,Ze=It.SteppedEase,tr=It.Bounce,er=It.Sine,rr=It.Expo,ir=It.Circ,nr={},ar=180/Math.PI,sr=Math.PI/180,or=Math.atan2,ur=/([A-Z])/g,hr=/(left|right|width|margin|padding|x)/i,lr=/[\s,\(]\S/,fr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",dr=cr+"Origin",pr="O,Moz,ms,Ms,Webkit".split(","),_r=function _checkPropPrefix(t,e,r){var i=(e||Fe).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(pr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?pr[n]:"")+t},mr={deg:1,rad:1,turn:1},gr={grid:1,flex:1},vr=function _get(t,e,r,i){var n;return Re||Rd(),e in fr&&"transform"!==e&&~(e=fr[e]).indexOf(",")&&(e=e.split(",")[0]),nr[e]&&"transform"!==e?(n=xr(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Or(Od(t,dr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Tr[e]&&Tr[e](t,e,r)||Od(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?$d(t,e,n,r)+r:n},yr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ge(t._pt,e,r,0,0,de);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},br=[1,0,0,1,0,0],wr={},xr=function _parseTransform(t,e){var r=t._gsap||new qt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,O,k,M,A,S,C,P,D,E,z,R,F=t.style,I=r.scaleX<0,B="deg",L=getComputedStyle(t),Y=Od(t,dr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Vd(t)),L.translate&&("none"===L.translate&&"none"===L.scale&&"none"===L.rotate||(F[cr]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+("none"!==L[cr]?L[cr]:"")),F.scale=F.rotate=F.translate="none"),m=je(t,r.svg),r.svg&&(M=r.uncache?(A=t.getBBox(),Y=r.xOrigin-A.x+"px "+(r.yOrigin-A.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),ke(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==br&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?or(b,T)*ar:0,(f=w||x?or(w,x)*ar+u:0)&&(o*=Math.abs(Math.cos(f*sr))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],C=m[8],P=m[9],D=m[10],z=m[11],i=m[12],n=m[13],a=m[14],h=(g=or(R,D))*ar,g&&(M=O*(v=Math.cos(-g))+C*(y=Math.sin(-g)),A=k*v+P*y,S=R*v+D*y,C=O*-y+C*v,P=k*-y+P*v,D=R*-y+D*v,z=E*-y+z*v,O=M,k=A,R=S),l=(g=or(-w,D))*ar,g&&(v=Math.cos(-g),z=x*(y=Math.sin(-g))+z*v,T=M=T*v-C*y,b=A=b*v-P*y,w=S=w*v-D*y),u=(g=or(b,T))*ar,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),A=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=A),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=or(O,k),f=2e-4<Math.abs(g)?g*ar:0,d=z?1/(z<0?-z:z):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!he(Od(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+B,r.rotationX=ia(h)+B,r.rotationY=ia(l)+B,r.skewX=f+B,r.skewY=c+B,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[dr]=Or(Y)),r.xOffset=r.yOffset=0,r.force3D=V.force3D,r.renderTransform=r.svg?Pr:Le?Cr:kr,r.uncache=0,r},Or=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},kr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cr(t,e)},Mr="0deg",Ar="0px",Sr=") ",Cr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Mr||h!==Mr)){var b,w=parseFloat(h)*sr,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*sr,b=Math.cos(w),a=ne(g,a,x*b*-v),s=ne(g,s,-Math.sin(w)*-v),o=ne(g,o,O*b*-v+v)}_!==Ar&&(y+="perspective("+_+Sr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ar&&s===Ar&&o===Ar||(y+=o!==Ar||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Sr),u!==Mr&&(y+="rotate("+u+Sr),h!==Mr&&(y+="rotateY("+h+Sr),l!==Mr&&(y+="rotateX("+l+Sr),f===Mr&&c===Mr||(y+="skew("+f+", "+c+Sr),1===d&&1===p||(y+="scale("+d+", "+p+Sr),g.style[cr]=y||"translate(0, 0)"},Pr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=sr,d*=sr,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=sr,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=$d(g,"x",l,"px"),O=$d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Tr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return vr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Dr,Er,zr,Rr={name:"css",register:Rd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(c in Re||Rd(),this.styles=this.styles||Ld(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!ac(c,e,i,n,t,a)))if(l=typeof o,f=Tr[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=$d(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(O&&c in O?(s="function"==typeof O[c]?O[c].call(i,n,t,a):O[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=V.units[c]||Ya(vr(t,c))||""),"="===(s+"").charAt(1)&&(s=vr(t,c))):s=vr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in fr&&("autoAlpha"===c&&(1===h&&"hidden"===vr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Xd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=fr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in nr)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||xr(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new ge(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new ge(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,ud),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(dr,0,x[dr]),o=ce(o),v.svg?ke(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Xd(this,v,"zOrigin",v.zOrigin,p),Xd(this,x,c,Or(s),Or(o)));continue}if("svgOrigin"===c){ke(t,o,1,y,0,this);continue}if(c in wr){ue(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Xd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){we(this,o,t);continue}}else c in x||(c=_r(c)||c);if(m||(u||0===u)&&(h||0===h)&&!lr.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in V.units?V.units[c]:d))&&(h=$d(t,c,s,p)),this._pt=new ge(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?ud:xd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=wd);else if(c in x)ae.call(this,t,c,s,_?_+o:o);else if(c in t)this.add(t,c,s||t[c],_?_+o:o,n,a);else if("parseTransform"!==c){Q(c,o);continue}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&me(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:vr,aliases:fr,getSetter:function getSetter(t,e,r){var i=fr[e];return i&&i.indexOf(",")<0&&(e=i),e in nr&&e!==dr&&(t._gsap.x||vr(t,"x"))?r&&Ie===r?"scale"===e?Dd:Cd:(Ie=r||{})&&("scale"===e?Ed:Fd):t.style&&!u(t.style[e])?Ad:~e.indexOf("-")?Bd:re(t,e)},core:{_removeProperty:Wd,_getMatrix:je}};Pe.utils.checkPrefix=_r,Pe.core.getStyleSaver=Ld,zr=ha((Dr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Er="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){nr[t]=1}),ha(Er,function(t){V.units[t]="deg",wr[t]=1}),fr[zr[13]]=Dr+","+Er,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");fr[e[1]]=zr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){V.units[t]="px"}),Pe.registerPlugin(Rr);var Fr=Pe.registerPlugin(Rr)||Pe,Ir=Fr.core.Tween;e.Back=Je,e.Bounce=tr,e.CSSPlugin=Rr,e.Circ=ir,e.Cubic=Qe,e.Elastic=He,e.Expo=rr,e.Linear=Ne,e.Power0=Ye,e.Power1=Ve,e.Power2=qe,e.Power3=Ue,e.Power4=Xe,e.Quad=We,e.Quart=Ke,e.Quint=Ge,e.Sine=er,e.SteppedEase=Ze,e.Strong=$e,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=Jt,e.TweenMax=Ir,e.default=Fr,e.gsap=Fr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Me||"undefined"!=typeof window&&(Me=window.gsap)&&Me.registerPlugin&&Me}function z(e,t){return~qe.indexOf(e)&&qe[qe.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return Re&&Re.isPressed||Ie.cache++}function G(r,n){function Vc(e){if(e||0===e){o&&(ke.history.scrollRestoration="manual");var t=Re&&Re.isPressed;e=Vc.v=Math.round(e)||(Re&&Re.iOS?1:0),r(e),Vc.cacheID=Ie.cache,t&&i("ss",e)}else(n||Ie.cache!==Vc.cacheID||i("ref"))&&(Vc.cacheID=Ie.cache,Vc.v=r());return Vc.v+Vc.offset}return Vc.offset=0,r&&Vc}function J(e){return Me.utils.toArray(e)[0]||("string"==typeof e&&!1!==Me.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=Ee.scrollingElement||Pe);var o=Ie.indexOf(t),i=n===je.sc?1:2;~o||(o=Ie.push(t)-1),Ie[o+i]||t.addEventListener("scroll",F);var a=Ie[o+i],s=a||(Ie[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Me.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function rd(e,t){var r=Ne();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=Ne(),l=s,n=t||50,c=Math.max(500,3*n);return{update:rd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=Ne();return!e&&0!==e||e===i||rd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(De=Me.core.globals().ScrollTrigger)&&De.core&&function _integrate(){var e=De.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Ie),n.push.apply(n,qe),Ie=t,qe=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return(Me=e||r())&&"undefined"!=typeof document&&document.body&&(ke=window,Pe=(Ee=document).documentElement,Oe=Ee.body,t=[ke,Ee,Pe,Oe],Me.utils.clamp,ze=Me.core.context||function(){},Be="onpointerenter"in Oe?"pointer":"mouse",Ae=k.isTouch=ke.matchMedia&&ke.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ke||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Le=k.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Ce=1),Ce}var Me,Ce,ke,Ee,Pe,Oe,Ae,Be,De,t,Re,Le,ze,o=1,Fe=[],Ie=[],qe=[],Ne=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",He={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?ke.scrollTo(e,je.sc()):ke.pageXOffset||Ee[n]||Pe[n]||Oe[n]||0})},je={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:He,sc:G(function(e){return arguments.length?ke.scrollTo(He.sc(),e):ke.pageYOffset||Ee[a]||Pe[a]||Oe[a]||0})};He.op=je,Ie.cache=0;var k=(Observer.prototype.init=function init(e){Ce||P(Me)||console.warn("Please gsap.registerPlugin(Observer)"),De||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,p=e.event,d=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,S=e.onChangeY,T=e.onChange,k=e.onToggleX,E=e.onToggleY,D=e.onHover,R=e.onHoverEnd,z=e.onMove,X=e.ignoreCheck,Y=e.isNormalizer,I=e.onGestureStart,q=e.onGestureEnd,V=e.onWheel,H=e.onEnable,W=e.onDisable,j=e.onClick,G=e.scrollSpeed,U=e.capture,Q=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function Se(){return ye=Ne()}function Te(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||X&&X(e,t)}function Ve(){var e=se.deltaX=N(be),t=se.deltaY=N(me),r=Math.abs(e)>=o,n=Math.abs(t)>=o;T&&(r||n)&&T(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),S&&S(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(z&&z(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(V(se),oe=!1),ee=0}function We(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(Ve):Ve()}function Xe(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(Ve):Ve()}function Ye(e){if(!Te(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),Xe(n,o),i||d&&d(se))}}function _e(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&I(e,se.isDragging)}function af(){return(se.isGesturing=!1)||q(se)}function bf(e){if(!Te(e)){var t=ue(),r=fe();We((t-pe)*G,(r-de)*G,1),pe=t,de=r,l&&te.restart(!0)}}function cf(e){if(!Te(e)){e=M(e,s),V&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?ke.innerHeight:1)*f;We(e.deltaX*t,e.deltaY*t,0),l&&!Y&&te.restart(!0)}}function df(e){if(!Te(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,(n||o)&&Xe(n,o)}}function ef(e){se.event=e,D(se)}function ff(e){se.event=e,R(se)}function gf(e){return Te(e)||M(e,s)&&j(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Me.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,G=G||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(ke.getComputedStyle(Oe).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=K(i,He),fe=K(i,je),pe=ue(),de=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Le[0],he=A(i),ve=i.ownerDocument||Ee,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){Te(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(Y?i:ve,Le[1],Ye,s,!0),se.deltaX=se.deltaY=0,v&&v(se))},we=se.onRelease=function(t){if(!Te(t,1)){C(Y?i:ve,Le[1],Ye,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),n=M(t);!r&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Me.delayedCall(.08,function(){if(300<Ne()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,ke,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!Y&&te.restart(!0),g&&r&&g(se),b&&b(se,r)}};te=se._dc=Me.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,ze(this),se.enable=function(e){return se.isEnabled||(B(he?ve:i,"scroll",F),0<=t.indexOf("scroll")&&B(he?ve:i,"scroll",bf,s,U),0<=t.indexOf("wheel")&&B(i,"wheel",cf,s,U),(0<=t.indexOf("touch")&&Ae||0<=t.indexOf("pointer"))&&(B(i,Le[0],xe,s,U),B(ve,Le[2],we),B(ve,Le[3],we),Q&&B(i,"click",Se,!1,!0),j&&B(i,"click",gf),I&&B(ve,"gesturestart",_e),q&&B(ve,"gestureend",af),D&&B(i,Be+"enter",ef),R&&B(i,Be+"leave",ff),z&&B(i,Be+"move",df)),se.isEnabled=!0,e&&e.type&&xe(e),H&&H(se)),se},se.disable=function(){se.isEnabled&&(Fe.filter(function(e){return e!==se&&A(e.target)}).length||C(he?ve:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(Y?i:ve,Le[1],Ye,!0)),C(he?ve:i,"scroll",bf,U),C(i,"wheel",cf,U),C(i,Le[0],xe,U),C(ve,Le[2],we),C(ve,Le[3],we),C(i,"click",Se,!0),C(i,"click",gf),C(ve,"gesturestart",_e),C(ve,"gestureend",af),C(i,Be+"enter",ef),C(i,Be+"leave",ff),C(i,Be+"move",df),se.isEnabled=se.isPressed=se.isDragging=!1,W&&W(se))},se.kill=se.revert=function(){se.disable();var e=Fe.indexOf(se);0<=e&&Fe.splice(e,1),Re===se&&(Re=0)},Fe.push(se),Y&&A(i)&&(Re=se),se.enable(p)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.11.5",k.create=function(e){return new k(e)},k.register=P,k.getAll=function(){return Fe.slice()},k.getById=function(t){return Fe.filter(function(e){return e.vars.id===t})[0]},r()&&Me.registerPlugin(k);function za(){return rt=1}function Aa(){return rt=0}function Ba(e){return e}function Ca(e){return Math.round(1e5*e)/1e5||0}function Da(){return"undefined"!=typeof window}function Ea(){return Je||Da()&&(Je=window.gsap)&&Je.registerPlugin&&Je}function Fa(e){return!!~l.indexOf(e)}function Ga(e){return z(e,"getBoundingClientRect")||(Fa(e)?function(){return Lt.width=Ke.innerWidth,Lt.height=Ke.innerHeight,Lt}:function(){return Ct(e)})}function Ja(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-Ga(e)()[o]:Fa(e)?(Ue[r]||Qe[r])-(Ke["inner"+n]||Ue["client"+n]||Qe["client"+n]):e[r]-e["offset"+n])}function Ka(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function La(e){return"string"==typeof e}function Ma(e){return"function"==typeof e}function Na(e){return"number"==typeof e}function Oa(e){return"object"==typeof e}function Pa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Qa(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function fb(e){return Ke.getComputedStyle(e)}function hb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function jb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function kb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function mb(o){var i=Je.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function ob(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function pb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function qb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function rb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function vb(e,t){if(La(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in R?R[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function wb(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,p=o.fontWeight,d=Ge.createElement("div"),g=Fa(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?Qe:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===je?S:T)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),d._isStart=b,d.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),d.style.cssText=y,d.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(d,v.children[0]):v.appendChild(d),d._offset=d["offset"+n.op.d2],X(d,0,n,b),d}function Bb(){return 34<pt()-dt&&(w=w||requestAnimationFrame(W))}function Cb(){v&&v.isPressed&&!(v.startX>Qe.clientWidth)||(Ie.cache++,v?w=w||requestAnimationFrame(W):W(),dt||q("scrollStart"),dt=pt())}function Db(){y=Ke.innerWidth,m=Ke.innerHeight}function Eb(){Ie.cache++,tt||h||Ge.fullscreenElement||Ge.webkitFullscreenElement||b&&y===Ke.innerWidth&&!(Math.abs(Ke.innerHeight-m)>.25*Ke.innerHeight)||c.restart(!0)}function Hb(){return qb($,"scrollEnd",Hb)||Bt(!0)}function Kb(e){for(var t=0;t<V.length;t+=5)(!e||V[t+4]&&V[t+4].query===e)&&(V[t].style.cssText=V[t+1],V[t].getBBox&&V[t].setAttribute("transform",V[t+2]||""),V[t+3].uncache=1)}function Lb(e,t){var r;for(nt=0;nt<Pt.length;nt++)!(r=Pt[nt])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));t&&Kb(t),t||q("revert")}function Mb(e,t){Ie.cache++,!t&&lt||Ie.forEach(function(e){return Ma(e)&&e.cacheID++&&(e.rec=0)}),La(e)&&(Ke.history.scrollRestoration=x=e)}function Zb(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=j.length,a=t.style,s=e.style;i--;)a[o=j[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[T]=s[S]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[vt]=jb(e,He)+Mt,a[bt]=jb(e,je)+Mt,a[_t]=s[St]=s.top=s.left="0",Rt(n),s[vt]=s.maxWidth=r[vt],s[bt]=s.maxHeight=r[bt],s[_t]=r[_t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function ac(e){for(var t=U.length,r=e.style,n=[],o=0;o<t;o++)n.push(U[o],r[U[o]]);return n.t=e,n}function dc(e,t,r,n,o,i,a,s,l,c,u,f,p){Ma(e)&&(e=e(s)),La(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?vb("0"+e.substr(3),r):0));var d,g,h,v=p?p.time():0;if(p&&p.seek(0),Na(e))p&&(e=Je.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&X(a,r,n,!0);else{Ma(t)&&(t=t(s));var b,m,y,x,w=(e||"0").split(" ");h=J(t)||Qe,(b=Ct(h)||{})&&(b.left||b.top)||"none"!==fb(h).display||(x=h.style.display,h.style.display="block",b=Ct(h),x?h.style.display=x:h.style.removeProperty("display")),m=vb(w[0],b[n.d]),y=vb(w[1]||"0",r),e=b[n.p]-l[n.p]-c+m+o-y,a&&X(a,y,n,r-y<20||a._isStart&&20<y),r-=r-y}if(i){var _=e+r,S=i._isStart;d="scroll"+n.d2,X(i,_,n,S&&20<_||!S&&(u?Math.max(Qe[d],Ue[d]):i.parentNode[d])<=_+1),u&&(l=Ct(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+Mt))}return p&&h&&(d=Ct(h),p.seek(f),g=Ct(h),p._caScrollDist=d[n.p]-g[n.p],e=e/p._caScrollDist*f),p&&p.seek(v),p?e:Math.round(e)}function fc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Qe){for(o in e._stOrig=a.cssText,i=fb(e))+o||Z.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Je.core.getCache(e).uncache=1,t.appendChild(e)}}function gc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function hc(c,e){function _j(e,t,r,n,o){var i=_j.tween,a=t.onComplete,s={};r=r||u();var l=gc(u,r,function(){i.kill(),_j.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){Ie.cache++,W()},t.onComplete=function(){_j.tween=0,a&&a.call(i)},i=_j.tween=Je.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return _j.tween&&_j.tween.kill()&&(_j.tween=0)},pb(c,"wheel",u.wheelHandler),$.isTouch&&pb(c,"touchmove",u.wheelHandler),_j}var Je,s,Ke,Ge,Ue,Qe,l,c,Ze,$e,et,u,tt,rt,f,nt,p,d,g,ot,it,h,v,b,m,y,E,at,x,st,w,lt,ct,ut,ft=1,pt=Date.now,_=pt(),dt=0,gt=0,ht=Math.abs,S="right",T="bottom",vt="width",bt="height",mt="Right",yt="Left",xt="Top",wt="Bottom",_t="padding",St="margin",Tt="Width",D="Height",Mt="px",Ct=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==fb(e)[f]&&Je.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},kt={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Et={toggleActions:"play",anticipatePin:0},R={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+Tt]=1,o["border"+a+Tt]=0,o[r.p]=t+"px",Je.set(e,o)},Pt=[],Ot={},Y={},I=[],q=function _dispatch(e){return Y[e]&&Y[e].map(function(e){return e()})||I},V=[],At=0,Bt=function _refreshAll(e,t){if(!dt||e){lt=$.isRefreshing=!0,Ie.forEach(function(e){return Ma(e)&&e.cacheID++&&(e.rec=e())});var r=q("refreshInit");ot&&$.sort(),t||Lb(),Ie.forEach(function(e){Ma(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Pt.slice(0).forEach(function(e){return e.refresh()}),Pt.forEach(function(e,t){if(e._subPinOffset&&e.pin){var r=e.vars.horizontal?"offsetWidth":"offsetHeight",n=e.pin[r];e.revert(!0,1),e.adjustPinSpacing(e.pin[r]-n),e.refresh()}}),Pt.forEach(function(e){return"max"===e.vars.end&&e.setPositions(e.start,Math.max(e.start+1,Ja(e.scroller,e._dir)))}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ie.forEach(function(e){Ma(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Mb(x,1),c.pause(),At++,W(lt=2),Pt.forEach(function(e){return Ma(e.vars.onRefresh)&&e.vars.onRefresh(e)}),lt=$.isRefreshing=!1,q("refresh")}else pb($,"scrollEnd",Hb)},H=0,Dt=1,W=function _updateAll(e){if(!lt||2===e){$.isUpdating=!0,ut&&ut.update(0);var t=Pt.length,r=pt(),n=50<=r-_,o=t&&Pt[0].scroll();if(Dt=o<H?-1:1,lt||(H=o),n&&(dt&&!rt&&200<r-dt&&(dt=0,q("scrollEnd")),et=_,_=r),Dt<0){for(nt=t;0<nt--;)Pt[nt]&&Pt[nt].update(0,n);Dt=1}else for(nt=0;nt<t;nt++)Pt[nt]&&Pt[nt].update(0,n);$.isUpdating=!1}w=0},j=["left","top",T,S,St+wt,St+mt,St+xt,St+yt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],U=j.concat([vt,bt,"boxSizing","max"+Tt,"max"+D,"position",St,_t,_t+xt,_t+mt,_t+wt,_t+yt]),Q=/([A-Z])/g,Rt=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Je.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(Q,"-$1").toLowerCase())}},Lt={left:0,top:0},Z=/(webkit|moz|length|cssText|inset)/i,$=(ScrollTrigger.prototype.init=function init(M,C){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),gt){var k,n,d,E,P,O,A,B,D,R,L,e,F,X,Y,I,q,t,N,b,V,H,m,W,y,j,x,r,w,_,G,o,g,U,Q,Z,$,S,i,T=(M=hb(La(M)||Na(M)||M.nodeType?{trigger:M}:M,Et)).onUpdate,ee=M.toggleClass,a=M.id,te=M.onToggle,re=M.onRefresh,ne=M.scrub,oe=M.trigger,ie=M.pin,ae=M.pinSpacing,se=M.invalidateOnRefresh,le=M.anticipatePin,s=M.onScrubComplete,h=M.onSnapComplete,ce=M.once,ue=M.snap,fe=M.pinReparent,l=M.pinSpacer,pe=M.containerAnimation,de=M.fastScrollEnd,ge=M.preventOverlaps,he=M.horizontal||M.containerAnimation&&!1!==M.horizontal?He:je,ve=!ne&&0!==ne,be=J(M.scroller||Ke),c=Je.core.getCache(be),me=Fa(be),ye="fixed"===("pinType"in M?M.pinType:z(be,"pinType")||me&&"fixed"),xe=[M.onEnter,M.onLeave,M.onEnterBack,M.onLeaveBack],we=ve&&M.toggleActions.split(" "),u="markers"in M?M.markers:Et.markers,_e=me?0:parseFloat(fb(be)["border"+he.p2+Tt])||0,Se=this,Te=M.onRefreshInit&&function(){return M.onRefreshInit(Se)},Me=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ke["inner"+o]:e["client"+o])||0}}(be,me,he),Ce=function _getOffsetsFunc(e,t){return!t||~qe.indexOf(e)?Ga(e):function(){return Lt}}(be,me),ke=0,Ee=0,Pe=K(be,he);if(at(Se),Se._dir=he,le*=45,Se.scroller=be,Se.scroll=pe?pe.time.bind(pe):Pe,E=Pe(),Se.vars=M,C=C||M.animation,"refreshPriority"in M&&(ot=1,-9999===M.refreshPriority&&(ut=Se)),c.tweenScroll=c.tweenScroll||{top:hc(be,je),left:hc(be,He)},Se.tweenTo=k=c.tweenScroll[he.p],Se.scrubDuration=function(e){(o=Na(e)&&e)?G?G.duration(e):G=Je.to(C,{ease:"expo",totalProgress:"+=0.001",duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Se)}}):(G&&G.progress(1).kill(),G=0)},C&&(C.vars.lazy=!1,C._initted||!1!==C.vars.immediateRender&&!1!==M.immediateRender&&C.duration()&&C.render(0,!0,!0),Se.animation=C.pause(),(C.scrollTrigger=Se).scrubDuration(ne),G&&G.resetTo&&G.resetTo("totalProgress",0),w=0,a=a||C.vars.id),Pt.push(Se),ue&&(Oa(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in Qe.style&&Je.set(me?[Qe,Ue]:be,{scrollBehavior:"auto"}),Ie.forEach(function(e){return Ma(e)&&e.target===(me?Ge.scrollingElement||Ue:be)&&(e.smooth=!1)}),d=Ma(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return Je.utils.snap(kb(t),e)}}(C):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return mb(kb(r))(e,t.direction)}}(C):!1!==ue.directional?function(e,t){return mb(ue.snapTo)(e,pt()-Ee<500?0:t.direction)}:Je.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Oa(g)?$e(g.min,g.max):$e(g,g),U=Je.delayedCall(ue.delay||o/2||.1,function(){var e=Pe(),t=pt()-Ee<500,r=k.tween;if(!(t||Math.abs(Se.getVelocity())<10)||r||rt||ke===e)Se.isActive&&ke!==e&&U.restart(!0);else{var n=(e-O)/F,o=C&&!ve?C.totalProgress():n,i=t?0:(o-_)/(pt()-et)*1e3||0,a=Je.utils.clamp(-n,1-n,ht(i/2)*i/.185),s=n+(!1===ue.inertia?0:a),l=$e(0,1,d(s,Se)),c=Math.round(O+l*F),u=ue.onStart,f=ue.onInterrupt,p=ue.onComplete;if(e<=A&&O<=e&&c!==e){if(r&&!r._initted&&r.data<=ht(c-e))return;!1===ue.inertia&&(a=l-n),k(c,{duration:g(ht(.185*Math.max(ht(s-o),ht(l-o))/i/.05||0)),ease:ue.ease||"power3",data:ht(c-e),onInterrupt:function onInterrupt(){return U.restart(!0)&&f&&f(Se)},onComplete:function onComplete(){Se.update(),ke=Pe(),w=_=C&&!ve?C.totalProgress():Se.progress,h&&h(Se),p&&p(Se)}},e,a*F,c-e-a*F),u&&u(Se,k.tween)}}}).pause()),a&&(Ot[a]=Se),i=(i=(oe=Se.trigger=J(oe||ie))&&oe._gsap&&oe._gsap.stRevert)&&i(Se),ie=!0===ie?oe:J(ie),La(ee)&&(ee={targets:oe,className:ee}),ie&&(!1===ae||ae===St||(ae=!(!ae&&ie.parentNode&&ie.parentNode.style&&"flex"===fb(ie.parentNode).display)&&_t),Se.pin=ie,(n=Je.core.getCache(ie)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=ac(l))),n.spacer=q=l||Ge.createElement("div"),q.classList.add("pin-spacer"),a&&q.classList.add("pin-spacer-"+a),n.pinState=X=ac(ie)),!1!==M.force3D&&Je.set(ie,{force3D:!0}),Se.spacer=q=n.spacer,r=fb(ie),m=r[ae+he.os2],N=Je.getProperty(ie),b=Je.quickSetter(ie,he.a,Mt),Zb(ie,q,r),I=ac(ie)),u){e=Oa(u)?hb(u,kt):kt,R=wb("scroller-start",a,be,he,e,0),L=wb("scroller-end",a,be,he,e,0,R),t=R["offset"+he.op.d2];var f=J(z(be,"content")||be);B=this.markerStart=wb("start",a,f,he,e,t,0,pe),D=this.markerEnd=wb("end",a,f,he,e,t,0,pe),pe&&(S=Je.quickSetter([B,D],he.a,Mt)),ye||qe.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=fb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?Qe:be),Je.set([R,L],{force3D:!0}),y=Je.quickSetter(R,he.a,Mt),x=Je.quickSetter(L,he.a,Mt))}if(pe){var p=pe.vars.onUpdate,v=pe.vars.onUpdateParams;pe.eventCallback("onUpdate",function(){Se.update(0,0,1),p&&p.apply(pe,v||[])})}Se.previous=function(){return Pt[Pt.indexOf(Se)-1]},Se.next=function(){return Pt[Pt.indexOf(Se)+1]},Se.revert=function(e,t){if(!t)return Se.kill(!0);var r=!1!==e||!Se.enabled,n=tt;r!==Se.isReverted&&(r&&(Z=Math.max(Pe(),Se.scroll.rec||0),Q=Se.progress,$=C&&C.progress()),B&&[B,D,R,L].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(tt=Se).update(r),!ie||fe&&Se.isActive||(r?function _swapPinOut(e,t,r){Rt(r);var n=e._gsap;if(n.spacerIsNative)Rt(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ie,q,X):Zb(ie,q,fb(ie),W)),r||Se.update(r),tt=n,Se.isReverted=r)},Se.refresh=function(e,t){if(!tt&&Se.enabled||t)if(ie&&e&&dt)pb(ScrollTrigger,"scrollEnd",Hb);else{!lt&&Te&&Te(Se),tt=Se,Ee=pt(),k.tween&&(k.tween.kill(),k.tween=0),G&&G.pause(),se&&C&&C.revert({kill:!1}).invalidate(),Se.isReverted||Se.revert(!0,!0),Se._subPinOffset=!1;for(var r,n,o,i,a,s,l,c,u,f,p,d=Me(),g=Ce(),h=pe?pe.duration():Ja(be,he),v=F<=.01,b=0,m=0,y=M.end,x=M.endTrigger||oe,w=M.start||(0!==M.start&&oe?ie?"0 0":"0 100%":0),_=Se.pinnedContainer=M.pinnedContainer&&J(M.pinnedContainer),S=oe&&Math.max(0,Pt.indexOf(Se))||0,T=S;T--;)(s=Pt[T]).end||s.refresh(0,1)||(tt=Se),!(l=s.pin)||l!==oe&&l!==ie&&l!==_||s.isReverted||((f=f||[]).unshift(s),s.revert(!0,!0)),s!==Pt[T]&&(S--,T--);for(Ma(w)&&(w=w(Se)),O=dc(w,oe,d,he,Pe(),B,R,Se,g,_e,ye,h,pe)||(ie?-.001:0),Ma(y)&&(y=y(Se)),La(y)&&!y.indexOf("+=")&&(~y.indexOf(" ")?y=(La(w)?w.split(" ")[0]:"")+y:(b=vb(y.substr(2),d),y=La(w)?w:(pe?Je.utils.mapRange(0,pe.duration(),pe.scrollTrigger.start,pe.scrollTrigger.end,O):O)+b,x=oe)),A=Math.max(O,dc(y||(x?"100% 0":h),x,d,he,Pe()+b,D,L,Se,g,_e,ye,h,pe))||-.001,F=A-O||(O-=.01)&&.001,b=0,T=S;T--;)(l=(s=Pt[T]).pin)&&s.start-s._pinPush<=O&&!pe&&0<s.end&&(r=s.end-s.start,(l===oe&&s.start-s._pinPush<O||l===_)&&!Na(w)&&(b+=r*(1-s.progress)),l===ie&&(m+=r));if(O+=b,A+=b,v&&(Q=Je.utils.clamp(0,1,Je.utils.normalize(O,A,Z))),Se._pinPush=m,B&&b&&((r={})[he.a]="+="+b,_&&(r[he.p]="-="+Pe()),Je.set([B,D],r)),ie)r=fb(ie),i=he===je,o=Pe(),V=parseFloat(N(he.a))+m,!h&&1<A&&((p={style:p=(me?Ge.scrollingElement||Ue:be).style,value:p["overflow"+he.a.toUpperCase()]}).style["overflow"+he.a.toUpperCase()]="scroll"),Zb(ie,q,r),I=ac(ie),n=Ct(ie,!0),c=ye&&K(be,i?He:je)(),ae&&((W=[ae+he.os2,F+m+Mt]).t=q,(T=ae===_t?jb(ie,he)+F+m:0)&&W.push(he.d,T+Mt),Rt(W),_&&Pt.forEach(function(e){e.pin===_&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Pe(Z)),ye&&((a={top:n.top+(i?o-O:c)+Mt,left:n.left+(i?c:o-O)+Mt,boxSizing:"border-box",position:"fixed"})[vt]=a.maxWidth=Math.ceil(n.width)+Mt,a[bt]=a.maxHeight=Math.ceil(n.height)+Mt,a[St]=a[St+xt]=a[St+mt]=a[St+wt]=a[St+yt]="0",a[_t]=r[_t],a[_t+xt]=r[_t+xt],a[_t+mt]=r[_t+mt],a[_t+wt]=r[_t+wt],a[_t+yt]=r[_t+yt],Y=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,a,fe),lt&&Pe(0)),C?(u=C._initted,it(1),C.render(C.duration(),!0,!0),H=N(he.a)-V+F+m,j=1<Math.abs(F-H),ye&&j&&Y.splice(Y.length-2,2),C.render(0,!0,!0),u||C.invalidate(!0),C.parent||C.totalTime(C.totalTime()),it(0)):H=F,p&&(p.value?p.style["overflow"+he.a.toUpperCase()]=p.value:p.style.removeProperty("overflow-"+he.a));else if(oe&&Pe()&&!pe)for(n=oe.parentNode;n&&n!==Qe;)n._pinOffset&&(O-=n._pinOffset,A-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1,!0)}),Se.start=O,Se.end=A,E=P=lt?Z:Pe(),pe||lt||(E<Z&&Pe(Z),Se.scroll.rec=0),Se.revert(!1,!0),U&&(ke=-1,Se.isActive&&Pe(O+F*Q),U.restart(!0)),tt=0,C&&ve&&(C._initted||$)&&C.progress()!==$&&C.progress($,!0).render(C.time(),!0,!0),(v||Q!==Se.progress||pe)&&(C&&!ve&&C.totalProgress(pe&&O<-.001&&!Q?Je.utils.normalize(O,A,0):Q,!0),Se.progress=(E-O)/F===Q?0:Q),ie&&ae&&(q._pinOffset=Math.round(Se.progress*H)),G&&G.invalidate(),re&&!lt&&re(Se)}},Se.getVelocity=function(){return(Pe()-P)/(pt()-et)*1e3||0},Se.endAnimation=function(){Pa(Se.callbackAnimation),C&&(G?G.progress(1):C.paused()?ve||Pa(C,Se.direction<0,1):Pa(C,C.reversed()))},Se.labelToScroll=function(e){return C&&C.labels&&(O||Se.refresh()||O)+C.labels[e]/C.duration()*F||0},Se.getTrailing=function(t){var e=Pt.indexOf(Se),r=0<Se.direction?Pt.slice(0,e).reverse():Pt.slice(e+1);return(La(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Se.direction?e.end<=O:e.start>=A})},Se.update=function(e,t,r){if(!pe||r||e){var n,o,i,a,s,l,c,u=!0===lt?Z:Se.scroll(),f=e?0:(u-O)/F,p=f<0?0:1<f?1:f||0,d=Se.progress;if(t&&(P=E,E=pe?Pe():u,ue&&(_=w,w=C&&!ve?C.totalProgress():p)),le&&!p&&ie&&!tt&&!ft&&dt&&O<u+(u-P)/(pt()-et)*le&&(p=1e-4),p!==d&&Se.enabled){if(a=(s=(n=Se.isActive=!!p&&p<1)!=(!!d&&d<1))||!!p!=!!d,Se.direction=d<p?1:-1,Se.progress=p,a&&!tt&&(o=p&&!d?0:1===p?1:1===d?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=C&&("complete"===i||"reset"===i||i in C))),ge&&(s||c)&&(c||ne||!C)&&(Ma(ge)?ge(Se):Se.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!G||tt||ft?C&&C.totalProgress(p,!!tt):(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",p,C._tTime/C._tDur):(G.vars.totalProgress=p,G.invalidate().restart()))),ie)if(e&&ae&&(q.style[ae+he.os2]=m),ye){if(a){if(l=!e&&d<p&&u<A+1&&u+1>=Ja(be,he),fe)if(e||!n&&!l)fc(ie,q);else{var g=Ct(ie,!0),h=u-O;fc(ie,Qe,g.top+(he===je?h:0)+Mt,g.left+(he===je?0:h)+Mt)}Rt(n||l?Y:I),j&&p<1&&n||b(V+(1!==p||l?0:H))}}else b(Ca(V+H*p));!ue||k.tween||tt||ft||U.restart(!0),ee&&(s||ce&&p&&(p<1||!st))&&Ze(ee.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](ee.className)}),!T||ve||e||T(Se),a&&!tt?(ve&&(c&&("complete"===i?C.pause().totalProgress(1):"reset"===i?C.restart(!0).pause():"restart"===i?C.restart(!0):C[i]()),T&&T(Se)),!s&&st||(te&&s&&Qa(Se,te),xe[o]&&Qa(Se,xe[o]),ce&&(1===p?Se.kill(!1,1):xe[o]=0),s||xe[o=1===p?1:3]&&Qa(Se,xe[o])),de&&!n&&Math.abs(Se.getVelocity())>(Na(de)?de:2500)&&(Pa(Se.callbackAnimation),G?G.progress(1):Pa(C,"reverse"===i?1:!p,1))):ve&&T&&!tt&&T(Se)}if(x){var v=pe?u/pe.duration()*(pe._caScrollDist||0):u;y(v+(R._isFlipped?1:0)),x(v)}S&&S(-u/pe.duration()*(pe._caScrollDist||0))}},Se.enable=function(e,t){Se.enabled||(Se.enabled=!0,pb(be,"resize",Eb),pb(me?Ge:be,"scroll",Cb),Te&&pb(ScrollTrigger,"refreshInit",Te),!1!==e&&(Se.progress=Q=0,E=P=ke=Pe()),!1!==t&&Se.refresh())},Se.getTween=function(e){return e&&k?k.tween:G},Se.setPositions=function(e,t){ie&&(V+=e-O,H+=t-e-F,ae===_t&&Se.adjustPinSpacing(t-e-F)),Se.start=O=e,Se.end=A=t,F=t-e,Se.update()},Se.adjustPinSpacing=function(e){if(W&&e){var t=W.indexOf(he.d)+1;W[t]=parseFloat(W[t])+e+Mt,W[1]=parseFloat(W[1])+e+Mt,Rt(W)}},Se.disable=function(e,t){if(Se.enabled&&(!1!==e&&Se.revert(!0,!0),Se.enabled=Se.isActive=!1,t||G&&G.pause(),Z=0,n&&(n.uncache=1),Te&&qb(ScrollTrigger,"refreshInit",Te),U&&(U.pause(),k.tween&&k.tween.kill()&&(k.tween=0)),!me)){for(var r=Pt.length;r--;)if(Pt[r].scroller===be&&Pt[r]!==Se)return;qb(be,"resize",Eb),qb(be,"scroll",Cb)}},Se.kill=function(e,t){Se.disable(e,t),G&&!t&&G.kill(),a&&delete Ot[a];var r=Pt.indexOf(Se);0<=r&&Pt.splice(r,1),r===nt&&0<Dt&&nt--,r=0,Pt.forEach(function(e){return e.scroller===Se.scroller&&(r=1)}),r||lt||(Se.scroll.rec=0),C&&(C.scrollTrigger=null,e&&C.revert({kill:!1}),t||C.kill()),B&&[B,D,R,L].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ut===Se&&(ut=0),ie&&(n&&(n.uncache=1),r=0,Pt.forEach(function(e){return e.pin===ie&&r++}),r||(n.spacer=0)),M.onKill&&M.onKill(Se)},Se.enable(!1,!1),i&&i(Se),C&&C.add&&!F?Je.delayedCall(.01,function(){return O||A||Se.refresh()})&&(F=.01)&&(O=A=0):Se.refresh(),ie&&function _queueRefreshAll(){if(ct!==At){var e=ct=At;requestAnimationFrame(function(){return e===At&&Bt(!0)})}}()}else this.update=this.refresh=this.kill=Ba},ScrollTrigger.register=function register(e){return s||(Je=e||Ea(),Da()&&window.document&&ScrollTrigger.enable(),s=gt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Et[t]=e[t];return Et},ScrollTrigger.disable=function disable(t,r){gt=0,Pt.forEach(function(e){return e[r?"kill":"disable"](t)}),qb(Ke,"wheel",Cb),qb(Ge,"scroll",Cb),clearInterval(u),qb(Ge,"touchcancel",Ba),qb(Qe,"touchstart",Ba),ob(qb,Ge,"pointerdown,touchstart,mousedown",za),ob(qb,Ge,"pointerup,touchend,mouseup",Aa),c.kill(),Ka(qb);for(var e=0;e<Ie.length;e+=3)rb(qb,Ie[e],Ie[e+1]),rb(qb,Ie[e],Ie[e+2])},ScrollTrigger.enable=function enable(){if(Ke=window,Ge=document,Ue=Ge.documentElement,Qe=Ge.body,Je&&(Ze=Je.utils.toArray,$e=Je.utils.clamp,at=Je.core.context||Ba,it=Je.core.suppressOverwrites||Ba,x=Ke.history.scrollRestoration||"auto",H=Ke.pageYOffset,Je.core.globals("ScrollTrigger",ScrollTrigger),Qe)){gt=1,function _rafBugFix(){return gt&&requestAnimationFrame(_rafBugFix)}(),k.register(Je),ScrollTrigger.isTouch=k.isTouch,E=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pb(Ke,"wheel",Cb),l=[Ke,Ge,Ue,Qe],Je.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=Je.matchMedia();for(t in e)r.add(t,e[t]);return r},Je.addEventListener("matchMediaInit",function(){return Lb()}),Je.addEventListener("matchMediaRevert",function(){return Kb()}),Je.addEventListener("matchMedia",function(){Bt(0,1),q("matchMedia")}),Je.matchMedia("(orientation: portrait)",function(){return Db(),Db})):console.warn("Requires GSAP 3.11.0 or later"),Db(),pb(Ge,"scroll",Cb);var e,t,r=Qe.style,n=r.borderTopStyle,o=Je.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=Ct(Qe),je.m=Math.round(e.top+je.sc())||0,He.m=Math.round(e.left+He.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Bb,250),Je.delayedCall(.5,function(){return ft=0}),pb(Ge,"touchcancel",Ba),pb(Qe,"touchstart",Ba),ob(pb,Ge,"pointerdown,touchstart,mousedown",za),ob(pb,Ge,"pointerup,touchend,mouseup",Aa),f=Je.utils.checkPrefix("transform"),U.push(f),s=pt(),c=Je.delayedCall(.2,Bt).pause(),g=[Ge,"visibilitychange",function(){var e=Ke.innerWidth,t=Ke.innerHeight;Ge.hidden?(p=e,d=t):p===e&&d===t||Eb()},Ge,"DOMContentLoaded",Bt,Ke,"load",Bt,Ke,"resize",Eb],Ka(pb),Pt.forEach(function(e){return e.enable(0,1)}),t=0;t<Ie.length;t+=3)rb(qb,Ie[t],Ie[t+1]),rb(qb,Ie[t],Ie[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(st=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Bb,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ka(qb)||Ka(pb,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=Ie.indexOf(r),o=Fa(r);~n&&Ie.splice(n,o?6:2),t&&(o?qe.unshift(Ke,t,Qe,t,Ue,t):qe.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Pt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(La(e)?J(e):e).getBoundingClientRect(),o=n[r?vt:bt]*t||0;return r?0<n.right-o&&n.left+o<Ke.innerWidth:0<n.bottom-o&&n.top+o<Ke.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){La(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?vt:bt],i=null==t?o/2:t in R?R[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ke.innerWidth:(n.top+i)/Ke.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Pt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=Y.killAll||[];Y={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(Je)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}$.version="3.11.5",$.saveStyles=function(e){return e?Ze(e).forEach(function(e){if(e&&e.style){var t=V.indexOf(e);0<=t&&V.splice(t,5),V.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Je.core.getCache(e),at())}}):V},$.revert=function(e,t){return Lb(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?Eb():(s||$.register())&&Bt(!0)},$.update=function(e){return++Ie.cache&&W(!0===e?2:0)},$.clearScrollMemory=Mb,$.maxScroll=function(e,t){return Ja(e,t?He:je)},$.getScrollFunc=function(e,t){return K(J(e),t?He:je)},$.getById=function(e){return Ot[e]},$.getAll=function(){return Pt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},$.isScrolling=function(){return!!dt},$.snapDirectional=mb,$.addEventListener=function(e,t){var r=Y[e]||(Y[e]=[]);~r.indexOf(t)||r.push(t)},$.removeEventListener=function(e,t){var r=Y[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},$.batch=function(e,t){function Qo(e,t){var r=[],n=[],o=Je.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ma(t[r])&&"onRefreshInit"!==r?Qo(0,t[r]):t[r];return Ma(a)&&(a=a(),pb($,"refresh",function(){return a=t.batchMax()})),Ze(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push($.create(t))}),n};function jc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function kc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===Ue&&kc(Qe,t)}function mc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||Je.core.getCache(i),s=pt();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==Qe&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!te[(t=fb(i)).overflowY]&&!te[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!Fa(i)&&(te[(t=fb(i)).overflowY]||te[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function nc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&mc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&pb(Ge,k.eventTypes[0],ne,!1,!0)},onDisable:function onDisable(){return qb(Ge,k.eventTypes[0],ne,!0)}})}function rc(e){function Np(){return o=!1}function Qp(){i=Ja(d,je),M=$e(E?1:0,i),f&&(T=$e(0,Ja(d,He))),l=At}function Rp(){v._gsap.y=Ca(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Xp(){Qp(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Oa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,p=e.onRelease,d=J(e.target)||Ue,g=Je.core.globals().ScrollSmoother,h=g&&g.get(),v=E&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(d,je),m=K(d,He),y=1,x=(k.isTouch&&Ke.visualViewport?Ke.visualViewport.scale*Ke.visualViewport.width:Ke.outerWidth)/Ke.innerWidth,w=0,_=Ma(t)?function(){return t(n)}:function(){return t||2.8},S=nc(d,e.type,!0,r),T=Ba,M=Ba;return v&&Je.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return E&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(Np);var e=Ca(n.deltaY/2),t=M(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ca((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=Ie.cache,W()}return!0}b.offset&&Rp(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ca((Ke.visualViewport&&Ke.visualViewport.scale||1)/x),a.pause(),e!==y&&kc(d,1.01<y||!f&&"x"),c=m(),u=b(),Qp(),l=At},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&Rp(),t){Ie.cache++;var r,n,o=_();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=jc(m,r,n,Ja(d,He)),a.vars.scrollX=T(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=jc(b,r,n,Ja(d,je)),a.vars.scrollY=M(n),a.invalidate().duration(o).play(.01),(E&&a.vars.scrollY>=i||i-1<=r)&&Je.to({},{onUpdate:Xp,duration:o})}else s.restart(!0);p&&p(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<pt()-w&&(l=0,w=pt())},e.onChange=function(e,t,r,n,o){if(At!==l&&Qp(),t&&f&&m(T(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&Rp();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=M(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&W()},e.onEnable=function(){kc(d,!f&&"x"),$.addEventListener("refresh",Xp),pb(Ke,"resize",Xp),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){kc(d,!0),qb(Ke,"resize",Xp),$.removeEventListener("refresh",Xp),S.kill()},e.lockAxis=!1!==e.lockAxis,((n=new k(e)).iOS=E)&&!b()&&b(1),E&&Je.ticker.add(Ba),s=n._dc,a=Je.to(n,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:gc(b,b(),function(){return a.pause()})},onUpdate:W,onComplete:s.vars.onComplete}),n}var ee,te={auto:1,scroll:1},re=/(input|label|select|textarea)/i,ne=function _captureInputs(e){var t=re.test(e.target.tagName);(t||ee)&&(e._gsapAllow=!0,ee=t)};$.sort=function(e){return Pt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},$.observe=function(e){return new k(e)},$.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill();var t=e instanceof k?e:rc(e);return v&&v.target===t.target&&v.kill(),Fa(t.target)&&(v=t),t},$.core={_getVelocityProp:L,_inputObserver:nc,_scrollers:Ie,_proxies:qe,bridge:{ss:function ss(){dt||q("scrollStart"),dt=pt()},ref:function ref(){return tt}}},Ea()&&Je.registerPlugin($),e.ScrollTrigger=$,e.default=$;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * ScrollToPlugin 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function l(){return"undefined"!=typeof window}function m(){return f||l()&&(f=window.gsap)&&f.registerPlugin&&f}function n(e){return"string"==typeof e}function o(e){return"function"==typeof e}function p(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,l="client"+o;return e===T||e===i||e===c?Math.max(i[n],c[n])-(T["inner"+o]||i[l]||c[l]):e[n]-e["offset"+o]}function q(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===T&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=i[o]?i:c),function(){return e[o]}}function s(e,t){if(!(e=y(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),n=!t||t===T||t===c,l=n?{top:i.clientTop-(T.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(T.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:t.getBoundingClientRect(),r={x:o.left-l.left,y:o.top-l.top};return!n&&t&&(r.x+=q(t,"x")(),r.y+=q(t,"y")()),r}function t(e,t,o,l,r){return isNaN(e)||"object"==typeof e?n(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+l-r:"max"===e?p(t,o)-r:Math.min(p(t,o),s(e,t)[o]-r):parseFloat(e)-r}function u(){f=m(),l()&&f&&"undefined"!=typeof document&&document.body&&(T=window,c=document.body,i=document.documentElement,y=f.utils.toArray,f.config({autoKillThreshold:7}),v=f.config(),a=1)}var f,a,T,i,c,y,v,h,r={version:"3.11.5",name:"scrollTo",rawVars:1,register:function register(e){f=e,u()},init:function init(e,l,r,s,i){a||u();var p=this,c=f.getProperty(e,"scrollSnapType");p.isWin=e===T,p.target=e,p.tween=r,l=function _clean(e,t,l,r){if(o(e)&&(e=e(t,l,r)),"object"!=typeof e)return n(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s,i={};for(s in e)i[s]="onAutoKill"!==s&&o(e[s])?e[s](t,l,r):e[s];return i}(l,s,e,i),p.vars=l,p.autoKill=!!l.autoKill,p.getX=q(e,"x"),p.getY=q(e,"y"),p.x=p.xPrev=p.getX(),p.y=p.yPrev=p.getY(),h=h||f.core.globals().ScrollTrigger,"smooth"===f.getProperty(e,"scrollBehavior")&&f.set(e,{scrollBehavior:"auto"}),c&&"none"!==c&&(p.snap=1,p.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=l.x?(p.add(p,"x",p.x,t(l.x,e,"x",p.x,l.offsetX||0),s,i),p._props.push("scrollTo_x")):p.skipX=1,null!=l.y?(p.add(p,"y",p.y,t(l.y,e,"y",p.y,l.offsetY||0),s,i),p._props.push("scrollTo_y")):p.skipY=1},render:function render(e,t){for(var o,n,l,r,s,i=t._pt,c=t.target,u=t.tween,f=t.autoKill,a=t.xPrev,y=t.yPrev,d=t.isWin,g=t.snap,x=t.snapInline;i;)i.r(e,i.d),i=i._next;o=d||!t.skipX?t.getX():a,l=(n=d||!t.skipY?t.getY():y)-y,r=o-a,s=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),f&&(!t.skipX&&(s<r||r<-s)&&o<p(c,"x")&&(t.skipX=1),!t.skipY&&(s<l||l<-s)&&n<p(c,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(u.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(u,t.vars.onAutoKillParams||[]))),d?T.scrollTo(t.skipX?o:t.x,t.skipY?n:t.y):(t.skipY||(c.scrollTop=t.y),t.skipX||(c.scrollLeft=t.x)),!g||1!==e&&0!==e||(n=c.scrollTop,o=c.scrollLeft,x?c.style.scrollSnapType=x:c.style.removeProperty("scroll-snap-type"),c.scrollTop=n+1,c.scrollLeft=o+1,c.scrollTop=n,c.scrollLeft=o),t.xPrev=t.x,t.yPrev=t.y,h&&h.update()},kill:function kill(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};r.max=p,r.getOffset=s,r.buildGetter=q,m()&&f.registerPlugin(r),e.ScrollToPlugin=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * ScrollSmoother 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return"undefined"!=typeof window}function t(){return D||s()&&(D=window.gsap)&&D.registerPlugin&&D}var D,L,O,N,U,J,K,q,V,j,Y,W,G,Q,X,r=(ScrollSmoother.register=function register(e){return L||(D=e||t(),s()&&window.document&&(O=window,N=document,U=N.documentElement,J=N.body),D&&(K=D.utils.toArray,q=D.utils.clamp,Y=D.parseEase("expo"),Q=D.core.context||function(){},X=D.delayedCall(.2,function(){return V.isRefreshing||j&&j.refresh()}).pause(),V=D.core.globals().ScrollTrigger,D.core.globals("ScrollSmoother",ScrollSmoother),J&&V&&(W=V.core._getVelocityProp,G=V.core._inputObserver,ScrollSmoother.refresh=V.refresh,L=1))),L},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(t){var o=this;L||ScrollSmoother.register(D)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},j&&j.kill(),Q(j=this);function ya(){return M.update(-H)}function Aa(){return n.style.overflow="visible"}function Ca(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),d=!1,e.animation.progress(e.progress,!0)}function Da(e,t){(e!==H&&!u||t)&&(x&&(e=Math.round(e)),k&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),A=e-H,H=e,V.isUpdating||ScrollSmoother.isRefreshing||V.update())}function Ea(e){return arguments.length?(e<0&&(e=0),I.y=-e,d=!0,u?H=-e:Da(-e),V.isRefreshing?i.update():R(e/_),this):-H}function Ha(e){S.scrollTop=0,e.target.contains&&e.target.contains(S)||T&&!1===T(o,e)||(V.isInViewport(e.target)||e.target===g||o.scrollTo(e.target,!1,"center center"),g=e.target)}function Ia(e){var r,n,o,i;b.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e){t.trigger&&e.trigger&&t!==e&&(e.trigger===t.trigger||e.pinnedContainer===t.trigger||t.trigger.contains(e.trigger))&&(n=e.start,o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),e.setPositions(n+o,e.end+o),e.markerStart&&i.push(D.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function Ja(){Aa(),requestAnimationFrame(Aa),b&&(b.forEach(function(e){var t=e.start,r=e.auto?Math.min(V.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),Ia(V.sort())),M.reset()}function Ka(){return V.addEventListener("refresh",Ja)}function La(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function Ma(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),La}function Na(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+P+t)||("speed"===t?1:0)),o.setAttribute("data-"+P+t,e),"auto"===e?e:parseFloat(e)}}function Oa(r,e,t,n,o){function Eb(){e=f(),t=h(),i=parseFloat(e)||1,c=(a="auto"===e)?0:.5,l&&l.kill(),l=t&&D.to(r,{ease:Y,overwrite:!1,y:"+=0",duration:t}),s&&(s.ratio=i,s.autoSpeed=a)}function Fb(){g.y=d+"px",g.renderTransform(1),Eb()}function Jb(e){if(a){Fb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||U,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),u=-c*t;return 0<c&&(n=.5==(r=s.height/(O.innerHeight+s.height))?2*s.height:2*Math.min(s.height,-c*r/(2*r-1))*(t||1),u+=t?-n*t:-n/2,c+=n),{change:c,offset:u}}(r,q(0,1,-e.start/(e.end-e.start)));v=t.change,u=t.offset}else v=(e.end-e.start)*(1-i),u=0;p.forEach(function(e){return v-=e.distance*(1-i)}),e.vars.onUpdate(e),l&&l.progress(1)}o=("function"==typeof o?o(n,r):o)||0;var i,s,a,l,c,u,f=Na("speed",e,n,r),h=Na("lag",t,n,r),d=D.getProperty(r,"y"),g=r._gsap,p=[],m=[],v=0;return Eb(),(1!==i||a||l)&&(Jb(s=V.create({trigger:a?r.parentNode:r,start:"top bottom+="+o,end:"bottom top-="+o,scroller:S,scrub:!0,refreshPriority:-999,onRefreshInit:Fb,onRefresh:Jb,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),Fb()},onUpdate:function onUpdate(e){var t,r,n,o=d+v*(e.progress-c),i=p.length,s=0;if(e.offset){if(i){for(r=-H,n=e.end;i--;){if((t=p[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-A,!0),F&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=d+s+v*((D.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),m.length&&!a&&m.forEach(function(e){return e(o-s)}),l?(l.resetTo("y",o,-A,!0),F&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),D.core.getCache(s.trigger).stRevert=Ma,s.startY=d,s.pins=p,s.markers=m,s.ratio=i,s.autoSpeed=a,r.style.willChange="transform"),s}var n,S,e,i,b,s,a,l,c,u,r,f,h,d,g,p=t.smoothTouch,m=t.onUpdate,v=t.onStop,w=t.smooth,T=t.onFocusIn,E=t.normalizeScroll,x=t.wholePixels,C=this,P=t.effectsPrefix||"",R=V.getScrollFunc(O),k=1===V.isTouch?!0===p?.8:parseFloat(p)||0:0===w||!1===w?0:parseFloat(w)||.8,_=k&&+t.speed||1,H=0,A=0,F=1,M=W(0),I={y:0},z="undefined"!=typeof ResizeObserver&&!1!==t.autoResize&&new ResizeObserver(function(){if(!V.isRefreshing){var e=V.maxScroll(S);e<-H&&Ea(e),X.restart(!0)}});function refreshHeight(){return e=n.clientHeight,n.style.overflow="visible",J.style.height=O.innerHeight+(e-O.innerHeight)/_+"px",e-O.innerHeight}Ka(),V.addEventListener("killAll",Ka),D.delayedCall(.5,function(){return F=0}),this.scrollTop=Ea,this.scrollTo=function(e,t,r){var n=D.utils.clamp(0,V.maxScroll(O),isNaN(e)?o.offset(e,r):+e);t?u?D.to(o,{duration:k,scrollTop:n,overwrite:"auto",ease:Y}):R(n):Ea(n)},this.offset=function(e,t){var r,n=(e=K(e)[0]).style.cssText,o=V.create({trigger:e,start:t||"top top"});return b&&Ia([o]),r=o.start/_,o.kill(!1),e.style.cssText=n,D.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=K(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||J.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",z&&z.observe(n),D.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||D.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(S=K(e||"#smooth-wrapper")[0]||function _wrap(e){var t=N.querySelector(".ScrollSmoother-wrapper");return t||((t=N.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=S.getAttribute("style")||"",refreshHeight(),D.set(S,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):S},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=K(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&b[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=Oa(e[r],o,i,r,s))&&a.push(n);return b.push.apply(b,a),a},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=K(e).map(function(t){return V.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return Da(e||0===e?e:H)},this.getVelocity=function(){return M.getVelocity(-H)},V.scrollerProxy(S,{scrollTop:Ea,scrollHeight:function scrollHeight(){return refreshHeight()&&J.scrollHeight},fixedMarkers:!1!==t.fixedMarkers&&!!k,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:O.innerWidth,height:O.innerHeight}}}),V.defaults({scroller:S});var B=V.getAll().filter(function(e){return e.scroller===O||e.scroller===S});B.forEach(function(e){return e.revert(!0,!0)}),i=V.create({animation:D.fromTo(I,{y:0},{y:function y(){return-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(this._dur){var e=d;e&&(Ca(i),I.y=H),Da(I.y,e),ya(),m&&!u&&m(C)}}}),onRefreshInit:function onRefreshInit(e){if(ScrollSmoother.isRefreshing=!0,b){var t=V.getAll().filter(function(e){return!!e.pin});b.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();h=r&&r._end>r._dp._time,f=H,I.y=0,k&&(1===V.isTouch&&(S.style.position="absolute"),S.scrollTop=0,1===V.isTouch&&(S.style.position="fixed"))},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()/_),h||Ca(e),I.y=-R()*_,Da(I.y),F||e.animation.progress(D.utils.clamp(0,1,f/_/-e.end)),h&&(e.progress-=.001,e.update()),ScrollSmoother.isRefreshing=!1},id:"ScrollSmoother",scroller:O,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function end(){return refreshHeight()/_},onScrubComplete:function onScrubComplete(){M.reset(),v&&v(o)},scrub:k||!0}),this.smooth=function(e){return arguments.length&&(_=(k=e||0)&&+t.speed||1,i.scrubDuration(e)),i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=t.ease||Y),this.scrollTrigger=i,t.effects&&this.effects(!0===t.effects?"[data-"+P+"speed], [data-"+P+"lag]":t.effects,{effectsPadding:t.effectsPadding}),t.sections&&this.sections(!0===t.sections?"[data-section]":t.sections),B.forEach(function(e){e.vars.scroller=S,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!u!==e&&(e?(i.getTween()&&i.getTween().pause(),R(-H/_),M.reset(),(r=V.normalizeScroll())&&r.disable(),(u=V.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Ea(-H)}})).nested=G(U,"wheel,touch,scroll",!0,!1!==t)):(u.nested.kill(),u.kill(),u=0,r&&r.enable(),i.progress=(-H/_-i.start)/(i.end-i.start),Ca(i))),this):!!u},this.kill=this.revert=function(){o.paused(!1),Ca(i),i.kill();for(var e=(b||[]).concat(s||[]),t=e.length;t--;)e[t].kill();V.scrollerProxy(S),V.removeEventListener("killAll",Ka),V.removeEventListener("refresh",Ja),S.style.cssText=l,n.style.cssText=c;var r=V.defaults({});r&&r.scroller===S&&V.defaults({scroller:O}),o.normalizer&&V.normalizeScroll(!1),clearInterval(a),j=null,z&&z.disconnect(),J.style.removeProperty("height"),O.removeEventListener("focusin",Ha)},this.refresh=function(e,t){return i.refresh(e,t)},E&&(this.normalizer=V.normalizeScroll(!0===E?{debounce:!0,content:!k&&n}:E)),V.config(t),"overscrollBehavior"in O.getComputedStyle(J)&&D.set([J,U],{overscrollBehavior:"none"}),"scrollBehavior"in O.getComputedStyle(J)&&D.set([J,U],{scrollBehavior:"auto"}),O.addEventListener("focusin",Ha),a=setInterval(ya,250),"loading"===N.readyState||requestAnimationFrame(function(){return V.refresh()})}r.version="3.11.5",r.create=function(e){return j&&e&&j.content()===K(e.content)[0]?j:new r(e)},r.get=function(){return j},t()&&D.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*! Selectric ϟ v1.13.0 (2017-08-22) - git.io/tjl9sQ - Copyright (c) 2017 Leonardo Santos - MIT License */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(s),s}:e(jQuery)}(function(e){"use strict";var t=e(document),s=e(window),l=["a","e","i","o","u","n","c","y"],i=[/[\xE0-\xE5]/g,/[\xE8-\xEB]/g,/[\xEC-\xEF]/g,/[\xF2-\xF6]/g,/[\xF9-\xFC]/g,/[\xF1]/g,/[\xE7]/g,/[\xFD-\xFF]/g],n=function(t,s){var l=this;l.element=t,l.$element=e(t),l.state={multiple:!!l.$element.attr("multiple"),enabled:!1,opened:!1,currValue:-1,selectedIdx:-1,highlightedIdx:-1},l.eventTriggers={open:l.open,close:l.close,destroy:l.destroy,refresh:l.refresh,init:l.init},l.init(s)};n.prototype={utils:{isMobile:function(){return/android|ip(hone|od|ad)/i.test(navigator.userAgent)},escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},replaceDiacritics:function(e){for(var t=i.length;t--;)e=e.toLowerCase().replace(i[t],l[t]);return e},format:function(e){var t=arguments;return(""+e).replace(/\{(?:(\d+)|(\w+))\}/g,function(e,s,l){return l&&t[1]?t[1][l]:t[s]})},nextEnabledItem:function(e,t){for(;e[t=(t+1)%e.length].disabled;);return t},previousEnabledItem:function(e,t){for(;e[t=(t>0?t:e.length)-1].disabled;);return t},toDash:function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},triggerCallback:function(t,s){var l=s.element,i=s.options["on"+t],n=[l].concat([].slice.call(arguments).slice(1));e.isFunction(i)&&i.apply(l,n),e(l).trigger("selectric-"+this.toDash(t),n)},arrayToClassname:function(t){var s=e.grep(t,function(e){return!!e});return e.trim(s.join(" "))}},init:function(t){var s=this;if(s.options=e.extend(!0,{},e.fn.selectric.defaults,s.options,t),s.utils.triggerCallback("BeforeInit",s),s.destroy(!0),s.options.disableOnMobile&&s.utils.isMobile())return void(s.disableOnMobile=!0);s.classes=s.getClassNames();var l=e("<input/>",{class:s.classes.input,readonly:s.utils.isMobile()}),i=e("<div/>",{class:s.classes.items,tabindex:-1}),n=e("<div/>",{class:s.classes.scroll}),a=e("<div/>",{class:s.classes.prefix,html:s.options.arrowButtonMarkup}),o=e("<span/>",{class:"label"}),r=s.$element.wrap("<div/>").parent().append(a.prepend(o),i,l),u=e("<div/>",{class:s.classes.hideselect});s.elements={input:l,items:i,itemsScroll:n,wrapper:a,label:o,outerWrapper:r},s.options.nativeOnMobile&&s.utils.isMobile()&&(s.elements.input=void 0,u.addClass(s.classes.prefix+"-is-native"),s.$element.on("change",function(){s.refresh()})),s.$element.on(s.eventTriggers).wrap(u),s.originalTabindex=s.$element.prop("tabindex"),s.$element.prop("tabindex",-1),s.populate(),s.activate(),s.utils.triggerCallback("Init",s)},activate:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.$element.width();t.removeClass(e.classes.tempshow),e.utils.triggerCallback("BeforeActivate",e),e.elements.outerWrapper.prop("class",e.utils.arrayToClassname([e.classes.wrapper,e.$element.prop("class").replace(/\S+/g,e.classes.prefix+"-$&"),e.options.responsive?e.classes.responsive:""])),e.options.inheritOriginalWidth&&s>0&&e.elements.outerWrapper.width(s),e.unbindEvents(),e.$element.prop("disabled")?(e.elements.outerWrapper.addClass(e.classes.disabled),e.elements.input&&e.elements.input.prop("disabled",!0)):(e.state.enabled=!0,e.elements.outerWrapper.removeClass(e.classes.disabled),e.$li=e.elements.items.removeAttr("style").find("li"),e.bindEvents()),e.utils.triggerCallback("Activate",e)},getClassNames:function(){var t=this,s=t.options.customClass,l={};return e.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "),function(e,i){var n=s.prefix+i;l[i.toLowerCase()]=s.camelCase?n:t.utils.toDash(n)}),l.prefix=s.prefix,l},setLabel:function(){var t=this,s=t.options.labelBuilder;if(t.state.multiple){var l=e.isArray(t.state.currValue)?t.state.currValue:[t.state.currValue];l=0===l.length?[0]:l;var i=e.map(l,function(s){return e.grep(t.lookupItems,function(e){return e.index===s})[0]});i=e.grep(i,function(t){return i.length>1||0===i.length?""!==e.trim(t.value):t}),i=e.map(i,function(l){return e.isFunction(s)?s(l):t.utils.format(s,l)}),t.options.multiple.maxLabelEntries&&(i.length>=t.options.multiple.maxLabelEntries+1?(i=i.slice(0,t.options.multiple.maxLabelEntries),i.push(e.isFunction(s)?s({text:"..."}):t.utils.format(s,{text:"..."}))):i.slice(i.length-1)),t.elements.label.html(i.join(t.options.multiple.separator))}else{var n=t.lookupItems[t.state.currValue];t.elements.label.html(e.isFunction(s)?s(n):t.utils.format(s,n))}},populate:function(){var t=this,s=t.$element.children(),l=t.$element.find("option"),i=l.filter(":selected"),n=l.index(i),a=0,o=t.state.multiple?[]:0;i.length>1&&t.state.multiple&&(n=[],i.each(function(){n.push(e(this).index())})),t.state.currValue=~n?n:o,t.state.selectedIdx=t.state.currValue,t.state.highlightedIdx=t.state.currValue,t.items=[],t.lookupItems=[],s.length&&(s.each(function(s){var l=e(this);if(l.is("optgroup")){var i={element:l,label:l.prop("label"),groupDisabled:l.prop("disabled"),items:[]};l.children().each(function(s){var l=e(this);i.items[s]=t.getItemData(a,l,i.groupDisabled||l.prop("disabled")),t.lookupItems[a]=i.items[s],a++}),t.items[s]=i}else t.items[s]=t.getItemData(a,l,l.prop("disabled")),t.lookupItems[a]=t.items[s],a++}),t.setLabel(),t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))},getItemData:function(t,s,l){var i=this;return{index:t,element:s,value:s.val(),className:s.prop("class"),text:s.html(),slug:e.trim(i.utils.replaceDiacritics(s.html())),alt:s.attr("data-alt"),selected:s.prop("selected"),disabled:l}},getItemsMarkup:function(t){var s=this,l="<ul>";return e.isFunction(s.options.listBuilder)&&s.options.listBuilder&&(t=s.options.listBuilder(t)),e.each(t,function(t,i){void 0!==i.label?(l+=s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',s.utils.arrayToClassname([s.classes.group,i.groupDisabled?"disabled":"",i.element.prop("class")]),s.classes.grouplabel,i.element.prop("label")),e.each(i.items,function(e,t){l+=s.getItemMarkup(t.index,t)}),l+="</ul>"):l+=s.getItemMarkup(i.index,i)}),l+"</ul>"},getItemMarkup:function(t,s){var l=this,i=l.options.optionsItemBuilder,n={value:s.value,text:s.text,slug:s.slug,index:s.index};return l.utils.format('<li data-index="{1}" class="{2}">{3}</li>',t,l.utils.arrayToClassname([s.className,t===l.items.length-1?"last":"",s.disabled?"disabled":"",s.selected?"selected":""]),e.isFunction(i)?l.utils.format(i(s,this.$element,t),s):l.utils.format(i,n))},unbindEvents:function(){var e=this;e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(".sl")},bindEvents:function(){var t=this;t.elements.outerWrapper.on("mouseenter.sl mouseleave.sl",function(s){e(this).toggleClass(t.classes.hover,"mouseenter"===s.type),t.options.openOnHover&&(clearTimeout(t.closeTimer),"mouseleave"===s.type?t.closeTimer=setTimeout(e.proxy(t.close,t),t.options.hoverIntentTimeout):t.open())}),t.elements.wrapper.on("click.sl",function(e){t.state.opened?t.close():t.open(e)}),t.options.nativeOnMobile&&t.utils.isMobile()||(t.$element.on("focus.sl",function(){t.elements.input.focus()}),t.elements.input.prop({tabindex:t.originalTabindex,disabled:!1}).on("keydown.sl",e.proxy(t.handleKeys,t)).on("focusin.sl",function(e){t.elements.outerWrapper.addClass(t.classes.focus),t.elements.input.one("blur",function(){t.elements.input.blur()}),t.options.openOnFocus&&!t.state.opened&&t.open(e)}).on("focusout.sl",function(){t.elements.outerWrapper.removeClass(t.classes.focus)}).on("input propertychange",function(){var s=t.elements.input.val(),l=new RegExp("^"+t.utils.escapeRegExp(s),"i");clearTimeout(t.resetStr),t.resetStr=setTimeout(function(){t.elements.input.val("")},t.options.keySearchTimeout),s.length&&e.each(t.items,function(e,s){if(!s.disabled){if(l.test(s.text)||l.test(s.slug))return void t.highlight(e);if(s.alt)for(var i=s.alt.split("|"),n=0;n<i.length&&i[n];n++)if(l.test(i[n].trim()))return void t.highlight(e)}})})),t.$li.on({mousedown:function(e){e.preventDefault(),e.stopPropagation()},click:function(){return t.select(e(this).data("index")),!1}})},handleKeys:function(t){var s=this,l=t.which,i=s.options.keys,n=e.inArray(l,i.previous)>-1,a=e.inArray(l,i.next)>-1,o=e.inArray(l,i.select)>-1,r=e.inArray(l,i.open)>-1,u=s.state.highlightedIdx,p=n&&0===u||a&&u+1===s.items.length,c=0;if(13!==l&&32!==l||t.preventDefault(),n||a){if(!s.options.allowWrap&&p)return;n&&(c=s.utils.previousEnabledItem(s.lookupItems,u)),a&&(c=s.utils.nextEnabledItem(s.lookupItems,u)),s.highlight(c)}if(o&&s.state.opened)return s.select(u),void(s.state.multiple&&s.options.multiple.keepMenuOpen||s.close());r&&!s.state.opened&&s.open()},refresh:function(){var e=this;e.populate(),e.activate(),e.utils.triggerCallback("Refresh",e)},setOptionsDimensions:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.options.maxHeight,l=e.elements.items.outerWidth(),i=e.elements.wrapper.outerWidth()-(l-e.elements.items.width());!e.options.expandToItemText||i>l?e.finalWidth=i:(e.elements.items.css("overflow","scroll"),e.elements.outerWrapper.width(9e4),e.finalWidth=e.elements.items.width(),e.elements.items.css("overflow",""),e.elements.outerWrapper.width("")),e.elements.items.width(e.finalWidth).height()>s&&e.elements.items.height(s),t.removeClass(e.classes.tempshow)},isInViewport:function(){var e=this;if(!0===e.options.forceRenderAbove)e.elements.outerWrapper.addClass(e.classes.above);else if(!0===e.options.forceRenderBelow)e.elements.outerWrapper.addClass(e.classes.below);else{var t=s.scrollTop(),l=s.height(),i=e.elements.outerWrapper.offset().top,n=e.elements.outerWrapper.outerHeight(),a=i+n+e.itemsHeight<=t+l,o=i-e.itemsHeight>t,r=!a&&o,u=!r;e.elements.outerWrapper.toggleClass(e.classes.above,r),e.elements.outerWrapper.toggleClass(e.classes.below,u)}},detectItemVisibility:function(t){var s=this,l=s.$li.filter("[data-index]");s.state.multiple&&(t=e.isArray(t)&&0===t.length?0:t,t=e.isArray(t)?Math.min.apply(Math,t):t);var i=l.eq(t).outerHeight(),n=l[t].offsetTop,a=s.elements.itemsScroll.scrollTop(),o=n+2*i;s.elements.itemsScroll.scrollTop(o>a+s.itemsHeight?o-s.itemsHeight:n-i<a?n-i:a)},open:function(s){var l=this;if(l.options.nativeOnMobile&&l.utils.isMobile())return!1;l.utils.triggerCallback("BeforeOpen",l),s&&(s.preventDefault(),l.options.stopPropagation&&s.stopPropagation()),l.state.enabled&&(l.setOptionsDimensions(),e("."+l.classes.hideselect,"."+l.classes.open).children().selectric("close"),l.state.opened=!0,l.itemsHeight=l.elements.items.outerHeight(),l.itemsInnerHeight=l.elements.items.height(),l.elements.outerWrapper.addClass(l.classes.open),l.elements.input.val(""),s&&"focusin"!==s.type&&l.elements.input.focus(),setTimeout(function(){t.on("click.sl",e.proxy(l.close,l)).on("scroll.sl",e.proxy(l.isInViewport,l))},1),l.isInViewport(),l.options.preventWindowScroll&&t.on("mousewheel.sl DOMMouseScroll.sl","."+l.classes.scroll,function(t){var s=t.originalEvent,i=e(this).scrollTop(),n=0;"detail"in s&&(n=-1*s.detail),"wheelDelta"in s&&(n=s.wheelDelta),"wheelDeltaY"in s&&(n=s.wheelDeltaY),"deltaY"in s&&(n=-1*s.deltaY),(i===this.scrollHeight-l.itemsInnerHeight&&n<0||0===i&&n>0)&&t.preventDefault()}),l.detectItemVisibility(l.state.selectedIdx),l.highlight(l.state.multiple?-1:l.state.selectedIdx),l.utils.triggerCallback("Open",l))},close:function(){var e=this;e.utils.triggerCallback("BeforeClose",e),t.off(".sl"),e.elements.outerWrapper.removeClass(e.classes.open),e.state.opened=!1,e.utils.triggerCallback("Close",e)},change:function(){var t=this;t.utils.triggerCallback("BeforeChange",t),t.state.multiple?(e.each(t.lookupItems,function(e){t.lookupItems[e].selected=!1,t.$element.find("option").prop("selected",!1)}),e.each(t.state.selectedIdx,function(e,s){t.lookupItems[s].selected=!0,t.$element.find("option").eq(s).prop("selected",!0)}),t.state.currValue=t.state.selectedIdx,t.setLabel(),t.utils.triggerCallback("Change",t)):t.state.currValue!==t.state.selectedIdx&&(t.$element.prop("selectedIndex",t.state.currValue=t.state.selectedIdx).data("value",t.lookupItems[t.state.selectedIdx].text),t.setLabel(),t.utils.triggerCallback("Change",t))},highlight:function(e){var t=this,s=t.$li.filter("[data-index]").removeClass("highlighted");t.utils.triggerCallback("BeforeHighlight",t),void 0===e||-1===e||t.lookupItems[e].disabled||(s.eq(t.state.highlightedIdx=e).addClass("highlighted"),t.detectItemVisibility(e),t.utils.triggerCallback("Highlight",t))},select:function(t){var s=this,l=s.$li.filter("[data-index]");if(s.utils.triggerCallback("BeforeSelect",s,t),void 0!==t&&-1!==t&&!s.lookupItems[t].disabled){if(s.state.multiple){s.state.selectedIdx=e.isArray(s.state.selectedIdx)?s.state.selectedIdx:[s.state.selectedIdx];var i=e.inArray(t,s.state.selectedIdx);-1!==i?s.state.selectedIdx.splice(i,1):s.state.selectedIdx.push(t),l.removeClass("selected").filter(function(t){return-1!==e.inArray(t,s.state.selectedIdx)}).addClass("selected")}else l.removeClass("selected").eq(s.state.selectedIdx=t).addClass("selected");s.state.multiple&&s.options.multiple.keepMenuOpen||s.close(),s.change(),s.utils.triggerCallback("Select",s,t)}},destroy:function(e){var t=this;t.state&&t.state.enabled&&(t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),e||t.$element.removeData("selectric").removeData("value"),t.$element.prop("tabindex",t.originalTabindex).off(".sl").off(t.eventTriggers).unwrap().unwrap(),t.state.enabled=!1)}},e.fn.selectric=function(t){return this.each(function(){var s=e.data(this,"selectric");s&&!s.disableOnMobile?"string"==typeof t&&s[t]?s[t]():s.init(t):e.data(this,"selectric",new n(this,t))})},e.fn.selectric.defaults={onChange:function(t){e(t).change()},maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!1,nativeOnMobile:!0,openOnFocus:!0,openOnHover:!1,hoverIntentTimeout:500,expandToItemText:!1,responsive:!1,preventWindowScroll:!0,inheritOriginalWidth:!1,allowWrap:!0,forceRenderAbove:!1,forceRenderBelow:!1,stopPropagation:!0,optionsItemBuilder:"{text}",labelBuilder:"{text}",listBuilder:!1,keys:{previous:[37,38],next:[39,40],select:[9,13,27],open:[13,32,37,38,39,40],close:[9,27]},customClass:{prefix:"selectric",camelCase:!1},multiple:{separator:", ",keepMenuOpen:!0,maxLabelEntries:!1}}});
var $ = jQuery;
(function ($) {

  document.querySelectorAll('.gfield_select').forEach(select => {
    select.addEventListener('change', function () {
      if (this.value) {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });

  $(document).ready(function () {
    if ($('.acro_form_6_wrapper').length) {

      $('.acrobits_softphone-forms').addClass("remove-justify-content");

    }
  });



  $(document).on("click", "#gform_submit_button_8", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 8
    })
  });


  $(document).on("click", "#gform_submit_button_7", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 7
    })
  });


  $(document).on("click", "#gform_submit_button_6", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 6
    })
  });

  $(document).on("click", "#gform_submit_button_5", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 5
    })
  });

  var blockedDomains = [];
  if ($('.csf_video_modal').length) {
    $('.csf_video_modal').each(function () {
      $(this).insertAfter('#smooth-wrapper');
    });
  }

  $('.book-demo-cta').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $('#stepped_form');

    // Use GSAP to smoothly scroll to the target with an offset
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
  });


  $('.stepFormCta').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $('#stepped_form');

    // Use GSAP to smoothly scroll to the target with an offset
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
  });

  $('.glossary_list a').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $(this).attr('href');

    // Use GSAP to smoothly scroll to the target with an offset
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
  });


  $('.page_cta_banner a').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $(this).attr('href');
    if (targetId.includes('#')) {
      // Use GSAP to smoothly scroll to the target with an offset
      gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
    }
    else {
      window.location.href = targetId;
    }
  });

  $(document).on('change', '.hs-fieldtype-file .input input[type="file"]', function () {

    var fileName = $(this).val().split('\\').pop(); // Extract the filename from the file input

    $('.hs-fieldtype-file .input').attr('data-content', fileName); // Set the filename as a data attribute

    // Update the content of the :after pseudo-element
    $('.hs-fieldtype-file .input::after').attr('content', 'File chosen: ' + fileName);
  });

  // Assuming the iframe has a class of "ssa_booking_iframe"
  var iframe = $(".ssa_booking_iframe");

  if (iframe) {
    // Attach an event listener to the iframe contents
    iframe.on("load", function () {
      // Retrieve the iframe document object
      var iframeDoc = iframe.contents();

      // Attach a MutationObserver to detect changes in the iframe
      var observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
          // Check if the mutation added an element node
          if (
            mutation.addedNodes &&
            mutation.addedNodes.length &&
            mutation.addedNodes[0].nodeType === 1
          ) {
            var addedNode = mutation.addedNodes[0];
            // Check if the added node has the class "confirm"
            if (
              addedNode.classList &&
              addedNode.classList.contains("confirm")
            ) {
              showformStep3();
            }

            if (
              addedNode.classList &&
              addedNode.classList.contains("cust-info")
            ) {
              showformStep4();
            }
          }
        });
      });

      // Start observing the iframe contents for mutations
      observer.observe(iframeDoc[0], { childList: true, subtree: true });
    });
  }

  var observer = new MutationObserver(function (mutations) {
    if ($('.frm_page_num_2').length > 0) {
      $('.form_section .logo').hide();
      observer.disconnect();
    }

  });


  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // if ($(window).width() > 1024) {
  $(window).on("scroll", function () {
    var vh = $(window).height(); // Height of the viewport in pixels
    if ($(this).scrollTop() > 60) {
      // If the scroll top offset is greater than the viewport height
      $(".header").addClass("scrolled"); // Add the 'scrolled' class to the header
      $(".header").removeClass("nav-color-white"); // Add the 'scrolled' class to the header
    } else {
      $(".header").removeClass("scrolled"); // Otherwise, remove the 'scrolled' class
      if ($('section:first').hasClass('dark-panel')) {
        $(".header").addClass("nav-color-white");
      } else {

      }
    }
  });
  // }

  $(".burger , .close").on("click", function () {
    $(".mobile-header").toggleClass("open-mobile-header");
  });

  // When the .video_button is clicked...
  $(".video_button").click(function () {
    // If .video_popup exists...
    if ($(".video_popup").length) {
      // Move it outside the #smooth-wrapper
      $(".video_popup").appendTo("body");
    }

    // Get the data-vid_id attribute from the clicked button
    var vid_id = $(this).attr("data-vid_id");
    // Set the src of the .video_popup iframe to the vid_id
    $(".video_popup iframe").attr("src", vid_id);
    // Show the .video_popup
    $(".video_popup").show();
  });

  // When the .close-video is clicked...
  $(".close-video").click(function () {
    // Hide the .video_popup
    $(".video_popup").hide();
    // Clear the src of the .video_popup iframe
    $(".video_popup iframe").attr("src", "");
  });

  // Define a flag to keep track of the number of clicks
  var clicked = {};

  // if ($(window).width() < 1024) {
  //   // Intercept click events on the main menu items within mobile-header-holder
  //   $(".menu-item-has-children > a").on("click", function (e) {
  //     console.log("clicking");
  //     var id = $(this).parent().attr("class"); // Get the class of the parent li element
  //
  //     // If it's the first click, prevent the default action and open the submenu
  //     if (!clicked[id]) {
  //       e.preventDefault(); // Prevent navigating to the link
  //       $(this).siblings(".sub-menu").slideToggle("fast"); // Open the submenu
  //       clicked[id] = true; // Set the flag to true
  //     }
  //     // On the second click, allow the default action and reset the flag
  //     else {
  //       clicked[id] = false; // Reset the flag
  //     }
  //   });
  // }
  if (doesClassExist("load_more_posts")) {
    var loadingMore = false; // Flag to handle loading state

    var loadingMore = false; // Flag to handle loading state

    $(document).on('scroll', function () {

      if (loadingMore) return; // Return if already loading

      // Get window dimensions.
      var windowHeight = $(window).height();
      var windowScrollTop = $(window).scrollTop();
      var windowScrollBottom = windowScrollTop + windowHeight;

      // Get middle of the screen.
      var middleOfScreen = windowScrollTop + (windowHeight * 0.85);

      if (window.location.href.indexOf('blog') > -1) {
        if ($('.post_block').length >= 20) {
          $('.load_more_posts').remove();
        }
      }

      // Iterate over each '.load_more_posts' element.
      $('.load_more_posts').each(function () {
        var element = $(this);

        // Get element dimensions.
        var elementHeight = element.outerHeight();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + elementHeight;

        // Check if middle of the screen is inside the element and if the text contains 'Load more'.
        if (middleOfScreen >= elementTop && middleOfScreen <= elementBottom && element.hasClass('load_more_posts') === true) {





          loadingMore = true; // Set the flag to true
          // Click the element.
          element.click();
          // Wait for a few seconds or until the operation is completed, then reset the flag
          setTimeout(function () {
            loadingMore = false; // Reset the flag
          }, 2000); // Adjust the timeout as needed
        }
      });
    });


  }



  if (doesClassExist("mobile-solution-slider")) {
    const MobileSolution = new Swiper(".mobile-solution-slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        1024: {
          slidesPerView: 2.05,
          allowTouchMove: true,
        },
      },
    });
  }

  if (doesClassExist("info_blocks_slider")) {
    const InfoBlocks = new Swiper(".info_blocks_slider", {
      direction: "horizontal",
      slidesPerView: 1.2,
      spaceBetween: 0,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: false,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 3.2,
        },
      },
    });
  }

  if (doesClassExist("pricing_table_slider")) {
    const InfoBlocks = new Swiper(".pricing_table_slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: false,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 3.2,
        },
      },
    });
  }

  if (doesClassExist("bundle_items_slider")) {
    const InfoBlocks = new Swiper(".bundle_items_slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: true,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: true,
          slidesPerView: 4.1,
        },
      },
    });
  }

  if (doesClassExist("features_list_slider")) {
    const InfoBlocks = new Swiper(".features_list_slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: true,
          slidesPerView: 1,
        },
        1024: {
          allowTouchMove: true,
          slidesPerView: 2,
        },
      },
    });
  }

  if (doesClassExist("expanded_features_carousel")) {
    const ExpandedFeatures = new Swiper(".expanded_features_carousel", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 10,
      allowTouchMove: true,
      breakpoints: {
        480: {
          allowTouchMove: false,
          slidesPerView: 1.3,
        },
        670: {
          allowTouchMove: false,
          slidesPerView: 1.7,
        },
        768: {
          allowTouchMove: false,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 3.2,
        },
      },
    });
  }

  if (doesClassExist("feature_slider")) {

  }

  /* if (doesClassExist("blog_slider")) {
     const FeatureMobile = new Swiper(".blog_slider", {
       direction: "horizontal",
       slidesPerView: 1.05,
       spaceBetween: 15,
       allowTouchMove: true,
       navigation: {
         nextEl: ".next_slide",
         prevEl: ".prev_slide",
       },
       breakpoints: {
         768: {
           allowTouchMove: true,
           slidesPerView: 2.2,
         },
         1024: {
           allowTouchMove: true,
           slidesPerView: 3.2,
         },
       },
     });
   }*/

  if (doesClassExist("feature_block_tabs")) {
    $(".feature_block_tabs ul li").click(function () {

      $(".feature_block_tabs ul li").removeClass("active");

      $(this).addClass("active");

      $(".feature_list").removeClass('active_content_tab');

      var target = $(this).data("target");

      $('.feature_list[data-target="' + target + '"]').addClass('active_content_tab');
    });
  }

  if (doesClassExist("sdk_block_tabs")) {
    $(".sdk_block_tabs ul li").click(function () {
      // Remove 'active' class from all li elements
      $(".sdk_block_tabs ul li").removeClass("active");

      // Add 'active' class to the clicked li
      $(this).addClass("active");

      // Hide all li elements in .sdk_block_intros
      $(".sdk_block_intros li").hide();

      // Show only the li with the data-intro attribute matching the clicked li's data-target
      var target = $(this).data("target");
      $('.sdk_block_intros li[data-intro="' + target + '"]').show();

      // Hide all li elements in .sdk_block_codes
      $(".sdk_block_codes .code_block_li").hide();

      // Show only the li with the data-sdk attribute matching the clicked li's data-target
      $('.sdk_block_codes .code_block_li[data-sdk="' + target + '"]').show();
    });
  }

  if (doesClassExist("os_switch")) {
    $(".os_switch li").click(function () {
      // Remove 'active' class from all li elements
      $(".os_switch li").removeClass("active");

      // Add 'active' class to the clicked li
      $(this).addClass("active");

      // Hide all .android and .ios elements
      $(".android, .ios").hide();

      // Show the element with the class matching the clicked li's data-os
      var os = $(this).data("os");
      $("." + os).show();
    });
  }



  //COMPONENT SCROLLING ANIMATIONS START
  // if (doesClassExist("solutions-container")) {
  //   if ($(window).width() > 1024) {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".solutions-container",
  //         pin: ".solutions-container",
  //         start: "3px top",
  //         // toggleClass: 'solutions-container-active',
  //         end: "bottom -150px",
  //         scrub: 1,
  //         markers: false,
  //         onEnter: () =>
  //           $(".solutions-container").addClass("solutions-container-active"),
  //         // onLeave: () => $(this).removeClass('solutions-container-active'),
  //         // onEnterBack: () => $(this).addClass('solutions-container-active'),
  //         onLeaveBack: () =>
  //           $(".solutions-container").removeClass("solutions-container-active"),
  //       },
  //     });
  //   }
  // }

  if (doesClassExist("softphone_linkup_component")) {
    // if ($(window).width() > 1024) {
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".softphone_linkup_component",
    //             start: "top 70%",
    //             end: "40% 75%",
    //             scrub: 1,
    //             markers:false,
    //         }
    //     })
    //         .to('.layer_5', {rotate:'45deg'})
    //         .to('.solutions-holder .soft_grad', {opacity:'0.1'})
    //         .to('.layer_4', {top:'.88%', left:'67.05%'})
    //         .to('.layer_3', {top:'8.75%', left:'19.33%'})
    //         .to('.layer_2', {top:'19.21%', left:'-.37%'})
    //         .to('.layer_1', {top:'22.28%', left:'0'})
    // }
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".softphone_linkup_component",
    //         start: "top 40%",
    //         end: "bottom 40%",
    //         scrub: 0.2,
    //         markers:false,
    //     }
    // })
    //     .to('.layer_5', {rotate:'135deg'})
    //     .to('.layer_4', {top:'5.88%', left:'67.05%'})
    //     .to('.layer_3', {top:'18.75%', left:'19.33%'})
    //     .to('.layer_2', {top:'29.21%', left:'-.37%'})
    //     .to('.layer_1', {top:'32.28%', left:'0'})
  }

  if (doesClassExist("large_cta_container")) {
    if ($(window).width() > 1024) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".large_cta_container",
            start: "top 80%",
            end: "bottom 0",
            scrub: 1,
            markers: false,
          },
        })
        .to(".large_cta_container .soft_grad", { bottom: "-20%" });
    }
  }

  if (doesClassExist("sdk_info_block_container")) {
    if ($(window).width() > 1024) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sdk_info_block_container",
            start: "top 80%",
            end: "bottom 0",
            scrub: 1,
            markers: false,
          },
        })
        .to(".sdk_info_block_container .soft_grad", { top: "-60%" })
        // .to(".sdk_info_block_container .soft_grad", { top: "-20%" })
        .to(".sdk_info_block_container .soft_grad", { top: "-10%" });
    }
  }
  //COMPONENT SCROLLING ANIMATIONS END

  //FORM SUBMISSION


  $(".email_form button").click(function (e) {
    e.preventDefault(); // prevent the default form submission
    console.log(123)

    var email = $(".email_form input").val(); // get the email field value
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // basic regex to validate an email


    if (!email) {
      // if the email field is empty
      $(".email_validation").show().text("Please provide an email address.");
    } else if (emailRegex.test(email)) {
      // if the email is valid
      var domain = email.split("@")[1]; // get the domain of the email

      if (blockedDomains.includes(domain)) {
        // if the domain is blocked
        $(".email_validation")
          .show()
          .text(
            "Sorry, please use a business email to request a demo of our platform."
          );
      } else {
        $(".email_validation").hide();
        showformStep2();
      }
    } else {
      $(".email_validation")
        .show()
        .text("The provided email address is not valid.");
    }
  });


})(jQuery);

function doesClassExist(className) {
  return $("." + className).length > 0;
}

function submitToHubSpotStep1(email) {
  var url = "https://api.hsforms.com/submissions/v3/integration/submit/5406436/f4bf7d3b-0900-4a4d-814f-736fa5681a99";
  var data = {
    action: 'form_submit_step_one',
    fields: [
      {
        name: "email",
        value: email
      }
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  };


  $.ajax({
    url: acrobits_data.ajax_url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (response) {
      console.log("1")
      console.log('Submission to HubSpot was successful!', response);
      // Sending a Google Analytics event
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'AW-740574542');

      gtag('event', 'emailSubmission', {
        'event_category': 'Email',
        'event_label': 'emailSubmission'
      });
    },
    error: function (xhr, status, error) {
      console.error('Submission to HubSpot failed:', xhr.responseText);
    }
  });
}


function submitToHubSpotStep3(email, firstname, lastname, hubspot_owner_id, products_to_demo, demo_date) {
  // return false;
  var url = "https://api.hsforms.com/submissions/v3/integration/submit/5406436/21ec9f41-5303-4f0d-ad52-9cab6e69b864";
  var data = {
    fields: [
      {
        name: "email",
        value: email
      },
      {
        name: "firstname",
        value: firstname
      },
      {
        name: "lastname",
        value: lastname
      },
      {
        name: "hubspot_owner_id",
        value: hubspot_owner_id
      },
      {
        name: "products_to_demo",
        value: products_to_demo
      },
      {
        name: "demo_date",
        value: demo_date
      },
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  };

  $.ajax({
    url: acrobits_data.ajax_url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (response) {
      console.log("2")
      console.log('Submission to HubSpot was successful!', response);
    },
    error: function (xhr, status, error) {
      console.error('Submission to HubSpot failed:', xhr.responseText);
    }
  });
}

// Function to get a cookie value by name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  return "";
}


function showformStep2() {
  $(".email_block_tab").removeClass("busy").addClass("done");
  $(".date_block_tab").removeClass("inactive").addClass("busy");
  $(".email_block").hide();
  $(".date_block").show();

  setTimeout(function () {
    $('.date_block .overlay').hide();
  }, 3000);

  // Your email value to append
  var email_val = $('#step_1_email').val();

  // Encode the email value to make sure special characters are handled correctly
  var encoded_email_val = encodeURIComponent(email_val);

  // The string to append, with the email value encoded
  var email_val_concat = "&Email=" + encoded_email_val;

  // Select the iframe by its ID
  var iframe = $('#iFrameResizer0');

  // Get the current src value
  var currentSrc = iframe.attr('src');

  // Remove trailing # and /
  currentSrc = currentSrc.replace(/\/?#\/?$/, "");

  // Append email value to the src
  var newSrc = currentSrc + email_val_concat;

  // Set the new src to the iframe
  iframe.attr('src', newSrc);

  submitToHubSpotStep1(email_val);
}

function showformStep3() {
  $(".email_block_tab").removeClass("busy").addClass("done");
  $(".date_block_tab").removeClass("busy").addClass("done");
  $(".personal_info_block_tab").removeClass("inactive").addClass("busy");
  var email_val = $('#step_1_email').val();
  // $('#iFrameResizer0').contents().find('#app #email').val(email_val);
  // $('#iFrameResizer0').contents().find('#app #email').val(email_val);
  $('#iFrameResizer0').contents().find('#product-of-interest-0').parent().parent().find('label').click();

}


function showformStep4() {
  $(".email_block_tab").removeClass("busy").addClass("done");
  $(".date_block_tab").removeClass("busy").addClass("done");
  $(".personal_info_block_tab").removeClass("inactive").addClass("done");
  $(".finish_block_tab").removeClass("inactive").addClass("done");

  var email_val = $('#step_1_email').val();
  var first_name_with_label = $('#iFrameResizer0').contents().find('.confirm .field-name-1').text();
  var first_name = first_name_with_label.replace('Name:', '').trim();
  var last_name_with_label = $('#iFrameResizer0').contents().find('.confirm .field-last-name-2').text();
  var last_name = last_name_with_label.replace('Last Name:', '').trim();
  var date = $('#iFrameResizer0').contents().find('.confirm .md-card-header-text .appointment-start-d').text();
  console.log(date)
  var productOfInterest_with_label = $('#iFrameResizer0').contents().find('.confirm .field-product-of-interest-3').text();
  var productOfInterest = productOfInterest_with_label.replace('Product of Interest:', '').trim();
  var HBID = getCookie('hubspotutk');

  var date_text = date;
  var date_object = new Date(date_text);
  var formatted_date = date_object.getFullYear() + '-' +
    ("0" + (date_object.getMonth() + 1)).slice(-2) + '-' +
    ("0" + date_object.getDate()).slice(-2);

  submitToHubSpotStep3(email_val, first_name, last_name, HBID, productOfInterest, formatted_date);

}




// Function to observe changes in iframe
function observeIframe(iframeElement) {
  var hasTriggered = false;  // Flag to keep track of whether myFunction has been triggered
  var observerAdded = false; // Flag to keep track of whether observer has been added

  // Make sure the iframe is loaded before we attach the observer
  $(iframeElement).on('load', function () {
    if (observerAdded) {
      return; // Exit if observer has already been added
    }

    var targetNode = iframeElement.contentWindow.document.body;

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function (mutationsList, observer) {
      for (var mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Check if the class exists within the iframe
          var elementExists = $(targetNode).find('.appointment-type-voucher-reservation .confirmation-actions').length > 0;

          if (elementExists && !hasTriggered) {
            // Find the name and email from the iframe and pass them to your function
            var name = $(targetNode).find('.field-name-0').text().replace('Name:', '').trim();
            var email = $(targetNode).find('.field-email-1').text().replace('Email:', '').trim();
            var HBID = getCookie('hubspotutk');
            console.log(HBID);
            // Trigger your function here
            myFunction(name, email, HBID);

            hasTriggered = true;  // Set the flag to true
          }
        }
      }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    observerAdded = true; // Set the flag to true
  });
}

// Your function that you want to trigger
function myFunction(name, email, HBID) {

  console.log('Unknown function fired')
  return false
  var url = "https://api.hsforms.com/submissions/v3/integration/submit/5406436/53a89f5d-8e8a-4f85-af28-cc4f6b7bc39b";
  var data = {
    fields: [
      {
        name: "email",
        value: email
      },
      {
        name: "fullname",
        value: name
      },
    ],
    context: {
      hutk: HBID,
      pageUri: window.location.href,
      pageName: document.title
    }
  };

  $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (response) {
      console.log("3")
      console.log('Submission to HubSpot was successful!', response);
    },
    error: function (xhr, status, error) {
      console.error('Submission to HubSpot failed:', xhr.responseText);
    }
  });
}

// Usage
$(document).ready(function () {
  var iframeElement = document.getElementById('iFrameResizer0');
  observeIframe(iframeElement);
});


(function ($) {
  $(function () {
    $(document).on('gform_page_loaded', function (event, form_id, current_page) {
      // Stop execution if the user was redirected to the landing page
      if (typeof redirectToLanding !== 'undefined' && redirectToLanding) {
        console.log("The user was redirected to the landing page. Stopping further steps.");
        return;
      }

      const formWrapper = $(`#gform_wrapper_${form_id}`)
      if (formWrapper.length > 0 && formWrapper.data('form-type') === 'softphone' && current_page == 2) {
        let $body = $(`body`)
        var email = $(`#input_${form_id}_30`).val();
        var firstname = undefined;
        var lastname = undefined;
        var primary_use_case = undefined;
        var existing_voip_infrastructure = undefined;
        var existing_infrastructure_type = undefined;
        var type_of_provider = undefined;
        var number_of_users = undefined;

        /* if (form_id === 7) {
           firstname = $(`#input_${form_id}_3`).val() || undefined;
           lastname = $(`#input_${form_id}_29`).val() || undefined;
           primary_use_case = $(`#input_${form_id}_44`).val() || undefined;
           existing_infrastructure_type = $(`#input_${form_id}_46`).val() || undefined;
           if ($(`#choice_${form_id}_37_0`).is(':checked')) {
             existing_voip_infrastructure = 'Yes'
           }
 
           if ($(`#choice_${form_id}_37_1`).is(':checked')) {
             existing_voip_infrastructure = 'No'
           }
         }*/


        if (form_id === 8) {
          firstname = $(`#input_${form_id}_3`).val() || undefined;
          lastname = $(`#input_${form_id}_29`).val() || undefined;
          type_of_provider = $(`#input_${form_id}_44`).val() || undefined;
          existing_infrastructure_type = $(`#input_${form_id}_46`).val() || undefined;
          if ($(`#choice_${form_id}_37_0`).is(':checked')) {
            existing_voip_infrastructure = 'Yes'
          }

          if ($(`#choice_${form_id}_37_1`).is(':checked')) {
            existing_voip_infrastructure = 'No'
          }

          if ($(`#choice_${form_id}_47_0`).is(':checked')) {
            number_of_users = '-50'
          }

          if ($(`#choice_${form_id}_47_1`).is(':checked')) {
            number_of_users = '+50'
          }
          console.log({
            firstname,
            lastname,
            type_of_provider,
            existing_infrastructure_type,
            existing_voip_infrastructure,
            number_of_users
          });
        }

        var industryInput = $(`#input_${form_id}_43`).val();

        if ($(`#gform_page_${form_id}_1`).length > 0) {

          var domain = email.split("@")[1]; // get the domain of the email

          if ($body.data('acro_sform_step_1_submitted') !== true) {
            CloudPhoneDemo({ email, primary_use_case, firstname, lastname, existing_infrastructure_type, existing_voip_infrastructure, type_of_provider, number_of_users })
              .then(res => {
                console.log("response")
                console.log(res)

                if (res) {
                  $body.data('acro_sform_step_1_submitted', true)
                }
              })
              .catch(err => {
                console.error(err)
              })
          }
        }
      }
      console.log("redirectToLanding in onload.js:", typeof redirectToLanding !== 'undefined' ? redirectToLanding : "undefined");
    });

    function CloudPhoneDemo({ email, firstname, lastname, products_to_demo, primary_use_case, existing_infrastructure_type, existing_voip_infrastructure, type_of_provider, number_of_users }) {
      var data = {
        action: "softphone_form_submit_step_one",
        fields: [
          {
            name: "email",
            value: email
          },
          {
            name: "firstname",
            value: firstname
          },
          {
            name: "lastname",
            value: lastname
          },
          {
            name: "products_to_demo",
            value: products_to_demo
          },
          {
            name: "existing_infrastructure_type",
            value: existing_infrastructure_type
          },
          {
            name: "primary_use_case",
            value: primary_use_case
          },
          {
            name: "existing_voip_infrastructure",
            value: existing_voip_infrastructure
          },
          {
            name: "type_of_provider",
            value: type_of_provider
          },
          {
            name: "number_of_users",
            value: number_of_users
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      };

      let p = new Promise((resolve, reject) => {
        maybeCheckRecaptcha().then(response => {
          if (response) {
            console.log("TEST")
            console.log(data)
            console.log(response)
            $.ajax({
              url: acrobits_data.ajax_url,
              type: 'POST',
              dataType: "json",
              data,
              success: function (response) {
                console.log("4")
                console.log('Submission to HubSpot was successful!', response);
                resolve(true)
              },
              error: function (xhr, status, error) {
                console.error('Submission to HubSpot failed:', xhr.responseText);
                resolve(false)
              }
            });
          } else {
            console.log('Failed to verify captcha')
          }
        })
      })



      return p
    }

    function maybeCheckRecaptcha() {
      return new Promise((resolve, reject) => {
        if (typeof grecaptcha !== 'undefined' && typeof gforms_recaptcha_recaptcha_strings !== 'undefined') {
          grecaptcha.ready(function () {
            grecaptcha.execute(gforms_recaptcha_recaptcha_strings.site_key, {
              action: 'submit'
            }).then(function (token) {
              if (token.length && typeof token === 'string') {
                $.ajax({
                  url: gforms_recaptcha_recaptcha_strings.ajaxurl,
                  type: 'POST',
                  dataType: "json",
                  data: {
                    action: 'softphone_form_check_recaptcha',
                    token
                  },
                  success: function (response) {
                    console.log(response)
                    resolve(response.success)
                  },
                  error: function () {
                    resolve(false)
                  }
                })
              }
            });
          });
        } else {
          resolve(true)
        }
      })
    }

    if (typeof gform !== "undefined") {
      gform.addFilter('gform_spinner_target_elem', function (a) {
        console.log(a)

        return a
      })
    }

    $(document).on('gform_page_loaded', function (event, form_id, current_page) {
      if ($('.stepped_form .form_tabs').length > 0) {
        $(`.stepped_form .form_tabs ul li:nth-child(${current_page})`).addClass('busy').prevAll().removeClass('busy').removeClass('done').addClass('done');
      }
    });
  })

  $(document).ready(function () {
    $('.toggle-list__label').on('click', function () {
      $(this).closest('.toggle-list').find('.toggle-list__list').slideToggle();
    })


    var stickyDiv = $('.acro-compare-table-block_1 .acro-compare-table-block__table__items .heading-row');
    if (stickyDiv.length && $(document).width() >= 768) {
      var parentDiv = stickyDiv.closest('.acro-compare-table-block__table__items');
      var stickyDivTop = stickyDiv.offset().top + 88;

      $(window).scroll(function () {
        var stickyDivWidth = parentDiv.width();
        var scrollDistance = $(window).scrollTop();
        var parentBottom = parentDiv.offset().top + parentDiv.outerHeight() - stickyDiv.outerHeight();

        if (scrollDistance >= stickyDivTop && scrollDistance <= parentBottom) {
          stickyDiv.css({ position: 'fixed', top: '88px', width: stickyDivWidth + 'px' });
          stickyDiv.addClass('sticky-row');
        } else if (scrollDistance > parentBottom) {
          stickyDiv.css({ position: 'absolute', top: parentBottom - parentDiv.offset().top + 'px' });
          stickyDiv.removeClass('sticky-row');
        } else {
          stickyDiv.css({ position: 'static' });
          stickyDiv.removeClass('sticky-row');
        }
      });
    }
    $(document).ready(function () {
      $('.mobile-header-holder .menu-item-has-children').on('click', function (e) {
        $(this).find('.sub-menu').first().slideToggle();
        $(this).toggleClass('active');
      })

      $('.left-header .menu > li > a').hover(function () {
        $('.left-header .menu').addClass('hovered')
      },
        function () {
          $('.left-header .menu').removeClass('hovered')
        })
    });
  })





  

})(jQuery)



$(function () {
  // ScrollSmoother.create({
  //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   effects: true, // looks for data-speed and data-lag attributes on elements
  //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  // });

  // Mobile Break POint
  var mediaQueryList = window.matchMedia("(min-width: 1024px)");
  // 2 Column Timeline Animations
  var imageTop = document.querySelector(".featured_image_top img");
  var title_area = document.querySelector(".title_area");

  // Nav Scroll

  const panels = document.querySelectorAll(".dark-panel");
  const nav = document.querySelector(".header");

  panels.forEach((panel) => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: panel,
      start: "top 60px",
      end: "bottom 80px",
      onEnter: () => {
        nav.classList.add("nav-color-white");
      },

      onEnterBack: () => {
        nav.classList.add("nav-color-white");
      },
      // onLeaveBack: () => {
      //   nav.classList.remove("nav-color-white");
      // },
      onLeave: () => {
        nav.classList.remove("nav-color-white");
      },
    });
  });

  if (mediaQueryList.matches) {
    // Nav Button Style per component
    if (doesClassExist("nav_button_has_border")) {
      const nbhbPanels = document.querySelectorAll(".nav_button_has_border");

      nbhbPanels.forEach((panel) => {
        const scrollTrigger = ScrollTrigger.create({
          trigger: panel,
          start: "top 60px",
          end: "bottom 80px",
          onEnter: () => {
            nav.classList.add("button-is-border");
          },
          onEnterBack: () => {
            nav.classList.add("button-is-border");
          },
          onLeaveBack: () => {
            nav.classList.remove("button-is-border");
          },
          onLeave: () => {
            nav.classList.remove("button-is-border");
          },
        });
      });
    }


    // Large balls
    // if (doesClassExist("flying_ball_animations")) {
    //   gsap.from(".flying_ball_animations img", {
    //     y: "-95vh",
    //     x: "-7%",
    //     scaleX: 1.5,
    //     scaleY: 1.5,
    //     ease: "linear",
    //     scrollTrigger: {
    //       trigger: ".large_cta_container",
    //       start: "top 100%",
    //       end: "top center",
    //       scrub: true,
    //     },
    //   });
    // }

    // Softphone Linkup Component
    // Scroll Down
    if (doesClassExist("softphone_linkup_component")) {
      // gsap.to(".softphone_linkup_component .layer_5", {
      //   rotation: -270,
      //   transformOrigin: "50% 50%",
      //   ease: "linear",
      //   scrollTrigger: {
      //     trigger: ".softphone_linkup_component",
      //     start: "top center",
      //     end: "bottom -100%",
      //     scrub: true,
      //   },
      // });
      gsap.from(".softphone_linkup_component .layer_3", {
        y: "-60px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top 40%",
          end: "center 60%",
          scrub: true,
          // markers: true,
        },
      });
      gsap.from(".softphone_linkup_component .layer_1", {
        y: "60px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top 40%",
          end: "center 60%",
          scrub: true,
        },
      });

      // Scroll UP
      gsap.to(".softphone_linkup_component .layer_3", {
        y: "-60px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top -200px",
          end: "bottom 80%",
          scrub: true,
        },
      });
      gsap.to(".softphone_linkup_component .layer_2", {
        y: "-40px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top -200px",
          end: "bottom 80%",
          scrub: true,
        },
      });
      gsap.to(".softphone_linkup_component .layer_1", {
        y: "10px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top -200px",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }

    // Banner
    if (doesClassExist("two_column_image_timeline_top")) {
      gsap.to(imageTop, {
        autoAlpha: 0,
        y: "10%",
        width: "100%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_top",
          start: "top 65%",
          end: "40% 75%",
          scrub: true,
        },
      });
      gsap.to(title_area, {
        autoAlpha: 1,
        visibility: "visible",
        y: 0,
        // duration: 4,
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_top",
          start: "top 60%",
          end: "20% 50%",
          scrub: true,
        },
      });
    }

    // 2 Column Timeline
    if (doesClassExist("two_column_image_timeline_inner")) {
      gsap.to(".pinnableSection", {
        scrollTrigger: {
          trigger: ".two_column_image_timeline_inner",
          end: "bottom 120%",
          toggleActions: "play none none reverse",
          pin: true,
          pin: ".pinnableSection",
          pinSpacing: false,
        },
        duration: 0.4,
      });

      const tctRows = document.querySelectorAll(
        ".two_column_image_timeline_wrapper .timeline_row"
      );
      const tctOthers = document.querySelectorAll(
        ".two_column_image_timeline_wrapper .pinnableSection_img"
      );

      tctRows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          onEnter: () => tctOthers[i].classList.add("active"),
          onLeave: () => tctOthers[i].classList.remove("active"),
          onEnterBack: () => tctOthers[i].classList.add("active"),
          onLeaveBack: () => tctOthers[i].classList.remove("active"),
        });
      });


    }
    /////////

    if(mediaQueryList){
      if(doesClassExist("two_column_image_timeline_simple")) {
        setTimeout(function() {
          console.log('setting it now');
          $('.two_column_image_timeline_simple .timeline_row .container .col_right').css('margin-bottom', '-150px');
        }, 1000);
      }
    }

    // 2 Column Timeline Simpole

    if (doesClassExist("title_area_image")) {
      gsap.to(".title_area_image", {
        autoAlpha: 0,
        y: "650px",
        x: "200px",
        width: "100%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple ",
          start: "top top",
          end: "20% 40%",
          scrub: true,
        },
      });
    }

    if (doesClassExist("space_first_item")) {
      gsap.from(".space_first_item", {
        y: "20%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".timeline_simple",
          start: "top center%",
          end: "top top",
          scrub: true,
        },
      });
    }
    if (doesClassExist("tctsPinnableSection")) {
      gsap.to(".tctsPinnableSection", {
        scrollTrigger: {
          trigger: ".timeline_simple",
          end: "bottom 120%",
          toggleActions: "play none none reverse",
          pin: true,
          pin: ".tctsPinnableSection",
          pinSpacing: false,
        },
        duration: 0.4,
      });

      const tctsRows = document.querySelectorAll(
        ".timeline_simple .timeline_row"
      );
      const tctsOthers = document.querySelectorAll(
        ".timeline_simple .pinnableSection_img"
      );

      tctsRows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          // markers: true,
          onEnter: () => tctsOthers[i].classList.add("active"),
          onLeave: () => tctsOthers[i].classList.remove("active"),
          onEnterBack: () => tctsOthers[i].classList.add("active"),
          onLeaveBack: () => tctsOthers[i].classList.remove("active"),
        });
      });
      gsap.to(".tlsmp_first", {
        // y: "50vh",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple",
          start: "top top",
          end: "40% 120%",
          scrub: true,
          // markers: true,
          onEnter: () => tctsOthers[i].classList.add("active"),
          onLeave: () => tctsOthers[i].classList.remove("active"),
        },
      });
      gsap.from(".tlsmp_first img", {
        scaleX: 1.5,
        scaleY: 1.5,
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple",
          start: "top top",
          end: "40% 90%",
          scrub: true,
        },
      });
    }

    /////////

    // Incentive Scroll
    // if (doesClassExist("incentive_block")) {
    //   gsap.to(".incentive_block", {
    //     left: "40%",
    //     ease: "power2.out",
    //     margin: "0",
    //     scrollTrigger: {
    //       trigger: ".incentive_panel",
    //       start: "top top",
    //       pin: true,
    //       pinSpacing: true,
    //       scrub: true,
    //     },
    //   });
    //   gsap.to(".incentive_panel .title_area", {
    //     ease: "power2.out",
    //     y: "-200px",
    //     autoAlpha: "0",
    //     scrollTrigger: {
    //       trigger: ".incentive_panel",
    //       start: "top top",
    //       scrub: true,
    //     },
    //   });
    //   gsap.to(".incentive_panel .incentive_cta", {
    //     ease: "power2.out",
    //     y: "200px",
    //     autoAlpha: "0",
    //     scrollTrigger: {
    //       trigger: ".incentive_panel",
    //       start: "top top",
    //       scrub: true,
    //     },
    //   });
    // }
  } else {
    if (doesClassExist("title_area_image")) {
      gsap.to(".title_area_image", {
        autoAlpha: 0,
        y: "650px",
        x: "200px",
        width: "100%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple ",
          start: "top top",
          end: "20% 40%",
          scrub: true,
        },
      });
    }
    if (doesClassExist("two_column_image_timeline_top")) {
      // gsap.to(imageTop, {
      //   autoAlpha: 0,
      //   width: "auto",
      //   height: "60vh",
      //   y: 0,
      //   x: "20%",
      //   scrollTrigger: {
      //     trigger: ".two_column_image_timeline_top",
      //     start: "top 65%",
      //     end: "40% 55%",
      //     scrub: true,
      //   },
      // });
      // gsap.to(title_area, {
      //   autoAlpha: 1,
      //   visibility: "visible",
      //   y: 0,
      //   scrollTrigger: {
      //     trigger: ".two_column_image_timeline_top",
      //     start: "top 50%",
      //     end: "20% 50%",
      //     scrub: true,
      //   },
      // });
    }
  }

  // Video Modal
  if (doesClassExist("video_panel")) {
    var videoId = $("#video-container").data("video");

    // var videoId = 'VIDEO_ID';

    // Construct the YouTube embed URL with autoplay enabled
    var embedUrl =
      "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";

    // Create the iframe element and set its attributes
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", embedUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("title", "Popup Video");
    iframe.setAttribute("allowfullscreen", "");

    // Append the iframe to the background video container
    document.getElementById("video-container").appendChild(iframe);


    $(window).on("blur", function () {
      iframe.setAttribute("allow", "autoplay");
    });

    // // Resume playing the video when the window regains focus
    // $(window).on("focus", function () {
    //   player.play();
    // });

    var videoOpen = document.querySelector(".watch_video_open");
    var videoClose = document.querySelector(".watch_video_close");

    $(videoOpen).on("click", function () {
      $("body").addClass("video_active");
      $(".video_modal").addClass("active");
    });
    $(videoClose).on("click", function () {
      $(".video_modal").removeClass("active");
      $("body").removeClass("video_active");
      // player.pause();
    });
  }

  // Page Take Over Banner

  var outerWrapper = document.querySelector(".take_over_banner_gradient");

  var swiperDots = new Swiper(".page_take_over_slider_dots", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 8,
    watchSlidesProgress: true,
  });

  var swiper = new Swiper(".page_take_over_slider_images", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiperDots,
    },
  });

  swiper.on("slideChange", function () {
    // Get the current active slide
    var activeSlide = swiper.slides[swiper.activeIndex];

    // Get the desired background color from the data attribute
    var bgColor = activeSlide.getAttribute("data-bg-color");

    // Get the outer wrapper
    var outerWrapper = document.querySelector("#take_over_banner_gradient");

    // Update the background color of the outer wrapper
    // outerWrapper.style.backgroundColor = bgColor;
    outerWrapper.style.background = "linear-gradient(0deg, "+bgColor+" 50%, #201632 85%)";

  });

  // FAQ Accordion
  $(".faq_title").click(function () {
    if ($(this).parent(".faq_row").hasClass("active")) {
      $(this).parent(".faq_row").removeClass("active");
      return;
    }
    $(".faq_row").removeClass("active");

    $(this).parent(".faq_row").addClass("active");
  });

  // Incentive Panel

  const blocks = document.querySelectorAll(".incentive_block_clickable");
  const firstBlock = document.querySelector(".block1");
  const build_it_yourself_total = document.querySelector(".build_it_yourself_total");
  const cloud_softphone_total = document.querySelector(".cloud_softphone_total");

// Function to format numbers as currency
  const formatCurrency = (number) => {
    return '$' + number.toLocaleString('en-US');
  };

// Function to update totals based on blocks that have the 'active' class
  const updateTotals = () => {
    let buildItYourselfTotalAmount = 0;
    let cloudSoftphoneTotalAmount = 0;

    const firstBlockAmount = parseFloat(firstBlock.getAttribute('data-amount') || '0');
    const firstCloudAmount = parseFloat(firstBlock.getAttribute('data-cloud_amount') || '0');

    // Always include the first block in the total calculation
    buildItYourselfTotalAmount += firstBlockAmount;
    cloudSoftphoneTotalAmount += firstCloudAmount;

    blocks.forEach(block => {
      if (block.classList.contains("active")) {
        const builtItYourselfAmount = parseFloat(block.getAttribute('data-amount') || '0');
        const cloudSoftphoneAmount = parseFloat(block.getAttribute('data-cloud_amount') || '0');

        buildItYourselfTotalAmount += builtItYourselfAmount;
        cloudSoftphoneTotalAmount += cloudSoftphoneAmount;
      }
    });

    // Add 🔥 if the cloud_softphone_total is greater than block-1's value
    const fireSymbol =  "<span>🔥</span>";

    // Update the display inside each total area with formatted currency
    build_it_yourself_total.querySelector('.total_block').innerHTML = formatCurrency(buildItYourselfTotalAmount);
    cloud_softphone_total.querySelector('.total_block').innerHTML = formatCurrency(cloudSoftphoneTotalAmount) + fireSymbol;
  };

// Initialize totals
  if (doesClassExist("total_block")) {
    updateTotals();
  }

  blocks.forEach((block, index) => {
    block.addEventListener("click", () => {
      // Toggle the 'active' class on the clicked block
      block.classList.toggle("active");

      // Update totals based on the new set of active blocks
      updateTotals();
    });
  });


  // demo_on_demand_banner

  var swiperDots = new Swiper(".row_3_slider_slider", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.2,
    breakpoints: {
      480: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
  // function openVideo(id) {
  //   console.log("asd");
  //   // const vid = document.querySelectorAll("#video_modal_" + id);

  //   // console.log(id);
  // }

  // csf_video_open;
  const csf_videos = document.querySelectorAll(".csf_video_open");
  csf_videos.forEach((block, index) => {
    // console.log(block.dataset.videoid);
    block.addEventListener("click", () => {
      let vid = document.querySelectorAll(block.dataset.videoid);
      vid[0].classList.add("active");
      // console.log(vid[0]);
    });
  });

  // const csf_video_close = document.querySelectorAll(".csf_watch_video_close");
  // csf_video_close.forEach((block, index) => {
  //   // console.log(block.dataset.videoid);
  //   block.addEventListener("click", () => {
  //     var iframeSrc = $("iframe").attr("src");
  //     $("iframe").attr("src", "");
  //     $("iframe").attr("src", iframeSrc);
  //
  //     $(".csf_video_modal").removeClass("active");
  //     // console.log(vid[0]);
  //   });
  // });

  $('.csf_watch_video_close').on('click', function(){
    var wrapper = $(this).closest('.csf_video_modal');
    var iframe = wrapper.find('iframe');
    var video = wrapper.find('video');
    var iframeSrc = iframe.attr('src');
    iframe.attr('src', '');
    iframe.attr('src', iframeSrc);
    if(video.length > 0){
      var videoSrc = video.attr('src');
      video.attr('src', '');
      video.attr('src', videoSrc);
    }
    wrapper.removeClass('active');
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      $(".csf_video_modal").removeClass("active");
    }
  });

  // Blog posts
  if (!mediaQueryList.matches) {
    const post_blocks = document.querySelectorAll(".post_block");

    for (let i = 0; i < post_blocks.length; i++) {
      if ((i + 1) % 4 === 1) {
        post_blocks[i].classList.add("large_card");
      } else {
        post_blocks[i].classList.add("small_card");
      }
    }
  }

  if ($('.acro_form_6_wrapper').length === 0) {
    // If it doesn't exist, initialize selectric
    $("select").selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
  }

  // Make recomended posts small
  if (!mediaQueryList.matches) {
    const recomended = document.querySelectorAll(
      ".post_recomended .post_block"
    );
    for (let i = 0; i < recomended.length; i++) {
      recomended[i].classList.add("small_card");
    }
  }

  //
});
