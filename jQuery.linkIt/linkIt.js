(function($){
  $.fn.linkIt = function(options){
    //default settings
    var settings = $.extend({
      href: "",
      text: "",
      target: "_blank"
    },options);
    //validation
    if(settings.href === "") {
      console.log("You need an href option for linkIt");
      return this;
    }
    return this.each(function(){
      var object = $(this);

      if(settings.text === "") {
        settings.text = object.text();
      }
      object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
    });
    }


}(jQuery));
