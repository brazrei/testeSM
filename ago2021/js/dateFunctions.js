function getNum(str) {
    //return str.match(/\d+/) [0]
    return str.replace(/\D/g, '')
}


function isLinux() {
    return navigator.appVersion.indexOf("Linux") > -1
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

function isValidAirmet(ini, fim) {
    let interval = getFullDateValid(ini, fim)
    let agora = getUTCAgora()
    if ((agora >= interval[0]) && (agora <= interval[1])) {
        return true
    } else if (interval[0] > agora)
        return -1
    return false
}

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

    let dataInicial = new Date(agora.getUTCFullYear(), agora.getUTCMonth(), diaI, horaI, minI)
    let dataFinal = new Date(agora.getUTCFullYear(), agora.getUTCMonth(), diaF, horaF, minF)

    if (parseInt(diaF) < parseInt(diaI))
        dataFinal.setMonth(dataFinal.getMonth() + 1);
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
