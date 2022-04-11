function setMenuMapaOff() {
    menuMapa = null

}

function setMenuMapaOn() {
    menuMapa = menuMapaBackup
}

function compartilharLayer(layer)  { 
    let send = prompt("Descrição da Plotagem: ")
    if (send)
        enviarPlotagem(layer,send);
}

function capturaBotaoPlotagem() {
    function removeEvents(elem) {
        var old_element = document.getElementsByClassName(elem)[0]
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
    }

    let rect = 'leaflet-draw-draw-rectangle'
    let poly = 'leaflet-draw-draw-polygon'

    removeEvents(rect)
    removeEvents(poly)
    document.getElementsByClassName(rect)[0].onclick = function (evt) {
        rectangleDrawer.enable();
        console.log("inciou retangulo")
        return false;//Returning false prevents the event from continuing up the chain
    };

    document.getElementsByClassName(poly)[0].onclick = function (evt) {
        polygonDrawer.enable();
        console.log("inciou polygon")
        return false;//Returning false prevents the event from continuing up the chain
    };
}



function iniciarPlotagem(e, retangulo = false) {
    mapEvent = (e) => {
        var e = document.createEvent('Event');
        let tipo
        if (retangulo)
            tipo = 'leaflet-draw-draw-rectangle'
        else
            tipo = 'leaflet-draw-draw-polygon'

        e.initEvent('click', true, true);
        var cb = document.getElementsByClassName(tipo);
        return !cb[0].dispatchEvent(e);

    };

    mapEvent(e);

}

function makeCancelTextSigmet(sigmet) {
    let tip = sigmet.getTooltip().getContent();
 //   tip = msg
    tip = tip.replace(/<b>/g,"")
    tip = tip.replace(/<\/b>/g,"")
    tip = tip.replace(/ - N. /g,"")
    tip = tip.replace(/SBAZ/g,"")
    tip = tip.replace(/SBBS/g,"")
    tip = tip.replace(/SBCW/g,"")
    tip = tip.replace(/SBRE/g,"")
    tip = tip.replace(/SBAO/g,"")
    tip = tip.replace(/- VALID /g,"")
    tip = tip.split(" - ")[0]

    return "CNL " + tip
}

function createPopUpMenu() {

    menuPoly = new ContextMenu(
        {
            'theme': 'default',
            'items': [
                { 'icon': '', 'name': 'Separar Área por FIR', action: () => cutPlotFIRs(selectedLayer) },
                { 'icon': '', 'name': 'Remover Áreas Sobrepostas', action: () => cutPlotSobr(selectedLayer) },
                /*                { 'icon': '', 'name': 'Unir Áreas Adjacentes', action: () => joinPolys(selectedLayer) },
                                { 'separator' : ''},
                */
                /*{
                    'icon': '', 'name': 'Editar', action: () => {
                        $(".leaflet-draw-edit-edit").trigger('click');
                    }
                },*/
                {
                    'icon': '', 'name': 'Aviso de Aeródromo', action: () => {
                        createAdWrng(selectedLayer);
                    }
                },
                {
                    'icon': '', 'name': 'Excluir', action: () => {
                        removeLayerEdit(selectedLayer, true);
                    }
                },

/*                {
                    'icon': '', 'name': 'Plotar nova Área', action: (e) => {
                        iniciarPlotagem(e);
                    }

                }
*/
            ]
        }
    );

    menuMarker = new ContextMenu(
        {
            'theme': 'default',
            'items': [
                { 'icon': '', 'name': 'Plotar Área Airmet', action: () => plotarAreaLocalidade(selectedMarker) }


            ]
        }
    );

    menuSigmet = new ContextMenu(
        {
            'theme': 'default',
            'items': [
                { 'icon': '', 'name': 'Criar Texto de Cancelamento', action: () => copiaCoordenadas(makeCancelTextSigmet(selectedSigmet)) },
                { 'icon': '', 'name': 'Enviar para Trás', action: () => selectedSigmet.bringToBack() }


            ]
        }
    );
/*
    menuAirmet = new ContextMenu(
        {
            'theme': 'default',
            'items': [
                { 'icon': '', 'name': 'Criar Texto de Cancelamento', action: () => copiaCoordenadas(makeCancelTextSigmet(selectedSigmet)) },
                { 'icon': '', 'name': 'Enviar para Trás', action: () => selectedSigmet.bringToBack() }


            ]
        }
    );
*/
    menuMapa = new ContextMenu(
        {
            'theme': 'default',
            'items': [
                {
                    'icon': '', 'name': 'Plotar Polígono Qualquer', action: (e) => {
                        iniciarPlotagem(e)
                    }
                },
                {
                    'icon': '', 'name': 'Plotar Retângulo', action: (e) => {
                        iniciarPlotagem(e, true)
                    }
                }]
        }
    );
    menuMapaBackup = menuMapa

}

