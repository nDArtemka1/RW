import{_ as P}from"./nuxt-img.3721d2d1.js";import{S as M,a as L,f as N,N as j}from"./grid.min.82f75050.js";/* empty css                       */import{P as O,G as T}from"./grid.123b854c.js";import{a as C,k as d,o as a,c as y,w as _,e as v,F as h,r as U,h as i,l as I,v as b,f as e,m as f,t as S,p as D,i as G,T as E}from"./entry.aa288e20.js";import{P as k}from"./Popup.48dd1ee4.js";import{F as V}from"./Form.2d181227.js";const $={props:{activeUser:{type:Object,default(){return{}}},activeUserImg:{type:Object,default(){return{}}}},components:{Swiper:M,SwiperSlide:L},setup(){return{FreeMode:N,Navigation:j,Pagination:O,Grid:T}}};function q(c,o,s,g,t,n){const m=P,r=d("swiper-slide"),u=d("swiper");return a(),y(u,{modules:[g.Navigation,g.Pagination],spaceBetween:20,navigation:!0,class:"mySwiperTop",pagination:{dynamicBullets:!0,clickable:!0},breakpoints:{200:{slidesPerView:1,spaceBetween:40},321:{slidesPerView:1,spaceBetween:40}}},{default:_(()=>[(a(!0),v(h,null,U(s.activeUserImg,p=>(a(),y(r,{key:p},{default:_(()=>[i(m,{src:s.activeUser.catalogPathImg+p,alt:s.activeUser.catalogLink},null,8,["src","alt"])]),_:2},1024))),128))]),_:1},8,["modules"])}const B=C($,[["render",q]]);const z={props:{activeUser:{type:Object,default(){return{}}}},components:{Popup:k,Form:V,CatalogSwiperItemInfoSwiper:B},data(){return{isVisible:!1,showItemInfo:!1}},methods:{closePopup(){this.isVisible=!1,this.showItemInfo=!1}}},x=c=>(D("data-v-bac16a57"),c=c(),G(),c),H={class:"popup-form"},J=x(()=>e("h3",{class:"popup-form-title"},"Задайте вопрос прямо сейчас!",-1)),K=x(()=>e("p",{class:"popup-form-description"}," Консультация по всем вопросам - бесплатно! ",-1)),Q={class:"catalog-item-info"},R={class:"catalog-item-info_img"},W={class:"catalog-item-info-desription"},X={class:"catalog-item-info-desription-p"},Y={class:"catalog-item-info_button-wrap"},Z=x(()=>e("span",null," Узнать стоимость ",-1)),ee=[Z];function te(c,o,s,g,t,n){const m=d("Form"),r=d("Popup"),u=B;return a(),v("div",null,[I(i(r,{onClosePopup:n.closePopup},{default:_(()=>[e("div",H,[J,K,i(m)])]),_:1},8,["onClosePopup"]),[[b,t.isVisible]]),e("div",Q,[e("div",R,[i(u,{activeUser:s.activeUser,activeUserImg:s.activeUser.catalogImgs},null,8,["activeUser","activeUserImg"])]),e("div",W,[e("div",X,[e("p",{class:"catalog-item-info_p",onClick:o[0]||(o[0]=f(p=>t.showItemInfo=!t.showItemInfo,["prevent"]))},[e("strong",null,S(s.activeUser.title),1)])]),e("div",Y,[e("div",{class:"catalog-item-info_button",onClick:o[1]||(o[1]=f(p=>t.isVisible=!t.isVisible,["prevent"]))},ee)])])])])}const F=C(z,[["render",te],["__scopeId","data-v-bac16a57"]]);const oe={props:{catalogItems:{type:Object,default(){return{}}}},components:{Popup:k,Form:V,CatalogSwipertemInfo:F},data(){return{isVisible:!1,showItemInfo:!1,overflowBody:!1,indexActiveUser:0}},methods:{closePopup(){this.isVisible=!1,this.showItemInfo=!1,this.overflowBody=!1,document.body.classList.remove("body-overflow")},showModal(){this.overflowBody=!0,document.body.classList.add("body-overflow")}},computed:{activeUser(){return this.catalogItems[this.indexActiveUser]}}},se={class:"popup-form"},ie=e("h3",{class:"popup-form-title"},"Задайте вопрос прямо сейчас!",-1),ne=e("p",{class:"popup-form-description"}," Консультация по всем вопросам - бесплатно! ",-1),le={class:"popup-item-info"},ae=["disabled"],ce=["disabled"],re=["onClick"],pe={class:"catalog-item_img"},_e=e("div",{class:"overlay"},[e("div",{class:"overlay-btn"},[e("span",{class:"underline"},"Быстрый просмотр")])],-1),de={class:"catalog-item_flex"},me={class:"catalog-item_flex-p"},ue={class:"catalog-item_button-wrap"},ve=e("span",null," Узнать стоимость ",-1),fe=[ve];function ge(c,o,s,g,t,n){const m=d("Form"),r=d("Popup"),u=F,p=P;return a(),v(h,null,[I(i(r,{onClosePopup:n.closePopup},{default:_(()=>[e("div",se,[ie,ne,i(m)])]),_:1},8,["onClosePopup"]),[[b,t.isVisible]]),i(E,{name:"fade",mode:"out-in"},{default:_(()=>[I(i(r,{onClosePopup:n.closePopup},{default:_(()=>[e("div",le,[i(u,{activeUser:n.activeUser},null,8,["activeUser"]),e("button",{class:"swiper-btn-prev",onClick:o[0]||(o[0]=l=>t.indexActiveUser--),disabled:t.indexActiveUser<=0},null,8,ae),e("button",{class:"swiper-btn-next",onClick:o[1]||(o[1]=l=>t.indexActiveUser++),disabled:t.indexActiveUser===s.catalogItems.length-1},null,8,ce)])]),_:1},8,["onClosePopup"]),[[b,t.showItemInfo]])]),_:1}),(a(!0),v(h,null,U(s.catalogItems,(l,A)=>(a(),v("div",{class:"catalog-item",onClick:w=>t.indexActiveUser=A,key:l.title},[e("div",pe,[e("div",{onClick:o[2]||(o[2]=f(w=>(t.showItemInfo=!t.showItemInfo,n.showModal()),["prevent"])),class:"catalog-item_img-a"},[i(p,{src:l.catalogPathImg+l.img,alt:l.catalogLink},null,8,["src","alt"]),_e])]),e("div",de,[e("div",me,[e("p",{class:"catalog-item_p",onClick:o[3]||(o[3]=f(w=>(t.showItemInfo=!t.showItemInfo,n.showModal()),["prevent"]))},[e("strong",null,S(l.title),1)])])]),e("div",ue,[e("div",{class:"catalog-item_button",onClick:o[4]||(o[4]=f(w=>t.isVisible=!t.isVisible,["prevent"]))},fe)])],8,re))),128))],64)}const Pe=C(oe,[["render",ge]]);export{Pe as C};