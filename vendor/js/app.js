
$(document).ready(function(){
    $('#search-icon').click(function(){
        $('.overlay-search').css('display','block');
        $('.carousel-indicators').css('display','none');

    });
    $('#close-search').click(function(){
        $('.overlay-search').css('display','none');
        $('.carousel-indicators').css('display','flex');

    });

})