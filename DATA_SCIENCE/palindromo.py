def es_palindromo(palabra):
    palabra = palabra.replace(' ', '').lower()

    if palabra[::] == palabra[::-1]:
        return True
    else:
        return False


def run():
    palabra = input('Ingrese una palabra: ')
    if es_palindromo(palabra): #condicional e invocando una funcion
        print('Es palindromo')
    else:
        print('No es palindromo')



if __name__ == "__main__":
    run()