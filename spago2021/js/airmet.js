/*texto = "SBAZ AMAZONICA FIR SFC VIS 0900M FU FCST WI N0111 W06653 - S1110 W05328 - S1408 W06033 - S1141 W06528 - S0945 W06528 - S0423 W07037 - N0111 W06653 STNR NC="
texto = "SBCW AIRMET 1 VALID 110305/110705 SBCW - SBCW CURITIBA FIR BKN CLD 0500/1000FT FCST WI S2328 W04642 - S2328 W04633 - S2339 W04637 - S2338 W04644 - S2328 W04642 STNR NC="
texto = "2020092216 - SBAZ AIRMET 6 VALID 221420/221820 SBAZ - SBAZ AMAZONICA FIR SFC VIS 1000M FU FCST WI S1150 W05617 - S1200 W05506 - S1302 W05512 - S1317 W05639 - S1150 W05617 STNR NC= "
texto2 = "2020092313 - SBAZ AIRMET 5 VALID 231245/231545 SBAZ - SBAZ AMAZONICA FIR BKN CLD 500/0900FT OBS AT 1230Z WI S0823 W06415 - S0825 W06329 - S0903 W06333 - S0858 W06420 - S0823 W06415 STNR NC= 2020092313 - SBAZ AIRMET 4 VALID 231245/231545 SBAZ - SBAZ AMAZONICA FIR BKN CLD 500/0900FT OBS AT 1230Z WI N0016 W06718 - N0005 W06637 - S0032 W06641 - S0025 W06721 - N0016 W06718 STNR NC= 2020092313 - SBCW AIRMET 2 VALID 231236/231430 SBCW - SBCW CURITIBA FIR SFC VIS 1000M BR OBS AT 1200Z WI S2134 W04347 - S2107 W04410 - S2102 W04333 - S2132 W04326 - S2134 W04347 STNR NC= 2020092313 - SBCW AIRMET 1 VALID 231030/231430 SBCW - SBCW CURITIBA FIR SFC VIS 3000M BR FCST WI S2259 W04512 - S2048 W04409 - S2129 W04028 - S2341 W04325 - S2259 W04512 STNR NC= 2020092313 - SBRE AIRMET 2 VALID 231230/231630 SBRE - SBRE RECIFE FIR SFC VIS 3000M RA FCST WI S1448 W03907 - S1443 W03907 - S1442 W03858 - S1450 W03858 - S1451 W03906 - S1448 W03907 STNR NC= 2020092313 - SBRE AIRMET 1 VALID 230905/231305 SBRE - SBRE RECIFE FIR OVC CLD 200/0800FT FCST WI S1157 W03902 - S1210 W03819 - S1304 W03805 - S1317 W03904 - S1225 W03933 - S1157 W03902 STNR NC= 2020092313 - SBBS AIRMET 7 VALID 231146/231530 SBBS - SBBS BRASILIA FIR CNL AIRMET 4 231130/231530= 2020092313 - SBBS AIRMET 6 VALID 231140/231540 SBBS - SBBS BRASILIA FIR BKN CLD 800/1000FT FCST WI S1653 W04952 - S1533 W04907 - S1516 W04711 - S1630 W04711 - S1743 W04902 - S1653 W04952 STNR NC= 2020092313 - SBBS AIRMET 5 VALID 231140/231540 SBBS - SBBS BRASILIA FIR SFC VIS 3000M BR FCST WI S1653 W04952 - S1533 W04907 - S1516 W04711 - S1630 W04711 - S1743 W04902 - S1653 W04952 STNR NC= 2020092313 - SBBS AIRMET 4 VALID 231130/231530 SBBS - SBBS BRASILIA FIR BKN CLD 700/1000FT FCST WI S1237 W04157 - S1134 W04145 - S1147 W04039 - S1255 W04046 - S1237 W04157 STNR NC="
//texto2 = "2020092413 - SBAZ AIRMET 2 VALID 241120/241320 SBAZ - SBAZ AMAZONICA FIR OVC CLD 100/0800FT OBS AT 1100Z WI S0036 W05703 - S0023 W05528 - S0136 W05507 - S0150 W05645 - S0036 W05703 STNR NC= 2020092413 - SBAZ AIRMET 1 VALID 241116/241315 SBAZ - SBAZ AMAZONICA FIR SFC VIS 0500M FG OBS AT 1100Z WI S0036 W05703 - S0023 W05528 - S0136 W05507 - S0150 W05645 - S0036 W05703 STNR NC= 2020092413 - Mensagem AIRMET de 'SBCW' para 24/09/2020 as 13(UTC) não localizada na base de dados da REDEMET 2020092413 - Mensagem AIRMET de 'SBRE' para 24/09/2020 as 13(UTC) não localizada na base de dados da REDEMET 2020092413 - SBBS AIRMET 1 VALID 240925/241325 SBBS - SBBS BRASILIA FIR BKN CLD 500/1000FT OBS AT 0900Z WI S1616 W04959 - S1455 W04744 - S1606 W04654 - S1707 W04908 - S1616 W04959 STNR NC="
//texto2 = "2020092413 - SBAZ AIRMET 2 VALID 241120/241320 SBAZ - SBAZ AMAZONICA FIR OVC CLD 100/0800FT OBS AT 1100Z WI S0036 W05703 - S0023 W05528 - S0136 W05507 - S0150 W05645 - S0036 W05703 STNR NC= 2020092413 - SBAZ AIRMET 1 VALID 241116/241315 SBAZ - SBAZ AMAZONICA FIR SFC VIS 0500M FG OBS AT 1100Z WI S0036 W05703 - S0023 W05528 - S0136 W05507 - S0150 W05645 - S0036 W05703 STNR NC= 2020092413 - Mensagem AIRMET de 'SBCW' para 24/09/2020 as 13(UTC) não localizada na base de dados da REDEMET 2020092413 - Mensagem AIRMET de 'SBRE' para 24/09/2020 as 13(UTC) não localizada na base de dados da REDEMET 2020092413 - SBBS AIRMET 1 VALID 240925/241325 SBBS - SBBS BRASILIA FIR BKN CLD 500/1000FT OBS AT 0900Z WI S1616 W04959 - S1455 W04744 - S1606 W04654 - S1707 W04908 - S1616 W04959 STNR NC="
texto2 = "2020092510 - SBAZ AIRMET 2 VALID 250735/251005 SBAZ - SBAZ AMAZONICA FIR BKN CLD 200/0800FT FCST WI S0308 W06001 - S0310 W05959 - S0309 W05955 - S0306 W05956 - S0307 W05959 - S0308 W06001 STNR NC= 2020092510 - SBAZ AIRMET 1 VALID 250705/251005 SBAZ - SBAZ AMAZONICA FIR SFC VIS 0800M RA FCST WI S0302 W06003 - S0305 W06003 - S0312 W05958 - S0306 W05956 - S0301 W06000 - S0302 W06003 STNR NC= 2020092510 - SBCW AIRMET 4 VALID 250905/251205 SBCW - SBCW CURITIBA FIR OVC CLD 200/0800FT OBS AT 0900Z WI S2120 W04349 - S2129 W04340 - S2125 W04333 - S2116 W04330 - S2111 W04340 - S2120 W04349 STNR NC= 2020092510 - SBCW AIRMET 3 VALID 250715/251115 SBCW - SBCW CURITIBA FIR SFC VIS 0500M FG OBS AT 0700Z WI S2700 W04824 - S2601 W04833 - S2513 W04900 - S2513 W04932 - S2613 W04905 - S2703 W04857 - S2700 W04824 STNR NC= 2020092510 - SBRE AIRMET 1 VALID 250910/251210 SBRE - SBRE RECIFE FIR BKN CLD 500/0800FT OBS AT 0900Z WI S1501 W04058 - S1507 W04048 - S1501 W04040 - S1451 W04043 - S1452 W04052 - S1501 W04058 STNR NC= 2020092510 - Mensagem AIRMET de 'SBBS' para 25/09/2020 as 10(UTC) não localizada na base de dados da REDEMET"
*/

var groupMarkersHide = false
var groupMarkers = false
var intervalAirmet = false
var arrayMetaresGeral = []

function addHours(data, horas) {
    if (!Date.prototype.addHours)
        Date.prototype.addHours = function (h) {
            this.setHours(this.getHours() + h);
            return this;
        }

    return data.addHours(horas)

}

function mostraAirmet() {
    if ($('#chkAirmet').prop('checked')) {
        getAirmet();
        clearInterval(intervalAirmet)
        intervalAirmet = setInterval("getAirmet()", 60000);
    } else {
        clearInterval(intervalAirmet)
        clearLayersAirmets()
        iniciaAirmetGlobalVars();

    }
}

