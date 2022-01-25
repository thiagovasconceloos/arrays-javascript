const nomes = ['Joao','Juliana','Caio','Ana']
const notas = [10,8,7.5,9]


// incluide retorna um valor logico true ou false (boolean)
// indexof busca  a posição do index no array
// no caso desse exemplo, existe duas arrays que formam a matriz 
// indice 0 é o array de nome 
// indice 1 é o array de notas 

const nomesNotas = [nomes,notas]

const exibeNomeNota = (nomedoAluno) => {
   if(nomesNotas[0].includes(nomedoAluno)){
        let indice = nomesNotas[0].indexOf(nomedoAluno)
            return nomesNotas[0][indice] + ', sua media é :' + 
            nomesNotas[1][indice]
        

   } else {

        return `Aluno ${nomedoAluno} não encontrado`;
   }
    


}


console.log(exibeNomeNota('Joao'))
console.log(exibeNomeNota('Thiago'))