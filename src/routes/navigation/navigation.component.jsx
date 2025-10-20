import { Fragment } from "react";
import { Outlet, Link } from "react-router";
import ThemeToggle from "../../components/theme-toggle/theme-toggle.component";

import './navigation.styles.css'

const Navigation = ({ 
  searchQuery,
  setSearchQuery,
  isDarkMode,
  toggleTheme,
  cartCount,
  setIsCartOpen
}) => {
  return (
    <Fragment> 
      <nav className="nav-container">
        <div className="nav-content">
          {/* Brand Logo - Link to Home */}
          <Link className="brand-logo-link" to="/" >
            <div className="brand-logo">MiniStore</div>
          </Link>

          <div className="nav-controls">
            {/* Search Wrapper */}
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>

            {/* Theme Toggle Component */}
            <ThemeToggle 
              isDarkMode={isDarkMode} 
              toggleTheme={toggleTheme} 
            />

            {/* Cart Toggle Button */}
            <button
              className="cart-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping cart with ${cartCount} items`}
              title="View cart"
            >
              🛒
              {cartCount > 0 && (
                <span className="cart-badge" aria-hidden="true">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;