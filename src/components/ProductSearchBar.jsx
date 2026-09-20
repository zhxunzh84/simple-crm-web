function ProductSearchBar({ search, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default ProductSearchBar;