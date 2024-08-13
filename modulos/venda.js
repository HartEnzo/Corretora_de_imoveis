const prompt = require("prompt-sync")();

const corretor = require("./corretor.js");
const cliente = require("./clientes.js");
const imovel = require("./imovel.js");

const cr = [];

let proxId = 1;

const model = (id = proxId++) => {
  let id_corretor = 0;
  if (corretor.index()) {
    id_corretor = parseInt(prompt("ID da corretor: "));
  } else {
    console.log("Cadastre um corretor para realizar venda");
  }

  let id_cliente = 0;
  if (cliente.index()) {
    id_cliente = parseInt(prompt("ID do cliente: "));
  } else {
    console.log("Cadastre um cliente para realizar venda");
  }

  const corretorAux = corretor.show(id_corretor);

  let id_imovel = 0;
  if (imovel.index(corretorAux.id_corretora)) {
    id_imovel = parseInt(prompt("ID do imovel: "));
  } else {
    console.log("Cadastre um imovel para realizar venda");
  }

  const imovelAux = imovel.show(id_imovel);
  if (
    cliente.show(id_cliente) &&
    imovelAux &&
    corretorAux &&
    corretorAux.id_corretora == imovelAux.id_corretora
  ) {
    return {
      id,
      id_corretor,
      id_cliente,
      id_imovel,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    cr.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = () => {
  if (cr.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  cr.forEach((el) => console.log(el));
  return true;
};

const show = (id) => cr.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = cr.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        cr[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "), 10);

    if (isNaN(id)) {
      console.log("ID inválido. Por favor, insira um número: ");
      return;
    }

    const indice = cr.findIndex((el) => el.id === id);

    if (indice != -1) {
      cr.splice(indice, 1);
      console.log("Registro excluído com sucesso");
    } else {
      console.log("Registro não encontrado");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};