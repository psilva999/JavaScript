function rodar() {

    var exibeMensagem = document.querySelector ('#exibeHora')
    var mostraFoto = document.querySelector ('#trocaImagem')

    var data = new Date()
    var horas = data.getHours()

    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (horas>=5 && horas<=11) {
        document.body.style.background = '#ACFA00'

        exibeMensagem.innerHTML = (`Bom dia! Agora são ${horas}:${minutos}:${segundos} `)
        mostraFoto.src = 'images/dia.jfif'
    }

    else if (horas>=12 && horas<18) { 
        document.body.style.background = 'Orange'
        
        exibeMensagem.innerHTML = (`Boa tarde! Agora são ${horas}:${minutos}:${segundos} `)
        mostraFoto.src = 'images/tarde.jfif'
    }

    else if (horas>=18 && horas<=23) {
        document.body.style.background = '#2D1F46'

        exibeMensagem.innerHTML = (`Boa noite! Agora são ${horas}:${minutos}:${segundos} `)
        mostraFoto.src = 'images/noite.png'
    }

    else {
        document.body.style.background = 'rgba(68, 0, 255, 0.7)'

        exibeMensagem.innerHTML = (`Curta a madrugada! Agora são ${horas}:${minutos} `)
        mostraFoto.src = 'images/madrugada.jfif'
    }
}
