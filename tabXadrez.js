const tabuleiro = [] 
let coord = 0 
for (let i = 65; i < 73; i++) { 
  for (let j = 1; j < 9; j++) { 
    coord = String.fromCharCode(i) + j 
    console.log(coord) 
    // tabuleiro.push(coord)
  } 
} 
//string.fromcharcode pega o numero em parametro e transforma em caractere
console.log(tabuleiro) 
