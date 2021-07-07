//Variável chamando o objeto XML
let teste = new XMLHttpRequest()

//Insirindo protocolo HTTP com o metodo GET e qual url ele quer chamar 
teste.open ("GET", "lista.js")

//Tipo de arquivo que a variável quer receber
teste.responseType = "json"

//Enviar 
teste.send()

teste.addEventListener ("readystatechange", function() {
 
    if (teste.readyState === 4 && teste.status === 200) {

        console.log (ajax)

        let vem = teste.response
        let pega = document.querySelector ('.ali')

        for (let i = 0; i < vem.length; i++) {

            pega.innerHTML += vem[i] 
        }

    }
} )

//Não consegui fazer funcionar