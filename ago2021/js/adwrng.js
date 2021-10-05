var intervalAdWRNG = false
var arrayLocalidadeCMA = ["SBEG", "SBBR", "SBRF", "SBPA", "SBGL", "SBGR"]
var arrAdWRNGGeral = []
var arrIdxAdWRNGGeral = []


function isValidAdWRNG(ini, fim) {
    return isValidAirmet(ini, fim)
}

function makeIdxAdWRNG(aviso) {
    var aux = removeEspacos(aviso)
    var num = aux.split("VALID")[0].split("ADWRNG")[1]
    //console.log("num >", num)
    var val = getValidadeAdWRNG(aviso)
    return num + "-" + val
}

function getAdWRNGCNL(aviso) {
    let arrCnl = ["CNL AD WRNG", "CANCEL AD WRNG"]
    for (let i in arrCnl) {
        if (aviso.includes(arrCnl[i])) {
            var aux = aviso.split(arrCnl[i])[1]
            aux = aux.replace(" ", "-")
            return aux
        }
    }
    return ""
}

function getIniAdWRNG(hora) {
    //201200/201800
    return hora.substr(2, 2); 
}

function getFimAdWRNG(hora) {
    //201200/201800
    return hora.substr(9, 2);
}
function getValidadeAdWRNG(text) {
    return getValidadeAirmet(text)
}

function AdWRNGPertoDoFim(adWRNG) {
    let val = getValidadeAdWRNG(adWRNG);
    let ini = val.split("/")[0]
    let fim = val.split("/")[1]

    return isCloseToValidOff(ini, fim)
}

function checaValidadeAdWRNG(adWRNG) {

    let val = getValidadeAdWRNG(adWRNG);

    let ini = val.split("/")[0]
    let fim = val.split("/")[1]
    if ((ini !== "") && (fim !== ""))
        return isValidAdWRNG(ini, fim)
    else
        return false
}

function getTxtAdWRNG(texto) {
    try {
        texto = removeEspacosDuplos(texto);
        texto = texto.replace(/WPSD/g,"WSPD")
    
        texto = texto.split("VALID ")[1]
        texto = texto.split(" ").splice(1).join(" ") //retira a validade
        var strEnd = ""

        if (texto.indexOf("OBS") > -1) {
            strEnd = "OBS";
        } else if (texto.indexOf("FCST") > -1) {
            strEnd = "FCST";
        } else
            strEnd = "WI"
        texto = texto.split(strEnd)[0];
    } catch {
        texto = "ERRO"
    }
    
    return texto
}

function getVntAdWRNG(texto) {
    let vnt = getTxtAdWRNG(texto).split("MAX")
    //console.log(vis)
    return [getNum(vnt[0]), getNum(vnt[1])];
}


function atualizaLocAdWRNGs(busca, loc) {
    for (var i in busca) {
        cod = busca[i].feature.properties.codigo;
        var idx = getIdxAdWRNG(cod)
        var sep = ", "
        var oldLocs = arrAdWRNGGeral[idx].locs
        if (oldLocs == "")
            sep = ""
        arrAdWRNGGeral[idx].locs = oldLocs + sep + loc
    }
}



function getIdxAdWRNG(codigo) {
    return arrIdxAdWRNGGeral.indexOf(codigo)
}


function GetWebContentAdWRNG(url, primeiraVez) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var erro = "ErroSM=";
        if (this.status > 0) {
            if ((this.readyState == 4 && this.status == 200) && (this.responseText !== "")) {


                //$("#imgLoad"+idxCMA).attr('src', 'pngs/green-button30.png');
                let resposta = removeCacheMessage(this.responseText);

                //clearLayersAdWRNGs()
                //iniciaAdWRNGGlobalVars();
                arrAdWRNGGeral = []
                arrIdxAdWRNGGeral = []

                trataAdWRNGRedemet(resposta);

                //                escondeLoading("adWRNG");
                //                atualizaHora();
                return resposta;
            } else if (this.readyState > 2 && this.status !== 200) {
                erro = erro + this.responseText;
                //$("#imgLoad"+idxCMA).attr('src', 'pngs/red-button30.png');


                return erro;
            }

        }
    };
    
    const params = {
            url: url,
        }
    const urlCache = "php/consulta_msg.php?url=" + params.url;    
    xhttp.open('GET', urlCache, true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
}

function salvarAdWRNGs() {//inserido manualmente
    //var AdWRNGsBrutos  = $("#taGAMETS").val();
    //trataAdWRNGRedemet(AdWRNGsBrutos);
}

function limpaAdWRNGs() {
    $(".table-adWRNG").remove();
}




function getAdWRNG(primeiraVez = false) {
//    https://api-redemet.decea.mil.br/mensagens/metar/
    let url = ""
    let localidades = ""
    if (redemetAntiga) {
        if (intraer)
            url = linkIntraer;
        else
            url = linkInternet;
      url = `${url}SBEG,SBBR,SBRF,SBPA,SBGL,SBGR&msg=aviso_aerodromo`;
    } else {
      localidades = removeEspacos(localidadesFIR[0])+","+removeEspacos(localidadesFIR[1])+
        ","+removeEspacos(localidadesFIR[2]) + "," +removeEspacos(localidadesFIR[3]);
        url = `https://api-redemet.decea.mil.br/mensagens/aviso/${localidades}?api_key=${apiKey}`;
    }

    GetWebContentAdWRNG(url, primeiraVez);
}



