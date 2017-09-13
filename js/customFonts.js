/**
 * Created by Administrator on 2016-11-8.
 */
$(function () {
    $('.tabsIonic .my-header li').click(function () {
        $(this).addClass('my-active');
        $(this).siblings().removeClass('my-active');
    });
    $( ".toggleContent .accordion-group .accordion-heading a" ).click(function () {
        if($(this).find('img').attr("src")=="img/toggle_plus.gif")
        {
            $(this).find('img').attr("src","img/toggle_minus.gif");
        }
        else
        {
            $(this).find('img').attr("src","img/toggle_plus.gif");
        }
    });
})
