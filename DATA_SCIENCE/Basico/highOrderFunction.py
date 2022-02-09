def high (funcion):
  funcion()

def soyFuncion():
  print("Soy la funcion del interior")


# high(soyFuncion)

# Filter, Map, Reduce


# Filter

lista = [1,4,5,6,9,13,19,21]
listaImpares = list(filter(lambda x: x % 2 != 0, lista))
listaPares = list(filter(lambda elemento: elemento % 2 == 0,lista ))


print("FILTER_IMPARES",listaImpares)
print("FILTER_PARES",listaPares)


# Map
listaNueva = [1,2,3,4,5,6]
listaCuadrados = list(map(lambda x: x**2, listaNueva))
print("MAP", listaCuadrados)


# Reduce

# el parametro a y b son los primeros 2 elementos de la lista en la primer iteración
# en la siguiente iteración a es el resultado de la primer multiplicación y b el siguiente elemento
from functools import reduce

listaReduce = [12,3,32,52,65,85,7]
# 2x2 = 4
# 4x2 = 8
# 8x2 = 16

listaMultiplicados = reduce(lambda a,b: a - b, listaReduce )

print("REDUCE_MULT", listaMultiplicados)