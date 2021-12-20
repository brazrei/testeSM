var tafsGrupoConsulta = "SBPA,SBCT,SBFI,SBFL,SBNF,SBPK,SBCO,SBSM,SBBG,SBNM,SBJV,SBBI,SBYS,SBAF,SBSC,SBAN,SBMN,SBCH,SBUG,SBPF,SBJA,SBGW,SBCC,SBCX,SBGP,SBLJ,SBPG"
var arrayTAFS = []
//var taf = clearMsgIWXXM('{"iwxxm:TAF":{"iwxxm:validPeriod":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-01T18:00:00Z","gml:id":"uuid.79ed6e79-9cee-450a-9877-ac5b4a3cf6f1","gml:endPosition":"2021-12-03T00:00:00Z"}},"xmlns:aixm":"http://www.aixm.aero/schema/5.1.1","iwxxm:issueTime":{"gml:TimeInstant":{"gml:timePosition":"2021-12-01T16:00:00Z","gml:id":"uuid.8d1bf546-6097-4000-8ff2-f939ab1c5567"}},"xsi:schemaLocation":"http://icao.int/iwxxm/3.0 http://schemas.wmo.int/iwxxm/3.0/iwxxm.xsd","reportStatus":"NORMAL","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","iwxxm:aerodrome":{"aixm:AirportHeliport":{"gml:id":"uuid.37bb8543-be4d-474c-b8b4-2585c1629915","aixm:timeSlice":{"aixm:AirportHeliportTimeSlice":{"aixm:interpretation":"SNAPSHOT","aixm:name":"SBGR","aixm:ARP":{"aixm:ElevatedPoint":{"srsName":"http://www.opengis.net/def/crs/EPSG/0/4326","srsDimension":2,"axisLabels":"Lat Long","gml:coordinates":"-23.435555556 -46.473055556","gml:id":"uuid.e35f04a6-f260-4667-928e-ef18d8f672b6"}},"aixm:locationIndicatorICAO":"SBGR","gml:id":"uuid.22b35819-2ae0-4047-a85f-abd7fddd84d8","gml:validTime":"","aixm:designator":"SBGR"}}}},"iwxxm:baseForecast":{"iwxxm:MeteorologicalAerodromeForecast":{"iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":3000}}},"gml:id":"uuid.0d9150bb-b891-418c-854f-2c8ec5e6b26e"}},"iwxxm:temperature":{"iwxxm:AerodromeAirTemperatureForecast":{"iwxxm:maximumAirTemperature":{"uom":"Cel","content":28},"iwxxm:maximumAirTemperatureTime":{"gml:TimeInstant":{"gml:timePosition":"2021-12-01T18:00:00Z","gml:id":"uuid.a4e93e46-b50a-4ab2-a41d-3120cc1635b0"}},"iwxxm:minimumAirTemperatureTime":{"gml:TimeInstant":{"gml:timePosition":"2021-12-02T06:00:00Z","gml:id":"uuid.a18058b2-e8d9-41e4-a341-da3cacf00214"}},"iwxxm:minimumAirTemperature":{"uom":"Cel","content":17}}},"gml:id":"uuid.e1469a0f-7061-47a2-860a-890dcc6c725f","iwxxm:phenomenonTime":{"xlink:href":"#uuid.79ed6e79-9cee-450a-9877-ac5b4a3cf6f1"},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":8000},"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":170},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":12}}}}},"xmlns:gml":"http://www.opengis.net/gml/3.2","iwxxm:changeForecast":[{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":1300}}},"gml:id":"uuid.7f8aeeb2-de42-4218-a825-a25eee62b2d0"}},"gml:id":"uuid.425ad455-c4cf-48cf-a740-ce294b93b47d","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-01T19:00:00Z","gml:id":"uuid.3cab78f1-f0cf-46e3-846c-d6948a136ea3","gml:endPosition":"2021-12-01T21:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":130},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":8}}}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","gml:id":"uuid.1476ed85-57a8-4796-a2b4-1a8061920cd7","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-02T00:00:00Z","gml:id":"uuid.518ab256-dfcd-4014-8553-4ff4a36f0ee6","gml:endPosition":"2021-12-02T02:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":110},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":5}}}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"PROBABILITY_30","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":800}}},"gml:id":"uuid.711b5464-ca99-41d6-a7d5-ee2f7407085d"}},"gml:id":"uuid.62a60418-39bb-42a4-9d25-46a55130ab75","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-02T06:00:00Z","gml:id":"uuid.273e14b1-780d-4285-ac0c-e966c2347034","gml:endPosition":"2021-12-02T11:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":5000},"iwxxm:weather":{"xlink:href":"http://codes.wmo.int/306/4678/BR"}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":2300}}},"gml:id":"uuid.c9ed382b-dc0f-4b3d-a9ec-441d740841d5"}},"iwxxm:prevailingVisibilityOperator":"ABOVE","gml:id":"uuid.bee5295f-c41b-4078-9e69-91a09006eb23","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-02T11:00:00Z","gml:id":"uuid.77410a14-23ca-4bb6-8aea-3bfcd0e97942","gml:endPosition":"2021-12-02T13:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":10000}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","gml:id":"uuid.25f924f6-48fa-422a-9c23-5cf521bc0227","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-02T14:00:00Z","gml:id":"uuid.36b45fac-bb1a-4d50-a81d-e41721c67abc","gml:endPosition":"2021-12-02T16:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":150},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":8}}}}}],"xmlns:xlink":"http://www.w3.org/1999/xlink","gml:id":"uuid.3c290cd3-0311-4d0e-b1ec-a1de8b10e5c2","permissibleUsage":"OPERATIONAL","xmlns:iwxxm":"http://icao.int/iwxxm/3.0"}}')
taf = JSON.parse(taf)


