$(document).ready(function () {
    const sceenHeigth = $(window).height(); //получили высоту экрана
    const screeWidth = $(window).width();

    // const imgSecondPosition = $('.second').offset();
    //получим координаты первой картинки


    //console.log(sceenHeigth, screeWidth,imgSecondHeight, imgSecondeWidth)

    // var move = $('.one');
    // $('.one').click(runIt);
    // function runIt() {
    //     move.animate({ left: 300 }, 500)
    //         .animate({ top: 70 }, 500)
    //         .animate({ left: "-=300" }, 500)
    //         .animate({ top: "-=70" }, 500, function () {
    //             runIt()
    //         });
    // }
    //$().animate(moveImg);
    // moveImg();
    // setInterval(moveImg, 100);
    // function moveImg() { 
    //     var imgOnePosition = $('.one').offset();
    //     var randomTop = Math.floor(Math.random() * maxTop) + 0;
    //     var randomLeft = Math.floor(Math.random() * maxLeft) + 0;
    //     if (randomTop < imgOnePosition.top - imgSecondHeight
    //         || randomTop > imgOnePosition.top + imgOneHeight
    //         || randomLeft < imgOnePosition.left - imgSecondeWidth
    //         || randomLeft > imgOnePosition.left + imgOneWidth) {
    //         $('.second').animate({ 'left': randomLeft, 'top': randomTop, }, 100);
    //     }
    // }

    setInterval(() => {
        moveImgUniversal($('.one'), $('.second'));
    }, 1500);

    setInterval(() => {
        moveImgUniversal($('.second'), $('.one'));
    }, 1300);

    function moveImgUniversal(imageA, imageB) {
        var imgOnePosition = imageA.offset();
        const imgOneWidth = imageA.width(); //получили ширину картинки
        const imgOneHeight = imageA.height();
        const imgSecondeWidth = imageB.width(); //получили ширину картинки
        const imgSecondHeight = imageB.height();
        const maxTop = sceenHeigth - imgSecondHeight; //вычислили высоту, чтобы каждый раз ее не вычислять в функции moveImg
        const maxLeft = screeWidth - imgSecondeWidth; //вычислили ширину, чтобы каждый раз ее не вычислять в функции moveImg


        var randomTop = Math.floor(Math.random() * maxTop) + 0;
        var randomLeft = Math.floor(Math.random() * maxLeft) + 0;
        if (randomTop < imgOnePosition.top - imgSecondHeight
            || randomTop > imgOnePosition.top + imgOneHeight
            || randomLeft < imgOnePosition.left - imgSecondeWidth
            || randomLeft > imgOnePosition.left + imgOneWidth) {
            imageB.animate({ 'left': randomLeft, 'top': randomTop, }, 1000);
        }
    }
});