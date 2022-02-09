def run():
    LIMITE = 1000000
    contador = 0
    pontencia_2 = 2**contador
    while pontencia_2 < LIMITE:
        print(f'2 elevado a la {contador} es igual a {pontencia_2}')
        contador = contador + 1
        pontencia_2 = 2**contador

if __name__ == "__main__":
    run()