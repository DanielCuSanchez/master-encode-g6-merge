
# def high (func):
#   func()

# def soyFuncion():
#   print("soyFuncion")


# high(soyFuncion)

# Filter, Map, Reduce


# Filter

lista = [1,4,5,6,9,13,19,21]
listaImpares = list(filter(lambda x: x%2 != 0, lista))
print("FILTER",listaImpares)


# Map

listaCuadrados = list(map(lambda x: x**2, lista))
print("MAP", listaCuadrados)


# Reduce

# el parametro a y b son los primeros 2 elementos de la lista en la primer iteración
# en la siguiente iteración a es el resultado de la primer multiplicación y b el siguiente elemento
from functools import reduce

listaReduce = [2,2,2,2]
# 2x2 = 4
# 4x2 = 8
# 8x2 = 16

listaMultiplicados = reduce(lambda a,b: a*b, listaReduce)

print("REDUCE", listaMultiplicados)