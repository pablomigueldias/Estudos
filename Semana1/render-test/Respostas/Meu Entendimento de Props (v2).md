## Meu Entendimento de Props (v2)

### O que são Props?
Prop é usado pra compartilhamento de dados entre componentes e assim renderiza

### Como funcionam neste exemplo?
- App passa: passa os dados
- PropTest recebe: recebe os dados
- PropTest usa: usa os dados na props compartilhado os dados que esta no app
### O que acontece quando clico no botão? (DETALHADO)
1. chama a função add user
2.  const newUser = { id: users.length + 1, name: `User ${users.length + 1}` newUser recebe esse dado
3. setUsers([...users, newUser]) adiciona na lista
4. o app renderiza novamente
5. e o propTest renderiza novamente pois recebeu um novo dado
6. e o resultado aparece na tela

### Por que a lista atualiza?
Ele atualiza pois o estado é chamado e componente pai é atualizado com o novo dado e acontece o mesmo no proptest

### Qual é a regra aqui?
Quando o estado (useState) muda: ele faz o componente pai renderizar novamente