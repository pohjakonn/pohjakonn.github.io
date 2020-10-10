(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        var c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds()+1;
            if (h >12) {
                h = h-12;
            }

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }
            if (s == 60){
                s = "00" ;
            }

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    var e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        var linn = document.getElementById("linn");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            //linn.focus();
            
            //return;
            
            
        } 
        if(linn.value == "tln"){
            e.innerHTML = "0 &euro;"
        }
        if(linn.value=="trt"){
            e.innerHTML = "2.5 &euro;"
        }
         if(linn.value=="nrv"){
            e.innerHTML = "2.5 &euro;"
        }
         if(linn.value=="prn"){
            e.innerHTML = "3 &euro;"
        }
        var eesnimi = document.getElementById("fname");
        var perenimi = document.getElementById("lname");
        if((eesnimi.value == "")||(perenimi.value=="")||(parseInt(eesnimi.value))||(parseInt(perenimi.value))){
           alert("Nimede väljad peavad olema täidetud ja ei tohi sisaldada numbreid");
            return;
           }
        var raadio1 = document.getElementById("1");
        var raadio2 = document.getElementById("2");
        if((!raadio1.checked) && (!raadio2.checked)){
            alert("Kullerduse aeg peab olema valitud");
            return;
           }
        //||(parseint(eesnimi))||(parseInt(perenimi))
        //else {
        //      e.innerHTML = "x,xx &euro;";
            
        //}        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

var mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

var map;

function GetMap() {
    
    "use strict";

    var centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );
    var secondPoint = new Microsoft.Maps.Location(
            58.486570, 
            26.382730
        );
    var thirdPoint = new Microsoft.Maps.Location(
            58.436570, 
            26.552730
        )

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: thirdPoint,
        zoom: 10,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    var pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool',

        });
    
    pushpin.metadata = {
            title: 'Tartu Ülikool'
        }
    
        
     var pushpin2 = new Microsoft.Maps.Pushpin(secondPoint, {
            title: 'Laeva',

        });
    
    pushpin2.metadata = {
            title: 'Laeva'
        }
        

    var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible:false
        }); 
    map.entities.push(pushpin2);
    map.entities.push(pushpin);
    
    Microsoft.Maps.Events.addHandler(pushpin, 'click', function (e) {
    infobox.setOptions({description: e.target.metadata.title,
                        visible:true
    });  
    });
     Microsoft.Maps.Events.addHandler(pushpin2, 'click', function (e) {
    infobox.setOptions({description: e.target.metadata.title,
                        visible:true
    });  
    });
     infobox.setMap(map);

}
 function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        //if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            /*infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.title,
                //description: e.target.metadata.description,
                visible: true
            }); */
        //}
    
    }

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

