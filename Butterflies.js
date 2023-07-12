$(document).ready(function () {
    var move = $('.one');
    $('.one').click(runIt);
    function runIt() {
        move.animate({ left: 30 }, 500)
            .animate({ top: 70 }, 500)
            .animate({ left: "-=30" }, 500)
            .animate({ top: "-=70" }, 500, function () {
                runIt()
            });
    }
    //$().animate(moveImg);
    // moveImg();
    setInterval(moveImg, 3000);
    function moveImg() {
        var randomTop = Math.floor(Math.random() * 1000) + 1;
        var randomLeft = Math.floor(Math.random() * 800) + 1;
        $('.second').animate({ 'left': randomLeft, 'top': randomTop, }, 2000);
    }
});