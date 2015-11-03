require.config({
    baseUrl: "scripts/lib"
});

require(['../app'], function(app){
  var myApp = new app();
});
