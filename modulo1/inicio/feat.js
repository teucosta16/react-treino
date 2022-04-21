//função para buscar dados da API
/*fetch('https://randomuser.me/api/?results=10')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });*/

//sintaxe: função assincrona
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(response);
  return json;
}
const produtos = fetchProdutos('https://randomuser.me/api/?results=10');
console.log(produtos);
