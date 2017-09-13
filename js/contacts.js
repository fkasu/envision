/**
 * Created by Administrator on 2016/11/10 0010.
 */
$(function () {
    $('.Contacts .commentBtn').on('touchstart',function () {
        $(this).css('background','url("images/buttons2.png") no-repeat');
    });
    $('.Contacts .commentBtn').on('touchend',function () {
        $(this).css('background','url("images/buttons.png") no-repeat');
    })
});