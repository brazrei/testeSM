var arrayLocalidadeFIR = ["SBAZ", "SBBS", "SBRE", "SBCW"]
var gametsBrutos;
var gamets = []
lastGamet = ""


function GetWebContentGamet(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    var erro = "ErroSM=";
    if (this.status > 0) {
      if (this.readyState == 4 && this.status == 200) {
        //$("#imgLoad"+idxFIR).attr('src', 'pngs/green-button30.png');

        trataGametRedemet(this.responseText);

        return this.responseText;
      } else if (this.readyState > 2 && this.status !== 200) {
        erro = erro + this.responseText;
        //$("#imgLoad"+idxFIR).attr('src', 'pngs/red-button30.png');
        return erro;
      }
    }
  };
  //$(".imgLoad").attr('src', 'gifs/loading30x30.gif');
  xhttp.open('GET', url, true);
  xhttp.send();
}

function salvarGamets() {
  var gametsBrutos = $("#taGAMETS").val();
  trataGametRedemet(gametsBrutos);
}

function limpaGamets() {

  $(".table-warning").remove();
  $(".table-dark").remove();
  $(".cabecalho").remove();
}

function getValidadeGamet(gamet) {
  //VALID 201200/201800
  return gamet.split(" VALID ")[1].substr(0, 13);
}

function getIniGamet(hora) {
  //201200/201800
  return hora.substr(2, 2);
}

//L100 SECN I SFC WIND: 150/31KT N OF S06 160/32KT S OF S06 AND N OF S09

function getFimGamet(hora) {
  //201200/201800
  return hora.substr(9, 2);
}


