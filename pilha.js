
// array de notas 
const notas = [10,6.5,8]


//.length conta quantos valores existe no arrays
let media = (notas[0] + notas[1] + notas[2] )/notas.length

console.log(media)


//metodo para inserir no array 
notas.push(8.5)


media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

//metodo para remover do array
//sempre removendo o ultimo elemento.
// Pilha ou FILO (First-In, Last-Out) significa o primeiro que entra é o último que sai.

notas.pop()

console.log(notas)

console.log(media)