def tabla(numero):
    print('Esta es la tabla del ' + str(numero))
    for i in range(1,11):
        print(i*numero)


def run():
    menu = """
VAMOS A VISUALIZAR LAS TABLAS DE MULTIPLICAR
    Selecciona la tabla que quieras ver:
        a. tabla del 2
        b. tabla del 3
        c. tabla del 4
        d. tabla del 5
        e. tabla del 6
        f. tabla del 7
        g. tabla del 8
        h. tabla del 9

¿Qué tabla quires ver? Elige una opcion:
    """
    opcion = str(input(menu))

    if opcion == 'a':
        tabla(2)
    elif opcion == 'b':
        tabla(3)
    elif opcion == 'c':
        tabla(4)
    elif opcion == 'd':
        tabla(5)
    elif opcion == 'e':
        tabla(6)
    elif opcion == 'f':
        tabla(7)
    elif opcion == 'g':
        tabla(8)   
    elif opcion == 'h':
        tabla(9)
    else:
        print('esa no es una opcion')


if __name__ == '__main__':
    run()