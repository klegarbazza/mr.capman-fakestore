import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import boneImage from './assets/boneprod.webp';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((produtosDaApi) => {
        // A API não possui bonés, por isso usei os preços dela e
        // apresentei os dois produtos com o tema da nossa loja.
        const boneAzul = {
          id: produtosDaApi[0].id,
          nome: 'Boné Azul Classic',
          preco: produtosDaApi[0].price,
          imagem: boneImage,
        };

        const boneMarinho = {
          id: produtosDaApi[1].id,
          nome: 'Boné Marinho Street',
          preco: produtosDaApi[1].price,
          imagem: boneImage,
        };

        setProdutos([boneAzul, boneMarinho]);
        setCarregando(false);
      })
      .catch(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="banner">
          <p>NOVA COLEÇÃO</p>
          <h1>O boné certo para o seu estilo.</h1>
          <a href="#produtos">Ver produtos</a>
        </section>

        <section id="produtos" className="produtos">
          <h2>Produtos em destaque</h2>

          {carregando ? (
            <p>Carregando produtos...</p>
          ) : (
            <div className="lista-produtos">
              {produtos.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer>© 2026 Mr. CapMan</footer>
    </>
  );
}

export default App;
