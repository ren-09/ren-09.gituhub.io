$(function(){

  $('#mesg1').fadeIn(2000);
  $('#mesg2').fadeIn(4000);
  $('#mesg3').fadeIn(6000);

  $('.menu-icon').click(function(){
    $('.menu').slideDown();
    $('.menu-icon').hide();
    $('.cross-icon').slideDown('slow');
  });
  $('.cross-icon').click(function(){
    $('.menu').slideUp();
    $('.cross-icon').hide();
    $('.menu-icon').slideDown('slow');
  });

  $('.live-menu-icon').click(function(){
    var clickedIndex = $('.live-menu-icon').index($(this));
    $('.live-details').eq(clickedIndex).slideDown();
    $(this).hide();
    $('.live-menu-close-icon').eq(clickedIndex).slideDown('slow');
  });

  $('.live-menu-close-icon').click(function(){
    var clickedIndex = $('.live-menu-close-icon').index($(this));
    $('.live-details').eq(clickedIndex).slideUp();
    $(this).hide();
    $('.live-menu-icon').eq(clickedIndex).slideDown('slow');
  });

  $('.covers-button').click(function(){
    $('.covers').addClass('active');
    $('.original-songs').removeClass('active');
  });

  $('.original-songs-button').click(function(){
    $('.covers').removeClass('active');
    $('.original-songs').addClass('active');
  });


});
