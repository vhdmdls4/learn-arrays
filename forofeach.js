const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0

//para cada elemento do array, melhor que o for normal para percorrer arrays todos do 0 ao final, e é bom que dá pra pegar cada array individualmente, é menos flexível que o for normal
for (let elemento of notas) {
  somaNotas += elemento

  console.log(elemento)
}

console.log(somaNotas)


/*
Utilizar os métodos includes() e indexOf():
O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
Desestruturar um array:
Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.
Utilizar a estrutura for e entender seu funcionamento:
O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.
Utilizar a estrutura for of e entender a diferença em relação ao for:
O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.
*/
const notasL = [10, 6.5, 8, 7.5];

let sum = 0;

//no forEach o primeiro índice da função callback que vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente
notasL.forEach(function (notas, indice) {
  sum += notas;
  console.log(indice);
});

let media = sum / notasL.length;

console.log(`A media é ${media}`);