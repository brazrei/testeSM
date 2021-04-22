# Opening and Closing a file "MyFile.txt" 
# for object name file1. 
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

  campos = tempA.split()


  T850 = PositivoNegativo(float(campos[13][:3]))/10
  DEP850 = ConverteDEP (float(campos[13][3:]))

  PO850 = T850 - DEP850

  T500 = PositivoNegativo(int(campos[19][:3]))/10

  DEP700 = ConverteDEP (float(campos[16][3:]))

  K = T850 - T500 + PO850 - DEP700
  print ("T850 = ",T850)
  print ("DEP850 = ",DEP850)
  print ("PO850 = ","{:.2f}".format(PO850))
  print ("T500 = ",T500)
  print ("DEP700 = ",DEP700)
  return int(K)