function getLocalidadesFIRSmartMetar() {
    let result = []
    try {
        result = opener.localidadesFIR.slice();
    } catch (e) {
        result = [
            "SBEG,SBMN,SBBV,SBPV,SBRB,SBCY,SBSL,SBBE,SBJC,SBSN,SBMQ,SBCZ,SBTF,SBMY,SBAT,SBUA,SBCC,SBSO,SBIH,SBTT,SBTK,SBJI,SBHT,SBMA,SBVH,SBTU,SBOI,SBCJ,SBCI,SBIZ,SBTS,SBTB,SBUY,SBIC,SBEK,SBGM,SBMD,SBAA,SBSO,SBRD,SSKW",
            "SBAN, SBBH, SBBR, SBBW, SBCF, SBCN, SBGO, SBIP, SBIT, SBLS, SBMK, SBNV, SBPJ, SBPR, SBYS, SBAQ, SBAX, SBBP, SBGP, SBJD, SBKP,SBSJ, SBPC, SBRP, SBSR, SBUL, SBUR, SBVG, SNDV, SDAM",
            "SBFZ, SBSG, SBNT, SBJP, SBKG, SBRF, SBMO, SBAR, SBPL, SBJU, SBSV, SBIL, SBPS, SBVC, SBLP, SBVT, SBTE, SBFN, SBPB, SBGV, SBMS, SBUF, SBLE, SBTC, SBFE,SBTV,SBAC,SBJE,SNBR,SNTF,SDIY,SNVB,SNHS",
            "SAEZ,SUMU,SGAS,SARE,SBUG,SBBG,SBPK,SBSM,SBNM,SBPF,SBPA,SBCO,SBCX,SBTR,SBCM,SBJA,SBLJ,SBCH,SBCD,SBFL,SBNF,SBJV,SBCT,SBBI,SBFI,SBPG,SSGG,SBPO,SBCA,SBTD,SBPP,SBDB,SBDO,SBCG,SBCR,SBTG,SBMG,SBLO,SBDN,SBML,SBBU,SBAE,SBAU,SBSP,SBMT,SBGR,SBST,SBTA,SBGW,SBSC,SBJR,SBAF,SBRJ,SBGL,SBBQ,SBZM,SBJF,SBES,SBBZ,SBCB,SBME,SBMM,SBEC,SBLB,SBCP,SBFS,SBEN,SDAG"
        ];
    }
    return result
}

function iniciaAirmetGlobalVars() {
    regAirmet = { codigo: "", FIR: 0, tipo: "", base: 0, visibilidade: 0, valIni: 0, valFin: 0, area: 0, cancelado: false, texto: "", coord: "", locs: "" }
    aeroIntern = "SBBG* SBBE SBCF SBBV SBBR SBKP SBCG SBCR SBCZ SBCY SBCT SBFL SBFZ SBFI SBJP SBMQ SBEG SBNF SBPK SBPP SBPA SBPV SBRF SBRP* SBRB* SBGL SBSV SBSN SBSG SBSJ SBSP* SBVT* SBSL SBGR SBTT SBPB SBPL* SBPS* SBCB*	SBMO* SBMG*"
    arrAirmetGeral = []
    arrIdxAirmetGeral = []
    arrAirmetsPlot = []
    arrIdxAirmetsPlot = []

    arrayLocalidadeFIR = ['SBAZ', 'SBBS', 'SBRE', 'SBCW']

    airmetsBrutos = "";
    airmets = []
    lastAirmet = ""

    //excluir ao integrar
    localidadesFIR = getLocalidadesFIRSmartMetar();

}

//** */funcoes de data
/*function makeDataHoraAgora() {
    let agora = new Date();

    return fillZero(agora.getUTCDate()) + "" + fillZero(agora.getUTCHours()) + "" + fillZero(agora.getUTCMinutes());

}*/

function getUTCAgora() {
    let agora = new Date()
    return new Date(agora.getUTCFullYear(), agora.getUTCMonth(), agora.getUTCDate(), agora.getUTCHours(), agora.getUTCMinutes())

}

function getFullDateValid(dataI, dataF) { // retorna data inteira de AIRMET e SIGMET 
    let diaI = dataI.substr(0, 2);
    let horaI = dataI.substr(2, 2);
    let minI = dataI.substr(4, 2);

    let diaF = dataF.substr(0, 2);
    let horaF = dataF.substr(2, 2);
    let minF = dataF.substr(4, 2);


    //  let diaA = 
    let agora = getUTCAgora()
    let decMonth = 0
    if (diaI > agora.getUTCDay())
        decMonth = -1;

    let dataInicial = new Date(agora.getUTCFullYear(), agora.getUTCMonth() + decMonth, diaI, horaI, minI)
    let dataFinal = new Date(agora.getUTCFullYear(), agora.getUTCMonth(), diaF, horaF, minF)

    // if (parseInt(diaF) < parseInt(diaI))
    //     dataFinal.setMonth(dataFinal.getMonth() + 1);
    //console.log(agora.toISOString())
    //console.log(dataInicial.toISOString())
    //console.log(dataFinal.toISOString())
    return [dataInicial, dataFinal]

}

function getUTCDate(date) {
    let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

    return new Date(now_utc);
}

function isValidAirmet(ini, fim) {
    let interval = getFullDateValid(ini, fim)
    let agora = getUTCAgora()
    if ((agora >= interval[0]) && (agora <= interval[1])) {
        return true
    } else if (interval[0] > agora)
        return -1
    return false
}
function isLinux() {
    return navigator.platform.indexOf("Linux") > -1
}

function isCloseToValidOff(ini, fim, timer = 10) {
    if (ini == "")
        return false

    if (!fim) {
        let valid = getValidadeAirmet(ini)
        ini = valid.split("/")[0]
        fim = valid.split("/")[1]
    }
    let agora = getUTCAgora()
    fim = getFullDateValid(ini, fim)[1]

    let restante = getUTCDate(new Date(fim - agora))

    if (isLinux()) {
        addHours(restante, 3)
        //restante.addHours(3)
    }
    if (restante.getHours() == 0) { // não sei porque, mas estava começando da hora 01 no Linux
        if (restante.getMinutes() <= timer)
            return true
    }

    return false
}

/*
valid = isValidAirmet("291409", "291815")
if (valid)
    console.log("ok")
console.log(isCloseToValidOff("291400", "291418"))

*/
function getIniAirmet(hora) {
    //201200/201800
    return hora.substr(2, 2); makeDataHoraAgora
}

function getFimAirmet(hora) {
    //201200/201800
    return hora.substr(9, 2);
}
function getValidadeAirmet(text) {
    var t = text.replace(/ /g, "")
    //console.log("t => " + t )

    nuvPatt2 = /\d{6}\/\d{6}/g; //PEGA O intervalo de validade de str sem espaços
    var t1 = t.match(nuvPatt2)
    if (t1 && t1.length > 0)
        return t1[0]
    else
        return ""
}

function airmetPertoDoFim(airmet) {
    let val = getValidadeAirmet(airmet);
    let ini = val.split("/")[0]
    let fim = val.split("/")[1]

    return isCloseToValidOff(ini, fim)
}

/*function getValidadeAirmet(airmet) {
    //VALID 201200/201800
    return airmet.split(" VALID ")[1].substr(0, 13);
}*/

function checaValidadeAirmet(airmet) {

    let val = getValidadeAirmet(airmet);

    let ini = val.split("/")[0]
    let fim = val.split("/")[1]
    if ((ini !== "") && (fim !== ""))
        return isValidAirmet(ini, fim)
    else
        return false
}


/*funcoes gerais */

function removeEspacos(text) {
    if (typeof text === "string") {
        text = text.replace(/ /g, "")
        return text
    }
    else
        return ""
}
function removeEspacosDuplos(texto) {

    while (texto.includes("  "))
        texto = texto.replace(/  /g, " ");
    return texto
}

function getRectFromLatLong(lat, long) {
    var latLong = L.latLng(lat, long);
    var currentPoint = map.latLngToContainerPoint(latLong);
    var width = 600;
    var height = 450;
    var xDifference = width / 2;
    var yDifference = height / 2;
    var southWest = L.point((currentPoint.x - xDifference), (currentPoint.y - yDifference));
    var northEast = L.point((currentPoint.x + xDifference), (currentPoint.y + yDifference));
    var bounds = L.latLngBounds(map.containerPointToLatLng(southWest), map.containerPointToLatLng(northEast));
    return bounds;
}

function plotaAirmetLoc(lat, long) {
    let rect = getRectFromLatLong(lat, long)
    rect = L.rectangle(rect).addTo(map);

    formataLayerEdit(rect, false)

    let firs = cutPlotFIRs(rect)

    if (firs == 1)
        return copiaCoordenadas(extractDMS(JSON.stringify(rect.toGeoJSON())))
    else
        return $("#taCoordenadas").val('');

}

function plotarAreaLocalidade(loc, onlyZoom) {
    let idxLoc = arrAeroIndicativo.indexOf(removeEspacos(loc.toUpperCase()))
    let lat = arrAeroLat[idxLoc]
    let long = arrAeroLong[idxLoc]

    //map.panTo(new L.LatLng(lat, long));
    //map.setView([lat, long], 10)
    //o tamanho da área depende do zoom
    if (!onlyZoom) {
        map.setView([lat, long], 10)
        setTimeout(plotaAirmetLoc, 1000, lat, long)
    } else {
        map.setView([lat, long], 10)
        map.panTo([lat, long])
    }
}


