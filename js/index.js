define(['jquery'], function() {
    (function(){
        //下拉列表显示隐藏
        $('.navSlide').on('click',function(){
            $(this).next().slideToggle();
        });
    })();
});