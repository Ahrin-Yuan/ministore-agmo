import './empty-state.styles.css';

const EmptyState = ({ onClearFilters }) => {
  return (
    <div className="empty-state-container">
      <div className="empty-state-icon">📦</div>
      <h3>No products found</h3>
      <p>Try adjusting your filters or search query</p>
      <button className="btn-secondary" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default EmptyState;