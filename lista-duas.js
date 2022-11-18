const alunos = ["João", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]
//quando usar ${listaDeAlunosEMedias[0][1]} você está acessando a lista de alunos com o primeiro [i] e depois o item [1] da lista alunos que é a juliana
console.log(`No primeiro lugar temos ${listaDeAlunosEMedias[0][1]}`)

alunos[2] = "arroz"

console.log(alunos)