/*Integrar ao SmartMetar*/
$("document").ready(function () {
    $('#taCoordenadas').keypress(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $('#btnInsertPlot').click();
            let loc = removeEspacos($('#taCoordenadas').val())
            if (loc.length == 4)
                plotarAreaLocalidade(loc)
        }
    });

    getIp();
    $("#sidebar").hide();

    createPopUpMenu();
    //document.addEventListener('contextmenu', openContextMenu, false);

    iniciaAirmetGlobalVars();
    iniciaSigmetGlobalVars();
    getAeroportos();
})
//*********************** */


function getTxtVisAirmet(texto) {
    texto = removeEspacosDuplos(texto);
    if (texto.indexOf("SFC VIS") == -1)
        return "NIL"
    var strEnd = ""

    if (texto.indexOf("OBS") > -1) {
        strEnd = "OBS";
    } else if (texto.indexOf("FCST") > -1) {
        strEnd = "FCST";
    } else
        strEnd = "WI"

    vis = texto.split("SFC VIS")[1].split(strEnd)[0];
    return vis
}

function getTxtAirmetGenerico(texto) {
    txt = removeEspacosDuplos(texto);

    if (texto.indexOf("OBS") > -1) {
        strEnd = "OBS";
    } else if (texto.indexOf("FCST") > -1) {
        strEnd = "FCST";
    } else
        strEnd = "WI"

    txt = texto.split(" FIR ")[1].split(strEnd)[0];
    return txt
}

function getVisAirmet(texto) {
    var vis = getTxtVisAirmet(texto)
    vis = getNum(vis)
    //console.log(vis)
    return vis;
}

function getNum(str) {
    //return str.match(/\d+/) [0]
    return str.replace(/\D/g, '')
}

function getBaseNuvemAirmet(nuvem) {
    //arrNuvens.length = 0
    nuvem = removeEspacos(nuvem)
    var base = 0
    var topo = 0
    //    nuvPattTopo =  /\d{4}FT/g; //PEGA O TOPO
    if (!nuvem.includes("FT"))
        nuvem = nuvem + "FT"
    if (nuvem.includes("/")) {
        base = nuvem.split("/")[0]

    } else {
        base = nuvem.split("FT")[0]
    }
    return base
}


function getCldAirmet(texto) {
    texto = removeEspacosDuplos(texto);
    if (texto.indexOf("CLD") == -1)
        return "NIL"
    //  texto = insereM(texto)
    //  texto = extractSigVis(texto)
    var strEnd = ""

    if (texto.indexOf("OBS") > -1) {
        strEnd = "OBS";
    } else if (texto.indexOf("FCST") > -1) {
        strEnd = "FCST";
    } else
        strEnd = "WI"

    vis = texto.split("CLD")[1].split(strEnd)[0];
    return removeEspacos(vis).split("FT").join("FT ");
}

function addMarker(m, loc, restricao, pulse = false) {
    // if (pulse)
    //     return m.addTo(map)

    let int = aeroIntern.indexOf(loc) > -1

    if (!int && !restricao) {
        if (!groupMarkersHide)
            groupMarkersHide = new L.FeatureGroup();
        groupMarkersHide.addLayer(m)
    } else {
        if (!groupMarkers)
            groupMarkers = new L.FeatureGroup();
        groupMarkers.addLayer(m)
    }


    //return m.addTo(map)
    return m
}

function removeHTMLTags(txt) {
  return jQuery('<p>' + txt + '</p>').text();
}

function updateArrayMetaresGeral(loc, met) {
    let achou = false
    met = removeHTMLTags(met)
    let taf = getTAFFromMetar(met)
    let achouTAF = taf.TAF?true:false
    for (let i in arrayMetaresGeral) {
        if (arrayMetaresGeral[i].METAR.texto.includes(loc)) {
            achou = true
            arrayMetaresGeral[i].METAR.texto = met
            arrayMetaresGeral[i].METAR.visibilidade = opener.getVisibilidade(met)
            arrayMetaresGeral[i].METAR.teto = opener.getTeto(met)
            
            arrayMetaresGeral[i].TAF.achou = achouTAF
            arrayMetaresGeral[i].TAF.texto = ""
            arrayMetaresGeral[i].TAF.visibilidade = taf.visibilidade
            arrayMetaresGeral[i].TAF.teto = taf.teto
            
            return achou
          
        }
    }
    
    arrayMetaresGeral.push({ METAR:{texto:met, visibilidade: opener.getVisibilidade(met), teto: opener.getTeto(met)},TAF:{achou: achouTAF, texto:"", visibilidade: taf.visibilidade, teto: taf.teto} })
    return false

}

function getMetar(loc) {
    function buscaMetar(array, loc) {
        let xitem = loc
        
        for (let i in array) {
            let msg
           if (typeof array[i] === 'string' || array[i] instanceof String)
              msg = array[i]
            else
              msg = array[i].METAR.texto
            
            if (msg.includes(loc)) {
                xitem = msg
                break
            }
        }
        return xitem
    }

    let met = buscaMetar(arrayMetares, loc) //busca os que tem restrição
    if (met == loc) {//se não, encontrou busca no geral
        try {
            met = buscaMetar(opener.arrayMetares, loc) //pega apenas os metares de uma determinada FIR
            if (met == loc) {//se nao achou, atualiza a lista geral 
                met = buscaMetar(arrayMetaresGeral, loc)
                if (met !==loc)
                  updateArrayMetaresGeral(loc, met)
            } else
                  updateArrayMetaresGeral(loc, met)
            
        } catch (e) {
            console.log(e)
        }

    } else {//metar com restricao
        updateArrayMetaresGeral(loc, met)
        met = "*" + met
    }
    return met

}

function updateDescobertos(loc, tipoAlerta) {
    function trataLabelDescobertas(id, loc, legenda) {
        let desc = $(id).html()
        let sep = ", "
        if (desc == "")
            sep = ""
        else if (desc.includes("<br>"))
            desc = desc.split("<br>")[1]
        if (!desc.includes(loc))
            desc = desc + sep + loc
        $(id).html(legenda + "<br>" + desc)
    }

    if (!loc) {
        $('#h6descobertasAD').html("")
        $('#h6descobertasRota').html("")
        return
    }

    if (tipoAlerta.ad) {
        trataLabelDescobertas('#h6descobertasAD', loc, 'Alerta AD:')
    }
    if (tipoAlerta.rota) {
        trataLabelDescobertas('#h6descobertasRota', loc, 'Alerta ROTA:')
    }
}

