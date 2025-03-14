import { create } from 'zustand';

type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Получаем тему из localStorage или устанавливаем по умолчанию
const getInitialTheme = (): 'light' | 'dark' => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
};

export const useThemeStore = create<ThemeState>((set) => {
  const initialTheme = getInitialTheme();
  // Применяем тему при инициализации
  document.documentElement.setAttribute('data-theme', initialTheme);

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        // Сохраняем тему в localStorage
        localStorage.setItem('theme', newTheme);
        // Применяем тему к корневому элементу
        document.documentElement.setAttribute('data-theme', newTheme);
        return { theme: newTheme };
      }),
  };
});