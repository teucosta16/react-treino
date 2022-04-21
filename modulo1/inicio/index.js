const menu = {
  seletor: '.principal',
};
console.log(menu.seletor.toUpperCase());
//criando uma função simples

//function upperName(name) {
//  return name.toUpperCase();
//}
//console.log(upperName('Arroz'));
//criando uma array Function

//const upperName = (name) => name.toUpperCase();
//console.log(upperName('Feijão'));

//Desestruturação
function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);

//desestruturar array
const frutas = ['uva', 'laranja'];
const [fruta1, fruta2] = frutas;

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

//REST E SPREAD

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Goole', 'Andre', 'Rafael', 'Marcos');
//spread

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numero2 = [8, 23, ...numeros, 58, 24, 32];
const carro = {
  cor: 'Azul',
  portas: 4,
};
carroAno = { ...carro, ano: 2020 };
console.log(carro);
console.log(carroAno);
