const nomes = ['Thiago','Alexandre','Maria','Leonardo','Jeane']
const notas = [7,4.5,8,7.5]

//Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, 
//e quando ela retorna falso, ou false, o elemento é descartado.

const reprovados = nomes.filter((aluno,indice) => notas[indice] <5)

console.log(`O aluno ${reprovados} foi reprovado`)