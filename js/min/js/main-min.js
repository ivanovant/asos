"use strict";document.addEventListener("DOMContentLoaded",function(e){var t=new Swiper(".swiper1",{loop:!0,navigation:{nextEl:".swiper-button-next1",prevEl:".swiper-button-prev1"}}),s=(new Swiper(".swiper2",{loop:!0,slidesPerView:4,spaceBetween:46,navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},breakpoints:{1350:{slidesPerView:4,spaceBetween:46},992:{slidesPerView:4,spaceBetween:10},575:{slidesPerView:2,spaceBetween:10},220:{slidesPerView:1,spaceBetween:0}}}),document.querySelectorAll(".swiper2-slide")),r=document.querySelectorAll(".product-card__image-wrap");s.forEach.call(r,function(e,t){e.addEventListener("mouseenter",function(t){var s=e.dataset.index;e.children[1].classList.add("wrap--active"),d.src="./img/top-products/zoom-image"+s+".jpg"}),e.addEventListener("mouseleave",function(t){return e.children[1].classList.remove("wrap--active"),!1})});var i=document.querySelector(".header"),n=document.querySelector(".header__menu");window.addEventListener("scroll",function(){scrollY>100?(i.classList.add("header--purple"),n.classList.add("header__menu--purple")):(i.classList.remove("header--purple"),n.classList.remove("header__menu--purple"))});var c=document.querySelector(".zoom"),l=document.querySelectorAll("[data-toggle=zoom]"),o=document.querySelector(".zoom__close"),a=function(){return c.classList.remove("zoom--visible")},d=document.getElementById("zoomImg");document.querySelectorAll(".swiper2-slide");l.forEach(function(e){e.addEventListener("click",function(e){c.classList.add("zoom--visible")})}),o.addEventListener("click",a),document.addEventListener("keydown",function(e){"Escape"===e.key&&a()}),c.addEventListener("click",function(e){e.target===c&&a()});var u=document.querySelector(".swiper-button-next1"),m=document.querySelector(".swiper-button-prev1"),v=document.querySelector(".swiper-slide-next-preview"),p=function(){return v.classList.toggle("swiper-slide-next-preview--active")},f=document.querySelector(".swiper-slide-prev-preview"),L=function(){return f.classList.toggle("swiper-slide-prev-preview--active")},_=document.querySelectorAll(".swiper1-slide");v.classList.add("slide--second"),f.classList.add("slide--third"),t.on("slideChange",function(){_.forEach(function(e,s,r){var i=t.realIndex+1;1===i?(v.classList.add("slide--second"),f.classList.add("slide--third")):(v.classList.remove("slide--second"),f.classList.remove("slide--third")),2===i?(v.classList.add("slide--third"),f.classList.add("slide--first")):(v.classList.remove("slide--third"),f.classList.remove("slide--first")),3===i?(v.classList.add("slide--first"),f.classList.add("slide--second")):(v.classList.remove("slide--first"),f.classList.remove("slide--second"))})}),u.addEventListener("mouseenter",function(e){p()}),u.addEventListener("mouseleave",function(e){p()}),m.addEventListener("mouseenter",function(e){L()}),m.addEventListener("mouseleave",function(e){L()});var w=document.querySelector(".menu__button"),g=document.querySelector(".menu__button-item"),E=document.querySelector(".menu__nav");w.addEventListener("click",function(e){e.preventDefault(),w.classList.toggle("menu__button--light--active"),g.classList.toggle("menu__button-item--light--active"),E.classList.toggle("menu__nav--active")});var h=document.querySelector(".cart__modal"),y=document.querySelector(".cart__link");document.querySelectorAll("[data-toggle=cart]").forEach(function(e){y.addEventListener("click",function(e){e.preventDefault()}),e.addEventListener("click",function(){h.classList.toggle("cart__modal--visible")})});var b=document.querySelector(".access");document.addEventListener("keydown",function(e){"Escape"===e.key&&(h.classList.remove("cart__modal--visible"),k.classList.remove("search--visible"),b.classList.remove("access--visible"))});var q=document.querySelector(".search__link"),S=document.querySelector(".search__close"),k=document.querySelector(".search"),$=function(){return k.classList.toggle("search--visible")};q.addEventListener("click",function(e){e.preventDefault(),$()}),S.addEventListener("click",$),k.addEventListener("click",function(e){e.target===k&&k.classList.remove("search--visible")})});var offersForm=$(".offers__form");offersForm.validate({errorClass:"invalid",errorElement:"div",rules:{userEmail:{required:!0,email:!0,minlength:8}},messages:{userEmail:{required:"Заполните поле",email:"Введите корректный email",minlength:"Email не может содержать менее 8 символов"}}}),$(document).ready(function(){$(".scroll-up__button").click(function(e){return e.preventDefault(),$("body,html").animate({scrollTop:0},1500),!1});var e=$(".cart__modal");$(window).on("scroll",function(){if(!($(window).width()>785))return!0;scrollY>100?e.addClass("cart--scroll"):e.removeClass("cart--scroll")}),$(document).mouseup(function(t){e.is(t.target)||0!==e.has(t.target).length||e.removeClass("cart__modal--visible")});var t=$(".access"),s=$(".access__close"),r=$(".user__link");s.on("click",function(){t.toggleClass("access--visible")}),r.on("click",function(){t.toggleClass("access--visible")}),t.on("click",function(e){t.is(e.target)&&t.removeClass("access--visible")})});