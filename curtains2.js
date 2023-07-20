$(document).ready(function () {
    let curtainOpen = false;
    const shiftCurtain = 0.2;
    const animationDuration = 1000;
    $(".rope").click(function () {
        if (curtainOpen) {
            $('.right-curtain').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
            $('.left-curtain').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
            $('.right-curtain').animate({
                left: 0
            }, { duration: animationDuration * 4, queue: false });
            $('.left-curtain').animate({
                left: 0
            }, { duration: animationDuration * 4, queue: false });
        } else {
            curtainsMoving('.left-curtain', - 1);
            curtainsMoving('.right-curtain', 1);
            setTimeout(() => {
                $('.left-curtain').animate({
                    left: -400
                }, { duration: animationDuration * 5, queue: false });
                $('.right-curtain').animate({
                    left: 400
                }, { duration: animationDuration * 5, queue: false });
            }, animationDuration);
        }
        curtainOpen = !curtainOpen;
    });
    function curtainsMoving(selector, sight) {
        $(selector).animate(
            { smile: shiftCurtain * sight },
            {
                step: function (now) {
                    console.log(now)
                    $(selector).css('transform', 'matrix(1.0, 0.0, ' + (now) + ', 1.0, 0.0, 0.0)');
                },
                duration: animationDuration, queue: false
            }
        );
        $(selector).animate({
            left: 55 * sight
        }, { duration: animationDuration, queue: false });
    }
    // $('.left-curtain').animate(
    //     { smile: shiftCurtain * -1 },
    //     {
    //         step: function (now) {
    //             console.log(now)
    //             $('.left-curtain').css('transform', 'matrix(1.0, 0.0, ' + now + ', 1.0, 0.0, 0.0)');

    //         },
    //         duration: 200, queue: false 
    //     }
    // );
    // $(".left-curtain").animate({
    //     left: -55
    // }, { duration: 200, queue: false });
    // $('.right-curtain').animate(
    //     { smile: shiftCurtain },
    //     {
    //         step: function (now) {
    //             console.log(now)
    //             $('.right-curtain').css('transform', 'matrix(1.0, 0.0, ' + now + ', 1.0, 0.0, 0.0)');

    //         },
    //         duration: 200, queue: false 
    //     }
    // );
    // $(".right-curtain").animate({
    //     right: -55
    // }, { duration: 200, queue: false });
});
