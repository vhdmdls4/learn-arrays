const salaJS = ["Evaldo", "Camis", "Mari"]
const salaPython = ["Ju", "Leo", "Raquel"]

// concat retorna um array novo que deve ser salvo em uma variável e junta duas strings.
const salasJuntas = salaJS.concat(salaPython)

console.log(salasJuntas)
//no caso de passagem de parâmetros no concat com núm livre e outro array, o array será passado como o mesmo, no caso de passagem onde tenham apenas arrays, então ele será incorporado no outro array como números livres;
const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)

//concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
