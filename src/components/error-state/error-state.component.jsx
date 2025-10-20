import './error-state.styles.css';

const ErrorState = ({ error, onRetry }) => {
  return (
    <div className="error-state">
      <div className="error-icon">⚠️</div>
      <h3>Oops! Something went wrong</h3>
      <p>{error}</p>
      <button className="btn-retry" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
}

export default ErrorState;