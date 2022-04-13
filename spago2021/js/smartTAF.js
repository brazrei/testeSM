var tafsGrupoConsulta = "SBPA,SBCT,SBFI,SBFL,SBNF,SBPK,SBCO,SBSM,SBBG,SBNM,SBJV,SBBI,SBYS,SBAF,SBSC,SBAN,SBMN,SBCH,SBUG,SBPF,SBJA,SBGW,SBCC,SBCX,SBGP,SBLJ,SBPG,SNCP"
var arrayTAFs = []
var arrayProximosTAFs = []

var arrTAFSCimaer = []

arrTAFSCimaer.push({ indice: "24 HORAS, (00Z, 06Z, 12Z e 18Z) DIARIAMENTE", localidades: "SBPA, SBCT, SBFI, SBFL e SBNF" });
arrTAFSCimaer.push({ indice: "24 HORAS, (06Z, 12Z e 18Z) DIARIAMENTE", localidades: "SBPK" });
arrTAFSCimaer.push({ indice: "12 HORAS, (00Z, 06Z, 12Z e 18Z), DIARIAMENTE", localidades: "SBCO, SBSM, SBBG, SBNM, SBJV, SBBI, SBYS, SBAF, SBSC, SBAN, SBMN e SBCH" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z, 12Z e 18Z), DIARIAMENTE", localidades: "SBUG, SBPF, SBJA, SBGW e SBCC" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z, 12Z) SEG, TER, QUA, QUI e SEX", localidades: "SBCX" });
arrTAFSCimaer.push({ indice: "12 HORAS, (00Z, 06Z) SAB", localidades: "SBCX" });
arrTAFSCimaer.push({ indice: "12 HORAS, (00Z, 06Z e 12Z) DOM", localidades: "SBCX" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z, 12Z e 18Z) SEG, TER, QUA, QUI e SEX", localidades: "SBGP" });
arrTAFSCimaer.push({ indice: "12 HORAS, (12Z) SAB e DOM", localidades: "SBGP" });
arrTAFSCimaer.push({ indice: "12 HORAS, (12Z e 18Z) QUI, SEX e SAB", localidades: "SBLJ" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z, 12Z e 18Z) DOM", localidades: "SBLJ" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z, 12Z) DIARIAMENTE", localidades: "SBPG" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z, 12Z  e 18Z) SEX", localidades: "SBPG" });
arrTAFSCimaer.push({ indice: "12 HORAS, (06Z e 18Z) DIARIAMENTE", localidades: "SNCP" });

function getArrayLength(array) {
    let i = 0
    for (let c in array)
        i++
    return i

}

function isTAFCimaer(loc) {
    let achou = false;
    for (let i in arrTAFSCimaer) {
        achou = arrTAFSCimaer[i].localidades.includes(loc)
        if (achou)
            break;

    }
    return achou
}

function excluiTAFs(total, naRede) {
    let ausentes = []
    for (let i in total) {
        if (!naRede[total[i]])
            ausentes.push(total[i])
    }
    return ausentes;
}

function atualizaStatusConsultaTAF() {
    let qtdTAFsProxHoraNaRede = getArrayLength(arrayProximosTAFs) //tafs da proxima hora de envio obtidos da rede
    let tafsProxHora = getTAFsProximaHora();  // tafs que deveriam estar na proxima hora de envio
    let qtdTAFsProxHora = tafsProxHora.length;
    let agora = getUTCAgora()

    let dh = getHoraNextTAF()

    let ligarPulse = agora > dh.dataIni.addHours(-2) //dh é alterado na funcao addHours
    let ignorarAusentes = agora < dh.dataIni.addHours(-1)

    let arrAusentes = excluiTAFs(tafsProxHora, arrayProximosTAFs);
    let strAusentes = ""
    if (arrAusentes.length > 0)
        strAusentes = arrAusentes.join(', ');


    if (qtdTAFsProxHoraNaRede < qtdTAFsProxHora) {
        if (ignorarAusentes) {
            $(".statusTAF").hide()
            return false
        }
        $(".statusTAF").addClass("statusERRO")
        if (ligarPulse)
            $(".statusTAF").addClass("errorPulse")
        $(".statusTAF").removeClass("statusOK")
        $(".statusTAF").html(`TAF - ${dh.dia} ${dh.hora} - ${arrAusentes.length} AUSENTES`)
        $(".statusTAF").attr("title", `TAFs AUSENTES: ${strAusentes}`);
    } else {
        $(".statusTAF").addClass("statusOK")
        $(".statusTAF").removeClass("errorPulse")
        $(".statusTAF").removeClass("statusERRO")
        $(".statusTAF").html(`TAF - ${dh.dia} ${dh.hora}  - OK`)
        $(".statusTAF").attr("title", `${qtdTAFsProxHoraNaRede} TAFs ENCONTRADOS NA CONSULTA: ${tafsProxHora.join(", ")}`);
    }
    $(".statusTAF").show()


}

function getHoraNextTAF() {
    let days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]
    let inicio = new Date(new Date(getUTCAgora().addHours(1).setMinutes(0)).setSeconds(0));
    let hora
    while ((inicio.getHours() % 6) !== 0)
        inicio = inicio.addHours(1);
    hora = (inicio.getHours() < 10) ? "0" + inicio.getHours() : "" + inicio.getHours();

    return { dia: days[inicio.getDay()], hora: hora + "Z", dataIni: inicio }
}

