require.config({
    baseUrl: "scripts/lib",
    paths : {
      jquery : '../../vendor/jquery/dist/jquery',
      lodash : '../../vendor/lodash/lodash'
    }
});

require(['../app'], function(app){
  var myApp = new app();
});
