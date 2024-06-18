$(document).ready(function(){
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showItem(index) {
        const offset = -index * 100;
        $('.carousel-inner').css('transform', `translateX(${offset}%)`);
    }

    $('.next').click(function(){
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    });

    $('.prev').click(function(){
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    });

});
