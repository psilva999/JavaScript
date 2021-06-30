
var n1 = new Date()
var dia = n1.getDay()

switch (dia) {

    case 0:
        document.write ('Domingo')
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
        break
} 
