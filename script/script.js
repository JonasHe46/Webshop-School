import { ajaxRequest, fetchDataAsync } from "./ajax.js";


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
    
    function MyFunction() {
      alert("test")
    }
    
    
    function datenschutzBanner() {
     let element = document.getElementById("DatenschutzID");
     element.classList.add("dNone");
    }
    
    ajaxRequest();

    fetchDataAsync('/webshop/script/getData.php');



