//sempre que for editados os poligonos gravar o cookie
//editableLayers._layers[23892]._tooltip._content.split('<br>')[0]

var editableLayers = false
var layersEditados = []
var selectedLayer
var latLngClicked
var disableCtrl = false
var timerCopiaCoords = null
var decMagnetica = 20

function updateSmartMetar() {
  window.opener.BtnMetarGERALClick(false, 'SP');
  setTimeout("window.opener.BtnMetarGERALClick(false,'');", 2000) //força a atualizacao dos gamets com a nova lista de metares
}

function fillZero(num) {
  //num = parseInt(num)
  if (Math.abs(num) < 10) {
    /*  if (num < 0)
        num = "0" + Math.abs(num)
      else*/
    num = "0" + Math.abs(num)
  }
  return num + ""
}

function deg_to_dms(deg) {
  let neg = ""
  if (deg < 0)
    neg = "-"
  deg = Math.abs(deg)
  var d = Math.trunc(deg);
  var minfloat = (deg - d) * 60;
  var m = Math.round(minfloat); //como nao ha definicao de segundos, podemos arredondar
  var secfloat = (minfloat - m) * 60;
  var s = Math.round(secfloat);
  // After rounding, the seconds might become 60. These two
  // if-tests are not necessary if no rounding is done.
  if (s == 60) {
    m++;
    s = 0;
  }
  if (m == 60) {
    d++;
    m = 0;
  }
  return neg + fillZero(d) + fillZero(m).replace("-", "");
}


function convertLat(lat) {
  lat = lat + ""
  if (lat.includes("-")) {
    lat = lat.replace(/-/g, "")
    lat = "S" + lat
  } else
    lat = "N" + lat
  return lat
}

function convertLng(lng) {
  lng = lng + ""
  if (lng.includes("-")) {
    lng = lng.replace(/-/g, "")
    lng = "W0" + lng
  } else
    lng = "E0" + lng
  return lng
}

function extractDMS(texto) {

  let coord = texto.split("[[[")[1]
  coord = coord.split("]]]")[0]
  coord = coord.split("],[")
  let newCoord = []
  //coord = coord.split(",")
  //console.log("coord", coord)
  //return coord

  for (let i in coord) {
    let latlng = coord[i].split(",")
    let lng = latlng[0]
    let lat = latlng[1]
    //console.log(lat)
    //console.log(lng)
    lat = deg_to_dms(lat)
    let newLat = convertLat(lat)
    lng = deg_to_dms(lng)
    let newLng = convertLng(lng)
    newCoord.push(newLat + " " + newLng)
  }
  return newCoord.join(" - ")
}

function copiaAutomatica() {
  return $("#chkCopiaAuto").prop("checked")
  //return false
}

function copyFromTextArea() {
  copiaCoordenadas($("#taCoordenadas").val(), true)

}

/*function pastToTextArea() {

  navigator.clipboard.readText()
    .then(text => {
      $("#taCoordenadas").val(text)
      $("#taCoordenadas").select()
    })
    .catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
}*/

function copiaCoordenadas(coord, copiaForcada = false) {

  if (copiaAutomatica() || copiaForcada) {
    var $tempElement = $("<input>");
    $("body").append($tempElement);
    $tempElement.val(coord).select();
    document.execCommand("Copy");
    $tempElement.remove();
  }
  $("#taCoordenadas").val(coord)
  $("#taCoordenadas").select()
  document.getElementById('taCoordenadas').dispatchEvent(new Event('input'))

  return coord
  //alert(coord);
}

function openLayerPopup(layer) {
  layer.openPopup();
}

function atualizaLayersEditados() {
  let l = editableLayers.getLayers()
  for (let i in l) {
    formataLayerEdit(l[i])
  }
}

