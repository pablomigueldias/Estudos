# Meu Entendimento de React Render

## Teste 1: Digitar no Input
Quando digito "Pablo":
- Parent renderiza? SIM
- Child renderiza? SIM
- Por quê Child renderiza se count não mudou?

pq o count ja tem um valor entao sempre vai chamar a função e o console esta na função

## Teste 2: Clicar no Botão
Quando clico Count:
- Parent renderiza? SIM
- Child renderiza? SIM
- Por quê?

ele renderiza pq quando passa pela linha onde esta chamando o child ele ta usando a prop count entao chama ele toda hora que passa la e na função tem o console por isso ele aparece sem fazer nada

Minha resposta:
[escreva o que você acha]

## Minha Conclusão Geral:
React renderiza um componente quando:
ele é executado quando passa a linha nele renderiza quando é chamado