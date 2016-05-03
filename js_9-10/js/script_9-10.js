/**
 * Created by Lily on 03.05.2016.
 */
/*SHOW MENU*/

/*$(function(){
    var $link = $('a');
    $link.on('click', function(e){
        var $subMenu = $(this).siblings('ul');
        e.preventDefault();
        $subMenu.slideToggle();
});

});*/



/*$(function(){

    $(".firstLevelMenu li a").mouseover(function() {

        $(this).parent().find("ul.secondLevelMenu").slideDown(500).show();

        $(this).parent().hover(function() {
        }, function(){
            $(this).parent().find("ul.secondLevelMenu").slideUp(100);
        });
    });
    $(".secondLevelMenu  li a").mouseover(function() {

        $(this).parent().find("ul.thirdLevelMenu").slideDown('500').show();

        $(this).parent().hover(function() {
        }, function(){
            $(this).parent().find("ul.thirdLevelMenu").slideUp(100);

        });

    });
});*/

$(function(){
    $('nav  ul li').hover(
        function() {

            // !!!останавливаем всю текущую анимацию. Усли эту строчку не писать, то выпадающее меню прыгает при наведении на него курсора
            $(this).find('ul:first').stop(true, true);

            $(this).find('ul:first').slideDown();
        },
        function() {
            $(this).find('ul:first').slideUp('fast');
        }
    );
    // всем элементам меню с вложенностью добавить символ &raquo;
    $('nav  li:has(ul)').find('a:first').append('&raquo;');
});



/* Selectric celect box*/
$(function(){
    $('select').selectric();
});


/*animation dropdown menu*/
$(function(){
    $("ul").mouseenter(
    function () {
        $(this).animate({
                background:"repeating-linear-gradient(to top, #745083, #114165)"
    }, 500).mouseleave(function() {
                $(this).animate({
                    background:"repeating-linear-gradient(to bottom, #745083, #114165)"
                }, 500 );
            });
});


});