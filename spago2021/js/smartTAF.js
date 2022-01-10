var tafsGrupoConsulta = "SBPA,SBCT,SBFI,SBFL,SBNF,SBPK,SBCO,SBSM,SBBG,SBNM,SBJV,SBBI,SBYS,SBAF,SBSC,SBAN,SBMN,SBCH,SBUG,SBPF,SBJA,SBGW,SBCC,SBCX,SBGP,SBLJ,SBPG"
var arrayTAFs = []
//var taf = clearMsgIWXXM('https://opmet.decea.mil.br/redemet/consulta_iwxxm?local=SBGR&msg=taf&formato=json&data_ini=2021122913&data_fim=2021122918{"iwxxm:TAF":{"iwxxm:validPeriod":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-29T18:00:00Z","gml:id":"uuid.b9950c03-7ea2-4bff-8496-91808844c9db","gml:endPosition":"2021-12-31T00:00:00Z"}},"xmlns:aixm":"http://www.aixm.aero/schema/5.1.1","iwxxm:issueTime":{"gml:TimeInstant":{"gml:timePosition":"2021-12-29T16:00:00Z","gml:id":"uuid.7946092f-5728-4cd8-b7bb-97fe63391840"}},"xsi:schemaLocation":"http://icao.int/iwxxm/3.0 http://schemas.wmo.int/iwxxm/3.0/iwxxm.xsd","reportStatus":"NORMAL","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","iwxxm:aerodrome":{"aixm:AirportHeliport":{"gml:id":"uuid.8d3345d4-018c-4166-a980-5b0a96071038","aixm:timeSlice":{"aixm:AirportHeliportTimeSlice":{"aixm:interpretation":"SNAPSHOT","aixm:name":"SBGR","aixm:ARP":{"aixm:ElevatedPoint":{"srsName":"http://www.opengis.net/def/crs/EPSG/0/4326","srsDimension":2,"axisLabels":"Lat Long","gml:coordinates":"-23.435555556 -46.473055556","gml:id":"uuid.0120deeb-9312-4c0d-9bea-eea359ddc562"}},"aixm:locationIndicatorICAO":"SBGR","gml:id":"uuid.c1c82eba-4657-4350-9862-43724b415b2e","gml:validTime":"","aixm:designator":"SBGR"}}}},"iwxxm:baseForecast":{"iwxxm:MeteorologicalAerodromeForecast":{"iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":[{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":3000}}},{"iwxxm:CloudLayer":{"iwxxm:cloudType":{"xlink:href":"http://codes.wmo.int/49-2/SigConvectiveCloudType/TCU"},"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/FEW"},"iwxxm:base":{"uom":"[ft_i]","content":4000}}}],"gml:id":"uuid.ebd7d233-7e39-4fed-9d03-244a35b2ea40"}},"iwxxm:temperature":{"iwxxm:AerodromeAirTemperatureForecast":{"iwxxm:maximumAirTemperature":{"uom":"Cel","content":27},"iwxxm:maximumAirTemperatureTime":{"gml:TimeInstant":{"gml:timePosition":"2021-12-30T17:00:00Z","gml:id":"uuid.fe13866a-cb41-4a6f-b971-910f67043bfb"}},"iwxxm:minimumAirTemperatureTime":{"gml:TimeInstant":{"gml:timePosition":"2021-12-30T09:00:00Z","gml:id":"uuid.abd8fb49-40c6-4d10-a06c-169428e7d02b"}},"iwxxm:minimumAirTemperature":{"uom":"Cel","content":17}}},"gml:id":"uuid.cdf151b2-a6e1-4077-8c5d-8a26cbe6f481","iwxxm:phenomenonTime":{"xlink:href":"#uuid.b9950c03-7ea2-4bff-8496-91808844c9db"},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":8000},"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":70},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":5}}}}},"xmlns:gml":"http://www.opengis.net/gml/3.2","iwxxm:changeForecast":[{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"TEMPORARY_FLUCTUATIONS","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":[{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":2000}}},{"iwxxm:CloudLayer":{"iwxxm:cloudType":{"xlink:href":"http://codes.wmo.int/49-2/SigConvectiveCloudType/CB"},"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/FEW"},"iwxxm:base":{"uom":"[ft_i]","content":3000}}}],"gml:id":"uuid.6dc52ee8-1761-4226-8007-3b1f2c1f31cd"}},"gml:id":"uuid.091eaa41-4a63-48c7-835f-73ea3406d3e8","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-29T18:00:00Z","gml:id":"uuid.b1508087-c178-4f5c-a5b7-7dc5bb882c12","gml:endPosition":"2021-12-29T22:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":5000},"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":240},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":12}}},"iwxxm:weather":{"xlink:href":"http://codes.wmo.int/306/4678/TSRA"}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":1200}}},"gml:id":"uuid.e13dece7-351f-43bb-912a-e8eb679795d7"}},"gml:id":"uuid.c4375701-5f75-456f-9428-142f6d9e6f0a","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-29T22:00:00Z","gml:id":"uuid.6f8f592a-2390-4bf4-a853-5b31b4d554b6","gml:endPosition":"2021-12-30T00:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":140},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":7}}}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/FEW"},"iwxxm:base":{"uom":"[ft_i]","content":3500}}},"gml:id":"uuid.a1107829-467b-4396-9aa9-5c036cf61e6e"}},"gml:id":"uuid.faaa5e05-59b4-4532-9f83-e86b1e6c39b9","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-30T01:00:00Z","gml:id":"uuid.828afa1a-fe89-4656-a4fd-83b9b7584049","gml:endPosition":"2021-12-30T03:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":110},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":5}}}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"TEMPORARY_FLUCTUATIONS","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":[{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/SCT"},"iwxxm:base":{"uom":"[ft_i]","content":400}}},{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":1000}}}],"gml:id":"uuid.ecad0405-d57b-4178-8fbc-efa9c069d262"}},"gml:id":"uuid.f719c794-bc16-4e1a-a2ae-564ddcc250e4","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-30T07:00:00Z","gml:id":"uuid.c9f16116-e27c-442c-9870-e3937dfd2b0c","gml:endPosition":"2021-12-30T11:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":4000},"iwxxm:weather":{"xlink:href":"http://codes.wmo.int/306/4678/BR"}}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"BECOMING","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":[{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/SCT"},"iwxxm:base":{"uom":"[ft_i]","content":3000}}},{"iwxxm:CloudLayer":{"iwxxm:cloudType":{"xlink:href":"http://codes.wmo.int/49-2/SigConvectiveCloudType/TCU"},"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/FEW"},"iwxxm:base":{"uom":"[ft_i]","content":4000}}}],"gml:id":"uuid.0a2a8f8b-87c2-4f2c-9c04-5bb6849ad14b"}},"gml:id":"uuid.f8411272-046a-4581-9130-f57e6d659538","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-30T12:00:00Z","gml:id":"uuid.5356e4f8-f8a0-46ea-b9cf-12cd739a93d4","gml:endPosition":"2021-12-30T14:00:00Z"}},"cloudAndVisibilityOK":false}},{"iwxxm:MeteorologicalAerodromeForecast":{"changeIndicator":"TEMPORARY_FLUCTUATIONS","iwxxm:cloud":{"iwxxm:AerodromeCloudForecast":{"iwxxm:layer":[{"iwxxm:CloudLayer":{"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/BKN"},"iwxxm:base":{"uom":"[ft_i]","content":2000}}},{"iwxxm:CloudLayer":{"iwxxm:cloudType":{"xlink:href":"http://codes.wmo.int/49-2/SigConvectiveCloudType/CB"},"iwxxm:amount":{"xlink:href":"http://codes.wmo.int/49-2/CloudAmountReportedAtAerodrome/FEW"},"iwxxm:base":{"uom":"[ft_i]","content":3000}}}],"gml:id":"uuid.6299cfca-afb2-47b8-a1d5-668063b06063"}},"gml:id":"uuid.2a944531-8842-4df2-9436-33fa9a091b35","iwxxm:phenomenonTime":{"gml:TimePeriod":{"gml:beginPosition":"2021-12-30T16:00:00Z","gml:id":"uuid.d5ce801a-0f8b-437e-93fb-6accea23487e","gml:endPosition":"2021-12-30T18:00:00Z"}},"cloudAndVisibilityOK":false,"iwxxm:prevailingVisibility":{"uom":"m","content":5000},"iwxxm:surfaceWind":{"iwxxm:AerodromeSurfaceWindForecast":{"variableWindDirection":false,"iwxxm:meanWindDirection":{"uom":"deg","content":250},"iwxxm:meanWindSpeed":{"uom":"[kn_i]","content":10}}},"iwxxm:weather":{"xlink:href":"http://codes.wmo.int/306/4678/TSRA"}}}],"xmlns:xlink":"http://www.w3.org/1999/xlink","gml:id":"uuid.fa65c58f-ed9b-4b3f-bd53-26ff0c224ed8","permissibleUsage":"OPERATIONAL","xmlns:iwxxm":"http://icao.int/iwxxm/3.0"}}')
//taf = JSON.parse(taf)

