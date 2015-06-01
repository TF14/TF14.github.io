$(function(){
    $('.l-skill-block').each(function(i,n){
        $(n).animate({width: $(n).attr('data-per')});
    });
});