const lista = ["amanda", "bianca", "cacau", "dudu"]
const media = [8, 6, 7, 5.5]

const listaDeAlunosEMedia = [lista, media]

function procuraAluno(aluno) {
  for (i = 0; i < lista.length; i++) {
    if (lista[i] == aluno) {
      return media[i]
    }
  }
}

console.log(listaDeAlunosEMedia)

//a seguir um exemplo de desestruturação em js
const [sato, kato] = listaDeAlunosEMedia

function notaEAluno(aluno) {
  if (lista.includes(aluno)) {
    console.log(`O aluno ${aluno} tá cadastrado`)
    //indexOf retorna a posição do índice do elemento dentro do array, se ele estiver presente;
    const chamada = lista.indexOf(aluno)

    const notaMedia = media[chamada]

    console.log(` o aluno ${chamada} tem media igual a ${notaMedia}`)
  } else {
    console.log("não tá")
  }
}

notaEAluno("dudu")

console.log(sato, kato)
