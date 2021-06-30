
//Date() e getDay() no permite saber o dia da semana
var n1 = new Date()
var dia = n1.getDay()

//Condicionais múltiplas nos permite criar várias situações de uma maneira mais 'fácil'
switch (dia) {

    case 0:
        document.write ('Domingo')
        //SEMPRE coloque o break ao final de cada 'case'
        break

    case 1:
        document.write ('Segunda')
        break  
        
    case 2:
        document.write ('Terça')
        break

    case 3: 
        document.write ('Quarta')
        break
    
    case 4:
        document.write ('Quinta')
        break
    
    case 5:
        document.write ('Sexta')
        break
    
    case 6:
        document.write ('Sábado')
        break

    default:
        document.write ('INVÁLIDO')
        //Aqui não é obrigatório mas é sempre bom colocar
        break
} 
