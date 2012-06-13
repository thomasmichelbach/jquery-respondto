(function($, window){
    
    function check(query, callback){
        var state = window.matchMedia(query).matches;
        if(state != $(this).data("state:" + query)) callback.call($(this).data("state:" + query, state), state);
    }
    
    $.fn.respondTo = function(q, c){
        
        $(this).each(function(){
            var element = this;
            
            $(window).bind("resize scroll", function(){
                check.call(element, q, c);
            });
            check.call(element, q, c);
        });
        return this;
    };
    
    $.fn.respondTo.landscape = '(orientation:landscape)';
    $.fn.respondTo.portrait = '(orientation:portrait)';

})(jQuery, window);