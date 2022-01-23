let nomes = ['Thiago','Juliana', 'Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo']



// dividindo o array em duas partes.
// sempre estruturar de forma dinamica, para que o codigo não fique errado quando aumentar ou diminuir o numero de elementos.

const sala1  =  nomes.slice(0,nomes.length/2)
const sala2  =  nomes.slice(nomes.length/2)

console.log(`Alunos da Sala 1 ${sala1}`)
console.log(`Alunos da Sala 2 ${sala2}`)