function getTAFFromMetar(metar){
    let loc = opener.getLocalidade(metar)
    let dh = getMetarFullDateTime(metar)
    if (arrayTAFs[loc])
        return {localidade: loc, TAF: arrayTAFs[loc].TAF, visibilidade: getVisPredHora(arrayTAFs[loc].TAF, dh), teto: getTetoHora(arrayTAFs[loc].TAF, dh) }
    else
     return {localidade: loc, TAF: false, visibilidade: false, teto: false};
}

function updateArrayMetarTAF() {
    if (typeof opener.arraygetTeste !== "function")
        return false
}

function getMetarDataHora(metar){
  var patt = /\d{6}Z/;
  var t1 = metar.match(patt);
  if (t1 && t1.length > 0)
     return t1[0]
  else
    return str
  
}

function metarDH2FullDateTime(dh){
  let hora = dh.substr(2,2)
  let agora = new Date();
  
  return new Date(agora.getUTCFullYear(),agora.getUTCMonth(),agora.getUTCDate(), hora)
}

function getMetarFullDateTime(metar){
  let dhMetar = getMetarDataHora(metar)
  
  return metarDH2FullDateTime(dhMetar)
}

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
    return { inicio: getBeginChange(tafMAF), fim: getEndChange(tafMAF) }
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
    if (taf.TAF.baseForecast.MeteorologicalAerodromeForecast.cloudAndVisibilityOK)
      return 9999
    else
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
    if (taf.TAF.changeForecast) { 
      if (Array.isArray(taf.TAF.changeForecast))
        return taf.TAF.changeForecast.length
      else
        return 1
    }
    else
        return 0
}

function getChangeForecastArray(taf) {
    if (Array.isArray(taf.TAF.changeForecast))
      return taf.TAF.changeForecast
    else
        return [taf.TAF.changeForecast]

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
    txt =  txt.replace(/iwxxm:/g, "").replace(/gml:/g, "").replace(/aixm:/g, "").replace(/xlink:/g, "").replace(/{"TAF/g, separator+'{"TAF')
    //if (!txt.includes(separator))
    //    txt = [txt]

    return  txt.split(separator).splice(1)
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

    if (!tafMAF || !tafMAF.cloud)  
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

function getTAFs(localidades=false) {
    //mostraLoading("TAFs");
    let url = ""
    let interval = opener.getInterval(6)
    url = opener.linkInternetIWXXM;

    localidades = localidades==false?localidades:","+localidades
    url = `${url}${tafsGrupoConsulta}${localidades}&msg=taf${interval}`;

    GetWebContentTAF(url, false);
}

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
       arrayTAFs[loc] = {TAF: TAFs[i], localidade: loc, inicio: getBeginTAF(TAFs[i]), getVisPredHora: getVisPredHora, getTetoHora: getTetoHora}
       
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

