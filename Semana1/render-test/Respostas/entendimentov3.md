Você tem isto no código:
jsx<Child key={count} count={count} />
Pergunta: Se Child renderiza TODA VEZ que Parent renderiza (mesmo quando count não muda), isto é um PROBLEMA?
Responda:

Sim, é problema, por quê?
Não, não é problema, por quê?
Depende, de quê?


Se Child renderiza toda vez que Parent renderiza 
(mesmo quando count não muda):

Isto é um problema?
[SIM / NÃO / DEPENDE]

Acredito que depende de como for codado se tiver mais de 10mil itens e alterar esses 10mil toda vez rendenderizar os 10mil seria muito lento, eu mostraria apenas os primeiros na tela o o resultado final ficaria implicitdo só se o usuário quiser todo o resultado