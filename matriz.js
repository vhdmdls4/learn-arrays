const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (i = 0; i < notasGerais.length; i++) {
  for (j = 0; j < notasGerais[j].length; j++) {
    media += notasGerais[i][j] / notasGerais[i].length
  }
}
media /= notasGerais.length
console.log(media)

