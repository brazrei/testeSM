
function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else {
        try {
            return new (ActiveXObject)("MSXML2.XMLHTTP.3.0");
        } catch (e) {
            return null;
        }
    }
}

function carrega_img_sat(id, srcImage, TopLat, TopLon, ButtonLat, ButtonLon) {
    //srcImage = "sat/realcada_202011201330.png"
    //srcImage = "sat/S11635390_202011201520.jpg"
    /*TopLat = 12.90
    TopLon = -25.24
    ButtonLat = -50.00
    ButtonLon = -100
*/
    $("#img_sat_progresso").attr("aria-valuenow", 0);
    $("#img_sat_progresso").css("width", "0%");
    var temp = $("#img_sat_carregar_info").html();

    xhr = getXMLHttpRequest();
    xhr.onprogress = function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = Math.floor((evt.loaded / evt.total) * 100);
            $("#img_sat_progresso").attr("aria-valuenow", percentComplete);
            $("#img_sat_progresso").css("width", percentComplete + "%");
        }
    }
    xhr.onreadystatechange = function () {
        if ((xhr.readyState == 4) && (xhr.status == 200)) {
            setTimeout(function () {
                $("#img_sat_progresso").attr("aria-valuenow", "0");
                $("#img_sat_progresso").css("width", "0%");
                $("#img_sat_carregar_info").html("");
                // Setting the Overlay Image
                
                map.createPane('imagebg');
                map.getPane('imagebg').style.zIndex = 50;

                extent = [ButtonLon, ButtonLat, TopLon, TopLat];
                var img_sat = L.imageOverlay(srcImage, [
                    [TopLat, TopLon],
                    [ButtonLat, ButtonLon]
                ]);
                img_sat.setOptions({pane:"imagebg"})
                map.addLayer(img_sat);

                img_sat.setOpacity(0.4);
                img_sat.bringToBack();
            }, 500);
        }
    };
    xhr.open("GET", srcImage, true);
    xhr.overrideMimeType('text/plain; charset=x-user-defined');
    setTimeout("xhr.send(null);",5000);
}

// Plotando ImgSat
var intervalImgSat = false;
//var ImgSatCenterMap=[];

function plota_ImgSat(obj_chk) {
    obj_chk = false
    if (!obj_chk || obj_chk.checked) {
        mostraLoading("ImgSat");
        $.ajax({
            url: 'https://api-redemet.decea.gov.br/api/produtos/satelite/realcada?api_key=U9Q2PoK6e5uhykrMXrsrGAQssG8htAnPIqXsxmei',
            contentType: 'application/json',
            crossDomain: true,
            cache: false,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                
                removeImgSat();
                var i = 0;
                var hoje = new Date();
                var hoje_dia = hoje.getUTCDate();
                var hoje_mes = parseInt(hoje.getUTCMonth()) + 1;
                var hoje_ano = hoje.getUTCFullYear();
                if (hoje_dia < 10) {
                    hoje_dia = '0' + hoje_dia;
                }
                if (hoje_mes < 10) {
                    hoje_mes = '0' + hoje_mes;
                }

                let data_prod = hoje_dia + '/' + hoje_mes + '/' + hoje_ano + ' ' + data.data.anima[0]
                $('#clockImgSat').text(data_prod);
                data_prod = hoje_mes + " " + hoje_dia + ' ' + hoje_ano + ' ' + data.data.anima[0]
                data_prod = new Date(data_prod)


                let dif = new Date(hoje - data_prod)
                let diffDia = dif.getDate() - 1
                let diffHora = dif.getHours()
                let diffMin = dif.getMinutes()

                if (isLinux())
                    diffHora -= 1; //decementa 1 hora, bug do linux

                let erro = ((diffDia + diffHora + diffMin) > 20) //20 minutos

                formataErro('#clockImgSat', erro)
                formataErro('#labelImgSat', erro)

                let id = data.data.lat_lon.id
                let srcImage = data.data.satelite[0].path
                let TopLat = data.data.lat_lon.lat_max
                let TopLon = data.data.lat_lon.lon_max
                let ButtonLat = data.data.lat_lon.lat_min
                let ButtonLon = data.data.lat_lon.lon_min

                let filename = srcImage.split("realcada/maps/")[1]

                saveImageToFile(srcImage, filename)

                carrega_img_sat(id,"imgsat/"+filename, TopLat, TopLon, ButtonLat, ButtonLon, 5000);

                escondeLoading("ImgSat");

            },
            error: function (e) {
                console.log(e);
                formataErro('#clockImgSat', true)
                formataErro('#labelImgSat', true)
            }
        });
    } else {
        removeImgSat();
    }
}

function saveImageToFile(url, filename) {
    //jsonString = JSON.stringify(data);
    $.ajax({
      url: 'php/saveImgSat.php',
      data: { 'url': url, 'filename': filename },
      type: 'POST'
    });
  }
  

function removeImgSat() {
    //    if (intervalImgSat)
    //      clearInterval(intervalImgSat)

    //if (heat)
    //    map.removeLayer(heat);
    /*    for (var i in ImgSatAneis) {
        if (ImgSatAneis.hasOwnProperty(i)) {
            map.removeLayer(heat);
        }
    }*/

    //ImgSatAneis = [];

    //ImgSatCenterMap = [];
}
