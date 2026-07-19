function CategoryFilter({ categoriaSelecionada, mudarCategoria }) {
  const categorias = ['Todos', 'Casual', 'Street'];

  return (
    <div className="filtros" aria-label="Filtrar produtos">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={categoriaSelecionada === categoria ? 'selecionado' : ''}
          onClick={() => mudarCategoria(categoria)}
          type="button"
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
