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
        "id":"410000","name":"河南省"
    }, {
        "id":"410100","name":"郑州市"
    }, {
        "id":"410105","name":"金水区"
    }]);
});