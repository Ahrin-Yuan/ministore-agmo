import './theme-toggle.styles.css'

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title="Toggle theme"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;