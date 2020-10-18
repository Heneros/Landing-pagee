import $ from 'jquery';

$(document).ready(function(){
  //anchor links
  $(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'), 
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
///hamburger menu css
$('.main__trigger').click(function(){
  $(this).next('.hidable').slideToggle()
});


});

///accordion 
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}