const ceps = [
  '00000-000',

  '00000 000',
  '00000000'
]

for (cep of ceps) {
  console.log(cep, cep.match(/\d{5}[-\s]?\d{3}/g))
}

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  
  '000.000.000.00',
  '000000000-00',
  '00000000000'
]

for (cpf of cpfs) {
  console.log(cpf, cpf.match(/(?:\d{3}[-.]?){3}\d{2}/g))
}

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
]

for (cnpf of cnpjs) {
  console.log(cnpj, cnpj.match(/\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g))
}

const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
]

for (telefone of telefones) {
  console.log(telefone, telefone.match(/(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g));
}

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
]

for (email of emails) {
  console.log(email, email.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi));
}

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for (tag of tags) {
  console.log(tag, tag.match(/<\/?[\w\s="']+\/?>/gi));
}

const tagss = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
]

for (tag of tagss) {
  console.log(tag, tag.match(/(?<=<\/?)[\w]+/gi));
}