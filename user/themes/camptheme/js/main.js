$(document).ready(function(){
  // mobile menu
  $('.right.menu.open').on("click",function(e){
      e.preventDefault();
      $('.ui.vertical.menu').toggle();
  });

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry'
  });

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({
      filter: filterValue
    });
  });

  // change is-checked class on buttons
  $('.buttons').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
});