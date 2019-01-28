//小屏幕导航栏 显示和隐藏
$(function(){
   
    $(".small_mini").hide();
    //点击隐藏图标 显示竖向导航栏 横向隐藏
    $(".nav_hd_mini > .nav_icon").on("click",function(){     
        $(".small_mini").fadeToggle();
    });
    $(".small").hide();
    //点击隐藏图标 显示竖向导航栏 横向隐藏
    $(".nav_hd > .nav_icon").on("click",function(){     
        $(".small").slideToggle();
    });    
})






