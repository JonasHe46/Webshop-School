import { ajaxRequest } from "./ajax.js";


$(document).ready(function(){
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          window.location.hash = hash;
        });
      } 
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
    
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
    })
    
    
    
    function datenschutzBanner() {
     let element = document.getElementById("DatenschutzID");
     element.classList.add("dNone");
    }
    
    ajaxRequest();




    function mainPage() {
      //create elements
      let bootdeyDiv = document.createElement("div");
      let mainNavDiv  = document.createElement("div");
      let searchSection = document.createElement("section");
      let searchDiv = document.createElement("div");
      let searchInput = document.createElement("input");
      let categorySection = document.createElement("section");
      let categoryHeader = document.createElement("header");
      let categoryDiv = document.createElement("div");
      let categoryUl = document.createElement("ul");

      let categoryLi1 = document.createElement("li");
      let categoryA1 = document.createElement("a");
      let categoryI1 = document.createElement("i");

      let categoryLi2 = document.createElement("li");
      let categoryA2 = document.createElement("a");
      let categoryI2 = document.createElement("i");

      let categoryLi3 = document.createElement("li");
      let categoryA3 = document.createElement("a");
      let categoryI3 = document.createElement("i");

      let categoryLi4 = document.createElement("li");
      let categoryA4 = document.createElement("a");
      let categoryI4 = document.createElement("i");
     


      categorySection.appendChild(categoryHeader);
    }