function trataGametRedemet(texto) {
  //let visible = $('.tableGametContent').is(":visible") || lastGamet=="";
  let visible = true
  lastGamet = texto + ""
  var classe = "table-warning tableGametContent";
  if (texto.includes("mens")) {
    texto = convertToRedemet(texto);
  }

  limpaGamets();

  texto = removeEspacosDuplos(texto);
  //texto = "2021010922 - SBAZ GAMET VALID 091800/092400 SBGL - SBAZ AMAZONICA FIR BLW FL100SECN ISFC VIS: 3000M RASIGWX: ISOL TSSIG CLD: ISOL CB 2500/ABV 10000FT AGL 19/20 ISOL TCU 2300/ABV 10000FT AGLSIGMET APPLICABLE: X,X,XSECN IIPSYS: NILWIND/T: 2000FT 060/20 KT PS225000FT 080/25 KT PS1810000FT 090/25 KT PS09CLD: SCT CUSC 2000/6000FT AGLSCT ACAS 9000/ABV 10000FT AGLMNM QNH: 1008HPASEA: T29HGT 1.5MVA: NIL= 2021010922 - SBBS GAMET VALID 091800/092400 SBGL - SBBS BRASILIA FIR BLW FL100SECN ISFC VIS: 5000M RASIGWX: ISOL TSSIG CLD: ISOL CB 3500/ABV 10000FT AGLISOL TCU 3000/ABV 10000FT AGLSECN IIPSYS: NILWIND/T: 2000FT 360/10 KT PS255000FT 030/10 KT PS2010000FT 080/15 KT PS10CLD: SCT CUSC 3000/7000FT AGLSCT ACAS 8000/ABV 10000FT AGLFZLVL: ABV 10000FT AMSLMNM QNH: 1008HPAVA: NIL= 2021010922 - SBRE GAMET VALID 091800/092400 SBGL - SBRE RECIFE FIR BLW FL100SECN ISFC VIS: 5000M RASIG CLD: S OF S06 ISOL CB 3000/ABV 10000FT AGLISOL TCU 2500/ABV 10000FT AGLSIGMET APPLICABLE: X,X,XSECN IIPSYS: NILWIND/T: 2000FT 080/30 KT PS235000FT 090/25 KT PS1810000FT 120/15 KT PS09CLD: SCT CUSC 2500/7000FT AGLMNM QNH: 1007HPASEA: T27HGT 1.7MVA: NIL= 2021010922 - SBCW GAMET VALID 091800/092400 SBGL- SBCW CURITIBA FIR BLW FL100SECN ISFC VIS: N OF S26 5000M RASIGWX: N OF S26 ISOL TSSIG CLD: N OF S26 ISOL CB 3500/ABV 10000FT AGLN OF S26 ISOL TCU 3000/ABV 10000FT AGLSECN IIPSYS: NILWIND/T: 2000FT 100/15 KT PS205000FT 130/15 KT PS1710000FT 290/25 KT PS05CLD: FEW CUSC 3000/7000FT AGLSCT ACAS 9000/ABV 10000FT AGLFZLVL: ABV 10000FT AMSLMNM QNH: 1007HPASEA: T24HGT 1.3MVA: NIL= "
  var agora = new Date();
  var horaAtual = agora.getHours()
  var erro = ""
  var part1 = [0, 0, 0, 0]
  var idx = 0;
  while (idx < arrayLocalidadeFIR.length) {
    var gamet = texto.split(arrayLocalidadeFIR[idx] + " GAMET");
    if (gamet && gamet.length > 1) {
      //limpaArrayStatus(idx)

      gamet = gamet[1].split("=")[0]

      vis = "</br>" + getVisibHtml(gamet, idx)
      teto = "</br>" + getNuvensHtml(gamet, idx)
      var val = getValidadeGamet(gamet)
      var horaIniGamet = getIniGamet(val)
      var horaFimGamet = getFimGamet(val)


      if ((horaAtual < horaIniGamet) || (horaAtual >= horaFimGamet)) {

        classe = "table-dark";
        erro = " **** Gamet fora da Validade! **** "
        erro = spanRed(erro, erro)
        setTimeout("getGamet();", 5000)

      }
      let strStyle = ""
      if (!visible)
        strStyle = 'style="display:none"'

      str = erro + "GAMET VALID " + val + " " + arrayLocalidadeFIR[idx].toUpperCase() + " - " + vis + " - " + teto;
      $("#" + arrayTableFir[idx] + " thead").append('<tr class="' + classe + '" ' + strStyle + '><td><b>' + str + '</td><td></b></td><td></td><td></td><td></td></tr>');
      $("#" + arrayTableFir[idx] + " thead").append('<tr class="cabecalho"><td><b>Mensagem</b></td><td><b>Status AD WRNG</b></td><td><b>Status GAMET</b></td><td><b>Status AIRMET</b></td><td><b>CMA-1</b></td></tr>');

      if ((gamet.indexOf("VIS") == -1) && (part1[idx] == 0)) {
        part1[idx] = part1[idx] + 1;
        texto = texto.replace(arrayLocalidadeFIR[idx] + " GAMET", "") // se não tiver a parte 1, apaga a primeira ocorrência do gamet da fir
        idx = idx - 1;

      }
    }
    idx++;
  }
  if (!visible) {
    $('tableGametContent').fadeOut();
  }
}


function getGamet() {
  var agora = new Date();
  if (agora.getHours() < 6) {
    ini = "04"
    fim = "05"
  } else if (agora.getHours() < 12) {
    ini = "10"
    fim = "11"
  } else if (agora.getHours() < 18) {
    ini = "16"
    fim = "17"
  } else {
    ini = "22"
    fim = "23"
  }
  var dataIni = agora.getFullYear().toString() + fillZero(agora.getMonth() + 1) + fillZero(agora.getDate()) + ini;
  var dataFim = agora.getFullYear().toString() + fillZero(agora.getMonth() + 1) + fillZero(agora.getDate()) + fim;
  //  if (redemet)
//  var url = "https://www.redemet.intraer/api/consulta_automatica/index.php?local=SBAZ,SBBS,SBRE,SBCW&msg=gamet&data_ini=" + dataIni + "&data_fim=" + dataFim;
  var url = "https://api-redemet.decea.mil.br/mensagens/gamet/?api_key=U9Q2PoK6e5uhykrMXrsrGAQssG8htAnPIqXsxmei&"+"local=SBAZ,SBBS,SBRE,SBCW";

  /*  else
      url = "https://api-redemet.decea.gov.br/api/mensagens/gamet/" + "SBAZ,SBBS,SBRE,SBCW" + 
       "?api_key=U9Q2PoK6e5uhykrMXrsrGAQssG8htAnPIqXsxmei";
  
  */



  GetWebContentGamet(url);
}

