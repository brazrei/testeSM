var intervalSigmet = false

function iniciaSigmetGlobalVars() {
    regSigmet = { codigo: "", FIR: 0, tipo: "", base: 0, visibilidade: 0, valIni: 0, valFin: 0, area: 0, cancelado: false, texto: "", coord: "", locs: "" }
    arrSigmetGeral = []
    arrIdxSigmetGeral = []
    arrSigmetsPlot = []
    arrIdxSigmetsPlot = []
    selectedSigmet = false

    arrayLocalidadeFIRSigmet = ['SBAZ', 'SBBS', 'SBRE', 'SBCW', 'SBAO']


    sigmetsBrutos = "";
    sigmets = []
    lastSigmet = ""
}

function checaValidadeSigmet(sigmet) {
    return checaValidadeAirmet(sigmet)
}

/*function getTxtVisSigmet(texto) {
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
*/
function getTxtSigmet(texto) {
    txt = removeEspacosDuplos(texto);
    txts = removeEspacos(texto);

    if (txts.indexOf("FIRTC") > -1) {
        strEnd = "TOP FL"
    } else if (texto.indexOf("OBS") > -1) {
        strEnd = "OBS";
    } else if (texto.indexOf("FCST") > -1) {
        strEnd = "FCST";
    } else
        strEnd = "WI"

    txt = texto.split(" FIR ")[1].split(strEnd)[0];
    
    return txt

    /*let fim = ""
    if (texto.includes("TOP"))
        fim = " TOP"
    else
        fim = " FL"
    fim = fim + texto.split(fim)[1] 
    return txt + " - " + fim */
}

