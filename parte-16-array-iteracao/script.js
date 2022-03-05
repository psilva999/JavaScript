//foreach(callback(item, index, array)) 
//A função de callback é executada para cada item da array. Ela possui os seguintes argumentos: item(valor do item da array), index e array
const caro = ['feijao', 'arroz', 'carne']

//Arrow function
caro.forEach(modo => {
  console.log(modo.toUpperCase())
})

//O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
const teste = ['vem', 'vai', 'volta']
console.log(teste)

teste.forEach((modo, index, array) => {
  array[index] = `testando... ${modo} `
})

console.log(teste)

//É melhor utilizar map para esse tipo de situação
//.map(callback(modo, index, array)) -- Funciona da mesma forma que o forEach, mas no lugar de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração
const newTeste = teste.map(modo => {
  return `Testando com map... ${modo}`
})

console.log(newTeste)
//Precisamos utilizar return para não retornar undefined

//Se o objetivo é alterar os valores presentes no array, utilia map

//[].MAP() COM OBJETOS
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const obj = [
  {
    nome: 'luis',
    idade: 23
  },

  {
    nome: 'bernardo',
    idade: 29
  },

  {
    nome: 'hoc',
    idade: 27
  }
]

const tentaObj = obj.map(modo => modo.min),
      puxaNomes = modo => modo.nome,
      nomeAulas = obj.map(puxaNomes)

console.log(nomeAulas)

//.reduce(callback(acumulados, valorAtual, index, array), valorInicial)
//Executa a função de callback para cada item de array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior

const berserk = [10, 25, 75],
      total = berserk.reduce((acumulador, atual) => {
        return acumulador + atual
      }),
      maisTotal = berserk.reduce((acc, cur) => acc + cur, 300)

console.log(total, maisTotal)

//O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.

//Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

const arrays = [55, 1, 2, 3, 9, 4],
      tipoArray = arrays.reduce((anterior, atual) => {
        return anterior < atual ? atual : anterior
      })

console.log(tipoArray)

//reduceright()
//Começa a iterar da direta para a esquerda
const local = ['Brasil', 'Chile', 'EUA'],
      localRight = local.reduceRight((acc, local) => `${acc} ${local}`)

console.log(local, localRight)

//some() -- se pelo menos um return da iteração for truth, retornará true
const hoc = ['geografia', 'artico', 'politica'],
      temHoc = hoc.some(hoc => {
        return hoc === 'artico'
      })

console.log(temHoc)

//every() -- se todos os returns das iterações forem truth, o método irá retornar true. se um for falso, retornará false

const tentativa = ['uma', 'dois', 'tres', '']
//retornara false por uma delas esta vazia

const arraysCheias = tentativa.every(tenta => {
  return tenta
})

console.log(arraysCheias)

//find() e findindex()
//retorna o valor atual da primeira iteração que retornar um valor truth
//Já o findex retorna o index desse valor na array
const linux = ['arch', 'kali', 'ubuntu'],
      distroLinux = linux.findIndex(linux => {
        return linux === 'arch'
      })

console.log(distroLinux)

//filter() - retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truth
const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta;
}); // ['Banana', 'Uva', 'Maçã']

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]