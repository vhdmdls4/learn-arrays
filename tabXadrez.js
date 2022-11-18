const tabuleiro = []
let coord = 0
for (let i = 65; i < 73; i++) {
  for (let j = 0; j < 8; i++) {
    coord = i + j
    tabuleiro.push(coord)
  }
}

console.log(tabuleiro)
