$(document).ready(function () {
    const shiftCurtain = 0.2
    function curtainsMoving(selector, sight) {
        $(selector).animate(
            { smile: shiftCurtain * sight },
            {
                step: function (now) {
                    console.log(now)
                    $(selector).css('transform', 'matrix(1.0, 0.0, ' + (now) + ', 1.0, 0.0, 0.0)');

                },
                duration: 200, queue: false
            }
        );
        $(selector).animate({
            left: 55 * sight
        }, { duration: 200, queue: false });
    }
    $(".cutrains").click(function () {
        curtainsMoving('.left-curtain', -1);
        curtainsMoving('.right-curtain', 1 );
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
});