function translateDrawBar() {
  L.drawLocal = {
    draw: {
      toolbar: {
        // #TODO: this should be reorganized where actions are nested in actions
        // ex: actions.undo  or actions.cancel
        actions: {
          title: 'Cancelar',
          text: 'Cancelar'
        },
        finish: {
          title: 'Salvar',
          text: 'Salvar'
        },
        undo: {
          title: 'Desfazer',
          text: 'Desfazer'
        },
        buttons: {
          polyline: 'Traçar uma Rota',
          polygon: 'Traçar um Polígono',
          rectangle: 'Traçar um Retângulo',
          circle: '- your text-',
          marker: '- your text-',
          circlemarker: '- your text-'
        }
      },
      handlers: {
        circle: {
          tooltip: {
            start: '- your text-'
          },
          radius: '- your text-'
        },
        circlemarker: {
          tooltip: {
            start: '- your text-.'
          }
        },
        marker: {
          tooltip: {
            start: '- your text-.'
          }
        },
        polygon: {
          tooltip: {
            start: 'Clique para Iniciar a Traçar seu Polígono.',
            cont: 'Clique para Continuar a Traçar seu Polígono.',
            end: 'Clique no Ponto Verde para Terminar.... ou Pressione <strong>"esc"</strong> para Cancelar.'
          }
        },
        polyline: {
          error: '<strong>Erro:</strong> Linhas não Podem se Cruzar!',
          tooltip: {
            start: 'Clique para Iniciar a Traçar sua Rota.',
            cont: 'Clique para Continuar a Traçar sua Rota.',
            end: 'Clique em Cancelar, ou Pressione <strong>"esc"</strong> para Terminar.'
          }
        },
        rectangle: {
          tooltip: {
            start: 'Clique para Iniciar a Traçar seu Retângulo.',
          }
        },
        simpleshape: {
          tooltip: {
            end: 'Release mouse to finish drawing.'
          }
        }
      }
    },
    edit: {
      toolbar: {
        actions: {
          save: {
            title: 'Salvar Alterações',
            text: 'Salvar'
          },
          cancel: {
            title: 'Cancelar edição, descartar todas as Alterações!',
            text: 'Cancelar'
          },
          clearAll: {
            title: 'Apagar todos os Polígonos!',
            text: 'Apagar tudo!'
          }
        },
        buttons: {
          edit: 'Editar Polígonos',
          editDisabled: 'Não há Polígonos para Editar',
          remove: 'Apagar Polígonos!',
          removeDisabled: 'Não Há Polígonos para Apagar!'
        }
      },
      handlers: {
        edit: {
          tooltip: {
            text: 'Drag handles or markers to edit features.',
            subtext: 'Click cancel to undo changes.'
          }
        },
        remove: {
          tooltip: {
            text: 'Clique em um Polígono para Apagá-lo!'
          }
        }
      }
    }
  };
}

function isEqualArr(arr1, arr2) { // compara dois arrays {lat lng}
  let igual = true
  if (arr1.length == arr2.length) {
    for (let i in arr1) {
      igual = igual && (arr1[i].lat == arr2[i].lat)
      igual = igual && (arr1[i].lng == arr2[i].lng)
    }
  } else
    return false
  return igual
}

function updateEditableLayers(layer) { // apaga se existir algum layer com as mesmas coordenadas do layer em questao
  edtLayers = editableLayers.getLayers()
  for (let i in edtLayers) {
    if (isEqualArr(edtLayers[i].getLatLngs()[0], layer.getLatLngs()[0])) {
      editableLayers.removeLayer(edtLayers[i])
    }
  }
  editableLayers.addLayer(layer);
}

function removeLayerEdit(layer, limpaCoord = false) {
  let isCutted = arrCutted.indexOf(layer)
  if (isCutted > -1) {
    arrCutted.pop(isCutted);
  }

  map.removeLayer(layer);
  editableLayers.removeLayer(layer);
  if (limpaCoord)
    $("#taCoordenadas").val("");

}

function setLayerStyleByVertices(layer) {
  let layerCoords = extractDMS(JSON.stringify(layer.toGeoJSON()))
  let color = '#333'
  let ret = true
  let xStripes
  if (!checaVertices(layerCoords.split('-'))) {
    ret = false
    color = 'red'
    xStripes = stripes
  }
  layer.setStyle({
    fillColor: "#111",
    color: color,
    fillPattern: xStripes,
    dashArray: '20, 20', dashOffset: '10'

  });

  return ret
}

