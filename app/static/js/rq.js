require.config({
  baseUrl: "/static/js/",
  paths:{
    "material":"materialize",
    "jq":"jquery",
    "per": "per",
    "angular":"angular.min",
    "app":"app"
  },
  shim:{
    "material":{
      deps: ['jq']
    },
    "per":{
      deps:['material']
    },
    "app":{
      deps:['angular']
    }
  }
});

require(['jq'], function(){

});

require(['material'], function(){

})
require(['per'], function(){

});
require(['angular'],function(){});
require(['app'],function(){});
