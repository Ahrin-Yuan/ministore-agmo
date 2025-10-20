import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import FilterSection from '../../components/filters/filters.component';
import ProductGrid from '../../components/product-grid/product-grid.component';
import ProductCard from '../../components/product-card/product-card.component';
import EmptyState from '../../components/empty-state/empty-state.component';
import LoadingState from '../../components/loading-state/loading-state.component';
import ErrorState from '../../components/error-state/error-state.component';
import './home.styles.css';

const Home = ({ onAddToCart, searchQuery, clearSearchQuery, products }) => {
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // Set loading state based on products
  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false);
      setFilteredProducts(products);
    } else {
      setIsLoading(true);
    }
  }, [products]);

  // Apply filters
  useEffect(() => {
    const search = searchQuery.toLowerCase();
    const minPrice = priceRange.min ? parseFloat(priceRange.min) : 0;
    const maxPrice = priceRange.max ? parseFloat(priceRange.max) : Infinity;

    const filtered = products.filter(product => {
      const matchSearch = product.title.toLowerCase().includes(search);
      const matchCategory = !selectedCategory || product.category === selectedCategory;
      const matchPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchSearch && matchCategory && matchPrice;
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange, products]);

  // Retry function for error handling
  const retryFetch = () => {
    setIsLoading(false);
  };

  // Clear all filters - including search query
  const clearFilters = () => {
    clearSearchQuery();
    setSelectedCategory('');
    setPriceRange({ min: '', max: '' });
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (productId) => {
    onAddToCart(productId);
  };

  const categories = [...new Set(products.map(p => p.category))];

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} onRetry={retryFetch} />;

  return (
    <main className="main-content-wrapper">
      <div className="content-container">
        <FilterSection
          categories={categories}
          filters={{ searchQuery, selectedCategory, priceRange }}
          onCategoryChange={setSelectedCategory}
          onMinPriceChange={(value) => setPriceRange({ ...priceRange, min: value })}
          onMaxPriceChange={(value) => setPriceRange({ ...priceRange, max: value })}
          onClearFilters={clearFilters}
        />

        {filteredProducts.length === 0 ? (
          <EmptyState onClearFilters={clearFilters} />
        ) : (
          <section className="products-section">
            <div className="results-info">
              <p>Showing {filteredProducts.length} of {products.length} products</p>
            </div>
            <ProductGrid>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={() => handleViewProduct(product.id)}
                  onAddToCart={() => handleAddToCart(product.id)}
                />
              ))}
            </ProductGrid>
          </section>
        )}
      </div>
    </main>
  );
}

export default Home; 