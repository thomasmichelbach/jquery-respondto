# jquery.respondto

jquery.respondto is a small wrapper for handling media queries with
jQuery from a scripting perspective, not only a stylesheet point of view.
It saves the state of each query and only triggers when a transition happens.

``
$(el).respondTo(query, function(matches){
    if(matches){
        $(this).html("Query matches now.");
    }else{
        $(this).html("Query does not match anymore.");
    }
});
``