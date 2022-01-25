    // diferença entre map e foreach 
    // foreach nao retorna nada, apenas executa o bloco de codigo
    // o map executa e retorna 
    // nesse case, o map esta retornando cada elemento do   array que for menor que 10 e acrescentando + 1       
    
    
    const notas = [10,9,8,7,6]

    const notasAtualizada = notas.map( nota =>  nota ==10 ? nota : ++nota)

    console.log(notasAtualizada)