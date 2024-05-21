import './polyfills.server.mjs';
import{B as S,a as g,b as h,c,d as r,e as i,f as m,g as p,h as l,i as b,p as v,r as C,s as _,v as A}from"./chunk-H3GD6TCN.mjs";var E=(()=>{let s=class s{constructor(){this.length=0,this.includeAlphabets=!1,this.includeNumbers=!1,this.includeSpecialCharacters=!1,this.password=""}onUpdateLength(a){let t=a.target,e=parseInt(t.value);this.length=isNaN(e)?0:e}onChangeUseAlphabets(){this.includeAlphabets=!this.includeAlphabets}onChangeUseNumbers(){this.includeNumbers=!this.includeNumbers}onChangeUseSpecialCharacters(){this.includeSpecialCharacters=!this.includeSpecialCharacters}onButtonClick(){let a="1234567890",t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",e="!@#$%^&*()_+[]{}|;:,.<>?",n="",o="";if(this.includeAlphabets&&(n+=t,o+=t[Math.floor(Math.random()*t.length)]),this.includeNumbers&&(n+=a,o+=a[Math.floor(Math.random()*a.length)]),this.includeSpecialCharacters&&(n+=e,o+=e[Math.floor(Math.random()*e.length)]),this.length<o.length){this.password=this.shuffle(o).slice(0,this.length);return}let u=o;for(let f=o.length;f<this.length;f++){let x=Math.floor(Math.random()*n.length);u+=n[x]}this.password=this.shuffle(u)}shuffle(a){let t=a.split("");for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.join("")}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=g({type:s,selectors:[["app-root"]],standalone:!0,features:[b],decls:36,vars:2,consts:[[1,"section",2,"padding","2rem"],[1,"container",2,"max-width","600px","margin","auto"],[1,"title",2,"text-align","center","margin-bottom","2rem"],[1,"field"],[1,"label",2,"margin-bottom","0.5rem"],[1,"control"],["type","number",1,"input",2,"width","100%",3,"input"],[1,"custom-checkbox"],["type","checkbox",3,"change"],[1,"checkmark"],[1,"control",2,"text-align","center","margin-top","1.5rem"],[1,"button","is-primary",3,"click","disabled"],[1,"field",2,"margin-top","2rem"],[1,"label"],["readonly","",1,"input",2,"width","100%",3,"value"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"Password Generator"),i(),r(4,"div",3)(5,"label",4),l(6,"Enter Length"),i(),r(7,"div",5)(8,"input",6),p("input",function(o){return e.onUpdateLength(o)}),i()()(),r(9,"div",3)(10,"div",5)(11,"label",7)(12,"input",8),p("change",function(){return e.onChangeUseAlphabets()}),i(),m(13,"span",9),l(14," Add Alphabets "),i()()(),r(15,"div",3)(16,"div",5)(17,"label",7)(18,"input",8),p("change",function(){return e.onChangeUseNumbers()}),i(),m(19,"span",9),l(20," Add Numbers "),i()()(),r(21,"div",3)(22,"div",5)(23,"label",7)(24,"input",8),p("change",function(){return e.onChangeUseSpecialCharacters()}),i(),m(25,"span",9),l(26," Add Special Characters "),i()()(),r(27,"div",3)(28,"div",10)(29,"button",11),p("click",function(){return e.onButtonClick()}),l(30,"Generate"),i()()(),r(31,"div",12)(32,"label",13),l(33,"Your Generated Password"),i(),r(34,"div",5),m(35,"input",14),i()()()()),t&2&&(h(29),c("disabled",!(e.length&&(e.includeAlphabets||e.includeNumbers||e.includeSpecialCharacters))),h(6),c("value",e.password))}});let d=s;return d})();var y=[];var M={providers:[S(y),_()]};var N={providers:[A()]},w=v(M,N);var k=()=>C(E,w),q=k;export{q as a};
