// Plotando STSC
var heat = false;
var idxSTSC = -1
var horaSTSCAnterior = ""
//var stscAneis = [];
var intervalSTSC = false;
var intervalAnimaSTSC = false
var raioAvisoSTSC = 35 //milhas
var centroAvisoSTSCTMASP = [["-23.50", "-046.63"], // SBMT
["-23.62", "-046.65"], //SBSP
["-23.43", "-046.47"],//SBGR
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
function animaSTSC() {
    if (!heat || heat.length == 0)
        return;
    let intervalo = 200;
    let tam = heat.length

    if (idxSTSC > -1) {
        let anterior = idxSTSC - 1
        if (anterior < 0)
            anterior = tam - 1
        heat[anterior].layer.removeFrom(map);
    } else
        idxSTSC = 0


    heat[idxSTSC].layer.addTo(map);
    setSTSCLabel(heat[idxSTSC].hora)

    if (idxSTSC == tam - 1) {//ultimo
        idxSTSC = 0
        intervalo = 1000
    } else {
        idxSTSC++;
    }
    if (intervalAnimaSTSC)
        clearTimeout(intervalAnimaSTSC)
    intervalAnimaSTSC = setTimeout('animaSTSC()', intervalo);
}

function updateAlertaSTSC(on) {
    if (on) {
        $("#labelAvisoSTSC").show()
    } else
        $("#labelAvisoSTSC").hide()

}

function setSTSCLabel(label) {
    $('#clockSTSC').text(label + ":00 UTC");
}

function plota_stsc(obj_chk) {
    if (!obj_chk || obj_chk.checked) {
        mostraLoading("stsc");
        $.ajax({
            url: 'https://api-redemet.decea.gov.br/api/produtos/stsc?api_key=U9Q2PoK6e5uhykrMXrsrGAQssG8htAnPIqXsxmei',
            //url: 'https://api-redemet.decea.gov.br/api/produtos/stsc?api_key=U9Q2PoK6e5uhykrMXrsrGAQssG8htAnPIqXsxmei&anima=1',
            contentType: 'application/json',
            crossDomain: true,
            cache: false,
            method: 'GET',
            dataType: 'json',
            success: function (data) {

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

                let horaAnima = data.data.anima[data.data.anima.length - 1]

                if (horaSTSCAnterior !== "" && horaAnima == horaSTSCAnterior) //se não á a primeira vez e não mudou
                    return;
                horaSTSCAnterior = horaAnima

                let data_prod = hoje_dia + '/' + hoje_mes + '/' + hoje_ano + ' ' + horaAnima
                setSTSCLabel(data_prod);
                data_prod = hoje_mes + " " + hoje_dia + ' ' + hoje_ano + ' ' + horaAnima
                data_prod = new Date(data_prod)


                let dif = new Date(hoje - data_prod)
                let diffDia = dif.getDate() - 1
                let diffHora = dif.getHours()
                let diffMin = dif.getMinutes()

                if (isLinux()){ 
                    diffHora -= 21; //decrementa 1 hora, bug do linux
                }

                diffMin += (diffHora*60)
                let erro = (diffMin > 20) //20 minutos

                formataErro('#clockSTSC', erro)
                formataErro('#labelSTSC', erro)
                let xheat = []
                for (let i in data.data.stsc) {
                    var pontos = data.data.stsc[i];
                    let stscAneis = []
                    alertaSTSC = false
                    for (var key in pontos) {
                        stscAneis.push([pontos[key].la, pontos[key].lo, 1]);
                        if (i == data.data.stsc.length - 1)//só busca na mais recente
                            alertaSTSC = alertaSTSC || inAreaAvisoSTSC(pontos[key].la, pontos[key].lo)
                        // i++;
                    }

                    updateAlertaSTSC(alertaSTSC)
                    xheat.push(L.heatLayer(stscAneis, {
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
                    }));
                }
                if (!heat) // dessabilita a animacao
                    heat = []
                else {
                    try {
                        if (heat.length>0){ 
                            for (let i in heat){
                              heat[i].layer.removeFrom(map);
                            }
                            heat = []
                        }
                    } catch(e){

                    }

                }
                
                heat.push({ layer: xheat[xheat.length - 1], hora: horaAnima })
                if (heat.length > 10)
                    heat = heat.slice(1)
                idxSTSC = -1
                animaSTSC();

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


function removeSTSC(onlyLast) {
    //    if (intervalSTSC)
    //      clearInterval(intervalSTSC)
    if (intervalAnimaSTSC)
        clearTimeout(intervalAnimaSTSC);

    if (intervalSTSC)
        clearTimeout(intervalSTSC);
    if (heat) {
        for (i in heat)
            map.removeLayer(heat[i].layer);
        heat = []
    }
    /*    for (var i in stscAneis) {
        if (stscAneis.hasOwnProperty(i)) {
            map.removeLayer(heat);
        }
    }*/

    //stscAneis = [];

    //stscCenterMap = [];
}

function canvasFadeIn(canvas) {

    function loop() {

        alpha += delta;
        if (alpha <= 0 || alpha >= 1) delta = -delta;

        /// clear canvas, set alpha and re-draw image
        ctx.clearRect(0, 0, demo.width, demo.height);
        ctx.globalAlpha = alpha;
        ctx.drawImage(img, 0, 0);

        requestAnimationFrame(loop); // or use setTimeout(loop, 16) in older browsers
    }

    var alpha = 0,   /// current alpha value
        delta = 0.1; /// delta = speed

}
