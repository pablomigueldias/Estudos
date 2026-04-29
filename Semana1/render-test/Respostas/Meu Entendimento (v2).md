# Meu Entendimento (v2)

## Quando você digita no input "P":

1. setName('P') é chamado
   Isto causa: Ele é altera e renderiza toda a função

2. Isto faz com que o componente Parent:
   Ele re-renderiza novamente

3. Quando Parent re-renderiza, a linha <Child /> também:
   a child tambem re-renderiza

4. Por isso Child renderiza: [sua explicação]
pq ele esta junto com o parent entao se renderiza o child tambem vai, toda a função renderiza
