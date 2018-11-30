(function ($) {
	"use strict";
    //Skill Bar
    jQuery(document).ready(function($){
    	$('#skillbar').barfiller({barColor: "#361574", symbol: ""});
    	$('#skillbar-2').barfiller({barColor: "#361574"});
    	$('#skillbar-3').barfiller({barColor: "#361574"});
    	$('#skillbar-4').barfiller({barColor: "#361574"});
    	$('#skillbar-5').barfiller({barColor: "#361574"});

    //call isotope
    $(".project-list").isotope({
          itemSelector: '.col-md-3',
          layoutMode: 'fitRows'

       });

       $(".isotop-project li").on("click", function(){
            $(".isotop-project li").removeClass("active");
            $(this).addClass("active");

             var selector = $(this).attr("data-filter");

           $(".project-list").isotope({
              itemSelector: '.col-md-3',
              layoutMode: 'fitRows',
              filter: selector
           });
       }); 

      //sLider active
       $(".testimual-list").owlCarousel({
          items:1,
          dots:true,
          loop:true,
          autoplay:true,
          autoplayTimeout:3000,

       });

       //slick nave 
       $('#humbargar-menu').slicknav({
        appendTo: '.mobile-menu'
       });
          //anipation
        new WOW().init();

        //stcky menu
         $(".header-top-area").sticky({
          topSpacing:0,
          zIndex:'',
        });

       $('html').smoothScroll({
       offset:-50,
       });



 });


   //Smooth scroll
         
    /*====  Window Load Function =====*/
    jQuery(window).load(function(){
             //stky Header
       

        
    });
//Stky header
// $(window).scroll(function() {

//     if ($(window).scrollTop() ) {
//         $('.header-top-area').addClass('sticky');
//     } else {
//         $('.header-top-area').removeClass('sticky');
//     }
// });

    
}(jQuery));	


