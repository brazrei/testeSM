// Plotando STSC
var heat = false;
var stscAneis = [];
var intervalSTSC = false;
var raioAvisoSTSC = 35 //milhas
var centroAvisoSTSCTMASP = [ ["-23.50","-046.63"], // SBMT
                        ["-23.62","-046.65"], //SBSP
                        ["-23.43","-046.47"],//SBGR
                        ["-23.00", "-047.13"] //SBKP
                    ] 

//var centroAvisoSTSC = ["-10.87","-061.84"] // SBji


var arrayteste = []

//var stscCenterMap=[];

function inAreaAvisoSTSC(lat, long) {


    let distancia 
    centroAvisoSTSCTMASP.forEach(centroAvisoSTSC => {
        let oldDist = distancia
        distancia = getDistancia([long, lat], [centroAvisoSTSC[1], centroAvisoSTSC[0]])
        if (oldDist <= distancia)
            distancia = oldDist
    })
    
    //arrayteste.push(distancia)

    return distancia < raioAvisoSTSC
}

function updateAlertaSTSC(on) {
    if (on) {
        $("#labelAvisoSTSC").show()
    } else
        $("#labelAvisoSTSC").hide()

}

function plota_stsc(obj_chk) {
    if (!obj_chk || obj_chk.checked) {
        mostraLoading("stsc");
        $.ajax({
            url: 'https://api-redemet.decea.gov.br/api/produtos/stsc?api_key=U9Q2PoK6e5uhykrMXrsrGAQssG8htAnPIqXsxmei',
            contentType: 'application/json',
            crossDomain: true,
            cache: false,
            method: 'GET',
            dataType: 'json',
            success: function (data) {

                removeSTSC();
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
                $('#clockSTSC').text(data_prod);
                data_prod = hoje_mes + " " + hoje_dia + ' ' + hoje_ano + ' ' + data.data.anima[0]
                data_prod = new Date(data_prod)


                let dif = new Date(hoje - data_prod)
                let diffDia = dif.getDate() - 1
                let diffHora = dif.getHours()
                let diffMin = dif.getMinutes()

                if (isLinux())
                    diffHora -= 1; //decementa 1 hora, bug do linux

                let erro = ((diffDia + diffHora + diffMin) > 20) //20 minutos

                formataErro('#clockSTSC', erro)
                formataErro('#labelSTSC', erro)

                var pontos = data.data.stsc[0];
                stscAneis = []
                alertaSTSC = false
                for (var key in pontos) {
                    stscAneis.push([pontos[key].la, pontos[key].lo, 1]);
                    alertaSTSC = alertaSTSC || inAreaAvisoSTSC(pontos[key].la, pontos[key].lo)
                    // i++;
                }

                updateAlertaSTSC(alertaSTSC)
                heat = L.heatLayer(stscAneis, {
                    radius: 5,
                    blur: 1,
                    maxZoom: 8,
                    /*gradient: {  // HeatMap todo em vermelho
                        0.2: '#ffffb2',
                        0.4: '#fd8d3c',
                        0.6: '#fd8d3c',
                        0.8: '#f03b20',
                        1: '#bd0026'
                      }*/
                });
                heat.addTo(map);
                escondeLoading("stsc");

            },
            error: function (e) {
                console.log(e);
                formataErro('#clockSTSC', true)
                formataErro('#labelSTSC', true)
            }
        });
    } else {
        removeSTSC();
    }
}


function removeSTSC() {
    //    if (intervalSTSC)
    //      clearInterval(intervalSTSC)

    if (heat)
        map.removeLayer(heat);
    /*    for (var i in stscAneis) {
        if (stscAneis.hasOwnProperty(i)) {
            map.removeLayer(heat);
        }
    }*/

    stscAneis = [];

    //stscCenterMap = [];
}
