$(function() {

    $("#draggable").draggable({
      containment: ".draggable-container" 
    });
  });
  
  $(function() {
    $("#draggable").draggable({
      containment: ".draggable-container" 
    });
    $("#accordion").accordion();
    $("#datepicker").datepicker(); // Ініціалізація Datepicker
  });

  $(function() {
    $("#draggable").draggable({
      containment: ".draggable-container" 
    });
    $("#accordion").accordion();
    $("#datepicker").datepicker();
    
    // Ініціалізація Owl Carousel
    $(".owl-carousel").owlCarousel({
      items: 3, // Кількість елементів, що відображаються
      loop: true,
      margin: 10,
      nav: true, // Показувати стрілки навігації
      autoplay: true, // Автоматичне програвання
      autoplayTimeout: 2000, // Час між автоматичними програваннями
      autoplayHoverPause: true // Зупинка при наведенні
    });
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})