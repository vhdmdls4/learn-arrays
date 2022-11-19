const notas = [10, 6.5, 8, 7.5]

//função
// Quando uma função é parâmetro de outra, chamamos a função passada como callback. Ou seja, essa função anônima também é callback nesse caso.

let sumNotas = 0

notas.forEach(function (notaa) {
  sumNotas += notaa
})

console.log(`a soma das nota e ${sumNotas}`)
