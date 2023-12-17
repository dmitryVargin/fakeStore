import React, { createContext, FC, ReactNode, useCallback, useMemo, useState } from 'react';

type ThemeContext = {
  theme: 'black' | 'white';
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  toggleTheme: (...arr: any[]) => void;
  isThemeWhite: boolean;
  isThemeBlack: boolean;
};
export const ThemeContext = createContext<ThemeContext | null>(null);
export const ThemeProvider: FC<{ children: ReactNode }> = (props) => {
  const [theme, setTheme] = useState<ThemeContext['theme']>('white');

  const isThemeWhite = theme === 'white';
  const isThemeBlack = !isThemeWhite;

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'black' ? 'white' : 'black'));
  }, []);

  const value = useMemo<ThemeContext>(
    () => ({ theme, toggleTheme, isThemeWhite, isThemeBlack }),
    [theme],
  );
  return <ThemeContext.Provider value={value} {...props} />;
};
