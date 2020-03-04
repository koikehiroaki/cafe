$(function(){

    $(".btn-gnavi").on("click",function(){
        var rightval = 0;
        // thisは(".btn-gnavi")を表している？
        if($(this).hasClass("open")){
            rightval = -300;
            $(this).removeClass("open");
        }else{
            $(this).addClass("open");
        }

        $("nav").stop().animate({
            right: rightval
        },500);
    });
});

console.log(1)