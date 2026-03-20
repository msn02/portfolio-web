export default function ThemeToggle({ isDark, toggle }) {
  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      className="relative inline-flex items-center w-[52px] h-[28px] rounded-full transition-colors duration-300 focus:outline-none"
      style={{ background: isDark ? '#2d2d35' : '#e2e2e8' }}
    >
      {/* Sliding thumb */}
      <span
        className="absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center transition-transform duration-300"
        style={{ transform: isDark ? 'translateX(24px)' : 'translateX(0)' }}
      >
        {isDark ? (
          // Moon icon
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        ) : (
          // Sun icon
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="#854F0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        )}
      </span>
    </button>
  );
}