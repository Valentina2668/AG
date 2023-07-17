$(document).ready(function () {
    $curtainopen = false;
    $(".rope").click(function () {
        $(this).blur();
        if ($curtainopen == false) {
            $(this).stop().animate({ top: '0px' }, { queue: false, duration: 350, easing: 'easeOutBounce' });
            $(".topcurtain").stop().animate({ height: '60px' }, 2000);
            $(".bottomcurtain").stop().animate({ height: '60px' }, 2000);

            $curtainopen = true;
        } else {
            $(this).stop().animate({ top: '-40px' }, { queue: false, duration: 350, easing: 'easeOutBounce' });
            $(".topcurtain").stop().animate({ height: '50%' }, 2000);
            $(".bottomcurtain").stop().animate({ height: '51%' }, 2000);
            $curtainopen = false;
        }
        return false;
    });
})