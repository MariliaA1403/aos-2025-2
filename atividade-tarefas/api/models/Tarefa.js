import { v4 as uuidv4 } from "uuid";

class TarefaModel {
  constructor(descricao, concluida = false) {
    this.objectId = uuidv4();
    this.descricao = descricao;
    this.concluida = concluida;
  }
}

export default TarefaModel;