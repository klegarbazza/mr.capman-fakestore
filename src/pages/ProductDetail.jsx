import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import boneImage from '../assets/boneprod.webp';

function ProductDetail() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Esta é uma nova busca na API, agora usando o ID presente na URL.
    getProductById(id)
      .then((produtoDaApi) => setProduto(produtoDaApi))
      .catch(() => alert('Não foi possível carregar este produto.'))
      .finally(() => setCarregando(false));
  }, [id]);

  if (carregando) {
    return <main className="pagina-detalhe"><p className="mensagem">Carregando produto...</p></main>;
  }

  if (!produto) {
    return <main className="pagina-detalhe"><p className="mensagem">Produto não encontrado.</p></main>;
  }

  const nome = id === '1' ? 'Boné Azul Classic' : 'Boné Marinho Street';
  const preco = produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <main className="pagina-detalhe">
      <Link to="/" className="voltar">← Voltar para os produtos</Link>
      <section className="detalhe-produto">
        <img src={boneImage} alt={nome} />
        <div>
          <p className="tipo-produto">MR. CAPMAN</p>
          <h1>{nome}</h1>
          <p className="preco-detalhe">{preco}</p>
          <p>Boné versátil para completar o seu visual em qualquer ocasião.</p>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
