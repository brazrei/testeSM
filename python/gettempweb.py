import string
import urllib.request
import re 
import sys
from datetime import datetime,date,time

#local = parser.parseStation()
local = sys.argv[1]
d_ini = ""
d_fin = ""
url_base = "http://www.redemet.aer.mil.br"

def splitN(string, split_len):
    # Regex: `r'.{1}'` for example works for all characters
    regex = r'(.{%s})' % split_len
    return [x for x in re.split(regex, string) if x]


##CALCULA O INDICE K

def PositivoNegativo(num):
  if (num % 2) != 0:
    num = num * -1
  return num

def ConverteDEP(dep):

  if dep < 56:
    dep = dep / 10
  else:
    dep = dep - 50
  return (dep)

  

def CalculaK (tempA):
  #file1 = open("tempA.txt","r")
  #tempA = file1.readline()
  #file1.close() 

  campos = tempA


  T850 = PositivoNegativo(float(campos[1][:3]))/10
  DEP850 = ConverteDEP (float(campos[1][3:]))

  PO850 = T850 - DEP850

  T500 = PositivoNegativo(int(campos[7][:3]))/10

  DEP700 = ConverteDEP (float(campos[4][3:]))

  K = T850 - T500 + PO850 - DEP700
  print ("T850 = ",T850)
  print ("DEP850 = ",DEP850)
  print ("PO850 = ","{:.2f}".format(PO850))
  print ("T500 = ",T500)
  print ("DEP700 = ",DEP700)
  print ("")
  return round(K)


# PEGA O INDICE K 



# Por enquanto esta funcao apenas retira o COR, no caso do metar ser de correcao.
def trataMetar(metar):
  if len(metar) == 0: return ""
  metar = metar.split()
  if "COR" in metar: metar.remove("COR")
  return (" ".join (metar))

#Obtem o TEMP da redemet  
def getMetar(local, data_ini, data_fin):

  url = string.Template(url_base + "/api/consulta_automatica/index.php?local=$local&msg=temp&data_ini=$data_ini&data_fim=$data_fin")
  url_final = url.substitute({"local":local,"data_ini":data_ini, "data_fin":data_fin})
  metar = ""
  try: 
    metar = "".join(map(chr,urllib.request.urlopen(url_final).read() ))
  except:
    print ("Erro ao tentar obter o METAR da hora!")
  return  trataMetar ( metar ) 

#Obtem a a data e a hora do TEMP
def getDataHora(metar):
  return metar.split()[4]

#Retorna dia e Hora atuais
def getDiaHoraNow():
  agora = datetime.today()
  dia = agora.day
  hora = agora.hour
  return ("%02d%02d" % (dia,hora))

#Verifica se eh o METAR da Hora atual
def isUpdated(metar):
  dataHora = getDataHora(metar)
  dia = dataHora[0:2]
  hora = dataHora[2:4]
  return ((dia + hora) == getDiaHoraNow())

temp =  getMetar(local, d_ini, d_fin) 
tempA = temp.split("-")[1]

print (tempA.strip(" "))
print("")
#print ("Indice k =", CalculaK(tempA))

str1 = tempA.replace (" ","")
#str1 = str1.split("//////////")[2]
str1 = str1[59:]
str1 = str1.split("=")[0]
str1 = splitN(str1,5)
print("")
print ("Indice k =", CalculaK(str1))






