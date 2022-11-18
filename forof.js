const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0

//para cada elemento do array, melhor que o for normal para percorrer arrays todos do 0 ao final, e é bom que dá pra pegar cada array individualmente, é menos flexível que o for normal
for (let elemento of notas) {
  somaNotas += elemento

  console.log(elemento)
}

console.log(somaNotas)
