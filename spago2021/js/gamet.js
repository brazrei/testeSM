arrGametsPlot = []

function getGametArea(s) {
  function makeGametCoord(s, patt) {
    //patt = 
    a = s.match(patt)
    r = false
    if (a)
      r = a[0].split(' ')[2] + "00"


    return r
  }

  sof = 'N0740'
  eof = 'W07400'
  wof = 'W00950'
  nof = 'S3550'

  box = 'N0740 W07400 - N0740 W00950 - S3550 W00950 - S3550 W07400- N0740 W07400'
  box2 = 'lat1 lon1 - lat1 lon2 - lat2 lon2 - lat2 lon1 - lat1 lon1'

  pattLat1 = /S OF [SN]\d{2}/g
  pattLat2 = /N OF [SN]\d{2}/g
  pattLon1 = /E OF [W]\d{3}/g
  pattLon2 = /W OF [W]\d{3}/g

  lat1 = makeGametCoord(s, pattLat1)
  lat1 = lat1 ? lat1 : sof

  lat2 = makeGametCoord(s, pattLat2)
  lat2 = lat2 ? lat2 : nof

  lon1 = makeGametCoord(s, pattLon1)
  lon1 = lon1 ? lon1 : eof

  lon2 = makeGametCoord(s, pattLon2)
  lon2 = lon2 ? lon2 : wof

  box2 = box2.replaceAll('lat1', lat1)
  box2 = box2.replaceAll('lat2', lat2)
  box2 = box2.replaceAll('lon1', lon1)
  box2 = box2.replaceAll('lon2', lon2)
  return box2
}

function clearLayersGamets() {
  if (arrGametsPlot)
    for (var i in arrGametsPlot)
      map.removeLayer(arrGametsPlot[i])

  //removePopupsVencidos()
  arrGametsPlot = []//.length = 0
  //arrIdxSigmetsPlot.length = 0
}

function getColorGamet(tipo) {
  if (tipo == "VIS") {
    return "green"
  } else
    return "#f933ff"

}

function cutFIRGamet(coordG, tPolyFir, descricao) {
  //    let tPolyFir = [getCoordDegAirmet(coordFIR)]
  // let tPolyFir = coordFIR


  let polyFir = turf.polygon(tPolyFir)

  let polyEdit = turf.polygon([getCoordDegAirmet(coordG)]);

  let plotFirCut = turf.intersect(polyFir, polyEdit);

  if (plotFirCut) {

    let iCoord = getCutCoordinates(plotFirCut);
    if (iCoord.length == 1) //quando soh ha um poligono por fir a coordenada vem em formato diferente.
      iCoord = [iCoord]
    for (let i in iCoord) {
      iPoly = iCoord[i][0]
      let coord = invertLatLong(iPoly)
      return L.polygon(coord)
    }
    return false
  }
  return false
}


function plotaGamet(FIR, tipo, area, valor) {
  function getGametDescription(FIR, tipo, area, valor) {
    return `GAMET ${FIR} <br><br> Área: ${area}<br>${valor}`
  }

  let areaCoord = getGametArea(area)
  var poly = invertLatLong(getCoordDegSigmet(areaCoord))

  if (FIR == 'SBAZ')
    plotFir = firAZCoords
  else if (FIR == 'SBRE')
    plotFir = firRECoords
  else if (FIR == 'SBBS')
    plotFir = firBSCoords
  else if (FIR == 'SBCW')
    plotFir = firCWCoords



  let cut = cutFIRGamet(areaCoord, [(getCoordDegAirmet((plotFir)))], "")
  //console.log("poly ==>", poly)
  let color = getColorGamet(tipo)
  let opt = {
    className: "",
    color: color,
    fillColor: color
  }
  //if (isCloseToValidOff(a.codigo))
  //  opt.className = "pulse";

  let p;
  if (!cut)
    p = L.polygon(poly, opt).addTo(map)
  else
    p = cut.addTo(map)


  p.bringToBack();
  arrGametsPlot.push(p)

  let gametDesc = getGametDescription(FIR, tipo, area, valor)
  p.bindTooltip(gametDesc, { closeButton: false, sticky: true });

  p.on('mouseover', function (e) {
    // Set highlight
    this.setStyle({
      opacity: 0.5,
      fillOpacity: 0.8
    })
    setMenuMapaOff();
  });
  p.on('mouseout', function (e) {
    this.setStyle({
      opacity: 1,
      fillOpacity: 0.2
    });
    setMenuMapaOn();
  });



}


function plotaGamets() {
  clearLayersGamets()
  //arrGametsPlot = []

  opener.arrayGamets.forEach(gamet => {
    gamet.arrVisib.forEach(vis => {
      plotaGamet(gamet.FIR, 'VIS', vis.area, vis.valor)
      console.log(gamet.FIR + ' // ' + vis.area + ' // ' + vis.valor)

    })
    gamet.arrTeto.forEach(teto => {
      plotaGamet(gamet.FIR, 'TETO', teto.area, teto.valor)
      console.log(gamet.FIR + ' // ' + teto.area + ' // ' + teto.valor)

    })
  })
}
