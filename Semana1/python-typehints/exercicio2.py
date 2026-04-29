# faça um programa que tenha uma função chamada ficha(), que receba dois parametros opcionais:
# o nome de um jogador e quantos gols ele marcou.
# o programa deverá ser capaz de mostrar a ficha do jogador, mesmo que algum dado nao tenha sido formado corretamente

def ficha(nome: str = '<desconhecido>', gols: int = 0) -> None:
    print(f'O jogador {nome} fez {gols} gols(s) no campeonato.')


nome: str = str(input('Nome do jogador: '))
gols_st: str = str(input('Numero de gols: '))

if nome.strip() == '':
    nome = '<desconhecido>'
if gols_st.isnumeric():
    gols: int = int(gols_st)
else:
    gols: int = 0

ficha(nome, gols)