function trataAdWRNGsCNL() {
    for (var i in arrAdWRNGGeral) {
        var adWRNG = arrAdWRNGGeral[i]
        if (adWRNG.tipo == "C") { //adWRNG de cancelamento
            if (adWRNG.texto.includes(" "))
                adWRNG.texto = adWRNG.texto.split(" ")[0]
            var cancelado = removeEspacos(adWRNG.CMA + adWRNG.texto)
            var idxCNL = arrIdxAdWRNGGeral.indexOf(cancelado)
            if (idxCNL > -1)
                arrAdWRNGGeral[idxCNL].cancelado = true
        }
    }
}


function getTipoAdWRNG(adWRNG) {
    if (adWRNG.includes("HVY"))
        heavy = "HVY "
    if (adWRNG.includes("SFC WSPD"))
        return "V1"
    else if (adWRNG.includes("SFC WIND"))
        return "V2"
    else
        return ""

}

function getLocsAdWRNG(aviso) {
    locs = aviso.split(" ")[1]
    return locs.split("/")
}

function getIdxCMA(aviso) {
    let cma = aviso.split(" ")[0]
    return arrayLocalidadeCMA.indexOf(cma)
}

function trataAdWRNGRedemet(texto) {
    //texto = "2021012512 - Mensagem Aviso de Aeródromo de 'SBEG' para 25/01/2021 as 12(UTC) não localizada na base de dados da REDEMET 2021012512 - Mensagem Aviso de Aeródromo de 'SBBR' para 25/01/2021 as 12(UTC) não localizada na base de dados da REDEMET 2021012512 - Mensagem Aviso de Aeródromo de 'SBRF' para 25/01/2021 as 12(UTC) não localizada na base de dados da REDEMET 2021012512 - Mensagem Aviso de Aeródromo de 'SBPA' para 25/01/2021 as 12(UTC) não localizada na base de dados da REDEMET 2021012512 - SBGL SBES AD WRNG 3 VALID 251123/251325 SFC WSPD 15KT MAX 25 OBS AT 1121Z NC= 2021012512 - SBGL SBMM/SBLB/SBES/SBCB AD WRNG 4 VALID 251240/251640 SFC WSPD 15KT MAX 25 FCST NC= 2021012512 - SBGL AD WRNG 5 VALID 251310/251640 CNL AD WRNG 4 VALID 251240/251640= 2021012512 - Mensagem Aviso de Aeródromo de 'SBGR' para 25/01/2021 as 12(UTC) não localizada na base de dados da REDEMET"
    if (texto.includes("mens")) { 
        texto = convertToRedemet(texto,"AD WRNG")
        texto = texto.replace(/ - /g," - SBGL ")
    }
    lastAdWRNG = texto + "" //var global
    

    texto = removeEspacosDuplos(texto);
    var agora = new Date();

    var idx = 0;

    //var adWRNG = texto.slice(arrayLocalidadeCMA[idx]+ " adWRNG");
    var adWRNG = texto.split(" - ");
    adWRNG = adWRNG.slice(1)
    //console.log(adWRNG.toString())
    for (var i in adWRNG) {//varre os AdWRNGs da CMA
        let idx = getIdxCMA(adWRNG[i])

        //pega o codigo
        var idxAdWRNG = idx + "-" + makeIdxAdWRNG(adWRNG[i])

        let vencido = !checaValidadeAdWRNG(adWRNG[i]);
        if (vencido)
            continue;

        //pega o tipo e os dados do tipo
        //var cancelado = false
        var tipo = ""
        var textoAdWRNG = ""
        var cnl = getAdWRNGCNL(adWRNG[i])
        let locs = getLocsAdWRNG(adWRNG[i])
        let vento = ""

        if (cnl.length > 0) {
            tipo = "C" // c de cancelamento // deve marcar o cancelado apenas apos varrer o array
            textoAdWRNG = cnl.split(" ")
            textoAdWRNG = textoAdWRNG[0] + "-" + getValidadeAdWRNG(cnl)
        } else {
            tipo = getTipoAdWRNG(adWRNG[i])
            textoAdWRNG = getTxtAdWRNG(adWRNG[i])
            if (tipo[0] == "V")
                vento = getVntAdWRNG(adWRNG[i])

        }

        arrAdWRNGGeral.push({ codigo: idxAdWRNG, CMA: idx, tipo: tipo, texto: textoAdWRNG, cancelado: false, locs: locs, vento: vento,textoFull: adWRNG[i].split("=")[0] })
        arrIdxAdWRNGGeral.push(idxAdWRNG)
    }
    trataAdWRNGsCNL()
    BtnMetarGERALClick(false)
}
