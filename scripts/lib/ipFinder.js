define(['jquery'], function($){
  function ipFinder(){
    this.IPAddress = "unknown";

    var ipCont = $('<div></div>').css({ 'padding' : '2%'}).appendTo(document.body);

    $('<h3></h3>').html('- ipFinder Module Loaded!').appendTo(ipCont);

    this.getCont = function(){ return ipCont};
  }

  ipFinder.prototype.findIp = function(){
    var def = $.Deferred();
    var that = this;
    $
      .ajax({
        url : 'https://api.ipify.org/',
        data : {
          'format' : 'jsonp'
        },
        dataType : 'jsonp'
      })
      .done(function(res){
        that.IPAddress = res.ip;
        def.resolve();
      });

    return def.promise();
  };

  ipFinder.prototype.showIp = function(){
    var that = this;
    that
      .findIp()
      .done(function(){
        $('<div></div>').css('display', 'none').html('Il tuo IP è: ' + that.IPAddress).fadeIn('slow').appendTo(that.getCont());
      });
  };

  return ipFinder;
});