function getBeginTAF(taf) {
    return new Date(taf.TAF.validPeriod.TimePeriod.beginPosition)

}

function getEndTAF(taf) {
    return new Date(taf.TAF.validPeriod.TimePeriod.endPosition)
}

function getInterval(taf) {
    return { inicio: getBeginTAF(taf), fim: getEndTAF(taf) }
}

function getBeginChange(tafMAF) {
    return new Date(tafMAF.phenomenonTime.TimePeriod.beginPosition);
}

function getEndChange(tafMAF) {
    return new Date(tafMAF.phenomenonTime.TimePeriod.endPosition);
}

function getIntervalChangeForecast(tafMAF) {
    return { inicio: getBeginChange(tafMAF), fim: getEndChange(tafMAF), get }
}

function getICAOIndicator(taf) {
    return taf.TAF.aerodrome.AirportHeliport.timeSlice.AirportHeliportTimeSlice.locationIndicatorICAO
}

function getBaseForecast(taf) {
    return taf.TAF.baseForecast
}

function getMinTemp(taf) {
    return {
        valor: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.temperature.AerodromeAirTemperatureForecast.minimumAirTemperature.content,
        hora: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.temperature.AerodromeAirTemperatureForecast.minimumAirTemperatureTime.TimeInstant.timePosition
    }
}

function getMaxTemp(taf) {
    return {
        valor: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.temperature.AerodromeAirTemperatureForecast.maximumAirTemperature.content,
        hora: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.temperature.AerodromeAirTemperatureForecast.maximumAirTemperatureTime.TimeInstant.timePosition
    }
}

function getCAVOK(tafMAF) { //MeteorologicalAerodromeForecast == MAF
    return tafMAF.cloudAndVisibilityOK

}

function getMainCAVOK(taf) {
    return getCAVOK(taf.TAF.baseForecast.MeteorologicalAerodromeForecast)

}

function getVisPred(taf) {
    return taf.TAF.baseForecast.MeteorologicalAerodromeForecast.prevailingVisibility.content

}

function getVisPredMudanca(tafMAF) {
    let vis
    try {
        vis = tafMAF.prevailingVisibility.content
    } catch (e) {
        vis = false
    }
    return vis
}

function getVnt(taf) {
    return {
        dir: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.surfaceWind.AerodromeSurfaceWindForecast.meanWindDirection.content,
        vel: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.surfaceWind.AerodromeSurfaceWindForecast.meanWindSpeed.content,
        variavel: taf.TAF.baseForecast.MeteorologicalAerodromeForecast.surfaceWind.AerodromeSurfaceWindForecast.variableWindDirection
    }
}

