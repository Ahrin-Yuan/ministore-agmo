import './loading-state.styles.css'

const LoadingState = () => {
  return (
    <div className="loading-state">
      <div className="spinner">⏳</div>
      <p>Loading products...</p>
    </div>
  );
}

export default LoadingState;
