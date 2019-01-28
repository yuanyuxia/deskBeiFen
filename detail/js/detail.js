$(function () {

    //模拟城市-无联动/无搜索
    var selector = $('#city-picker-selector').cityPicker({
        dataJson: cityData,
        renderMode: true,
        search: false,
        linkage: false
    })
    $('#city-picker-selector').on('choose-province.citypicker', function (event, tagert, storage) {
        console.log(storage);
    });

    //设置城市
    selector.setCityVal([{
        'id': '110000',
        'name': '北京市'
    }, {
        'id': '110100',
        'name': '北京市'
    }, {
        'id': '110108',
        'name': '海淀区'
    }]);

    //模拟城市-联动/搜索
    $('#city-picker-search').cityPicker({
        dataJson: cityData,
        renderMode: true,
        search: true,
        linkage: true
    });

    //原生城市-无联动
    var select = $('.city-picker-select').cityPicker({
        dataJson: cityData,
        renderMode: false,
        linkage: false
    });

    //设置城市
    select.setCityVal([{
        "id": "410000",
        "name": "河南省"
    }, {
        "id": "410100",
        "name": "郑州市"
    }, {
        "id": "410105",
        "name": "金水区"
    }]);



     /*添加规格*/
 $(".etalonLabel").on("click",function(){
    var value1 = $(".etalonT1").val();
    var value2 = $(".etalonT2").val();
    var value3 = $(".etalonT3").val();
    if((value1 != "") && (value2 != "") && ($(".etalonAppendBox").length<10)){
        var goodsSpec=value1;
        var specCount=value2;
        var priceCount=value3;
        var str = '<span class="etalonAppendBox">'+
            '<input class="fl etalonAppend1" type="text" name="goodsSpec" value="'+value1+'">'+
            '<input class="fl etalonAppend2" type="text" name="specCount" value="'+value2+'">'+
            '<input class="fl etalonAppend3" type="text" name="priceCount" value="'+value3+'">'+
            '<i class="fr"></i>'+
            '</span>';
        $(".etalonAppendBox2").append(str);
        $(".etalonT1").val("");
        $(".etalonT2").val("");
        $(".etalonT3").val("");
    }
});
});




//商品规格的删除
$("body").on("click",".etalonAppendBox i",function(){
    $(this).parent().remove();
});
// 选择停车场弹框
$(document).ready(function () {
    $(".parkingBtn1").click(function (event) {
        if (!$(this).hasClass(".parkingBtn1")) {
            $(".table_parking").toggle();
           $('.mask1').css({"display":"block"})
        }
        event.stopPropagation(); //阻止事件冒泡   
    });
    $(".mask1").click(function(){
        $('.mask1').css({"display":"none"})
        $(".table_parking").toggle();
    })
});
//推荐人弹框
$(document).ready(function () {
    $(".parkingBtn2").click(function (event) {
        if (!$(this).hasClass(".parkingBtn2")) {
            $(".table_referral").toggle();
           $('.mask2').css({"display":"block"})
        }
        event.stopPropagation(); //阻止事件冒泡   
    });
    $(".mask2").click(function(){
        $('.mask2').css({"display":"none"})
        $(".table_referral").toggle();
    })
});