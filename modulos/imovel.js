const prompt = require("prompt-sync")()

const corretora = require("./corretora")

const cr = [];

let proxId = 1;


const model = (id = proxId++) => {
    const bairro = prompt ("Bairro: ");
    const rua = prompt ("Rua: ");
    const numero = parseInt(prompt("Número: "));
    
    let id_corretora = 0;
    if(corretora.index()) {
        id_corretora = parseInt(prompt("ID da corretora: "));
    } else {
        console.log("Cadastre uma corretora para inserir um corretor");
    }
  
    if (bairro != "" && rua != "" && numero > 0 && corretora.show(id_corretora)) {
     return {
        bairro,
        rua,
        numero,
        id,
        id_corretora
     };
    }
    console.log("Dados invalidos! ")
 
};
const store = () => {
    const novo = model() 

    if(novo) {
        cr.push(novo)

        console.log("Registro concluido com sucesso! ");
    }
};

const index = (id_corretora) => {
    if(cr.length == 0) {
        console.log("Nenhum registro encontrado. ");
        return false;
    }
    
    cr.forEach((el) => {
        if (el.id_corretora == id_corretora || !id_corretora) {
            console.log(el);
        }
    });
    return true;
};

const show = (id) => cr.find((el) => el.id == id);

const update = () => {
    if(index()) {
        const id = parseInt(prompt("ID: "));
    
        const indice = cr.findIndex(el => el.id == id);

        if(indice != -1) {
            const novo = model(id)

            if(novo) {
                cr[indice] = novo 
                console.log("Registro atualizado com sucesso! ");
            }
        }else {
            console.log("Registro não encontrado! ");
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


