$(document).ready(function () {
  $('#main_content').headsmart()

  var letter_font = Cookies.get('letter_font') || 'PinyonScript';
  $('#fontselect select').val(letter_font);
  $(".fontselect").css('font-family', letter_font);
  $(".fontselect blockquote").css('font-family', letter_font);

  $("#fontselect select").change(function () {
    var font = $(this).children('option:selected').val();
    Cookies.set('letter_font', font)
    $(".fontselect").css('font-family', font);
    $(".fontselect blockquote").css('font-family', font);
  });     

  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });

  $("#letter").on("swiperight", function() {
    window.location = $('.page_navigation a.prev')[0].href;
  });

  $("#letter").on("swipeleft", function() {
    window.location = $('.page_navigation a.next')[0].href;
  });

  $(document).keydown(function(e) {
    if (e.which == 37) { 
       // left arrow
       window.location = $('.page_navigation a.prev')[0].href;
    } else if (e.which == 39) { 
       // right arrow
       window.location = $('.page_navigation a.next')[0].href;
    }
  });
});
