function exportaMetares(FIR) {
  var metares = $("#" + arrayTableFir[FIR]).html()
  if (smartPlot) {
    try {
      smartPlot.getMetaresFromPage();
    } catch (e) {
      console.log("SmartPlot ainda náo carregou!")
    }
  }

  saveToFile(metares, FIR);
}

function saveToFile(data, FIR) {
  //jsonString = JSON.stringify(data);
  $.ajax({
    url: 'php/saveMetar.php',
    data: { 'metares': data, 'ip': myIp, 'FIR': FIR },
    type: 'POST'
  });
}
