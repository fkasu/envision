/**
 * Created by Administrator on 2016/11/9.
 */
$(function () {
    $('.index .tabs >li').click(function () {
        $(this).siblings().removeClass('current')
        $(this).addClass('current');
    });
    $('.index .bar_right p').on('touchstart',function () {
        $(this).css('background','url("images/buttons2.png") no-repeat')
    })
    $('.index .bar_right p').on('touchend',function () {
        $(this).css('background','url("images/buttons.png") no-repeat')
    })
})