function getChangeCount(taf) {
    if (taf.TAF.changeForecast)
        return taf.TAF.changeForecast.length
    else
        return 0
}

function getChangeForecastArray(taf) {
    return taf.TAF.changeForecast
}

function getVisPredHora(taf, hora) {
    let interval = getInterval(taf)
    if (hora < interval.inicio || hora > interval.fim)
        return false
    let gruposMud = getChangeCount(taf)
    let vis = getVisPred(taf)
    let periodo, auxVis

    if (gruposMud > 0) {
        let arrChange = getChangeForecastArray(taf)
        for (let i in arrChange) {
            periodo = getIntervalChangeForecast(arrChange[i].MeteorologicalAerodromeForecast)
            if (hora >= periodo.inicio) { //considerando a ordem cronológica, pega a informacao mais recente
                if ((["BECOMING", "FROM"].includes(arrChange[i].MeteorologicalAerodromeForecast.changeIndicator)) ||
                    (hora >= periodo.inicio && hora <= periodo.fim)) { // se for mudanca temporaria

                    if (["BECOMING"].includes(arrChange[i].MeteorologicalAerodromeForecast.changeIndicator) && (hora > periodo.fim))
                        vis = getVisPredMudanca(arrChange[i].MeteorologicalAerodromeForecast) ? getVisPredMudanca(arrChange[i].MeteorologicalAerodromeForecast) : vis
                    else {
                        auxVis = getVisPredMudanca(arrChange[i].MeteorologicalAerodromeForecast) ? getVisPredMudanca(arrChange[i].MeteorologicalAerodromeForecast) : vis
                        // se for becoming, pega o valor mais baixo de vis
                        vis = arrChange[i].MeteorologicalAerodromeForecast.changeIndicator == "BECOMING" ? (vis < auxVis ? vis : auxVis) : auxVis
                    }
                    // se j[a passou a hora]
                }

            }
        }
    }
    return vis
}

function getTetoHora(taf, hora) {
    let interval = getInterval(taf)
    if (hora < interval.inicio || hora > interval.fim)
        return false
    let gruposMud = getChangeCount(taf)
    let teto = getTetoBase(taf)
    let periodo, auxTeto

    if (gruposMud > 0) {
        let arrChange = getChangeForecastArray(taf)
        for (let i in arrChange) {
            periodo = getIntervalChangeForecast(arrChange[i].MeteorologicalAerodromeForecast)
            if (hora >= periodo.inicio) { //considerando a ordem cronológica, pega a informacao mais recente.
                if ((["BECOMING", "FROM"].includes(arrChange[i].MeteorologicalAerodromeForecast.changeIndicator)) ||
                    (hora >= periodo.inicio && hora <= periodo.fim)) { // se for mudanca temporaria

                    if (["BECOMING"].includes(arrChange[i].MeteorologicalAerodromeForecast.changeIndicator) && (hora > periodo.fim))
                        teto = getTeto(arrChange[i].MeteorologicalAerodromeForecast) ? getTeto(arrChange[i].MeteorologicalAerodromeForecast) : teto
                    else {
                        auxTeto = getTeto(arrChange[i].MeteorologicalAerodromeForecast) ? getTeto(arrChange[i].MeteorologicalAerodromeForecast) : teto
                        // se for becoming, pega o valor mais baixo de vis

                        teto = arrChange[i].MeteorologicalAerodromeForecast.changeIndicator == "BECOMING" ? ( (teto.altura <= auxTeto.altura && teto.qtd > 4) || (teto.altura>auxTeto.altura && auxTeto.qtd <5 ) ? teto : auxTeto) : auxTeto
/*
                        if (arrChange[i].MeteorologicalAerodromeForecast.changeIndicator == "BECOMING") {
                            if ((teto.altura <= auxTeto.altura && teto.qtd > 4) || (teto.altura > auxTeto.altura && auxTeto.qtd < 5))
                                teto =  auxTeto
                        } else
                            teto = auxTeto
*/
                    }
                    // se j[a passou a hora]
                }

            }
        }
    }
    return teto
}

function clearMsgIWXXM(txt) {
    let separator = "**,**"
    txt =  txt.replace(/iwxxm:/g, "").replace(/gml:/g, "").replace(/aixm:/g, "").replace(/xlink:/g, "").replace(/} {/g, "}"+separator+"{")
    //if (!txt.includes(separator))
    //    txt = [txt]

    return  txt.split(separator)
}


