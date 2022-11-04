(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="146",sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ff=0,il=1,hf=2,Vc=1,df=2,rs=3,$i=0,Pn=1,si=2,wi=0,wr=1,rl=2,sl=3,al=4,pf=5,br=100,mf=101,gf=102,ol=103,ll=104,_f=200,xf=201,vf=202,yf=203,Wc=204,jc=205,bf=206,Mf=207,Sf=208,wf=209,Tf=210,Ef=0,Af=1,Cf=2,co=3,Lf=4,Rf=5,Df=6,Pf=7,wo=0,If=1,Nf=2,oi=0,Of=1,Ff=2,Uf=3,kf=4,zf=5,qc=300,Ar=301,Cr=302,uo=303,fo=304,na=306,Lr=1e3,Ln=1001,ea=1002,$t=1003,ho=1004,po=1005,dn=1006,Xc=1007,Or=1008,Zi=1009,Bf=1010,Hf=1011,Yc=1012,Gf=1013,Gi=1014,Si=1015,ls=1016,Vf=1017,Wf=1018,Tr=1020,jf=1021,qf=1022,Rn=1023,Xf=1024,Yf=1025,qi=1026,Rr=1027,Kf=1028,$f=1029,Zf=1030,Jf=1031,Qf=1033,Aa=33776,Ca=33777,La=33778,Ra=33779,cl=35840,ul=35841,fl=35842,hl=35843,eh=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,yl=37813,bl=37814,Ml=37815,Sl=37816,wl=37817,Tl=37818,El=37819,Al=37820,Cl=37821,Ll=36492,cs=2300,Dr=2301,Da=2302,Rl=2400,Dl=2401,Pl=2402,th=2500,nh=1,Kc=2,Ji=3e3,bt=3001,ih=3200,rh=3201,ia=0,sh=1,ii="srgb",Vi="srgb-linear",Pa=7680,ah=519,mo=35044,Il="300 es",go=1035;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const as=Math.PI/180,us=180/Math.PI;function Hn(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[l&255]+Jt[l>>8&255]+Jt[l>>16&255]+Jt[l>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Qt(l,e,t){return Math.max(e,Math.min(t,l))}function To(l,e){return(l%e+e)%e}function oh(l,e,t,n,i){return n+(l-e)*(i-n)/(t-e)}function lh(l,e,t){return l!==e?(t-l)/(e-l):0}function os(l,e,t){return(1-t)*l+t*e}function ch(l,e,t,n){return os(l,e,1-Math.exp(-t*n))}function uh(l,e=1){return e-Math.abs(To(l,e*2)-e)}function fh(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function hh(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function dh(l,e){return l+Math.floor(Math.random()*(e-l+1))}function ph(l,e){return l+Math.random()*(e-l)}function mh(l){return l*(.5-Math.random())}function gh(l){l!==void 0&&(Nl=l);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _h(l){return l*as}function xh(l){return l*us}function _o(l){return(l&l-1)===0&&l!==0}function $c(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function ta(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function vh(l,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),u=o(t/2),f=r((e+n)/2),p=o((e+n)/2),m=r((e-n)/2),_=o((e-n)/2),y=r((n-e)/2),S=o((n-e)/2);switch(i){case"XYX":l.set(a*p,u*m,u*_,a*f);break;case"YZY":l.set(u*_,a*p,u*m,a*f);break;case"ZXZ":l.set(u*m,u*_,a*p,a*f);break;case"XZX":l.set(a*p,u*S,u*y,a*f);break;case"YXY":l.set(u*y,a*p,u*S,a*f);break;case"ZYZ":l.set(u*S,u*y,a*p,a*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function At(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}var yh=Object.freeze({__proto__:null,DEG2RAD:as,RAD2DEG:us,generateUUID:Hn,clamp:Qt,euclideanModulo:To,mapLinear:oh,inverseLerp:lh,lerp:os,damp:ch,pingpong:uh,smoothstep:fh,smootherstep:hh,randInt:dh,randFloat:ph,randFloatSpread:mh,seededRandom:gh,degToRad:_h,radToDeg:xh,isPowerOfTwo:_o,ceilPowerOfTwo:$c,floorPowerOfTwo:ta,setQuaternionFromProperEuler:vh,normalize:At,denormalize:ai});class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(){Dn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,u,f){const p=this.elements;return p[0]=e,p[1]=i,p[2]=a,p[3]=t,p[4]=r,p[5]=u,p[6]=n,p[7]=o,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],u=n[6],f=n[1],p=n[4],m=n[7],_=n[2],y=n[5],S=n[8],v=i[0],x=i[3],w=i[6],I=i[1],P=i[4],R=i[7],L=i[2],h=i[5],X=i[8];return r[0]=o*v+a*I+u*L,r[3]=o*x+a*P+u*h,r[6]=o*w+a*R+u*X,r[1]=f*v+p*I+m*L,r[4]=f*x+p*P+m*h,r[7]=f*w+p*R+m*X,r[2]=_*v+y*I+S*L,r[5]=_*x+y*P+S*h,r[8]=_*w+y*R+S*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],f=e[7],p=e[8];return t*o*p-t*a*f-n*r*p+n*a*u+i*r*f-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],f=e[7],p=e[8],m=p*o-a*f,_=a*u-p*r,y=f*r-o*u,S=t*m+n*_+i*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/S;return e[0]=m*v,e[1]=(i*f-p*n)*v,e[2]=(a*n-i*o)*v,e[3]=_*v,e[4]=(p*t-i*u)*v,e[5]=(i*r-a*t)*v,e[6]=y*v,e[7]=(n*u-f*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const u=Math.cos(r),f=Math.sin(r);return this.set(n*u,n*f,-n*(u*o+f*a)+o+e,-i*f,i*u,-i*(-f*o+u*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],u=i[1],f=i[4],p=i[7];return i[0]=t*r+n*u,i[3]=t*o+n*f,i[6]=t*a+n*p,i[1]=-n*r+t*u,i[4]=-n*o+t*f,i[7]=-n*a+t*p,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Zc(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function fs(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Xi(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Js(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Ia={[ii]:{[Vi]:Xi},[Vi]:{[ii]:Js}},Un={legacyMode:!0,get workingColorSpace(){return Vi},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(Ia[e]&&Ia[e][t]!==void 0){const n=Ia[e][t];return l.r=n(l.r),l.g=n(l.g),l.b=n(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={r:0,g:0,b:0},kn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Na(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function Ls(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Un.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vi){return this.r=e,this.g=t,this.b=n,Un.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vi){if(e=To(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return Un.toWorkingColorSpace(this,i),this}setStyle(e,t=ii){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Un.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Un.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(r[1])/360,f=parseFloat(r[2])/100,p=parseFloat(r[3])/100;return n(r[4]),this.setHSL(u,f,p,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Un.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Un.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ii){const n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Un.fromWorkingColorSpace(Ls(this,jt),e),Qt(jt.r*255,0,255)<<16^Qt(jt.g*255,0,255)<<8^Qt(jt.b*255,0,255)<<0}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vi){Un.fromWorkingColorSpace(Ls(this,jt),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let u,f;const p=(a+o)/2;if(a===o)u=0,f=0;else{const m=o-a;switch(f=p<=.5?m/(o+a):m/(2-o-a),o){case n:u=(i-r)/m+(i<r?6:0);break;case i:u=(r-n)/m+2;break;case r:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=p,e}getRGB(e,t=Vi){return Un.fromWorkingColorSpace(Ls(this,jt),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ii){return Un.fromWorkingColorSpace(Ls(this,jt),e),e!==ii?`color(${e} ${jt.r} ${jt.g} ${jt.b})`:`rgb(${jt.r*255|0},${jt.g*255|0},${jt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(kn),kn.h+=e,kn.s+=t,kn.l+=n,this.setHSL(kn.h,kn.s,kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Cs);const n=os(kn.h,Cs.h,t),i=os(kn.s,Cs.s,t),r=os(kn.l,Cs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Je.NAMES=Jc;let or;class Qc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=fs("canvas")),or.width=e.width,or.height=e.height;const n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class eu{constructor(e=null){this.isSource=!0,this.uuid=Hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oa(i[o].image)):r.push(Oa(i[o]))}else r=Oa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Oa(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Qc.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;class on extends nr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Ln,i=Ln,r=dn,o=Or,a=Rn,u=Zi,f=1,p=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Hn(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=u,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=qc;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,f=u[0],p=u[4],m=u[8],_=u[1],y=u[5],S=u[9],v=u[2],x=u[6],w=u[10];if(Math.abs(p-_)<.01&&Math.abs(m-v)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+v)<.1&&Math.abs(S+x)<.1&&Math.abs(f+y+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,R=(y+1)/2,L=(w+1)/2,h=(p+_)/4,X=(m+v)/4,A=(S+x)/4;return P>R&&P>L?P<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(P),i=h/n,r=X/n):R>L?R<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(R),n=h/i,r=A/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=X/r,i=A/r),this.set(n,i,r,t),this}let I=Math.sqrt((x-S)*(x-S)+(m-v)*(m-v)+(_-p)*(_-p));return Math.abs(I)<.001&&(I=1),this.x=(x-S)/I,this.y=(m-v)/I,this.z=(_-p)/I,this.w=Math.acos((f+y+w-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends nr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tu extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mh extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let u=n[i+0],f=n[i+1],p=n[i+2],m=n[i+3];const _=r[o+0],y=r[o+1],S=r[o+2],v=r[o+3];if(a===0){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(a===1){e[t+0]=_,e[t+1]=y,e[t+2]=S,e[t+3]=v;return}if(m!==v||u!==_||f!==y||p!==S){let x=1-a;const w=u*_+f*y+p*S+m*v,I=w>=0?1:-1,P=1-w*w;if(P>Number.EPSILON){const L=Math.sqrt(P),h=Math.atan2(L,w*I);x=Math.sin(x*h)/L,a=Math.sin(a*h)/L}const R=a*I;if(u=u*x+_*R,f=f*x+y*R,p=p*x+S*R,m=m*x+v*R,x===1-a){const L=1/Math.sqrt(u*u+f*f+p*p+m*m);u*=L,f*=L,p*=L,m*=L}}e[t]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],u=n[i+1],f=n[i+2],p=n[i+3],m=r[o],_=r[o+1],y=r[o+2],S=r[o+3];return e[t]=a*S+p*m+u*y-f*_,e[t+1]=u*S+p*_+f*m-a*y,e[t+2]=f*S+p*y+a*_-u*m,e[t+3]=p*S-a*m-u*_-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,u=Math.sin,f=a(n/2),p=a(i/2),m=a(r/2),_=u(n/2),y=u(i/2),S=u(r/2);switch(o){case"XYZ":this._x=_*p*m+f*y*S,this._y=f*y*m-_*p*S,this._z=f*p*S+_*y*m,this._w=f*p*m-_*y*S;break;case"YXZ":this._x=_*p*m+f*y*S,this._y=f*y*m-_*p*S,this._z=f*p*S-_*y*m,this._w=f*p*m+_*y*S;break;case"ZXY":this._x=_*p*m-f*y*S,this._y=f*y*m+_*p*S,this._z=f*p*S+_*y*m,this._w=f*p*m-_*y*S;break;case"ZYX":this._x=_*p*m-f*y*S,this._y=f*y*m+_*p*S,this._z=f*p*S-_*y*m,this._w=f*p*m+_*y*S;break;case"YZX":this._x=_*p*m+f*y*S,this._y=f*y*m+_*p*S,this._z=f*p*S-_*y*m,this._w=f*p*m-_*y*S;break;case"XZY":this._x=_*p*m-f*y*S,this._y=f*y*m-_*p*S,this._z=f*p*S+_*y*m,this._w=f*p*m+_*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],u=t[9],f=t[2],p=t[6],m=t[10],_=n+a+m;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-u)*y,this._y=(r-f)*y,this._z=(o-i)*y}else if(n>a&&n>m){const y=2*Math.sqrt(1+n-a-m);this._w=(p-u)/y,this._x=.25*y,this._y=(i+o)/y,this._z=(r+f)/y}else if(a>m){const y=2*Math.sqrt(1+a-n-m);this._w=(r-f)/y,this._x=(i+o)/y,this._y=.25*y,this._z=(u+p)/y}else{const y=2*Math.sqrt(1+m-n-a);this._w=(o-i)/y,this._x=(r+f)/y,this._y=(u+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,u=t._y,f=t._z,p=t._w;return this._x=n*p+o*a+i*f-r*u,this._y=i*p+o*u+r*a-n*f,this._z=r*p+o*f+n*u-i*a,this._w=o*p-n*a-i*u-r*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const u=1-a*a;if(u<=Number.EPSILON){const y=1-t;return this._w=y*o+t*this._w,this._x=y*n+t*this._x,this._y=y*i+t*this._y,this._z=y*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(u),p=Math.atan2(f,a),m=Math.sin((1-t)*p)/f,_=Math.sin(t*p)/f;return this._w=o*m+this._w*_,this._x=n*m+this._x*_,this._y=i*m+this._y*_,this._z=r*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,u=e.w,f=u*t+o*i-a*n,p=u*n+a*t-r*i,m=u*i+r*n-o*t,_=-r*t-o*n-a*i;return this.x=f*u+_*-r+p*-a-m*-o,this.y=p*u+_*-o+m*-r-f*-a,this.z=m*u+_*-a+f*-o-p*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,u=t.z;return this.x=i*u-r*a,this.y=r*o-n*u,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new H,Ol=new jn;class Fr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let u=0,f=e.length;u<f;u+=3){const p=e[u],m=e[u+1],_=e[u+2];p<t&&(t=p),m<n&&(n=m),_<i&&(i=_),p>r&&(r=p),m>o&&(o=m),_>a&&(a=_)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let u=0,f=e.count;u<f;u++){const p=e.getX(u),m=e.getY(u),_=e.getZ(u);p<t&&(t=p),m<n&&(n=m),_<i&&(i=_),p>r&&(r=p),m>o&&(o=m),_>a&&(a=_)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Oi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Oi)}else n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox),Ua.applyMatrix4(e.matrixWorld),this.union(Ua);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Rs.subVectors(this.max,$r),lr.subVectors(e.a,$r),cr.subVectors(e.b,$r),ur.subVectors(e.c,$r),pi.subVectors(cr,lr),mi.subVectors(ur,cr),Fi.subVectors(lr,ur);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Fi.z,Fi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Fi.z,0,-Fi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Fi.y,Fi.x,0];return!ka(t,lr,cr,ur,Rs)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,lr,cr,ur,Rs))?!1:(Ds.crossVectors(pi,mi),t=[Ds.x,Ds.y,Ds.z],ka(t,lr,cr,ur,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Oi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new H,new H,new H,new H,new H,new H,new H,new H],Oi=new H,Ua=new Fr,lr=new H,cr=new H,ur=new H,pi=new H,mi=new H,Fi=new H,$r=new H,Rs=new H,Ds=new H,Ui=new H;function ka(l,e,t,n,i){for(let r=0,o=l.length-3;r<=o;r+=3){Ui.fromArray(l,r);const a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),u=e.dot(Ui),f=t.dot(Ui),p=n.dot(Ui);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>a)return!1}return!0}const Sh=new Fr,Zr=new H,za=new H;class Ur{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(za)),this.expandByPoint(Zr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new H,Ba=new H,Ps=new H,gi=new H,Ha=new H,Is=new H,Ga=new H;class Eo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.direction).multiplyScalar(t).add(this.origin),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ba.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ps),a=gi.dot(this.direction),u=-gi.dot(Ps),f=gi.lengthSq(),p=Math.abs(1-o*o);let m,_,y,S;if(p>0)if(m=o*u-a,_=o*a-u,S=r*p,m>=0)if(_>=-S)if(_<=S){const v=1/p;m*=v,_*=v,y=m*(m+o*_+2*a)+_*(o*m+_+2*u)+f}else _=r,m=Math.max(0,-(o*_+a)),y=-m*m+_*(_+2*u)+f;else _=-r,m=Math.max(0,-(o*_+a)),y=-m*m+_*(_+2*u)+f;else _<=-S?(m=Math.max(0,-(-o*r+a)),_=m>0?-r:Math.min(Math.max(-r,-u),r),y=-m*m+_*(_+2*u)+f):_<=S?(m=0,_=Math.min(Math.max(-r,-u),r),y=_*(_+2*u)+f):(m=Math.max(0,-(o*r+a)),_=m>0?r:Math.min(Math.max(-r,-u),r),y=-m*m+_*(_+2*u)+f);else _=o>0?-r:r,m=Math.max(0,-(o*_+a)),y=-m*m+_*(_+2*u)+f;return n&&n.copy(this.direction).multiplyScalar(m).add(this.origin),i&&i.copy(Ps).multiplyScalar(_).add(Ba),y}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,u=n+o;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,u;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,i=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,i=(e.min.x-_.x)*f),p>=0?(r=(e.min.y-_.y)*p,o=(e.max.y-_.y)*p):(r=(e.max.y-_.y)*p,o=(e.min.y-_.y)*p),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),m>=0?(a=(e.min.z-_.z)*m,u=(e.max.z-_.z)*m):(a=(e.max.z-_.z)*m,u=(e.min.z-_.z)*m),n>u||a>i)||((a>n||n!==n)&&(n=a),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,r){Ha.subVectors(t,e),Is.subVectors(n,e),Ga.crossVectors(Ha,Is);let o=this.direction.dot(Ga),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const u=a*this.direction.dot(Is.crossVectors(gi,Is));if(u<0)return null;const f=a*this.direction.dot(Ha.cross(gi));if(f<0||u+f>o)return null;const p=-a*gi.dot(Ga);return p<0?null:this.at(p/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,u,f,p,m,_,y,S,v,x){const w=this.elements;return w[0]=e,w[4]=t,w[8]=n,w[12]=i,w[1]=r,w[5]=o,w[9]=a,w[13]=u,w[2]=f,w[6]=p,w[10]=m,w[14]=_,w[3]=y,w[7]=S,w[11]=v,w[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(i),f=Math.sin(i),p=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const _=o*p,y=o*m,S=a*p,v=a*m;t[0]=u*p,t[4]=-u*m,t[8]=f,t[1]=y+S*f,t[5]=_-v*f,t[9]=-a*u,t[2]=v-_*f,t[6]=S+y*f,t[10]=o*u}else if(e.order==="YXZ"){const _=u*p,y=u*m,S=f*p,v=f*m;t[0]=_+v*a,t[4]=S*a-y,t[8]=o*f,t[1]=o*m,t[5]=o*p,t[9]=-a,t[2]=y*a-S,t[6]=v+_*a,t[10]=o*u}else if(e.order==="ZXY"){const _=u*p,y=u*m,S=f*p,v=f*m;t[0]=_-v*a,t[4]=-o*m,t[8]=S+y*a,t[1]=y+S*a,t[5]=o*p,t[9]=v-_*a,t[2]=-o*f,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const _=o*p,y=o*m,S=a*p,v=a*m;t[0]=u*p,t[4]=S*f-y,t[8]=_*f+v,t[1]=u*m,t[5]=v*f+_,t[9]=y*f-S,t[2]=-f,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const _=o*u,y=o*f,S=a*u,v=a*f;t[0]=u*p,t[4]=v-_*m,t[8]=S*m+y,t[1]=m,t[5]=o*p,t[9]=-a*p,t[2]=-f*p,t[6]=y*m+S,t[10]=_-v*m}else if(e.order==="XZY"){const _=o*u,y=o*f,S=a*u,v=a*f;t[0]=u*p,t[4]=-m,t[8]=f*p,t[1]=_*m+v,t[5]=o*p,t[9]=y*m-S,t[2]=S*m-y,t[6]=a*p,t[10]=v*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,Th)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_i.crossVectors(n,vn),_i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_i.crossVectors(n,vn)),_i.normalize(),Ns.crossVectors(vn,_i),i[0]=_i.x,i[4]=Ns.x,i[8]=vn.x,i[1]=_i.y,i[5]=Ns.y,i[9]=vn.y,i[2]=_i.z,i[6]=Ns.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],u=n[8],f=n[12],p=n[1],m=n[5],_=n[9],y=n[13],S=n[2],v=n[6],x=n[10],w=n[14],I=n[3],P=n[7],R=n[11],L=n[15],h=i[0],X=i[4],A=i[8],z=i[12],J=i[1],pe=i[5],Se=i[9],Q=i[13],Y=i[2],oe=i[6],me=i[10],ve=i[14],ce=i[3],$=i[7],te=i[11],xe=i[15];return r[0]=o*h+a*J+u*Y+f*ce,r[4]=o*X+a*pe+u*oe+f*$,r[8]=o*A+a*Se+u*me+f*te,r[12]=o*z+a*Q+u*ve+f*xe,r[1]=p*h+m*J+_*Y+y*ce,r[5]=p*X+m*pe+_*oe+y*$,r[9]=p*A+m*Se+_*me+y*te,r[13]=p*z+m*Q+_*ve+y*xe,r[2]=S*h+v*J+x*Y+w*ce,r[6]=S*X+v*pe+x*oe+w*$,r[10]=S*A+v*Se+x*me+w*te,r[14]=S*z+v*Q+x*ve+w*xe,r[3]=I*h+P*J+R*Y+L*ce,r[7]=I*X+P*pe+R*oe+L*$,r[11]=I*A+P*Se+R*me+L*te,r[15]=I*z+P*Q+R*ve+L*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],u=e[9],f=e[13],p=e[2],m=e[6],_=e[10],y=e[14],S=e[3],v=e[7],x=e[11],w=e[15];return S*(+r*u*m-i*f*m-r*a*_+n*f*_+i*a*y-n*u*y)+v*(+t*u*y-t*f*_+r*o*_-i*o*y+i*f*p-r*u*p)+x*(+t*f*m-t*a*y-r*o*m+n*o*y+r*a*p-n*f*p)+w*(-i*a*p-t*u*m+t*a*_+i*o*m-n*o*_+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],f=e[7],p=e[8],m=e[9],_=e[10],y=e[11],S=e[12],v=e[13],x=e[14],w=e[15],I=m*x*f-v*_*f+v*u*y-a*x*y-m*u*w+a*_*w,P=S*_*f-p*x*f-S*u*y+o*x*y+p*u*w-o*_*w,R=p*v*f-S*m*f+S*a*y-o*v*y-p*a*w+o*m*w,L=S*m*u-p*v*u-S*a*_+o*v*_+p*a*x-o*m*x,h=t*I+n*P+i*R+r*L;if(h===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/h;return e[0]=I*X,e[1]=(v*_*r-m*x*r-v*i*y+n*x*y+m*i*w-n*_*w)*X,e[2]=(a*x*r-v*u*r+v*i*f-n*x*f-a*i*w+n*u*w)*X,e[3]=(m*u*r-a*_*r-m*i*f+n*_*f+a*i*y-n*u*y)*X,e[4]=P*X,e[5]=(p*x*r-S*_*r+S*i*y-t*x*y-p*i*w+t*_*w)*X,e[6]=(S*u*r-o*x*r-S*i*f+t*x*f+o*i*w-t*u*w)*X,e[7]=(o*_*r-p*u*r+p*i*f-t*_*f-o*i*y+t*u*y)*X,e[8]=R*X,e[9]=(S*m*r-p*v*r-S*n*y+t*v*y+p*n*w-t*m*w)*X,e[10]=(o*v*r-S*a*r+S*n*f-t*v*f-o*n*w+t*a*w)*X,e[11]=(p*a*r-o*m*r-p*n*f+t*m*f+o*n*y-t*a*y)*X,e[12]=L*X,e[13]=(p*v*i-S*m*i+S*n*_-t*v*_-p*n*x+t*m*x)*X,e[14]=(S*a*i-o*v*i-S*n*u+t*v*u+o*n*x-t*a*x)*X,e[15]=(o*m*i-p*a*i+p*n*u-t*m*u-o*n*_+t*a*_)*X,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,u=e.z,f=r*o,p=r*a;return this.set(f*o+n,f*a-i*u,f*u+i*a,0,f*a+i*u,p*a+n,p*u-i*o,0,f*u-i*a,p*u+i*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,u=t._w,f=r+r,p=o+o,m=a+a,_=r*f,y=r*p,S=r*m,v=o*p,x=o*m,w=a*m,I=u*f,P=u*p,R=u*m,L=n.x,h=n.y,X=n.z;return i[0]=(1-(v+w))*L,i[1]=(y+R)*L,i[2]=(S-P)*L,i[3]=0,i[4]=(y-R)*h,i[5]=(1-(_+w))*h,i[6]=(x+I)*h,i[7]=0,i[8]=(S+P)*X,i[9]=(x-I)*X,i[10]=(1-(_+v))*X,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=fr.set(i[0],i[1],i[2]).length();const o=fr.set(i[4],i[5],i[6]).length(),a=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);const f=1/r,p=1/o,m=1/a;return zn.elements[0]*=f,zn.elements[1]*=f,zn.elements[2]*=f,zn.elements[4]*=p,zn.elements[5]*=p,zn.elements[6]*=p,zn.elements[8]*=m,zn.elements[9]*=m,zn.elements[10]*=m,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,u=2*r/(t-e),f=2*r/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i),_=-(o+r)/(o-r),y=-2*o*r/(o-r);return a[0]=u,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=f,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,u=1/(t-e),f=1/(n-i),p=1/(o-r),m=(t+e)*u,_=(n+i)*f,y=(o+r)*p;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-m,a[1]=0,a[5]=2*f,a[9]=0,a[13]=-_,a[2]=0,a[6]=0,a[10]=-2*p,a[14]=-y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new H,zn=new ft,wh=new H(0,0,0),Th=new H(1,1,1),_i=new H,Ns=new H,vn=new H,Fl=new ft,Ul=new jn;class ms{constructor(e=0,t=0,n=0,i=ms.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],u=i[1],f=i[5],p=i[9],m=i[2],_=i[6],y=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ms.DefaultOrder="XYZ";ms.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eh=0;const kl=new H,hr=new jn,Qn=new ft,Os=new H,Jr=new H,Ah=new H,Ch=new jn,zl=new H(1,0,0),Bl=new H(0,1,0),Hl=new H(0,0,1),Lh={type:"added"},Gl={type:"removed"};class Nt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const e=new H,t=new ms,n=new jn,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Dn}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DefaultMatrixWorldAutoUpdate,this.layers=new nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Jr,Os,this.up):Qn.lookAt(Os,Jr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Qn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Gl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const m=u[f];r(e.shapes,m)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,f=this.material.length;u<f;u++)a.push(r(e.materials,this.material[u]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];i.animations.push(r(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),f=o(e.textures),p=o(e.images),m=o(e.shapes),_=o(e.skeletons),y=o(e.animations),S=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=i,n;function o(a){const u=[];for(const f in a){const p=a[f];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DefaultUp=new H(0,1,0);Nt.DefaultMatrixAutoUpdate=!0;Nt.DefaultMatrixWorldAutoUpdate=!0;const Bn=new H,ei=new H,Va=new H,ti=new H,dr=new H,pr=new H,Vl=new H,Wa=new H,ja=new H,qa=new H;class ri{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Bn.subVectors(i,t),ei.subVectors(n,t),Va.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(ei),u=Bn.dot(Va),f=ei.dot(ei),p=ei.dot(Va),m=o*f-a*a;if(m===0)return r.set(-2,-1,-1);const _=1/m,y=(f*u-a*p)*_,S=(o*p-a*u)*_;return r.set(1-y-S,S,y)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,i,r,o,a,u){return this.getBarycoord(e,t,n,i,ti),u.set(0,0),u.addScaledVector(r,ti.x),u.addScaledVector(o,ti.y),u.addScaledVector(a,ti.z),u}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),ei.subVectors(e,t),Bn.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Bn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ri.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;dr.subVectors(i,n),pr.subVectors(r,n),Wa.subVectors(e,n);const u=dr.dot(Wa),f=pr.dot(Wa);if(u<=0&&f<=0)return t.copy(n);ja.subVectors(e,i);const p=dr.dot(ja),m=pr.dot(ja);if(p>=0&&m<=p)return t.copy(i);const _=u*m-p*f;if(_<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(dr,o);qa.subVectors(e,r);const y=dr.dot(qa),S=pr.dot(qa);if(S>=0&&y<=S)return t.copy(r);const v=y*f-u*S;if(v<=0&&f>=0&&S<=0)return a=f/(f-S),t.copy(n).addScaledVector(pr,a);const x=p*S-y*m;if(x<=0&&m-p>=0&&y-S>=0)return Vl.subVectors(r,i),a=(m-p)/(m-p+(y-S)),t.copy(i).addScaledVector(Vl,a);const w=1/(x+v+_);return o=v*w,a=_*w,t.copy(n).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rh=0;class Gn extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=wr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wc,this.blendDst=jc,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const u=r[a];delete u.metadata,o.push(u)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wi extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new H,Fs=new tt;class pn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class iu extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ru extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class li extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dh=0;const En=new ft,Xa=new Nt,mr=new H,yn=new Fr,Qr=new Fr,Kt=new H;class qn extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?ru:iu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(yn.min,Qr.min),yn.expandByPoint(Kt),Kt.addVectors(yn.max,Qr.max),yn.expandByPoint(Kt)):(yn.expandByPoint(Qr.min),yn.expandByPoint(Qr.max))}yn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],u=this.morphTargetsRelative;for(let f=0,p=a.count;f<p;f++)Kt.fromBufferAttribute(a,f),u&&(mr.fromBufferAttribute(e,f),Kt.add(mr)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,f=[],p=[];for(let J=0;J<a;J++)f[J]=new H,p[J]=new H;const m=new H,_=new H,y=new H,S=new tt,v=new tt,x=new tt,w=new H,I=new H;function P(J,pe,Se){m.fromArray(i,J*3),_.fromArray(i,pe*3),y.fromArray(i,Se*3),S.fromArray(o,J*2),v.fromArray(o,pe*2),x.fromArray(o,Se*2),_.sub(m),y.sub(m),v.sub(S),x.sub(S);const Q=1/(v.x*x.y-x.x*v.y);!isFinite(Q)||(w.copy(_).multiplyScalar(x.y).addScaledVector(y,-v.y).multiplyScalar(Q),I.copy(y).multiplyScalar(v.x).addScaledVector(_,-x.x).multiplyScalar(Q),f[J].add(w),f[pe].add(w),f[Se].add(w),p[J].add(I),p[pe].add(I),p[Se].add(I))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let J=0,pe=R.length;J<pe;++J){const Se=R[J],Q=Se.start,Y=Se.count;for(let oe=Q,me=Q+Y;oe<me;oe+=3)P(n[oe+0],n[oe+1],n[oe+2])}const L=new H,h=new H,X=new H,A=new H;function z(J){X.fromArray(r,J*3),A.copy(X);const pe=f[J];L.copy(pe),L.sub(X.multiplyScalar(X.dot(pe))).normalize(),h.crossVectors(A,pe);const Q=h.dot(p[J])<0?-1:1;u[J*4]=L.x,u[J*4+1]=L.y,u[J*4+2]=L.z,u[J*4+3]=Q}for(let J=0,pe=R.length;J<pe;++J){const Se=R[J],Q=Se.start,Y=Se.count;for(let oe=Q,me=Q+Y;oe<me;oe+=3)z(n[oe+0]),z(n[oe+1]),z(n[oe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const i=new H,r=new H,o=new H,a=new H,u=new H,f=new H,p=new H,m=new H;if(e)for(let _=0,y=e.count;_<y;_+=3){const S=e.getX(_+0),v=e.getX(_+1),x=e.getX(_+2);i.fromBufferAttribute(t,S),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),p.subVectors(o,r),m.subVectors(i,r),p.cross(m),a.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,x),a.add(p),u.add(p),f.add(p),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,y=t.count;_<y;_+=3)i.fromBufferAttribute(t,_+0),r.fromBufferAttribute(t,_+1),o.fromBufferAttribute(t,_+2),p.subVectors(o,r),m.subVectors(i,r),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,u){const f=a.array,p=a.itemSize,m=a.normalized,_=new f.constructor(u.length*p);let y=0,S=0;for(let v=0,x=u.length;v<x;v++){a.isInterleavedBufferAttribute?y=u[v]*a.data.stride+a.offset:y=u[v]*p;for(let w=0;w<p;w++)_[S++]=f[y++]}return new pn(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,i=this.attributes;for(const a in i){const u=i[a],f=e(u,n);t.setAttribute(a,f)}const r=this.morphAttributes;for(const a in r){const u=[],f=r[a];for(let p=0,m=f.length;p<m;p++){const _=f[p],y=e(_,n);u.push(y)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const f=o[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let m=0,_=f.length;m<_;m++){const y=f[m];p.push(y.toJSON(e.data))}p.length>0&&(i[u]=p,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const f in i){const p=i[f];this.setAttribute(f,p.clone(t))}const r=e.morphAttributes;for(const f in r){const p=[],m=r[f];for(let _=0,y=m.length;_<y;_++)p.push(m[_].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,p=o.length;f<p;f++){const m=o[f];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new ft,gr=new Eo,Ya=new Ur,xi=new H,vi=new H,yi=new H,Ka=new H,$a=new H,Za=new H,Us=new H,ks=new H,zs=new H,Bs=new tt,Hs=new tt,Gs=new tt,Ja=new H,Vs=new H;class bn extends Nt{constructor(e=new qn,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),e.ray.intersectsSphere(Ya)===!1)||(Wl.copy(r).invert(),gr.copy(e.ray).applyMatrix4(Wl),n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,f=n.morphAttributes.position,p=n.morphTargetsRelative,m=n.attributes.uv,_=n.attributes.uv2,y=n.groups,S=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,x=y.length;v<x;v++){const w=y[v],I=i[w.materialIndex],P=Math.max(w.start,S.start),R=Math.min(a.count,Math.min(w.start+w.count,S.start+S.count));for(let L=P,h=R;L<h;L+=3){const X=a.getX(L),A=a.getX(L+1),z=a.getX(L+2);o=Ws(this,I,e,gr,u,f,p,m,_,X,A,z),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const v=Math.max(0,S.start),x=Math.min(a.count,S.start+S.count);for(let w=v,I=x;w<I;w+=3){const P=a.getX(w),R=a.getX(w+1),L=a.getX(w+2);o=Ws(this,i,e,gr,u,f,p,m,_,P,R,L),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let v=0,x=y.length;v<x;v++){const w=y[v],I=i[w.materialIndex],P=Math.max(w.start,S.start),R=Math.min(u.count,Math.min(w.start+w.count,S.start+S.count));for(let L=P,h=R;L<h;L+=3){const X=L,A=L+1,z=L+2;o=Ws(this,I,e,gr,u,f,p,m,_,X,A,z),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const v=Math.max(0,S.start),x=Math.min(u.count,S.start+S.count);for(let w=v,I=x;w<I;w+=3){const P=w,R=w+1,L=w+2;o=Ws(this,i,e,gr,u,f,p,m,_,P,R,L),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}}}function Ph(l,e,t,n,i,r,o,a){let u;if(e.side===Pn?u=n.intersectTriangle(o,r,i,!0,a):u=n.intersectTriangle(i,r,o,e.side!==si,a),u===null)return null;Vs.copy(a),Vs.applyMatrix4(l.matrixWorld);const f=t.ray.origin.distanceTo(Vs);return f<t.near||f>t.far?null:{distance:f,point:Vs.clone(),object:l}}function Ws(l,e,t,n,i,r,o,a,u,f,p,m){xi.fromBufferAttribute(i,f),vi.fromBufferAttribute(i,p),yi.fromBufferAttribute(i,m);const _=l.morphTargetInfluences;if(r&&_){Us.set(0,0,0),ks.set(0,0,0),zs.set(0,0,0);for(let S=0,v=r.length;S<v;S++){const x=_[S],w=r[S];x!==0&&(Ka.fromBufferAttribute(w,f),$a.fromBufferAttribute(w,p),Za.fromBufferAttribute(w,m),o?(Us.addScaledVector(Ka,x),ks.addScaledVector($a,x),zs.addScaledVector(Za,x)):(Us.addScaledVector(Ka.sub(xi),x),ks.addScaledVector($a.sub(vi),x),zs.addScaledVector(Za.sub(yi),x)))}xi.add(Us),vi.add(ks),yi.add(zs)}l.isSkinnedMesh&&(l.boneTransform(f,xi),l.boneTransform(p,vi),l.boneTransform(m,yi));const y=Ph(l,e,t,n,xi,vi,yi,Ja);if(y){a&&(Bs.fromBufferAttribute(a,f),Hs.fromBufferAttribute(a,p),Gs.fromBufferAttribute(a,m),y.uv=ri.getUV(Ja,xi,vi,yi,Bs,Hs,Gs,new tt)),u&&(Bs.fromBufferAttribute(u,f),Hs.fromBufferAttribute(u,p),Gs.fromBufferAttribute(u,m),y.uv2=ri.getUV(Ja,xi,vi,yi,Bs,Hs,Gs,new tt));const S={a:f,b:p,c:m,normal:new H,materialIndex:0};ri.getNormal(xi,vi,yi,S.normal),y.face=S}return y}class gs extends qn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const u=[],f=[],p=[],m=[];let _=0,y=0;S("z","y","x",-1,-1,n,t,e,o,r,0),S("z","y","x",1,-1,n,t,-e,o,r,1),S("x","z","y",1,1,e,n,t,i,o,2),S("x","z","y",1,-1,e,n,-t,i,o,3),S("x","y","z",1,-1,e,t,n,i,r,4),S("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new li(f,3)),this.setAttribute("normal",new li(p,3)),this.setAttribute("uv",new li(m,2));function S(v,x,w,I,P,R,L,h,X,A,z){const J=R/X,pe=L/A,Se=R/2,Q=L/2,Y=h/2,oe=X+1,me=A+1;let ve=0,ce=0;const $=new H;for(let te=0;te<me;te++){const xe=te*pe-Q;for(let be=0;be<oe;be++){const ge=be*J-Se;$[v]=ge*I,$[x]=xe*P,$[w]=Y,f.push($.x,$.y,$.z),$[v]=0,$[x]=0,$[w]=h>0?1:-1,p.push($.x,$.y,$.z),m.push(be/X),m.push(1-te/A),ve+=1}}for(let te=0;te<A;te++)for(let xe=0;xe<X;xe++){const be=_+xe+oe*te,ge=_+xe+oe*(te+1),Ie=_+(xe+1)+oe*(te+1),$e=_+(xe+1)+oe*te;u.push(be,ge,$e),u.push(ge,Ie,$e),ce+=6}a.addGroup(y,ce,z),y+=ce,_+=ve}}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(l){const e={};for(const t in l){e[t]={};for(const n in l[t]){const i=l[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(l){const e={};for(let t=0;t<l.length;t++){const n=Pr(l[t]);for(const i in n)e[i]=n[i]}return e}function Ih(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}const Nh={clone:Pr,merge:sn};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class su extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends su{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;r+=o.offsetX*i/u,t-=o.offsetY*n/f,i*=o.width/u,n*=o.height/f}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=90,xr=1;class Uh extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new an(_r,xr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new H(1,0,0)),this.add(i);const r=new an(_r,xr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new H(-1,0,0)),this.add(r);const o=new an(_r,xr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new H(0,1,0)),this.add(o);const a=new an(_r,xr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new H(0,-1,0)),this.add(a);const u=new an(_r,xr,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new H(0,0,1)),this.add(u);const f=new an(_r,xr,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new H(0,0,-1)),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,u,f]=this.children,p=e.getRenderTarget(),m=e.toneMapping,_=e.xr.enabled;e.toneMapping=oi,e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(p),e.toneMapping=m,e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class au extends on{constructor(e,t,n,i,r,o,a,u,f,p){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,i,r,o,a,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new au(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gs(5,5,5),r=new er({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:wi});r.uniforms.tEquirect.value=t;const o=new bn(i,r),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=dn),new Uh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Qa=new H,zh=new H,Bh=new Dn;class ki{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Ur,js=new H;class Ao{constructor(e=new ki,t=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],u=n[4],f=n[5],p=n[6],m=n[7],_=n[8],y=n[9],S=n[10],v=n[11],x=n[12],w=n[13],I=n[14],P=n[15];return t[0].setComponents(a-i,m-u,v-_,P-x).normalize(),t[1].setComponents(a+i,m+u,v+_,P+x).normalize(),t[2].setComponents(a+r,m+f,v+y,P+w).normalize(),t[3].setComponents(a-r,m-f,v-y,P-w).normalize(),t[4].setComponents(a-o,m-p,v-S,P-I).normalize(),t[5].setComponents(a+o,m+p,v+S,P+I).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(js.x=i.normal.x>0?e.max.x:e.min.x,js.y=i.normal.y>0?e.max.y:e.min.y,js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let l=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){l=r}}}function Hh(l,e){const t=e.isWebGL2,n=new WeakMap;function i(f,p){const m=f.array,_=f.usage,y=l.createBuffer();l.bindBuffer(p,y),l.bufferData(p,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=5126;else if(m instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)S=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=5123;else if(m instanceof Int16Array)S=5122;else if(m instanceof Uint32Array)S=5125;else if(m instanceof Int32Array)S=5124;else if(m instanceof Int8Array)S=5120;else if(m instanceof Uint8Array)S=5121;else if(m instanceof Uint8ClampedArray)S=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version}}function r(f,p,m){const _=p.array,y=p.updateRange;l.bindBuffer(m,f),y.count===-1?l.bufferSubData(m,0,_):(t?l.bufferSubData(m,y.offset*_.BYTES_PER_ELEMENT,_,y.offset,y.count):l.bufferSubData(m,y.offset*_.BYTES_PER_ELEMENT,_.subarray(y.offset,y.offset+y.count)),y.count=-1)}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p&&(l.deleteBuffer(p.buffer),n.delete(f))}function u(f,p){if(f.isGLBufferAttribute){const _=n.get(f);(!_||_.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=n.get(f);m===void 0?n.set(f,i(f,p)):m.version<f.version&&(r(m.buffer,f,p),m.version=f.version)}return{get:o,remove:a,update:u}}class ra extends qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),u=Math.floor(i),f=a+1,p=u+1,m=e/a,_=t/u,y=[],S=[],v=[],x=[];for(let w=0;w<p;w++){const I=w*_-o;for(let P=0;P<f;P++){const R=P*m-r;S.push(R,-I,0),v.push(0,0,1),x.push(P/a),x.push(1-w/u)}}for(let w=0;w<u;w++)for(let I=0;I<a;I++){const P=I+f*w,R=I+f*(w+1),L=I+1+f*(w+1),h=I+1+f*w;y.push(P,R,h),y.push(R,L,h)}this.setIndex(y),this.setAttribute("position",new li(S,3)),this.setAttribute("normal",new li(v,3)),this.setAttribute("uv",new li(x,2))}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh="vec3 transformed = vec3( position );",Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Zh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,np=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ip=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Np=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Op=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Fp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ot={alphamap_fragment:Gh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:jh,aomap_fragment:qh,aomap_pars_fragment:Xh,begin_vertex:Yh,beginnormal_vertex:Kh,bsdfs:$h,iridescence_fragment:Zh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:td,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:rd,color_pars_vertex:sd,color_vertex:ad,common:od,cube_uv_reflection_fragment:ld,defaultnormal_vertex:cd,displacementmap_pars_vertex:ud,displacementmap_vertex:fd,emissivemap_fragment:hd,emissivemap_pars_fragment:dd,encodings_fragment:pd,encodings_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:_d,envmap_pars_fragment:xd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Dd,envmap_vertex:yd,fog_vertex:bd,fog_pars_vertex:Md,fog_fragment:Sd,fog_pars_fragment:wd,gradientmap_pars_fragment:Td,lightmap_fragment:Ed,lightmap_pars_fragment:Ad,lights_lambert_fragment:Cd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Id,lights_phong_fragment:Nd,lights_phong_pars_fragment:Od,lights_physical_fragment:Fd,lights_physical_pars_fragment:Ud,lights_fragment_begin:kd,lights_fragment_maps:zd,lights_fragment_end:Bd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Wd,map_fragment:jd,map_pars_fragment:qd,map_particle_fragment:Xd,map_particle_pars_fragment:Yd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:$d,morphcolor_vertex:Zd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,output_fragment:fp,packing:hp,premultiplied_alpha_fragment:dp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:yp,shadowmap_vertex:bp,shadowmask_pars_fragment:Mp,skinbase_vertex:Sp,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:Ep,specularmap_fragment:Ap,specularmap_pars_fragment:Cp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Rp,transmission_fragment:Dp,transmission_pars_fragment:Pp,uv_pars_fragment:Ip,uv_pars_vertex:Np,uv_vertex:Op,uv2_pars_fragment:Fp,uv2_pars_vertex:Up,uv2_vertex:kp,worldpos_vertex:zp,background_vert:Bp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Vp,cube_vert:Wp,cube_frag:jp,depth_vert:qp,depth_frag:Xp,distanceRGBA_vert:Yp,distanceRGBA_frag:Kp,equirect_vert:$p,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:em,meshbasic_frag:tm,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:rm,meshmatcap_frag:sm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:um,meshphysical_frag:fm,meshtoon_vert:hm,meshtoon_frag:dm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:vm},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dn},uv2Transform:{value:new Dn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dn}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dn}}},Wn={basic:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:sn([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:sn([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:sn([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Dn},t2D:{value:null}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:sn([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:sn([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Wn.physical={uniforms:sn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};function ym(l,e,t,n,i,r,o){const a=new Je(0);let u=r===!0?0:1,f,p,m=null,_=0,y=null;function S(x,w){let I=!1,P=w.isScene===!0?w.background:null;P&&P.isTexture&&(P=(w.backgroundBlurriness>0?t:e).get(P));const R=l.xr,L=R.getSession&&R.getSession();L&&L.environmentBlendMode==="additive"&&(P=null),P===null?v(a,u):P&&P.isColor&&(v(P,1),I=!0),(l.autoClear||I)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),P&&(P.isCubeTexture||P.mapping===na)?(p===void 0&&(p=new bn(new gs(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Pr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(h,X,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,(m!==P||_!==P.version||y!==l.toneMapping)&&(p.material.needsUpdate=!0,m=P,_=P.version,y=l.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new bn(new ra(2,2),new er({name:"BackgroundMaterial",uniforms:Pr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=P,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||_!==P.version||y!==l.toneMapping)&&(f.material.needsUpdate=!0,m=P,_=P.version,y=l.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function v(x,w){n.buffers.color.setClear(x.r,x.g,x.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),u=w,v(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(x){u=x,v(a,u)},render:S}}function bm(l,e,t,n){const i=l.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},u=x(null);let f=u,p=!1;function m(Y,oe,me,ve,ce){let $=!1;if(o){const te=v(ve,me,oe);f!==te&&(f=te,y(f.object)),$=w(Y,ve,me,ce),$&&I(Y,ve,me,ce)}else{const te=oe.wireframe===!0;(f.geometry!==ve.id||f.program!==me.id||f.wireframe!==te)&&(f.geometry=ve.id,f.program=me.id,f.wireframe=te,$=!0)}ce!==null&&t.update(ce,34963),($||p)&&(p=!1,A(Y,oe,me,ve),ce!==null&&l.bindBuffer(34963,t.get(ce).buffer))}function _(){return n.isWebGL2?l.createVertexArray():r.createVertexArrayOES()}function y(Y){return n.isWebGL2?l.bindVertexArray(Y):r.bindVertexArrayOES(Y)}function S(Y){return n.isWebGL2?l.deleteVertexArray(Y):r.deleteVertexArrayOES(Y)}function v(Y,oe,me){const ve=me.wireframe===!0;let ce=a[Y.id];ce===void 0&&(ce={},a[Y.id]=ce);let $=ce[oe.id];$===void 0&&($={},ce[oe.id]=$);let te=$[ve];return te===void 0&&(te=x(_()),$[ve]=te),te}function x(Y){const oe=[],me=[],ve=[];for(let ce=0;ce<i;ce++)oe[ce]=0,me[ce]=0,ve[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:me,attributeDivisors:ve,object:Y,attributes:{},index:null}}function w(Y,oe,me,ve){const ce=f.attributes,$=oe.attributes;let te=0;const xe=me.getAttributes();for(const be in xe)if(xe[be].location>=0){const Ie=ce[be];let $e=$[be];if($e===void 0&&(be==="instanceMatrix"&&Y.instanceMatrix&&($e=Y.instanceMatrix),be==="instanceColor"&&Y.instanceColor&&($e=Y.instanceColor)),Ie===void 0||Ie.attribute!==$e||$e&&Ie.data!==$e.data)return!0;te++}return f.attributesNum!==te||f.index!==ve}function I(Y,oe,me,ve){const ce={},$=oe.attributes;let te=0;const xe=me.getAttributes();for(const be in xe)if(xe[be].location>=0){let Ie=$[be];Ie===void 0&&(be==="instanceMatrix"&&Y.instanceMatrix&&(Ie=Y.instanceMatrix),be==="instanceColor"&&Y.instanceColor&&(Ie=Y.instanceColor));const $e={};$e.attribute=Ie,Ie&&Ie.data&&($e.data=Ie.data),ce[be]=$e,te++}f.attributes=ce,f.attributesNum=te,f.index=ve}function P(){const Y=f.newAttributes;for(let oe=0,me=Y.length;oe<me;oe++)Y[oe]=0}function R(Y){L(Y,0)}function L(Y,oe){const me=f.newAttributes,ve=f.enabledAttributes,ce=f.attributeDivisors;me[Y]=1,ve[Y]===0&&(l.enableVertexAttribArray(Y),ve[Y]=1),ce[Y]!==oe&&((n.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,oe),ce[Y]=oe)}function h(){const Y=f.newAttributes,oe=f.enabledAttributes;for(let me=0,ve=oe.length;me<ve;me++)oe[me]!==Y[me]&&(l.disableVertexAttribArray(me),oe[me]=0)}function X(Y,oe,me,ve,ce,$){n.isWebGL2===!0&&(me===5124||me===5125)?l.vertexAttribIPointer(Y,oe,me,ce,$):l.vertexAttribPointer(Y,oe,me,ve,ce,$)}function A(Y,oe,me,ve){if(n.isWebGL2===!1&&(Y.isInstancedMesh||ve.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const ce=ve.attributes,$=me.getAttributes(),te=oe.defaultAttributeValues;for(const xe in $){const be=$[xe];if(be.location>=0){let ge=ce[xe];if(ge===void 0&&(xe==="instanceMatrix"&&Y.instanceMatrix&&(ge=Y.instanceMatrix),xe==="instanceColor"&&Y.instanceColor&&(ge=Y.instanceColor)),ge!==void 0){const Ie=ge.normalized,$e=ge.itemSize,fe=t.get(ge);if(fe===void 0)continue;const ht=fe.buffer,je=fe.type,Ge=fe.bytesPerElement;if(ge.isInterleavedBufferAttribute){const Ne=ge.data,xt=Ne.stride,st=ge.offset;if(Ne.isInstancedInterleavedBuffer){for(let Fe=0;Fe<be.locationSize;Fe++)L(be.location+Fe,Ne.meshPerAttribute);Y.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Fe=0;Fe<be.locationSize;Fe++)R(be.location+Fe);l.bindBuffer(34962,ht);for(let Fe=0;Fe<be.locationSize;Fe++)X(be.location+Fe,$e/be.locationSize,je,Ie,xt*Ge,(st+$e/be.locationSize*Fe)*Ge)}else{if(ge.isInstancedBufferAttribute){for(let Ne=0;Ne<be.locationSize;Ne++)L(be.location+Ne,ge.meshPerAttribute);Y.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ne=0;Ne<be.locationSize;Ne++)R(be.location+Ne);l.bindBuffer(34962,ht);for(let Ne=0;Ne<be.locationSize;Ne++)X(be.location+Ne,$e/be.locationSize,je,Ie,$e*Ge,$e/be.locationSize*Ne*Ge)}}else if(te!==void 0){const Ie=te[xe];if(Ie!==void 0)switch(Ie.length){case 2:l.vertexAttrib2fv(be.location,Ie);break;case 3:l.vertexAttrib3fv(be.location,Ie);break;case 4:l.vertexAttrib4fv(be.location,Ie);break;default:l.vertexAttrib1fv(be.location,Ie)}}}}h()}function z(){Se();for(const Y in a){const oe=a[Y];for(const me in oe){const ve=oe[me];for(const ce in ve)S(ve[ce].object),delete ve[ce];delete oe[me]}delete a[Y]}}function J(Y){if(a[Y.id]===void 0)return;const oe=a[Y.id];for(const me in oe){const ve=oe[me];for(const ce in ve)S(ve[ce].object),delete ve[ce];delete oe[me]}delete a[Y.id]}function pe(Y){for(const oe in a){const me=a[oe];if(me[Y.id]===void 0)continue;const ve=me[Y.id];for(const ce in ve)S(ve[ce].object),delete ve[ce];delete me[Y.id]}}function Se(){Q(),p=!0,f!==u&&(f=u,y(f.object))}function Q(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:m,reset:Se,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:J,releaseStatesOfProgram:pe,initAttributes:P,enableAttribute:R,disableUnusedAttributes:h}}function Mm(l,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}function a(f,p){l.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,m){if(m===0)return;let _,y;if(i)_=l,y="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[y](r,f,p,m),t.update(p,r,m)}this.setMode=o,this.render=a,this.renderInstances=u}function Sm(l,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");n=l.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(X){if(X==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";X="mediump"}return X==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=r(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const f=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=l.getParameter(34930),_=l.getParameter(35660),y=l.getParameter(3379),S=l.getParameter(34076),v=l.getParameter(34921),x=l.getParameter(36347),w=l.getParameter(36348),I=l.getParameter(36349),P=_>0,R=o||e.has("OES_texture_float"),L=P&&R,h=o?l.getParameter(36183):0;return{isWebGL2:o,drawBuffers:f,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:I,vertexTextures:P,floatFragmentTextures:R,floatVertexTextures:L,maxSamples:h}}function wm(l){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ki,a=new Dn,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_,y){const S=m.length!==0||_||n!==0||i;return i=_,t=p(m,y,0),n=m.length,S},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1,f()},this.setState=function(m,_,y){const S=m.clippingPlanes,v=m.clipIntersection,x=m.clipShadows,w=l.get(m);if(!i||S===null||S.length===0||r&&!x)r?p(null):f();else{const I=r?0:n,P=I*4;let R=w.clippingState||null;u.value=R,R=p(S,_,P,y);for(let L=0;L!==P;++L)R[L]=t[L];w.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=I}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,y,S){const v=m!==null?m.length:0;let x=null;if(v!==0){if(x=u.value,S!==!0||x===null){const w=y+v*4,I=_.matrixWorldInverse;a.getNormalMatrix(I),(x===null||x.length<w)&&(x=new Float32Array(w));for(let P=0,R=y;P!==v;++P,R+=4)o.copy(m[P]).applyMatrix4(I,a),o.normal.toArray(x,R),x[R+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function Tm(l){let e=new WeakMap;function t(o,a){return a===uo?o.mapping=Ar:a===fo&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===uo||a===fo)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const f=new kh(u.height/2);return f.fromEquirectangularTexture(l,o),e.set(o,f),o.addEventListener("dispose",i),t(f.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Co extends su{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,o=r+f*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,jl=[.125,.215,.35,.446,.526,.582],Hi=20,eo=new Co,ql=new Je;let to=null;const zi=(1+Math.sqrt(5))/2,yr=1/zi,Xl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,zi,yr),new H(0,zi,-yr),new H(yr,0,zi),new H(-yr,0,zi),new H(zi,yr,0),new H(-zi,yr,0)];class Yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){to=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(to),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ls,format:Rn,encoding:Ji,depthBuffer:!1},i=Kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=Am(r,e,t)}return i}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,i){const a=new an(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(ql),p.toneMapping=oi,p.autoClear=!1;const y=new Wi({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),S=new bn(new gs,y);let v=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,v=!0):(y.color.copy(ql),v=!0);for(let w=0;w<6;w++){const I=w%3;I===0?(a.up.set(0,u[w],0),a.lookAt(f[w],0,0)):I===1?(a.up.set(0,0,u[w]),a.lookAt(0,f[w],0)):(a.up.set(0,u[w],0),a.lookAt(0,0,f[w]));const P=this._cubeSize;qs(i,I*P,w>2?P:0,P,P),p.setRenderTarget(i),v&&p.render(S,a),p.render(e,a)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ar||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const u=this._cubeSize;qs(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Xl[(i-1)%Xl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const u=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new bn(this._lodPlanes[i],f),_=f.uniforms,y=this._sizeLods[n]-1,S=isFinite(r)?Math.PI/(2*y):2*Math.PI/(2*Hi-1),v=r/S,x=isFinite(r)?1+Math.floor(p*v):Hi;x>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Hi}`);const w=[];let I=0;for(let X=0;X<Hi;++X){const A=X/v,z=Math.exp(-A*A/2);w.push(z),X===0?I+=z:X<x&&(I+=2*z)}for(let X=0;X<w.length;X++)w[X]=w[X]/I;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=w,_.latitudinal.value=o==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:P}=this;_.dTheta.value=S,_.mipInt.value=P-n;const R=this._sizeLods[i],L=3*R*(i>P-Sr?i-P+Sr:0),h=4*(this._cubeSize-R);qs(t,L,h,3*R,2*R),u.setRenderTarget(t),u.render(m,eo)}}function Em(l){const e=[],t=[],n=[];let i=l;const r=l-Sr+1+jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let u=1/a;o>l-Sr?u=jl[o-l+Sr-1]:o===0&&(u=0),n.push(u);const f=1/(a-2),p=-f,m=1+f,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,S=6,v=3,x=2,w=1,I=new Float32Array(v*S*y),P=new Float32Array(x*S*y),R=new Float32Array(w*S*y);for(let h=0;h<y;h++){const X=h%3*2/3-1,A=h>2?0:-1,z=[X,A,0,X+2/3,A,0,X+2/3,A+1,0,X,A,0,X+2/3,A+1,0,X,A+1,0];I.set(z,v*S*h),P.set(_,x*S*h);const J=[h,h,h,h,h,h];R.set(J,w*S*h)}const L=new qn;L.setAttribute("position",new pn(I,v)),L.setAttribute("uv",new pn(P,x)),L.setAttribute("faceIndex",new pn(R,w)),e.push(L),i>Sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kl(l,e,t){const n=new Qi(l,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(l,e,t,n,i){l.viewport.set(e,t,n,i),l.scissor.set(e,t,n,i)}function Am(l,e,t){const n=new Float32Array(Hi),i=new H(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function $l(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Zl(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cm(l){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,f=u===uo||u===fo,p=u===Ar||u===Cr;if(f||p)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let m=e.get(a);return t===null&&(t=new Yl(l)),m=f?t.fromEquirectangular(a,m):t.fromCubemap(a,m),e.set(a,m),m.texture}else{if(e.has(a))return e.get(a).texture;{const m=a.image;if(f&&m&&m.height>0||p&&m&&i(m)){t===null&&(t=new Yl(l));const _=f?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,_),a.addEventListener("dispose",r),_.texture}else return null}}}return a}function i(a){let u=0;const f=6;for(let p=0;p<f;p++)a[p]!==void 0&&u++;return u===f}function r(a){const u=a.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lm(l){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rm(l,e,t,n){const i={},r=new WeakMap;function o(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);_.removeEventListener("dispose",o),delete i[_.id];const y=r.get(_);y&&(e.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function a(m,_){return i[_.id]===!0||(_.addEventListener("dispose",o),i[_.id]=!0,t.memory.geometries++),_}function u(m){const _=m.attributes;for(const S in _)e.update(_[S],34962);const y=m.morphAttributes;for(const S in y){const v=y[S];for(let x=0,w=v.length;x<w;x++)e.update(v[x],34962)}}function f(m){const _=[],y=m.index,S=m.attributes.position;let v=0;if(y!==null){const I=y.array;v=y.version;for(let P=0,R=I.length;P<R;P+=3){const L=I[P+0],h=I[P+1],X=I[P+2];_.push(L,h,h,X,X,L)}}else{const I=S.array;v=S.version;for(let P=0,R=I.length/3-1;P<R;P+=3){const L=P+0,h=P+1,X=P+2;_.push(L,h,h,X,X,L)}}const x=new(Zc(_)?ru:iu)(_,1);x.version=v;const w=r.get(m);w&&e.remove(w),r.set(m,x)}function p(m){const _=r.get(m);if(_){const y=m.index;y!==null&&_.version<y.version&&f(m)}else f(m);return r.get(m)}return{get:a,update:u,getWireframeAttribute:p}}function Dm(l,e,t,n){const i=n.isWebGL2;let r;function o(_){r=_}let a,u;function f(_){a=_.type,u=_.bytesPerElement}function p(_,y){l.drawElements(r,y,a,_*u),t.update(y,r,1)}function m(_,y,S){if(S===0)return;let v,x;if(i)v=l,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](r,y,a,_*u,S),t.update(y,r,S)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m}function Pm(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Im(l,e){return l[0]-e[0]}function Nm(l,e){return Math.abs(e[1])-Math.abs(l[1])}function Om(l,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function u(f,p,m,_){const y=f.morphTargetInfluences;if(e.isWebGL2===!0){const v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let w=r.get(p);if(w===void 0||w.count!==x){let me=function(){Y.dispose(),r.delete(p),p.removeEventListener("dispose",me)};var S=me;w!==void 0&&w.texture.dispose();const R=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,h=p.morphAttributes.color!==void 0,X=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let J=0;R===!0&&(J=1),L===!0&&(J=2),h===!0&&(J=3);let pe=p.attributes.position.count*J,Se=1;pe>e.maxTextureSize&&(Se=Math.ceil(pe/e.maxTextureSize),pe=e.maxTextureSize);const Q=new Float32Array(pe*Se*4*x),Y=new tu(Q,pe,Se,x);Y.type=Si,Y.needsUpdate=!0;const oe=J*4;for(let ve=0;ve<x;ve++){const ce=X[ve],$=A[ve],te=z[ve],xe=pe*Se*4*ve;for(let be=0;be<ce.count;be++){const ge=be*oe;R===!0&&(o.fromBufferAttribute(ce,be),Q[xe+ge+0]=o.x,Q[xe+ge+1]=o.y,Q[xe+ge+2]=o.z,Q[xe+ge+3]=0),L===!0&&(o.fromBufferAttribute($,be),Q[xe+ge+4]=o.x,Q[xe+ge+5]=o.y,Q[xe+ge+6]=o.z,Q[xe+ge+7]=0),h===!0&&(o.fromBufferAttribute(te,be),Q[xe+ge+8]=o.x,Q[xe+ge+9]=o.y,Q[xe+ge+10]=o.z,Q[xe+ge+11]=te.itemSize===4?o.w:1)}}w={count:x,texture:Y,size:new tt(pe,Se)},r.set(p,w),p.addEventListener("dispose",me)}let I=0;for(let R=0;R<y.length;R++)I+=y[R];const P=p.morphTargetsRelative?1:1-I;_.getUniforms().setValue(l,"morphTargetBaseInfluence",P),_.getUniforms().setValue(l,"morphTargetInfluences",y),_.getUniforms().setValue(l,"morphTargetsTexture",w.texture,t),_.getUniforms().setValue(l,"morphTargetsTextureSize",w.size)}else{const v=y===void 0?0:y.length;let x=n[p.id];if(x===void 0||x.length!==v){x=[];for(let L=0;L<v;L++)x[L]=[L,0];n[p.id]=x}for(let L=0;L<v;L++){const h=x[L];h[0]=L,h[1]=y[L]}x.sort(Nm);for(let L=0;L<8;L++)L<v&&x[L][1]?(a[L][0]=x[L][0],a[L][1]=x[L][1]):(a[L][0]=Number.MAX_SAFE_INTEGER,a[L][1]=0);a.sort(Im);const w=p.morphAttributes.position,I=p.morphAttributes.normal;let P=0;for(let L=0;L<8;L++){const h=a[L],X=h[0],A=h[1];X!==Number.MAX_SAFE_INTEGER&&A?(w&&p.getAttribute("morphTarget"+L)!==w[X]&&p.setAttribute("morphTarget"+L,w[X]),I&&p.getAttribute("morphNormal"+L)!==I[X]&&p.setAttribute("morphNormal"+L,I[X]),i[L]=A,P+=A):(w&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),I&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),i[L]=0)}const R=p.morphTargetsRelative?1:1-P;_.getUniforms().setValue(l,"morphTargetBaseInfluence",R),_.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:u}}function Fm(l,e,t,n){let i=new WeakMap;function r(u){const f=n.render.frame,p=u.geometry,m=e.get(u,p);return i.get(m)!==f&&(e.update(m),i.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),m}function o(){i=new WeakMap}function a(u){const f=u.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:r,dispose:o}}const lu=new on,cu=new tu,uu=new Mh,fu=new au,Jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function kr(l,e,t){const n=l[0];if(n<=0||n>0)return l;const i=e*t;let r=Jl[i];if(r===void 0&&(r=new Float32Array(i),Jl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,l[o].toArray(r,a)}return r}function qt(l,e){if(l.length!==e.length)return!1;for(let t=0,n=l.length;t<n;t++)if(l[t]!==e[t])return!1;return!0}function Xt(l,e){for(let t=0,n=e.length;t<n;t++)l[t]=e[t]}function sa(l,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=l.allocateTextureUnit();return t}function Um(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function km(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;l.uniform2fv(this.addr,e),Xt(t,e)}}function zm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;l.uniform3fv(this.addr,e),Xt(t,e)}}function Bm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;l.uniform4fv(this.addr,e),Xt(t,e)}}function Hm(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;nc.set(n),l.uniformMatrix2fv(this.addr,!1,nc),Xt(t,n)}}function Gm(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;tc.set(n),l.uniformMatrix3fv(this.addr,!1,tc),Xt(t,n)}}function Vm(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;ec.set(n),l.uniformMatrix4fv(this.addr,!1,ec),Xt(t,n)}}function Wm(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function jm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;l.uniform2iv(this.addr,e),Xt(t,e)}}function qm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;l.uniform3iv(this.addr,e),Xt(t,e)}}function Xm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;l.uniform4iv(this.addr,e),Xt(t,e)}}function Ym(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function Km(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;l.uniform2uiv(this.addr,e),Xt(t,e)}}function $m(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;l.uniform3uiv(this.addr,e),Xt(t,e)}}function Zm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;l.uniform4uiv(this.addr,e),Xt(t,e)}}function Jm(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||lu,i)}function Qm(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uu,i)}function eg(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fu,i)}function tg(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cu,i)}function ng(l){switch(l){case 5126:return Um;case 35664:return km;case 35665:return zm;case 35666:return Bm;case 35674:return Hm;case 35675:return Gm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return jm;case 35668:case 35672:return qm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return Km;case 36295:return $m;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}function ig(l,e){l.uniform1fv(this.addr,e)}function rg(l,e){const t=kr(e,this.size,2);l.uniform2fv(this.addr,t)}function sg(l,e){const t=kr(e,this.size,3);l.uniform3fv(this.addr,t)}function ag(l,e){const t=kr(e,this.size,4);l.uniform4fv(this.addr,t)}function og(l,e){const t=kr(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function lg(l,e){const t=kr(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function cg(l,e){const t=kr(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function ug(l,e){l.uniform1iv(this.addr,e)}function fg(l,e){l.uniform2iv(this.addr,e)}function hg(l,e){l.uniform3iv(this.addr,e)}function dg(l,e){l.uniform4iv(this.addr,e)}function pg(l,e){l.uniform1uiv(this.addr,e)}function mg(l,e){l.uniform2uiv(this.addr,e)}function gg(l,e){l.uniform3uiv(this.addr,e)}function _g(l,e){l.uniform4uiv(this.addr,e)}function xg(l,e,t){const n=this.cache,i=e.length,r=sa(t,i);qt(n,r)||(l.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||lu,r[o])}function vg(l,e,t){const n=this.cache,i=e.length,r=sa(t,i);qt(n,r)||(l.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||uu,r[o])}function yg(l,e,t){const n=this.cache,i=e.length,r=sa(t,i);qt(n,r)||(l.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fu,r[o])}function bg(l,e,t){const n=this.cache,i=e.length,r=sa(t,i);qt(n,r)||(l.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cu,r[o])}function Mg(l){switch(l){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return bg}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ng(t.type)}}class wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function ic(l,e){l.seq.push(e),l.map[e.id]=e}function Eg(l,e,t){const n=l.name,i=n.length;for(no.lastIndex=0;;){const r=no.exec(n),o=no.lastIndex;let a=r[1];const u=r[2]==="]",f=r[3];if(u&&(a=a|0),f===void 0||f==="["&&o+2===i){ic(t,f===void 0?new Sg(a,l,e):new wg(a,l,e));break}else{let m=t.map[a];m===void 0&&(m=new Tg(a),ic(t,m)),t=m}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Eg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function rc(l,e,t){const n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),n}let Ag=0;function Cg(l,e){const t=l.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Lg(l){switch(l){case Ji:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function sc(l,e,t){const n=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cg(l.getShaderSource(e),o)}else return i}function Rg(l,e){const t=Lg(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dg(l,e){let t;switch(e){case Of:t="Linear";break;case Ff:t="Reinhard";break;case Uf:t="OptimizedCineon";break;case kf:t="ACESFilmic";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pg(l){return[l.extensionDerivatives||!!l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Ig(l){const e=[];for(const t in l){const n=l[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(l,e){const t={},n=l.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=l.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:l.getAttribLocation(e,o),locationSize:a}}return t}function ss(l){return l!==""}function ac(l,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(l){return l.replace(Og,Fg)}function Fg(l,e){const t=ot[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xo(t)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(l){return l.replace(Ug,kg)}function kg(l,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cc(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zg(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===df?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function Bg(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Ar:case Cr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gg(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function Vg(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wg(l,e,t,n){const i=l.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=zg(t),f=Bg(t),p=Hg(t),m=Gg(t),_=Vg(t),y=t.isWebGL2?"":Pg(t),S=Ig(r),v=i.createProgram();let x,w,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[S].filter(ss).join(`
`),x.length>0&&(x+=`
`),w=[y,S].filter(ss).join(`
`),w.length>0&&(w+=`
`)):(x=[cc(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),w=[y,cc(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ot.tonemapping_pars_fragment:"",t.toneMapping!==oi?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,Rg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=xo(o),o=ac(o,t),o=oc(o,t),a=xo(a),a=ac(a,t),a=oc(a,t),o=lc(o),a=lc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,w=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const P=I+x+o,R=I+w+a,L=rc(i,35633,P),h=rc(i,35632,R);if(i.attachShader(v,L),i.attachShader(v,h),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),l.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),J=i.getShaderInfoLog(L).trim(),pe=i.getShaderInfoLog(h).trim();let Se=!0,Q=!0;if(i.getProgramParameter(v,35714)===!1){Se=!1;const Y=sc(i,L,"vertex"),oe=sc(i,h,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+z+`
`+Y+`
`+oe)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(J===""||pe==="")&&(Q=!1);Q&&(this.diagnostics={runnable:Se,programLog:z,vertexShader:{log:J,prefix:x},fragmentShader:{log:pe,prefix:w}})}i.deleteShader(L),i.deleteShader(h);let X;this.getUniforms=function(){return X===void 0&&(X=new Qs(i,v)),X};let A;return this.getAttributes=function(){return A===void 0&&(A=Ng(i,v)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=h,this}let jg=0;class qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xg(e),t.set(e,n)),n}}class Xg{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}}function Yg(l,e,t,n,i,r,o){const a=new nu,u=new qg,f=[],p=i.isWebGL2,m=i.logarithmicDepthBuffer,_=i.vertexTextures;let y=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A,z,J,pe,Se){const Q=pe.fog,Y=Se.geometry,oe=A.isMeshStandardMaterial?pe.environment:null,me=(A.isMeshStandardMaterial?t:e).get(A.envMap||oe),ve=!!me&&me.mapping===na?me.image.height:null,ce=S[A.type];A.precision!==null&&(y=i.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const $=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,te=$!==void 0?$.length:0;let xe=0;Y.morphAttributes.position!==void 0&&(xe=1),Y.morphAttributes.normal!==void 0&&(xe=2),Y.morphAttributes.color!==void 0&&(xe=3);let be,ge,Ie,$e;if(ce){const xt=Wn[ce];be=xt.vertexShader,ge=xt.fragmentShader}else be=A.vertexShader,ge=A.fragmentShader,u.update(A),Ie=u.getVertexShaderID(A),$e=u.getFragmentShaderID(A);const fe=l.getRenderTarget(),ht=A.alphaTest>0,je=A.clearcoat>0,Ge=A.iridescence>0;return{isWebGL2:p,shaderID:ce,shaderName:A.type,vertexShader:be,fragmentShader:ge,defines:A.defines,customVertexShaderID:Ie,customFragmentShaderID:$e,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,instancing:Se.isInstancedMesh===!0,instancingColor:Se.isInstancedMesh===!0&&Se.instanceColor!==null,supportsVertexTextures:_,outputEncoding:fe===null?l.outputEncoding:fe.isXRRenderTarget===!0?fe.texture.encoding:Ji,map:!!A.map,matcap:!!A.matcap,envMap:!!me,envMapMode:me&&me.mapping,envMapCubeUVHeight:ve,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===sh,tangentSpaceNormalMap:A.normalMapType===ia,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===bt,clearcoat:je,clearcoatMap:je&&!!A.clearcoatMap,clearcoatRoughnessMap:je&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:je&&!!A.clearcoatNormalMap,iridescence:Ge,iridescenceMap:Ge&&!!A.iridescenceMap,iridescenceThicknessMap:Ge&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===wr,alphaMap:!!A.alphaMap,alphaTest:ht,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!Y.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!Q,useFog:A.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:m,skinning:Se.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:l.shadowMap.enabled&&J.length>0,shadowMapType:l.shadowMap.type,toneMapping:A.toneMapped?l.toneMapping:oi,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===si,flipSided:A.side===Pn,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function x(A){const z=[];if(A.shaderID?z.push(A.shaderID):(z.push(A.customVertexShaderID),z.push(A.customFragmentShaderID)),A.defines!==void 0)for(const J in A.defines)z.push(J),z.push(A.defines[J]);return A.isRawShaderMaterial===!1&&(w(z,A),I(z,A),z.push(l.outputEncoding)),z.push(A.customProgramCacheKey),z.join()}function w(A,z){A.push(z.precision),A.push(z.outputEncoding),A.push(z.envMapMode),A.push(z.envMapCubeUVHeight),A.push(z.combine),A.push(z.vertexUvs),A.push(z.fogExp2),A.push(z.sizeAttenuation),A.push(z.morphTargetsCount),A.push(z.morphAttributeCount),A.push(z.numDirLights),A.push(z.numPointLights),A.push(z.numSpotLights),A.push(z.numSpotLightMaps),A.push(z.numHemiLights),A.push(z.numRectAreaLights),A.push(z.numDirLightShadows),A.push(z.numPointLightShadows),A.push(z.numSpotLightShadows),A.push(z.numSpotLightShadowsWithMaps),A.push(z.shadowMapType),A.push(z.toneMapping),A.push(z.numClippingPlanes),A.push(z.numClipIntersection),A.push(z.depthPacking)}function I(A,z){a.disableAll(),z.isWebGL2&&a.enable(0),z.supportsVertexTextures&&a.enable(1),z.instancing&&a.enable(2),z.instancingColor&&a.enable(3),z.map&&a.enable(4),z.matcap&&a.enable(5),z.envMap&&a.enable(6),z.lightMap&&a.enable(7),z.aoMap&&a.enable(8),z.emissiveMap&&a.enable(9),z.bumpMap&&a.enable(10),z.normalMap&&a.enable(11),z.objectSpaceNormalMap&&a.enable(12),z.tangentSpaceNormalMap&&a.enable(13),z.clearcoat&&a.enable(14),z.clearcoatMap&&a.enable(15),z.clearcoatRoughnessMap&&a.enable(16),z.clearcoatNormalMap&&a.enable(17),z.iridescence&&a.enable(18),z.iridescenceMap&&a.enable(19),z.iridescenceThicknessMap&&a.enable(20),z.displacementMap&&a.enable(21),z.specularMap&&a.enable(22),z.roughnessMap&&a.enable(23),z.metalnessMap&&a.enable(24),z.gradientMap&&a.enable(25),z.alphaMap&&a.enable(26),z.alphaTest&&a.enable(27),z.vertexColors&&a.enable(28),z.vertexAlphas&&a.enable(29),z.vertexUvs&&a.enable(30),z.vertexTangents&&a.enable(31),z.uvsVertexOnly&&a.enable(32),A.push(a.mask),a.disableAll(),z.fog&&a.enable(0),z.useFog&&a.enable(1),z.flatShading&&a.enable(2),z.logarithmicDepthBuffer&&a.enable(3),z.skinning&&a.enable(4),z.morphTargets&&a.enable(5),z.morphNormals&&a.enable(6),z.morphColors&&a.enable(7),z.premultipliedAlpha&&a.enable(8),z.shadowMapEnabled&&a.enable(9),z.physicallyCorrectLights&&a.enable(10),z.doubleSided&&a.enable(11),z.flipSided&&a.enable(12),z.useDepthPacking&&a.enable(13),z.dithering&&a.enable(14),z.specularIntensityMap&&a.enable(15),z.specularColorMap&&a.enable(16),z.transmission&&a.enable(17),z.transmissionMap&&a.enable(18),z.thicknessMap&&a.enable(19),z.sheen&&a.enable(20),z.sheenColorMap&&a.enable(21),z.sheenRoughnessMap&&a.enable(22),z.decodeVideoTexture&&a.enable(23),z.opaque&&a.enable(24),A.push(a.mask)}function P(A){const z=S[A.type];let J;if(z){const pe=Wn[z];J=Nh.clone(pe.uniforms)}else J=A.uniforms;return J}function R(A,z){let J;for(let pe=0,Se=f.length;pe<Se;pe++){const Q=f[pe];if(Q.cacheKey===z){J=Q,++J.usedTimes;break}}return J===void 0&&(J=new Wg(l,z,A,r),f.push(J)),J}function L(A){if(--A.usedTimes===0){const z=f.indexOf(A);f[z]=f[f.length-1],f.pop(),A.destroy()}}function h(A){u.remove(A)}function X(){u.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:P,acquireProgram:R,releaseProgram:L,releaseShaderCache:h,programs:f,dispose:X}}function Kg(){let l=new WeakMap;function e(r){let o=l.get(r);return o===void 0&&(o={},l.set(r,o)),o}function t(r){l.delete(r)}function n(r,o,a){l.get(r)[o]=a}function i(){l=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $g(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function uc(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function fc(){const l=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(m,_,y,S,v,x){let w=l[e];return w===void 0?(w={id:m.id,object:m,geometry:_,material:y,groupOrder:S,renderOrder:m.renderOrder,z:v,group:x},l[e]=w):(w.id=m.id,w.object=m,w.geometry=_,w.material=y,w.groupOrder=S,w.renderOrder=m.renderOrder,w.z=v,w.group=x),e++,w}function a(m,_,y,S,v,x){const w=o(m,_,y,S,v,x);y.transmission>0?n.push(w):y.transparent===!0?i.push(w):t.push(w)}function u(m,_,y,S,v,x){const w=o(m,_,y,S,v,x);y.transmission>0?n.unshift(w):y.transparent===!0?i.unshift(w):t.unshift(w)}function f(m,_){t.length>1&&t.sort(m||$g),n.length>1&&n.sort(_||uc),i.length>1&&i.sort(_||uc)}function p(){for(let m=e,_=l.length;m<_;m++){const y=l[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:u,finish:p,sort:f}}function Zg(){let l=new WeakMap;function e(n,i){const r=l.get(n);let o;return r===void 0?(o=new fc,l.set(n,[o])):i>=r.length?(o=new fc,r.push(o)):o=r[i],o}function t(){l=new WeakMap}return{get:e,dispose:t}}function Jg(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return l[e.id]=t,t}}}function Qg(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let e_=0;function t_(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function n_(l,e){const t=new Jg,n=Qg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)i.probe.push(new H);const r=new H,o=new ft,a=new ft;function u(p,m){let _=0,y=0,S=0;for(let pe=0;pe<9;pe++)i.probe[pe].set(0,0,0);let v=0,x=0,w=0,I=0,P=0,R=0,L=0,h=0,X=0,A=0;p.sort(t_);const z=m!==!0?Math.PI:1;for(let pe=0,Se=p.length;pe<Se;pe++){const Q=p[pe],Y=Q.color,oe=Q.intensity,me=Q.distance,ve=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)_+=Y.r*oe*z,y+=Y.g*oe*z,S+=Y.b*oe*z;else if(Q.isLightProbe)for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(Q.sh.coefficients[ce],oe);else if(Q.isDirectionalLight){const ce=t.get(Q);if(ce.color.copy(Q.color).multiplyScalar(Q.intensity*z),Q.castShadow){const $=Q.shadow,te=n.get(Q);te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.directionalShadow[v]=te,i.directionalShadowMap[v]=ve,i.directionalShadowMatrix[v]=Q.shadow.matrix,R++}i.directional[v]=ce,v++}else if(Q.isSpotLight){const ce=t.get(Q);ce.position.setFromMatrixPosition(Q.matrixWorld),ce.color.copy(Y).multiplyScalar(oe*z),ce.distance=me,ce.coneCos=Math.cos(Q.angle),ce.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),ce.decay=Q.decay,i.spot[w]=ce;const $=Q.shadow;if(Q.map&&(i.spotLightMap[X]=Q.map,X++,$.updateMatrices(Q),Q.castShadow&&A++),i.spotLightMatrix[w]=$.matrix,Q.castShadow){const te=n.get(Q);te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.spotShadow[w]=te,i.spotShadowMap[w]=ve,h++}w++}else if(Q.isRectAreaLight){const ce=t.get(Q);ce.color.copy(Y).multiplyScalar(oe),ce.halfWidth.set(Q.width*.5,0,0),ce.halfHeight.set(0,Q.height*.5,0),i.rectArea[I]=ce,I++}else if(Q.isPointLight){const ce=t.get(Q);if(ce.color.copy(Q.color).multiplyScalar(Q.intensity*z),ce.distance=Q.distance,ce.decay=Q.decay,Q.castShadow){const $=Q.shadow,te=n.get(Q);te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,i.pointShadow[x]=te,i.pointShadowMap[x]=ve,i.pointShadowMatrix[x]=Q.shadow.matrix,L++}i.point[x]=ce,x++}else if(Q.isHemisphereLight){const ce=t.get(Q);ce.skyColor.copy(Q.color).multiplyScalar(oe*z),ce.groundColor.copy(Q.groundColor).multiplyScalar(oe*z),i.hemi[P]=ce,P++}}I>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=_,i.ambient[1]=y,i.ambient[2]=S;const J=i.hash;(J.directionalLength!==v||J.pointLength!==x||J.spotLength!==w||J.rectAreaLength!==I||J.hemiLength!==P||J.numDirectionalShadows!==R||J.numPointShadows!==L||J.numSpotShadows!==h||J.numSpotMaps!==X)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=I,i.point.length=x,i.hemi.length=P,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=h,i.spotShadowMap.length=h,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=h+X-A,i.spotLightMap.length=X,i.numSpotLightShadowsWithMaps=A,J.directionalLength=v,J.pointLength=x,J.spotLength=w,J.rectAreaLength=I,J.hemiLength=P,J.numDirectionalShadows=R,J.numPointShadows=L,J.numSpotShadows=h,J.numSpotMaps=X,i.version=e_++)}function f(p,m){let _=0,y=0,S=0,v=0,x=0;const w=m.matrixWorldInverse;for(let I=0,P=p.length;I<P;I++){const R=p[I];if(R.isDirectionalLight){const L=i.directional[_];L.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(w),_++}else if(R.isSpotLight){const L=i.spot[S];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(w),L.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(w),S++}else if(R.isRectAreaLight){const L=i.rectArea[v];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(w),a.identity(),o.copy(R.matrixWorld),o.premultiply(w),a.extractRotation(o),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const L=i.point[y];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(w),y++}else if(R.isHemisphereLight){const L=i.hemi[x];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(w),x++}}}return{setup:u,setupView:f,state:i}}function hc(l,e){const t=new n_(l,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(m){n.push(m)}function a(m){i.push(m)}function u(m){t.setup(n,m)}function f(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:f,pushLight:o,pushShadow:a}}function i_(l,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let u;return a===void 0?(u=new hc(l,e),t.set(r,[u])):o>=a.length?(u=new hc(l,e),a.push(u)):u=a[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class r_ extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l_(l,e,t){let n=new Ao;const i=new tt,r=new tt,o=new Ct,a=new r_({depthPacking:rh}),u=new s_,f={},p=t.maxTextureSize,m={0:Pn,1:$i,2:si},_=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const S=new qn;S.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(S,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc,this.render=function(R,L,h){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const X=l.getRenderTarget(),A=l.getActiveCubeFace(),z=l.getActiveMipmapLevel(),J=l.state;J.setBlending(wi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);for(let pe=0,Se=R.length;pe<Se;pe++){const Q=R[pe],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const oe=Y.getFrameExtents();if(i.multiply(oe),r.copy(Y.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/oe.x),i.x=r.x*oe.x,Y.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/oe.y),i.y=r.y*oe.y,Y.mapSize.y=r.y)),Y.map===null){const ve=this.type!==rs?{minFilter:$t,magFilter:$t}:{};Y.map=new Qi(i.x,i.y,ve),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}l.setRenderTarget(Y.map),l.clear();const me=Y.getViewportCount();for(let ve=0;ve<me;ve++){const ce=Y.getViewport(ve);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),J.viewport(o),Y.updateMatrices(Q,ve),n=Y.getFrustum(),P(L,h,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===rs&&w(Y,h),Y.needsUpdate=!1}x.needsUpdate=!1,l.setRenderTarget(X,A,z)};function w(R,L){const h=e.update(v);_.defines.VSM_SAMPLES!==R.blurSamples&&(_.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qi(i.x,i.y)),_.uniforms.shadow_pass.value=R.map.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,l.setRenderTarget(R.mapPass),l.clear(),l.renderBufferDirect(L,null,h,_,v,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,l.setRenderTarget(R.map),l.clear(),l.renderBufferDirect(L,null,h,y,v,null)}function I(R,L,h,X,A,z){let J=null;const pe=h.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(pe!==void 0?J=pe:J=h.isPointLight===!0?u:a,l.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const Se=J.uuid,Q=L.uuid;let Y=f[Se];Y===void 0&&(Y={},f[Se]=Y);let oe=Y[Q];oe===void 0&&(oe=J.clone(),Y[Q]=oe),J=oe}return J.visible=L.visible,J.wireframe=L.wireframe,z===rs?J.side=L.shadowSide!==null?L.shadowSide:L.side:J.side=L.shadowSide!==null?L.shadowSide:m[L.side],J.alphaMap=L.alphaMap,J.alphaTest=L.alphaTest,J.clipShadows=L.clipShadows,J.clippingPlanes=L.clippingPlanes,J.clipIntersection=L.clipIntersection,J.displacementMap=L.displacementMap,J.displacementScale=L.displacementScale,J.displacementBias=L.displacementBias,J.wireframeLinewidth=L.wireframeLinewidth,J.linewidth=L.linewidth,h.isPointLight===!0&&J.isMeshDistanceMaterial===!0&&(J.referencePosition.setFromMatrixPosition(h.matrixWorld),J.nearDistance=X,J.farDistance=A),J}function P(R,L,h,X,A){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===rs)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,R.matrixWorld);const pe=e.update(R),Se=R.material;if(Array.isArray(Se)){const Q=pe.groups;for(let Y=0,oe=Q.length;Y<oe;Y++){const me=Q[Y],ve=Se[me.materialIndex];if(ve&&ve.visible){const ce=I(R,ve,X,h.near,h.far,A);l.renderBufferDirect(h,null,pe,ce,R,me)}}}else if(Se.visible){const Q=I(R,Se,X,h.near,h.far,A);l.renderBufferDirect(h,null,pe,Q,R,null)}}const J=R.children;for(let pe=0,Se=J.length;pe<Se;pe++)P(J[pe],L,h,X,A)}}function c_(l,e,t){const n=t.isWebGL2;function i(){let G=!1;const se=new Ct;let ye=null;const Ce=new Ct(0,0,0,0);return{setMask:function(Oe){ye!==Oe&&!G&&(l.colorMask(Oe,Oe,Oe,Oe),ye=Oe)},setLocked:function(Oe){G=Oe},setClear:function(Oe,mt,zt,Bt,Mn){Mn===!0&&(Oe*=Bt,mt*=Bt,zt*=Bt),se.set(Oe,mt,zt,Bt),Ce.equals(se)===!1&&(l.clearColor(Oe,mt,zt,Bt),Ce.copy(se))},reset:function(){G=!1,ye=null,Ce.set(-1,0,0,0)}}}function r(){let G=!1,se=null,ye=null,Ce=null;return{setTest:function(Oe){Oe?ht(2929):je(2929)},setMask:function(Oe){se!==Oe&&!G&&(l.depthMask(Oe),se=Oe)},setFunc:function(Oe){if(ye!==Oe){switch(Oe){case Ef:l.depthFunc(512);break;case Af:l.depthFunc(519);break;case Cf:l.depthFunc(513);break;case co:l.depthFunc(515);break;case Lf:l.depthFunc(514);break;case Rf:l.depthFunc(518);break;case Df:l.depthFunc(516);break;case Pf:l.depthFunc(517);break;default:l.depthFunc(515)}ye=Oe}},setLocked:function(Oe){G=Oe},setClear:function(Oe){Ce!==Oe&&(l.clearDepth(Oe),Ce=Oe)},reset:function(){G=!1,se=null,ye=null,Ce=null}}}function o(){let G=!1,se=null,ye=null,Ce=null,Oe=null,mt=null,zt=null,Bt=null,Mn=null;return{setTest:function(Rt){G||(Rt?ht(2960):je(2960))},setMask:function(Rt){se!==Rt&&!G&&(l.stencilMask(Rt),se=Rt)},setFunc:function(Rt,In,cn){(ye!==Rt||Ce!==In||Oe!==cn)&&(l.stencilFunc(Rt,In,cn),ye=Rt,Ce=In,Oe=cn)},setOp:function(Rt,In,cn){(mt!==Rt||zt!==In||Bt!==cn)&&(l.stencilOp(Rt,In,cn),mt=Rt,zt=In,Bt=cn)},setLocked:function(Rt){G=Rt},setClear:function(Rt){Mn!==Rt&&(l.clearStencil(Rt),Mn=Rt)},reset:function(){G=!1,se=null,ye=null,Ce=null,Oe=null,mt=null,zt=null,Bt=null,Mn=null}}}const a=new i,u=new r,f=new o,p=new WeakMap,m=new WeakMap;let _={},y={},S=new WeakMap,v=[],x=null,w=!1,I=null,P=null,R=null,L=null,h=null,X=null,A=null,z=!1,J=null,pe=null,Se=null,Q=null,Y=null;const oe=l.getParameter(35661);let me=!1,ve=0;const ce=l.getParameter(7938);ce.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(ce)[1]),me=ve>=1):ce.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),me=ve>=2);let $=null,te={};const xe=l.getParameter(3088),be=l.getParameter(2978),ge=new Ct().fromArray(xe),Ie=new Ct().fromArray(be);function $e(G,se,ye){const Ce=new Uint8Array(4),Oe=l.createTexture();l.bindTexture(G,Oe),l.texParameteri(G,10241,9728),l.texParameteri(G,10240,9728);for(let mt=0;mt<ye;mt++)l.texImage2D(se+mt,0,6408,1,1,0,6408,5121,Ce);return Oe}const fe={};fe[3553]=$e(3553,3553,1),fe[34067]=$e(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ht(2929),u.setFunc(co),De(!1),St(il),ht(2884),Lt(wi);function ht(G){_[G]!==!0&&(l.enable(G),_[G]=!0)}function je(G){_[G]!==!1&&(l.disable(G),_[G]=!1)}function Ge(G,se){return y[G]!==se?(l.bindFramebuffer(G,se),y[G]=se,n&&(G===36009&&(y[36160]=se),G===36160&&(y[36009]=se)),!0):!1}function Ne(G,se){let ye=v,Ce=!1;if(G)if(ye=S.get(se),ye===void 0&&(ye=[],S.set(se,ye)),G.isWebGLMultipleRenderTargets){const Oe=G.texture;if(ye.length!==Oe.length||ye[0]!==36064){for(let mt=0,zt=Oe.length;mt<zt;mt++)ye[mt]=36064+mt;ye.length=Oe.length,Ce=!0}}else ye[0]!==36064&&(ye[0]=36064,Ce=!0);else ye[0]!==1029&&(ye[0]=1029,Ce=!0);Ce&&(t.isWebGL2?l.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function xt(G){return x!==G?(l.useProgram(G),x=G,!0):!1}const st={[br]:32774,[mf]:32778,[gf]:32779};if(n)st[ol]=32775,st[ll]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(st[ol]=G.MIN_EXT,st[ll]=G.MAX_EXT)}const Fe={[_f]:0,[xf]:1,[vf]:768,[Wc]:770,[Tf]:776,[Sf]:774,[bf]:772,[yf]:769,[jc]:771,[wf]:775,[Mf]:773};function Lt(G,se,ye,Ce,Oe,mt,zt,Bt){if(G===wi){w===!0&&(je(3042),w=!1);return}if(w===!1&&(ht(3042),w=!0),G!==pf){if(G!==I||Bt!==z){if((P!==br||h!==br)&&(l.blendEquation(32774),P=br,h=br),Bt)switch(G){case wr:l.blendFuncSeparate(1,771,1,771);break;case rl:l.blendFunc(1,1);break;case sl:l.blendFuncSeparate(0,769,0,1);break;case al:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case wr:l.blendFuncSeparate(770,771,1,771);break;case rl:l.blendFunc(770,1);break;case sl:l.blendFuncSeparate(0,769,0,1);break;case al:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}R=null,L=null,X=null,A=null,I=G,z=Bt}return}Oe=Oe||se,mt=mt||ye,zt=zt||Ce,(se!==P||Oe!==h)&&(l.blendEquationSeparate(st[se],st[Oe]),P=se,h=Oe),(ye!==R||Ce!==L||mt!==X||zt!==A)&&(l.blendFuncSeparate(Fe[ye],Fe[Ce],Fe[mt],Fe[zt]),R=ye,L=Ce,X=mt,A=zt),I=G,z=null}function Pt(G,se){G.side===si?je(2884):ht(2884);let ye=G.side===Pn;se&&(ye=!ye),De(ye),G.blending===wr&&G.transparent===!1?Lt(wi):Lt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const Ce=G.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),vt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ht(32926):je(32926)}function De(G){J!==G&&(G?l.frontFace(2304):l.frontFace(2305),J=G)}function St(G){G!==ff?(ht(2884),G!==pe&&(G===il?l.cullFace(1029):G===hf?l.cullFace(1028):l.cullFace(1032))):je(2884),pe=G}function kt(G){G!==Se&&(me&&l.lineWidth(G),Se=G)}function vt(G,se,ye){G?(ht(32823),(Q!==se||Y!==ye)&&(l.polygonOffset(se,ye),Q=se,Y=ye)):je(32823)}function ln(G){G?ht(3089):je(3089)}function en(G){G===void 0&&(G=33984+oe-1),$!==G&&(l.activeTexture(G),$=G)}function N(G,se,ye){ye===void 0&&($===null?ye=33984+oe-1:ye=$);let Ce=te[ye];Ce===void 0&&(Ce={type:void 0,texture:void 0},te[ye]=Ce),(Ce.type!==G||Ce.texture!==se)&&($!==ye&&(l.activeTexture(ye),$=ye),l.bindTexture(G,se||fe[G]),Ce.type=G,Ce.texture=se)}function C(){const G=te[$];G!==void 0&&G.type!==void 0&&(l.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{l.compressedTexImage2D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{l.compressedTexImage3D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{l.texSubImage2D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{l.texSubImage3D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{l.texStorage2D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{l.texStorage3D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{l.texImage2D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{l.texImage3D.apply(l,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(G){ge.equals(G)===!1&&(l.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function Ue(G){Ie.equals(G)===!1&&(l.viewport(G.x,G.y,G.z,G.w),Ie.copy(G))}function Ze(G,se){let ye=m.get(se);ye===void 0&&(ye=new WeakMap,m.set(se,ye));let Ce=ye.get(G);Ce===void 0&&(Ce=l.getUniformBlockIndex(se,G.name),ye.set(G,Ce))}function Ke(G,se){const Ce=m.get(se).get(G);p.get(G)!==Ce&&(l.uniformBlockBinding(se,Ce,G.__bindingPointIndex),p.set(G,Ce))}function pt(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},$=null,te={},y={},S=new WeakMap,v=[],x=null,w=!1,I=null,P=null,R=null,L=null,h=null,X=null,A=null,z=!1,J=null,pe=null,Se=null,Q=null,Y=null,ge.set(0,0,l.canvas.width,l.canvas.height),Ie.set(0,0,l.canvas.width,l.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:ht,disable:je,bindFramebuffer:Ge,drawBuffers:Ne,useProgram:xt,setBlending:Lt,setMaterial:Pt,setFlipSided:De,setCullFace:St,setLineWidth:kt,setPolygonOffset:vt,setScissorTest:ln,activeTexture:en,bindTexture:N,unbindTexture:C,compressedTexImage2D:ne,compressedTexImage3D:_e,texImage2D:Re,texImage3D:Ee,updateUBOMapping:Ze,uniformBlockBinding:Ke,texStorage2D:j,texStorage3D:Pe,texSubImage2D:Me,texSubImage3D:Le,compressedTexSubImage2D:We,compressedTexSubImage3D:k,scissor:ke,viewport:Ue,reset:pt}}function u_(l,e,t,n,i,r,o){const a=i.isWebGL2,u=i.maxTextures,f=i.maxCubemapSize,p=i.maxTextureSize,m=i.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),S=new WeakMap;let v;const x=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(N,C){return w?new OffscreenCanvas(N,C):fs("canvas")}function P(N,C,ne,_e){let Me=1;if((N.width>_e||N.height>_e)&&(Me=_e/Math.max(N.width,N.height)),Me<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Le=C?ta:Math.floor,We=Le(Me*N.width),k=Le(Me*N.height);v===void 0&&(v=I(We,k));const j=ne?I(We,k):v;return j.width=We,j.height=k,j.getContext("2d").drawImage(N,0,0,We,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+We+"x"+k+")."),j}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function R(N){return _o(N.width)&&_o(N.height)}function L(N){return a?!1:N.wrapS!==Ln||N.wrapT!==Ln||N.minFilter!==$t&&N.minFilter!==dn}function h(N,C){return N.generateMipmaps&&C&&N.minFilter!==$t&&N.minFilter!==dn}function X(N){l.generateMipmap(N)}function A(N,C,ne,_e,Me=!1){if(a===!1)return C;if(N!==null){if(l[N]!==void 0)return l[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le=C;return C===6403&&(ne===5126&&(Le=33326),ne===5131&&(Le=33325),ne===5121&&(Le=33321)),C===33319&&(ne===5126&&(Le=33328),ne===5131&&(Le=33327),ne===5121&&(Le=33323)),C===6408&&(ne===5126&&(Le=34836),ne===5131&&(Le=34842),ne===5121&&(Le=_e===bt&&Me===!1?35907:32856),ne===32819&&(Le=32854),ne===32820&&(Le=32855)),(Le===33325||Le===33326||Le===33327||Le===33328||Le===34842||Le===34836)&&e.get("EXT_color_buffer_float"),Le}function z(N,C,ne){return h(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==$t&&N.minFilter!==dn?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function J(N){return N===$t||N===ho||N===po?9728:9729}function pe(N){const C=N.target;C.removeEventListener("dispose",pe),Q(C),C.isVideoTexture&&S.delete(C)}function Se(N){const C=N.target;C.removeEventListener("dispose",Se),oe(C)}function Q(N){const C=n.get(N);if(C.__webglInit===void 0)return;const ne=N.source,_e=x.get(ne);if(_e){const Me=_e[C.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&Y(N),Object.keys(_e).length===0&&x.delete(ne)}n.remove(N)}function Y(N){const C=n.get(N);l.deleteTexture(C.__webglTexture);const ne=N.source,_e=x.get(ne);delete _e[C.__cacheKey],o.memory.textures--}function oe(N){const C=N.texture,ne=n.get(N),_e=n.get(C);if(_e.__webglTexture!==void 0&&(l.deleteTexture(_e.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++)l.deleteFramebuffer(ne.__webglFramebuffer[Me]),ne.__webglDepthbuffer&&l.deleteRenderbuffer(ne.__webglDepthbuffer[Me]);else{if(l.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&l.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&l.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let Me=0;Me<ne.__webglColorRenderbuffer.length;Me++)ne.__webglColorRenderbuffer[Me]&&l.deleteRenderbuffer(ne.__webglColorRenderbuffer[Me]);ne.__webglDepthRenderbuffer&&l.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Me=0,Le=C.length;Me<Le;Me++){const We=n.get(C[Me]);We.__webglTexture&&(l.deleteTexture(We.__webglTexture),o.memory.textures--),n.remove(C[Me])}n.remove(C),n.remove(N)}let me=0;function ve(){me=0}function ce(){const N=me;return N>=u&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u),me+=1,N}function $(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.encoding),C.join()}function te(N,C){const ne=n.get(N);if(N.isVideoTexture&&ln(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const _e=N.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(ne,N,C);return}}t.bindTexture(3553,ne.__webglTexture,33984+C)}function xe(N,C){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){je(ne,N,C);return}t.bindTexture(35866,ne.__webglTexture,33984+C)}function be(N,C){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){je(ne,N,C);return}t.bindTexture(32879,ne.__webglTexture,33984+C)}function ge(N,C){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Ge(ne,N,C);return}t.bindTexture(34067,ne.__webglTexture,33984+C)}const Ie={[Lr]:10497,[Ln]:33071,[ea]:33648},$e={[$t]:9728,[ho]:9984,[po]:9986,[dn]:9729,[Xc]:9985,[Or]:9987};function fe(N,C,ne){if(ne?(l.texParameteri(N,10242,Ie[C.wrapS]),l.texParameteri(N,10243,Ie[C.wrapT]),(N===32879||N===35866)&&l.texParameteri(N,32882,Ie[C.wrapR]),l.texParameteri(N,10240,$e[C.magFilter]),l.texParameteri(N,10241,$e[C.minFilter])):(l.texParameteri(N,10242,33071),l.texParameteri(N,10243,33071),(N===32879||N===35866)&&l.texParameteri(N,32882,33071),(C.wrapS!==Ln||C.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(N,10240,J(C.magFilter)),l.texParameteri(N,10241,J(C.minFilter)),C.minFilter!==$t&&C.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(C.type===Si&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(l.texParameterf(N,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ht(N,C){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",pe));const _e=C.source;let Me=x.get(_e);Me===void 0&&(Me={},x.set(_e,Me));const Le=$(C);if(Le!==N.__cacheKey){Me[Le]===void 0&&(Me[Le]={texture:l.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),Me[Le].usedTimes++;const We=Me[N.__cacheKey];We!==void 0&&(Me[N.__cacheKey].usedTimes--,We.usedTimes===0&&Y(C)),N.__cacheKey=Le,N.__webglTexture=Me[Le].texture}return ne}function je(N,C,ne){let _e=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(_e=35866),C.isData3DTexture&&(_e=32879);const Me=ht(N,C),Le=C.source;t.bindTexture(_e,N.__webglTexture,33984+ne);const We=n.get(Le);if(Le.version!==We.__version||Me===!0){t.activeTexture(33984+ne),l.pixelStorei(37440,C.flipY),l.pixelStorei(37441,C.premultiplyAlpha),l.pixelStorei(3317,C.unpackAlignment),l.pixelStorei(37443,0);const k=L(C)&&R(C.image)===!1;let j=P(C.image,k,!1,p);j=en(C,j);const Pe=R(j)||a,Re=r.convert(C.format,C.encoding);let Ee=r.convert(C.type),ke=A(C.internalFormat,Re,Ee,C.encoding,C.isVideoTexture);fe(_e,C,Pe);let Ue;const Ze=C.mipmaps,Ke=a&&C.isVideoTexture!==!0,pt=We.__version===void 0||Me===!0,G=z(C,j,Pe);if(C.isDepthTexture)ke=6402,a?C.type===Si?ke=36012:C.type===Gi?ke=33190:C.type===Tr?ke=35056:ke=33189:C.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===qi&&ke===6402&&C.type!==Yc&&C.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Gi,Ee=r.convert(C.type)),C.format===Rr&&ke===6402&&(ke=34041,C.type!==Tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Tr,Ee=r.convert(C.type))),pt&&(Ke?t.texStorage2D(3553,1,ke,j.width,j.height):t.texImage2D(3553,0,ke,j.width,j.height,0,Re,Ee,null));else if(C.isDataTexture)if(Ze.length>0&&Pe){Ke&&pt&&t.texStorage2D(3553,G,ke,Ze[0].width,Ze[0].height);for(let se=0,ye=Ze.length;se<ye;se++)Ue=Ze[se],Ke?t.texSubImage2D(3553,se,0,0,Ue.width,Ue.height,Re,Ee,Ue.data):t.texImage2D(3553,se,ke,Ue.width,Ue.height,0,Re,Ee,Ue.data);C.generateMipmaps=!1}else Ke?(pt&&t.texStorage2D(3553,G,ke,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Re,Ee,j.data)):t.texImage2D(3553,0,ke,j.width,j.height,0,Re,Ee,j.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ke&&pt&&t.texStorage3D(35866,G,ke,Ze[0].width,Ze[0].height,j.depth);for(let se=0,ye=Ze.length;se<ye;se++)Ue=Ze[se],C.format!==Rn?Re!==null?Ke?t.compressedTexSubImage3D(35866,se,0,0,0,Ue.width,Ue.height,j.depth,Re,Ue.data,0,0):t.compressedTexImage3D(35866,se,ke,Ue.width,Ue.height,j.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(35866,se,0,0,0,Ue.width,Ue.height,j.depth,Re,Ee,Ue.data):t.texImage3D(35866,se,ke,Ue.width,Ue.height,j.depth,0,Re,Ee,Ue.data)}else{Ke&&pt&&t.texStorage2D(3553,G,ke,Ze[0].width,Ze[0].height);for(let se=0,ye=Ze.length;se<ye;se++)Ue=Ze[se],C.format!==Rn?Re!==null?Ke?t.compressedTexSubImage2D(3553,se,0,0,Ue.width,Ue.height,Re,Ue.data):t.compressedTexImage2D(3553,se,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(3553,se,0,0,Ue.width,Ue.height,Re,Ee,Ue.data):t.texImage2D(3553,se,ke,Ue.width,Ue.height,0,Re,Ee,Ue.data)}else if(C.isDataArrayTexture)Ke?(pt&&t.texStorage3D(35866,G,ke,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Re,Ee,j.data)):t.texImage3D(35866,0,ke,j.width,j.height,j.depth,0,Re,Ee,j.data);else if(C.isData3DTexture)Ke?(pt&&t.texStorage3D(32879,G,ke,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Re,Ee,j.data)):t.texImage3D(32879,0,ke,j.width,j.height,j.depth,0,Re,Ee,j.data);else if(C.isFramebufferTexture){if(pt)if(Ke)t.texStorage2D(3553,G,ke,j.width,j.height);else{let se=j.width,ye=j.height;for(let Ce=0;Ce<G;Ce++)t.texImage2D(3553,Ce,ke,se,ye,0,Re,Ee,null),se>>=1,ye>>=1}}else if(Ze.length>0&&Pe){Ke&&pt&&t.texStorage2D(3553,G,ke,Ze[0].width,Ze[0].height);for(let se=0,ye=Ze.length;se<ye;se++)Ue=Ze[se],Ke?t.texSubImage2D(3553,se,0,0,Re,Ee,Ue):t.texImage2D(3553,se,ke,Re,Ee,Ue);C.generateMipmaps=!1}else Ke?(pt&&t.texStorage2D(3553,G,ke,j.width,j.height),t.texSubImage2D(3553,0,0,0,Re,Ee,j)):t.texImage2D(3553,0,ke,Re,Ee,j);h(C,Pe)&&X(_e),We.__version=Le.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Ge(N,C,ne){if(C.image.length!==6)return;const _e=ht(N,C),Me=C.source;t.bindTexture(34067,N.__webglTexture,33984+ne);const Le=n.get(Me);if(Me.version!==Le.__version||_e===!0){t.activeTexture(33984+ne),l.pixelStorei(37440,C.flipY),l.pixelStorei(37441,C.premultiplyAlpha),l.pixelStorei(3317,C.unpackAlignment),l.pixelStorei(37443,0);const We=C.isCompressedTexture||C.image[0].isCompressedTexture,k=C.image[0]&&C.image[0].isDataTexture,j=[];for(let se=0;se<6;se++)!We&&!k?j[se]=P(C.image[se],!1,!0,f):j[se]=k?C.image[se].image:C.image[se],j[se]=en(C,j[se]);const Pe=j[0],Re=R(Pe)||a,Ee=r.convert(C.format,C.encoding),ke=r.convert(C.type),Ue=A(C.internalFormat,Ee,ke,C.encoding),Ze=a&&C.isVideoTexture!==!0,Ke=Le.__version===void 0||_e===!0;let pt=z(C,Pe,Re);fe(34067,C,Re);let G;if(We){Ze&&Ke&&t.texStorage2D(34067,pt,Ue,Pe.width,Pe.height);for(let se=0;se<6;se++){G=j[se].mipmaps;for(let ye=0;ye<G.length;ye++){const Ce=G[ye];C.format!==Rn?Ee!==null?Ze?t.compressedTexSubImage2D(34069+se,ye,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(34069+se,ye,Ue,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(34069+se,ye,0,0,Ce.width,Ce.height,Ee,ke,Ce.data):t.texImage2D(34069+se,ye,Ue,Ce.width,Ce.height,0,Ee,ke,Ce.data)}}}else{G=C.mipmaps,Ze&&Ke&&(G.length>0&&pt++,t.texStorage2D(34067,pt,Ue,j[0].width,j[0].height));for(let se=0;se<6;se++)if(k){Ze?t.texSubImage2D(34069+se,0,0,0,j[se].width,j[se].height,Ee,ke,j[se].data):t.texImage2D(34069+se,0,Ue,j[se].width,j[se].height,0,Ee,ke,j[se].data);for(let ye=0;ye<G.length;ye++){const Oe=G[ye].image[se].image;Ze?t.texSubImage2D(34069+se,ye+1,0,0,Oe.width,Oe.height,Ee,ke,Oe.data):t.texImage2D(34069+se,ye+1,Ue,Oe.width,Oe.height,0,Ee,ke,Oe.data)}}else{Ze?t.texSubImage2D(34069+se,0,0,0,Ee,ke,j[se]):t.texImage2D(34069+se,0,Ue,Ee,ke,j[se]);for(let ye=0;ye<G.length;ye++){const Ce=G[ye];Ze?t.texSubImage2D(34069+se,ye+1,0,0,Ee,ke,Ce.image[se]):t.texImage2D(34069+se,ye+1,Ue,Ee,ke,Ce.image[se])}}}h(C,Re)&&X(34067),Le.__version=Me.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Ne(N,C,ne,_e,Me){const Le=r.convert(ne.format,ne.encoding),We=r.convert(ne.type),k=A(ne.internalFormat,Le,We,ne.encoding);n.get(C).__hasExternalTextures||(Me===32879||Me===35866?t.texImage3D(Me,0,k,C.width,C.height,C.depth,0,Le,We,null):t.texImage2D(Me,0,k,C.width,C.height,0,Le,We,null)),t.bindFramebuffer(36160,N),vt(C)?_.framebufferTexture2DMultisampleEXT(36160,_e,Me,n.get(ne).__webglTexture,0,kt(C)):(Me===3553||Me>=34069&&Me<=34074)&&l.framebufferTexture2D(36160,_e,Me,n.get(ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function xt(N,C,ne){if(l.bindRenderbuffer(36161,N),C.depthBuffer&&!C.stencilBuffer){let _e=33189;if(ne||vt(C)){const Me=C.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Si?_e=36012:Me.type===Gi&&(_e=33190));const Le=kt(C);vt(C)?_.renderbufferStorageMultisampleEXT(36161,Le,_e,C.width,C.height):l.renderbufferStorageMultisample(36161,Le,_e,C.width,C.height)}else l.renderbufferStorage(36161,_e,C.width,C.height);l.framebufferRenderbuffer(36160,36096,36161,N)}else if(C.depthBuffer&&C.stencilBuffer){const _e=kt(C);ne&&vt(C)===!1?l.renderbufferStorageMultisample(36161,_e,35056,C.width,C.height):vt(C)?_.renderbufferStorageMultisampleEXT(36161,_e,35056,C.width,C.height):l.renderbufferStorage(36161,34041,C.width,C.height),l.framebufferRenderbuffer(36160,33306,36161,N)}else{const _e=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Me=0;Me<_e.length;Me++){const Le=_e[Me],We=r.convert(Le.format,Le.encoding),k=r.convert(Le.type),j=A(Le.internalFormat,We,k,Le.encoding),Pe=kt(C);ne&&vt(C)===!1?l.renderbufferStorageMultisample(36161,Pe,j,C.width,C.height):vt(C)?_.renderbufferStorageMultisampleEXT(36161,Pe,j,C.width,C.height):l.renderbufferStorage(36161,j,C.width,C.height)}}l.bindRenderbuffer(36161,null)}function st(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),te(C.depthTexture,0);const _e=n.get(C.depthTexture).__webglTexture,Me=kt(C);if(C.depthTexture.format===qi)vt(C)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,_e,0,Me):l.framebufferTexture2D(36160,36096,3553,_e,0);else if(C.depthTexture.format===Rr)vt(C)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,_e,0,Me):l.framebufferTexture2D(36160,33306,3553,_e,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const C=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");st(C.__webglFramebuffer,N)}else if(ne){C.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(36160,C.__webglFramebuffer[_e]),C.__webglDepthbuffer[_e]=l.createRenderbuffer(),xt(C.__webglDepthbuffer[_e],N,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=l.createRenderbuffer(),xt(C.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function Lt(N,C,ne){const _e=n.get(N);C!==void 0&&Ne(_e.__webglFramebuffer,N,N.texture,36064,3553),ne!==void 0&&Fe(N)}function Pt(N){const C=N.texture,ne=n.get(N),_e=n.get(C);N.addEventListener("dispose",Se),N.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=l.createTexture()),_e.__version=C.version,o.memory.textures++);const Me=N.isWebGLCubeRenderTarget===!0,Le=N.isWebGLMultipleRenderTargets===!0,We=R(N)||a;if(Me){ne.__webglFramebuffer=[];for(let k=0;k<6;k++)ne.__webglFramebuffer[k]=l.createFramebuffer()}else{if(ne.__webglFramebuffer=l.createFramebuffer(),Le)if(i.drawBuffers){const k=N.texture;for(let j=0,Pe=k.length;j<Pe;j++){const Re=n.get(k[j]);Re.__webglTexture===void 0&&(Re.__webglTexture=l.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&vt(N)===!1){const k=Le?C:[C];ne.__webglMultisampledFramebuffer=l.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer);for(let j=0;j<k.length;j++){const Pe=k[j];ne.__webglColorRenderbuffer[j]=l.createRenderbuffer(),l.bindRenderbuffer(36161,ne.__webglColorRenderbuffer[j]);const Re=r.convert(Pe.format,Pe.encoding),Ee=r.convert(Pe.type),ke=A(Pe.internalFormat,Re,Ee,Pe.encoding,N.isXRRenderTarget===!0),Ue=kt(N);l.renderbufferStorageMultisample(36161,Ue,ke,N.width,N.height),l.framebufferRenderbuffer(36160,36064+j,36161,ne.__webglColorRenderbuffer[j])}l.bindRenderbuffer(36161,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=l.createRenderbuffer(),xt(ne.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(Me){t.bindTexture(34067,_e.__webglTexture),fe(34067,C,We);for(let k=0;k<6;k++)Ne(ne.__webglFramebuffer[k],N,C,36064,34069+k);h(C,We)&&X(34067),t.unbindTexture()}else if(Le){const k=N.texture;for(let j=0,Pe=k.length;j<Pe;j++){const Re=k[j],Ee=n.get(Re);t.bindTexture(3553,Ee.__webglTexture),fe(3553,Re,We),Ne(ne.__webglFramebuffer,N,Re,36064+j,3553),h(Re,We)&&X(3553)}t.unbindTexture()}else{let k=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?k=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,_e.__webglTexture),fe(k,C,We),Ne(ne.__webglFramebuffer,N,C,36064,k),h(C,We)&&X(k),t.unbindTexture()}N.depthBuffer&&Fe(N)}function De(N){const C=R(N)||a,ne=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let _e=0,Me=ne.length;_e<Me;_e++){const Le=ne[_e];if(h(Le,C)){const We=N.isWebGLCubeRenderTarget?34067:3553,k=n.get(Le).__webglTexture;t.bindTexture(We,k),X(We),t.unbindTexture()}}}function St(N){if(a&&N.samples>0&&vt(N)===!1){const C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ne=N.width,_e=N.height;let Me=16384;const Le=[],We=N.stencilBuffer?33306:36096,k=n.get(N),j=N.isWebGLMultipleRenderTargets===!0;if(j)for(let Pe=0;Pe<C.length;Pe++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Pe,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Pe,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let Pe=0;Pe<C.length;Pe++){Le.push(36064+Pe),N.depthBuffer&&Le.push(We);const Re=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(Re===!1&&(N.depthBuffer&&(Me|=256),N.stencilBuffer&&(Me|=1024)),j&&l.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[Pe]),Re===!0&&(l.invalidateFramebuffer(36008,[We]),l.invalidateFramebuffer(36009,[We])),j){const Ee=n.get(C[Pe]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,Ee,0)}l.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,Me,9728),y&&l.invalidateFramebuffer(36008,Le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let Pe=0;Pe<C.length;Pe++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Pe,36161,k.__webglColorRenderbuffer[Pe]);const Re=n.get(C[Pe]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Pe,3553,Re,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function kt(N){return Math.min(m,N.samples)}function vt(N){const C=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ln(N){const C=o.render.frame;S.get(N)!==C&&(S.set(N,C),N.update())}function en(N,C){const ne=N.encoding,_e=N.format,Me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===go||ne!==Ji&&(ne===bt?a===!1?e.has("EXT_sRGB")===!0&&_e===Rn?(N.format=go,N.minFilter=dn,N.generateMipmaps=!1):C=Qc.sRGBToLinear(C):(_e!==Rn||Me!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),C}this.allocateTextureUnit=ce,this.resetTextureUnits=ve,this.setTexture2D=te,this.setTexture2DArray=xe,this.setTexture3D=be,this.setTextureCube=ge,this.rebindTextures=Lt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=vt}function f_(l,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Zi)return 5121;if(r===Vf)return 32819;if(r===Wf)return 32820;if(r===Bf)return 5120;if(r===Hf)return 5122;if(r===Yc)return 5123;if(r===Gf)return 5124;if(r===Gi)return 5125;if(r===Si)return 5126;if(r===ls)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jf)return 6406;if(r===Rn)return 6408;if(r===Xf)return 6409;if(r===Yf)return 6410;if(r===qi)return 6402;if(r===Rr)return 34041;if(r===Kf)return 6403;if(r===qf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===go)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$f)return 36244;if(r===Zf)return 33319;if(r===Jf)return 33320;if(r===Qf)return 36249;if(r===Aa||r===Ca||r===La||r===Ra)if(o===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cl||r===ul||r===fl||r===hl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ul)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dl||r===pl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===dl)return o===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===bl||r===Ml||r===Sl||r===wl||r===Tl||r===El||r===Al||r===Cl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ml)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_l)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ml)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===El)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Al)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ll)return o===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Tr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):l[r]!==void 0?l[r]:null}return{convert:i}}class h_ extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(f.joints[v.jointName]===void 0){const I=new ji;I.matrixAutoUpdate=!1,I.visible=!1,f.joints[v.jointName]=I,f.add(I)}const w=f.joints[v.jointName];x!==null&&(w.matrix.fromArray(x.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.jointRadius=x.radius),w.visible=x!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],_=p.position.distanceTo(m.position),y=.02,S=.005;f.inputState.pinching&&_>y+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=y-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return a!==null&&(a.visible=i!==null),u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),this}}class p_ extends on{constructor(e,t,n,i,r,o,a,u,f,p){if(p=p!==void 0?p:qi,p!==qi&&p!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===qi&&(n=Gi),n===void 0&&p===Rr&&(n=Tr),super(null,i,r,o,a,u,p,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=u!==void 0?u:$t,this.flipY=!1,this.generateMipmaps=!1}}class m_ extends nr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",u=null,f=null,p=null,m=null,_=null,y=null;const S=t.getContextAttributes();let v=null,x=null;const w=[],I=[],P=new an;P.layers.enable(1),P.viewport=new Ct;const R=new an;R.layers.enable(2),R.viewport=new Ct;const L=[P,R],h=new h_;h.layers.enable(1),h.layers.enable(2);let X=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=w[$];return te===void 0&&(te=new io,w[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=w[$];return te===void 0&&(te=new io,w[$]=te),te.getGripSpace()},this.getHand=function($){let te=w[$];return te===void 0&&(te=new io,w[$]=te),te.getHandSpace()};function z($){const te=I.indexOf($.inputSource);if(te===-1)return;const xe=w[te];xe!==void 0&&xe.dispatchEvent({type:$.type,data:$.inputSource})}function J(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",pe);for(let $=0;$<w.length;$++){const te=I[$];te!==null&&(I[$]=null,w[$].disconnect(te))}X=null,A=null,e.setRenderTarget(v),_=null,m=null,p=null,i=null,x=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",J),i.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:i.renderState.layers===void 0?S.antialias:!0,alpha:S.alpha,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:_}),x=new Qi(_.framebufferWidth,_.framebufferHeight,{format:Rn,type:Zi,encoding:e.outputEncoding,stencilBuffer:S.stencil})}else{let te=null,xe=null,be=null;S.depth&&(be=S.stencil?35056:33190,te=S.stencil?Rr:qi,xe=S.stencil?Tr:Gi);const ge={colorFormat:32856,depthFormat:be,scaleFactor:r};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(ge),i.updateRenderState({layers:[m]}),x=new Qi(m.textureWidth,m.textureHeight,{format:Rn,type:Zi,depthTexture:new p_(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,encoding:e.outputEncoding,samples:S.antialias?4:0});const Ie=e.properties.get(x);Ie.__ignoreDepthValues=m.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function pe($){for(let te=0;te<$.removed.length;te++){const xe=$.removed[te],be=I.indexOf(xe);be>=0&&(I[be]=null,w[be].dispatchEvent({type:"disconnected",data:xe}))}for(let te=0;te<$.added.length;te++){const xe=$.added[te];let be=I.indexOf(xe);if(be===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=I.length){I.push(xe),be=Ie;break}else if(I[Ie]===null){I[Ie]=xe,be=Ie;break}if(be===-1)break}const ge=w[be];ge&&ge.dispatchEvent({type:"connected",data:xe})}}const Se=new H,Q=new H;function Y($,te,xe){Se.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const be=Se.distanceTo(Q),ge=te.projectionMatrix.elements,Ie=xe.projectionMatrix.elements,$e=ge[14]/(ge[10]-1),fe=ge[14]/(ge[10]+1),ht=(ge[9]+1)/ge[5],je=(ge[9]-1)/ge[5],Ge=(ge[8]-1)/ge[0],Ne=(Ie[8]+1)/Ie[0],xt=$e*Ge,st=$e*Ne,Fe=be/(-Ge+Ne),Lt=Fe*-Ge;te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(Fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const Pt=$e+Fe,De=fe+Fe,St=xt-Lt,kt=st+(be-Lt),vt=ht*fe/De*Pt,ln=je*fe/De*Pt;$.projectionMatrix.makePerspective(St,kt,vt,ln,Pt,De)}function oe($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;h.near=R.near=P.near=$.near,h.far=R.far=P.far=$.far,(X!==h.near||A!==h.far)&&(i.updateRenderState({depthNear:h.near,depthFar:h.far}),X=h.near,A=h.far);const te=$.parent,xe=h.cameras;oe(h,te);for(let ge=0;ge<xe.length;ge++)oe(xe[ge],te);h.matrixWorld.decompose(h.position,h.quaternion,h.scale),$.matrix.copy(h.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const be=$.children;for(let ge=0,Ie=be.length;ge<Ie;ge++)be[ge].updateMatrixWorld(!0);xe.length===2?Y(h,P,R):h.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return h},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function($){m!==null&&(m.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)};let me=null;function ve($,te){if(f=te.getViewerPose(u||o),y=te,f!==null){const xe=f.views;_!==null&&(e.setRenderTargetFramebuffer(x,_.framebuffer),e.setRenderTarget(x));let be=!1;xe.length!==h.cameras.length&&(h.cameras.length=0,be=!0);for(let ge=0;ge<xe.length;ge++){const Ie=xe[ge];let $e=null;if(_!==null)$e=_.getViewport(Ie);else{const ht=p.getViewSubImage(m,Ie);$e=ht.viewport,ge===0&&(e.setRenderTargetTextures(x,ht.colorTexture,m.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(x))}let fe=L[ge];fe===void 0&&(fe=new an,fe.layers.enable(ge),fe.viewport=new Ct,L[ge]=fe),fe.matrix.fromArray(Ie.transform.matrix),fe.projectionMatrix.fromArray(Ie.projectionMatrix),fe.viewport.set($e.x,$e.y,$e.width,$e.height),ge===0&&h.matrix.copy(fe.matrix),be===!0&&h.cameras.push(fe)}}for(let xe=0;xe<w.length;xe++){const be=I[xe],ge=w[xe];be!==null&&ge!==void 0&&ge.update(be,te,u||o)}me&&me($,te),y=null}const ce=new ou;ce.setAnimationLoop(ve),this.setAnimationLoop=function($){me=$},this.dispose=function(){}}}function g_(l,e){function t(v,x){v.fogColor.value.copy(x.color),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function n(v,x,w,I,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?i(v,x):x.isMeshToonMaterial?(i(v,x),p(v,x)):x.isMeshPhongMaterial?(i(v,x),f(v,x)):x.isMeshStandardMaterial?(i(v,x),m(v,x),x.isMeshPhysicalMaterial&&_(v,x,P)):x.isMeshMatcapMaterial?(i(v,x),y(v,x)):x.isMeshDepthMaterial?i(v,x):x.isMeshDistanceMaterial?(i(v,x),S(v,x)):x.isMeshNormalMaterial?i(v,x):x.isLineBasicMaterial?(r(v,x),x.isLineDashedMaterial&&o(v,x)):x.isPointsMaterial?a(v,x,w,I):x.isSpriteMaterial?u(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function i(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.bumpMap&&(v.bumpMap.value=x.bumpMap,v.bumpScale.value=x.bumpScale,x.side===Pn&&(v.bumpScale.value*=-1)),x.displacementMap&&(v.displacementMap.value=x.displacementMap,v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap),x.normalMap&&(v.normalMap.value=x.normalMap,v.normalScale.value.copy(x.normalScale),x.side===Pn&&v.normalScale.value.negate()),x.specularMap&&(v.specularMap.value=x.specularMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const w=e.get(x).envMap;if(w&&(v.envMap.value=w,v.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap){v.lightMap.value=x.lightMap;const R=l.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=x.lightMapIntensity*R}x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity);let I;x.map?I=x.map:x.specularMap?I=x.specularMap:x.displacementMap?I=x.displacementMap:x.normalMap?I=x.normalMap:x.bumpMap?I=x.bumpMap:x.roughnessMap?I=x.roughnessMap:x.metalnessMap?I=x.metalnessMap:x.alphaMap?I=x.alphaMap:x.emissiveMap?I=x.emissiveMap:x.clearcoatMap?I=x.clearcoatMap:x.clearcoatNormalMap?I=x.clearcoatNormalMap:x.clearcoatRoughnessMap?I=x.clearcoatRoughnessMap:x.iridescenceMap?I=x.iridescenceMap:x.iridescenceThicknessMap?I=x.iridescenceThicknessMap:x.specularIntensityMap?I=x.specularIntensityMap:x.specularColorMap?I=x.specularColorMap:x.transmissionMap?I=x.transmissionMap:x.thicknessMap?I=x.thicknessMap:x.sheenColorMap?I=x.sheenColorMap:x.sheenRoughnessMap&&(I=x.sheenRoughnessMap),I!==void 0&&(I.isWebGLRenderTarget&&(I=I.texture),I.matrixAutoUpdate===!0&&I.updateMatrix(),v.uvTransform.value.copy(I.matrix));let P;x.aoMap?P=x.aoMap:x.lightMap&&(P=x.lightMap),P!==void 0&&(P.isWebGLRenderTarget&&(P=P.texture),P.matrixAutoUpdate===!0&&P.updateMatrix(),v.uv2Transform.value.copy(P.matrix))}function r(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity}function o(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function a(v,x,w,I){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*w,v.scale.value=I*.5,x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);let P;x.map?P=x.map:x.alphaMap&&(P=x.alphaMap),P!==void 0&&(P.matrixAutoUpdate===!0&&P.updateMatrix(),v.uvTransform.value.copy(P.matrix))}function u(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);let w;x.map?w=x.map:x.alphaMap&&(w=x.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),v.uvTransform.value.copy(w.matrix))}function f(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function p(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function m(v,x){v.roughness.value=x.roughness,v.metalness.value=x.metalness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap),e.get(x).envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function _(v,x,w){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap)),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),v.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===Pn&&v.clearcoatNormalScale.value.negate())),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap)),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=w.texture,v.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap)}function y(v,x){x.matcap&&(v.matcap.value=x.matcap)}function S(v,x){v.referencePosition.value.copy(x.referencePosition),v.nearDistance.value=x.nearDistance,v.farDistance.value=x.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function __(l,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?l.getParameter(35375):0;function u(I,P){const R=P.program;n.uniformBlockBinding(I,R)}function f(I,P){let R=i[I.id];R===void 0&&(S(I),R=p(I),i[I.id]=R,I.addEventListener("dispose",x));const L=P.program;n.updateUBOMapping(I,L);const h=e.render.frame;r[I.id]!==h&&(_(I),r[I.id]=h)}function p(I){const P=m();I.__bindingPointIndex=P;const R=l.createBuffer(),L=I.__size,h=I.usage;return l.bindBuffer(35345,R),l.bufferData(35345,L,h),l.bindBuffer(35345,null),l.bindBufferBase(35345,P,R),R}function m(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const P=i[I.id],R=I.uniforms,L=I.__cache;l.bindBuffer(35345,P);for(let h=0,X=R.length;h<X;h++){const A=R[h];if(y(A,h,L)===!0){const z=A.value,J=A.__offset;typeof z=="number"?(A.__data[0]=z,l.bufferSubData(35345,J,A.__data)):(A.value.isMatrix3?(A.__data[0]=A.value.elements[0],A.__data[1]=A.value.elements[1],A.__data[2]=A.value.elements[2],A.__data[3]=A.value.elements[0],A.__data[4]=A.value.elements[3],A.__data[5]=A.value.elements[4],A.__data[6]=A.value.elements[5],A.__data[7]=A.value.elements[0],A.__data[8]=A.value.elements[6],A.__data[9]=A.value.elements[7],A.__data[10]=A.value.elements[8],A.__data[11]=A.value.elements[0]):z.toArray(A.__data),l.bufferSubData(35345,J,A.__data))}}l.bindBuffer(35345,null)}function y(I,P,R){const L=I.value;if(R[P]===void 0)return typeof L=="number"?R[P]=L:R[P]=L.clone(),!0;if(typeof L=="number"){if(R[P]!==L)return R[P]=L,!0}else{const h=R[P];if(h.equals(L)===!1)return h.copy(L),!0}return!1}function S(I){const P=I.uniforms;let R=0;const L=16;let h=0;for(let X=0,A=P.length;X<A;X++){const z=P[X],J=v(z);if(z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=R,X>0){h=R%L;const pe=L-h;h!==0&&pe-J.boundary<0&&(R+=L-h,z.__offset=R)}R+=J.storage}return h=R%L,h>0&&(R+=L-h),I.__size=R,I.__cache={},this}function v(I){const P=I.value,R={boundary:0,storage:0};return typeof P=="number"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function x(I){const P=I.target;P.removeEventListener("dispose",x);const R=o.indexOf(P.__bindingPointIndex);o.splice(R,1),l.deleteBuffer(i[P.id]),delete i[P.id],delete r[P.id]}function w(){for(const I in i)l.deleteBuffer(i[I]);o=[],i={},r={}}return{bind:u,update:f,dispose:w}}function x_(){const l=fs("canvas");return l.style.display="block",l}function hu(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:x_(),t=l.context!==void 0?l.context:null,n=l.depth!==void 0?l.depth:!0,i=l.stencil!==void 0?l.stencil:!0,r=l.antialias!==void 0?l.antialias:!1,o=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,a=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,u=l.powerPreference!==void 0?l.powerPreference:"default",f=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=l.alpha!==void 0?l.alpha:!1;let m=null,_=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ji,this.physicallyCorrectLights=!1,this.toneMapping=oi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let x=!1,w=0,I=0,P=null,R=-1,L=null;const h=new Ct,X=new Ct;let A=null,z=e.width,J=e.height,pe=1,Se=null,Q=null;const Y=new Ct(0,0,z,J),oe=new Ct(0,0,z,J);let me=!1;const ve=new Ao;let ce=!1,$=!1,te=null;const xe=new ft,be=new tt,ge=new H,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return P===null?pe:1}let fe=t;function ht(D,K){for(let re=0;re<D.length;re++){const q=D[re],le=e.getContext(q,K);if(le!==null)return le}return null}try{const D={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${So}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",Ze,!1),fe===null){const K=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&K.shift(),fe=ht(K,D),fe===null)throw ht(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}fe.getShaderPrecisionFormat===void 0&&(fe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let je,Ge,Ne,xt,st,Fe,Lt,Pt,De,St,kt,vt,ln,en,N,C,ne,_e,Me,Le,We,k,j,Pe;function Re(){je=new Lm(fe),Ge=new Sm(fe,je,l),je.init(Ge),k=new f_(fe,je,Ge),Ne=new c_(fe,je,Ge),xt=new Pm,st=new Kg,Fe=new u_(fe,je,Ne,st,Ge,k,xt),Lt=new Tm(v),Pt=new Cm(v),De=new Hh(fe,Ge),j=new bm(fe,je,De,Ge),St=new Rm(fe,De,xt,j),kt=new Fm(fe,St,De,xt),Me=new Om(fe,Ge,Fe),C=new wm(st),vt=new Yg(v,Lt,Pt,je,Ge,j,C),ln=new g_(v,st),en=new Zg,N=new i_(je,Ge),_e=new ym(v,Lt,Pt,Ne,kt,p,o),ne=new l_(v,kt,Ge),Pe=new __(fe,xt,Ge,Ne),Le=new Mm(fe,je,xt,Ge),We=new Dm(fe,je,xt,Ge),xt.programs=vt.programs,v.capabilities=Ge,v.extensions=je,v.properties=st,v.renderLists=en,v.shadowMap=ne,v.state=Ne,v.info=xt}Re();const Ee=new m_(v,fe);this.xr=Ee,this.getContext=function(){return fe},this.getContextAttributes=function(){return fe.getContextAttributes()},this.forceContextLoss=function(){const D=je.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=je.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(D){D!==void 0&&(pe=D,this.setSize(z,J,!1))},this.getSize=function(D){return D.set(z,J)},this.setSize=function(D,K,re){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=D,J=K,e.width=Math.floor(D*pe),e.height=Math.floor(K*pe),re!==!1&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(z*pe,J*pe).floor()},this.setDrawingBufferSize=function(D,K,re){z=D,J=K,pe=re,e.width=Math.floor(D*re),e.height=Math.floor(K*re),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(h)},this.getViewport=function(D){return D.copy(Y)},this.setViewport=function(D,K,re,q){D.isVector4?Y.set(D.x,D.y,D.z,D.w):Y.set(D,K,re,q),Ne.viewport(h.copy(Y).multiplyScalar(pe).floor())},this.getScissor=function(D){return D.copy(oe)},this.setScissor=function(D,K,re,q){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,K,re,q),Ne.scissor(X.copy(oe).multiplyScalar(pe).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(D){Ne.setScissorTest(me=D)},this.setOpaqueSort=function(D){Se=D},this.setTransparentSort=function(D){Q=D},this.getClearColor=function(D){return D.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(D=!0,K=!0,re=!0){let q=0;D&&(q|=16384),K&&(q|=256),re&&(q|=1024),fe.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",Ze,!1),en.dispose(),N.dispose(),st.dispose(),Lt.dispose(),Pt.dispose(),kt.dispose(),j.dispose(),Pe.dispose(),vt.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ce),Ee.removeEventListener("sessionend",Oe),te&&(te.dispose(),te=null),mt.stop()};function ke(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const D=xt.autoReset,K=ne.enabled,re=ne.autoUpdate,q=ne.needsUpdate,le=ne.type;Re(),xt.autoReset=D,ne.enabled=K,ne.autoUpdate=re,ne.needsUpdate=q,ne.type=le}function Ze(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ke(D){const K=D.target;K.removeEventListener("dispose",Ke),pt(K)}function pt(D){G(D),st.remove(D)}function G(D){const K=st.get(D).programs;K!==void 0&&(K.forEach(function(re){vt.releaseProgram(re)}),D.isShaderMaterial&&vt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,re,q,le,He){K===null&&(K=Ie);const Qe=le.isMesh&&le.matrixWorld.determinant()<0,at=ua(D,K,re,q,le);Ne.setMaterial(q,Qe);let it=re.index;const gt=re.attributes.position;if(it===null){if(gt===void 0||gt.count===0)return}else if(it.count===0)return;let rt=1;q.wireframe===!0&&(it=St.getWireframeAttribute(re),rt=2),j.setup(le,q,at,re,it);let ut,Dt=Le;it!==null&&(ut=De.get(it),Dt=We,Dt.setIndex(ut));const Vn=it!==null?it.count:gt.count,Yn=re.drawRange.start*rt,ci=re.drawRange.count*rt,un=He!==null?He.start*rt:0,_t=He!==null?He.count*rt:1/0,ui=Math.max(Yn,un),Ot=Math.min(Vn,Yn+ci,un+_t)-1,tn=Math.max(0,Ot-ui+1);if(tn!==0){if(le.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*$e()),Dt.setMode(1)):Dt.setMode(4);else if(le.isLine){let Sn=q.linewidth;Sn===void 0&&(Sn=1),Ne.setLineWidth(Sn*$e()),le.isLineSegments?Dt.setMode(1):le.isLineLoop?Dt.setMode(2):Dt.setMode(3)}else le.isPoints?Dt.setMode(0):le.isSprite&&Dt.setMode(4);if(le.isInstancedMesh)Dt.renderInstances(ui,tn,le.count);else if(re.isInstancedBufferGeometry){const Sn=Math.min(re.instanceCount,re._maxInstanceCount);Dt.renderInstances(ui,tn,Sn)}else Dt.render(ui,tn)}},this.compile=function(D,K){function re(q,le,He){q.transparent===!0&&q.side===si?(q.side=Pn,q.needsUpdate=!0,cn(q,le,He),q.side=$i,q.needsUpdate=!0,cn(q,le,He),q.side=si):cn(q,le,He)}_=N.get(D),_.init(),S.push(_),D.traverseVisible(function(q){q.isLight&&q.layers.test(K.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights(v.physicallyCorrectLights),D.traverse(function(q){const le=q.material;if(le)if(Array.isArray(le))for(let He=0;He<le.length;He++){const Qe=le[He];re(Qe,D,q)}else re(le,D,q)}),S.pop(),_=null};let se=null;function ye(D){se&&se(D)}function Ce(){mt.stop()}function Oe(){mt.start()}const mt=new ou;mt.setAnimationLoop(ye),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(D){se=D,Ee.setAnimationLoop(D),D===null?mt.stop():mt.start()},Ee.addEventListener("sessionstart",Ce),Ee.addEventListener("sessionend",Oe),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(K),K=Ee.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,K,P),_=N.get(D,S.length),_.init(),S.push(_),xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ve.setFromProjectionMatrix(xe),$=this.localClippingEnabled,ce=C.init(this.clippingPlanes,$,K),m=en.get(D,y.length),m.init(),y.push(m),zt(D,K,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Se,Q),ce===!0&&C.beginShadows();const re=_.state.shadowsArray;if(ne.render(re,D,K),ce===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(m,D),_.setupLights(v.physicallyCorrectLights),K.isArrayCamera){const q=K.cameras;for(let le=0,He=q.length;le<He;le++){const Qe=q[le];Bt(m,D,Qe,Qe.viewport)}}else Bt(m,D,K);P!==null&&(Fe.updateMultisampleRenderTarget(P),Fe.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(v,D,K),j.resetDefaultState(),R=-1,L=null,S.pop(),S.length>0?_=S[S.length-1]:_=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function zt(D,K,re,q){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ve.intersectsSprite(D)){q&&ge.setFromMatrixPosition(D.matrixWorld).applyMatrix4(xe);const Qe=kt.update(D),at=D.material;at.visible&&m.push(D,Qe,at,re,ge.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==xt.render.frame&&(D.skeleton.update(),D.skeleton.frame=xt.render.frame),!D.frustumCulled||ve.intersectsObject(D))){q&&ge.setFromMatrixPosition(D.matrixWorld).applyMatrix4(xe);const Qe=kt.update(D),at=D.material;if(Array.isArray(at)){const it=Qe.groups;for(let gt=0,rt=it.length;gt<rt;gt++){const ut=it[gt],Dt=at[ut.materialIndex];Dt&&Dt.visible&&m.push(D,Qe,Dt,re,ge.z,ut)}}else at.visible&&m.push(D,Qe,at,re,ge.z,null)}}const He=D.children;for(let Qe=0,at=He.length;Qe<at;Qe++)zt(He[Qe],K,re,q)}function Bt(D,K,re,q){const le=D.opaque,He=D.transmissive,Qe=D.transparent;_.setupLightsView(re),He.length>0&&Mn(le,K,re),q&&Ne.viewport(h.copy(q)),le.length>0&&Rt(le,K,re),He.length>0&&Rt(He,K,re),Qe.length>0&&Rt(Qe,K,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Mn(D,K,re){const q=Ge.isWebGL2;te===null&&(te=new Qi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?ls:Zi,minFilter:Or,samples:q&&r===!0?4:0})),v.getDrawingBufferSize(be),q?te.setSize(be.x,be.y):te.setSize(ta(be.x),ta(be.y));const le=v.getRenderTarget();v.setRenderTarget(te),v.clear();const He=v.toneMapping;v.toneMapping=oi,Rt(D,K,re),v.toneMapping=He,Fe.updateMultisampleRenderTarget(te),Fe.updateRenderTargetMipmap(te),v.setRenderTarget(le)}function Rt(D,K,re){const q=K.isScene===!0?K.overrideMaterial:null;for(let le=0,He=D.length;le<He;le++){const Qe=D[le],at=Qe.object,it=Qe.geometry,gt=q===null?Qe.material:q,rt=Qe.group;at.layers.test(re.layers)&&In(at,K,re,it,gt,rt)}}function In(D,K,re,q,le,He){D.onBeforeRender(v,K,re,q,le,He),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),le.onBeforeRender(v,K,re,q,D,He),le.transparent===!0&&le.side===si?(le.side=Pn,le.needsUpdate=!0,v.renderBufferDirect(re,K,q,le,D,He),le.side=$i,le.needsUpdate=!0,v.renderBufferDirect(re,K,q,le,D,He),le.side=si):v.renderBufferDirect(re,K,q,le,D,He),D.onAfterRender(v,K,re,q,le,He)}function cn(D,K,re){K.isScene!==!0&&(K=Ie);const q=st.get(D),le=_.state.lights,He=_.state.shadowsArray,Qe=le.state.version,at=vt.getParameters(D,le.state,He,K,re),it=vt.getProgramCacheKey(at);let gt=q.programs;q.environment=D.isMeshStandardMaterial?K.environment:null,q.fog=K.fog,q.envMap=(D.isMeshStandardMaterial?Pt:Lt).get(D.envMap||q.environment),gt===void 0&&(D.addEventListener("dispose",Ke),gt=new Map,q.programs=gt);let rt=gt.get(it);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===Qe)return Hr(D,at),rt}else at.uniforms=vt.getUniforms(D),D.onBuild(re,at,v),D.onBeforeCompile(at,v),rt=vt.acquireProgram(at,it),gt.set(it,rt),q.uniforms=at.uniforms;const ut=q.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ut.clippingPlanes=C.uniform),Hr(D,at),q.needsLights=vs(D),q.lightsStateVersion=Qe,q.needsLights&&(ut.ambientLightColor.value=le.state.ambient,ut.lightProbe.value=le.state.probe,ut.directionalLights.value=le.state.directional,ut.directionalLightShadows.value=le.state.directionalShadow,ut.spotLights.value=le.state.spot,ut.spotLightShadows.value=le.state.spotShadow,ut.rectAreaLights.value=le.state.rectArea,ut.ltc_1.value=le.state.rectAreaLTC1,ut.ltc_2.value=le.state.rectAreaLTC2,ut.pointLights.value=le.state.point,ut.pointLightShadows.value=le.state.pointShadow,ut.hemisphereLights.value=le.state.hemi,ut.directionalShadowMap.value=le.state.directionalShadowMap,ut.directionalShadowMatrix.value=le.state.directionalShadowMatrix,ut.spotShadowMap.value=le.state.spotShadowMap,ut.spotLightMatrix.value=le.state.spotLightMatrix,ut.spotLightMap.value=le.state.spotLightMap,ut.pointShadowMap.value=le.state.pointShadowMap,ut.pointShadowMatrix.value=le.state.pointShadowMatrix);const Dt=rt.getUniforms(),Vn=Qs.seqWithValue(Dt.seq,ut);return q.currentProgram=rt,q.uniformsList=Vn,rt}function Hr(D,K){const re=st.get(D);re.outputEncoding=K.outputEncoding,re.instancing=K.instancing,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function ua(D,K,re,q,le){K.isScene!==!0&&(K=Ie),Fe.resetTextureUnits();const He=K.fog,Qe=q.isMeshStandardMaterial?K.environment:null,at=P===null?v.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:Ji,it=(q.isMeshStandardMaterial?Pt:Lt).get(q.envMap||Qe),gt=q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!q.normalMap&&!!re.attributes.tangent,ut=!!re.morphAttributes.position,Dt=!!re.morphAttributes.normal,Vn=!!re.morphAttributes.color,Yn=q.toneMapped?v.toneMapping:oi,ci=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,un=ci!==void 0?ci.length:0,_t=st.get(q),ui=_.state.lights;if(ce===!0&&($===!0||D!==L)){const nn=D===L&&q.id===R;C.setState(q,D,nn)}let Ot=!1;q.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==ui.state.version||_t.outputEncoding!==at||le.isInstancedMesh&&_t.instancing===!1||!le.isInstancedMesh&&_t.instancing===!0||le.isSkinnedMesh&&_t.skinning===!1||!le.isSkinnedMesh&&_t.skinning===!0||_t.envMap!==it||q.fog===!0&&_t.fog!==He||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==C.numPlanes||_t.numIntersection!==C.numIntersection)||_t.vertexAlphas!==gt||_t.vertexTangents!==rt||_t.morphTargets!==ut||_t.morphNormals!==Dt||_t.morphColors!==Vn||_t.toneMapping!==Yn||Ge.isWebGL2===!0&&_t.morphTargetsCount!==un)&&(Ot=!0):(Ot=!0,_t.__version=q.version);let tn=_t.currentProgram;Ot===!0&&(tn=cn(q,K,le));let Sn=!1,fi=!1,Yt=!1;const Ut=tn.getUniforms(),wn=_t.uniforms;if(Ne.useProgram(tn.program)&&(Sn=!0,fi=!0,Yt=!0),q.id!==R&&(R=q.id,fi=!0),Sn||L!==D){if(Ut.setValue(fe,"projectionMatrix",D.projectionMatrix),Ge.logarithmicDepthBuffer&&Ut.setValue(fe,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),L!==D&&(L=D,fi=!0,Yt=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const nn=Ut.map.cameraPosition;nn!==void 0&&nn.setValue(fe,ge.setFromMatrixPosition(D.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(fe,"isOrthographic",D.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||le.isSkinnedMesh)&&Ut.setValue(fe,"viewMatrix",D.matrixWorldInverse)}if(le.isSkinnedMesh){Ut.setOptional(fe,le,"bindMatrix"),Ut.setOptional(fe,le,"bindMatrixInverse");const nn=le.skeleton;nn&&(Ge.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ut.setValue(fe,"boneTexture",nn.boneTexture,Fe),Ut.setValue(fe,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gr=re.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&Ge.isWebGL2===!0)&&Me.update(le,re,q,tn),(fi||_t.receiveShadow!==le.receiveShadow)&&(_t.receiveShadow=le.receiveShadow,Ut.setValue(fe,"receiveShadow",le.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(wn.envMap.value=it,wn.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),fi&&(Ut.setValue(fe,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&fa(wn,Yt),He&&q.fog===!0&&ln.refreshFogUniforms(wn,He),ln.refreshMaterialUniforms(wn,q,pe,J,te),Qs.upload(fe,_t.uniformsList,wn,Fe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qs.upload(fe,_t.uniformsList,wn,Fe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(fe,"center",le.center),Ut.setValue(fe,"modelViewMatrix",le.modelViewMatrix),Ut.setValue(fe,"normalMatrix",le.normalMatrix),Ut.setValue(fe,"modelMatrix",le.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let Ei=0,ys=nn.length;Ei<ys;Ei++)if(Ge.isWebGL2){const Ai=nn[Ei];Pe.update(Ai,tn),Pe.bind(Ai,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function fa(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function vs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,K,re){st.get(D.texture).__webglTexture=K,st.get(D.depthTexture).__webglTexture=re;const q=st.get(D);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=re===void 0,q.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const re=st.get(D);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,re=0){P=D,w=K,I=re;let q=!0,le=null,He=!1,Qe=!1;if(D){const it=st.get(D);it.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(36160,null),q=!1):it.__webglFramebuffer===void 0?Fe.setupRenderTarget(D):it.__hasExternalTextures&&Fe.rebindTextures(D,st.get(D.texture).__webglTexture,st.get(D.depthTexture).__webglTexture);const gt=D.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Qe=!0);const rt=st.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(le=rt[K],He=!0):Ge.isWebGL2&&D.samples>0&&Fe.useMultisampledRTT(D)===!1?le=st.get(D).__webglMultisampledFramebuffer:le=rt,h.copy(D.viewport),X.copy(D.scissor),A=D.scissorTest}else h.copy(Y).multiplyScalar(pe).floor(),X.copy(oe).multiplyScalar(pe).floor(),A=me;if(Ne.bindFramebuffer(36160,le)&&Ge.drawBuffers&&q&&Ne.drawBuffers(D,le),Ne.viewport(h),Ne.scissor(X),Ne.setScissorTest(A),He){const it=st.get(D.texture);fe.framebufferTexture2D(36160,36064,34069+K,it.__webglTexture,re)}else if(Qe){const it=st.get(D.texture),gt=K||0;fe.framebufferTextureLayer(36160,36064,it.__webglTexture,re||0,gt)}R=-1},this.readRenderTargetPixels=function(D,K,re,q,le,He,Qe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=st.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(at=at[Qe]),at){Ne.bindFramebuffer(36160,at);try{const it=D.texture,gt=it.format,rt=it.type;if(gt!==Rn&&k.convert(gt)!==fe.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=rt===ls&&(je.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&je.has("EXT_color_buffer_float"));if(rt!==Zi&&k.convert(rt)!==fe.getParameter(35738)&&!(rt===Si&&(Ge.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-q&&re>=0&&re<=D.height-le&&fe.readPixels(K,re,q,le,k.convert(gt),k.convert(rt),He)}finally{const it=P!==null?st.get(P).__webglFramebuffer:null;Ne.bindFramebuffer(36160,it)}}},this.copyFramebufferToTexture=function(D,K,re=0){const q=Math.pow(2,-re),le=Math.floor(K.image.width*q),He=Math.floor(K.image.height*q);Fe.setTexture2D(K,0),fe.copyTexSubImage2D(3553,re,0,0,D.x,D.y,le,He),Ne.unbindTexture()},this.copyTextureToTexture=function(D,K,re,q=0){const le=K.image.width,He=K.image.height,Qe=k.convert(re.format),at=k.convert(re.type);Fe.setTexture2D(re,0),fe.pixelStorei(37440,re.flipY),fe.pixelStorei(37441,re.premultiplyAlpha),fe.pixelStorei(3317,re.unpackAlignment),K.isDataTexture?fe.texSubImage2D(3553,q,D.x,D.y,le,He,Qe,at,K.image.data):K.isCompressedTexture?fe.compressedTexSubImage2D(3553,q,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,Qe,K.mipmaps[0].data):fe.texSubImage2D(3553,q,D.x,D.y,Qe,at,K.image),q===0&&re.generateMipmaps&&fe.generateMipmap(3553),Ne.unbindTexture()},this.copyTextureToTexture3D=function(D,K,re,q,le=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=D.max.x-D.min.x+1,Qe=D.max.y-D.min.y+1,at=D.max.z-D.min.z+1,it=k.convert(q.format),gt=k.convert(q.type);let rt;if(q.isData3DTexture)Fe.setTexture3D(q,0),rt=32879;else if(q.isDataArrayTexture)Fe.setTexture2DArray(q,0),rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}fe.pixelStorei(37440,q.flipY),fe.pixelStorei(37441,q.premultiplyAlpha),fe.pixelStorei(3317,q.unpackAlignment);const ut=fe.getParameter(3314),Dt=fe.getParameter(32878),Vn=fe.getParameter(3316),Yn=fe.getParameter(3315),ci=fe.getParameter(32877),un=re.isCompressedTexture?re.mipmaps[0]:re.image;fe.pixelStorei(3314,un.width),fe.pixelStorei(32878,un.height),fe.pixelStorei(3316,D.min.x),fe.pixelStorei(3315,D.min.y),fe.pixelStorei(32877,D.min.z),re.isDataTexture||re.isData3DTexture?fe.texSubImage3D(rt,le,K.x,K.y,K.z,He,Qe,at,it,gt,un.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),fe.compressedTexSubImage3D(rt,le,K.x,K.y,K.z,He,Qe,at,it,un.data)):fe.texSubImage3D(rt,le,K.x,K.y,K.z,He,Qe,at,it,gt,un),fe.pixelStorei(3314,ut),fe.pixelStorei(32878,Dt),fe.pixelStorei(3316,Vn),fe.pixelStorei(3315,Yn),fe.pixelStorei(32877,ci),le===0&&q.generateMipmaps&&fe.generateMipmap(rt),Ne.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Fe.setTextureCube(D,0):D.isData3DTexture?Fe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Fe.setTexture2DArray(D,0):Fe.setTexture2D(D,0),Ne.unbindTexture()},this.resetState=function(){w=0,I=0,P=null,Ne.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class v_ extends hu{}v_.prototype.isWebGL1Renderer=!0;class Ro{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new Ro(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class y_ extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class b_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new H;class Do{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Do(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dc=new H,pc=new Ct,mc=new Ct,M_=new H,gc=new ft;class S_ extends bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ft,this.bindMatrixInverse=new ft}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;pc.fromBufferAttribute(i.attributes.skinIndex,e),mc.fromBufferAttribute(i.attributes.skinWeight,e),dc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=mc.getComponent(r);if(o!==0){const a=pc.getComponent(r);gc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(M_.copy(dc).applyMatrix4(gc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class du extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class w_ extends on{constructor(e=null,t=1,n=1,i,r,o,a,u,f=$t,p=$t,m,_){super(null,o,a,u,f,p,i,r,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=new ft,T_=new ft;class Po{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:T_;_c.multiplyMatrices(a,t[r]),_c.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=$c(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new w_(t,e,e,Rn,Si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new du),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class xc extends pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vc=new ft,yc=new ft,Xs=[],E_=new ft,es=new bn;class A_ extends bn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,E_)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,vc),yc.multiplyMatrices(n,vc),es.matrixWorld=yc,es.raycast(e,Xs);for(let o=0,a=Xs.length;o<a;o++){const u=Xs[o];u.instanceId=r,u.object=this,t.push(u)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pu extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new H,Mc=new H,Sc=new ft,ro=new Eo,Ys=new Ur;class Io extends Nt{constructor(e=new qn,t=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)bc.fromBufferAttribute(t,i-1),Mc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bc.distanceTo(Mc);e.setAttribute("lineDistance",new li(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;Sc.copy(i).invert(),ro.copy(e.ray).applyMatrix4(Sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,f=new H,p=new H,m=new H,_=new H,y=this.isLineSegments?2:1,S=n.index,x=n.attributes.position;if(S!==null){const w=Math.max(0,o.start),I=Math.min(S.count,o.start+o.count);for(let P=w,R=I-1;P<R;P+=y){const L=S.getX(P),h=S.getX(P+1);if(f.fromBufferAttribute(x,L),p.fromBufferAttribute(x,h),ro.distanceSqToSegment(f,p,_,m)>u)continue;_.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(_);A<e.near||A>e.far||t.push({distance:A,point:m.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}else{const w=Math.max(0,o.start),I=Math.min(x.count,o.start+o.count);for(let P=w,R=I-1;P<R;P+=y){if(f.fromBufferAttribute(x,P),p.fromBufferAttribute(x,P+1),ro.distanceSqToSegment(f,p,_,m)>u)continue;_.applyMatrix4(this.matrixWorld);const h=e.ray.origin.distanceTo(_);h<e.near||h>e.far||t.push({distance:h,point:m.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const wc=new H,Tc=new H;class C_ extends Io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wc.fromBufferAttribute(t,i),Tc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wc.distanceTo(Tc);e.setAttribute("lineDistance",new li(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L_ extends Io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mu extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new ft,vo=new Eo,Ks=new Ur,$s=new H;class R_ extends Nt{constructor(e=new qn,t=new mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;Ec.copy(i).invert(),vo.copy(e.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,f=n.index,m=n.attributes.position;if(f!==null){const _=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let S=_,v=y;S<v;S++){const x=f.getX(S);$s.fromBufferAttribute(m,x),Ac($s,x,u,i,e,t,this)}}else{const _=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let S=_,v=y;S<v;S++)$s.fromBufferAttribute(m,S),Ac($s,S,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ac(l,e,t,n,i,r,o){const a=vo.distanceSqToPoint(l);if(a<t){const u=new H;vo.closestPointToPoint(l,u),u.applyMatrix4(n);const f=i.ray.origin.distanceTo(u);if(f<i.near||f>i.far)return;r.push({distance:f,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:o})}}class aa extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ir extends aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gu extends Gn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function bi(l,e,t){return _u(l)?new l.constructor(l.subarray(e,t!==void 0?t:l.length)):l.slice(e,t)}function Zs(l,e,t){return!l||!t&&l.constructor===e?l:typeof e.BYTES_PER_ELEMENT=="number"?new e(l):Array.prototype.slice.call(l)}function _u(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}function D_(l){function e(i,r){return l[i]-l[r]}const t=l.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cc(l,e,t){const n=l.length,i=new l.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let u=0;u!==e;++u)i[o++]=l[a+u]}return i}function xu(l,e,t,n){let i=1,r=l[0];for(;r!==void 0&&r[n]===void 0;)r=l[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=l[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=l[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=l[i++];while(r!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class P_ extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],u=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,a=2*t-n;break;case Pl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Dl:o=e,u=2*n-t;break;case Pl:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const f=(n-t)*.5,p=this.valueSize;this._weightPrev=f/(t-a),this._weightNext=f/(u-n),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=e*a,f=u-a,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,y=this._weightNext,S=(n-t)/(i-t),v=S*S,x=v*S,w=-_*x+2*_*v-_*S,I=(1+_)*x+(-1.5-2*_)*v+(-.5+_)*S+1,P=(-1-y)*x+(1.5+y)*v+.5*S,R=y*x-y*v;for(let L=0;L!==a;++L)r[L]=w*o[p+L]+I*o[f+L]+P*o[u+L]+R*o[m+L];return r}}class I_ extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=e*a,f=u-a,p=(n-t)/(i-t),m=1-p;for(let _=0;_!==a;++_)r[_]=o[f+_]*m+o[u+_]*p;return r}}class N_ extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new N_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new P_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=bi(n,r,o),this.values=bi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const u=n[a];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,u,o),e=!1;break}o=u}if(i!==void 0&&_u(i))for(let a=0,u=i.length;a!==u;++a){const f=i[a];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,f),e=!1;break}}return e}optimize(){const e=bi(this.times),t=bi(this.values),n=this.getValueSize(),i=this.getInterpolation()===Da,r=e.length-1;let o=1;for(let a=1;a<r;++a){let u=!1;const f=e[a],p=e[a+1];if(f!==p&&(a!==1||f!==e[0]))if(i)u=!0;else{const m=a*n,_=m-n,y=m+n;for(let S=0;S!==n;++S){const v=t[m+S];if(v!==t[_+S]||v!==t[y+S]){u=!0;break}}}if(u){if(a!==o){e[o]=e[a];const m=a*n,_=o*n;for(let y=0;y!==n;++y)t[_+y]=t[m+y]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,u=o*n,f=0;f!==n;++f)t[u+f]=t[a+f];++o}return o!==e.length?(this.times=bi(e,0,o),this.values=bi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=bi(this.times,0),t=bi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Dr;class zr extends Xn{}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=cs;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class vu extends Xn{}vu.prototype.ValueTypeName="color";class hs extends Xn{}hs.prototype.ValueTypeName="number";class O_ extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=(n-t)/(i-t);let f=e*a;for(let p=f+a;f!==p;f+=4)jn.slerpFlat(r,0,o,f-a,o,f,u);return r}}class tr extends Xn{InterpolantFactoryMethodLinear(e){return new O_(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=Dr;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends Xn{}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=cs;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Xn{}ds.prototype.ValueTypeName="vector";class F_{constructor(e,t=-1,n,i=th){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(k_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let u=[],f=[];u.push((a+r-1)%r,a,(a+1)%r),f.push(0,1,0);const p=D_(u);u=Cc(u,1,p),f=Cc(f,1,p),!i&&u[0]===0&&(u.push(r),f.push(f[0])),o.push(new hs(".morphTargetInfluences["+t[a].name+"]",u,f).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,u=e.length;a<u;a++){const f=e[a],p=f.name.match(r);if(p&&p.length>1){const m=p[1];let _=i[m];_||(i[m]=_=[]),_.push(f)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,_,y,S,v){if(y.length!==0){const x=[],w=[];xu(y,x,w,S),x.length!==0&&v.push(new m(_,x,w))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let u=e.length||-1;const f=e.hierarchy||[];for(let m=0;m<f.length;m++){const _=f[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let S;for(S=0;S<_.length;S++)if(_[S].morphTargets)for(let v=0;v<_[S].morphTargets.length;v++)y[_[S].morphTargets[v]]=-1;for(const v in y){const x=[],w=[];for(let I=0;I!==_[S].morphTargets.length;++I){const P=_[S];x.push(P.time),w.push(P.morphTarget===v?1:0)}i.push(new hs(".morphTargetInfluence["+v+"]",x,w))}u=y.length*o}else{const y=".bones["+t[m].name+"]";n(ds,y+".position",_,"pos",i),n(tr,y+".quaternion",_,"rot",i),n(ds,y+".scale",_,"scl",i)}}return i.length===0?null:new this(r,u,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function U_(l){switch(l.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return vu;case"quaternion":return tr;case"bool":case"boolean":return zr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+l)}function k_(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=U_(l.type);if(l.times===void 0){const t=[],n=[];xu(l.keys,t,n,"value"),l.times=t,l.values=n}return e.parse!==void 0?e.parse(l):new e(l.name,l.times,l.values,l.interpolation)}const Ir={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class z_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){a++,r===!1&&i.onStart!==void 0&&i.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,i.onProgress!==void 0&&i.onProgress(p,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=f.length;m<_;m+=2){const y=f[m],S=f[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return S}return null}}}const B_=new z_;class xs{constructor(e){this.manager=e!==void 0?e:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ni={};class H_ extends Error{constructor(e,t){super(e),this.response=t}}class yu extends xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ir.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,u=this.responseType;fetch(o).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=ni[e],m=f.body.getReader(),_=f.headers.get("Content-Length"),y=_?parseInt(_):0,S=y!==0;let v=0;const x=new ReadableStream({start(w){I();function I(){m.read().then(({done:P,value:R})=>{if(P)w.close();else{v+=R.byteLength;const L=new ProgressEvent("progress",{lengthComputable:S,loaded:v,total:y});for(let h=0,X=p.length;h<X;h++){const A=p[h];A.onProgress&&A.onProgress(L)}w.enqueue(R),I()}})}}});return new Response(x)}else throw new H_(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,a));case"json":return f.json();default:if(a===void 0)return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(a),_=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(_);return f.arrayBuffer().then(S=>y.decode(S))}}}).then(f=>{Ir.add(e,f);const p=ni[e];delete ni[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=ni[e];if(p===void 0)throw this.manager.itemError(e),f;delete ni[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class G_ extends xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ir.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=fs("img");function u(){p(),Ir.add(e,this),t&&t(this),r.manager.itemEnd(e)}function f(m){p(),i&&i(m),r.manager.itemError(e),r.manager.itemEnd(e)}function p(){a.removeEventListener("load",u,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class V_ extends xs{constructor(e){super(e)}load(e,t,n,i){const r=new on,o=new G_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class oa extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class W_ extends oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const so=new ft,Lc=new H,Rc=new H;class No{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j_ extends No{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class q_ extends oa{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new j_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dc=new ft,ts=new H,ao=new H;class X_ extends No{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),ao.copy(n.position),ao.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ao),n.updateMatrixWorld(),i.makeTranslation(-ts.x,-ts.y,-ts.z),Dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class Y_ extends oa{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new X_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class K_ extends No{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bu extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.shadow=new K_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $_ extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ir.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){Ir.add(e,u),t&&t(u),r.manager.itemEnd(e)}).catch(function(u){i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Oo="\\[\\]\\.:\\/",Z_=new RegExp("["+Oo+"]","g"),Fo="[^"+Oo+"]",J_="[^"+Oo.replace("\\.","")+"]",Q_=/((?:WC+[\/:])*)/.source.replace("WC",Fo),ex=/(WCOD+)?/.source.replace("WCOD",J_),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fo),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fo),ix=new RegExp("^"+Q_+ex+tx+nx+"$"),rx=["material","materials","bones","map"];class sx{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(e){const t=ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const u=n(a.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===f){f=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const o=e[i];if(o===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=sx;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);class ax extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new bx(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Yi.extractUrlBase(e),this.manager.itemStart(e);const a=function(f){i?i(f):console.error(f),r.manager.itemError(e),r.manager.itemEnd(e)},u=new yu(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){try{r.parse(f,o,function(p){t(p),r.manager.itemEnd(e)},a)}catch(p){a(p)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Yi.decodeText(new Uint8Array(e,0,4))===Mu){try{o[ct.KHR_BINARY_GLTF]=new Mx(e)}catch(p){i&&i(p);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(Yi.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Ox(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const p=this.pluginCallbacks[f](u);a[p.name]=p,o[p.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const p=r.extensionsUsed[f],m=r.extensionsRequired||[];switch(p){case ct.KHR_MATERIALS_UNLIT:o[p]=new cx;break;case ct.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[p]=new Tx;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[p]=new Sx(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[p]=new wx;break;case ct.KHR_MESH_QUANTIZATION:o[p]=new Ex;break;default:m.indexOf(p)>=0&&a[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ox(){let l={};return{get:function(e){return l[e]},add:function(e,t){l[e]=t},remove:function(e){delete l[e]},removeAll:function(){l={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lx{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,u=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let f;const p=new Je(16777215);u.color!==void 0&&p.fromArray(u.color);const m=u.range!==void 0?u.range:0;switch(u.type){case"directional":f=new bu(p),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new Y_(p),f.distance=m;break;case"spot":f=new q_(p),f.distance=m,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,f.angle=u.spot.outerConeAngle,f.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return f.position.set(0,0,0),f.decay=2,u.intensity!==void 0&&(f.intensity=u.intensity),f.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(f),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(u){return n._getNodeRef(t.cache,a,u)})}}class cx{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Wi}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(i)}}class ux{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class fx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(a,a)}return Promise.all(r)}}class hx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class dx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class px{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Je(a[0],a[1],a[2]),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Je(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class vx{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let u=n.textureLoader;if(a.uri){const f=n.options.manager.getHandler(a.uri);f!==null&&(u=f)}return this.detectSupport().then(function(f){if(f)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yx{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const u=i.byteOffset||0,f=i.byteLength||0,p=i.count,m=i.byteStride,_=new Uint8Array(a,u,f);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(p,m,_,i.mode,i.filter).then(function(y){return y.buffer}):o.ready.then(function(){const y=new ArrayBuffer(p*m);return o.decodeGltfBuffer(new Uint8Array(y),p,m,_,i.mode,i.filter),y})})}else return null}}class bx{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const f of i.primitives)if(f.mode!==An.TRIANGLES&&f.mode!==An.TRIANGLE_STRIP&&f.mode!==An.TRIANGLE_FAN&&f.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],u={};for(const f in o)a.push(this.parser.getDependency("accessor",o[f]).then(p=>(u[f]=p,u[f])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(f=>{const p=f.pop(),m=p.isGroup?p.children:[p],_=f[0].count,y=[];for(const S of m){const v=new ft,x=new H,w=new jn,I=new H(1,1,1),P=new A_(S.geometry,S.material,_);for(let R=0;R<_;R++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,R),u.ROTATION&&w.fromBufferAttribute(u.ROTATION,R),u.SCALE&&I.fromBufferAttribute(u.SCALE,R),P.setMatrixAt(R,v.compose(x,w,I));for(const R in u)R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&S.geometry.setAttribute(R,u[R]);Nt.prototype.copy.call(P,S),P.frustumCulled=!1,this.parser.assignFinalMaterial(P),y.push(P)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const Mu="glTF",ns=12,Ic={JSON:1313821514,BIN:5130562};class Mx{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ns);if(this.header={magic:Yi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ns,i=new DataView(e,ns);let r=0;for(;r<n;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Ic.JSON){const u=new Uint8Array(e,ns+r,o);this.content=Yi.decodeText(u)}else if(a===Ic.BIN){const u=ns+r;this.body=e.slice(u,u+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},u={},f={};for(const p in o){const m=bo[p]||p.toLowerCase();a[m]=o[p]}for(const p in e.attributes){const m=bo[p]||p.toLowerCase();if(o[p]!==void 0){const _=n.accessors[e.attributes[p]],y=ps[_.componentType];f[m]=y.name,u[m]=_.normalized===!0}}return t.getDependency("bufferView",r).then(function(p){return new Promise(function(m){i.decodeDracoFile(p,function(_){for(const y in _.attributes){const S=_.attributes[y],v=u[y];v!==void 0&&(S.normalized=v)}m(_)},a,f)})})}}class wx{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yo extends aa{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Je().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(u){for(const f in a)u.uniforms[f]=a[f];u.fragmentShader=u.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(u){a.specular.value=u}},specularMap:{get:function(){return a.specularMap.value},set:function(u){a.specularMap.value=u,u?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(u){a.glossiness.value=u}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(u){a.glossinessMap.value=u,u?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Tx{constructor(){this.name=ct.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return yo}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Je(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,bt)),e.emissive=new Je(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Je(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,bt))}return Promise.all(r)}createMaterial(e){const t=new yo(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=ia,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Ex{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Su extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=a*2,f=a*3,p=i-t,m=(n-t)/p,_=m*m,y=_*m,S=e*f,v=S-f,x=-2*y+3*_,w=y-_,I=1-x,P=w-_+m;for(let R=0;R!==a;R++){const L=o[v+R+a],h=o[v+R+u]*p,X=o[S+R+a],A=o[S+R]*p;r[R]=I*L+P*h+x*X+w*A}return r}}const Ax=new jn;class Cx extends Su{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ax.fromArray(r).normalize().toArray(r),r}}const An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nc={9728:$t,9729:dn,9984:ho,9985:Xc,9986:po,9987:Or},Oc={33071:Ln,33648:ea,10497:Lr},Fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:Dr,STEP:cs},oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rx(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),l.DefaultMaterial}function is(l,e,t){for(const n in t.extensions)l[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(l,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(l.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(l,e,t){let n=!1,i=!1,r=!1;for(let f=0,p=e.length;f<p;f++){const m=e[f];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(l);const o=[],a=[],u=[];for(let f=0,p=e.length;f<p;f++){const m=e[f];if(n){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):l.attributes.position;o.push(_)}if(i){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):l.attributes.normal;a.push(_)}if(r){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):l.attributes.color;u.push(_)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(u)]).then(function(f){const p=f[0],m=f[1],_=f[2];return n&&(l.morphAttributes.position=p),i&&(l.morphAttributes.normal=m),r&&(l.morphAttributes.color=_),l.morphTargetsRelative=!0,l})}function Px(l,e){if(l.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)l.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(l.morphTargetInfluences.length===t.length){l.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)l.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ix(l){const e=l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Uc(e.attributes):t=l.indices+":"+Uc(l.attributes)+":"+l.mode,t}function Uc(l){let e="";const t=Object.keys(l).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+l[t[n]]+";";return e}function Mo(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nx(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Ox{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ox,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new V_(this.options.manager):this.textureLoader=new $_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};is(r,a,i),Bi(a,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,u=o.length;a<u;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const u=this.associations.get(o);u!=null&&this.associations.set(a,u);for(const[f,p]of o.children.entries())r(p,a.children[f])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Yi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],u=Fc[i.type],f=ps[i.componentType],p=f.BYTES_PER_ELEMENT,m=p*u,_=i.byteOffset||0,y=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let v,x;if(y&&y!==m){const w=Math.floor(_/y),I="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+w+":"+i.count;let P=t.cache.get(I);P||(v=new f(a,w*y,i.count*y/p),P=new b_(v,y/p),t.cache.add(I,P)),x=new Do(P,u,_%y/p,S)}else a===null?v=new f(i.count*u):v=new f(a,_,i.count*u),x=new pn(v,u,S);if(i.sparse!==void 0){const w=Fc.SCALAR,I=ps[i.sparse.indices.componentType],P=i.sparse.indices.byteOffset||0,R=i.sparse.values.byteOffset||0,L=new I(o[1],P,i.sparse.count*w),h=new f(o[2],R,i.sparse.count*u);a!==null&&(x=new pn(x.array.slice(),x.itemSize,x.normalized));for(let X=0,A=L.length;X<A;X++){const z=L[X];if(x.setX(z,h[X*u]),u>=2&&x.setY(z,h[X*u+1]),u>=3&&x.setZ(z,h[X*u+2]),u>=4&&x.setW(z,h[X*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(a=u)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],u=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const f=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=o.name||a.name||"";const _=(r.samplers||{})[o.sampler]||{};return p.magFilter=Nc[_.magFilter]||dn,p.minFilter=Nc[_.minFilter]||Or,p.wrapS=Oc[_.wrapS]||Lr,p.wrapT=Oc[_.wrapT]||Lr,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[u]=f,f}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const o=i.images[e],a=self.URL||self.webkitURL;let u=o.uri||"",f=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(m){f=!0;const _=new Blob([m],{type:o.mimeType});return u=a.createObjectURL(_),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(u).then(function(m){return new Promise(function(_,y){let S=_;t.isImageBitmapLoader===!0&&(S=function(v){const x=new on(v);x.needsUpdate=!0,_(x)}),t.load(Yi.resolveURL(m,r.path),S,void 0,y)})}).then(function(m){return f===!0&&a.revokeObjectURL(u),m.userData.mimeType=o.mimeType||Nx(o.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const u=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,u)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let u=this.cache.get(a);u||(u=new mu,Gn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(a,u)),n=u}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let u=this.cache.get(a);u||(u=new pu,Gn.prototype.copy.call(u,n),u.color.copy(n.color),this.cache.add(a,u)),n=u}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let u=this.cache.get(a);u||(u=n.clone(),r&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(a,u),this.associations.set(u,this.associations.get(n))),n=u}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return aa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},u=r.extensions||{},f=[];if(u[ct.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const m=i[ct.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=m.getMaterialType(),f.push(m.extendParams(a,r,t))}else if(u[ct.KHR_MATERIALS_UNLIT]){const m=i[ct.KHR_MATERIALS_UNLIT];o=m.getMaterialType(),f.push(m.extendParams(a,r,t))}else{const m=r.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;a.color.fromArray(_),a.opacity=_[3]}m.baseColorTexture!==void 0&&f.push(t.assignTexture(a,"map",m.baseColorTexture,bt)),a.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,a.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(a,"metalnessMap",m.metallicRoughnessTexture)),f.push(t.assignTexture(a,"roughnessMap",m.metallicRoughnessTexture))),o=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=si);const p=r.alphaMode||oo.OPAQUE;if(p===oo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,p===oo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wi&&(f.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){const m=r.normalTexture.scale;a.normalScale.set(m,m)}return r.occlusionTexture!==void 0&&o!==Wi&&(f.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wi&&(a.emissive=new Je().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Wi&&f.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(f).then(function(){let m;return o===yo?m=i[ct.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):m=new o(a),r.name&&(m.name=r.name),Bi(m,r),t.associations.set(m,{materials:e}),r.extensions&&is(i,m,r),m})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(u){return kc(u,a,t)})}const o=[];for(let a=0,u=e.length;a<u;a++){const f=e[a],p=Ix(f),m=i[p];if(m)o.push(m.promise);else{let _;f.extensions&&f.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?_=r(f):_=kc(new qn,f,t),i[p]={primitive:f,promise:_},o.push(_)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let u=0,f=o.length;u<f;u++){const p=o[u].material===void 0?Rx(this.cache):this.getDependency("material",o[u].material);a.push(p)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(u){const f=u.slice(0,u.length-1),p=u[u.length-1],m=[];for(let y=0,S=p.length;y<S;y++){const v=p[y],x=o[y];let w;const I=f[y];if(x.mode===An.TRIANGLES||x.mode===An.TRIANGLE_STRIP||x.mode===An.TRIANGLE_FAN||x.mode===void 0)w=r.isSkinnedMesh===!0?new S_(v,I):new bn(v,I),w.isSkinnedMesh===!0&&!w.geometry.attributes.skinWeight.normalized&&w.normalizeSkinWeights(),x.mode===An.TRIANGLE_STRIP?w.geometry=zc(w.geometry,nh):x.mode===An.TRIANGLE_FAN&&(w.geometry=zc(w.geometry,Kc));else if(x.mode===An.LINES)w=new C_(v,I);else if(x.mode===An.LINE_STRIP)w=new Io(v,I);else if(x.mode===An.LINE_LOOP)w=new L_(v,I);else if(x.mode===An.POINTS)w=new R_(v,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(w.geometry.morphAttributes).length>0&&Px(w,r),w.name=t.createUniqueName(r.name||"mesh_"+e),Bi(w,r),x.extensions&&is(i,w,x),t.assignFinalMaterial(w),m.push(w)}for(let y=0,S=m.length;y<S;y++)t.associations.set(m[y],{meshes:e,primitives:y});if(m.length===1)return m[0];const _=new ji;t.associations.set(_,{meshes:e});for(let y=0,S=m.length;y<S;y++)_.add(m[y]);return _})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(yh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],u=[];for(let f=0,p=n.channels.length;f<p;f++){const m=n.channels[f],_=n.samplers[m.sampler],y=m.target,S=y.node,v=n.parameters!==void 0?n.parameters[_.input]:_.input,x=n.parameters!==void 0?n.parameters[_.output]:_.output;i.push(this.getDependency("node",S)),r.push(this.getDependency("accessor",v)),o.push(this.getDependency("accessor",x)),a.push(_),u.push(y)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(u)]).then(function(f){const p=f[0],m=f[1],_=f[2],y=f[3],S=f[4],v=[];for(let w=0,I=p.length;w<I;w++){const P=p[w],R=m[w],L=_[w],h=y[w],X=S[w];if(P===void 0)continue;P.updateMatrix();let A;switch(Mi[X.path]){case Mi.weights:A=hs;break;case Mi.rotation:A=tr;break;case Mi.position:case Mi.scale:default:A=ds;break}const z=P.name?P.name:P.uuid,J=h.interpolation!==void 0?Lx[h.interpolation]:Dr,pe=[];Mi[X.path]===Mi.weights?P.traverse(function(Q){Q.morphTargetInfluences&&pe.push(Q.name?Q.name:Q.uuid)}):pe.push(z);let Se=L.array;if(L.normalized){const Q=Mo(Se.constructor),Y=new Float32Array(Se.length);for(let oe=0,me=Se.length;oe<me;oe++)Y[oe]=Se[oe]*Q;Se=Y}for(let Q=0,Y=pe.length;Q<Y;Q++){const oe=new A(pe[Q]+"."+Mi[X.path],R.array,Se,J);h.interpolation==="CUBICSPLINE"&&(oe.createInterpolant=function(ve){const ce=this instanceof tr?Cx:Su;return new ce(this.times,this.values,this.getValueSize()/3,ve)},oe.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(oe)}}const x=n.name?n.name:"animation_"+e;return new F_(x,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let u=0,f=i.weights.length;u<f;u++)a.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],u=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return u&&a.push(u),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)}),Promise.all(a)}().then(function(a){let u;if(r.isBone===!0?u=new du:a.length>1?u=new ji:a.length===1?u=a[0]:u=new Nt,u!==a[0])for(let f=0,p=a.length;f<p;f++)u.add(a[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Bi(u,r),r.extensions&&is(n,u,r),r.matrix!==void 0){const f=new ft;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,o=new ji;i.name&&(o.name=r.createUniqueName(i.name)),Bi(o,i),i.extensions&&is(n,o,i);const a=i.nodes||[],u=[];for(let f=0,p=a.length;f<p;f++)u.push(wu(a[f],o,t,r));return Promise.all(u).then(function(){const f=p=>{const m=new Map;for(const[_,y]of r.associations)(_ instanceof Gn||_ instanceof on)&&m.set(_,y);return p.traverse(_=>{const y=r.associations.get(_);y!=null&&m.set(_,y)}),m};return r.associations=f(o),o})}}function wu(l,e,t,n){const i=t.nodes[l];return n.getDependency("node",l).then(function(r){if(i.skin===void 0)return r;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;const u=[];for(let f=0,p=o.joints.length;f<p;f++)u.push(n.getDependency("node",o.joints[f]));return Promise.all(u)}).then(function(a){return r.traverse(function(u){if(!u.isMesh)return;const f=[],p=[];for(let m=0,_=a.length;m<_;m++){const y=a[m];if(y){f.push(y);const S=new ft;o.inverseBindMatrices!==void 0&&S.fromArray(o.inverseBindMatrices.array,m*16),p.push(S)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[m])}u.bind(new Po(f,p),u.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(i.children){const a=i.children;for(let u=0,f=a.length;u<f;u++){const p=a[u];o.push(wu(p,r,t,n))}}return Promise.all(o)})}function Fx(l,e,t){const n=e.attributes,i=new Fr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],u=a.min,f=a.max;if(u!==void 0&&f!==void 0){if(i.set(new H(u[0],u[1],u[2]),new H(f[0],f[1],f[2])),a.normalized){const p=Mo(ps[a.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,u=new H;for(let f=0,p=r.length;f<p;f++){const m=r[f];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],y=_.min,S=_.max;if(y!==void 0&&S!==void 0){if(u.setX(Math.max(Math.abs(y[0]),Math.abs(S[0]))),u.setY(Math.max(Math.abs(y[1]),Math.abs(S[1]))),u.setZ(Math.max(Math.abs(y[2]),Math.abs(S[2]))),_.normalized){const v=Mo(ps[_.componentType]);u.multiplyScalar(v)}a.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}l.boundingBox=i;const o=new Ur;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,l.boundingSphere=o}function kc(l,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(u){l.setAttribute(a,u)})}for(const o in n){const a=bo[o]||o.toLowerCase();a in l.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!l.index){const o=t.getDependency("accessor",e.indices).then(function(a){l.setIndex(a)});i.push(o)}return Bi(l,e),Fx(l,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dx(l,e.targets,t):l})}function zc(l,e){let t=l.getIndex();if(t===null){const o=[],a=l.getAttribute("position");if(a!==void 0){for(let u=0;u<a.count;u++)o.push(u);l.setIndex(o),t=l.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const n=t.count-2,i=[];if(e===Kc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=l.clone();return r.setIndex(i),r}const Bc={type:"change"},lo={type:"start"},Hc={type:"end"};class Ux extends nr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",en),this._domElementKeyEvents=k},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bc),n.update(),r=i.NONE},this.update=function(){const k=new H,j=new jn().setFromUnitVectors(e.up,new H(0,1,0)),Pe=j.clone().invert(),Re=new H,Ee=new jn,ke=2*Math.PI;return function(){const Ze=n.object.position;k.copy(Ze).sub(n.target),k.applyQuaternion(j),a.setFromVector3(k),n.autoRotate&&r===i.NONE&&z(X()),n.enableDamping?(a.theta+=u.theta*n.dampingFactor,a.phi+=u.phi*n.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let Ke=n.minAzimuthAngle,pt=n.maxAzimuthAngle;return isFinite(Ke)&&isFinite(pt)&&(Ke<-Math.PI?Ke+=ke:Ke>Math.PI&&(Ke-=ke),pt<-Math.PI?pt+=ke:pt>Math.PI&&(pt-=ke),Ke<=pt?a.theta=Math.max(Ke,Math.min(pt,a.theta)):a.theta=a.theta>(Ke+pt)/2?Math.max(Ke,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=f,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),k.setFromSpherical(a),k.applyQuaternion(Pe),Ze.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),p.set(0,0,0)),f=1,m||Re.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o?(n.dispatchEvent(Bc),Re.copy(n.object.position),Ee.copy(n.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",Lt),n.domElement.removeEventListener("pointercancel",St),n.domElement.removeEventListener("wheel",ln),n.domElement.removeEventListener("pointermove",Pt),n.domElement.removeEventListener("pointerup",De),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",en)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Pc,u=new Pc;let f=1;const p=new H;let m=!1;const _=new tt,y=new tt,S=new tt,v=new tt,x=new tt,w=new tt,I=new tt,P=new tt,R=new tt,L=[],h={};function X(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function z(k){u.theta-=k}function J(k){u.phi-=k}const pe=function(){const k=new H;return function(Pe,Re){k.setFromMatrixColumn(Re,0),k.multiplyScalar(-Pe),p.add(k)}}(),Se=function(){const k=new H;return function(Pe,Re){n.screenSpacePanning===!0?k.setFromMatrixColumn(Re,1):(k.setFromMatrixColumn(Re,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(Pe),p.add(k)}}(),Q=function(){const k=new H;return function(Pe,Re){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const ke=n.object.position;k.copy(ke).sub(n.target);let Ue=k.length();Ue*=Math.tan(n.object.fov/2*Math.PI/180),pe(2*Pe*Ue/Ee.clientHeight,n.object.matrix),Se(2*Re*Ue/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(pe(Pe*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),Se(Re*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(k){n.object.isPerspectiveCamera?f/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(k){n.object.isPerspectiveCamera?f*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(k){_.set(k.clientX,k.clientY)}function ve(k){I.set(k.clientX,k.clientY)}function ce(k){v.set(k.clientX,k.clientY)}function $(k){y.set(k.clientX,k.clientY),S.subVectors(y,_).multiplyScalar(n.rotateSpeed);const j=n.domElement;z(2*Math.PI*S.x/j.clientHeight),J(2*Math.PI*S.y/j.clientHeight),_.copy(y),n.update()}function te(k){P.set(k.clientX,k.clientY),R.subVectors(P,I),R.y>0?Y(A()):R.y<0&&oe(A()),I.copy(P),n.update()}function xe(k){x.set(k.clientX,k.clientY),w.subVectors(x,v).multiplyScalar(n.panSpeed),Q(w.x,w.y),v.copy(x),n.update()}function be(k){k.deltaY<0?oe(A()):k.deltaY>0&&Y(A()),n.update()}function ge(k){let j=!1;switch(k.code){case n.keys.UP:Q(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:Q(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:Q(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:Q(-n.keyPanSpeed,0),j=!0;break}j&&(k.preventDefault(),n.update())}function Ie(){if(L.length===1)_.set(L[0].pageX,L[0].pageY);else{const k=.5*(L[0].pageX+L[1].pageX),j=.5*(L[0].pageY+L[1].pageY);_.set(k,j)}}function $e(){if(L.length===1)v.set(L[0].pageX,L[0].pageY);else{const k=.5*(L[0].pageX+L[1].pageX),j=.5*(L[0].pageY+L[1].pageY);v.set(k,j)}}function fe(){const k=L[0].pageX-L[1].pageX,j=L[0].pageY-L[1].pageY,Pe=Math.sqrt(k*k+j*j);I.set(0,Pe)}function ht(){n.enableZoom&&fe(),n.enablePan&&$e()}function je(){n.enableZoom&&fe(),n.enableRotate&&Ie()}function Ge(k){if(L.length==1)y.set(k.pageX,k.pageY);else{const Pe=We(k),Re=.5*(k.pageX+Pe.x),Ee=.5*(k.pageY+Pe.y);y.set(Re,Ee)}S.subVectors(y,_).multiplyScalar(n.rotateSpeed);const j=n.domElement;z(2*Math.PI*S.x/j.clientHeight),J(2*Math.PI*S.y/j.clientHeight),_.copy(y)}function Ne(k){if(L.length===1)x.set(k.pageX,k.pageY);else{const j=We(k),Pe=.5*(k.pageX+j.x),Re=.5*(k.pageY+j.y);x.set(Pe,Re)}w.subVectors(x,v).multiplyScalar(n.panSpeed),Q(w.x,w.y),v.copy(x)}function xt(k){const j=We(k),Pe=k.pageX-j.x,Re=k.pageY-j.y,Ee=Math.sqrt(Pe*Pe+Re*Re);P.set(0,Ee),R.set(0,Math.pow(P.y/I.y,n.zoomSpeed)),Y(R.y),I.copy(P)}function st(k){n.enableZoom&&xt(k),n.enablePan&&Ne(k)}function Fe(k){n.enableZoom&&xt(k),n.enableRotate&&Ge(k)}function Lt(k){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Pt),n.domElement.addEventListener("pointerup",De)),_e(k),k.pointerType==="touch"?N(k):kt(k))}function Pt(k){n.enabled!==!1&&(k.pointerType==="touch"?C(k):vt(k))}function De(k){Me(k),L.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Pt),n.domElement.removeEventListener("pointerup",De)),n.dispatchEvent(Hc),r=i.NONE}function St(k){Me(k)}function kt(k){let j;switch(k.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case sr.DOLLY:if(n.enableZoom===!1)return;ve(k),r=i.DOLLY;break;case sr.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;ce(k),r=i.PAN}else{if(n.enableRotate===!1)return;me(k),r=i.ROTATE}break;case sr.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;me(k),r=i.ROTATE}else{if(n.enablePan===!1)return;ce(k),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(lo)}function vt(k){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(k);break;case i.DOLLY:if(n.enableZoom===!1)return;te(k);break;case i.PAN:if(n.enablePan===!1)return;xe(k);break}}function ln(k){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(k.preventDefault(),n.dispatchEvent(lo),be(k),n.dispatchEvent(Hc))}function en(k){n.enabled===!1||n.enablePan===!1||ge(k)}function N(k){switch(Le(k),L.length){case 1:switch(n.touches.ONE){case ar.ROTATE:if(n.enableRotate===!1)return;Ie(),r=i.TOUCH_ROTATE;break;case ar.PAN:if(n.enablePan===!1)return;$e(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ar.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(),r=i.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(lo)}function C(k){switch(Le(k),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ge(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ne(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;st(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(k),n.update();break;default:r=i.NONE}}function ne(k){n.enabled!==!1&&k.preventDefault()}function _e(k){L.push(k)}function Me(k){delete h[k.pointerId];for(let j=0;j<L.length;j++)if(L[j].pointerId==k.pointerId){L.splice(j,1);return}}function Le(k){let j=h[k.pointerId];j===void 0&&(j=new tt,h[k.pointerId]=j),j.set(k.pageX,k.pageY)}function We(k){const j=k.pointerId===L[0].pointerId?L[1]:L[0];return h[j.pointerId]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",Lt),n.domElement.addEventListener("pointercancel",St),n.domElement.addEventListener("wheel",ln,{passive:!1}),this.update()}}var kx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tu={exports:{}};/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */(function(l){(function(e,t){l.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:kx,function(e,t){var n=[],i=Object.getPrototypeOf,r=n.slice,o=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},a=n.push,u=n.indexOf,f={},p=f.toString,m=f.hasOwnProperty,_=m.toString,y=_.call(Object),S={},v=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},x=function(c){return c!=null&&c===c.window},w=e.document,I={type:!0,src:!0,nonce:!0,noModule:!0};function P(s,c,d){d=d||w;var g,b,M=d.createElement("script");if(M.text=s,c)for(g in I)b=c[g]||c.getAttribute&&c.getAttribute(g),b&&M.setAttribute(g,b);d.head.appendChild(M).parentNode.removeChild(M)}function R(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?f[p.call(s)]||"object":typeof s}var L="3.6.1",h=function(s,c){return new h.fn.init(s,c)};h.fn=h.prototype={jquery:L,constructor:h,length:0,toArray:function(){return r.call(this)},get:function(s){return s==null?r.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var c=h.merge(this.constructor(),s);return c.prevObject=this,c},each:function(s){return h.each(this,s)},map:function(s){return this.pushStack(h.map(this,function(c,d){return s.call(c,d,c)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(s,c){return(c+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(s,c){return c%2}))},eq:function(s){var c=this.length,d=+s+(s<0?c:0);return this.pushStack(d>=0&&d<c?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},h.extend=h.fn.extend=function(){var s,c,d,g,b,M,T=arguments[0]||{},U=1,O=arguments.length,W=!1;for(typeof T=="boolean"&&(W=T,T=arguments[U]||{},U++),typeof T!="object"&&!v(T)&&(T={}),U===O&&(T=this,U--);U<O;U++)if((s=arguments[U])!=null)for(c in s)g=s[c],!(c==="__proto__"||T===g)&&(W&&g&&(h.isPlainObject(g)||(b=Array.isArray(g)))?(d=T[c],b&&!Array.isArray(d)?M=[]:!b&&!h.isPlainObject(d)?M={}:M=d,b=!1,T[c]=h.extend(W,M,g)):g!==void 0&&(T[c]=g));return T},h.extend({expando:"jQuery"+(L+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var c,d;return!s||p.call(s)!=="[object Object]"?!1:(c=i(s),c?(d=m.call(c,"constructor")&&c.constructor,typeof d=="function"&&_.call(d)===y):!0)},isEmptyObject:function(s){var c;for(c in s)return!1;return!0},globalEval:function(s,c,d){P(s,{nonce:c&&c.nonce},d)},each:function(s,c){var d,g=0;if(X(s))for(d=s.length;g<d&&c.call(s[g],g,s[g])!==!1;g++);else for(g in s)if(c.call(s[g],g,s[g])===!1)break;return s},makeArray:function(s,c){var d=c||[];return s!=null&&(X(Object(s))?h.merge(d,typeof s=="string"?[s]:s):a.call(d,s)),d},inArray:function(s,c,d){return c==null?-1:u.call(c,s,d)},merge:function(s,c){for(var d=+c.length,g=0,b=s.length;g<d;g++)s[b++]=c[g];return s.length=b,s},grep:function(s,c,d){for(var g,b=[],M=0,T=s.length,U=!d;M<T;M++)g=!c(s[M],M),g!==U&&b.push(s[M]);return b},map:function(s,c,d){var g,b,M=0,T=[];if(X(s))for(g=s.length;M<g;M++)b=c(s[M],M,d),b!=null&&T.push(b);else for(M in s)b=c(s[M],M,d),b!=null&&T.push(b);return o(T)},guid:1,support:S}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=n[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,c){f["[object "+c+"]"]=c.toLowerCase()});function X(s){var c=!!s&&"length"in s&&s.length,d=R(s);return v(s)||x(s)?!1:d==="array"||c===0||typeof c=="number"&&c>0&&c-1 in s}var A=function(s){var c,d,g,b,M,T,U,O,W,ee,he,Z,ie,ze,nt,Be,Vt,Ht,mn,wt="sizzle"+1*new Date,et=s.document,fn=0,dt=0,Ft=ws(),qr=ws(),bs=ws(),gn=ws(),Ri=function(E,F){return E===F&&(he=!0),0},Di={}.hasOwnProperty,hn=[],hi=hn.pop,Tn=hn.push,di=hn.push,Yo=hn.slice,Pi=function(E,F){for(var B=0,ae=E.length;B<ae;B++)if(E[B]===F)return B;return-1},va="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",yt="[\\x20\\t\\r\\n\\f]",Ii="(?:\\\\[\\da-fA-F]{1,6}"+yt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ko="\\["+yt+"*("+Ii+")(?:"+yt+"*([*^$|!~]?=)"+yt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ii+"))|)"+yt+"*\\]",ya=":("+Ii+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ko+")*)|.*)\\)|)",$u=new RegExp(yt+"+","g"),Ms=new RegExp("^"+yt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+yt+"+$","g"),Zu=new RegExp("^"+yt+"*,"+yt+"*"),$o=new RegExp("^"+yt+"*([>+~]|"+yt+")"+yt+"*"),Ju=new RegExp(yt+"|>"),Qu=new RegExp(ya),ef=new RegExp("^"+Ii+"$"),Ss={ID:new RegExp("^#("+Ii+")"),CLASS:new RegExp("^\\.("+Ii+")"),TAG:new RegExp("^("+Ii+"|[*])"),ATTR:new RegExp("^"+Ko),PSEUDO:new RegExp("^"+ya),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+yt+"*(even|odd|(([+-]|)(\\d*)n|)"+yt+"*(?:([+-]|)"+yt+"*(\\d+)|))"+yt+"*\\)|)","i"),bool:new RegExp("^(?:"+va+")$","i"),needsContext:new RegExp("^"+yt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+yt+"*((?:-\\d)?\\d*)"+yt+"*\\)|)(?=[^-]|$)","i")},tf=/HTML$/i,nf=/^(?:input|select|textarea|button)$/i,rf=/^h\d$/i,Xr=/^[^{]+\{\s*\[native \w/,sf=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ba=/[+~]/,Kn=new RegExp("\\\\[\\da-fA-F]{1,6}"+yt+"?|\\\\([^\\r\\n\\f])","g"),$n=function(E,F){var B="0x"+E.slice(1)-65536;return F||(B<0?String.fromCharCode(B+65536):String.fromCharCode(B>>10|55296,B&1023|56320))},Zo=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Jo=function(E,F){return F?E==="\0"?"\uFFFD":E.slice(0,-1)+"\\"+E.charCodeAt(E.length-1).toString(16)+" ":"\\"+E},Qo=function(){Z()},af=Es(function(E){return E.disabled===!0&&E.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{di.apply(hn=Yo.call(et.childNodes),et.childNodes),hn[et.childNodes.length].nodeType}catch{di={apply:hn.length?function(F,B){Tn.apply(F,Yo.call(B))}:function(F,B){for(var ae=F.length,V=0;F[ae++]=B[V++];);F.length=ae-1}}}function Tt(E,F,B,ae){var V,ue,de,we,Ae,qe,Ve,Ye=F&&F.ownerDocument,lt=F?F.nodeType:9;if(B=B||[],typeof E!="string"||!E||lt!==1&&lt!==9&&lt!==11)return B;if(!ae&&(Z(F),F=F||ie,nt)){if(lt!==11&&(Ae=sf.exec(E)))if(V=Ae[1]){if(lt===9)if(de=F.getElementById(V)){if(de.id===V)return B.push(de),B}else return B;else if(Ye&&(de=Ye.getElementById(V))&&mn(F,de)&&de.id===V)return B.push(de),B}else{if(Ae[2])return di.apply(B,F.getElementsByTagName(E)),B;if((V=Ae[3])&&d.getElementsByClassName&&F.getElementsByClassName)return di.apply(B,F.getElementsByClassName(V)),B}if(d.qsa&&!gn[E+" "]&&(!Be||!Be.test(E))&&(lt!==1||F.nodeName.toLowerCase()!=="object")){if(Ve=E,Ye=F,lt===1&&(Ju.test(E)||$o.test(E))){for(Ye=ba.test(E)&&Sa(F.parentNode)||F,(Ye!==F||!d.scope)&&((we=F.getAttribute("id"))?we=we.replace(Zo,Jo):F.setAttribute("id",we=wt)),qe=T(E),ue=qe.length;ue--;)qe[ue]=(we?"#"+we:":scope")+" "+Ts(qe[ue]);Ve=qe.join(",")}try{return di.apply(B,Ye.querySelectorAll(Ve)),B}catch{gn(E,!0)}finally{we===wt&&F.removeAttribute("id")}}}return O(E.replace(Ms,"$1"),F,B,ae)}function ws(){var E=[];function F(B,ae){return E.push(B+" ")>g.cacheLength&&delete F[E.shift()],F[B+" "]=ae}return F}function On(E){return E[wt]=!0,E}function Fn(E){var F=ie.createElement("fieldset");try{return!!E(F)}catch{return!1}finally{F.parentNode&&F.parentNode.removeChild(F),F=null}}function Ma(E,F){for(var B=E.split("|"),ae=B.length;ae--;)g.attrHandle[B[ae]]=F}function el(E,F){var B=F&&E,ae=B&&E.nodeType===1&&F.nodeType===1&&E.sourceIndex-F.sourceIndex;if(ae)return ae;if(B){for(;B=B.nextSibling;)if(B===F)return-1}return E?1:-1}function of(E){return function(F){var B=F.nodeName.toLowerCase();return B==="input"&&F.type===E}}function lf(E){return function(F){var B=F.nodeName.toLowerCase();return(B==="input"||B==="button")&&F.type===E}}function tl(E){return function(F){return"form"in F?F.parentNode&&F.disabled===!1?"label"in F?"label"in F.parentNode?F.parentNode.disabled===E:F.disabled===E:F.isDisabled===E||F.isDisabled!==!E&&af(F)===E:F.disabled===E:"label"in F?F.disabled===E:!1}}function Ni(E){return On(function(F){return F=+F,On(function(B,ae){for(var V,ue=E([],B.length,F),de=ue.length;de--;)B[V=ue[de]]&&(B[V]=!(ae[V]=B[V]))})})}function Sa(E){return E&&typeof E.getElementsByTagName<"u"&&E}d=Tt.support={},M=Tt.isXML=function(E){var F=E&&E.namespaceURI,B=E&&(E.ownerDocument||E).documentElement;return!tf.test(F||B&&B.nodeName||"HTML")},Z=Tt.setDocument=function(E){var F,B,ae=E?E.ownerDocument||E:et;return ae==ie||ae.nodeType!==9||!ae.documentElement||(ie=ae,ze=ie.documentElement,nt=!M(ie),et!=ie&&(B=ie.defaultView)&&B.top!==B&&(B.addEventListener?B.addEventListener("unload",Qo,!1):B.attachEvent&&B.attachEvent("onunload",Qo)),d.scope=Fn(function(V){return ze.appendChild(V).appendChild(ie.createElement("div")),typeof V.querySelectorAll<"u"&&!V.querySelectorAll(":scope fieldset div").length}),d.attributes=Fn(function(V){return V.className="i",!V.getAttribute("className")}),d.getElementsByTagName=Fn(function(V){return V.appendChild(ie.createComment("")),!V.getElementsByTagName("*").length}),d.getElementsByClassName=Xr.test(ie.getElementsByClassName),d.getById=Fn(function(V){return ze.appendChild(V).id=wt,!ie.getElementsByName||!ie.getElementsByName(wt).length}),d.getById?(g.filter.ID=function(V){var ue=V.replace(Kn,$n);return function(de){return de.getAttribute("id")===ue}},g.find.ID=function(V,ue){if(typeof ue.getElementById<"u"&&nt){var de=ue.getElementById(V);return de?[de]:[]}}):(g.filter.ID=function(V){var ue=V.replace(Kn,$n);return function(de){var we=typeof de.getAttributeNode<"u"&&de.getAttributeNode("id");return we&&we.value===ue}},g.find.ID=function(V,ue){if(typeof ue.getElementById<"u"&&nt){var de,we,Ae,qe=ue.getElementById(V);if(qe){if(de=qe.getAttributeNode("id"),de&&de.value===V)return[qe];for(Ae=ue.getElementsByName(V),we=0;qe=Ae[we++];)if(de=qe.getAttributeNode("id"),de&&de.value===V)return[qe]}return[]}}),g.find.TAG=d.getElementsByTagName?function(V,ue){if(typeof ue.getElementsByTagName<"u")return ue.getElementsByTagName(V);if(d.qsa)return ue.querySelectorAll(V)}:function(V,ue){var de,we=[],Ae=0,qe=ue.getElementsByTagName(V);if(V==="*"){for(;de=qe[Ae++];)de.nodeType===1&&we.push(de);return we}return qe},g.find.CLASS=d.getElementsByClassName&&function(V,ue){if(typeof ue.getElementsByClassName<"u"&&nt)return ue.getElementsByClassName(V)},Vt=[],Be=[],(d.qsa=Xr.test(ie.querySelectorAll))&&(Fn(function(V){var ue;ze.appendChild(V).innerHTML="<a id='"+wt+"'></a><select id='"+wt+"-\r\\' msallowcapture=''><option selected=''></option></select>",V.querySelectorAll("[msallowcapture^='']").length&&Be.push("[*^$]="+yt+`*(?:''|"")`),V.querySelectorAll("[selected]").length||Be.push("\\["+yt+"*(?:value|"+va+")"),V.querySelectorAll("[id~="+wt+"-]").length||Be.push("~="),ue=ie.createElement("input"),ue.setAttribute("name",""),V.appendChild(ue),V.querySelectorAll("[name='']").length||Be.push("\\["+yt+"*name"+yt+"*="+yt+`*(?:''|"")`),V.querySelectorAll(":checked").length||Be.push(":checked"),V.querySelectorAll("a#"+wt+"+*").length||Be.push(".#.+[+~]"),V.querySelectorAll("\\\f"),Be.push("[\\r\\n\\f]")}),Fn(function(V){V.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ue=ie.createElement("input");ue.setAttribute("type","hidden"),V.appendChild(ue).setAttribute("name","D"),V.querySelectorAll("[name=d]").length&&Be.push("name"+yt+"*[*^$|!~]?="),V.querySelectorAll(":enabled").length!==2&&Be.push(":enabled",":disabled"),ze.appendChild(V).disabled=!0,V.querySelectorAll(":disabled").length!==2&&Be.push(":enabled",":disabled"),V.querySelectorAll("*,:x"),Be.push(",.*:")})),(d.matchesSelector=Xr.test(Ht=ze.matches||ze.webkitMatchesSelector||ze.mozMatchesSelector||ze.oMatchesSelector||ze.msMatchesSelector))&&Fn(function(V){d.disconnectedMatch=Ht.call(V,"*"),Ht.call(V,"[s!='']:x"),Vt.push("!=",ya)}),Be=Be.length&&new RegExp(Be.join("|")),Vt=Vt.length&&new RegExp(Vt.join("|")),F=Xr.test(ze.compareDocumentPosition),mn=F||Xr.test(ze.contains)?function(V,ue){var de=V.nodeType===9?V.documentElement:V,we=ue&&ue.parentNode;return V===we||!!(we&&we.nodeType===1&&(de.contains?de.contains(we):V.compareDocumentPosition&&V.compareDocumentPosition(we)&16))}:function(V,ue){if(ue){for(;ue=ue.parentNode;)if(ue===V)return!0}return!1},Ri=F?function(V,ue){if(V===ue)return he=!0,0;var de=!V.compareDocumentPosition-!ue.compareDocumentPosition;return de||(de=(V.ownerDocument||V)==(ue.ownerDocument||ue)?V.compareDocumentPosition(ue):1,de&1||!d.sortDetached&&ue.compareDocumentPosition(V)===de?V==ie||V.ownerDocument==et&&mn(et,V)?-1:ue==ie||ue.ownerDocument==et&&mn(et,ue)?1:ee?Pi(ee,V)-Pi(ee,ue):0:de&4?-1:1)}:function(V,ue){if(V===ue)return he=!0,0;var de,we=0,Ae=V.parentNode,qe=ue.parentNode,Ve=[V],Ye=[ue];if(!Ae||!qe)return V==ie?-1:ue==ie?1:Ae?-1:qe?1:ee?Pi(ee,V)-Pi(ee,ue):0;if(Ae===qe)return el(V,ue);for(de=V;de=de.parentNode;)Ve.unshift(de);for(de=ue;de=de.parentNode;)Ye.unshift(de);for(;Ve[we]===Ye[we];)we++;return we?el(Ve[we],Ye[we]):Ve[we]==et?-1:Ye[we]==et?1:0}),ie},Tt.matches=function(E,F){return Tt(E,null,null,F)},Tt.matchesSelector=function(E,F){if(Z(E),d.matchesSelector&&nt&&!gn[F+" "]&&(!Vt||!Vt.test(F))&&(!Be||!Be.test(F)))try{var B=Ht.call(E,F);if(B||d.disconnectedMatch||E.document&&E.document.nodeType!==11)return B}catch{gn(F,!0)}return Tt(F,ie,null,[E]).length>0},Tt.contains=function(E,F){return(E.ownerDocument||E)!=ie&&Z(E),mn(E,F)},Tt.attr=function(E,F){(E.ownerDocument||E)!=ie&&Z(E);var B=g.attrHandle[F.toLowerCase()],ae=B&&Di.call(g.attrHandle,F.toLowerCase())?B(E,F,!nt):void 0;return ae!==void 0?ae:d.attributes||!nt?E.getAttribute(F):(ae=E.getAttributeNode(F))&&ae.specified?ae.value:null},Tt.escape=function(E){return(E+"").replace(Zo,Jo)},Tt.error=function(E){throw new Error("Syntax error, unrecognized expression: "+E)},Tt.uniqueSort=function(E){var F,B=[],ae=0,V=0;if(he=!d.detectDuplicates,ee=!d.sortStable&&E.slice(0),E.sort(Ri),he){for(;F=E[V++];)F===E[V]&&(ae=B.push(V));for(;ae--;)E.splice(B[ae],1)}return ee=null,E},b=Tt.getText=function(E){var F,B="",ae=0,V=E.nodeType;if(V){if(V===1||V===9||V===11){if(typeof E.textContent=="string")return E.textContent;for(E=E.firstChild;E;E=E.nextSibling)B+=b(E)}else if(V===3||V===4)return E.nodeValue}else for(;F=E[ae++];)B+=b(F);return B},g=Tt.selectors={cacheLength:50,createPseudo:On,match:Ss,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(E){return E[1]=E[1].replace(Kn,$n),E[3]=(E[3]||E[4]||E[5]||"").replace(Kn,$n),E[2]==="~="&&(E[3]=" "+E[3]+" "),E.slice(0,4)},CHILD:function(E){return E[1]=E[1].toLowerCase(),E[1].slice(0,3)==="nth"?(E[3]||Tt.error(E[0]),E[4]=+(E[4]?E[5]+(E[6]||1):2*(E[3]==="even"||E[3]==="odd")),E[5]=+(E[7]+E[8]||E[3]==="odd")):E[3]&&Tt.error(E[0]),E},PSEUDO:function(E){var F,B=!E[6]&&E[2];return Ss.CHILD.test(E[0])?null:(E[3]?E[2]=E[4]||E[5]||"":B&&Qu.test(B)&&(F=T(B,!0))&&(F=B.indexOf(")",B.length-F)-B.length)&&(E[0]=E[0].slice(0,F),E[2]=B.slice(0,F)),E.slice(0,3))}},filter:{TAG:function(E){var F=E.replace(Kn,$n).toLowerCase();return E==="*"?function(){return!0}:function(B){return B.nodeName&&B.nodeName.toLowerCase()===F}},CLASS:function(E){var F=Ft[E+" "];return F||(F=new RegExp("(^|"+yt+")"+E+"("+yt+"|$)"))&&Ft(E,function(B){return F.test(typeof B.className=="string"&&B.className||typeof B.getAttribute<"u"&&B.getAttribute("class")||"")})},ATTR:function(E,F,B){return function(ae){var V=Tt.attr(ae,E);return V==null?F==="!=":F?(V+="",F==="="?V===B:F==="!="?V!==B:F==="^="?B&&V.indexOf(B)===0:F==="*="?B&&V.indexOf(B)>-1:F==="$="?B&&V.slice(-B.length)===B:F==="~="?(" "+V.replace($u," ")+" ").indexOf(B)>-1:F==="|="?V===B||V.slice(0,B.length+1)===B+"-":!1):!0}},CHILD:function(E,F,B,ae,V){var ue=E.slice(0,3)!=="nth",de=E.slice(-4)!=="last",we=F==="of-type";return ae===1&&V===0?function(Ae){return!!Ae.parentNode}:function(Ae,qe,Ve){var Ye,lt,Et,Xe,Wt,Zt,_n=ue!==de?"nextSibling":"previousSibling",It=Ae.parentNode,Yr=we&&Ae.nodeName.toLowerCase(),Kr=!Ve&&!we,xn=!1;if(It){if(ue){for(;_n;){for(Xe=Ae;Xe=Xe[_n];)if(we?Xe.nodeName.toLowerCase()===Yr:Xe.nodeType===1)return!1;Zt=_n=E==="only"&&!Zt&&"nextSibling"}return!0}if(Zt=[de?It.firstChild:It.lastChild],de&&Kr){for(Xe=It,Et=Xe[wt]||(Xe[wt]={}),lt=Et[Xe.uniqueID]||(Et[Xe.uniqueID]={}),Ye=lt[E]||[],Wt=Ye[0]===fn&&Ye[1],xn=Wt&&Ye[2],Xe=Wt&&It.childNodes[Wt];Xe=++Wt&&Xe&&Xe[_n]||(xn=Wt=0)||Zt.pop();)if(Xe.nodeType===1&&++xn&&Xe===Ae){lt[E]=[fn,Wt,xn];break}}else if(Kr&&(Xe=Ae,Et=Xe[wt]||(Xe[wt]={}),lt=Et[Xe.uniqueID]||(Et[Xe.uniqueID]={}),Ye=lt[E]||[],Wt=Ye[0]===fn&&Ye[1],xn=Wt),xn===!1)for(;(Xe=++Wt&&Xe&&Xe[_n]||(xn=Wt=0)||Zt.pop())&&!((we?Xe.nodeName.toLowerCase()===Yr:Xe.nodeType===1)&&++xn&&(Kr&&(Et=Xe[wt]||(Xe[wt]={}),lt=Et[Xe.uniqueID]||(Et[Xe.uniqueID]={}),lt[E]=[fn,xn]),Xe===Ae)););return xn-=V,xn===ae||xn%ae===0&&xn/ae>=0}}},PSEUDO:function(E,F){var B,ae=g.pseudos[E]||g.setFilters[E.toLowerCase()]||Tt.error("unsupported pseudo: "+E);return ae[wt]?ae(F):ae.length>1?(B=[E,E,"",F],g.setFilters.hasOwnProperty(E.toLowerCase())?On(function(V,ue){for(var de,we=ae(V,F),Ae=we.length;Ae--;)de=Pi(V,we[Ae]),V[de]=!(ue[de]=we[Ae])}):function(V){return ae(V,0,B)}):ae}},pseudos:{not:On(function(E){var F=[],B=[],ae=U(E.replace(Ms,"$1"));return ae[wt]?On(function(V,ue,de,we){for(var Ae,qe=ae(V,null,we,[]),Ve=V.length;Ve--;)(Ae=qe[Ve])&&(V[Ve]=!(ue[Ve]=Ae))}):function(V,ue,de){return F[0]=V,ae(F,null,de,B),F[0]=null,!B.pop()}}),has:On(function(E){return function(F){return Tt(E,F).length>0}}),contains:On(function(E){return E=E.replace(Kn,$n),function(F){return(F.textContent||b(F)).indexOf(E)>-1}}),lang:On(function(E){return ef.test(E||"")||Tt.error("unsupported lang: "+E),E=E.replace(Kn,$n).toLowerCase(),function(F){var B;do if(B=nt?F.lang:F.getAttribute("xml:lang")||F.getAttribute("lang"))return B=B.toLowerCase(),B===E||B.indexOf(E+"-")===0;while((F=F.parentNode)&&F.nodeType===1);return!1}}),target:function(E){var F=s.location&&s.location.hash;return F&&F.slice(1)===E.id},root:function(E){return E===ze},focus:function(E){return E===ie.activeElement&&(!ie.hasFocus||ie.hasFocus())&&!!(E.type||E.href||~E.tabIndex)},enabled:tl(!1),disabled:tl(!0),checked:function(E){var F=E.nodeName.toLowerCase();return F==="input"&&!!E.checked||F==="option"&&!!E.selected},selected:function(E){return E.parentNode&&E.parentNode.selectedIndex,E.selected===!0},empty:function(E){for(E=E.firstChild;E;E=E.nextSibling)if(E.nodeType<6)return!1;return!0},parent:function(E){return!g.pseudos.empty(E)},header:function(E){return rf.test(E.nodeName)},input:function(E){return nf.test(E.nodeName)},button:function(E){var F=E.nodeName.toLowerCase();return F==="input"&&E.type==="button"||F==="button"},text:function(E){var F;return E.nodeName.toLowerCase()==="input"&&E.type==="text"&&((F=E.getAttribute("type"))==null||F.toLowerCase()==="text")},first:Ni(function(){return[0]}),last:Ni(function(E,F){return[F-1]}),eq:Ni(function(E,F,B){return[B<0?B+F:B]}),even:Ni(function(E,F){for(var B=0;B<F;B+=2)E.push(B);return E}),odd:Ni(function(E,F){for(var B=1;B<F;B+=2)E.push(B);return E}),lt:Ni(function(E,F,B){for(var ae=B<0?B+F:B>F?F:B;--ae>=0;)E.push(ae);return E}),gt:Ni(function(E,F,B){for(var ae=B<0?B+F:B;++ae<F;)E.push(ae);return E})}},g.pseudos.nth=g.pseudos.eq;for(c in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})g.pseudos[c]=of(c);for(c in{submit:!0,reset:!0})g.pseudos[c]=lf(c);function nl(){}nl.prototype=g.filters=g.pseudos,g.setFilters=new nl,T=Tt.tokenize=function(E,F){var B,ae,V,ue,de,we,Ae,qe=qr[E+" "];if(qe)return F?0:qe.slice(0);for(de=E,we=[],Ae=g.preFilter;de;){(!B||(ae=Zu.exec(de)))&&(ae&&(de=de.slice(ae[0].length)||de),we.push(V=[])),B=!1,(ae=$o.exec(de))&&(B=ae.shift(),V.push({value:B,type:ae[0].replace(Ms," ")}),de=de.slice(B.length));for(ue in g.filter)(ae=Ss[ue].exec(de))&&(!Ae[ue]||(ae=Ae[ue](ae)))&&(B=ae.shift(),V.push({value:B,type:ue,matches:ae}),de=de.slice(B.length));if(!B)break}return F?de.length:de?Tt.error(E):qr(E,we).slice(0)};function Ts(E){for(var F=0,B=E.length,ae="";F<B;F++)ae+=E[F].value;return ae}function Es(E,F,B){var ae=F.dir,V=F.next,ue=V||ae,de=B&&ue==="parentNode",we=dt++;return F.first?function(Ae,qe,Ve){for(;Ae=Ae[ae];)if(Ae.nodeType===1||de)return E(Ae,qe,Ve);return!1}:function(Ae,qe,Ve){var Ye,lt,Et,Xe=[fn,we];if(Ve){for(;Ae=Ae[ae];)if((Ae.nodeType===1||de)&&E(Ae,qe,Ve))return!0}else for(;Ae=Ae[ae];)if(Ae.nodeType===1||de)if(Et=Ae[wt]||(Ae[wt]={}),lt=Et[Ae.uniqueID]||(Et[Ae.uniqueID]={}),V&&V===Ae.nodeName.toLowerCase())Ae=Ae[ae]||Ae;else{if((Ye=lt[ue])&&Ye[0]===fn&&Ye[1]===we)return Xe[2]=Ye[2];if(lt[ue]=Xe,Xe[2]=E(Ae,qe,Ve))return!0}return!1}}function wa(E){return E.length>1?function(F,B,ae){for(var V=E.length;V--;)if(!E[V](F,B,ae))return!1;return!0}:E[0]}function cf(E,F,B){for(var ae=0,V=F.length;ae<V;ae++)Tt(E,F[ae],B);return B}function As(E,F,B,ae,V){for(var ue,de=[],we=0,Ae=E.length,qe=F!=null;we<Ae;we++)(ue=E[we])&&(!B||B(ue,ae,V))&&(de.push(ue),qe&&F.push(we));return de}function Ta(E,F,B,ae,V,ue){return ae&&!ae[wt]&&(ae=Ta(ae)),V&&!V[wt]&&(V=Ta(V,ue)),On(function(de,we,Ae,qe){var Ve,Ye,lt,Et=[],Xe=[],Wt=we.length,Zt=de||cf(F||"*",Ae.nodeType?[Ae]:Ae,[]),_n=E&&(de||!F)?As(Zt,Et,E,Ae,qe):Zt,It=B?V||(de?E:Wt||ae)?[]:we:_n;if(B&&B(_n,It,Ae,qe),ae)for(Ve=As(It,Xe),ae(Ve,[],Ae,qe),Ye=Ve.length;Ye--;)(lt=Ve[Ye])&&(It[Xe[Ye]]=!(_n[Xe[Ye]]=lt));if(de){if(V||E){if(V){for(Ve=[],Ye=It.length;Ye--;)(lt=It[Ye])&&Ve.push(_n[Ye]=lt);V(null,It=[],Ve,qe)}for(Ye=It.length;Ye--;)(lt=It[Ye])&&(Ve=V?Pi(de,lt):Et[Ye])>-1&&(de[Ve]=!(we[Ve]=lt))}}else It=As(It===we?It.splice(Wt,It.length):It),V?V(null,we,It,qe):di.apply(we,It)})}function Ea(E){for(var F,B,ae,V=E.length,ue=g.relative[E[0].type],de=ue||g.relative[" "],we=ue?1:0,Ae=Es(function(Ye){return Ye===F},de,!0),qe=Es(function(Ye){return Pi(F,Ye)>-1},de,!0),Ve=[function(Ye,lt,Et){var Xe=!ue&&(Et||lt!==W)||((F=lt).nodeType?Ae(Ye,lt,Et):qe(Ye,lt,Et));return F=null,Xe}];we<V;we++)if(B=g.relative[E[we].type])Ve=[Es(wa(Ve),B)];else{if(B=g.filter[E[we].type].apply(null,E[we].matches),B[wt]){for(ae=++we;ae<V&&!g.relative[E[ae].type];ae++);return Ta(we>1&&wa(Ve),we>1&&Ts(E.slice(0,we-1).concat({value:E[we-2].type===" "?"*":""})).replace(Ms,"$1"),B,we<ae&&Ea(E.slice(we,ae)),ae<V&&Ea(E=E.slice(ae)),ae<V&&Ts(E))}Ve.push(B)}return wa(Ve)}function uf(E,F){var B=F.length>0,ae=E.length>0,V=function(ue,de,we,Ae,qe){var Ve,Ye,lt,Et=0,Xe="0",Wt=ue&&[],Zt=[],_n=W,It=ue||ae&&g.find.TAG("*",qe),Yr=fn+=_n==null?1:Math.random()||.1,Kr=It.length;for(qe&&(W=de==ie||de||qe);Xe!==Kr&&(Ve=It[Xe])!=null;Xe++){if(ae&&Ve){for(Ye=0,!de&&Ve.ownerDocument!=ie&&(Z(Ve),we=!nt);lt=E[Ye++];)if(lt(Ve,de||ie,we)){Ae.push(Ve);break}qe&&(fn=Yr)}B&&((Ve=!lt&&Ve)&&Et--,ue&&Wt.push(Ve))}if(Et+=Xe,B&&Xe!==Et){for(Ye=0;lt=F[Ye++];)lt(Wt,Zt,de,we);if(ue){if(Et>0)for(;Xe--;)Wt[Xe]||Zt[Xe]||(Zt[Xe]=hi.call(Ae));Zt=As(Zt)}di.apply(Ae,Zt),qe&&!ue&&Zt.length>0&&Et+F.length>1&&Tt.uniqueSort(Ae)}return qe&&(fn=Yr,W=_n),Wt};return B?On(V):V}return U=Tt.compile=function(E,F){var B,ae=[],V=[],ue=bs[E+" "];if(!ue){for(F||(F=T(E)),B=F.length;B--;)ue=Ea(F[B]),ue[wt]?ae.push(ue):V.push(ue);ue=bs(E,uf(V,ae)),ue.selector=E}return ue},O=Tt.select=function(E,F,B,ae){var V,ue,de,we,Ae,qe=typeof E=="function"&&E,Ve=!ae&&T(E=qe.selector||E);if(B=B||[],Ve.length===1){if(ue=Ve[0]=Ve[0].slice(0),ue.length>2&&(de=ue[0]).type==="ID"&&F.nodeType===9&&nt&&g.relative[ue[1].type]){if(F=(g.find.ID(de.matches[0].replace(Kn,$n),F)||[])[0],F)qe&&(F=F.parentNode);else return B;E=E.slice(ue.shift().value.length)}for(V=Ss.needsContext.test(E)?0:ue.length;V--&&(de=ue[V],!g.relative[we=de.type]);)if((Ae=g.find[we])&&(ae=Ae(de.matches[0].replace(Kn,$n),ba.test(ue[0].type)&&Sa(F.parentNode)||F))){if(ue.splice(V,1),E=ae.length&&Ts(ue),!E)return di.apply(B,ae),B;break}}return(qe||U(E,Ve))(ae,F,!nt,B,!F||ba.test(E)&&Sa(F.parentNode)||F),B},d.sortStable=wt.split("").sort(Ri).join("")===wt,d.detectDuplicates=!!he,Z(),d.sortDetached=Fn(function(E){return E.compareDocumentPosition(ie.createElement("fieldset"))&1}),Fn(function(E){return E.innerHTML="<a href='#'></a>",E.firstChild.getAttribute("href")==="#"})||Ma("type|href|height|width",function(E,F,B){if(!B)return E.getAttribute(F,F.toLowerCase()==="type"?1:2)}),(!d.attributes||!Fn(function(E){return E.innerHTML="<input/>",E.firstChild.setAttribute("value",""),E.firstChild.getAttribute("value")===""}))&&Ma("value",function(E,F,B){if(!B&&E.nodeName.toLowerCase()==="input")return E.defaultValue}),Fn(function(E){return E.getAttribute("disabled")==null})||Ma(va,function(E,F,B){var ae;if(!B)return E[F]===!0?F.toLowerCase():(ae=E.getAttributeNode(F))&&ae.specified?ae.value:null}),Tt}(e);h.find=A,h.expr=A.selectors,h.expr[":"]=h.expr.pseudos,h.uniqueSort=h.unique=A.uniqueSort,h.text=A.getText,h.isXMLDoc=A.isXML,h.contains=A.contains,h.escapeSelector=A.escape;var z=function(s,c,d){for(var g=[],b=d!==void 0;(s=s[c])&&s.nodeType!==9;)if(s.nodeType===1){if(b&&h(s).is(d))break;g.push(s)}return g},J=function(s,c){for(var d=[];s;s=s.nextSibling)s.nodeType===1&&s!==c&&d.push(s);return d},pe=h.expr.match.needsContext;function Se(s,c){return s.nodeName&&s.nodeName.toLowerCase()===c.toLowerCase()}var Q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Y(s,c,d){return v(c)?h.grep(s,function(g,b){return!!c.call(g,b,g)!==d}):c.nodeType?h.grep(s,function(g){return g===c!==d}):typeof c!="string"?h.grep(s,function(g){return u.call(c,g)>-1!==d}):h.filter(c,s,d)}h.filter=function(s,c,d){var g=c[0];return d&&(s=":not("+s+")"),c.length===1&&g.nodeType===1?h.find.matchesSelector(g,s)?[g]:[]:h.find.matches(s,h.grep(c,function(b){return b.nodeType===1}))},h.fn.extend({find:function(s){var c,d,g=this.length,b=this;if(typeof s!="string")return this.pushStack(h(s).filter(function(){for(c=0;c<g;c++)if(h.contains(b[c],this))return!0}));for(d=this.pushStack([]),c=0;c<g;c++)h.find(s,b[c],d);return g>1?h.uniqueSort(d):d},filter:function(s){return this.pushStack(Y(this,s||[],!1))},not:function(s){return this.pushStack(Y(this,s||[],!0))},is:function(s){return!!Y(this,typeof s=="string"&&pe.test(s)?h(s):s||[],!1).length}});var oe,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ve=h.fn.init=function(s,c,d){var g,b;if(!s)return this;if(d=d||oe,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?g=[null,s,null]:g=me.exec(s),g&&(g[1]||!c))if(g[1]){if(c=c instanceof h?c[0]:c,h.merge(this,h.parseHTML(g[1],c&&c.nodeType?c.ownerDocument||c:w,!0)),Q.test(g[1])&&h.isPlainObject(c))for(g in c)v(this[g])?this[g](c[g]):this.attr(g,c[g]);return this}else return b=w.getElementById(g[2]),b&&(this[0]=b,this.length=1),this;else return!c||c.jquery?(c||d).find(s):this.constructor(c).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(v(s))return d.ready!==void 0?d.ready(s):s(h)}return h.makeArray(s,this)};ve.prototype=h.fn,oe=h(w);var ce=/^(?:parents|prev(?:Until|All))/,$={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(s){var c=h(s,this),d=c.length;return this.filter(function(){for(var g=0;g<d;g++)if(h.contains(this,c[g]))return!0})},closest:function(s,c){var d,g=0,b=this.length,M=[],T=typeof s!="string"&&h(s);if(!pe.test(s)){for(;g<b;g++)for(d=this[g];d&&d!==c;d=d.parentNode)if(d.nodeType<11&&(T?T.index(d)>-1:d.nodeType===1&&h.find.matchesSelector(d,s))){M.push(d);break}}return this.pushStack(M.length>1?h.uniqueSort(M):M)},index:function(s){return s?typeof s=="string"?u.call(h(s),this[0]):u.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,c){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(s,c))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function te(s,c){for(;(s=s[c])&&s.nodeType!==1;);return s}h.each({parent:function(s){var c=s.parentNode;return c&&c.nodeType!==11?c:null},parents:function(s){return z(s,"parentNode")},parentsUntil:function(s,c,d){return z(s,"parentNode",d)},next:function(s){return te(s,"nextSibling")},prev:function(s){return te(s,"previousSibling")},nextAll:function(s){return z(s,"nextSibling")},prevAll:function(s){return z(s,"previousSibling")},nextUntil:function(s,c,d){return z(s,"nextSibling",d)},prevUntil:function(s,c,d){return z(s,"previousSibling",d)},siblings:function(s){return J((s.parentNode||{}).firstChild,s)},children:function(s){return J(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(Se(s,"template")&&(s=s.content||s),h.merge([],s.childNodes))}},function(s,c){h.fn[s]=function(d,g){var b=h.map(this,c,d);return s.slice(-5)!=="Until"&&(g=d),g&&typeof g=="string"&&(b=h.filter(g,b)),this.length>1&&($[s]||h.uniqueSort(b),ce.test(s)&&b.reverse()),this.pushStack(b)}});var xe=/[^\x20\t\r\n\f]+/g;function be(s){var c={};return h.each(s.match(xe)||[],function(d,g){c[g]=!0}),c}h.Callbacks=function(s){s=typeof s=="string"?be(s):h.extend({},s);var c,d,g,b,M=[],T=[],U=-1,O=function(){for(b=b||s.once,g=c=!0;T.length;U=-1)for(d=T.shift();++U<M.length;)M[U].apply(d[0],d[1])===!1&&s.stopOnFalse&&(U=M.length,d=!1);s.memory||(d=!1),c=!1,b&&(d?M=[]:M="")},W={add:function(){return M&&(d&&!c&&(U=M.length-1,T.push(d)),function ee(he){h.each(he,function(Z,ie){v(ie)?(!s.unique||!W.has(ie))&&M.push(ie):ie&&ie.length&&R(ie)!=="string"&&ee(ie)})}(arguments),d&&!c&&O()),this},remove:function(){return h.each(arguments,function(ee,he){for(var Z;(Z=h.inArray(he,M,Z))>-1;)M.splice(Z,1),Z<=U&&U--}),this},has:function(ee){return ee?h.inArray(ee,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return b=T=[],M=d="",this},disabled:function(){return!M},lock:function(){return b=T=[],!d&&!c&&(M=d=""),this},locked:function(){return!!b},fireWith:function(ee,he){return b||(he=he||[],he=[ee,he.slice?he.slice():he],T.push(he),c||O()),this},fire:function(){return W.fireWith(this,arguments),this},fired:function(){return!!g}};return W};function ge(s){return s}function Ie(s){throw s}function $e(s,c,d,g){var b;try{s&&v(b=s.promise)?b.call(s).done(c).fail(d):s&&v(b=s.then)?b.call(s,c,d):c.apply(void 0,[s].slice(g))}catch(M){d.apply(void 0,[M])}}h.extend({Deferred:function(s){var c=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],d="pending",g={state:function(){return d},always:function(){return b.done(arguments).fail(arguments),this},catch:function(M){return g.then(null,M)},pipe:function(){var M=arguments;return h.Deferred(function(T){h.each(c,function(U,O){var W=v(M[O[4]])&&M[O[4]];b[O[1]](function(){var ee=W&&W.apply(this,arguments);ee&&v(ee.promise)?ee.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[O[0]+"With"](this,W?[ee]:arguments)})}),M=null}).promise()},then:function(M,T,U){var O=0;function W(ee,he,Z,ie){return function(){var ze=this,nt=arguments,Be=function(){var Ht,mn;if(!(ee<O)){if(Ht=Z.apply(ze,nt),Ht===he.promise())throw new TypeError("Thenable self-resolution");mn=Ht&&(typeof Ht=="object"||typeof Ht=="function")&&Ht.then,v(mn)?ie?mn.call(Ht,W(O,he,ge,ie),W(O,he,Ie,ie)):(O++,mn.call(Ht,W(O,he,ge,ie),W(O,he,Ie,ie),W(O,he,ge,he.notifyWith))):(Z!==ge&&(ze=void 0,nt=[Ht]),(ie||he.resolveWith)(ze,nt))}},Vt=ie?Be:function(){try{Be()}catch(Ht){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(Ht,Vt.stackTrace),ee+1>=O&&(Z!==Ie&&(ze=void 0,nt=[Ht]),he.rejectWith(ze,nt))}};ee?Vt():(h.Deferred.getStackHook&&(Vt.stackTrace=h.Deferred.getStackHook()),e.setTimeout(Vt))}}return h.Deferred(function(ee){c[0][3].add(W(0,ee,v(U)?U:ge,ee.notifyWith)),c[1][3].add(W(0,ee,v(M)?M:ge)),c[2][3].add(W(0,ee,v(T)?T:Ie))}).promise()},promise:function(M){return M!=null?h.extend(M,g):g}},b={};return h.each(c,function(M,T){var U=T[2],O=T[5];g[T[1]]=U.add,O&&U.add(function(){d=O},c[3-M][2].disable,c[3-M][3].disable,c[0][2].lock,c[0][3].lock),U.add(T[3].fire),b[T[0]]=function(){return b[T[0]+"With"](this===b?void 0:this,arguments),this},b[T[0]+"With"]=U.fireWith}),g.promise(b),s&&s.call(b,b),b},when:function(s){var c=arguments.length,d=c,g=Array(d),b=r.call(arguments),M=h.Deferred(),T=function(U){return function(O){g[U]=this,b[U]=arguments.length>1?r.call(arguments):O,--c||M.resolveWith(g,b)}};if(c<=1&&($e(s,M.done(T(d)).resolve,M.reject,!c),M.state()==="pending"||v(b[d]&&b[d].then)))return M.then();for(;d--;)$e(b[d],T(d),M.reject);return M.promise()}});var fe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(s,c){e.console&&e.console.warn&&s&&fe.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,c)},h.readyException=function(s){e.setTimeout(function(){throw s})};var ht=h.Deferred();h.fn.ready=function(s){return ht.then(s).catch(function(c){h.readyException(c)}),this},h.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(s!==!0&&--h.readyWait>0)&&ht.resolveWith(w,[h]))}}),h.ready.then=ht.then;function je(){w.removeEventListener("DOMContentLoaded",je),e.removeEventListener("load",je),h.ready()}w.readyState==="complete"||w.readyState!=="loading"&&!w.documentElement.doScroll?e.setTimeout(h.ready):(w.addEventListener("DOMContentLoaded",je),e.addEventListener("load",je));var Ge=function(s,c,d,g,b,M,T){var U=0,O=s.length,W=d==null;if(R(d)==="object"){b=!0;for(U in d)Ge(s,c,U,d[U],!0,M,T)}else if(g!==void 0&&(b=!0,v(g)||(T=!0),W&&(T?(c.call(s,g),c=null):(W=c,c=function(ee,he,Z){return W.call(h(ee),Z)})),c))for(;U<O;U++)c(s[U],d,T?g:g.call(s[U],U,c(s[U],d)));return b?s:W?c.call(s):O?c(s[0],d):M},Ne=/^-ms-/,xt=/-([a-z])/g;function st(s,c){return c.toUpperCase()}function Fe(s){return s.replace(Ne,"ms-").replace(xt,st)}var Lt=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function Pt(){this.expando=h.expando+Pt.uid++}Pt.uid=1,Pt.prototype={cache:function(s){var c=s[this.expando];return c||(c={},Lt(s)&&(s.nodeType?s[this.expando]=c:Object.defineProperty(s,this.expando,{value:c,configurable:!0}))),c},set:function(s,c,d){var g,b=this.cache(s);if(typeof c=="string")b[Fe(c)]=d;else for(g in c)b[Fe(g)]=c[g];return b},get:function(s,c){return c===void 0?this.cache(s):s[this.expando]&&s[this.expando][Fe(c)]},access:function(s,c,d){return c===void 0||c&&typeof c=="string"&&d===void 0?this.get(s,c):(this.set(s,c,d),d!==void 0?d:c)},remove:function(s,c){var d,g=s[this.expando];if(g!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(Fe):(c=Fe(c),c=c in g?[c]:c.match(xe)||[]),d=c.length;d--;)delete g[c[d]];(c===void 0||h.isEmptyObject(g))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var c=s[this.expando];return c!==void 0&&!h.isEmptyObject(c)}};var De=new Pt,St=new Pt,kt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,vt=/[A-Z]/g;function ln(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:kt.test(s)?JSON.parse(s):s}function en(s,c,d){var g;if(d===void 0&&s.nodeType===1)if(g="data-"+c.replace(vt,"-$&").toLowerCase(),d=s.getAttribute(g),typeof d=="string"){try{d=ln(d)}catch{}St.set(s,c,d)}else d=void 0;return d}h.extend({hasData:function(s){return St.hasData(s)||De.hasData(s)},data:function(s,c,d){return St.access(s,c,d)},removeData:function(s,c){St.remove(s,c)},_data:function(s,c,d){return De.access(s,c,d)},_removeData:function(s,c){De.remove(s,c)}}),h.fn.extend({data:function(s,c){var d,g,b,M=this[0],T=M&&M.attributes;if(s===void 0){if(this.length&&(b=St.get(M),M.nodeType===1&&!De.get(M,"hasDataAttrs"))){for(d=T.length;d--;)T[d]&&(g=T[d].name,g.indexOf("data-")===0&&(g=Fe(g.slice(5)),en(M,g,b[g])));De.set(M,"hasDataAttrs",!0)}return b}return typeof s=="object"?this.each(function(){St.set(this,s)}):Ge(this,function(U){var O;if(M&&U===void 0)return O=St.get(M,s),O!==void 0||(O=en(M,s),O!==void 0)?O:void 0;this.each(function(){St.set(this,s,U)})},null,c,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){St.remove(this,s)})}}),h.extend({queue:function(s,c,d){var g;if(s)return c=(c||"fx")+"queue",g=De.get(s,c),d&&(!g||Array.isArray(d)?g=De.access(s,c,h.makeArray(d)):g.push(d)),g||[]},dequeue:function(s,c){c=c||"fx";var d=h.queue(s,c),g=d.length,b=d.shift(),M=h._queueHooks(s,c),T=function(){h.dequeue(s,c)};b==="inprogress"&&(b=d.shift(),g--),b&&(c==="fx"&&d.unshift("inprogress"),delete M.stop,b.call(s,T,M)),!g&&M&&M.empty.fire()},_queueHooks:function(s,c){var d=c+"queueHooks";return De.get(s,d)||De.access(s,d,{empty:h.Callbacks("once memory").add(function(){De.remove(s,[c+"queue",d])})})}}),h.fn.extend({queue:function(s,c){var d=2;return typeof s!="string"&&(c=s,s="fx",d--),arguments.length<d?h.queue(this[0],s):c===void 0?this:this.each(function(){var g=h.queue(this,s,c);h._queueHooks(this,s),s==="fx"&&g[0]!=="inprogress"&&h.dequeue(this,s)})},dequeue:function(s){return this.each(function(){h.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,c){var d,g=1,b=h.Deferred(),M=this,T=this.length,U=function(){--g||b.resolveWith(M,[M])};for(typeof s!="string"&&(c=s,s=void 0),s=s||"fx";T--;)d=De.get(M[T],s+"queueHooks"),d&&d.empty&&(g++,d.empty.add(U));return U(),b.promise(c)}});var N=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,C=new RegExp("^(?:([+-])=|)("+N+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],_e=w.documentElement,Me=function(s){return h.contains(s.ownerDocument,s)},Le={composed:!0};_e.getRootNode&&(Me=function(s){return h.contains(s.ownerDocument,s)||s.getRootNode(Le)===s.ownerDocument});var We=function(s,c){return s=c||s,s.style.display==="none"||s.style.display===""&&Me(s)&&h.css(s,"display")==="none"};function k(s,c,d,g){var b,M,T=20,U=g?function(){return g.cur()}:function(){return h.css(s,c,"")},O=U(),W=d&&d[3]||(h.cssNumber[c]?"":"px"),ee=s.nodeType&&(h.cssNumber[c]||W!=="px"&&+O)&&C.exec(h.css(s,c));if(ee&&ee[3]!==W){for(O=O/2,W=W||ee[3],ee=+O||1;T--;)h.style(s,c,ee+W),(1-M)*(1-(M=U()/O||.5))<=0&&(T=0),ee=ee/M;ee=ee*2,h.style(s,c,ee+W),d=d||[]}return d&&(ee=+ee||+O||0,b=d[1]?ee+(d[1]+1)*d[2]:+d[2],g&&(g.unit=W,g.start=ee,g.end=b)),b}var j={};function Pe(s){var c,d=s.ownerDocument,g=s.nodeName,b=j[g];return b||(c=d.body.appendChild(d.createElement(g)),b=h.css(c,"display"),c.parentNode.removeChild(c),b==="none"&&(b="block"),j[g]=b,b)}function Re(s,c){for(var d,g,b=[],M=0,T=s.length;M<T;M++)g=s[M],g.style&&(d=g.style.display,c?(d==="none"&&(b[M]=De.get(g,"display")||null,b[M]||(g.style.display="")),g.style.display===""&&We(g)&&(b[M]=Pe(g))):d!=="none"&&(b[M]="none",De.set(g,"display",d)));for(M=0;M<T;M++)b[M]!=null&&(s[M].style.display=b[M]);return s}h.fn.extend({show:function(){return Re(this,!0)},hide:function(){return Re(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){We(this)?h(this).show():h(this).hide()})}});var Ee=/^(?:checkbox|radio)$/i,ke=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ue=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=w.createDocumentFragment(),c=s.appendChild(w.createElement("div")),d=w.createElement("input");d.setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),c.appendChild(d),S.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",S.option=!!c.lastChild})();var Ze={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ze.tbody=Ze.tfoot=Ze.colgroup=Ze.caption=Ze.thead,Ze.th=Ze.td,S.option||(Ze.optgroup=Ze.option=[1,"<select multiple='multiple'>","</select>"]);function Ke(s,c){var d;return typeof s.getElementsByTagName<"u"?d=s.getElementsByTagName(c||"*"):typeof s.querySelectorAll<"u"?d=s.querySelectorAll(c||"*"):d=[],c===void 0||c&&Se(s,c)?h.merge([s],d):d}function pt(s,c){for(var d=0,g=s.length;d<g;d++)De.set(s[d],"globalEval",!c||De.get(c[d],"globalEval"))}var G=/<|&#?\w+;/;function se(s,c,d,g,b){for(var M,T,U,O,W,ee,he=c.createDocumentFragment(),Z=[],ie=0,ze=s.length;ie<ze;ie++)if(M=s[ie],M||M===0)if(R(M)==="object")h.merge(Z,M.nodeType?[M]:M);else if(!G.test(M))Z.push(c.createTextNode(M));else{for(T=T||he.appendChild(c.createElement("div")),U=(ke.exec(M)||["",""])[1].toLowerCase(),O=Ze[U]||Ze._default,T.innerHTML=O[1]+h.htmlPrefilter(M)+O[2],ee=O[0];ee--;)T=T.lastChild;h.merge(Z,T.childNodes),T=he.firstChild,T.textContent=""}for(he.textContent="",ie=0;M=Z[ie++];){if(g&&h.inArray(M,g)>-1){b&&b.push(M);continue}if(W=Me(M),T=Ke(he.appendChild(M),"script"),W&&pt(T),d)for(ee=0;M=T[ee++];)Ue.test(M.type||"")&&d.push(M)}return he}var ye=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Oe(){return!1}function mt(s,c){return s===zt()==(c==="focus")}function zt(){try{return w.activeElement}catch{}}function Bt(s,c,d,g,b,M){var T,U;if(typeof c=="object"){typeof d!="string"&&(g=g||d,d=void 0);for(U in c)Bt(s,U,d,g,c[U],M);return s}if(g==null&&b==null?(b=d,g=d=void 0):b==null&&(typeof d=="string"?(b=g,g=void 0):(b=g,g=d,d=void 0)),b===!1)b=Oe;else if(!b)return s;return M===1&&(T=b,b=function(O){return h().off(O),T.apply(this,arguments)},b.guid=T.guid||(T.guid=h.guid++)),s.each(function(){h.event.add(this,c,b,g,d)})}h.event={global:{},add:function(s,c,d,g,b){var M,T,U,O,W,ee,he,Z,ie,ze,nt,Be=De.get(s);if(!!Lt(s))for(d.handler&&(M=d,d=M.handler,b=M.selector),b&&h.find.matchesSelector(_e,b),d.guid||(d.guid=h.guid++),(O=Be.events)||(O=Be.events=Object.create(null)),(T=Be.handle)||(T=Be.handle=function(Vt){return typeof h<"u"&&h.event.triggered!==Vt.type?h.event.dispatch.apply(s,arguments):void 0}),c=(c||"").match(xe)||[""],W=c.length;W--;)U=ye.exec(c[W])||[],ie=nt=U[1],ze=(U[2]||"").split(".").sort(),ie&&(he=h.event.special[ie]||{},ie=(b?he.delegateType:he.bindType)||ie,he=h.event.special[ie]||{},ee=h.extend({type:ie,origType:nt,data:g,handler:d,guid:d.guid,selector:b,needsContext:b&&h.expr.match.needsContext.test(b),namespace:ze.join(".")},M),(Z=O[ie])||(Z=O[ie]=[],Z.delegateCount=0,(!he.setup||he.setup.call(s,g,ze,T)===!1)&&s.addEventListener&&s.addEventListener(ie,T)),he.add&&(he.add.call(s,ee),ee.handler.guid||(ee.handler.guid=d.guid)),b?Z.splice(Z.delegateCount++,0,ee):Z.push(ee),h.event.global[ie]=!0)},remove:function(s,c,d,g,b){var M,T,U,O,W,ee,he,Z,ie,ze,nt,Be=De.hasData(s)&&De.get(s);if(!(!Be||!(O=Be.events))){for(c=(c||"").match(xe)||[""],W=c.length;W--;){if(U=ye.exec(c[W])||[],ie=nt=U[1],ze=(U[2]||"").split(".").sort(),!ie){for(ie in O)h.event.remove(s,ie+c[W],d,g,!0);continue}for(he=h.event.special[ie]||{},ie=(g?he.delegateType:he.bindType)||ie,Z=O[ie]||[],U=U[2]&&new RegExp("(^|\\.)"+ze.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=M=Z.length;M--;)ee=Z[M],(b||nt===ee.origType)&&(!d||d.guid===ee.guid)&&(!U||U.test(ee.namespace))&&(!g||g===ee.selector||g==="**"&&ee.selector)&&(Z.splice(M,1),ee.selector&&Z.delegateCount--,he.remove&&he.remove.call(s,ee));T&&!Z.length&&((!he.teardown||he.teardown.call(s,ze,Be.handle)===!1)&&h.removeEvent(s,ie,Be.handle),delete O[ie])}h.isEmptyObject(O)&&De.remove(s,"handle events")}},dispatch:function(s){var c,d,g,b,M,T,U=new Array(arguments.length),O=h.event.fix(s),W=(De.get(this,"events")||Object.create(null))[O.type]||[],ee=h.event.special[O.type]||{};for(U[0]=O,c=1;c<arguments.length;c++)U[c]=arguments[c];if(O.delegateTarget=this,!(ee.preDispatch&&ee.preDispatch.call(this,O)===!1)){for(T=h.event.handlers.call(this,O,W),c=0;(b=T[c++])&&!O.isPropagationStopped();)for(O.currentTarget=b.elem,d=0;(M=b.handlers[d++])&&!O.isImmediatePropagationStopped();)(!O.rnamespace||M.namespace===!1||O.rnamespace.test(M.namespace))&&(O.handleObj=M,O.data=M.data,g=((h.event.special[M.origType]||{}).handle||M.handler).apply(b.elem,U),g!==void 0&&(O.result=g)===!1&&(O.preventDefault(),O.stopPropagation()));return ee.postDispatch&&ee.postDispatch.call(this,O),O.result}},handlers:function(s,c){var d,g,b,M,T,U=[],O=c.delegateCount,W=s.target;if(O&&W.nodeType&&!(s.type==="click"&&s.button>=1)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&!(s.type==="click"&&W.disabled===!0)){for(M=[],T={},d=0;d<O;d++)g=c[d],b=g.selector+" ",T[b]===void 0&&(T[b]=g.needsContext?h(b,this).index(W)>-1:h.find(b,this,null,[W]).length),T[b]&&M.push(g);M.length&&U.push({elem:W,handlers:M})}}return W=this,O<c.length&&U.push({elem:W,handlers:c.slice(O)}),U},addProp:function(s,c){Object.defineProperty(h.Event.prototype,s,{enumerable:!0,configurable:!0,get:v(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(d){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(s){return s[h.expando]?s:new h.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var c=this||s;return Ee.test(c.type)&&c.click&&Se(c,"input")&&Mn(c,"click",Ce),!1},trigger:function(s){var c=this||s;return Ee.test(c.type)&&c.click&&Se(c,"input")&&Mn(c,"click"),!0},_default:function(s){var c=s.target;return Ee.test(c.type)&&c.click&&Se(c,"input")&&De.get(c,"click")||Se(c,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Mn(s,c,d){if(!d){De.get(s,c)===void 0&&h.event.add(s,c,Ce);return}De.set(s,c,!1),h.event.add(s,c,{namespace:!1,handler:function(g){var b,M,T=De.get(this,c);if(g.isTrigger&1&&this[c]){if(T.length)(h.event.special[c]||{}).delegateType&&g.stopPropagation();else if(T=r.call(arguments),De.set(this,c,T),b=d(this,c),this[c](),M=De.get(this,c),T!==M||b?De.set(this,c,!1):M={},T!==M)return g.stopImmediatePropagation(),g.preventDefault(),M&&M.value}else T.length&&(De.set(this,c,{value:h.event.trigger(h.extend(T[0],h.Event.prototype),T.slice(1),this)}),g.stopImmediatePropagation())}})}h.removeEvent=function(s,c,d){s.removeEventListener&&s.removeEventListener(c,d)},h.Event=function(s,c){if(!(this instanceof h.Event))return new h.Event(s,c);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ce:Oe,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,c&&h.extend(this,c),this.timeStamp=s&&s.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:Oe,isPropagationStopped:Oe,isImmediatePropagationStopped:Oe,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ce,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ce,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ce,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(s,c){h.event.special[s]={setup:function(){return Mn(this,s,mt),!1},trigger:function(){return Mn(this,s),!0},_default:function(d){return De.get(d.target,s)},delegateType:c}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,c){h.event.special[s]={delegateType:c,bindType:c,handle:function(d){var g,b=this,M=d.relatedTarget,T=d.handleObj;return(!M||M!==b&&!h.contains(b,M))&&(d.type=T.origType,g=T.handler.apply(this,arguments),d.type=c),g}}}),h.fn.extend({on:function(s,c,d,g){return Bt(this,s,c,d,g)},one:function(s,c,d,g){return Bt(this,s,c,d,g,1)},off:function(s,c,d){var g,b;if(s&&s.preventDefault&&s.handleObj)return g=s.handleObj,h(s.delegateTarget).off(g.namespace?g.origType+"."+g.namespace:g.origType,g.selector,g.handler),this;if(typeof s=="object"){for(b in s)this.off(b,c,s[b]);return this}return(c===!1||typeof c=="function")&&(d=c,c=void 0),d===!1&&(d=Oe),this.each(function(){h.event.remove(this,s,d,c)})}});var Rt=/<script|<style|<link/i,In=/checked\s*(?:[^=]|=\s*.checked.)/i,cn=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Hr(s,c){return Se(s,"table")&&Se(c.nodeType!==11?c:c.firstChild,"tr")&&h(s).children("tbody")[0]||s}function ua(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function fa(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function vs(s,c){var d,g,b,M,T,U,O;if(c.nodeType===1){if(De.hasData(s)&&(M=De.get(s),O=M.events,O)){De.remove(c,"handle events");for(b in O)for(d=0,g=O[b].length;d<g;d++)h.event.add(c,b,O[b][d])}St.hasData(s)&&(T=St.access(s),U=h.extend({},T),St.set(c,U))}}function D(s,c){var d=c.nodeName.toLowerCase();d==="input"&&Ee.test(s.type)?c.checked=s.checked:(d==="input"||d==="textarea")&&(c.defaultValue=s.defaultValue)}function K(s,c,d,g){c=o(c);var b,M,T,U,O,W,ee=0,he=s.length,Z=he-1,ie=c[0],ze=v(ie);if(ze||he>1&&typeof ie=="string"&&!S.checkClone&&In.test(ie))return s.each(function(nt){var Be=s.eq(nt);ze&&(c[0]=ie.call(this,nt,Be.html())),K(Be,c,d,g)});if(he&&(b=se(c,s[0].ownerDocument,!1,s,g),M=b.firstChild,b.childNodes.length===1&&(b=M),M||g)){for(T=h.map(Ke(b,"script"),ua),U=T.length;ee<he;ee++)O=b,ee!==Z&&(O=h.clone(O,!0,!0),U&&h.merge(T,Ke(O,"script"))),d.call(s[ee],O,ee);if(U)for(W=T[T.length-1].ownerDocument,h.map(T,fa),ee=0;ee<U;ee++)O=T[ee],Ue.test(O.type||"")&&!De.access(O,"globalEval")&&h.contains(W,O)&&(O.src&&(O.type||"").toLowerCase()!=="module"?h._evalUrl&&!O.noModule&&h._evalUrl(O.src,{nonce:O.nonce||O.getAttribute("nonce")},W):P(O.textContent.replace(cn,""),O,W))}return s}function re(s,c,d){for(var g,b=c?h.filter(c,s):s,M=0;(g=b[M])!=null;M++)!d&&g.nodeType===1&&h.cleanData(Ke(g)),g.parentNode&&(d&&Me(g)&&pt(Ke(g,"script")),g.parentNode.removeChild(g));return s}h.extend({htmlPrefilter:function(s){return s},clone:function(s,c,d){var g,b,M,T,U=s.cloneNode(!0),O=Me(s);if(!S.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!h.isXMLDoc(s))for(T=Ke(U),M=Ke(s),g=0,b=M.length;g<b;g++)D(M[g],T[g]);if(c)if(d)for(M=M||Ke(s),T=T||Ke(U),g=0,b=M.length;g<b;g++)vs(M[g],T[g]);else vs(s,U);return T=Ke(U,"script"),T.length>0&&pt(T,!O&&Ke(s,"script")),U},cleanData:function(s){for(var c,d,g,b=h.event.special,M=0;(d=s[M])!==void 0;M++)if(Lt(d)){if(c=d[De.expando]){if(c.events)for(g in c.events)b[g]?h.event.remove(d,g):h.removeEvent(d,g,c.handle);d[De.expando]=void 0}d[St.expando]&&(d[St.expando]=void 0)}}}),h.fn.extend({detach:function(s){return re(this,s,!0)},remove:function(s){return re(this,s)},text:function(s){return Ge(this,function(c){return c===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,s,arguments.length)},append:function(){return K(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Hr(this,s);c.appendChild(s)}})},prepend:function(){return K(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Hr(this,s);c.insertBefore(s,c.firstChild)}})},before:function(){return K(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return K(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,c=0;(s=this[c])!=null;c++)s.nodeType===1&&(h.cleanData(Ke(s,!1)),s.textContent="");return this},clone:function(s,c){return s=s==null?!1:s,c=c==null?s:c,this.map(function(){return h.clone(this,s,c)})},html:function(s){return Ge(this,function(c){var d=this[0]||{},g=0,b=this.length;if(c===void 0&&d.nodeType===1)return d.innerHTML;if(typeof c=="string"&&!Rt.test(c)&&!Ze[(ke.exec(c)||["",""])[1].toLowerCase()]){c=h.htmlPrefilter(c);try{for(;g<b;g++)d=this[g]||{},d.nodeType===1&&(h.cleanData(Ke(d,!1)),d.innerHTML=c);d=0}catch{}}d&&this.empty().append(c)},null,s,arguments.length)},replaceWith:function(){var s=[];return K(this,arguments,function(c){var d=this.parentNode;h.inArray(this,s)<0&&(h.cleanData(Ke(this)),d&&d.replaceChild(c,this))},s)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){h.fn[s]=function(d){for(var g,b=[],M=h(d),T=M.length-1,U=0;U<=T;U++)g=U===T?this:this.clone(!0),h(M[U])[c](g),a.apply(b,g.get());return this.pushStack(b)}});var q=new RegExp("^("+N+")(?!px)[a-z%]+$","i"),le=/^--/,He=function(s){var c=s.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(s)},Qe=function(s,c,d){var g,b,M={};for(b in c)M[b]=s.style[b],s.style[b]=c[b];g=d.call(s);for(b in c)s.style[b]=M[b];return g},at=new RegExp(ne.join("|"),"i"),it="[\\x20\\t\\r\\n\\f]",gt=new RegExp("^"+it+"+|((?:^|[^\\\\])(?:\\\\.)*)"+it+"+$","g");(function(){function s(){if(!!W){O.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",W.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",_e.appendChild(O).appendChild(W);var ee=e.getComputedStyle(W);d=ee.top!=="1%",U=c(ee.marginLeft)===12,W.style.right="60%",M=c(ee.right)===36,g=c(ee.width)===36,W.style.position="absolute",b=c(W.offsetWidth/3)===12,_e.removeChild(O),W=null}}function c(ee){return Math.round(parseFloat(ee))}var d,g,b,M,T,U,O=w.createElement("div"),W=w.createElement("div");!W.style||(W.style.backgroundClip="content-box",W.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=W.style.backgroundClip==="content-box",h.extend(S,{boxSizingReliable:function(){return s(),g},pixelBoxStyles:function(){return s(),M},pixelPosition:function(){return s(),d},reliableMarginLeft:function(){return s(),U},scrollboxSize:function(){return s(),b},reliableTrDimensions:function(){var ee,he,Z,ie;return T==null&&(ee=w.createElement("table"),he=w.createElement("tr"),Z=w.createElement("div"),ee.style.cssText="position:absolute;left:-11111px;border-collapse:separate",he.style.cssText="border:1px solid",he.style.height="1px",Z.style.height="9px",Z.style.display="block",_e.appendChild(ee).appendChild(he).appendChild(Z),ie=e.getComputedStyle(he),T=parseInt(ie.height,10)+parseInt(ie.borderTopWidth,10)+parseInt(ie.borderBottomWidth,10)===he.offsetHeight,_e.removeChild(ee)),T}}))})();function rt(s,c,d){var g,b,M,T,U=le.test(c),O=s.style;return d=d||He(s),d&&(T=d.getPropertyValue(c)||d[c],U&&(T=T.replace(gt,"$1")),T===""&&!Me(s)&&(T=h.style(s,c)),!S.pixelBoxStyles()&&q.test(T)&&at.test(c)&&(g=O.width,b=O.minWidth,M=O.maxWidth,O.minWidth=O.maxWidth=O.width=T,T=d.width,O.width=g,O.minWidth=b,O.maxWidth=M)),T!==void 0?T+"":T}function ut(s,c){return{get:function(){if(s()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var Dt=["Webkit","Moz","ms"],Vn=w.createElement("div").style,Yn={};function ci(s){for(var c=s[0].toUpperCase()+s.slice(1),d=Dt.length;d--;)if(s=Dt[d]+c,s in Vn)return s}function un(s){var c=h.cssProps[s]||Yn[s];return c||(s in Vn?s:Yn[s]=ci(s)||s)}var _t=/^(none|table(?!-c[ea]).+)/,ui={position:"absolute",visibility:"hidden",display:"block"},Ot={letterSpacing:"0",fontWeight:"400"};function tn(s,c,d){var g=C.exec(c);return g?Math.max(0,g[2]-(d||0))+(g[3]||"px"):c}function Sn(s,c,d,g,b,M){var T=c==="width"?1:0,U=0,O=0;if(d===(g?"border":"content"))return 0;for(;T<4;T+=2)d==="margin"&&(O+=h.css(s,d+ne[T],!0,b)),g?(d==="content"&&(O-=h.css(s,"padding"+ne[T],!0,b)),d!=="margin"&&(O-=h.css(s,"border"+ne[T]+"Width",!0,b))):(O+=h.css(s,"padding"+ne[T],!0,b),d!=="padding"?O+=h.css(s,"border"+ne[T]+"Width",!0,b):U+=h.css(s,"border"+ne[T]+"Width",!0,b));return!g&&M>=0&&(O+=Math.max(0,Math.ceil(s["offset"+c[0].toUpperCase()+c.slice(1)]-M-O-U-.5))||0),O}function fi(s,c,d){var g=He(s),b=!S.boxSizingReliable()||d,M=b&&h.css(s,"boxSizing",!1,g)==="border-box",T=M,U=rt(s,c,g),O="offset"+c[0].toUpperCase()+c.slice(1);if(q.test(U)){if(!d)return U;U="auto"}return(!S.boxSizingReliable()&&M||!S.reliableTrDimensions()&&Se(s,"tr")||U==="auto"||!parseFloat(U)&&h.css(s,"display",!1,g)==="inline")&&s.getClientRects().length&&(M=h.css(s,"boxSizing",!1,g)==="border-box",T=O in s,T&&(U=s[O])),U=parseFloat(U)||0,U+Sn(s,c,d||(M?"border":"content"),T,g,U)+"px"}h.extend({cssHooks:{opacity:{get:function(s,c){if(c){var d=rt(s,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(s,c,d,g){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var b,M,T,U=Fe(c),O=le.test(c),W=s.style;if(O||(c=un(U)),T=h.cssHooks[c]||h.cssHooks[U],d!==void 0){if(M=typeof d,M==="string"&&(b=C.exec(d))&&b[1]&&(d=k(s,c,b),M="number"),d==null||d!==d)return;M==="number"&&!O&&(d+=b&&b[3]||(h.cssNumber[U]?"":"px")),!S.clearCloneStyle&&d===""&&c.indexOf("background")===0&&(W[c]="inherit"),(!T||!("set"in T)||(d=T.set(s,d,g))!==void 0)&&(O?W.setProperty(c,d):W[c]=d)}else return T&&"get"in T&&(b=T.get(s,!1,g))!==void 0?b:W[c]}},css:function(s,c,d,g){var b,M,T,U=Fe(c),O=le.test(c);return O||(c=un(U)),T=h.cssHooks[c]||h.cssHooks[U],T&&"get"in T&&(b=T.get(s,!0,d)),b===void 0&&(b=rt(s,c,g)),b==="normal"&&c in Ot&&(b=Ot[c]),d===""||d?(M=parseFloat(b),d===!0||isFinite(M)?M||0:b):b}}),h.each(["height","width"],function(s,c){h.cssHooks[c]={get:function(d,g,b){if(g)return _t.test(h.css(d,"display"))&&(!d.getClientRects().length||!d.getBoundingClientRect().width)?Qe(d,ui,function(){return fi(d,c,b)}):fi(d,c,b)},set:function(d,g,b){var M,T=He(d),U=!S.scrollboxSize()&&T.position==="absolute",O=U||b,W=O&&h.css(d,"boxSizing",!1,T)==="border-box",ee=b?Sn(d,c,b,W,T):0;return W&&U&&(ee-=Math.ceil(d["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(T[c])-Sn(d,c,"border",!1,T)-.5)),ee&&(M=C.exec(g))&&(M[3]||"px")!=="px"&&(d.style[c]=g,g=h.css(d,c)),tn(d,g,ee)}}}),h.cssHooks.marginLeft=ut(S.reliableMarginLeft,function(s,c){if(c)return(parseFloat(rt(s,"marginLeft"))||s.getBoundingClientRect().left-Qe(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),h.each({margin:"",padding:"",border:"Width"},function(s,c){h.cssHooks[s+c]={expand:function(d){for(var g=0,b={},M=typeof d=="string"?d.split(" "):[d];g<4;g++)b[s+ne[g]+c]=M[g]||M[g-2]||M[0];return b}},s!=="margin"&&(h.cssHooks[s+c].set=tn)}),h.fn.extend({css:function(s,c){return Ge(this,function(d,g,b){var M,T,U={},O=0;if(Array.isArray(g)){for(M=He(d),T=g.length;O<T;O++)U[g[O]]=h.css(d,g[O],!1,M);return U}return b!==void 0?h.style(d,g,b):h.css(d,g)},s,c,arguments.length>1)}});function Yt(s,c,d,g,b){return new Yt.prototype.init(s,c,d,g,b)}h.Tween=Yt,Yt.prototype={constructor:Yt,init:function(s,c,d,g,b,M){this.elem=s,this.prop=d,this.easing=b||h.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=g,this.unit=M||(h.cssNumber[d]?"":"px")},cur:function(){var s=Yt.propHooks[this.prop];return s&&s.get?s.get(this):Yt.propHooks._default.get(this)},run:function(s){var c,d=Yt.propHooks[this.prop];return this.options.duration?this.pos=c=h.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=c=s,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):Yt.propHooks._default.set(this),this}},Yt.prototype.init.prototype=Yt.prototype,Yt.propHooks={_default:{get:function(s){var c;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(c=h.css(s.elem,s.prop,""),!c||c==="auto"?0:c)},set:function(s){h.fx.step[s.prop]?h.fx.step[s.prop](s):s.elem.nodeType===1&&(h.cssHooks[s.prop]||s.elem.style[un(s.prop)]!=null)?h.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Yt.propHooks.scrollTop=Yt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},h.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},h.fx=Yt.prototype.init,h.fx.step={};var Ut,wn,Gr=/^(?:toggle|show|hide)$/,nn=/queueHooks$/;function Ei(){wn&&(w.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Ei):e.setTimeout(Ei,h.fx.interval),h.fx.tick())}function ys(){return e.setTimeout(function(){Ut=void 0}),Ut=Date.now()}function Ai(s,c){var d,g=0,b={height:s};for(c=c?1:0;g<4;g+=2-c)d=ne[g],b["margin"+d]=b["padding"+d]=s;return c&&(b.opacity=b.width=s),b}function Uo(s,c,d){for(var g,b=(Nn.tweeners[c]||[]).concat(Nn.tweeners["*"]),M=0,T=b.length;M<T;M++)if(g=b[M].call(d,c,s))return g}function Lu(s,c,d){var g,b,M,T,U,O,W,ee,he="width"in c||"height"in c,Z=this,ie={},ze=s.style,nt=s.nodeType&&We(s),Be=De.get(s,"fxshow");d.queue||(T=h._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,U=T.empty.fire,T.empty.fire=function(){T.unqueued||U()}),T.unqueued++,Z.always(function(){Z.always(function(){T.unqueued--,h.queue(s,"fx").length||T.empty.fire()})}));for(g in c)if(b=c[g],Gr.test(b)){if(delete c[g],M=M||b==="toggle",b===(nt?"hide":"show"))if(b==="show"&&Be&&Be[g]!==void 0)nt=!0;else continue;ie[g]=Be&&Be[g]||h.style(s,g)}if(O=!h.isEmptyObject(c),!(!O&&h.isEmptyObject(ie))){he&&s.nodeType===1&&(d.overflow=[ze.overflow,ze.overflowX,ze.overflowY],W=Be&&Be.display,W==null&&(W=De.get(s,"display")),ee=h.css(s,"display"),ee==="none"&&(W?ee=W:(Re([s],!0),W=s.style.display||W,ee=h.css(s,"display"),Re([s]))),(ee==="inline"||ee==="inline-block"&&W!=null)&&h.css(s,"float")==="none"&&(O||(Z.done(function(){ze.display=W}),W==null&&(ee=ze.display,W=ee==="none"?"":ee)),ze.display="inline-block")),d.overflow&&(ze.overflow="hidden",Z.always(function(){ze.overflow=d.overflow[0],ze.overflowX=d.overflow[1],ze.overflowY=d.overflow[2]})),O=!1;for(g in ie)O||(Be?"hidden"in Be&&(nt=Be.hidden):Be=De.access(s,"fxshow",{display:W}),M&&(Be.hidden=!nt),nt&&Re([s],!0),Z.done(function(){nt||Re([s]),De.remove(s,"fxshow");for(g in ie)h.style(s,g,ie[g])})),O=Uo(nt?Be[g]:0,g,Z),g in Be||(Be[g]=O.start,nt&&(O.end=O.start,O.start=0))}}function Ru(s,c){var d,g,b,M,T;for(d in s)if(g=Fe(d),b=c[g],M=s[d],Array.isArray(M)&&(b=M[1],M=s[d]=M[0]),d!==g&&(s[g]=M,delete s[d]),T=h.cssHooks[g],T&&"expand"in T){M=T.expand(M),delete s[g];for(d in M)d in s||(s[d]=M[d],c[d]=b)}else c[g]=b}function Nn(s,c,d){var g,b,M=0,T=Nn.prefilters.length,U=h.Deferred().always(function(){delete O.elem}),O=function(){if(b)return!1;for(var he=Ut||ys(),Z=Math.max(0,W.startTime+W.duration-he),ie=Z/W.duration||0,ze=1-ie,nt=0,Be=W.tweens.length;nt<Be;nt++)W.tweens[nt].run(ze);return U.notifyWith(s,[W,ze,Z]),ze<1&&Be?Z:(Be||U.notifyWith(s,[W,1,0]),U.resolveWith(s,[W]),!1)},W=U.promise({elem:s,props:h.extend({},c),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},d),originalProperties:c,originalOptions:d,startTime:Ut||ys(),duration:d.duration,tweens:[],createTween:function(he,Z){var ie=h.Tween(s,W.opts,he,Z,W.opts.specialEasing[he]||W.opts.easing);return W.tweens.push(ie),ie},stop:function(he){var Z=0,ie=he?W.tweens.length:0;if(b)return this;for(b=!0;Z<ie;Z++)W.tweens[Z].run(1);return he?(U.notifyWith(s,[W,1,0]),U.resolveWith(s,[W,he])):U.rejectWith(s,[W,he]),this}}),ee=W.props;for(Ru(ee,W.opts.specialEasing);M<T;M++)if(g=Nn.prefilters[M].call(W,s,ee,W.opts),g)return v(g.stop)&&(h._queueHooks(W.elem,W.opts.queue).stop=g.stop.bind(g)),g;return h.map(ee,Uo,W),v(W.opts.start)&&W.opts.start.call(s,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),h.fx.timer(h.extend(O,{elem:s,anim:W,queue:W.opts.queue})),W}h.Animation=h.extend(Nn,{tweeners:{"*":[function(s,c){var d=this.createTween(s,c);return k(d.elem,s,C.exec(c),d),d}]},tweener:function(s,c){v(s)?(c=s,s=["*"]):s=s.match(xe);for(var d,g=0,b=s.length;g<b;g++)d=s[g],Nn.tweeners[d]=Nn.tweeners[d]||[],Nn.tweeners[d].unshift(c)},prefilters:[Lu],prefilter:function(s,c){c?Nn.prefilters.unshift(s):Nn.prefilters.push(s)}}),h.speed=function(s,c,d){var g=s&&typeof s=="object"?h.extend({},s):{complete:d||!d&&c||v(s)&&s,duration:s,easing:d&&c||c&&!v(c)&&c};return h.fx.off?g.duration=0:typeof g.duration!="number"&&(g.duration in h.fx.speeds?g.duration=h.fx.speeds[g.duration]:g.duration=h.fx.speeds._default),(g.queue==null||g.queue===!0)&&(g.queue="fx"),g.old=g.complete,g.complete=function(){v(g.old)&&g.old.call(this),g.queue&&h.dequeue(this,g.queue)},g},h.fn.extend({fadeTo:function(s,c,d,g){return this.filter(We).css("opacity",0).show().end().animate({opacity:c},s,d,g)},animate:function(s,c,d,g){var b=h.isEmptyObject(s),M=h.speed(c,d,g),T=function(){var U=Nn(this,h.extend({},s),M);(b||De.get(this,"finish"))&&U.stop(!0)};return T.finish=T,b||M.queue===!1?this.each(T):this.queue(M.queue,T)},stop:function(s,c,d){var g=function(b){var M=b.stop;delete b.stop,M(d)};return typeof s!="string"&&(d=c,c=s,s=void 0),c&&this.queue(s||"fx",[]),this.each(function(){var b=!0,M=s!=null&&s+"queueHooks",T=h.timers,U=De.get(this);if(M)U[M]&&U[M].stop&&g(U[M]);else for(M in U)U[M]&&U[M].stop&&nn.test(M)&&g(U[M]);for(M=T.length;M--;)T[M].elem===this&&(s==null||T[M].queue===s)&&(T[M].anim.stop(d),b=!1,T.splice(M,1));(b||!d)&&h.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var c,d=De.get(this),g=d[s+"queue"],b=d[s+"queueHooks"],M=h.timers,T=g?g.length:0;for(d.finish=!0,h.queue(this,s,[]),b&&b.stop&&b.stop.call(this,!0),c=M.length;c--;)M[c].elem===this&&M[c].queue===s&&(M[c].anim.stop(!0),M.splice(c,1));for(c=0;c<T;c++)g[c]&&g[c].finish&&g[c].finish.call(this);delete d.finish})}}),h.each(["toggle","show","hide"],function(s,c){var d=h.fn[c];h.fn[c]=function(g,b,M){return g==null||typeof g=="boolean"?d.apply(this,arguments):this.animate(Ai(c,!0),g,b,M)}}),h.each({slideDown:Ai("show"),slideUp:Ai("hide"),slideToggle:Ai("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,c){h.fn[s]=function(d,g,b){return this.animate(c,d,g,b)}}),h.timers=[],h.fx.tick=function(){var s,c=0,d=h.timers;for(Ut=Date.now();c<d.length;c++)s=d[c],!s()&&d[c]===s&&d.splice(c--,1);d.length||h.fx.stop(),Ut=void 0},h.fx.timer=function(s){h.timers.push(s),h.fx.start()},h.fx.interval=13,h.fx.start=function(){wn||(wn=!0,Ei())},h.fx.stop=function(){wn=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(s,c){return s=h.fx&&h.fx.speeds[s]||s,c=c||"fx",this.queue(c,function(d,g){var b=e.setTimeout(d,s);g.stop=function(){e.clearTimeout(b)}})},function(){var s=w.createElement("input"),c=w.createElement("select"),d=c.appendChild(w.createElement("option"));s.type="checkbox",S.checkOn=s.value!=="",S.optSelected=d.selected,s=w.createElement("input"),s.value="t",s.type="radio",S.radioValue=s.value==="t"}();var ko,Vr=h.expr.attrHandle;h.fn.extend({attr:function(s,c){return Ge(this,h.attr,s,c,arguments.length>1)},removeAttr:function(s){return this.each(function(){h.removeAttr(this,s)})}}),h.extend({attr:function(s,c,d){var g,b,M=s.nodeType;if(!(M===3||M===8||M===2)){if(typeof s.getAttribute>"u")return h.prop(s,c,d);if((M!==1||!h.isXMLDoc(s))&&(b=h.attrHooks[c.toLowerCase()]||(h.expr.match.bool.test(c)?ko:void 0)),d!==void 0){if(d===null){h.removeAttr(s,c);return}return b&&"set"in b&&(g=b.set(s,d,c))!==void 0?g:(s.setAttribute(c,d+""),d)}return b&&"get"in b&&(g=b.get(s,c))!==null?g:(g=h.find.attr(s,c),g==null?void 0:g)}},attrHooks:{type:{set:function(s,c){if(!S.radioValue&&c==="radio"&&Se(s,"input")){var d=s.value;return s.setAttribute("type",c),d&&(s.value=d),c}}}},removeAttr:function(s,c){var d,g=0,b=c&&c.match(xe);if(b&&s.nodeType===1)for(;d=b[g++];)s.removeAttribute(d)}}),ko={set:function(s,c,d){return c===!1?h.removeAttr(s,d):s.setAttribute(d,d),d}},h.each(h.expr.match.bool.source.match(/\w+/g),function(s,c){var d=Vr[c]||h.find.attr;Vr[c]=function(g,b,M){var T,U,O=b.toLowerCase();return M||(U=Vr[O],Vr[O]=T,T=d(g,b,M)!=null?O:null,Vr[O]=U),T}});var Du=/^(?:input|select|textarea|button)$/i,Pu=/^(?:a|area)$/i;h.fn.extend({prop:function(s,c){return Ge(this,h.prop,s,c,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[h.propFix[s]||s]})}}),h.extend({prop:function(s,c,d){var g,b,M=s.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!h.isXMLDoc(s))&&(c=h.propFix[c]||c,b=h.propHooks[c]),d!==void 0?b&&"set"in b&&(g=b.set(s,d,c))!==void 0?g:s[c]=d:b&&"get"in b&&(g=b.get(s,c))!==null?g:s[c]},propHooks:{tabIndex:{get:function(s){var c=h.find.attr(s,"tabindex");return c?parseInt(c,10):Du.test(s.nodeName)||Pu.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(h.propHooks.selected={get:function(s){var c=s.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(s){var c=s.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function Ci(s){var c=s.match(xe)||[];return c.join(" ")}function Li(s){return s.getAttribute&&s.getAttribute("class")||""}function ha(s){return Array.isArray(s)?s:typeof s=="string"?s.match(xe)||[]:[]}h.fn.extend({addClass:function(s){var c,d,g,b,M,T;return v(s)?this.each(function(U){h(this).addClass(s.call(this,U,Li(this)))}):(c=ha(s),c.length?this.each(function(){if(g=Li(this),d=this.nodeType===1&&" "+Ci(g)+" ",d){for(M=0;M<c.length;M++)b=c[M],d.indexOf(" "+b+" ")<0&&(d+=b+" ");T=Ci(d),g!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var c,d,g,b,M,T;return v(s)?this.each(function(U){h(this).removeClass(s.call(this,U,Li(this)))}):arguments.length?(c=ha(s),c.length?this.each(function(){if(g=Li(this),d=this.nodeType===1&&" "+Ci(g)+" ",d){for(M=0;M<c.length;M++)for(b=c[M];d.indexOf(" "+b+" ")>-1;)d=d.replace(" "+b+" "," ");T=Ci(d),g!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,c){var d,g,b,M,T=typeof s,U=T==="string"||Array.isArray(s);return v(s)?this.each(function(O){h(this).toggleClass(s.call(this,O,Li(this),c),c)}):typeof c=="boolean"&&U?c?this.addClass(s):this.removeClass(s):(d=ha(s),this.each(function(){if(U)for(M=h(this),b=0;b<d.length;b++)g=d[b],M.hasClass(g)?M.removeClass(g):M.addClass(g);else(s===void 0||T==="boolean")&&(g=Li(this),g&&De.set(this,"__className__",g),this.setAttribute&&this.setAttribute("class",g||s===!1?"":De.get(this,"__className__")||""))}))},hasClass:function(s){var c,d,g=0;for(c=" "+s+" ";d=this[g++];)if(d.nodeType===1&&(" "+Ci(Li(d))+" ").indexOf(c)>-1)return!0;return!1}});var Iu=/\r/g;h.fn.extend({val:function(s){var c,d,g,b=this[0];return arguments.length?(g=v(s),this.each(function(M){var T;this.nodeType===1&&(g?T=s.call(this,M,h(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=h.map(T,function(U){return U==null?"":U+""})),c=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,T,"value")===void 0)&&(this.value=T))})):b?(c=h.valHooks[b.type]||h.valHooks[b.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(b,"value"))!==void 0?d:(d=b.value,typeof d=="string"?d.replace(Iu,""):d==null?"":d)):void 0}}),h.extend({valHooks:{option:{get:function(s){var c=h.find.attr(s,"value");return c!=null?c:Ci(h.text(s))}},select:{get:function(s){var c,d,g,b=s.options,M=s.selectedIndex,T=s.type==="select-one",U=T?null:[],O=T?M+1:b.length;for(M<0?g=O:g=T?M:0;g<O;g++)if(d=b[g],(d.selected||g===M)&&!d.disabled&&(!d.parentNode.disabled||!Se(d.parentNode,"optgroup"))){if(c=h(d).val(),T)return c;U.push(c)}return U},set:function(s,c){for(var d,g,b=s.options,M=h.makeArray(c),T=b.length;T--;)g=b[T],(g.selected=h.inArray(h.valHooks.option.get(g),M)>-1)&&(d=!0);return d||(s.selectedIndex=-1),M}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(s,c){if(Array.isArray(c))return s.checked=h.inArray(h(s).val(),c)>-1}},S.checkOn||(h.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})}),S.focusin="onfocusin"in e;var zo=/^(?:focusinfocus|focusoutblur)$/,Bo=function(s){s.stopPropagation()};h.extend(h.event,{trigger:function(s,c,d,g){var b,M,T,U,O,W,ee,he,Z=[d||w],ie=m.call(s,"type")?s.type:s,ze=m.call(s,"namespace")?s.namespace.split("."):[];if(M=he=T=d=d||w,!(d.nodeType===3||d.nodeType===8)&&!zo.test(ie+h.event.triggered)&&(ie.indexOf(".")>-1&&(ze=ie.split("."),ie=ze.shift(),ze.sort()),O=ie.indexOf(":")<0&&"on"+ie,s=s[h.expando]?s:new h.Event(ie,typeof s=="object"&&s),s.isTrigger=g?2:3,s.namespace=ze.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ze.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=d),c=c==null?[s]:h.makeArray(c,[s]),ee=h.event.special[ie]||{},!(!g&&ee.trigger&&ee.trigger.apply(d,c)===!1))){if(!g&&!ee.noBubble&&!x(d)){for(U=ee.delegateType||ie,zo.test(U+ie)||(M=M.parentNode);M;M=M.parentNode)Z.push(M),T=M;T===(d.ownerDocument||w)&&Z.push(T.defaultView||T.parentWindow||e)}for(b=0;(M=Z[b++])&&!s.isPropagationStopped();)he=M,s.type=b>1?U:ee.bindType||ie,W=(De.get(M,"events")||Object.create(null))[s.type]&&De.get(M,"handle"),W&&W.apply(M,c),W=O&&M[O],W&&W.apply&&Lt(M)&&(s.result=W.apply(M,c),s.result===!1&&s.preventDefault());return s.type=ie,!g&&!s.isDefaultPrevented()&&(!ee._default||ee._default.apply(Z.pop(),c)===!1)&&Lt(d)&&O&&v(d[ie])&&!x(d)&&(T=d[O],T&&(d[O]=null),h.event.triggered=ie,s.isPropagationStopped()&&he.addEventListener(ie,Bo),d[ie](),s.isPropagationStopped()&&he.removeEventListener(ie,Bo),h.event.triggered=void 0,T&&(d[O]=T)),s.result}},simulate:function(s,c,d){var g=h.extend(new h.Event,d,{type:s,isSimulated:!0});h.event.trigger(g,null,c)}}),h.fn.extend({trigger:function(s,c){return this.each(function(){h.event.trigger(s,c,this)})},triggerHandler:function(s,c){var d=this[0];if(d)return h.event.trigger(s,c,d,!0)}}),S.focusin||h.each({focus:"focusin",blur:"focusout"},function(s,c){var d=function(g){h.event.simulate(c,g.target,h.event.fix(g))};h.event.special[c]={setup:function(){var g=this.ownerDocument||this.document||this,b=De.access(g,c);b||g.addEventListener(s,d,!0),De.access(g,c,(b||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,b=De.access(g,c)-1;b?De.access(g,c,b):(g.removeEventListener(s,d,!0),De.remove(g,c))}}});var Wr=e.location,Ho={guid:Date.now()},da=/\?/;h.parseXML=function(s){var c,d;if(!s||typeof s!="string")return null;try{c=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return d=c&&c.getElementsByTagName("parsererror")[0],(!c||d)&&h.error("Invalid XML: "+(d?h.map(d.childNodes,function(g){return g.textContent}).join(`
`):s)),c};var Nu=/\[\]$/,Go=/\r?\n/g,Ou=/^(?:submit|button|image|reset|file)$/i,Fu=/^(?:input|select|textarea|keygen)/i;function pa(s,c,d,g){var b;if(Array.isArray(c))h.each(c,function(M,T){d||Nu.test(s)?g(s,T):pa(s+"["+(typeof T=="object"&&T!=null?M:"")+"]",T,d,g)});else if(!d&&R(c)==="object")for(b in c)pa(s+"["+b+"]",c[b],d,g);else g(s,c)}h.param=function(s,c){var d,g=[],b=function(M,T){var U=v(T)?T():T;g[g.length]=encodeURIComponent(M)+"="+encodeURIComponent(U==null?"":U)};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!h.isPlainObject(s))h.each(s,function(){b(this.name,this.value)});else for(d in s)pa(d,s[d],c,b);return g.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=h.prop(this,"elements");return s?h.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!h(this).is(":disabled")&&Fu.test(this.nodeName)&&!Ou.test(s)&&(this.checked||!Ee.test(s))}).map(function(s,c){var d=h(this).val();return d==null?null:Array.isArray(d)?h.map(d,function(g){return{name:c.name,value:g.replace(Go,`\r
`)}}):{name:c.name,value:d.replace(Go,`\r
`)}}).get()}});var Uu=/%20/g,ku=/#.*$/,zu=/([?&])_=[^&]*/,Bu=/^(.*?):[ \t]*([^\r\n]*)$/mg,Hu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gu=/^(?:GET|HEAD)$/,Vu=/^\/\//,Vo={},ma={},Wo="*/".concat("*"),ga=w.createElement("a");ga.href=Wr.href;function jo(s){return function(c,d){typeof c!="string"&&(d=c,c="*");var g,b=0,M=c.toLowerCase().match(xe)||[];if(v(d))for(;g=M[b++];)g[0]==="+"?(g=g.slice(1)||"*",(s[g]=s[g]||[]).unshift(d)):(s[g]=s[g]||[]).push(d)}}function qo(s,c,d,g){var b={},M=s===ma;function T(U){var O;return b[U]=!0,h.each(s[U]||[],function(W,ee){var he=ee(c,d,g);if(typeof he=="string"&&!M&&!b[he])return c.dataTypes.unshift(he),T(he),!1;if(M)return!(O=he)}),O}return T(c.dataTypes[0])||!b["*"]&&T("*")}function _a(s,c){var d,g,b=h.ajaxSettings.flatOptions||{};for(d in c)c[d]!==void 0&&((b[d]?s:g||(g={}))[d]=c[d]);return g&&h.extend(!0,s,g),s}function Wu(s,c,d){for(var g,b,M,T,U=s.contents,O=s.dataTypes;O[0]==="*";)O.shift(),g===void 0&&(g=s.mimeType||c.getResponseHeader("Content-Type"));if(g){for(b in U)if(U[b]&&U[b].test(g)){O.unshift(b);break}}if(O[0]in d)M=O[0];else{for(b in d){if(!O[0]||s.converters[b+" "+O[0]]){M=b;break}T||(T=b)}M=M||T}if(M)return M!==O[0]&&O.unshift(M),d[M]}function ju(s,c,d,g){var b,M,T,U,O,W={},ee=s.dataTypes.slice();if(ee[1])for(T in s.converters)W[T.toLowerCase()]=s.converters[T];for(M=ee.shift();M;)if(s.responseFields[M]&&(d[s.responseFields[M]]=c),!O&&g&&s.dataFilter&&(c=s.dataFilter(c,s.dataType)),O=M,M=ee.shift(),M){if(M==="*")M=O;else if(O!=="*"&&O!==M){if(T=W[O+" "+M]||W["* "+M],!T){for(b in W)if(U=b.split(" "),U[1]===M&&(T=W[O+" "+U[0]]||W["* "+U[0]],T)){T===!0?T=W[b]:W[b]!==!0&&(M=U[0],ee.unshift(U[1]));break}}if(T!==!0)if(T&&s.throws)c=T(c);else try{c=T(c)}catch(he){return{state:"parsererror",error:T?he:"No conversion from "+O+" to "+M}}}}return{state:"success",data:c}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Wr.href,type:"GET",isLocal:Hu.test(Wr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wo,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,c){return c?_a(_a(s,h.ajaxSettings),c):_a(h.ajaxSettings,s)},ajaxPrefilter:jo(Vo),ajaxTransport:jo(ma),ajax:function(s,c){typeof s=="object"&&(c=s,s=void 0),c=c||{};var d,g,b,M,T,U,O,W,ee,he,Z=h.ajaxSetup({},c),ie=Z.context||Z,ze=Z.context&&(ie.nodeType||ie.jquery)?h(ie):h.event,nt=h.Deferred(),Be=h.Callbacks("once memory"),Vt=Z.statusCode||{},Ht={},mn={},wt="canceled",et={readyState:0,getResponseHeader:function(dt){var Ft;if(O){if(!M)for(M={};Ft=Bu.exec(b);)M[Ft[1].toLowerCase()+" "]=(M[Ft[1].toLowerCase()+" "]||[]).concat(Ft[2]);Ft=M[dt.toLowerCase()+" "]}return Ft==null?null:Ft.join(", ")},getAllResponseHeaders:function(){return O?b:null},setRequestHeader:function(dt,Ft){return O==null&&(dt=mn[dt.toLowerCase()]=mn[dt.toLowerCase()]||dt,Ht[dt]=Ft),this},overrideMimeType:function(dt){return O==null&&(Z.mimeType=dt),this},statusCode:function(dt){var Ft;if(dt)if(O)et.always(dt[et.status]);else for(Ft in dt)Vt[Ft]=[Vt[Ft],dt[Ft]];return this},abort:function(dt){var Ft=dt||wt;return d&&d.abort(Ft),fn(0,Ft),this}};if(nt.promise(et),Z.url=((s||Z.url||Wr.href)+"").replace(Vu,Wr.protocol+"//"),Z.type=c.method||c.type||Z.method||Z.type,Z.dataTypes=(Z.dataType||"*").toLowerCase().match(xe)||[""],Z.crossDomain==null){U=w.createElement("a");try{U.href=Z.url,U.href=U.href,Z.crossDomain=ga.protocol+"//"+ga.host!=U.protocol+"//"+U.host}catch{Z.crossDomain=!0}}if(Z.data&&Z.processData&&typeof Z.data!="string"&&(Z.data=h.param(Z.data,Z.traditional)),qo(Vo,Z,c,et),O)return et;W=h.event&&Z.global,W&&h.active++===0&&h.event.trigger("ajaxStart"),Z.type=Z.type.toUpperCase(),Z.hasContent=!Gu.test(Z.type),g=Z.url.replace(ku,""),Z.hasContent?Z.data&&Z.processData&&(Z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Z.data=Z.data.replace(Uu,"+")):(he=Z.url.slice(g.length),Z.data&&(Z.processData||typeof Z.data=="string")&&(g+=(da.test(g)?"&":"?")+Z.data,delete Z.data),Z.cache===!1&&(g=g.replace(zu,"$1"),he=(da.test(g)?"&":"?")+"_="+Ho.guid+++he),Z.url=g+he),Z.ifModified&&(h.lastModified[g]&&et.setRequestHeader("If-Modified-Since",h.lastModified[g]),h.etag[g]&&et.setRequestHeader("If-None-Match",h.etag[g])),(Z.data&&Z.hasContent&&Z.contentType!==!1||c.contentType)&&et.setRequestHeader("Content-Type",Z.contentType),et.setRequestHeader("Accept",Z.dataTypes[0]&&Z.accepts[Z.dataTypes[0]]?Z.accepts[Z.dataTypes[0]]+(Z.dataTypes[0]!=="*"?", "+Wo+"; q=0.01":""):Z.accepts["*"]);for(ee in Z.headers)et.setRequestHeader(ee,Z.headers[ee]);if(Z.beforeSend&&(Z.beforeSend.call(ie,et,Z)===!1||O))return et.abort();if(wt="abort",Be.add(Z.complete),et.done(Z.success),et.fail(Z.error),d=qo(ma,Z,c,et),!d)fn(-1,"No Transport");else{if(et.readyState=1,W&&ze.trigger("ajaxSend",[et,Z]),O)return et;Z.async&&Z.timeout>0&&(T=e.setTimeout(function(){et.abort("timeout")},Z.timeout));try{O=!1,d.send(Ht,fn)}catch(dt){if(O)throw dt;fn(-1,dt)}}function fn(dt,Ft,qr,bs){var gn,Ri,Di,hn,hi,Tn=Ft;O||(O=!0,T&&e.clearTimeout(T),d=void 0,b=bs||"",et.readyState=dt>0?4:0,gn=dt>=200&&dt<300||dt===304,qr&&(hn=Wu(Z,et,qr)),!gn&&h.inArray("script",Z.dataTypes)>-1&&h.inArray("json",Z.dataTypes)<0&&(Z.converters["text script"]=function(){}),hn=ju(Z,hn,et,gn),gn?(Z.ifModified&&(hi=et.getResponseHeader("Last-Modified"),hi&&(h.lastModified[g]=hi),hi=et.getResponseHeader("etag"),hi&&(h.etag[g]=hi)),dt===204||Z.type==="HEAD"?Tn="nocontent":dt===304?Tn="notmodified":(Tn=hn.state,Ri=hn.data,Di=hn.error,gn=!Di)):(Di=Tn,(dt||!Tn)&&(Tn="error",dt<0&&(dt=0))),et.status=dt,et.statusText=(Ft||Tn)+"",gn?nt.resolveWith(ie,[Ri,Tn,et]):nt.rejectWith(ie,[et,Tn,Di]),et.statusCode(Vt),Vt=void 0,W&&ze.trigger(gn?"ajaxSuccess":"ajaxError",[et,Z,gn?Ri:Di]),Be.fireWith(ie,[et,Tn]),W&&(ze.trigger("ajaxComplete",[et,Z]),--h.active||h.event.trigger("ajaxStop")))}return et},getJSON:function(s,c,d){return h.get(s,c,d,"json")},getScript:function(s,c){return h.get(s,void 0,c,"script")}}),h.each(["get","post"],function(s,c){h[c]=function(d,g,b,M){return v(g)&&(M=M||b,b=g,g=void 0),h.ajax(h.extend({url:d,type:c,dataType:M,data:g,success:b},h.isPlainObject(d)&&d))}}),h.ajaxPrefilter(function(s){var c;for(c in s.headers)c.toLowerCase()==="content-type"&&(s.contentType=s.headers[c]||"")}),h._evalUrl=function(s,c,d){return h.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(g){h.globalEval(g,c,d)}})},h.fn.extend({wrapAll:function(s){var c;return this[0]&&(v(s)&&(s=s.call(this[0])),c=h(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(s){return v(s)?this.each(function(c){h(this).wrapInner(s.call(this,c))}):this.each(function(){var c=h(this),d=c.contents();d.length?d.wrapAll(s):c.append(s)})},wrap:function(s){var c=v(s);return this.each(function(d){h(this).wrapAll(c?s.call(this,d):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(s){return!h.expr.pseudos.visible(s)},h.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},h.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var qu={0:200,1223:204},jr=h.ajaxSettings.xhr();S.cors=!!jr&&"withCredentials"in jr,S.ajax=jr=!!jr,h.ajaxTransport(function(s){var c,d;if(S.cors||jr&&!s.crossDomain)return{send:function(g,b){var M,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(M in s.xhrFields)T[M]=s.xhrFields[M];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!g["X-Requested-With"]&&(g["X-Requested-With"]="XMLHttpRequest");for(M in g)T.setRequestHeader(M,g[M]);c=function(U){return function(){c&&(c=d=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,U==="abort"?T.abort():U==="error"?typeof T.status!="number"?b(0,"error"):b(T.status,T.statusText):b(qu[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=c(),d=T.onerror=T.ontimeout=c("error"),T.onabort!==void 0?T.onabort=d:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){c&&d()})},c=c("abort");try{T.send(s.hasContent&&s.data||null)}catch(U){if(c)throw U}},abort:function(){c&&c()}}}),h.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return h.globalEval(s),s}}}),h.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),h.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var c,d;return{send:function(g,b){c=h("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",d=function(M){c.remove(),d=null,M&&b(M.type==="error"?404:200,M.type)}),w.head.appendChild(c[0])},abort:function(){d&&d()}}}});var Xo=[],xa=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Xo.pop()||h.expando+"_"+Ho.guid++;return this[s]=!0,s}}),h.ajaxPrefilter("json jsonp",function(s,c,d){var g,b,M,T=s.jsonp!==!1&&(xa.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&xa.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return g=s.jsonpCallback=v(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(xa,"$1"+g):s.jsonp!==!1&&(s.url+=(da.test(s.url)?"&":"?")+s.jsonp+"="+g),s.converters["script json"]=function(){return M||h.error(g+" was not called"),M[0]},s.dataTypes[0]="json",b=e[g],e[g]=function(){M=arguments},d.always(function(){b===void 0?h(e).removeProp(g):e[g]=b,s[g]&&(s.jsonpCallback=c.jsonpCallback,Xo.push(g)),M&&v(b)&&b(M[0]),M=b=void 0}),"script"}),S.createHTMLDocument=function(){var s=w.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),h.parseHTML=function(s,c,d){if(typeof s!="string")return[];typeof c=="boolean"&&(d=c,c=!1);var g,b,M;return c||(S.createHTMLDocument?(c=w.implementation.createHTMLDocument(""),g=c.createElement("base"),g.href=w.location.href,c.head.appendChild(g)):c=w),b=Q.exec(s),M=!d&&[],b?[c.createElement(b[1])]:(b=se([s],c,M),M&&M.length&&h(M).remove(),h.merge([],b.childNodes))},h.fn.load=function(s,c,d){var g,b,M,T=this,U=s.indexOf(" ");return U>-1&&(g=Ci(s.slice(U)),s=s.slice(0,U)),v(c)?(d=c,c=void 0):c&&typeof c=="object"&&(b="POST"),T.length>0&&h.ajax({url:s,type:b||"GET",dataType:"html",data:c}).done(function(O){M=arguments,T.html(g?h("<div>").append(h.parseHTML(O)).find(g):O)}).always(d&&function(O,W){T.each(function(){d.apply(this,M||[O.responseText,W,O])})}),this},h.expr.pseudos.animated=function(s){return h.grep(h.timers,function(c){return s===c.elem}).length},h.offset={setOffset:function(s,c,d){var g,b,M,T,U,O,W,ee=h.css(s,"position"),he=h(s),Z={};ee==="static"&&(s.style.position="relative"),U=he.offset(),M=h.css(s,"top"),O=h.css(s,"left"),W=(ee==="absolute"||ee==="fixed")&&(M+O).indexOf("auto")>-1,W?(g=he.position(),T=g.top,b=g.left):(T=parseFloat(M)||0,b=parseFloat(O)||0),v(c)&&(c=c.call(s,d,h.extend({},U))),c.top!=null&&(Z.top=c.top-U.top+T),c.left!=null&&(Z.left=c.left-U.left+b),"using"in c?c.using.call(s,Z):he.css(Z)}},h.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(b){h.offset.setOffset(this,s,b)});var c,d,g=this[0];if(!!g)return g.getClientRects().length?(c=g.getBoundingClientRect(),d=g.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var s,c,d,g=this[0],b={top:0,left:0};if(h.css(g,"position")==="fixed")c=g.getBoundingClientRect();else{for(c=this.offset(),d=g.ownerDocument,s=g.offsetParent||d.documentElement;s&&(s===d.body||s===d.documentElement)&&h.css(s,"position")==="static";)s=s.parentNode;s&&s!==g&&s.nodeType===1&&(b=h(s).offset(),b.top+=h.css(s,"borderTopWidth",!0),b.left+=h.css(s,"borderLeftWidth",!0))}return{top:c.top-b.top-h.css(g,"marginTop",!0),left:c.left-b.left-h.css(g,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&h.css(s,"position")==="static";)s=s.offsetParent;return s||_e})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,c){var d=c==="pageYOffset";h.fn[s]=function(g){return Ge(this,function(b,M,T){var U;if(x(b)?U=b:b.nodeType===9&&(U=b.defaultView),T===void 0)return U?U[c]:b[M];U?U.scrollTo(d?U.pageXOffset:T,d?T:U.pageYOffset):b[M]=T},s,g,arguments.length)}}),h.each(["top","left"],function(s,c){h.cssHooks[c]=ut(S.pixelPosition,function(d,g){if(g)return g=rt(d,c),q.test(g)?h(d).position()[c]+"px":g})}),h.each({Height:"height",Width:"width"},function(s,c){h.each({padding:"inner"+s,content:c,"":"outer"+s},function(d,g){h.fn[g]=function(b,M){var T=arguments.length&&(d||typeof b!="boolean"),U=d||(b===!0||M===!0?"margin":"border");return Ge(this,function(O,W,ee){var he;return x(O)?g.indexOf("outer")===0?O["inner"+s]:O.document.documentElement["client"+s]:O.nodeType===9?(he=O.documentElement,Math.max(O.body["scroll"+s],he["scroll"+s],O.body["offset"+s],he["offset"+s],he["client"+s])):ee===void 0?h.css(O,W,U):h.style(O,W,ee,U)},c,T?b:void 0,T)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,c){h.fn[c]=function(d){return this.on(c,d)}}),h.fn.extend({bind:function(s,c,d){return this.on(s,null,c,d)},unbind:function(s,c){return this.off(s,null,c)},delegate:function(s,c,d,g){return this.on(c,s,d,g)},undelegate:function(s,c,d){return arguments.length===1?this.off(s,"**"):this.off(c,s||"**",d)},hover:function(s,c){return this.mouseenter(s).mouseleave(c||s)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,c){h.fn[c]=function(d,g){return arguments.length>0?this.on(c,null,d,g):this.trigger(c)}});var Xu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;h.proxy=function(s,c){var d,g,b;if(typeof c=="string"&&(d=s[c],c=s,s=d),!!v(s))return g=r.call(arguments,2),b=function(){return s.apply(c||this,g.concat(r.call(arguments)))},b.guid=s.guid=s.guid||h.guid++,b},h.holdReady=function(s){s?h.readyWait++:h.ready(!0)},h.isArray=Array.isArray,h.parseJSON=JSON.parse,h.nodeName=Se,h.isFunction=v,h.isWindow=x,h.camelCase=Fe,h.type=R,h.now=Date.now,h.isNumeric=function(s){var c=h.type(s);return(c==="number"||c==="string")&&!isNaN(s-parseFloat(s))},h.trim=function(s){return s==null?"":(s+"").replace(Xu,"$1")};var Yu=e.jQuery,Ku=e.$;return h.noConflict=function(s){return e.$===h&&(e.$=Ku),s&&e.jQuery===h&&(e.jQuery=Yu),h},typeof t>"u"&&(e.jQuery=e.$=h),h})})(Tu);const Nr=Tu.exports;const rr=new y_;rr.background=new Je(12833493);rr.fog=new Ro(12833493,20,100);const Eu=document.querySelector("#canvas"),Gc=Eu.getBoundingClientRect(),Er=new hu({canvas:Eu,antialias:!0});Er.setPixelRatio(window.devicePixelRatio);Er.shadowMap.enabled=!0;const Ki=new an(60,Gc.width/Gc.height,.1,1e3);Ki.position.z=30;Ki.position.x=10;Ki.position.y=10;const Au=new W_(16777215,16777215,.61);Au.position.set(0,50,0);rr.add(Au);const la=new bu(16777215,1);la.position.set(-8,12,8);la.castShadow=!0;la.shadow.mapSize=new tt(1024,1024);rr.add(la);var zx=new ra(5e3,5e3,1,1),Bx=new gu({color:3355443,shininess:0}),ca=new bn(zx,Bx);ca.rotation.x=-.5*Math.PI;ca.receiveShadow=!0;ca.position.y=-1;rr.add(ca);const Ti=new Ux(Ki,Er.domElement);Ti.maxPolarAngle=Math.PI/2;Ti.minPolarAngle=Math.PI/3;Ti.enableDamping=!0;Ti.enablePan=!1;Ti.dampingFactor=.1;Ti.autoRotate=!1;Ti.autoRotateSpeed=.2;let Cn;const Hx=new ax;function Mr(l,e=10){return new gu({color:l,shininess:10})}const Gx=[{childID:"Shell",mtl:Mr(2180221)},{childID:"Grill",mtl:Mr(1118481)},{childID:"Tire",mtl:Mr(1118481)},{childID:"Window",mtl:Mr(2236962)},{childID:"Interior",mtl:Mr("#110011")}];function Vx(l,e,t){l.traverse(n=>{n.isMesh&&n.name.includes(e)&&(n.material=t,n.nameID=e)})}function Wx(l,e,t){l.traverse(n=>{n.isMesh&&n.nameID!=null&&n.nameID===e&&(n.material=t)})}Hx.load("./bmw.glb",function(l){Cn=l.scene,Cn.traverse(e=>{e.isMesh});for(let e of Gx)Vx(Cn,e.childID,e.mtl);Cn.scale.set(2,2,2),Cn.position.y=1.2,Cn.position.z=8,Cn.position.x=-8,Cn.rotation.y=Math.PI/4,rr.add(Cn)},void 0,function(l){console.error(l)});function jx(l){const e=l.domElement;var t=window.innerWidth,n=window.innerHeight,i=e.width/window.devicePixelRatio,r=e.height/window.devicePixelRatio;const o=i!==t||r!==n;return o&&l.setSize(t,n,!1),o}function Cu(){if(Er.render(rr,Ki),requestAnimationFrame(Cu),Ti.update(),jx(Er)){const l=Er.domElement;Ki.aspect=l.clientWidth/l.clientHeight,Ki.updateProjectionMatrix()}}Cu();Nr(".change-car-color").on("input",function(){let l=Nr(this),e=l.data("car-selector"),t=l.val();Wx(Cn,e,Mr(t))});Nr(".change-tire-size").on("input",function(){let l=Nr(this);console.log(l.val()),Cn.traverse(e=>{if(e.isMesh&&e.name.includes("Tire")){let t=.8+.002*l.val();e.scale.set(t,t,t)}})});Nr(".optional-car-input").on("change",function(){let l=Nr(this),e=l.data("car-selector");Cn.traverse(t=>{t.isMesh&&t.name.includes(e)&&(t.visible=!l.is(":checked"))})});
