function send(name, message){
    alert(name + " your message: " + message);
    location.replace("http://127.0.0.1:5500/Project/aboutUS.html");
}

function initMap(city) {
    var soz = 'Almaty';
    var city = document.getElementById("city").value;
    //document.write(city);
    if(city === 'Almaty'){
    var options =  {
        center: {lat: 43.2220, lng:76.8512},
        zoom: 11
    }    
    
    var map = new google.maps.Map(document.getElementById("map"), options);

    var icon = {
        url: "https://www.pngrepo.com/download/37690/person-standing-beside-a-delivery-box.png",
        scaledSize: new google.maps.Size(30,30),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    };
    //var tis = 
    var marker1 = new google.maps.Marker({
        position: {lat: 43.20338643061644, lng: 76.89183000353455},
        map: map,
        icon: icon
    });
    var text1 = "<h3 >ТРЦ MEGA Alma-Ata</h3>" + "On 3 floor<br>" + "<i>Rozybakiev Street 247А, Almaty 050060</i>";
    var infoWindow1 = new google.maps.InfoWindow({
        content: text1,
    });
    marker1.addListener("mouseover", function(){
            infoWindow1.open(map, marker1);
        });
        var text2 = "<h3 >MOSKVA metropolitan</h3>" + "On 2 floor<br>" + "<i>Abay Ave, Almaty 050000</i>";
        var infoWindow2 = new google.maps.InfoWindow({
            content: text2,
        });    

    var marker2 = new google.maps.Marker({
        position: {lat: 43.230551821790115, lng: 76.86807235081463},
        map: map,
        icon: icon
    });
    marker2.addListener("mouseover", function(){
        infoWindow2.open(map, marker2);
    });
    var text3 = "<h3 >ILASIO RENZONI</h3><br>" + "<i>Abylai Khan Ave 74A, Almaty 050000</i>";
        var infoWindow3 = new google.maps.InfoWindow({
            content: text3,
        });
    
    var marker3 = new google.maps.Marker({
        position: {lat: 43.259343019958216, lng: 76.94135131314331},
        map: map,
        icon: icon
    });
    marker3.addListener("mouseover", function(){
        infoWindow3.open(map, marker3);
    });

};
    if(city === "Nur-Sultan"){
        var options =  {
            center: {lat: 51.1605, lng: 71.4704},
            zoom: 11
        }    
        
        var map = new google.maps.Map(document.getElementById("map"), options);
    
        var icon = {
            url: "https://www.pngrepo.com/download/37690/person-standing-beside-a-delivery-box.png",
            scaledSize: new google.maps.Size(30,30),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,0)
        };
        var marker1 = new google.maps.Marker({
            position: {lat: 51.149171591643956, lng:71.47297406706537},
            map: map,
            icon: icon
        });
        var text1 = "<h3 >Eurasia shopping mall</h3>" + "On 3 floor<br>" + "<i>Petrov St 24, Nur-Sultan 010000</i>";
        var infoWindow1 = new google.maps.InfoWindow({
            content: text1,
        });
        marker1.addListener("mouseover", function(){
                infoWindow1.open(map, marker1);
            });
            var text2 = "<h3 >Tts Dzhafar</h3>" + "On 1 floor<br>" + "<i>Bogenbay Batyr Ave 73/1, Nur-Sultan</i>";
            var infoWindow2 = new google.maps.InfoWindow({
                content: text2,
            });    
    
        var marker2 = new google.maps.Marker({
            position: {lat: 51.18080392056447, lng:71.43675125727411},
            map: map,
            icon: icon
        });
        marker2.addListener("mouseover", function(){
            infoWindow2.open(map, marker2);
        });
        var text3 = "<h3 >Rynok Sapa</h3><br>" + "<i>Shar Zhienqulov St, Nur-Sultan 010000</i>";
            var infoWindow3 = new google.maps.InfoWindow({
                content: text3,
            });
        
        var marker3 = new google.maps.Marker({
            position: {lat: 51.17884691761905, lng: 71.45196797126749},
            map: map,
            icon: icon
        });
        marker3.addListener("mouseover", function(){
            infoWindow3.open(map, marker3);
        });
    };
    if(city === "Kentau"){
        var options =  {
            center: {lat:43.5162, lng: 68.5090},
            zoom: 11
        }    
        
        var map = new google.maps.Map(document.getElementById("map"), options);
    
        var icon = {
            url: "https://www.pngrepo.com/download/37690/person-standing-beside-a-delivery-box.png",
            scaledSize: new google.maps.Size(30,30),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,0)
        };
        var marker1 = new google.maps.Marker({
            position: {lat: 43.51287632699536, lng: 68.50318332073813},
            map: map,
            icon: icon
        });
        var text1 = "<h3>Rakhmet Shopping Mall</h3>" + "On 2 floor<br>" + "<i>Ave Yassavi, Kentau</i>";
        var infoWindow1 = new google.maps.InfoWindow({
            content: text1,
        });
        marker1.addListener("mouseover", function(){
                infoWindow1.open(map, marker1);
            });
            var text2 = "<h3 >Nur-Tau</h3>" + "<i>Street Momyshuly, Kentau</i>";
            var infoWindow2 = new google.maps.InfoWindow({
                content: text2,
            });    
    
        var marker2 = new google.maps.Marker({
            position: {lat: 43.50889487065814, lng: 68.49598162211173},
            map: map,
            icon: icon
        });
        marker2.addListener("mouseover", function(){
            infoWindow2.open(map, marker2);
        });
        var text3 = "<h3 >Rynok Sapa</h3><br>" + "<i>Shar Zhienqulov St, Nur-Sultan 010000</i>";
            var infoWindow3 = new google.maps.InfoWindow({
                content: text3,
            });
        
        var marker3 = new google.maps.Marker({
            position: {lat: 51.17884691761905, lng: 71.45196797126749},
            map: map,
            icon: icon
        });
        marker3.addListener("mouseover", function(){
            infoWindow3.open(map, marker3);
        });
    };
};

    

