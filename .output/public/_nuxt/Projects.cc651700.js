import{_}from"./nuxt-img.3721d2d1.js";import{_ as l}from"./nuxt-link.a4197a64.js";import{a as m,o as s,e as o,r as p,h as n,w as d,f as e,t as r,F as u}from"./entry.aa288e20.js";const f={props:{projectsItems:{type:Object,default(){return{}}}},components:{},data(){return{}}},h=e("div",{class:"overlay"},[e("div",{class:"overlay-btn"},[e("div",{class:"overlay-btn-a underline"},"Подробнее")])],-1),x={class:"project-item-title"},v={class:"project-item-description"};function g(y,j,a,k,$,b){const c=_,i=l;return s(!0),o(u,null,p(a.projectsItems,t=>(s(),o("div",{key:t.title,class:"project-item"},[n(i,{to:t.href},{default:d(()=>[n(c,{src:`projects/${t.img}`,alt:t.title,class:"project-item-img"},null,8,["src","alt"]),h]),_:2},1032,["to"]),e("h4",x,[e("strong",null,r(t.title),1)]),e("span",v,r(t.description),1)]))),128)}const F=m(f,[["render",g]]);export{F as P};