function getTAFsProximaHora() {
    let dh = getHoraNextTAF()
    return getArrayTAFsHora(dh.dia, dh.hora)
}

function atualizaTAFS() { //atualiza os TAFs de hora em hora, na hora cheia.
    function removeRepetidos(str) {
        return [...new Set(str.split(','))].join(',');
    }
    getTAFs(removeRepetidos(getAeroInternacional() + ',' + tafsGrupoConsulta))
}

function verificaTAFS() { //atualiza os TAFs de hora em hora, na hora cheia.
    let dh = getHoraNextTAF()
    let locs = getTAFsProximaHora()

    getTAFs(locs, dh.dataIni)
}

function getArrayTAFsHora(diaSemana, hora) {
    function clearLocs(locs) {
        let patt = /[A-Z][A-Z][A-Z][A-Z]/g
        let arr = locs.match(patt)

        return [...new Set(arr)]; //remove repetidos
    }

    let locs = ""
    let separador = ""
    hora = hora.toUpperCase()
    diaSemana = diaSemana.toUpperCase()

    for (var i in arrTAFSCimaer) {
        let t = arrTAFSCimaer[i]
        indice = t.indice.toUpperCase()
        if (indice.includes(hora) && ((indice.includes("DIARIAMENTE") || indice.includes(diaSemana)))) {
            locs += separador + t.localidades
            separador = ","
        }

    }
    return clearLocs(locs)
}

function getAMDStatus(TAF) {
    let inicio = getBeginTAF(TAF)
    let fim = getEndTAF(TAF)
    let horaAtual = new Date()
    let dataZero = new Date(0)
    //let dif = horaAtual-inicio
    let horasValid = new Date(fim - inicio)

    if (isLinux()) {
        //addHours(new Date(dif), 3)
        addHours(dataZero, 3)
        addHours(horasValid, 3)
    }

    let prazoFinal = new Date(inicio)
    addHours(prazoFinal, (((horasValid.getDate() - 1) * 24) + horasValid.getHours()) / 6)

    let h = prazoFinal
    h = ('0' + h.getHours()).slice(-2) + ":" + ('0' + h.getMinutes()).slice(-2) + 'Z'
    return { permiteAMD: horaAtual <= prazoFinal, prazoFinal: h }
}

function chkVisMetarTAF(loc) {
    let msg = getMetarFromArrayMetaresGeral(loc)
    if (!msg || !msg.METAR)
        return true
    if (msg.METAR.visibilidade && msg.METAR.visibilidade < 5000) {
        if (msg.TAF && msg.TAF.achou && msg.TAF.visibilidade)
            return parseInt(msg.METAR.visibilidade) >= parseInt(msg.TAF.visibilidade)
    }

    return true
}

function chkTetoMetarTAF(loc) {
    let msg = getMetarFromArrayMetaresGeral(loc)
    if (!msg || !msg.METAR)
        return true
    if (msg.METAR.teto && Array.isArray(msg.METAR.teto) && (msg.METAR.teto[1] == "T") && (getNum(msg.METAR.teto[3]) * 100) < 1500) {
        if (msg.TAF && msg.TAF.achou && msg.TAF.teto && msg.TAF.teto.altura)
            return parseInt(getNum(msg.METAR.teto[3]) * 100) >= parseInt(msg.TAF.teto.altura)
    }

    return true
}

