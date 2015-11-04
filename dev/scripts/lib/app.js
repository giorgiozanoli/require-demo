define(['jquery', 'imageLoader', 'ipFinder'], function ($, imageLoader, ipFinder) {
    function App(){

      $('<h1></h1>').css('text-align', 'center').html('RequireJS Demo App Loaded!').appendTo(document.body);
      var myIL = new imageLoader();

      var myIF = new ipFinder();

      setTimeout(function(){
        myIF.showIp();
      }, 1000);
    }

    return App;
});
