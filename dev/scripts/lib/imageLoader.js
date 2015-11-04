define(['jquery', 'lodash'], function ($, _) {
    function imageLoader(){

      var images = [];

      var imageCont = $('<div></div>').css({ 'padding' : '2%'}).appendTo(document.body);

      $('<h3></h3>').html('- imageLoader Module Loaded!').appendTo(imageCont);

      _.each(_.range(300, 100, -50), function(elem){
        setTimeout(function(){
          $('<img />').css({ 'margin-right' : '1%', 'border' : '1px dashed #333', 'display' : 'none'}).attr('src', 'http://placehold.it/' + elem + 'x' + elem).appendTo(imageCont).fadeIn('slow');
        }, (300 - elem) * 3);

      });
    }

    return imageLoader;
});
