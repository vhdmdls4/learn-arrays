//Set() gera uma lista com o argumento passado, mas sem repetir itens, ou seja, no array ele só imprimiria elementos únicos, e não múltiplas vezes um elemento. Possui diferentes métodos do que um array, bom para remover duplicatas;

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);