//Native
//Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host

//Construtores de objetos nativos

/* Object - String - Array - Function */

/* Host
Objetos de host são aqueles implementados pelo próprio ambiente. No browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node os objetos Host são diferentes, já que não estamos em um ambiente browser

Objetos do browser

NodeList
HTMLCollection
Element
 */

//User - objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa

const teu = {
  tipo: 'Magra'
}

//Diferentes versões
//Browsers diferentes possuem objetos e propriedades e métodos diferentes

//ECMA -- RESPONSÁVEL POR DEFINIR PADRÕES PARA TECNOLOGIA
//ECMASCRIPT É O PADRÃO DO JS

//O V8 DO GOOGLE IMPLEMENTA O ECMASCRIPT

//Bibliotecas como JQuery foram criadas para resolver esse problema presente entre ps browsers

//O typeof retorna o tipo de dado. Caso o mesmo não exista ou não seja definido, retornará undefined.

if (typeof Array.from !== 'undefined') {
  console.log('edka')
}

//API - Application Programming Interface
//É uma interface de software criada para interação mcom outros softwares. Ou seja, toda interação que fazemos com o browser utilizando objetos, métodos e propriedades, estamos na verdade interagindo com a API do browser