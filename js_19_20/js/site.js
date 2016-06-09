/**
 * Created by Lily on 30.05.2016.
 */



/* CAROUSEL */

//(function($) {
//    $(function() {
//        $('.jcarousel').jcarousel();
//
//        $('.jcarousel-control-prev')
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .jcarouselControl({
//                target: '-=1'
//            });
//
//        $('.jcarousel-control-next')
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .jcarouselControl({
//                target: '+=1'
//            });
//
//        $('.jcarousel-pagination')
//            .on('jcarouselpagination:active', 'a', function() {
//                $(this).addClass('active');
//            })
//            .on('jcarouselpagination:inactive', 'a', function() {
//                $(this).removeClass('active');
//            })
//            .jcarouselPagination();
//    });
//})(jQuery);



$(function() {
    var $accordion =$('.title__accordion');
    $accordion.on('click',function() {
        var $content = $(this).siblings('.text__accordion');
        $content.slideToggle();
    })


});











