


    $(function() {
        /* .not() method constructs a new jQuery object from a subset of the matching elements. The supplied selector
        is tested against each element; the elements that don't match the selector will be included in the result.
        В нашем случае удаляем текущий активный класс из li
         */

        $('ul.tabs__list').on('click', 'li:not(.active)', function() {
            $(this)

                //method siblings применяется к элементам одного уровня, то есть сначала одному из элементов на уровне li
                //мы присвоили класс active, а затем его удалили, перейдя на соседний элемент этого же уровня

                .addClass('active').siblings().removeClass('active')



                /*The .closest selector  -   traverses up the DOM to find the parent that matches the conditions.
                 the .find selector      -  traverses down the DOM where the event occurred, that matches the conditions.

                 Now, given these and since the event is always passed as the attribute to the bound function, following
                 is the simplest, best method to get to the corresponding element somewhere.

                 Это наиболее простой метод получить событие при клике на кнопку, в нашем случае - вкладку
                 <   .closest('div.tabs__wrapper').find('div.tabs__item'   >!!!

                 То есть мы пошли сначала вверх дерева и нашли родителя для 'div.tabs__item', потом спустились до 'div.tabs__item',
                  у этого 'div.tabs__item' удалили метод active и по индексу в табе присвоили класс active другому 'div.tabs__item'.

                 Выбор элемента осуществили через метод eq.
                 */


                .closest('div.tabs__wrapper').find('div.tabs__item').removeClass('active').eq($(this).index()).addClass('active');







        });

    });








