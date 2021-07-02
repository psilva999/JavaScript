function resultado() {
    var partida = document.querySelector ('#inicio')
    var chegada = document.querySelector ('#fim')
    var rota = document.querySelector ('#passo')

    var mostrar = document.querySelector ('#exibeResul')

    // Caso o usuário deixe algum dos campos vázios
    if (partida.value.length == 0 || chegada.value.length == 0 || rota.value.length == 0) {
        mostrar.innerHTML = `Preencha todos os valores para realizar a contagem`
    }

    else {
        mostrar.innerHTML = 'Contagem: '
        var parte = Number (partida.value)
        var chega = Number (chegada.value)
        var passos = Number (rota.value)

        //Caso o usuário digíte um valor menor ou igual a zero
        if (passos <= 0) {

            mostrar.innerHTML = `Contar com zero não é possível (ainda)`
            passos = 1
        }

        // Contagem crescente
        else if (parte < chega) {
            for (var contagem = parte; contagem < chega; contagem += passos) {

                mostrar.innerHTML += (`${contagem} \u{1F449} `)
            }
        }

        // Contagem decrescente
        else if (parte > chega) {
            for (var contagem = parte; contagem > chega; contagem -= passos) {

                mostrar.innerHTML += (`${contagem} \u{1F449}`)
            }
        }
  
        mostrar.innerHTML += ` ${chega}\u{1F3C1}`
    }
}