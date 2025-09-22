class Tarefa {
  constructor({ objectId, descricao, concluida = false }) {
    if (!descricao || typeof descricao !== 'string') {
      throw new Error('Descrição é obrigatória e deve ser uma string.');
    }
    this.objectId = objectId;
    this.descricao = descricao;
    this.concluida = concluida;
  }
}

module.exports = Tarefa;
