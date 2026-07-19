const URL_API = 'https://fakestoreapi.com/products';

export function getProducts() {
  return fetch(URL_API).then((resposta) => resposta.json());
}

export function getProductById(id) {
  return fetch(`${URL_API}/${id}`).then((resposta) => resposta.json());
}
