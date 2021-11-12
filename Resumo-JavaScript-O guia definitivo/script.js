var body = document.body

body.style.fontFamily = 'Calibri, sans serif'
body.style.letterSpacing = '2px'

body.style.display = 'grid'
body.style.justifyContent = 'center'

//Variáveis
var item = 2
body.innerHTML += `<h1>Resumo - JavaScript - O guia definitivo</h1> <span>Obs: conteúdo adicionado no JavaScript</span> <ul> <li>Variável é um nome simbólico para valor</li> <li>Utilize <q>=</q> para atribuir um valor a variavel <ul> <li>EX: var item = 2 -- Utilizando variáveis: ${item}</li> </ul></li> </ul>`

//Tipos de variáveis
body.innerHTML += '<h1>Tipos de variáveis</h1> <ul><li>x = 1 -- Números</li> <li>x = 0.01 -- Utilize "Number" para números inteiros e reais</li> <li>x = "hello world" -- Utilize aspas para strings</li> <li>x = true ou x = false -- valores booleanos</li> <li>x =  null -- significa nenhum valor</li> <li>x =  undefined -- significa indefinido</li> </ul>'

//Manipulação de arrays e objetos 
body.innerHTML += '<h1>Manipulação de arrays e objetos</h1> <ul><li>Objetos: uma coleção de pares (seja nome, valor ou string) <ul><li>Ex: var livros = { <br> cornwell: "O arqueiro", <br>napoleonHill: "Mais esperto que o diabo" <br>}</li></ul></li></ul>'

//             - Objetos são colocados entre chaves
// - A propriedade cornwell tem como valor 'o arqueiro'
//    - A chave marca o fim do objeto
//       - É possível acessar a propriedade de um objeto com '.' ou '[]'
//          - Ex: livros.cornwell ou livros[cornwell]
//             - livros.asimov = 'eu robô' —Crie novas propriedades por meio de atribuição
//                - livros.mundialPalmeiras = { } — objeto vazio e sem propriedade

//                   - Arrays(listas indexadas numericamente)
//                   - var primos = [2, 3, 5, 7] — array com 4 valores armazenados entre' []'
//                      - primos[0] — acessa primeiro número(no caso o 2)
//                         - A conta num array começa pelo 0
//                            - primos.length — quantidade de elementos(4)
//                               - primos[primos.length - 1] — o último elemento do array(7)
//                                  - primos[4] = 11 — adiciona um novo elemento
//                                     - primos[4] = 13 — altera o elemento existente(trocou o 11 por 13)
//                                        - var vazio = [] — array sem elemento
// - vazio.length — retornará zero

//    - Os arrays podem conter objetos e vice - versa

//       - var pontos = [{ coringao: 88, flamengo: 60, palmeiras: 40 }, { fluminense: 33, grêmio: 13, cruzeiro: 0 }]  — um array com 2 elementos onde cada elemento é um objeto
//          - var vitorias = { coringao: [[10, 9], [8, 7]], flamengo: [[6, 4], [5, 3]] } — Um objeto com duas propriedades onde cada valor é um array.Array dentro de outro array

// -Tal característica é chamada de expressão inicializadora

//    - Uma expressão é uma frase em que pode ser avaliada para produzir um valor

//       - Ex: Utilizar.ou[] para se referir ao valor dentro de um objeto é chamado de expressão
//          - Expressões podem ser formadas por operadores.
//         - Ex: 3 + 2 — ⇒ 5: adição — operadores atuam sobre os valores(operandos) para produzir um novo valor