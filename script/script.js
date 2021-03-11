
        $(document).ready(function(){
            $("form").submit(function(event){
                event.preventDefault();
                var name = $("#username").val();
                var password = $("userpassword").val();
                var submit = $("userdatasend");
                $(".form-message").load("createuser.php",{
                    name: name,
                    password: password,
                    submit: submit
                });
            });
        });








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
    

    function loginFn() {
        alert("Funk")
    }