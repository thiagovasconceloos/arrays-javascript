
// inicia a fila vazia
var fila = [];

//insere  um elemento na fila
fila.push(1);
//insere  um elemento na fila
fila.push(2);
//insere  um elemento na fila
fila.push(3);

//imprime no navegador
console.log(fila);


//remove o primeiro elemento da fila 
//Fila ou FIFO (First-In, First-Out) significa o primeiro que entra é o primeiro que sai.
fila.shift();

//insere o elemento  4 na utima posição da fila [2]
fila.push(4);

//imprime no navegador
console.log(fila);


//remove o primeiro elemento da fila 
fila.shift();

//remove o primeiro elemento da fila 
fila.shift();

//removeu o elemento na posição [0] e [1] e depois imprimiu 
console.log(fila);