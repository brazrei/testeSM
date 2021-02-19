var editableLayers = false
var layersEditados = []

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
  deg = abs(deg)
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
  console.log("coord", coord)
  //return coord

  for (let i in coord) {
    let latlng = coord[i].split(",")
    let lng = latlng[0]
    let lat = latlng[1]
    console.log(lat)
    console.log(lng)
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
function copiaCoordenadas(coord) {

  if (copiaAutomatica()) {
    var $tempElement = $("<input>");
    $("body").append($tempElement);
    $tempElement.val(coord).select();
    document.execCommand("Copy");
    $tempElement.remove();
  }
  $("#taCoordenadas").val(coord)
  $("#taCoordenadas").select()
  return coord
  //alert(coord);
}

function openLayerPopup(layer) {
  layer.openPopup();
}

function atualizaLayersEditados() {
  for (let i in layersEditados) {
    formataLayerEdit(layersEditados[i])
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
            end: 'Clique no Primeiro ponto Para Terminar.'
          }
        },
        polyline: {
          error: '<strong>Erro:</strong> Linhas não Podem se Cruzar!',
          tooltip: {
            start: 'Clique para Iniciar a Traçar sua Rota.',
            cont: 'Clique para Continuar a Traçar sua Rota.',
            end: 'Clique no Último Ponto para Terminar.'
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

function formataLayerEdit(layer, keepStyle = false) {

  var menuEdits = [{
    text: 'Excluir',
    callback: function () {
      console.log("excluir");
    }
  }]


  if (!keepStyle) {
    layer.setStyle({
      fillColor: "#111",
      dashArray: '20, 20', dashOffset: '10'
    });
  }

  layer.setStyle({
    contextmenu: true,
    contextmenuItems: menuEdits
  });

  layer.on('click', function (event) {
    copiaCoordenadas(extractDMS(JSON.stringify(layer.toGeoJSON())))
    layer.openPopup();
  }, this);

  layer.on('dblclick', function (event) {
    map.removeLayer(event.target);
    editableLayers.removeLayer(event.target);

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

  });

  layer.on('mouseout', function (e) {
    this.setStyle({
      opacity: 1,
      fillOpacity: 0.2
    });
    map.doubleClickZoom.enable();

  });

  let locs = getAeroportosOnEdit(layer)
  if (locs == "")
    locs = " Nenhum"

  let coord = extractDMS(JSON.stringify(layer.toGeoJSON()))
  copiaCoordenadas(coord)
  coord = insereQuebraHTML("-", coord)
  let strHelp = "<br><br>Clique uma Vez para Copiar as Coordenadas desta Área!<br>" +
    "Duplo-Clique para Excluir esta Área!"
  let desc = coord + "<br><br><b>Aeródromos na área plotada:<br>" + insereQuebraHTML(",", locs, 10) + "</b>" + spanRed(strHelp)

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

  //
  //Init BaseMaps
  var basemaps = {
    "OpenStreetMaps": L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "osm.streets"
      }
    ),
    "Google-Map": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.street"
      }
    ),
    "Google-Satellite": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.satellite"
      }
    ),
    "Google-Hybrid": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.hybrid"
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
      position: "topright",
      collapsed: true
    })
    .addTo(map);


  var oldLayerControl = layerControl.getContainer();
  var newLayerControl = $("#layercontrol");
  $("#sidebar").hide();
  newLayerControl.append(oldLayerControl);
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
      polyline: true,
      polygon: {
        allowIntersection: false, // Restricts shapes to simple polygons
        drawError: {
          color: "#e1e100", // Color the shape will turn when intersects
          message: "<strong>Desculpe!<strong> Polígono não permitido!" // Message that will show when intersect
        }
      },
      circle: false, // Turns off this drawing tool
      circlemarker: false, // Turns off this drawing tool
      rectangle: true,
      marker: false
    },
    edit: {
      featureGroup: editableLayers, //REQUIRED!!
      remove: true
    }
  };


  var drawControl = new L.Control.Draw(drawOptions);
  map.addControl(drawControl);
  map.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
      layer = e.layer;
    layer = formataLayerEdit(layer)
    //window.setTimeout(openLayerPopup,300,layer);
  });

  map.on('contextmenu', function (e) {
    openContextMenu(e);
  });

  map.on(L.Draw.Event.EDITSTOP, function (e) {
    $(".drawercontainer .drawercontent").html(
      JSON.stringify(editableLayers.toGeoJSON())
    );
    atualizaLayersEditados();
  });

  map.on(L.Draw.Event.DELETED, function (e) {
    $(".drawercontainer .drawercontent").html("");
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
  map.on('click', function (e) {
    $("#latlng").html(e.latlng.lat + ", " + e.latlng.lng);
    //alert(e.latlng.lat + ", " + e.latlng.lng);
    $("#latlng").show();
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
  return map;
}

