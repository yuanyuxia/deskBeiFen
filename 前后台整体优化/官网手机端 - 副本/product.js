//产品切换
$(function () {
	$(".pic_tab").children().eq(0).show().siblings().hide();
	$(".introduce_item1 .intro1_left a").click(function () {
		var index = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".pic_tab ").children().eq(index).show().siblings().hide();
	});

	//切换右边按钮选中状态
	$(".banner_btns ").click(function () {
		var index = $(this).index();
		$(".banner_btns ").children("span").removeClass("on");
		$(".banner_btns ").eq(index).children("span").addClass("on");

	});
	//二维码切换
	$(".p_banner_btns ").each(function(){
		$(this).children("span").click(function(){
			var syin = $(this).index();
			$(".erwm").each(function(){
				$(this).children(".banner_code").eq(syin).show().siblings(".banner_code").hide();
			})
		})
	})
})

