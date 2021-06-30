function mostrar() {
    
    //.value para facilitar a identificação do número que será recebido
    var ele = (document.querySelector ('#n1').value)
    var exibir = document.querySelector ('#aqui')

    if (ele>5) {
        exibir.innerHTML = 'O número é maior que 5'
    }

    //else if permite que tenhamo mais de duas condições
    else if (ele<5 && ele>=1) {
        exibir.innerHTML = 'O número é menor que 5'
    }
        
    else if (ele<0) {
        exibir.innerHTML = 'O número é menor que zero'
    }

    else if (ele==5) {
        exibir.innerHTML = 'O número é igual a cinco'
    }

    else if (ele==0) {
        exibir.innerHTML = 'O número é igual a zero'
    }
}