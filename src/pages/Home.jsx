import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { getProducts } from '../services/api';
import boneImage from '../assets/boneprod.webp';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  useEffect(() => {
    getProducts()
      .then((produtosDaApi) => {
        // A API não tem bonés. Usamos os preços dela e adaptamos os produtos ao tema da loja.
        setProdutos([
          {
            id: produtosDaApi[0].id,
            nome: 'Boné Azul Classic',
            preco: produtosDaApi[0].price,
            categoria: 'Casual',
            imagem: boneImage,
          },
          {
            id: produtosDaApi[1].id,
            nome: 'Boné Marinho Street',
            preco: produtosDaApi[1].price,
            categoria: 'Street',
            imagem: boneImage,
          },
        ]);
      })
      .catch(() => alert('Não foi possível carregar os produtos.'))
      .finally(() => setCarregando(false));
  }, []);

  const produtosFiltrados = produtos.filter((produto) => {
    return categoriaSelecionada === 'Todos' || produto.categoria === categoriaSelecionada;
  });

  return (
    <main>
      <section className="banner">
        <p>NOVA COLEÇÃO</p>
        <h1>O boné certo para o seu estilo.</h1>
        <a href="#produtos">Ver produtos</a>
      </section>

      <section id="produtos" className="produtos">
        <h2>Produtos em destaque</h2>
        <CategoryFilter
          categoriaSelecionada={categoriaSelecionada}
          mudarCategoria={setCategoriaSelecionada}
        />

        {carregando ? (
          <p className="mensagem">Carregando produtos...</p>
        ) : (
          <div className="lista-produtos">
            {produtosFiltrados.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
