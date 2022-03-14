//npm init para criar um controle de versão

//Serve para deixar seu arquivo js mais compactado

//Instalar 
//npm install --save-dev webpack webpack-cli

//Instalar globalmente
//npm install --save-dev webpack webpack-cli -g

//para criar o arquivo
//npx webpack ./arquivo -o ./main.js

//Ativar watch
//npx webpack ./parte-53-validar-cpf/script.js -o ./main.js --watch

//COloque isso no arquivo package.json para automatizar
//"scripts": {
//    "build": "webpack production ./js/script.js -o ./main.js",
//    "dev": "webpack developement --watch ./js/script.js -o ./main.js"
//}

//para ativar
//npm run build or dev

//Babel
//Transforma código novo em antigo para dar browser suporte
//polyfill -- cria métodos / funções com o mesmo nome das atuais, mas utiliza de código antigo para permitir total acessibilidade
//Transpiler -- transforma código novo em antigo
