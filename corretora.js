const prompt = require("prompt-sync")();

const corretora = [];

const modelo = () => {
   const nome = prompt ("Digite o nome da corretora: ");
   

   const corretor = [];
   while(true) {
      const Ncorretor = prompt("Digite o nome do corretor, ou digite 'f' para sair: ")

      if(Ncorretor == "f") {
        break;
      }
    corretor.push(Ncorretor);
    }
    
    const imovel = [];
    while(true) {
      const numero = prompt("Digite o número do imóvel: ");
      const rua = prompt("Digite o nome da rua: ");
      const bairro = prompt("Digite o nome do bairro: ");
    
     const cliente = [];
     while(true) {
        const Ncliente = prompt("Digite o nome d Ncliente, ou digite 'f' para sair: ")
  
        if(Ncliente == "f") {
          break;
        }
     cliente.push(Ncliente);
    }
   if (nome != "" && corretor.length > 0 && imovel.length > 0 && cliente.length > 0) {
    return {
        nome,
        corretor,
        imovel,
        cliente
    }
   }
}
console.log("Dados inválidos! ")
};

const criar = () => {
    const novo = modelo();

    if(novo) {
        corretora.push(novo)
        console.log("Curso criado com sucesso! ")
    }
}

const listar = () => {
    corretora.forEach((el, i) => {
         console.log(`${i + 1}.
           Nome: ${el.nome},
           corretores: ${el.corretor},
           imovel: ${el.imovel},
           cliente: ${el.Ncliente}`);
    })
};

const atualizar = () => {
    listar();

    const indice = prompt("Qual o indice que deseja atualizar: ") - 1
    const novo = modelo();
    if(novo && indice >= 0 && indice < corretora.length) {
        corretora[indice] = novo;
        console.log("corretora atualizada com sucesso! ");
    } else {
        console.log("Indice inválido ");
    }
    
    
    const remover = () => {
        listar();
        
        const indice = prompt("Qual indice deseja remover? ") - 1;
        
        if(indice >= 0 && indice < corretora. length) {
            corretora.splice(indice, 1);
            console.log("Registro removido com sucesso! ");
        } else {
            console.log("Indice inválido ");
        }
    };
module.exports = {
    criar,
    atualizar,
    remover,
    listar,
}    
}