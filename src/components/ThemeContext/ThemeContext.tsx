import React from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '@constants';

type ColorMode = 'light' | 'dark';
type ThemeContextValue = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  colorMode: 'light',
  setColorMode: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>('light');

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    ) as ColorMode;

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue: ThemeContextValue = React.useMemo(() => {
    function setColorMode(newValue: ColorMode): void {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
