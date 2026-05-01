from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

tarefas = [
    {"id": 1, "tarefa": "Comprar leite"},
    {"id": 2, "tarefa": "Estudar FastAPI"},
]


@app.get('/tarefas')
def listar_tarefas():
    return tarefas


@app.post('/tarefas')
def criar_tarefa(tarefa: str):
    nova_tarefa = {"id": len(tarefas) + 1, "tarefa": tarefa}
    tarefas.append(nova_tarefa)
    return nova_tarefa


@app.get('/tarefas/{tarefa_id}')
def obter_tarefa(tarefa_id: int):
    for tarefa in tarefas:
        if tarefa["id"] == tarefa_id:
            return tarefa
    return {"error": "Tarefa não encontrada"}


@app.delete('/tarefas/{tarefa_id}')
def deletar_tarefa(tarefa_id: int):
    for tarefa in tarefas:
        if tarefa["id"] == tarefa_id:
            tarefas.remove(tarefa)
            return {"message": "Tarefa deletada"}
    return {"error": "Tarefa não encontrada"}
