(function ($) {

    "use strict";

    $(document).ready(function () {



        // protfileo work

        $('.slider-work').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },

                575: {
                    items: 1,
                },

                768: {
                    items: 2,
                    nav: false,
                    dots: true,
                },

                1000: {
                    items: 3,
                    nav: false,
                    dots: true,
                }
            }
        })





        

    });



    // click nenu

    $(function(){

        $(".menu-icon").click(function () {
            $(this).toggleClass("menu-icon-design");
            $(".main-menu").toggleClass("main-menu-open");
        });
       
    });


    $(function(){

        $(".main-menu li a").click(function () {
            $(".main-menu").removeClass("main-menu-open");
            $(".menu-icon").removeClass("menu-icon-design");
        });
       
    });


    // remove class menu 


    $(function() {
        var header = $(".header");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 300) {
                header.addClass("fix-none");
            } else {
                header.removeClass("fix-none");
            }
        });
    });



    

    //  type js

    var typed3 = new Typed('#typed3', {
        strings: ['Web Designer', 'Web Developer', 'Wordpress '],
        typeSpeed: 100,
        backSpeed: 50,
        smartBackspace: true, // this is a default
        loop: true,
        backDelay: 500,
        startDelay: 1000,
      });



    // Scroll Top Icon Show & Hide
    $(function () {
        var myWindowScroll = 200;
        $(window).scroll(function () {
            if ($(window).scrollTop() > myWindowScroll) {
                $(".back-to-top a ").fadeIn("slow");
            } else {
                $(".back-to-top a").fadeOut("slow");
            }
        });
    });


    // Back To Top
    $(".back-to-top a").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });


    

    //Begin Loading Animation
    $(window).load(function() {
        $(".spinner-area").delay(1000).fadeOut("slow");
    });

    //contat from js 


    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above
      
        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");
      
        // Success and Error functions for after the form is submitted
      
        function success() {
          form.reset();
          status.classList.add("success");
          status.innerHTML = "Thanks!";
        }
      
        function error() {
          status.classList.add("error");
          status.innerHTML = "Oops! There was a problem.";
        }
      
        // handle the form submission event
      
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
      
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      } 



})(jQuery);






    // Menu Smooth-scroll

    $(function () {


    
        $(document).ready(function () {
            $(document).on("scroll", onScroll);
            
            //smoothscroll
            $('.main-menu  li a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");
                
                $('.main-menu  li a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
              
                var target = this.hash,
                    menu = target;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top+2
                }, 2000, 'swing', function () {
                    $(document).on("scroll", onScroll);
                });
            });
        });
        
        
        
        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('.main-menu  li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.main-menu  li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }
    
    
    });





