    
    var cacheData = {
        map: {},
        markers: [],
    }
//在全域 方便呼叫方法

    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        var uluru = {
            lat: 25.0417443,
            lng: 121.535194
        };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 15.65,
                center: uluru
            });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        cacheData.map = map;
        sendRequest();
    }

    function sendRequest() {
        console.log('start json request')
        let ajaxToken = $.ajax({
            // type:'GET',
            url: "https://maskmap.azurewebsites.net/api/mask/getmaskstock",
            success: function (data) {
                // console.log(data)
                let resp = JSON.parse(data);
                console.log(resp)
                drawMap(resp.features);
            },
            error: function (data) {
                alert()
            }
        });

        $.when(ajaxToken).done(function () {
            console.log('request done');
        })
    }


    function drawMap(features) {
        for (let i = 0; features.length > i; i++) {
            let location = {
                lat: features[i].geometry.coordinates[1],
                lng: features[i].geometry.coordinates[0]
            };
            let marker = new google.maps.Marker({
                position: location,
                map: cacheData.map
            });
            cacheData.markers.push(marker);
        }
    }

    //當資料回傳時，下面語法就會自動觸發
    // xhr.onload = function () {
    //     //string，我要把它轉成物件陣列的 JSON 格式
    //     var data = JSON.parse(xhr.responseText).features

    //     //依序把Marker都倒進去markers的圖層 取出藥局名稱
    //     for (let i = 0; data.length > i; i++) {

    //         var mask;
    //         if (data[i].properties.mask_adult == 0) {
    //             mask = redIcon;
    //         } else {
    //             mask = greenIcon;
    //         }

    //         markers.addLayer(marker([deata[i].geomertry.coordinates[1], data[i].geometry.coordinates[0]], {
    //             icon: mask
    //         }).bindPopup('<h1>' + data[i].properties.name + '<h1>' + '<p>成人口罩數量' + data[i].properties.mask_adult));
    //     }
    //     map.addLayer(markers);
    // }