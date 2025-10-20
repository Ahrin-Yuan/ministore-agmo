import './filters.styles.css'

const FilterSection = ({ 
  categories, 
  filters, 
  onCategoryChange, 
  onMinPriceChange, 
  onMaxPriceChange, 
  onClearFilters 
}) => {
  return (
    <section className="filters-section">
      <div className="filter-group">
        <label htmlFor="categoryFilter">Category</label>
        <select
          id="categoryFilter"
          value={filters.selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="minPrice">Price Range</label>
        <div className="price-range-inputs">
          <input
            type="number"
            id="minPrice"
            placeholder="Min"
            min="0"
            value={filters.priceRange.min}
            onChange={(e) => onMinPriceChange(e.target.value)}
            aria-label="Minimum price" 
          />
          <span className="price-separator">to</span>
          <input
            type="number"
            id="maxPrice"
            placeholder="Max"
            min="0"
            value={filters.priceRange.max}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            aria-label="Maximum price"
          />
        </div>
      </div>
      <div className="filter-actions">
        <button
          className="btn-clear-filters"
          onClick={onClearFilters}
          disabled={!filters.searchQuery && !filters.selectedCategory && !filters.priceRange.min && !filters.priceRange.max}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}

export default FilterSection;