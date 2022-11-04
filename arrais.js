const alunos = ['João',
'Juliana',
'Ana',
'Caio',
'Lara',
'Marjorie',
'Guilherme',
'Aline',
'Fabiana',
'Andre',
'Carlos',
'Paulo',
'Bia',
'Vivian',
'Isabela',
'Vinícius',
'Renan',
'Renata',
'Daisy',
'Camilo'];
//primeiro arg é a posição inicial e o segundo a posicao final+1, ou posicao inicial do próximo array gerado 
const salaI = alunos.slice(0,alunos.length/2);
const salaII = alunos.slice(alunos.length/2);
//sem arg final ele pega todos os restantes;

console.log(salaI);
console.log(salaII);
