import { Link } from 'react-router-dom';

function ProductCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className="card-produto">
      <Link to={`/produto/${produto.id}`}>
        <img src={produto.imagem} alt={produto.nome} />
        <h3>{produto.nome}</h3>
        <p>{precoFormatado}</p>
        <span>Ver detalhes</span>
      </Link>
    </article>
  );
}

export default ProductCard;
