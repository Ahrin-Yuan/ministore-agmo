import './product-grid.styles.css'

const ProductGrid = ({ children }) => {
  return (
    <div className="products-grid">
      {children}
    </div>
  );
}

export default ProductGrid;