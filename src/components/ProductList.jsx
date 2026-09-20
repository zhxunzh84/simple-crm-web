function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
}

export default ProductList;