function plotaMarca(lat, lng, loc) {
    function getSvgIcon(loc, strAlerta, adWRNGPertoDoFim, descoberto = false) {
        //inicio x = 78
        let inicioX = 78;
        let offSetX = 0;
        let svgTeto = ""
        let svgVisibilidade = ""
        let svgTrovoada = ""
        let svgVento = ""
        let contRestricoes = 0
        let alt = 0
        let color = "yellow"
        let boxOpacity = "0.8";
        let backGroundColor = "#444";
        let classSvgIcon

        //if (adWRNGPertoDoFim)

        if (descoberto) {
            color = "white"
            alt = 1000;
            boxOpacity = "0.9";
            backGroundColor = "red"
            classSvgIcon = "pulseZoom"
        }

        if (adWRNGPertoDoFim)
            classSvgIcon += " pulse"

        let iconColor = color

        if (strAlerta.includes("TETO")) {
            svgTeto = `<g transform="matrix(0.35 0 0 0.35 ${inicioX}.02 67.61)"  >
        <g style=""   >
                <g transform="matrix(1 0 0 1 43.46 21.75)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-231.57, -209.86)" d="M 338.103 201.978 c 1.733 -6.085 2.61 -12.372 2.61 -18.756 c 0 -37.746 -30.708 -68.455 -68.454 -68.455 c -15.702 0 -31.042 5.453 -43.193 15.354 c -10.807 8.805 -18.705 20.773 -22.558 34.057 c -25.26 -2.36 -48.097 13.667 -55.234 37.059 c -3.824 -0.87 -7.731 -1.309 -11.671 -1.309 c -29.051 0 -52.686 23.464 -52.686 52.514 c 0 29.051 23.635 52.515 52.686 52.515 h 183.931 c 29.051 0 52.685 -23.464 52.685 -52.515 C 376.22 228.676 360.49 208.367 338.103 201.978 z" stroke-linecap="round" />
        </g>
                <g transform="matrix(1 0 0 1 -90.95 -34)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-97.16, -154.11)" d="M 130.402 177.248 l 2.936 0.016 l 1.444 -2.556 c 10.411 -18.427 29.165 -30.778 50.168 -33.04 l 2.788 -0.3 l 1.197 -2.535 c 0.995 -2.106 2.117 -4.23 3.334 -6.313 l 2.045 -3.498 l -2.998 -2.725 c -8.986 -8.17 -20.753 -12.669 -33.131 -12.669 c -1.311 0 -2.637 0.054 -3.968 0.162 c -7.85 -24.892 -32.261 -42.525 -59.755 -42.525 c -34.414 0 -62.412 26.82 -62.412 59.787 c 0 5.289 0.718 10.5 2.141 15.555 C 14.072 152.409 0 170.187 0 190.789 c 0 25.457 21.612 46.167 48.178 46.167 h 16.221 l 0.648 -4.244 c 4.906 -32.088 32.06 -55.398 64.612 -55.512 C 129.907 177.229 130.155 177.247 130.402 177.248 z" stroke-linecap="round" />
        </g>
        </g>
        </g>`;
            offSetX += 150;
            contRestricoes += 1
        }

        if (strAlerta.includes("VISIBILIDADE")) {
            //inicio x= 84

            inicioX = 84 + offSetX;

            svgVisibilidade = `<g transform="matrix(0.67 0 0 0.67 ${inicioX}.6 68.6)"  >
        <g style=""   >
        <g transform="matrix(1 0 0 1 -36.32 -61.62)" id="Capa_1"  >
        
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-72.4, -47.09)" d="M 144.797 47.095 c 0 -4.142 -3.358 -7.5 -7.5 -7.5 H 7.5 c -4.142 0 -7.5 3.358 -7.5 7.5 c 0 4.142 3.358 7.5 7.5 7.5 h 129.797 C 141.439 54.595 144.797 51.237 144.797 47.095 z" stroke-linecap="round" />
        </g>
                <g transform="matrix(1 0 0 1 25.57 -30.81)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-134.28, -77.91)" d="M 209.93 70.405 H 58.632 c -4.142 0 -7.5 3.358 -7.5 7.5 s 3.358 7.5 7.5 7.5 H 209.93 c 4.142 0 7.5 -3.358 7.5 -7.5 S 214.072 70.405 209.93 70.405 z" stroke-linecap="round" />
        </g>
                <g transform="matrix(1 0 0 1 -10.23 0)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-98.49, -108.71)" d="M 174.53 116.214 c 4.142 0 7.5 -3.358 7.5 -7.5 c 0 -4.142 -3.358 -7.5 -7.5 -7.5 H 22.446 c -4.142 0 -7.5 3.358 -7.5 7.5 c 0 4.142 3.358 7.5 7.5 7.5 H 174.53 z" stroke-linecap="round" />
        </g>
        
                <g transform="matrix(1 0 0 1 14.81 30.81)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-123.53, -139.52)" d="M 199.441 132.024 H 47.619 c -4.142 0 -7.5 3.358 -7.5 7.5 s 3.358 7.5 7.5 7.5 h 151.822 c 4.142 0 7.5 -3.358 7.5 -7.5 S 203.583 132.024 199.441 132.024 z" stroke-linecap="round" />
        </g>
                <g transform="matrix(1 0 0 1 -33.3 61.62)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-75.41, -170.34)" d="M 125.759 162.835 H 25.068 c -4.142 0 -7.5 3.358 -7.5 7.5 c 0 4.142 3.358 7.5 7.5 7.5 h 100.69 c 4.142 0 7.5 -3.358 7.5 -7.5 C 133.259 166.193 129.901 162.835 125.759 162.835 z" stroke-linecap="round" />
        </g>
        </g>
        </g>`
            offSetX += 150;
            contRestricoes += 1

        }

        if (strAlerta.includes("VENTO") || strAlerta.includes("RAJADA")) {

            //inicio x =83    
            inicioX = 83 + offSetX;

            svgVento = `<g transform="matrix(8.81 0 0 8.81 ${inicioX}.23 70.15)"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-8, -8)" d="M 12.5 2 A 2.5 2.5 0 0 0 10 4.5 a 0.5 0.5 0 0 1 -1 0 A 3.5 3.5 0 1 1 12.5 8 H 0.5 a 0.5 0.5 0 0 1 0 -1 h 12 a 2.5 2.5 0 0 0 0 -5 z m -7 1 a 1 1 0 0 0 -1 1 a 0.5 0.5 0 0 1 -1 0 a 2 2 0 1 1 2 2 h -5 a 0.5 0.5 0 0 1 0 -1 h 5 a 1 1 0 0 0 0 -2 z M 0 9.5 A 0.5 0.5 0 0 1 0.5 9 h 10.042 a 3 3 0 1 1 -3 3 a 0.5 0.5 0 0 1 1 0 a 2 2 0 1 0 2 -2 H 0.5 a 0.5 0.5 0 0 1 -0.5 -0.5 z" stroke-linecap="round" />
        </g>`;
            offSetX += 150;

            contRestricoes += 1
        }

        if (strAlerta.includes("TROVOADA")) {
            inicioX = 68 + offSetX;

            //inicio x=60
            svgTrovoada = `<g transform="matrix(0.27 0 0 0.24 ${inicioX}.3 71.1)" id="Capa_1"  >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ${iconColor}; fill-rule: nonzero; opacity: 1;"  transform=" translate(-256, -256)" d="M 412.324 209.102 C 406.777 198.586 395.886 192 383.996 192 h -60.219 l 72.844 -145.688 c 4.953 -9.922 4.422 -21.703 -1.406 -31.133 C 389.386 5.742 379.09 0 367.996 0 h -160 c -13.781 0 -26 8.813 -30.359 21.883 l -80 240 c -3.25 9.758 -1.609 20.484 4.406 28.828 c 6.016 8.344 15.672 13.289 25.953 13.289 h 74.703 l -26.328 171.133 c -2.266 14.75 5.953 29.117 19.828 34.617 c 3.844 1.523 7.844 2.25 11.781 2.25 c 10.297 0 20.266 -4.977 26.391 -13.867 l 176 -256 C 417.105 232.336 417.855 219.617 412.324 209.102 z" stroke-linecap="round" />
        </g>`;
            offSetX += 150;
            contRestricoes += 1

        }

        //let tamIconeX = offSetX - 
        let widthX = contRestricoes * 25;
        let viewBoxX = (contRestricoes < 1) ? 0 : (contRestricoes * 150) - 1;
        //viewBoxX = viewBoxX<0?0:viewBoxX;

        var svgIcon = new L.divIcon({//vento trovoada teto visib
            // Specify a class name we can refer to in CSS.
            className: 'css-icon',
            html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class = "${classSvgIcon}" width="${widthX}" height="50" viewBox="0 0 ${viewBoxX} 140" xml:space="preserve">
            <desc>Created with Fabric.js 3.6.3</desc>
            <defs>
            </defs>
            <rect x="0" y="0"  rx="30" ry ="30" width="100%" height="100%" fill="${backGroundColor}" fill-opacity="${boxOpacity}";></rect>

            ${svgVisibilidade}

            ${svgVento}

            ${svgTrovoada}

            ${svgTeto}
            </svg>`
            // Set marker width and height
            , iconSize: [25, 35] //tamanho minimo. O restante eh ajustado pelo tamanho do SVG
            , iconAnchor: [6, 6]
            , alt: parseInt(`${alt}`)

        });
        return svgIcon;
    }


    function removeInfo(desc) {
        if (desc.includes("</b><b>")) {
            desc = desc.split("<b><img src=")[0]
            return desc.replace(/&#10/g, "<br>")
        }
        else
            return desc
    }

    function checaRestricaoVento(descMetar) {
        return (descMetar.includes("VENTO") || descMetar.includes("RAJADA") || descMetar.includes("KT</SPAN>"))
    }

    function getTipoAlerta(loc, descoberto = false) {
        let rota = false
        let ad = false
        let strAlerta = ""

        if (opener && opener.arrRestricaoLoc[loc]) {
            if (descoberto)
                strAlerta = descoberto;
            else
                strAlerta = opener.arrRestricaoLoc[loc]
            if (strAlerta.indexOf("TETO") > -1 || strAlerta.indexOf("VISIBILIDADE") > -1)
                rota = true
            if (strAlerta.indexOf("VENTO") > -1 || strAlerta.indexOf("RAJADA") > -1 || strAlerta.indexOf("TROVOADA") > -1)
                ad = true
        }
        return { ad, rota, strAlerta }
    }
    if (!isNaN(lat) && !isNaN(lng)) {

        desc = getMetar(loc)

        var greenIcon = new L.Icon({
            //            iconUrl: 'png/marker-icon-green.png',
            iconUrl: 'png/condicao_verde.png',
            //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [8, 8],
            //iconAnchor: [0, 0],
            popupAnchor: [1, -12],
            shadowSize: [6, 6],
            alt: 0
        });

        var yellowIcon = new L.Icon({
            iconUrl: 'png/condicao_amarelo.png',
            //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [12, 12],
            iconAnchor: [0, 0],
            popupAnchor: [1, -12],
            shadowSize: [6, 6],
            alt: 500
        });

        var orangeIcon = new L.Icon({
            iconUrl: 'png/condicao_laranja.png',
            //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [12, 12],
            iconAnchor: [0, 0],
            popupAnchor: [1, -12],
            shadowSize: [6, 6],
            alt: 500
        });

        var redIcon = new L.Icon({
            //            iconUrl: 'png/marker-icon-green.png',
            iconUrl: 'png/condicao_vermelho.png',
            //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [12, 12],
            iconAnchor: [0, 0],
            popupAnchor: [1, -12],
            shadowSize: [6, 6],
            alt: 1000
        });

        var cssIconRed = new L.divIcon({
            // Specify a class name we can refer to in CSS.
            className: 'css-icon',
            html: '<div class="gps_ring"></div>'
            // Set marker width and height
            , iconSize: [24, 24]
            , iconAnchor: [6, 6]
        });

        var cssIconYellow = new L.divIcon({
            // Specify a class name we can refer to in CSS.
            className: 'css-icon',
            html: '<div class="gps_ringYellow"></div>'
            // Set marker width and height
            , iconSize: [24, 24]
            , iconAnchor: [6, 6]
        });

        let restricao = false
        let adWRNG = opener.getStatusAdWRNG(loc)

        let adWRNGPertoDoFim = isCloseToValidOff(adWRNG.textoFull)

        if (desc[0] == "*") {
            restricao = true
            desc = desc.substr(1)
            let descU = desc.toUpperCase();
            let alerta;

            if (descU.includes("DESCOBERTO")) {
                let strDescoberto = descU.split("DESCOBERTO")[1].split("<")[0]
                let alerta = getTipoAlerta(loc, strDescoberto);
                icon = redIcon
                icon = getSvgIcon(loc, strDescoberto, adWRNGPertoDoFim, true) //vento trovoada teto visib

                //if (alerta.ad)
                addMarker(L.marker([lat, lng], { icon: cssIconRed }), "", restricao, true)
                updateDescobertos(loc, alerta)
            } else {
                let alerta = getTipoAlerta(loc);
                //if (descU.includes("DEGRADA"))
                // icon = orangeIcon
                //else {
                //icon = yellowIcon
                icon = getSvgIcon(loc, alerta.strAlerta, adWRNGPertoDoFim, false) //vento trovoada teto visib

                //}
                //if (alerta.ad)
                //    addMarker(L.marker([lat, lng], { icon: cssIconYellow }), "", restricao, true)
            }
        } else
            icon = greenIcon


        var m = addMarker(L.marker([lat, lng], { icon: icon }), loc, restricao)
        //m._icon.classList.add("svgRedIcon");


        m.on('contextmenu', function (event) {
            let d
            d = removeEspacos(event.target.getTooltip()._content)
            selectedMarker = d.replace("METARCOR", "").replace("SPECICOR", "").replace("METAR", "").replace("SPECI", "").substr(0, 4)
            openContextMenuMarker(event, event.target);
        }, this);
        if (adWRNG && adWRNG.textoFull.length > 0) {
            adWRNG = "<br><br>Aviso de Aeródromo:<br>" + opener.spanRed(adWRNG.textoFull, getValidadeAirmet(adWRNG.textoFull))
            if (adWRNGPertoDoFim)
                adWRNG += "<br>" + spanBold(spanRed("* Este Aviso de Aeródromo está Próximo do Fim de Sua Validade!"))
            adWRNG = spanBold(adWRNG)
        }
        else
            adWRNG = ""
        desc = removeInfo(desc) + adWRNG
        m.bindTooltip(desc, { closeButton: false, offset: L.point(0, -20) })
        //console.log(m)
    } //else
    //console.log("Erro na plotagem de ", loc);
}

function bringRedMarkersToFront(layers) {
    //layer1.bringToFront();   
    layers.eachLayer(function (layer) {
        if (layer.options.icon.options.alt >= 1000)
            layer.setZIndexOffset(5000);
    });
}

function plotaAeroportos() {
    if (groupMarkersHide) {
        map.removeLayer(groupMarkersHide); // corrige o problema de não apagar os markers com o zoom out no inicio
        groupMarkersHide = false
    }
    if (groupMarkers) {
        map.removeLayer(groupMarkers); // corrige o problema de não apagar os markers com o zoom out no inicio
        groupMarkers = false
    }
    updateDescobertos(false)
    for (var i in localidadesFIR) {
        var fir = removeEspacos(localidadesFIR[i])
        var aloc = fir.split(",")
        for (var j in aloc) {
            var loc = aloc[j]
            var long = getLatL(loc)
            var lat = getLngL(loc)
            plotaMarca(long, lat, loc)
            //var busca = checaPontoA([long,lat])
            //console.log("busca >",loc + " / "+busca)
        }
    }

    if (map.getZoom() > 5)
        map.addLayer(groupMarkersHide); // corrige o problema de não apagar os markers com o zoom out no inicio
    map.addLayer(groupMarkers); // corrige o problema de não apagar os markers com o zoom out no inicio
    bringRedMarkersToFront(groupMarkers)

}

function atualizaLocAirmets(busca, loc) {
    for (var i in busca) {
        cod = busca[i].feature.properties.codigo;
        var idx = getIdxAirmet(cod)
        var sep = ", "
        var oldLocs = arrAirmetGeral[idx].locs
        if (oldLocs == "")
            sep = ""
        arrAirmetGeral[idx].locs = oldLocs + sep + loc
    }
}

function insereQuebraHTML(xSep, texto, cont = 6) {
    let xloc = texto.split(xSep)
    let xfinal = ""
    for (var j in xloc) {
        let quebra = ""
        if ((j > 0) && (j % cont) == 0)
            quebra = "</br>"

        let sep = xSep
        if (xfinal == "")
            sep = ""
        xfinal = xfinal + sep + quebra + xloc[j]
    }
    return xfinal
}

function insereQuebraAirmets() { //quebra as localidaddes para que apareçam em linhas
    xSep = ","
    for (var i in arrAirmetGeral) {
        var xLoc = arrAirmetGeral[i].locs;
        let xFinal = xLoc
        if (!xLoc.includes("<")) {
            xFinal = insereQuebraHTML(xSep, xLoc)
        }
        arrAirmetGeral[i].locs = xFinal;
    }
}

function mergeTooltips(arrToolTips) { //junta as descrições de airmets que estejam na mesma área

    function mergeArraysTTs(txt1, txt2, sep) {
        let ret = []
        txt1 = txt1.split(sep);
        txt2 = txt2.split(sep);
        if (Array.isArray(txt1)) {
            txt1.forEach(function (item) {
                if (ret.indexOf(item) < 0)
                    ret.push(item)

            })
        }
        if (Array.isArray(txt2)) {
            txt2.forEach(function (item) {
                if (ret.indexOf(item) < 0)
                    ret.push(item)

            })
        }

        if (ret.length == 0)
            return txt1
        else
            return ret.join(sep)
    }

    //  var sep = "</br></br><div style='border-top:2px; width:100%; height: 2px solid black' ></div>"
    var sep = "</br><div style='border-top:1px solid black; width:100%; height: 2px' ></div>"
    for (var i in arrAirmetsPlot) { // varre o array de poligonos
        for (var j = parseInt(i) + 1; j <= arrAirmetsPlot.length - 1; j++) {
            var bi = arrAirmetsPlot[i].getBounds();
            var bj = arrAirmetsPlot[j].getBounds();

            biCbj = bi.contains(bj);
            bjCbi = bj.contains(bi);
            if (biCbj && bjCbi) { //os dois sao iguais
                //console.log('bi > ', bi);
                //console.log('bj > ', bj);

                arrToolTips[i] = mergeArraysTTs(arrToolTips[i], arrToolTips[j], sep)
                arrToolTips[j] = arrToolTips[i]

                /*if (arrToolTips[i].indexOf(arrToolTips[j]) == -1)
                    arrToolTips[i] += sep + arrToolTips[j]
                arrToolTips[j] = arrToolTips[i]
                */
                arrAirmetsPlot[i].setStyle({ //deixar o de trás sempre claro pra mostrar o hover do de cima
                    opacity: 0
                });
            } else if (bjCbi) { //bi dentro de bj // apaga e insere no mapa para ficar por cima
                map.removeLayer(arrAirmetsPlot[i]);
                arrAirmetsPlot[i].addTo(map);
            } /*else if(biCbj) { //bj dentro de bi // apaga e insere no mapa para ficar por cima
        map.removeLayer(arrAirmetsPlot[j]);
        arrAirmetsPlot[i].add(map);
      } */

        }
    }
}


//Busca os aeroportos que estão na area do poligono recem criado
function getAeroportosOnEdit(layer) {
    let locs = "", sep = ""
    //return ""

    for (var i in localidadesFIR) { //atualiza o array com as localidades inseridas nos airmets
        var fir = removeEspacos(localidadesFIR[i])
        var aloc = fir.split(",")
        for (var j in aloc) {
            var loc = aloc[j]
            var long = getLatL(loc)
            var lat = getLngL(loc)
            if (checaPontoEdit([long, lat], layer)) {
                locs = locs + sep + loc
                sep = ", "
            }
        }

    }
    return locs
}

function AtualizaAirmetsAeroportos() {
    for (var i in localidadesFIR) { //atualiza o array com as localidades inseridas nos airmets
        var fir = removeEspacos(localidadesFIR[i])
        var aloc = fir.split(",")
        for (var j in aloc) {
            var loc = aloc[j]
            var long = getLatL(loc)
            var lat = getLngL(loc)
            //plotaMarca(long, lat, loc)
            var busca = checaPontoA([long, lat])
            //console.log("busca >",loc)
            //console.log(busca)
            atualizaLocAirmets(busca, loc)
        }

    }

    insereQuebraAirmets();

    var arrToolTips = []

    for (var i in arrIdxAirmetsPlot) { // varre o array de poligonos
        var idx = getIdxAirmet(arrIdxAirmetsPlot[i])
        var locs = arrAirmetGeral[idx].locs
        var desc = getAirmetDescription(arrAirmetGeral[idx])

        //adiciona as localidades na descrição dos tooltips
        desc += "</br></br>Aeródromos Localizados na Área do AIRMET:</br>" + spanBold(locs)
        arrToolTips.push(desc);
    }
    mergeTooltips(arrToolTips); //une os tips dos airmets com areas iguais
    for (var i in arrAirmetsPlot) {
        arrAirmetsPlot[i].bindTooltip(arrToolTips[i], { sticky: true, closeButton: false });
    }

}

function formataErro(id, off) {
    if (off) {
        $(id).addClass("errorPulse")
    }
    else {
        $(id).removeClass("errorPulse")
    }
}

function atualizaSTSC() {
    try {
        plota_stsc()
    }
    catch (e) {
        // declarações para manipular quaisquer exceções
        console.log(e); // passa o objeto de exceção para o manipulador de erro
        formataErro('#clockSTSC', true)
        formataErro('#labelSTSC', true)
    }
}

function start() {
    /*  map = L.map('map').setView([-18.0, -45.0], 4);
     /*L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}', {
         attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         apikey: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
         maxZoom: 18
     }).addTo(map);
   
     
     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
         maxZoom: 10,
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         id: 'mapbox/light-v9',
         tileSize: 512,
         zoomOffset: -1
     }).addTo(map);
   
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 11,
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
     */

    /*
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
    }).*/


    // loadFirBrasil();
    //fir.addTo(map);

    //plotaAeroportos();
    //plotaAeroportos();

    //setInterval("plotaAeroportos()", 30000)


    //trataAirmetRedemet(texto2);

    getAirmet(true);
    getSigmet(true);

    intervalAirmet = setInterval("getAirmet()", 60000);
    intervalSigmet = setInterval("getSigmet()", 60000);

    plota_stsc();

    intervalSTSC = setInterval("atualizaSTSC()", 120000);

    //checaPonto("S1637 W04911");
    //map.setView([-18.0,-45.0], 13);

}

function invertLatLong(arr) {
    for (var i in arr) {
        var aux = arr[i][0]
        arr[i][0] = arr[i][1]
        arr[i][1] = aux
    }
    return arr
}

function spanRed(texto) {
    return '<span style="color:red">' + texto + '</span>'
}

function spanBold(texto) {
    return '<b>' + texto + '</b>'
}

function destacaNumeroAirmet(texto) {
    texto = texto.split(" ");
    return spanBold(texto[0]) + " " + texto.slice(1).join(" ");
}

function destacaFimValidade(texto) {
    texto = texto.split("</").join("<$")
    texto = texto.split("/")
    texto = texto[0] + "/" + spanBold(texto[1].split(" ")[0])
    return texto.split("<$").join("</")
}


function getAirmetDescription(airmet, simples = false) {
    var fir = arrayLocalidadeFIR[airmet.FIR]
    var cod = airmet.codigo.substr(2).replace("-", " - VALID ")

    if (!simples) {
        cod = destacaNumeroAirmet(cod)
        cod = destacaFimValidade(cod)
    }
    var tipo = ""
    var cancelado = ""
    var texto = airmet.texto
    if (airmet.cancelado) {
        cancelado = "*** CANCELADO ***"
        if (!simples)
            cancelado = spanRed(cancelado)
        cancelado = cancelado + " - "
    }
    if (airmet.tipo == "V")
        tipo = "VISIBILIDADE: "
    else if (airmet.tipo == "N")
        tipo = "TETO: "
    else if (airmet.tipo == "W") {

        tipo = "VENTO DE SUPERFÍCIE: "
        texto = texto.replace("SFC WIND", "")
    }

    if (!simples) {
        texto = "</br>" + spanRed(tipo + texto)
    }
    else
        texto = "&#10;" + tipo + texto

    return "AIRMET " + cancelado + fir + " - N. " + cod + " - " + texto
}

function clearLayersAirmets() {
    if (arrAirmetsPlot)
        for (var i in arrAirmetsPlot)
            map.removeLayer(arrAirmetsPlot[i])

    arrAirmetsPlot.length = 0
    arrIdxAirmetsPlot.length = 0
}

function plotaAirmets(arr, primeiraVez) {

    //var groupPolygon;
    for (var i in arr) {
        a = arr[i]
        if (a.tipo !== "C") {//o airmet de cancelamento nao eh plotado
            if (a.cancelado)
                continue;
            var poly = invertLatLong(a.coordDeg)
            //console.log("poly ==>", poly)

            /*var bigStripes = new L.StripePattern({
                patternContentUnits: 'objectBoundingBox',
                patternUnits: 'objectBoundingBox',
                weight: 0.1,
                spaceWeight: 0.1,
                height: 0.2,
                angle: 45
            });

            bigStripes.addTo(map);*/

            let opt = {
                className: "",
                color: "black",
                fillColor: "black"
                //fillPattern: bigStripes

            }
            if (isCloseToValidOff(a.codigo))
                opt.className = "pulse";


            var p = L.polygon(poly, opt).addTo(map)

            p.bindTooltip(getAirmetDescription(a), { closeButton: false, sticky: true });
            if (a.cancelado)
                p.setStyle({
                    color: 'red',
                    fillOpacity: 0,
                    dashArray: '5, 5', dashOffset: '5'

                });
            p.on('click', function (e) {
                //copiaCoordenadas(latLngToArray(layer.getLatLngs()[0]))
                copiaCoordenadas(extractDMS(JSON.stringify(this.toGeoJSON())))
            })


            p.on('mouseover', function (e) {
                // Set highlight
                this.setStyle({
                    opacity: 0.5,
                    fillOpacity: 0.8
                })
                setMenuMapaOff();

            });

            p.on('mouseout', function (e) {
                // Set highlight
                this.setStyle({
                    opacity: 1,
                    fillOpacity: 0.2
                });
                setMenuMapaOn();
                //console.log(layer)
            });

            p.on('contextmenu', function (event) {
                selectedSigmet = event.target
                //selectedAirmet = event.target
                openContextMenuSigmet(event, event.target);
            }, this);
            //p.bindPopup(getAirmetDescription(a), { autoClose: false }).openPopup();
            arrAirmetsPlot.push(p);
            arrIdxAirmetsPlot.push(a.codigo)
            arr[i].plotagem = p;
            //L.layerGroup.add
            /*if (primeiraVez && (i==0)){ //foca no primeiro airmet
              getGroupBounds()
              map.fitBounds(p.getBounds());
            }*/

        }

    }
    // if (primeiraVez)
    //   map.fitBounds(L.featureGroup(arrAirmetsPlot).getBounds());
}

/*L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/light-v9',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);*/


function getIdxAirmet(codigo) {
    return arrIdxAirmetGeral.indexOf(codigo)
}

function fillZero(num) {
    if (!isNaN(num)) {
        if (num < 10) num = "0" + num;
    }
    return num
}

function adicionaZero(num) {
    return fillZero(num)
}


function escondeLoading(txt = "") {
    $(".loading" + txt).fadeOut();
}
function mostraLoading(txt = "") {
    $(".loading" + txt).fadeIn();
}
function atualizaHora(id = false) {
    if (!id)
        id = "#clockAirmet"
    var date = new Date();
    var hora = adicionaZero(date.getUTCHours()) + ":" + adicionaZero(date.getUTCMinutes()) + ":" + adicionaZero(date.getUTCSeconds());
    $(id).html(hora + " UTC");

}
function GetWebContentAirmet(url, primeiraVez) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var erro = "ErroSM=";
        if (this.status > 0) {
            if ((this.readyState == 4 && this.status == 200) && (this.responseText !== "") && (!this.responseText.includes("Forbidden")) ) {


                //$("#imgLoad"+idxFIR).attr('src', 'pngs/green-button30.png');
                let resposta = opener.removeCacheMessage(this.responseText);

                //var resposta = "2020102011 - SBAZ AIRMET 8 VALID 201030/201425 SBAZ - SBAZ AMAZONICA FIR SFC VIS 0500M BR FCST WI S0835 W07044 - S0740 W07206 - S0645 W07033 - S0814 W06856 - S0835 W07044 STNR NC= 2020102011 - SBAZ AIRMET 7 VALID 201030/201425 SBAZ - SBAZ AMAZONICA FIR BKN CLD 100/1000FT FCST WI S0835 W07044 - S0740 W07206 - S0645 W07033 - S0814 W06856 - S0835 W07044 STNR NC= 2020102011 - SBAZ AIRMET 6 VALID 201030/201425 SBAZ - SBAZ AMAZONICA FIR BKN CLD 500/1000FT FCST WI S0228 W04830 - S0032 W04936 - S0013 W04809 - S0159 W04718 - S0228 W04830 STNR NC= 2020102011 - SBAZ AIRMET 5 VALID 201030/201425 SBAZ - SBAZ AMAZONICA FIR SFC VIS 1000M BR FCST WI S0228 W04830 - S0032 W04936 - S0013 W04809 - S0159 W04718 - S0228 W04830 STNR NC= 2020102011 - SBAZ AIRMET 4 VALID 200917/201117 SBAZ - SBAZ AMAZONICA FIR BKN CLD 500/1000FT FCST WI S0217 W06040 - S0231 W05919 - S0354 W05935 - S0333 W06100 - S0217 W06040 STNR NC= 2020102011 - SBAZ AIRMET 9 VALID 201130/201425 SBAZ - SBAZ AMAZONICA FIR BKN CLD 500/1000FT FCST WI S1037 W06353 - S1023 W07016 - S0733 W07330 - S0304 W06923 - S0136 W05822 - S1037 W06353 STNR WKN= 2020102011 - SBBS AIRMET 6 VALID 201025/201425 SBBS - SBBS BRASILIA FIR BKN CLD 500/1000FT FCST WI S1605 W04654 - S1448 W04715 - S1556 W05012 - S1709 W04847 - S1605 W04654 STNR NC= 2020102011 - SBRE AIRMET 1 VALID 200810/201210 SBRE - SBRE RECIFE FIR BKN CLD 400/1000FT FCST WI S1452 W04057 - S1452 W04052 - S1456 W04053 - S1455 W04058 - S1452 W04057 STNR NC= 2020102011 - Mensagem AIRMET de 'SBCW' para 20/10/2020 as 11(UTC) não localizada na base de dados da REDEMET"
                /*+                 escondeLoading();

                  "2020101800 - SBCW AIRMET 6 VALID 172350/180350 SBCW - SBCW CURITIBA FIR CNL AIRMET 4 172350/180350="+
                  "2020101800 - SBCW AIRMET 7 VALID 172350/180350 SBCW - SBCW CURITIBA FIR CNL AIRMET 3 180955/181355="
                */
                clearLayersAirmets()
                iniciaAirmetGlobalVars();
                trataAirmetRedemet(resposta);
                plotaAirmets(arrAirmetGeral, primeiraVez);

                AtualizaAirmetsAeroportos();

                let erroConexao = false
                try {
                    window.opener.BtnMetarGERALClick(false);
                } catch (e) {
                    erroConexao = true
                }
                if (erroConexao || !opener.smartPlotOnline) {
                    $("#h5Offline").show();
                    alert("Perda de conexão com o SMARTMETAR! Favor reabrir o SMARTPLOT através do link no site do SMARTMETAR!");
                } else
                    $("#h5Offline").hide();
                bringEditableToFront();
                bringCuttedToFront();
                escondeLoading("Airmet");
                atualizaHora();
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

function salvarAirmets() {//inserido manualmente
    //var airmetsBrutos  = $("#taGAMETS").val();
    //trataAirmetRedemet(airmetsBrutos);
}

function limpaAirmets() {
    $(".table-airmet").remove();
}



/*2020091103 - SBAZ AIRMET 1 VALID 11032ArrayNICA FIR BKN CLD 0500/0900FT FCST WI S0527 W06137 - S0614 W06140 - S0615 W06052 - 
S0520 W06051 - S0527 W06137 STNR NC= 202ArrayLID 111020/111310 SBAZ - SBAZ AMAZONICA FIR SFC VIS 2000M BR FCST WI S0219 W05909
 - S1207 W06115 - S1118 W06315 - S0205 W06205 - S0219 W05909 STNR NC= 
 2020091110 - SBAZ AIRMET 2 VALID 111020/111310 SBAZ - SBAZ AMAZONICA FIR OVC CLD 100/0900FT FCST WI S0219 W05909 - S1207 W06115 - S1118 W06315 - 
 S0205 W06205 - S0219 W05909 STNR NC= 
 2020091111 - SBAZ AIRMET 4 VALID 111120/111310 SBAZ - SBAZ AMAZONICA FIR OVC CLD 300/0900FT FCST WI S0442 W06508 - S0511 W06503 - S0512 W06539 - 
 S0441 W06542 - S0442 W06508 STNR NC= 
 2020091112 - SBAZ AIRMET 7 VALID 111220/111510 SBAZ - SBAZ AMAZONICA FIR SFC VIS 2000M BR FCST WI N0040 W06647 - S0437 W06359 - S1201 W06455 - 
 S1052 W06555 - S0941 W06541 - N0013 W06834 - N0040 W06647 STNR NC= 
 2020091112 - SBAZ AIRMET 6 VALID 111220/111510 SBAZ - SBAZ AMAZONICA FIR OVC CLD 300/0900FT FCST WI N0040 W06647 - S0437 W06359 - S1201 W06455 - S1052 W06555 - S0941 W06541 - N0013 W06834 - N0040 W06647 STNR NC= 2020091112 - SBAZ AIRMET 5 VALID 111220/111510 SBAZ - SBAZ AMAZONICA FIR SFC VIS 0500M FG FCST WI N0015 W06628 - S0058 W06606 - S0059 W06727 - N0013 W06736 - N0015 W06628 STNR NC= 2020091114 - SBAZ AIRMET 9 VALID 111405/111805 SBAZ - SBAZ AMAZONICA FIR OVC CLD 300/0900FT FCST WI N0111 W06653 - S1110 W05328 - S1408 W06033 - S1141 W06528 - S0945 W06528 - S0423 W07037 - N0111 W06653 STNR NC= 2020091114 - SBAZ AIRMET 8 VALID 111405/111805 SBAZ - SBAZ AMAZONICA FIR SFC VIS 0900M FU FCST WI N0111 W06653 - S1110 W05328 - S1408 W06033 - S1141 W06528 - S0945 W06528 - S0423 W07037 - N0111 W06653 STNR NC= 2020091118 - SBAZ AIRMET 10 VALID 111805/112105 SBAZ - SBAZ AMAZONICA FIR SFC VIS 2000M FU FCST WI S1013 W06527 - S1110 W05845 - S1347 W05923 - S1127 W06527 - S1013 W06527 STNR NC= 2020091120 - SBAZ AIRMET 11 VALID 112010/112105 SBAZ - SBAZ AMAZONICA FIR SFC VIS 2000M RA OBS AT 2000Z WI N0005 W05017 - S0235 W04315 - S0427 W04505 - S0312 W04746 - S0431 W04948 - S0305 W05118 - N0005 W05017 STNR NC= 2020091121 - SBAZ AIRMET 12 VALID 112105/120010 SBAZ - SBAZ AMAZONICA FIR SFC VIS 2000M HZ FCST WI S1009 W06532 - S1025 W06144 - S1248 W05924 - S1345 W06042 - S1131 W06543 - S1015 W06536 - S1009 W06532 STNR NC= 2020091100 - SBCW AIRMET 13 VALID 102140/110040 SBCW - SBCW CURITIBA FIR SFC VIS 2500M BR OBS AT 2130Z WI S2355 W04617 - S2356 W04618 - S2356 W04616 - S2355 W04615 - S2354 W04616 - S2355 W04617 STNR NC= 2020091103 - SBCW AIRMET 1 VALID 110305/110705 SBCW - SBCW CURITIBA FIR BKN CLD 0500/1000FT FCST WI S2328 W04642 - S2328 W04633 - S2339 W04637 - S2338 W04644 - S2328 W04642 STNR NC= 2020091110 - SBCW AIRMET 5 VALID 111028/111225 SBCW - SBCW CURITIBA FIR SFC VIS 2500M BR OBS AT 1000Z WI S2314 W04709 - S2250 W04617 - S2324 W04542 - S2357 W04644 - S2314 W04709 STNR NC= 2020091110 - SBCW AIRMET 4 VALID 111028/111225 SBCW - SBCW CURITIBA FIR SFC VIS 4000M BR OBS AT 1000Z WI S2240 W04454 - S2221 W04303 - S2312 W04250 - S2324 W04433 - S2240 W04454 STNR NC= 2020091110 - SBCW AIRMET 3 VALID 111028/111225 SBCW - SBCW CURITIBA FIR BKN CLD 400/1000FT OBS AT 1000Z WI S2752 W05240 - S2745 W05156 - S2834 W05158 - S2836 W05248 - S2752 W05240 STNR NC= 2020091110 - SBCW AIRMET 2 VALID 111028/111225 SBCW - SBCW CURITIBA FIR OVC CLD 400/1000FT OBS AT 1000Z WI S2930 W05135 - S2928 W05037 - S3018 W05040 - S3016 W05141 - S2930 W05135 STNR NC= 2020091112 - SBCW AIRMET 7 VALID 111225/111425 SBCW - SBCW CURITIBA FIR OVC CLD 400/1000FT OBS AT 1200Z WI S2930 W05135 - S2928 W05037 - S3018 W05040 - S3016 W05141 - S2930 W05135 STNR NC= 2020091112 - SBCW AIRMET 6 VALID 111225/111425 SBCW - SBCW CURITIBA FIR BKN CLD 600/1000FT OBS AT 1200Z WI S2932 W05349 - S2934 W05318 - S3001 W05324 - S2957 W05352 - S2932 W05349 STNR NC= 2020091116 - SBCW AIRMET 8 VALID 111615/111910 SBCW - SBCW CURITIBA FIR SFC VIS 3000M FU OBS AT 1600Z WI S1828 W05803 - S1825 W05711 - S1925 W05726 - S1918 W05822 - S1828 W05803 STNR NC= 2020091119 - SBCW AIRMET 9 VALID 111910/112310 SBCW - SBCW CURITIBA FIR SFC VIS 2500M FU OBS AT 1900Z WI S1828 W05803 - S1825 W05711 - S1925 W05726 - S1918 W05822 - S1828 W05803 STNR NC=
*/

function getAirmet(primeiraVez = false) {
    mostraLoading("Airmet");
    dini = "2020101800"
    dfim = "2020101815"
    let url = ""
    let interval = opener.getInterval(4)


    if (opener.redemetAntiga) {
        if (opener.intraer)
            url = opener.linkIntraer;
        else
            url = opener.linkInternet;

        //url = `${url}SBAZ,SBBS,SBRE,SBCW&msg=airmet&data_ini=${dataIni}&data_fim=${dataFim}`;
        url = `${url}SBAZ,SBBS,SBRE,SBCW&msg=airmet${interval}`;

    } else
        //var interval = `&data_ini=${dini}&data_fim=${dfim}`
        //var url = "https://www.redemet.intraer/api/consulta_automatica/index.php?local=SBAZ,SBBS,SBRE,SBCW&msg=airmet" + interval;
        url = `${opener.linkAPINova}airmet/?api_key=${opener.apiKey}${interval}`;


    GetWebContentAirmet(url, primeiraVez);
}

function makeIdxAirmet(airmet) {
    var aux = removeEspacos(airmet)
    var num = aux.split("VALID")[0]
    //console.log("num >", num)
    var val = getValidadeAirmet(airmet)
    return num + "-" + val
}

function getAirmetCNL(airmet) {
    let arrCnl = ["CNL AIRMET", "CANCEL AIRMET"]
    for (let i in arrCnl) {
        if (airmet.includes(arrCnl[i])) {
            var aux = airmet.split(arrCnl[i])[1]
            aux = aux.replace(" ", "-")
            return aux
        }
    }
    return ""
}
function trataCNL(xArray, xArrayIdx) {
    function trataIdx(idx) {
        idx = idx.split('-')
        try {
            idx[1] = parseInt(idx[1]) //elimina os zeros a esquerda
        } catch (e) {
            console.log('Erro ao tratar índice do sigmet')
        }
        return idx.join('-')

    }

    for (let i in xArray) {
        let msg = xArray[i]
        if (msg.tipo == "C") { //sigmet de cancelamento
            if (msg.texto.includes(" "))
                msg.texto = msg.texto.split(" ")[0]
            let cancelado = removeEspacos(msg.FIR + msg.texto)
            let idxCNL = xArrayIdx.indexOf(trataIdx(cancelado))
            if (idxCNL > -1)
                xArray[idxCNL].cancelado = true
        }
    }
}

function trataAirmetsCNL(xArray, xArrayIdx) {
    trataCNL(xArray, xArrayIdx)
}

function latLngToDegree(latlng) {
    latlng = removeEspacos(latlng)
    var latSign = 1
    if (latlng[0] == "S")
        latSign = -1
    var longSign = 1
    if (latlng.includes("W"))
        longSign = -1

    lat = parseFloat((parseInt(latlng.substr(1, 2)) + (latlng.substr(3, 2) / 60))) * latSign

    if (longSign == -1)
        latlng = latlng.split("W")[1]
    else
        latlng = latlng.split("E")[1]

    long = parseFloat((parseInt(latlng.substr(0, 3)) + (latlng.substr(3, 2) / 60))) * longSign
    return [long, lat] // obje)to d3 requer long, lat
}

function getCoordAirmet(airmet) {
    return formataCoordsExternas(airmet)
    /*    airmet = airmet.replace(" IN ", " WI ")
        if (airmet.includes(" MOV "))
            return airmet.split("WI ")[1].split(" MOV ")[0]
        if (airmet.includes(" STNR "))
            return airmet.split("WI ")[1].split(" STNR ")[0]*/
}

function isInside(poligono, ponto) {
    return d3.geoContains(poligono, ponto)
}

function getCoordDegAirmet(coord) {
    coord = removeEspacos(coord)
    coord = coord.split("-")
    for (var i in coord) {
        coord[i] = latLngToDegree(coord[i])
    }
    return coord
}

function getTipoAirmet(airmet) {
    if (airmet.includes("SFC VIS"))
        return "V"
    else if (airmet.includes("BKN CLD") || airmet.includes("OVC CLD"))
        return "N"
    else if (airmet.includes("SFC WIND"))
        return "W"
    else
        return ""

}


function trataAirmetRedemet(texto) {
    if (texto.includes("mens"))
        texto = opener.convertToRedemet(texto, "AIRMET")

    lastAirmet = texto + "" //var global
    var classe = "table-warning table-airmet";
    //limpaAirmets();
    texto = removeEspacosDuplos(texto);
    var agora = new Date();
    var horaAtual = agora.getHours()
    var erro = ""

    //var part1 = [0,0,0,0]
    var idx = 0;
    while (idx < arrayLocalidadeFIR.length) {

        //var airmet = texto.slice(arrayLocalidadeFIR[idx]+ " AIRMET");
        var airmet = texto.split(arrayLocalidadeFIR[idx] + " AIRMET");
        airmet = airmet.slice(1)
        for (var i in airmet) {//varre os airmets da fir
            airmet[i] = airmet[i].split("=")[0] // retira o que não pertence ao airmet

            //pega o codigo
            var idxAirmet = idx + "-" + makeIdxAirmet(airmet[i])

            let vencido = !checaValidadeAirmet(airmet[i]);

            if (vencido)
                continue;
            //pega o tipo e os dados do tipo
            //var cancelado = false
            var base = ""
            var vis = ""
            var tipo = ""
            var textoAirmet = ""
            var coord = ""
            var cnl = getAirmetCNL(airmet[i])
            var coordDeg = []
            if (cnl.length > 0) {
                tipo = "C" // c de cancelamento // deve marcar o cancelado apenas apos varrer o array
                textoAirmet = cnl.split(" ")
                textoAirmet = textoAirmet[0] + "-" + textoAirmet[1]
            } else {
                tipo = getTipoAirmet(airmet[i])
                coord = getCoordAirmet(airmet[i])

                if (coord == "")
                    continue;

                coordDeg = getCoordDegAirmet(coord)

                if (tipo == "N") {
                    textoAirmet = getCldAirmet(airmet[i])
                    base = getBaseNuvemAirmet(textoAirmet)
                } else if (tipo == "V") {
                    vis = getVisAirmet(airmet[i])
                    textoAirmet = getTxtVisAirmet(airmet[i])
                } else {
                    textoAirmet = getTxtAirmetGenerico(airmet[i])
                }

            }

            arrAirmetGeral.push({ codigo: idxAirmet, FIR: idx, tipo: tipo, base: base, visibilidade: vis, texto: textoAirmet, cancelado: false, coord: coord, coordDeg: coordDeg, locs: "" })
            arrIdxAirmetGeral.push(idxAirmet)
        }
        idx++;
    }
    trataAirmetsCNL(arrAirmetGeral, arrIdxAirmetGeral)

}

function airmetToGeoJSON(airmets) {
    var geoJ = { "type": "FeatureCollection", "features": [] }
    for (var i in airmets) {
        var ai = airmets[i]
        var coord = ai.coordDeg
        var nf = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [coord] }, "properties": ai }
        if (ai.tipo !== "C")
            geoJ.features.push(nf);
    }
    return geoJ
}

function latLngToArray(coord) {
    let arr = []
    for (let i in coord) {
        arr.push([coord[i].lat, coord[i].lng])
    }
    return arr
}

function layerToGeoJSON(layer) {
    var geoJ = { "type": "FeatureCollection", "features": [] }
    let ai = ""
    var coord = latLngToArray(layer.getLatLngs()[0])
    var nf = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [coord] }, "properties": ai }
    geoJ.features.push(nf);
    return geoJ
}

function checaPontoA(ponto) {
    let ret = false
    try {
        var gjLayer = L.geoJson(airmetToGeoJSON(arrAirmetGeral));
        ret = leafletPip.pointInLayer(ponto, gjLayer, false);
    } catch (e) {
        console.log("Erro ao checar ponto!")
    }
    return ret
}

function checaPontoEdit(ponto, layer) {
    /*    let a = layer.toGeoJSON()
      consulta =  leafletPip.pointInLayer(ponto, [a],true);*/
    let ret = false
    try {
        let gjLayer = L.geoJson(layerToGeoJSON(layer));
        let consulta = leafletPip.pointInLayer(ponto, gjLayer, true);
        ret = consulta.length == 1
    } catch (e) {
        console.log("Erro ao checar ponto!")
    }
    return ret
}


function checaPonto(ponto) { //"S1637 W04911"
    var my_point = latLngToDegree(ponto)
    return checaPontoA(my_point)
}
