function mostraTela() {
    var n1 = document.querySelector('#s2')
    var exibir = document.querySelector ('#aqui')

    var numero1 = Number(n1.value)

    //Códigos condicionais
    if (numero1 > 0) {
        exibir.innerHTML = 'Número maior que zero'
    }

    else {
        exibir.innerHTML = 'Número menor que zero'
    }
}