## Meu Entendimento

### O que significa "parâmetros opcionais"?
pois voce deixa uma opção ja opcional quando e função for chamada

### Como tornar um parâmetro opcional?
coloque o paramento coloca o simbolo de igual de receber e coloca o dado sendo str ou int

### Qual é a diferença entre:
def ficha(nome: str, gols: int):
    ...

E:

def ficha(nome: str = '<desconhecido>', gols: int = 0):
    ...

a primeira opção voce tem que colocar os parametros se da erro na função por falta de dados ja o segundo ja tem vamos dizer uma pré dado se nada for adicionado vai ser executado aquele parametro opcional

### Por que não usar gols: str = int(gols)?
pq eu tenho que fazer a variavel receber a conversão nao consigo converter a propria variavel usando ela mesma