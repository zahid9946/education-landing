$(document).ready(function() {

    /*====== SHOW & HIDE MENU ======*/
    $(".menu-show-hide-btn").click(function() {
        $("nav .main-menu").toggleClass("open-menu");
    });

    /*====== Counter Up ======*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});