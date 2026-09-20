import { useCallback, useMemo, useState } from "react";
import { products } from "../data/products";
import ProductSearchBar from "../components/ProductSearchBar";
import ProductList from "../components/ProductList";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  
  const [search, setSearch] = useState("");
  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className={styles.page}>
      <h1>Products</h1>

      <ProductSearchBar
        search={search}
        onSearch={handleSearch}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;