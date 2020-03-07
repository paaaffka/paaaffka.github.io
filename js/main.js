$('.click-for-video').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/X2kkE3rHm9k?;autoplay=1&;controls=1&;showinfo=0');
});
$('.click-for-video2').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('iframe.youtube2').prop('src', 'https://www.youtube.com/embed/PTLdDBRUubc?;autoplay=1&;controls=1&;showinfo=0');
});
$('.click-for-video3').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('iframe.youtube3').prop('src', 'https://www.youtube.com/embed/MPciroccHc8?;autoplay=1&;controls=1&;showinfo=0');
});


$(document).ready(function() {
  $("a.scrollto").click(function() {
  	$("a.scrollto").removeClass('dot');
  	$(this).addClass('dot');
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).toggleClass('menu_state_open');
      $('nav').toggleClass('menu_state_open');
    });
  });
})(jQuery);