function formataLayerEdit(layer, keepStyle = false) {

  var menuEdits = [{
    text: 'Excluir',
    callback: function () {
      console.log("excluir");
    }
  }]
  let layerCoords = extractDMS(JSON.stringify(layer.toGeoJSON()))

  let showMsgSAGITARIO = false
  if (!keepStyle) {
    showMsgSAGITARIO = !setLayerStyleByVertices(layer)
  }

  layer.setStyle({
    //    contextmenu: true,
    //    contextmenuItems: menuEdits
  });

  layer.on('contextmenu', function (event) {
    selectedLayer = event.target
    openContextMenuPoly(event, event.target);
  }, this);

  layer.on('click', function (event) {
    timerCopiaCoords = setTimeout(copiaCoordenadas, 800, layerCoords)
    //copiaCoordenadas()
    layer.openPopup();
  }, this);

  layer.on('dblclick', function (event) {
    clearInterval(timerCopiaCoords);
    removeLayerEdit(event.target, true)
    setMenuMapaOn();


  }, this);

  layer.on('edit', function (event) {
    if (layersEditados.indexOf(event.target) < 0)
      layersEditados.push(event.target)
  }, this);

  layer.on('mouseover', function (e) {
    this.setStyle({
      opacity: 1,
      fillOpacity: 0.7
    })
    map.doubleClickZoom.disable();
    setMenuMapaOff();

  });

  layer.on('mouseout', function (e) {
    this.setStyle({
      opacity: 1,
      fillOpacity: 0.2
    });
    map.doubleClickZoom.enable();
    setMenuMapaOn();

  });

  let locs = getAeroportosOnEdit(layer)
  if (locs == "")
    locs = " Nenhum"

  let coord = extractDMS(JSON.stringify(layer.toGeoJSON()))
  copiaCoordenadas(coord)
  coord = insereQuebraHTML("-", coord)
  let strHelp = "<br><br>Clique uma Vez para Copiar as Coordenadas desta Área!<br>" +
    "Duplo-Clique para Excluir esta Área!"
  let msgSAG = showMsgSAGITARIO ? "<br><br>" + spanBold(spanRed(msgErroSAGITARIO)) : ""
  let strPoints = spanBold("<br>Vértices: " + (layerCoords.split("-").length - 1))
  let desc = coord + "<br><br><b>Aeródromos na área plotada:<br>" + insereQuebraHTML(",", locs, 10) + "</b>" + spanRed(strHelp) + msgSAG + strPoints

  //layer.bindPopup(desc).openPopup();

  layer.bindTooltip(desc, { closeButton: false, sticky: true });

  updateEditableLayers(layer);

  $(".drawercontainer .drawercontent").html(
    JSON.stringify(editableLayers.toGeoJSON())
  );

  return layer
}