function hideMenu(menu) {
    if (menu)
        menu.hide();
}

function hideAll() {
    hideMenu(menuPoly);
    hideMenu(menuSigmet);
    hideMenu(menuMarker);
    hideMenu(menuMapa);
    hideMenu(menuMapaBackup);
}

function openContextMenuPoly(evt) {
    //evt.preventDefault();
    const time = menuPoly.isOpen() ? 100 : 0;
    hideAll();

    setTimeout(() => { menuPoly.show(evt.containerPoint.x, evt.containerPoint.y) }, time);
    document.addEventListener('click', hideContextMenu, false);
}

function openContextMenuSigmet(evt) { //sigmet e airmet
    //evt.preventDefault();
    const time = menuSigmet.isOpen() ? 100 : 0;
    hideAll();

    setTimeout(() => { menuSigmet.show(evt.containerPoint.x, evt.containerPoint.y) }, time);
    document.addEventListener('click', hideContextMenu, false);
}


function hideContextMenu(evt) {
    hideAll();
    document.removeEventListener('click', hideContextMenu);
}

function openContextMenuMarker(evt) {
    //evt.preventDefault();
    const time = menuMarker.isOpen() ? 100 : 0;

    hideAll();
    setTimeout(() => { menuMarker.show(evt.containerPoint.x, evt.containerPoint.y) }, time);
    document.addEventListener('click', hideContextMenu, false);
}


/*function hideContextMenuMarker(evt) {
    menuMarker.hide();
    document.removeEventListener('click', hideContextMenu);
}*/

function openContextMenuMapa(evt) {
    //evt.preventDefault();
    const time = menuMapa.isOpen() ? 100 : 0;

    hideAll();
    setTimeout(() => { menuMapa.show(evt.containerPoint.x, evt.containerPoint.y) }, time);
    menuMapaBackup = menuMapa

    document.addEventListener('click', hideContextMenu, false);
}

function createAdWrng(layer){
    let locs = getAeroportosOnEdit(layer)

    let patt = /[A-Z][A-Z][A-Z][A-Z]/g
    let arr = locs.match(patt)
    let arrCMA=[]
    let newLine = "\t"
    if (arr.length > 0) {
        let cont = 0
        
        for (let i in arr){
            cont++;
            cma = opener.getCMA(arr[i])
            cma = cma !=="" ? cma:"DESCONHECIDO"
            newLine= arrCMA[cma] ? ((arrCMA[cma].split("\t").length % 5 == 0)?"\t\n":"\t"):"\t"

            arrCMA[cma] = arrCMA[cma]?arrCMA[cma] + newLine + arr[i] : arr[i]; 
        }
    }
    
    let str = ""
    for (let i in arrCMA){

        str += `CMA (${i}):\n` + arrCMA[i]+"\n\n"

    }
      
    $('#taModalAdWrng').val(str);
    $('#modalAdWrng').modal();
    
}


/*function hideContextMenuMapa(evt) {
    menuMapa.hide();
    document.removeEventListener('click', hideContextMenuMapa);
}*/
