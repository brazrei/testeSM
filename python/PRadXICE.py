## Cria arquivo CSV
arquivo_EDT = "EDTData.txt"
arquivoEDT_CSV = "EDTData.csv"
import pandas as pd
import numpy as np
import os
os.system('cls')
os.system('clear')

def loadData (filename):
  return open(filename, 'r').read()
  
def tratarDataCSV(dados):
  dados = dados.split("*************************************************************************************************")[1]
  dados = "time" + dados.split("time")[1]
  dados = dados.replace ("	",",")
  dados = dados.replace (" ","").replace(",\n","\n")

  return dados

def gravaArquivoCSV (filename,dados):
  open(filename,"w").write(dados)


def leDadosCSV(filename):
  return pd.read_csv(filename).loc[:,["time","T","TD","P","Height"]]

def trataGelo(df):
  tempK = df["T"]

  tempC = tempK.mask((tempK>0), tempK-273.15)

  PO_K = df["TD"]

  PO_C = tempK.mask((PO_K>0), PO_K-273.15)

  df ["TempC"] = tempC

  df ["PO_C"] = PO_C

  df ["DEP"] = df["T"] - df["TD"]

  altura = df["Height"]
  altura = altura.mask(altura>0,altura/30)

  df ["FL"] = altura
  df['FL'] = df['FL'].map('{:,.0f}'.format)

  ng = df.loc[df["TempC"] <= 0].loc[df["TempC"] >= -10]

  conditions = [
    (ng['DEP'] >= 0) & (ng['DEP'] <=2),
    (ng['DEP'] > 2) & (ng['DEP'] <=4),
    (ng['DEP'] > 4) & (ng['DEP'] <=6)]

  choices = ['SEV', 'MOD', 'LEV']

  ng["GELO"] = np.select(conditions, choices, default='NIL')

  ng = ng.loc[:,["FL","TempC","PO_C","DEP", "GELO"]]
  ng = ng.set_index("FL")
  print (ng)
#  for line in df["T"]:
#    print(line)
  

dados = tratarDataCSV (loadData(arquivo_EDT))
gravaArquivoCSV(arquivoEDT_CSV, dados)

trataGelo (leDadosCSV(arquivoEDT_CSV))

