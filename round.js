$(document).ready(function () {
    const timeDuration = 500
    $('.round').click(function () {
        setInterval(function () {
            const roundItems = 5;
            for (let index = 0; index < roundItems; index++) {
                const randomSize = 150 - (getRandomNumber(0, 20) + index * 20)
                $(`.curcle_${index}`).animate({
                    width: randomSize,
                    height: randomSize
                }, timeDuration
                )
            }
        }, timeDuration)
    })
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
});