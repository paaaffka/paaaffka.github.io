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