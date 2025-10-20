import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import './product-detail.styles.css';
import ErrorState from '../../components/error-state/error-state.component';


const ProductDetail = ({ onAddToCart, products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find product by ID from products prop
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product.id);
      navigate('/');
    }
  };

  if (!product) { 
    return (
      <div className="product-detail-section">
        <button className="btn-back" onClick={handleBackClick}>
          ← Back to Products
        </button>
        <div className="error-state">
          <div className="error-icon">⚠️</div> 
          <h3>Product not found</h3>
        </div>
      </div>
    );
  }

  return (
    <section className="product-detail-section">
      <button className="btn-back" onClick={handleBackClick}>
        ← Back to Products
      </button>
      <div className="detail-container">
        <div className="detail-image-wrapper">
          <span className="detail-emoji" role="img" aria-label={product.title}>
            {product.emoji}
          </span>
        </div>
        <div className="detail-info-wrapper">
          <span className="detail-category">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-description">{product.description}</p>
          <div className="detail-price">${product.price.toFixed(2)}</div>
          <button
            className="btn-primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;