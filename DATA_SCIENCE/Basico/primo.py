def run():
  entrada = int(input('Ingresa un numero cualquiera: '))
  if (entrada ** 2) % 2 == 0:
    print ("no es primo")
  else:
    print ("es primo")

if __name__ == '__main__':
  run()


# def es_primo(numero):
#     for i in range(1, numero + 1):
#         valor = numero % i
#         if i == 1or i == numero:
#             continue
#         if valor == 0:
#             returnFalse
#         else:
#             returnTrue

# def run():
#   numero = int(input('Escribe un número: '))
#   if es_primo(numero):
#       print('Es primo')
#   else:
#       print('No es primo')

# if __name__ == '__main__':
#     run()