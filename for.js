// const num = [100, 200, 300, 400, 500, 600]

// for (let indice = 0; indice < num.length; indice++) {
//   console.log(num[indice])
// }

const notes = [10, 5, 6.5, 7]

let sumNotes = 0

for (let i = 0; i < notes.length; i++) {
  sumNotes += notes[i]
}
console.log(sumNotes)

const media = sumNotes / notes.length

console.log(`a media e ${media}`)
