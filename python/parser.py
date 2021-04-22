import optparse

def inicializa():
  parser = optparse.OptionParser()

  parser.add_option('-e', '--estacao',
    action="store", dest="estacao",
    help="Indique a estação de onde será obtido o Indice K", default="83566")

  parser.add_option('-a', '--arquivo',
    action="store", dest="arquivo",
    help="Indique 'Sim' para obter dados do arquivo 'Não' para obter dados da internet", default="")

def parseStation():
  parser = optparse.OptionParser()

  options, args = parser.parse_args()

  return options.estacao

def parseFonte():
  parser = optparse.OptionParser()

  options, args = parser.parse_args()

  return options.arquivo

