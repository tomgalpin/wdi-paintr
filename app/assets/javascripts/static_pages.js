$(document).ready(function(){
  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    $('#colors').prepend(box);

    $('#color').val('').focus();
  };

  var set_color = function(){
    var box = $(this);
    var color = box.css('background-color');

    $('#selected_color').css('background-color', color)
  };


  var paint = function(){
    var paint_box = $(this);
    var color = $('#selected_color').css('background-color');

    paint_box.css('background-color', color);
  };

  // adds image from form to created .image_box
  var add_image = function() {
    var box = $('<div>');
    box.addClass('image_box');

    var image = $('#image').val();
    // console.log(image);

    $('#images').prepend(box);
    $('.image_box').append('#image').html('<img src=' + image + '>');
    $('#image').val('').focus();
  };

  var add_image_to_canvas = function() {
    var image_src = $(this).children().attr("src");
    console.log(image_src);

    $('#canvas').css('background-image', 'url(' + image_src + ')');
  };

///////////////////////////////////////////////////
  $('#add_color').on('click', add_color);
  // Instead of this line:  box.css('background-color');
  // We need an event handler to a parent element, because box doesn't exist yet when the user clicks on it.
  $('#colors').on('click', '.box', set_color);
  $('.paint_box').on('mouseover', paint);

  $('#add_image').on('click', add_image);
  // same issue here with the event on the parent element, because .image_box doesn't exist yet on initialization
  $('#images').on('click', '.image_box', add_image_to_canvas);
});