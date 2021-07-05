let valores = []

//Tive bastante dificuldade pra resolver esse desafio
//function indicando que o número fornecido está entre 1 e 99
function numeroFornecido(v) {
    if (Number(v) >= 1 && Number(v) <= 99) { return true }

    else { return false }
}


//Preciso aprender cada passo e treinar
function listaFornecida(v, l) {
    if (l.indexOf(Number(v)) > -1) { return true }

    else { return false }
}


//function para adicionar os valores que o usuário acrescentar
function adicionar() { //não consegui colocar um limpaTela sem apagar os dados inseridos
    let nUser = Number(document.querySelector('#numberUser').value)
    let exibidor = document.querySelector('#exibeNumeros')

    if (nUser > 0 && nUser < 100 && !listaFornecida(nUser, valores)) {
        let itens = document.createElement('option')
        itens.text = `O número ${nUser} foi adicionado`

        valores.push(nUser)
        exibidor.appendChild(itens)
    }

    else { alert('Valor inválido ou já presente na lista') }

    /* nUser.value = '' --Não funciona
    nUser.focus() */    
}


//Mostrar o resultado no arquivo HTML
function resultado() {
    if (valores.length == 0) { alert (`Insira valores para conferir o resultado`) }

    else {
        let finalizado = document.querySelector ('#exibeResultado')
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        for (let MM in valores) { //Falta limpar quando adicionar mais um número
            soma += valores[MM]

            if (valores[MM] > maior) { maior = valores[MM] }

            if (valores[MM] < menor) { menor = valores[MM] }
        }

        media = soma / valores.length

        finalizado.innerHTML = ''

        finalizado.innerHTML += `<p>${valores.length} números foram cadastrados </p>`
        finalizado.innerHTML += `<p>${maior} é o maior número</p>`
        finalizado.innerHTML += `<p>${menor} é o menor número</p>`

        finalizado.innerHTML += `<p>Soma entre os valores: ${soma}</p>`
        finalizado.innerHTML += `<p>Média: ${media}</p>` //Dá pra fazer com ${Math.round(media)}
    } 
}





