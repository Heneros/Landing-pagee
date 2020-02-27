$(document).ready(function(){
  $(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'), 
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('.main__trigger').click(function(){
  $(this).next('.hidable').slideToggle()
});
});

