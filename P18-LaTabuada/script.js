function resultado() {

    // Variáveis que pegam a interação com o usuário
    var pUser = Number (document.querySelector ('#numeral').value)
    var exibidor = document.querySelector ('#exibeTabu')

    // Caso o valor zero seja inserido
    if (pUser == 0) {
        alert (`Não dá pra fazer com zero`)
    }

    // Algoritmo da tabuada
    else {
        exibidor.innerHTML = '' //Limpa a tela antes de começar a próxima tabuada
        exibidor.innerHTML = `Tabuada do ${pUser}: <br>`

        for (var acrescentador = 1; acrescentador <= 10; acrescentador++) {

            //Cria o elemento <option></option> no HTML
            var item = document.createElement ('option') 

            //Coloquei esse por ser importante no PHP (preciso aprender)
            item.value = `exibidor${acrescentador}` 

            //Exibe a valor multiplicado até o número 10
            item.text += `${pUser} x ${acrescentador} = ${pUser * acrescentador}`

            //Acrescenta a tag <option> dentro do select
            exibidor.appendChild(item)
         }

    }
}