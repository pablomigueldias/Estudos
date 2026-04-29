## Meu Entendimento de Props

### O que são Props?
é uma forma de compartilhar dados e renderizar na tela,

### Como funcionam neste exemplo?
- App passa: O app tem o estado da lista com use state
- PropTest recebe: O PropTest recebe este dado que esta no estado da lista com props compartilhado o dados da lista
- PropTest usa: com isso ele consegue usar os dados que esta no app.jsx no propTest.jsx usando props

### O que acontece quando clico no botão?
Quando clica no botão ele gera a função add user e executa aquela função e coloca na tela pois eu compartilhei os dados usando props 

### Por que a lista atualiza?
Ele atualiza pq ele sempre renderiza o componente pai quando é executado