function getTAFFromLoc(loc, metar = false) {

    let dh = metar ? getMetarFullDateTime(metar) : new Date();
    if (arrayTAFs[loc]) {
        let statusAMD = getAMDStatus(arrayTAFs[loc].TAF)
        permiteAMD = statusAMD.permiteAMD
        prazoAMD = statusAMD.prazoFinal
        return { localidade: loc, TAF: arrayTAFs[loc].TAF, visibilidade: getVisPredHora(arrayTAFs[loc].TAF, dh), teto: getTetoHora(arrayTAFs[loc].TAF, dh), inicioValid: getBeginTAF(arrayTAFs[loc].TAF), fimValid: getEndTAF(arrayTAFs[loc].TAF), permiteAMD, prazoAMD }
    }
    else
        return { localidade: loc, TAF: false, visibilidade: false, teto: false };
}
function getTAFFromMetar(metar) {
    let loc = opener.getLocalidade(metar)
    return getTAFFromLoc(loc, metar)
}

function updateArrayMetarTAF() {
    if (typeof opener.arraygetTeste !== "function")
        return false
}

function getMetarDataHora(metar) {
    var patt = /\d{6}Z/;
    var t1 = metar.match(patt);
    if (t1 && t1.length > 0)
        return t1[0]
    else
        return str

}

function metarDH2FullDateTime(dh) {
    let hora = dh.substr(2, 2)
    let agora = new Date();

    return new Date(agora.getUTCFullYear(), agora.getUTCMonth(), agora.getUTCDate(), hora)
}

function getMetarFullDateTime(metar) {
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

                        teto = arrChange[i].MeteorologicalAerodromeForecast.changeIndicator == "BECOMING" ? ((teto.altura <= auxTeto.altura && teto.qtd > 4) || (teto.altura > auxTeto.altura && auxTeto.qtd < 5) ? teto : auxTeto) : auxTeto
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
    txt = txt.replace(/iwxxm:/g, "").replace(/gml:/g, "").replace(/aixm:/g, "").replace(/xlink:/g, "").replace(/{"TAF/g, separator + '{"TAF')
    //if (!txt.includes(separator))
    //    txt = [txt]

    return txt.split(separator).splice(1)
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

    if (!tafMAF || !tafMAF.cloud || !tafMAF.cloud.AerodromeCloudForecast)
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

function getTAFs(localidades = false, dataIni = false) {
    //mostraLoading("TAFs");
    let url = ""

    let interval
    if (!(opener.getIntervalTAF && opener.getInterval))
        return false
    if (!dataIni)
        interval = opener.getInterval(5)
    else
        interval = opener.getIntervalTAF(dataIni)

    url = opener.linkInternetIWXXM;

    localidades = !localidades ? tafsGrupoConsulta : localidades;
    url = `${url}&local=${localidades}&msg=taf${interval}`;

    GetWebContentTAF(url, false);
}

function updateArrayStatus(localidade, status) { // retorna true se o status mudou
    /*   var i = globalArrayLocStatus.indexOf(localidade);
       if (i > -1) {
         globalArrayLocStatus
       } 
    */
}

function excluiTAFsAntigos(arr) {
    let arr2 = []
    for (let i in arr) {
        if (arr[i].inicio > getUTCAgora())
            arr2[arr[i].localidade] = arr[i]
    }
    return arr2 //retorna o valor como referencia
}

function atualizaArrayTAFs(texto) {
    let TAFs = clearMsgIWXXM(texto)
    arrayProximosTAFs = excluiTAFsAntigos(arrayProximosTAFs);
    let tafsProxHora = getTAFsProximaHora();  // tafs que deveriam estar na proxima hora de envio

    for (let i in TAFs) {
        TAFs[i] = JSON.parse(TAFs[i]);
        let loc = getICAOIndicator(TAFs[i])

        let dados = { TAF: TAFs[i], localidade: loc, inicio: getBeginTAF(TAFs[i]), getVisPredHora: getVisPredHora, getTetoHora: getTetoHora }
        if (getBeginTAF(TAFs[i]) > getUTCAgora()) {
            if (tafsProxHora.indexOf(loc) > -1)
                arrayProximosTAFs[loc] = dados
            continue;
        }
        arrayTAFs[loc] = dados

    }
}

function GetWebContentTAF(url, primeiraVez) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var erro = "ErroSM=";
        if (this.status > 0) {
            if ((this.readyState == 4 && this.status == 200) && (this.responseText !== "") && (!this.responseText.includes("Forbidden"))) {


                //$("#imgLoad"+idxFIR).attr('src', 'pngs/green-button30.png');
                let resposta = opener.removeCacheMessage(this.responseText);

                atualizaArrayTAFs(resposta);
                atualizaStatusConsultaTAF();

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
