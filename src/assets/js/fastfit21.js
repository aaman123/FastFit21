$(window).on("load", function () {

    "use strict";
    
    /* ===================================
            Loading Timeout
     ====================================== */
    
    setTimeout(function(){
        $('.loader1').fadeOut();
    
       
    }, 3000);

    console.log('aman');
    
  
    $('.gallery').isotope({
      // options
      itemSelector: '.items',
      
      
   });
  
  
   var $gallery = $('.gallery').isotope({
      // options
   });
  
   // filter items on button click
   $('.filtering').on('click', 'ion-label', function () {
  
      var filterValue = $(this).attr('data-filter');
  
      $gallery.isotope({filter: filterValue});
  
   });

   $('.filtering').on('click', 'ion-label', function () {
  
    $(this).addClass('active').siblings().removeClass('active');

    });

   // filter items on button click
   $('.filtering').on('click', 'ion-item-option', function () {
  
    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({filter: filterValue});

    });

    $('.filtering').on('click', 'ion--item-option', function () {
  
    $(this).addClass('active').siblings().removeClass('active');

    });
  
   
  
   setTimeout(function (){
      $('.filtering .active').click();
   }, 1500);
  
    });
  
    
    
console.log('aman')  