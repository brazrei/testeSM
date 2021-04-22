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
  return pd.read_csv(filename).loc[:,["time","DD","FF","Height"]]

def trataVento(df):
  altura = df["Height"]
  altura = altura.mask(altura>0,altura/30)

  df ["FL"] = altura
  df['FL'] = df['FL'].map('{:,.0f}'.format)

  nv = df.loc[:,["Height","FL","DD","FF"]]

  nv['FF'] = nv['FF'].apply(lambda x: x*1.94384)
  nv['FF'] = nv['FF'].map('{:,.0f}'.format)


  nv.rename(columns={ nv.columns[3]: "FF(kt)" }, inplace = True)
  nv.rename(columns={ nv.columns[0]: "Altura" }, inplace = True)

  print("******* NIVEIS INFERIORES *******")
  print("")
  niveis = [800,900,1200,1500,1800,2100,2400,2700,3000]

  for nivel in niveis:
    idx = nv.loc[[nv.loc[nv['Altura'] > nivel, 'Altura'].idxmin()]]
    idx = idx.set_index("Altura")
    print(idx)

  print("")
  print("")
  print("******* NIVEIS SUPERIORES *******")
  print("")
  niveis = [9000,10200,11700]

  for nivel in niveis:
    idx = nv.loc[[nv.loc[nv['Altura'] > nivel, 'Altura'].idxmin()]]
    idx = idx.set_index("Altura")
    print(idx)

  print("")
  nv.rename(columns={ nv.columns[3]: "FF" }, inplace = True)
  nv = nv[(nv.FF.astype(int)) >= 60]
  nv.rename(columns={ nv.columns[3]: "FF(kt)" }, inplace = True)
  #nv['FF'] = nv['FF'].map('{:,.0f}'.format)
  if nv.empty == False: 
   print("******* NIVEIS COM VENTOS ACIMA DE 60KT *******")
   print (nv)
  else: print("******* NENHUM NIVEL COM VENTOS ACIMA DE 60KT *******")
#  print(nv.loc[nv['FF(kt)'] > 60.00, ["FL","Altura","DD","FF(kt)"]])

  print("")
  print("")

dados = tratarDataCSV (loadData(arquivo_EDT))
gravaArquivoCSV(arquivoEDT_CSV, dados)

trataVento (leDadosCSV(arquivoEDT_CSV))
