const notas = [7, 7, 8, 9];
//const novasNotas = [notas] //aponta para o mesmo endereço de memória para o javascript, logo, se mexer em novasNotas, mexe em notas;
const novasNotas = [...notas];
//spread operator;
novasNotas.push(10);

console.log(novasNotas)