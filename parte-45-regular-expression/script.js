//Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

//Utilizar um caracter literal irá realizar uma busca específica deste caracter.
const tipo = /a/,
      texto = 'Dance',
      
      vemTexto = texto.replace(tipo, 'T'),
      vaiTexto = 'JavaScript'.replace('Java', 'Type')

console.log(vemTexto, vaiTexto)

//As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.
//Maiusculo e minusculo faz diferença nesse caso
const rege = /A/g,
      cre = 'VAGABOND'.replace(rege, 'O')

console.log(cre)

//Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.
const tete = /Per/gi,
      toto = 'Perdeu a roupa Perdida'.replace(tete, '')

console.log(toto)

//Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.
const roupa = /[ai]/gi,
      tum = 'A camisa caiu camisada'.replace(roupa, 's')

console.log(tum)

//Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.
const lupa = /[-.]/g,
      lopa = '765.444.333-23'.replace(lupa, '')

console.log(lopa)

//Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.
const dupa = /Bra[sz]il/gi,
      dopp = 'Brasil é com z: Brazil'.replace(dupa, 'Prazer')

console.log(dopp)

//O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.
const help = /[a-zA-Z]/g,
      hopa = 'ADA LOVELACE'.replace(help, '01'),

      juca = '111.222.333-98'.replace(/[0-9]/g, 'X')

console.log(hopa, juca)

//Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
const pow = /[^a-z]/g,
      textada = 'Hobbit going for a adventure'.replace(pow, '')

console.log(textada)

//O ponto . irá selecionar qualquer caracter, menos quebras de linha.
const jupa = /./g,
      upa = 'Localizada é a ali'.replace(jupa, '01')

console.log(upa)

//Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/
const lord = /\./g,
      alterna = /[.]/g,

      avanca = '123.435.423-32'.replace(lord, '-')

console.log(avanca)

//O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].
const yup = /\w/g,
      hupa = 'Gandalf, the grey.'.replace(yup, '-')

console.log(hupa)

//O \W irá selecionar tudo o que não for caracter alfanumérico e o underline.É a mesma coisa que[^ A - Za - z0 -9_].
const ger = /\W/g,
      escre = 'Juca vem e vai por R$5,00 e pronto.'.replace(ger, '-')

console.log(escre)

//O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].
const pura = '+55 (81) 98732-3244'.replace(/\d/g, 'X')

console.log(pura)

//O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].
const final = '+55 (81) 93244-3233'.replace(/\D/g, '')

console.log(final)

//O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.
const ola = '+55 (81) 93244-3233'.replace(/\s/g, '')

console.log(ola)

//O \S irá selecionar qualquer caracter que não for espaço em branco.
const olas = '+55 (81) 93244-  3233'.replace(/\S/g, '')

console.log(olas)

///[\s\S]/g irá selecionar tudo.

//É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.

const upas = 'O gigante acordooou'.replace(/o{3}/g, '-')

console.log(upas)

//Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.
const kupa = /\d{2,3}/g,
      resultado = '222.333.222.42'.replace(kupa, 'X'),

      letra = /\w{1,}/g,
      resul = '222.333.222.42'.replace(letra, 'X')

console.log(resultado, resul)

//O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.
const mais = /\d+/g,
      iju = '222.333.222.42'.replace(mais, 'X'),

      menos = /d\w+/g,
      aja = 'Dígitos, dados, desenhos, Dito, d'.replace(menos, 'X')

console.log(iju, aja)

//O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.
const vilma = 'Dígitos, dados, desenhos, Dito, d'.replace(/d\w*/g, 'X')

console.log(vilma)

//O sinal ? significa que o caracter é opcional, pode ou não existir.
const believer = 'Qual é o certo, regexp ou regex?'.replace(/regexp?/g, 'Regular Expression')

console.log(believer)

//O sinal | irá selecionar um ou outro. java|php
const huda = 'PHP e Java são linguagens diferentes'.replace(/java | php/gi, 'X')

console.log(huda)

//O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.
// Procura: java (case insensitive)
const regexp = /java/gi;
'Java não é JavaScript.'.replace(regexp, 'X');
// X não é XScript.

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
'Java não é JavaScript.'.replace(regexpBoundary, 'X');
// X não é JavaScript.

// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito = /\b\d+\b/gi;
'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X');
// O Restaurante25 na Rua X, custa R$ X,X

'11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');

//NOT WORD BOUNDARY -- É o contrário do \b.
const regexpDigitos = /\B\d+\B/gi;

'11_22 33-44 55é66 77e88'.replace(regexpDigitos, 'X');
// 1X_X2 33-44 55é66 7XeX8

//Com o ^ é possível informar que a busca deve ser iniciada no início da linha.
const email = 'p.silva0399@gmail.com'.replace(/^\w+/g, 'X')

console.log(email)

//Com o $ é possível informar que a busca deve ser iniciada no final da linha.
const xp = 'p.silva0399@gmail.com'.replace(/\w+$/g, 'X')

console.log(xp)

//Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.
// Procura: sequência de alfanuméricos
// no final da linha.
const regexps = /\w+$/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexps, 'X');
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
const regexpss = /^\w+/gm;

`andre@origamid.com
contato@origamid.com`.replace(regexpss, 'X');
// X@origamid.com
// X@origamid.com

//O \n irá selecionar o final de uma linha, quando criamos uma nova.
const regexpz = /\n/g;

`andre@origamid.com\ncontato@origamid.com`.replace(regexpz, '---');
// andre@origamid.com---contato@origamid.com

`andre@origamid.com
contato@origamid.com`.replace(regexpz, 'X');
// andre@origamid.com---contato@origamid.com

//O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.
const regexpq = /\u0040|\u00A9/g;

'andre@origamid.com ©'.replace(regexpq, '---');
// andre---origamid.com ---