function getBaseNuvemSigmet(nuvem) {
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


function getCldSigmet(texto) {
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

function mergeTooltipsSigmet(arrToolTips) { //junta as descrições de sigmets que estejam na mesma área

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

    var sep = "</br><div style='border-top:1px solid black; width:100%; height: 2px' ></div>"
    for (var i in arrSigmetsPlot) { // varre o array de poligonos
        for (var j = parseInt(i) + 1; j <= arrSigmetsPlot.length - 1; j++) {
            var bi = arrSigmetsPlot[i].getBounds();
            var bj = arrSigmetsPlot[j].getBounds();
            biCbj = bi.contains(bj);
            bjCbi = bj.contains(bi);
            if (biCbj && bjCbi) { //os dois sao iguais
                arrToolTips[i] = mergeArraysTTs(arrToolTips[i], arrToolTips[j], sep)
                arrToolTips[j] = arrToolTips[i]
                arrSigmetsPlot[i].setStyle({ //deixar o de trás sempre claro pra mostrar o hover do de cima
                    opacity: 0
                });
            } else if (bjCbi) { //bi dentro de bj // apaga e insere no mapa para ficar por cima
                map.removeLayer(arrSigmetsPlot[i]);
                arrSigmetsPlot[i].addTo(map);
            }
        }
    }
}

function destacaNumeroSigmet(texto) {
    return destacaNumeroAirmet(texto)
}

function getSigmetDescription(sigmet) {
    var fir = arrayLocalidadeFIRSigmet[sigmet.FIR]
    var cod = sigmet.codigo.substr(2).replace("-", " - VALID ")
    cod = destacaNumeroSigmet(cod)
    cod = destacaFimValidade(cod)
    var tipo = ""
    var cancelado = ""
    var texto = sigmet.texto
    if (sigmet.cancelado)
        cancelado = spanRed("*** CANCELADO ***") + " - "
    /*    if (sigmet.tipo == "N")
            tipo = " TROVOADA: "
        else if (sigmet.tipo == "I")
            tipo = " GELO: "
        else if (sigmet.tipo == "T") {
            tipo = " TURBULÊNCIA: "
        }
    */
    return "SIGMET " + cancelado + fir + " - N. " + cod + " - </br>" + spanRed(spanBold(texto))
}

function clearLayersSigmets() {
    if (arrSigmetsPlot)
        for (var i in arrSigmetsPlot)
            map.removeLayer(arrSigmetsPlot[i])

    arrSigmetsPlot.length = 0
    arrIdxSigmetsPlot.length = 0
}

function getColorSigmet(tipo) {
    if (tipo == "N") {
        return "red"
    } else if (tipo == "I") {
        return "#00BFFF"
        //return "#00FFFF"
    } else if (tipo == "T") {
        return "yellow"
    } else if (tipo == "TC") {
        return "#FFA600"
    }
}

function plotaSigmets(arr, primeiraVez) {

    //var groupPolygon;
    for (var i in arr) {
        a = arr[i]
        if ((a.tipo !== "C") && (!a.cancelado)) {//o sigmet de cancelamento nao eh plotado
            var poly = invertLatLong(a.coordDeg)
            //console.log("poly ==>", poly)
            color = getColorSigmet(a.tipo)
            let raio = a.raio*1000
            let opt = {
                className: "",
                color: color,
                fillColor: color,
                radius: raio
            }
            if (isCloseToValidOff(a.codigo))
                opt.className = "pulse";

            let p;
            if (a.tipo ==  "TC")
              p = L.circle(L.latLng(poly[0], poly[1]), opt).addTo(map);
            else
              p = L.polygon(poly, opt).addTo(map);
            p.bringToBack();

            p.bindTooltip(getSigmetDescription(a), { closeButton: false, sticky: true });
            if (a.cancelado)
                p.setStyle({
                    color: 'red',
                    fillOpacity: 0
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
            p.on('contextmenu', function (event) {
                selectedSigmet = event.target
                //selectedAirmet = false
                openContextMenuSigmet(event, event.target);
            }, this);

            p.on('mouseout', function (e) {
                this.setStyle({
                    opacity: 1,
                    fillOpacity: 0.2
                });
                setMenuMapaOn();
            });

            arrSigmetsPlot.push(p);
            arrIdxSigmetsPlot.push(a.codigo)
        }
    }

}

function getIdxSigmet(codigo) {
    return arrIdxSigmetGeral.indexOf(codigo)
}

function mostraSigmet() {
    if ($('#chkSigmet').prop('checked')) {
        getSigmet();
        intervalSigmet = setInterval("getSigmet()", 60000);
    } else {
        clearInterval(intervalSigmet)
        clearLayersSigmets()
        iniciaSigmetGlobalVars();

    }
}
function GetWebContentSigmet(url, primeiraVez) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var erro = "ErroSM=";
        if (this.status > 0) {
            if ((this.readyState == 4 && this.status == 200) && (this.responseText !== "")) {
                var resposta = this.responseText;

                clearLayersSigmets()
                iniciaSigmetGlobalVars();
                trataSigmetRedemet(resposta);
                plotaSigmets(arrSigmetGeral, primeiraVez);
                firBrasil.bringToBack();

                //AtualizaSigmetsAeroportos();
                bringEditableToFront();
                bringCuttedToFront();
                escondeLoading("Sigmet");
                atualizaHora("#clockSigmet");
                return resposta;
            } else if (this.readyState > 2 && this.status !== 200) {
                erro = erro + this.responseText;
                return erro;
            }

        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

function getSigmet(primeiraVez = false) {
    mostraLoading("Sigmet");
    dini = "2020101800"
    dfim = "2020101815"
    var interval = ""
    //var interval = `&data_ini=${dini}&data_fim=${dfim}`
    var url = "https://www.redemet.aer.mil.br/api/consulta_automatica/index.php?local=SBAZ,SBBS,SBRE,SBAO,SBCW&msg=sigmet" + interval;
    //  var url = "https://www.redemet.aer.mil.br/api/consulta_automatica/index.php?local=SBAZ,SBBS,SBRE,SBCW&msg=sigmet&data_ini="+dataIni+"&data_fim="+dataFim;

    GetWebContentSigmet(url, primeiraVez);
}

function getValidadeSigmet(text) {
    return getValidadeAirmet(text)
}


function makeIdxSigmet(sigmet) {
    var aux = removeEspacos(sigmet)
    var num = aux.split("VALID")[0]

    var val = getValidadeSigmet(sigmet)
    return num + "-" + val
}

function getSigmetCNL(sigmet) {
    let arrCnl = ["CNL SIGMET", "CANCEL SIGMET"]
    for (let i in arrCnl) {
        if (sigmet.includes(arrCnl[i])) {
            var aux = sigmet.split(arrCnl[i])[1]
            aux = aux.replace(/ /g, "-")
            let val = getValidadeSigmet(aux)
            aux = aux.split(val)[0] + val
            return aux
        }
    }
    return ""
}

function trataSigmetsCNL() {
    for (let i in arrSigmetGeral) {
        let sigm = arrSigmetGeral[i]
        if (sigm.tipo == "C") { //sigmet de cancelamento
            if (sigm.texto.includes(" "))
                sigm.texto = sigm.texto.split(" ")[0]
            let cancelado = removeEspacos(sigm.FIR + sigm.texto)
            let idxCNL = arrIdxSigmetGeral.indexOf(cancelado)
            if (idxCNL > -1)
                arrSigmetGeral[idxCNL].cancelado = true
        }
    }
}

function getCoordSigmet(sigmet) {
    return formataCoordsExternas(sigmet)
}

function getCoordDegSigmet(coord) {
    return getCoordDegAirmet(coord)
}

function getRaioTC(sigmet) {
    let aux = "KM OF TC"
    if (sigmet.includes(aux))
        return getNum((sigmet.split(aux)[0]).split("WI")[1])
    else
        return 0
}
function getTipoSigmet(sigmet) {
    if (sigmet.includes(" TS "))
        return "N"
    else if (sigmet.includes(" ICE "))
        return "I"
    else if (sigmet.includes(" TURB "))
        return "T"
    else if (sigmet.includes(" TC "))
        return "TC"
    else
        return ""

}


function trataSigmetRedemet(texto) {
    lastSigmet = texto + "" //var global
    //var classe = "table-warning table-sigmet";

    texto = removeEspacosDuplos(texto);
    var agora = new Date();
    var horaAtual = agora.getHours()
    var erro = ""

    //var part1 = [0,0,0,0]
    var idx = 0;
    //var arrayLocalidadeFIRSigMet = arrayLocalidadeFIR
    //arrayLocalidadeFIRSigMet.push("SBAO")
    while (idx < arrayLocalidadeFIRSigmet.length) {

        var sigmet = texto.split(arrayLocalidadeFIRSigmet[idx] + " SIGMET");
        sigmet = sigmet.slice(1)
        for (var i in sigmet) {//varre os sigmets da fir
            sigmet[i] = sigmet[i].split("=")[0] // retira o que não pertence ao sigmet

            //pega o codigo
            var idxSigmet = idx + "-" + makeIdxSigmet(sigmet[i])

            let vencido = !checaValidadeSigmet(sigmet[i]);

            if (vencido)
                continue;
            //pega o tipo e os dados do tipo
            //var cancelado = false
            var base = ""
            var vis = ""
            var tipo = ""
            var textoSigmet = ""
            var coord = ""
            var cnl = getSigmetCNL(sigmet[i])
            var coordDeg = []
            let raio = 0
            if (cnl.length > 0) {
                tipo = "C" // c de cancelamento // deve marcar o cancelado apenas apos varrer o array
                textoSigmet = cnl
            } else {

                try {
                    tipo = getTipoSigmet(sigmet[i])
                    if (tipo == "TC")
                        raio = getRaioTC(sigmet[i])
                        
                    coord = getCoordSigmet(sigmet[i])

                    coordDeg = getCoordDegSigmet(coord)
                    textoSigmet = getTxtSigmet(sigmet[i])
                } catch (e) {
                    console.log(e)
                }

            }

            if (!arrIdxSigmetGeral.includes(idxSigmet)){ 
              arrSigmetGeral.push({ codigo: idxSigmet, FIR: idx, tipo: tipo, raio: raio, base: base, visibilidade: vis, texto: textoSigmet, cancelado: false, coord: coord, coordDeg: coordDeg, locs: "" })
              arrIdxSigmetGeral.push(idxSigmet)
            }
         }
        idx++;
    }
    trataSigmetsCNL()

}

function sigmetToGeoJSON(sigmets) {
    return airmetToGeoJSON(sigmets)
}
