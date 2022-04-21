const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus Dados',
];
const precosFiltros = precos.filter((p) => p.includes('R$'));
const precosNumeros = precosFiltros.map((preco) =>
  Number(preco.replace('R$ ', '')),
);
//console.log(preco.includes('R$'));
//return preco.includes('R$'););
console.log(precosNumeros);

//MAP PEGA UMA ARRAY E TRANSFORMA EM UMA NOVA ARRAY
