from random import randint


def sorteia() -> list[int]:
    lista: list[int] = []
    for c in range(0, 5):
        numero: int = randint(1, 10)
        lista.append(numero)
    print(f'Sorteando 5 valores da lista : {lista}')
    return lista


def somaPar(lis: list[int]) -> None:
    soma: int = 0
    for c in range(0, len(lis)):
        if lis[c] % 2 == 0:
            soma: int = soma + lis[c]
    print(f'Somando os valores pares de {lis} temos {soma}')


numeros: list[int] = sorteia()
somaPar(numeros)
