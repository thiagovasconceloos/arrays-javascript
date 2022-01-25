const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

//serve para iterar sobre um array e utilizar o 
//valor de cada item para criar um objeto final com base em alguma regra



function mediaSala(notasdaSala){


  const somadasNotas = notasdaSala.reduce((acum,atual) =>

    atual + acum,0) 

     return somadasNotas/notasdaSala.length
    

  
   

}


console.log(`Media da sala de Javascript  é ${mediaSala(salaJS)}`)
console.log(`Media da sala de Java  é ${mediaSala(salaJava)}`)
console.log(`Media da sala de Python  é ${mediaSala(salaPython)}`)
