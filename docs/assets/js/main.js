$(document).ready(function () {
  $('#main_content').headsmart()

  var fontFamily = Cookies.get('letter_font') || 'script';
  $('#fontselect select').val(fontFamily);
  $(".fontselect").attr('data-font-family', fontFamily);

  $("#fontselect select").change(function () {
    var fontFamily = $(this).children('option:selected').val();
    Cookies.set('letter_font', fontFamily)
    $(".fontselect").attr('data-font-family', fontFamily);
  });     

  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });

  if (isTouchDevice()) {
    $("#letter").on("swiperight", function() {
      window.location = $('.page_navigation a.prev')[0].href;
    });

    $("#letter").on("swipeleft", function() {
      window.location = $('.page_navigation a.next')[0].href;
    });
  } else {
    $(document).keydown(function(e) {
      if (e.which == 37) { 
         // left arrow
         window.location = $('.page_navigation a.prev')[0].href;
      } else if (e.which == 39) { 
         // right arrow
         window.location = $('.page_navigation a.next')[0].href;
      }
    });
  }
});

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
