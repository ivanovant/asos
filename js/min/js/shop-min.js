"use strict";$(document).ready(function(){$(".offers__form").validate({errorClass:"invalid",errorElement:"div",rules:{userEmail:{required:!0,email:!0,minlength:8}},messages:{userEmail:{required:"Заполните поле",email:"Введите корректный email",minlength:"Email не может содержать менее 10 символов"}}});var e=$(".access"),t=$(".access__close"),s=$(".user__link");t.on("click",function(){e.toggleClass("access--visible")}),s.on("click",function(){e.toggleClass("access--visible")}),e.on("click",function(t){e.is(t.target)&&e.removeClass("access--visible")});var a=$(".cart__modal"),n=$(".cart__link");$("[data-toggle=cart]");n.on("click",function(e){e.preventDefault(),a.toggleClass("cart__modal--visible")}),$(window).on("scroll",function(){if(!($(window).width()>785))return!0;scrollY>100?a.addClass("cart--scroll"):a.removeClass("cart--scroll")}),$(document).mouseup(function(e){a.is(e.target)||0!==a.has(e.target).length||a.removeClass("cart__modal--visible")}),$(document).on("keydown",function(e){"Escape"===e.key&&(a.removeClass("cart__modal--visible"),l.removeClass("search--visible"))});var c=$(".search__link"),i=$(".search__close"),l=$(".search"),r=function(){return l.toggleClass("search--visible")};c.on("click",function(e){e.preventDefault(),r()}),i.on("click",r),$(document).mouseup(function(e){l.is(e.target)&&0===l.has(e.target).length&&l.removeClass("search--visible")});var o=$(".menu__button"),u=$(".menu__button-item"),m=$(".menu__nav");o.on("click",function(e){e.preventDefault(),o.toggleClass("menu__button--dark--active"),u.toggleClass("menu__button-item--dark--active"),m.toggleClass("menu__nav--active")});$(".header");var d=$(".header__menu");$(window).on("scroll",function(){scrollY>100?d.addClass("header__menu--dark--active"):d.removeClass("header__menu--dark--active")}),$(".select").on("click",".select__head",function(){$(this).hasClass("open")?($(this).removeClass("open"),$(this).next().fadeOut()):($(".select__head").removeClass("open"),$(".select__list").fadeOut(),$(this).addClass("open"),$(this).next().fadeIn())}),$(".select").on("click",".select__item",function(){$(".select__head").removeClass("open"),$(this).parent().fadeOut(),$(this).parent().prev().text($(this).text()),$(this).parent().prev().prev().val($(this).text())}),$(document).click(function(e){$(e.target).closest(".select").length||($(".select__head").removeClass("open"),$(".select__list").fadeOut())}),$(".scroll-up__button").click(function(e){return e.preventDefault(),$("body,html").animate({scrollTop:0},1500),!1}),$(document).one("mouseenter",function(e){(e.currentTarget="document")&&$('<script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym")   ; ym(64743577, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); <\/script> <noscript><div><img src="https://mc.yandex.ru/watch/64743577" style="position:absolute; left:-9999px;" alt="" /></div></noscript>').appendTo("head")})});