function getTetoBase(taf) {
    return getTeto(taf.TAF.baseForecast.MeteorologicalAerodromeForecast)
}

function getTeto(tafMAF) {
    function getTetoCamada(camada) {
        arrTeto = ['FEW', 'SCT', 'BKN', 'OVC']
        arrTetoN = [1, 3, 5, 8]
        let qtd = camada.CloudLayer.amount.href

        qtd = qtd.split('/')
        qtd = qtd[qtd.length - 1]

        return { qtd: arrTetoN[arrTeto.indexOf(qtd)], altura: camada.CloudLayer.base.content + 'FT' }
    }

    if (!tafMAF.cloud)  
    return false;
    
    if (!Array.isArray(tafMAF.cloud.AerodromeCloudForecast.layer))
        camada = tafMAF.cloud.AerodromeCloudForecast.layer
    else {
        arrNuvens = tafMAF.cloud.AerodromeCloudForecast.layer
        camada = arrNuvens[0]
        ultimaCamada = camada
        if (arrNuvens.length > 1 && getTetoCamada(camada).qtd < 5) {

            for (var i = 1; i < arrNuvens.length; i++) {
                if (getTetoCamada(arrNuvens[i]).qtd > getTetoCamada(ultimaCamada).qtd) {
                    ultimaCamada = arrNuvens[i]
                }
                if (getTetoCamada(arrNuvens[i]).qtd > 4)
                    break;
            }
        }
        camada = ultimaCamada
    }
    camada = getTetoCamada(camada)
    return { qtd: camada.qtd, altura: parseInt(camada.altura) }
}

function getTAFs(localidades) {
    //mostraLoading("Airmet");
    let url = ""
    let interval = opener.getInterval(6)
    url = opener.linkInternetIWXXM;

    url = `${url}${tafsGrupoConsulta}&msg=taf${interval}`;

    GetWebContentTAF(url, primeiraVez);
}}

function updateArrayStatus(localidade, status) { // retorna true se o status mudou
    /*   var i = globalArrayLocStatus.indexOf(localidade);
       if (i > -1) {
         globalArrayLocStatus
       } 
    */
}

function atualizaArrayTAFs(texto) {
   let TAFs = clearMsgIWXXM(texto)
   for (let i in TAFs) {
       TAFs[i] = JSON.parse(TAFs[i]);
       let loc = getICAOIndicator(TAFs[i])
       arrayTAFs[loc] = {localidade: loc, inicio: getBeginTime, getVisPredHora: getVisPredHora, getTetoHora: getTetoHora}
       
   }
}

function GetWebContentTAF(url, primeiraVez) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var erro = "ErroSM=";
        if (this.status > 0) {
            if ((this.readyState == 4 && this.status == 200) && (this.responseText !== "") && (!this.responseText.includes("Forbidden")) ) {


                //$("#imgLoad"+idxFIR).attr('src', 'pngs/green-button30.png');
                let resposta = opener.removeCacheMessage(this.responseText);

                atualizaArrayTAFs(resposta);

                let erroConexao = false
                if (erroConexao || !opener.smartPlotOnline) {
                    $("#h5Offline").show();
                    alert("Perda de conexão com o SMARTMETAR! Favor reabrir o SMARTPLOT através do link no site do SMARTMETAR!");
                } else
                    $("#h5Offline").hide();

//                escondeLoading("TAF");
//                atualizaHora();
                return resposta;
            } else if (this.readyState > 2 && this.status !== 200) {
                erro = erro + this.responseText;
                //$("#imgLoad"+idxFIR).attr('src', 'pngs/red-button30.png');


                return erro;
            }

        }
    };
    const params = {
        url: url,
    }
    const urlCache = "../ago2021/php/consulta_msg.php?url=" + params.url;
    xhttp.open('GET', urlCache + opener.getProxy(), true);
    xhttp.setRequestHeader('Content-type', 'application/json');

    xhttp.send();
}

//function getTetoMudanca

//t.TAF.baseForecast.MeteorologicalAerodromeForecast.cloud.AerodromeCloudForecast.layer.CloudLayer.qtd

