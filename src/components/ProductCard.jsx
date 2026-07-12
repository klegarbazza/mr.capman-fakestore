function ProductCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className="card-produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{precoFormatado}</p>
    </article>
  );
}

export default ProductCard;
