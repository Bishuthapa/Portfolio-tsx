import { useTheme } from '../../App';



export default function ThemeToggle() {
  const { isDark, toogleTheme } = useTheme();

  return (
    <button
      onClick={toogleTheme}
      className="rounded-full p-2 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-900"
    >
      { !isDark? (
        // 🌙 Moon Icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        // ☀️ Sun Icon
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
