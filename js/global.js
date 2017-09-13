/**
 * Created by Pevon on 2016/11/9.
 */
window.onload = function () {
    $('.navbox .dropdown-toggle').on('click', function () {
        $(this).css('background', '#120e0d');
        $(this).parents('.dropdown').children('.dropdown-menu').toggle();
        $(this).parents('.dropdown').siblings().children('.dropdown-menu').css('display', 'none');
        $(this).parents('.dropdown').siblings().children('.dropdown-toggle').css('background', 'none');
    });
    $('.navbox .dropdown-menu li a').on('mouseover', function () {
        $(this).css('background-color', '#120e0d');
    });

    $('.navbox .dropdown-menu li a').on('mouseup', function () {
        $(this).css('background-color', '#120e0d');
    });

    $('.navbox .dropdown-menu li a').on('mouseleave', function () {
        $(this).css('background-color', '#262626');
    });
    $('.navBox .dropdown-menu li a').on('touchstart', function () {
        $(this).css('background-color', '#cccccc');
    }).on('touchend', function () {
        $(this).css('background-color', '#262626');
    });
    $('.navBox .navbar-toggle').on('click',function () {
        if($('.navbar-collapse').attr('aria-expanded')==undefined||$('.navbar-collapse').attr('aria-expanded')=='false'){
            $(this).addClass('buttonWhite');
        }else{
            $(this).removeClass('buttonWhite');
        }
    });
    

};
//    隐藏和显示边栏
function sidebarIconClick() {
    if ($('#sidebar').is(':visible')) {
        sidebarHidden();
    }
    else {
        sidebarShow();
        $('#sidebar').show();

    }
}
function sidebarShow() {
    $('.sidebarBtn').animate({right: '215px'}, 200);
    $('#sidebar').animate({right: '0'}, 200, function () {


    });
}
function sidebarHidden() {
    $('.sidebarBtn').animate({right: '3%'}, 200);
    $('#sidebar').animate({right: '-280'}, 200, function () {
        $('#sidebar').hide();
    });
}
