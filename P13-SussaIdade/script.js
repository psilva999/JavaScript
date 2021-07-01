function resultado() {
//Preciso melhorar esse código

    var datAno = new Date().getFullYear()

    var anoNascimento = (document.querySelector ('#nasce').value)
    var mensagem = document.querySelector ('#exibeMsg')

    var sexoGen = document.querySelectorAll ("input[type='radio']")
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute ('id', 'foto')

    var idade = datAno - anoNascimento

    if (idade <= 12 && idade>=1) {

        img.setAttribute ('src', 'images/kid.jfif')
    }


    else if (idade>=13 && idade<=60) { 

        if (sexoGen[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', 'images/work.jfif')
        }

        else if (sexoGen[1].checked) {
            genero = 'Mulher'
            img.setAttribute('src', 'images/woman.png')
        }

        mensagem.innerHTML = `${genero} com ${idade} anos de idade`
    }

    else if (idade>=61 && idade<=71) {

        if (sexoGen[0].checked) {
            genero = 'Grande homem'
            img.setAttribute('src', 'images/die.jfif')
        }

        else if (sexoGen[1].checked) {
            genero = 'Grande mulher'
            img.setAttribute('src', 'images/oldwoman.jfif')
        }

        mensagem.innerHTML = `${genero} com ${idade} anos de idade`
    }

    else if (idade>=72 && idade<=90) {

        if (sexoGen[0].checked) {
            genero = 'Veterano'
            img.setAttribute('src', 'images/ww2.jfif')
        }

        else if (sexoGen[1].checked) {
            genero = 'Rainha'
            img.setAttribute('src', 'images/queen.jfif')

        }
    }

    else {
        mensagem.innerHTML = `Também quero esse Delorean`
        
        img.setAttribute('src', 'images/delorean.jfif')
    }

    mensagem.innerHTML = `${genero} com ${idade} anos de idade`
    mensagem.appendChild(img)
}