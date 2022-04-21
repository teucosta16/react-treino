const grupoA = 100;
const grupoB = 200;
if (grupoA > grupoB) {
  console.log('Grupo A, ganhou');
} else {
  console.log('Grupo B, ganhou');
}
//Operador ternário
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
console.log(vencedor);

const active = true;
const button = active && 'Botão está ativo';
console.log(button);