function makeMap() {
  //  Init Overlays
  var overlays = {};
  var aeroIntern = "SBBG* SBBE SBCF SBBV SBBR SBKP SBCG SBCR SBCZ SBCY SBCT SBFL SBFZ SBFI SBJP SBMQ SBEG SBNF SBPK SBPP SBPA SBPV SBRF SBRP* SBRB* SBGL SBSV SBSN SBSG SBSJ SBSP* SBVT* SBSL SBGR SBTT SBPB SBPL* SBPS* SBCB*	SBMO* SBMG*"

  //
  //Init BaseMaps
  basemaps = {
    "OpenStreetMaps": L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "osm.streets"
      }
    ),
    "GoogleMap": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.street"
      }
    ),
    "GoogleSatellite": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.satellite"
      }
    ),
    "GoogleHybrid": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.hybrid"
      }
    ),
    "Windy": L.tileLayer(
      "https://tiles.windy.com/tiles/v9.0/darkmap/{z}/{x}/{y}.png",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "osm.windy"
      }
    ),
    "Dark": L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }
    ),
    "Dark - Sem Legendas": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }
    )
  };

  //Map Options
  var mapOptions = {
    zoomControl: false,
    attributionControl: false,
    center: [-21.0529434318608, -48.01910972595218],
    zoom: 5,
    layers: [basemaps.OpenStreetMaps]
  };

  //Render Main Map

  map = L.map("map", mapOptions);

  //cria o stripPattern global
  stripes = new L.StripePattern();
  stripes.addTo(map);


  //Render Zoom Control
  L.control
    .zoom({
      position: "topleft"
    })
    .addTo(map);

  var sidebar = L.control
    .sidebar({
      autopan: true,
      container: "sidebar",
      position: "right"
    })
    .addTo(map);

  //Render Layer Control & Move to Sidebar
  var layerControl = L.control
    .layers(basemaps, overlays, {
      position: "bottomleft",
      collapsed: true
    })
    .addTo(map);


  var oldLayerControl = layerControl.getContainer();
  var newLayerControl = $("#layercontrol");
  $("#sidebar").hide();
  // newLayerControl.append(oldLayerControl);
  $(".leaflet-control-layers-list").prepend("<strong class='title'>Mapas Base</strong><br>");
  $(".leaflet-control-layers-separator").after("<br><strong class='title'>Camadas</strong>");

  //######## Leaflet Draw
  editableLayers = new L.FeatureGroup();
  layerControl.addOverlay(editableLayers, "Cosmetic Layer");
  map.addLayer(editableLayers);

  //
  translateDrawBar()
  var drawOptions = {
    position: "topleft",
    draw: {
      polyline: {
        metric: false,
        feet: false,
        nautic: true
      },
      polygon: {
        allowIntersection: false,
        showArea: true
      },
      poly: {
        allowIntersection: false,
      },
      circle: false, // Turns off this drawing tool
      circlemarker: false, // Turns off this drawing tool
      rectangle: true,
      marker: false
    },
    edit: {
      featureGroup: editableLayers, //REQUIRED!!
      remove: true,
      allowIntersection: false

    }
  };


  var drawControl = new L.Control.Draw(drawOptions);

  polygonDrawer = new L.Draw.Polygon(map, drawControl.options.polygon);
  polylineDrawer = new L.Draw.Polyline(map, drawControl.options.polyline);
  rectangleDrawer = new L.Draw.Rectangle(map);



  map.addControl(drawControl);

  map.whenReady(capturaBotaoPlotagem);
  map.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
      layer = e.layer;
    layer = formataLayerEdit(layer)
    //window.setTimeout(openLayerPopup,300,layer);
  });

  map.on('contextmenu', function (e) {
    if (menuMapa)
      openContextMenuMapa(e);

  });

  map.on(L.Draw.Event.EDITSTOP, function (e) {
    $(".drawercontainer .drawercontent").html(
      JSON.stringify(editableLayers.toGeoJSON())
    );
    atualizaLayersEditados();
  });

  map.on('draw:drawvertex',
    function (e) {
      function getLatLngFromLayer(arr) {
        let idx = arr.length - 1
        return { lat: arr[idx][1], lng: arr[idx][0] }
      }
      $(".leaflet-marker-icon.leaflet-div-icon.leaflet-editing-icon.leaflet-touch-icon.leaflet-zoom-animated.leaflet-interactive:first").css({ 'background-color': 'green' });
      $(".infoCoordinates").show();
      // if (globalLatlng)
      let coords = e.layers.toMultiPoint().geometry.coordinates
      latLngClicked = getLatLngFromLayer(coords)
      coords.push(" - INICIAL")
      !checaVertices(coords)

      disableCtrl = true
    });

  /*  map.on('draw:drawstart',
      function (e) {
      });
  */
  map.on('draw:drawstop',
    function (e) {
      $(".infoCoordinates").hide();
      disableCtrl = false
      globalLatlng = false
    });

  map.on(L.Draw.Event.DELETED, function (e) {
    editableLayers.eachLayer((layer) => {
      removeLayerEdit(layer);
    })
    $(".drawercontainer .drawercontent").html("");

  });
  map.on("dragstart",
    function (e) {
      if (polygonDrawer.enabled())
        polygonDrawer.deleteLastVertex()
    });
  //Edit Button Clicked
  $('#toggledraw').click(function (e) {
    layersEditados = []
    $(".leaflet-draw").fadeToggle("fast", "linear");

    $(".leaflet-draw-toolbar").fadeToggle("fast", "linear");
    this.blur();
    return false;
  });

  //Handle Map click to Display Lat/Lng
  function mouseOverMap(e) {
    function getAngle(orig, dest) {
      var point1 = turf.point(orig);
      var point2 = turf.point(dest);

      var bearing = turf.bearing(point1, point2);
      return (bearing + decMagnetica) % 360
    }
    globalLatlng = e.latlng
    $("#h5latlng").show();

    $("#h5latlng").html(convertLat(deg_to_dms(e.latlng.lat)) + " - " + convertLng(deg_to_dms(e.latlng.lng)));
    if (latLngClicked) {
      let angulo = getAngle([latLngClicked.lng, latLngClicked.lat], [e.latlng.lng, e.latlng.lat])
      if (angulo < 0)
        angulo = 180 + (180 + parseInt(angulo))
      if (angulo == 0)
        angulo = 360

      let distancia = getDistancia([latLngClicked.lng, latLngClicked.lat], [e.latlng.lng, e.latlng.lat])

      $("#h5angulo").html("Radial: " + Math.round(angulo) + "°");
      $("#h5distancia").html("Distância do Último Ponto: " + Math.round(distancia) + " Milhas");
    }

  }

  map.on('keydown', function (e) {
    //    if (e.originalEvent.ctrlKey && !polygonDrawer.enabled() && !disableCtrl)
    //      iniciarPlotagem(e)

    if (e.originalEvent.keyCode == 27)
      hideAll();

  });

  map.on('mouseout', function (e) {
    $("#h5latlng").hide();
  });

  map.on('mousemove', function (e) {
    mouseOverMap(e)
    //    if (e.originalEvent.ctrlKey && !polygonDrawer.enabled() && !disableCtrl)
    //      iniciarPlotagem(e)
  });

  map.on('click', function (e) {
    //   if (!polygonDrawer.enabled() && menuMapa)
    //     iniciarPlotagem(e)


  });

  map.on('zoomend', function (e) {
    //   if (!polygonDrawer.enabled() && menuMapa)
    //     iniciarPlotagem(e)
    if (groupMarkersHide) {
      if (map.getZoom() <= 5) {
        map.removeLayer(groupMarkersHide);
      }
      else {
        map.addLayer(groupMarkersHide);
      }
    }
  });

  //Handle Copy Lat/Lng to clipboard
  $('#latlng').click(function (e) {
    var $tempElement = $("<input>");
    $("body").append($tempElement);
    $tempElement.val($("#latlng").text()).select();
    document.execCommand("Copy");
    $tempElement.remove();
    alert("Copied: " + $("#latlng").text());
    $("#latlng").hide();
  });

  bringMapToFront(basemaps)

  return map;
}

function bringMapToFront(basemaps) {

  /*var topPane = map.createPane('leaflet-top-pane', map.getPanes().mapPane);
  topPane.appendChild(basemaps.Windy.getContainer());
  basemaps.Windy.setZIndex(5);  

  /*
  var layers = [];
  map.eachLayer( function(layer) {
      if( layer instanceof L.TileLayer ) {
          layer.bringToFront();
      }
  } );  */
}
function getDistancia(p1, p2) {
  var point1 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": p1
    }
  };
  var point2 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": p2
    }
  };
  var units = "miles";

  /*var points = {
    "type": "FeatureCollection",
    "features": [point1, point2]
  };*/

  return turf.distance(point1, point2, { units });
}
