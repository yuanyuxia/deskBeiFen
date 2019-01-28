  

//复选框换成图片背景



    /*全选*/
     $(function(){ 


        $(".checkItem").on("click",function(){
            $(this).toggleClass("active01");
        });

        $("  .checkAllItem").on("click",function(){
            $(this).toggleClass("active01");
            $(".checkItem").removeClass("active01");
        });

     $("  .checkAllItem").on("click",function(){
            for(var i = 0;i < $(" .checkItem").length;i++){
            if($("  .checkAllItem").hasClass("active01")){
                
                $(".checkItem").addClass("active01");
            }else{

                $(".checkItem").removeClass("active01");
            }

        }
       });

       $(".checkItem").on("click",function(){
            for(var i = 0;i < $(".checkItem").length;i++){
                if($(".checkItem.active01").length == $(".checkItem").length){
                    $(" .checkAllItem").addClass("active01");
            }else{
                $(" .checkAllItem").removeClass("active01");
            }
        }
            });

        });









/*

    var checkAllItem = document.getElementsByClassName("checkAllItem");
   //var tb = document.getElementById("tb_news");
    var checkItems = document.getElementsByClassName("checkItem");//下面的复选框
     checkAllItem.onclick = function () {
        for (var i = 0; i < checkItems.length; i++) {
            checkItems[i].checked = checkAllItem.checked;
        }
    };
    //下面的 也可以控制上面的
    //下面每个复选框都要注册点击事件 点击之后判断
    //如果下面的都选中了 checkAllItem就选中 如果没有都选中checkAllItem就不选中
    for (var i = 0; i < checkItems.length; i++) {
        checkItems[i].onclick = function () {
            //判断有没有都选中
//            var isCheckedcheckAllItem = true;//假设都选中了
            var checkedCount = 0;
            for (var i = 0; i < checkItems.length; i++) {
                if (checkItems[i].checked === true) {
                    checkedCount++;
                }
            }
            if (checkedCount === checkItems.length) {
                checkAllItem.checked = true;
            } else {
                checkAllItem.checked = false;
            }
        };
    }
*/