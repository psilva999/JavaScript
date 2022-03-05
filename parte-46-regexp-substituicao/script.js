//É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.
const refSelecao = 'mercy seat'.replace(/mercy/g, '--$&Jesus')

console.log(refSelecao)

//É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.
const grupoCaptura = 'p.silva0399@email.com'.replace(/(\w+)@[\w.]+/g, '$psilva999@gmail.com')

console.log(grupoCaptura) 
//Não use este regexp para emails, ele falha em alguns casos.

//definindo grupos de captura
// Procura: sequência alfanumérica, seguida
// de , seguido espaço de sequência alfanumérica.
const regexp = 'Rafael, Andre'.replace(/(\w+),\s(\w+)/g, '$2 $1');

console.log(regexp)
// Andre Rafael

//Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.
const sequencia = 'MAY, MAY, OH MAY, GET AWAY'.replace(/(may)+/gi, 'Gray')

console.log(sequencia)

//Utilize o (?:) para ignorar a captura.
const ignoraCaptura = 'Tatata, tata, ta'.replace(/(?:ta)+/gi, 'Pá')

console.log(ignoraCaptura)

//Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.
// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const regexpz = /\d(?=px)/g;

'2em, 4px, 5%, 2px, 1px'.replace(regexpz, 'X');
// 2em, Xpx, 5%, Xpx, Xpx

//Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.
// Procura: dígitos que não possuírem px
// sem selecionar o restante.
const regexpq = /\d(?!px)/g;

'2em, 4px, 5%, 5px, 1px'.replace(regexpq, 'X');
// Xem, 4px, X%, 5px, 1px

//Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.
// Procura: dígitos que possuírem R$
// na frente dos mesmos
const regexpw = /(?<=R\$)[\d]+/g;

'R$99, 100, 200, R$20'.replace(regexpw, 'X');
// R$X, 100, 200, R$X