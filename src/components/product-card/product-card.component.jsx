import './product-card.styles.css'

const ProductCard = ({ product, onView, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image" role="img" aria-label={product.title}>
        {product.emoji}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <span className="product-price">${product.price.toFixed(2)}</span>
        <div className="product-actions">
          <button
            className="btn-primary"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="btn-secondary"
            onClick={onView}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;