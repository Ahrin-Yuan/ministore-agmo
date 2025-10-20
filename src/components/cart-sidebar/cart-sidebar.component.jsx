import './cart-sidebar.styles.css';

const CartSidebar = ({ 
  isCartOpen, 
  setIsCartOpen, 
  cart, 
  removeFromCart, 
  updateQuantity 
}) => {
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0.00);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && ( 
        <div
          className="overlay-backdrop"
          onClick={() => setIsCartOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close cart overlay"
        />
      )}

      {/* Cart Sidebar */}
      <aside className={`cart-sidebar ${isCartOpen ? 'open' : ''}`} aria-label="Shopping cart">
        <div className="cart-header-wrapper">
          <h2>Your Cart</h2>
          <button
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart" 
          >
            ✕
          </button>
        </div>

        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">🛒</div>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image" role="img" aria-label={item.title}>
                  {item.emoji}
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="quantity-display" aria-label={`Quantity: ${item.quantity}`}>
                      {item.quantity}
                    </span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer-wrapper">
          <div className="cart-total-display">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={cart.length === 0}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}; 

export default CartSidebar; 