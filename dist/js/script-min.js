$(document).ready(function(){$(function(){$(".wrap").mixItUp()}),$(".filter-head__el").click(function(){var e=$(this).index();$(".filter-head__el").removeClass("filter-head__el--active"),$(this).addClass("filter-head__el--active"),$(".wrap").each(function(){$(this).index()==e?$(this).addClass("wrap--active"):$(this).removeClass("wrap--active")})}),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var a="img/pack.html",n=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var i,o,l="localStorage"in e&&null!==e.localStorage,r=function(){t.body.insertAdjacentHTML("afterbegin",o)},c=function(){t.body?r():t.addEventListener("DOMContentLoaded",r)};if(l&&localStorage.getItem("inlineSVGrev")==n&&(o=localStorage.getItem("inlineSVGdata")))return c(),!0;try{i=new XMLHttpRequest,i.open("GET",a,!0),i.onload=function(){i.status>=200&&i.status<400&&(o=i.responseText,c(),l&&(localStorage.setItem("inlineSVGdata",o),localStorage.setItem("inlineSVGrev",n)))},i.send()}catch(s){}}(window,document);