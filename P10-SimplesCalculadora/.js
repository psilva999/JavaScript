function mostraSoma() {

    var pega1 = document.querySelector('#s1')
    var pega2 = document.querySelector('#s2')
    var exibirSoma = document.querySelector('#resultado-soma')

    var soma1 = Number(pega1.value)
    var soma2 = Number(pega2.value)
    var totalSoma = soma1 + soma2

    exibirSoma.innerHTML = totalSoma
}

function mostraSubtrair() {
    var separa1 = document.querySelector('#m1')
    var separa2 = document.querySelector('#m2')
    var exibirSubtrai = document.querySelector('#resultado-subtrair')

    var subtrai1 = Number(separa1.value)
    var subtrai2 = Number(separa2.value)
    var totalSubtraido = subtrai1 - subtrai2

    exibirSubtrai.innerHTML = totalSubtraido
}

function mostraVezes() {
    var multi1 = document.querySelector('#v1')
    var multi2 = document.querySelector('#v2')
    var exibirMulti = document.querySelector('#resultado-multiplica')

    var multiplica1 = Number(multi1.value)
    var multiplica2 = Number(multi2.value)
    var totalMultiplicado = multiplica1 * multiplica2

    exibirMulti.innerHTML = totalMultiplicado
}

function mostraDividir() {
    var parte1 = document.querySelector('#d1')
    var parte2 = document.querySelector('#d2')
    var exibirDivisao = document.querySelector('#resultado-divisao')

    var divisao1 = Number(parte1.value)
    var divisao2 = Number(parte2.value)
    var totalDivisao = divisao1 / divisao2

    exibirDivisao.innerHTML = totalDivisao
}