import { createCss } from '@stitches/react';

export const { styled, css, theme, getCssString } = createCss({
  theme: {
    colors: {
      text: 'hsl(222, 22%, 5%)',
      background: '#fff',
      primary: '#7f5caa',
      secondary: '#87A7F9',
      gray100: 'hsl(225, 25%, 95%)',
      gray200: 'hsl(225, 16%, 90%)',
      gray300: 'hsl(225, 8%, 80%)',
      gray400: 'hsl(225, 8%, 70%)',
      gray500: 'hsl(225, 7%, 60%)',
      gray600: 'hsl(225, 15%, 50%)',
      gray700: 'hsl(225, 12%, 40%)',
      gray900: 'hsl(225, 25%, 20%)',
      gray1000: 'hsl(225, 15%, 15%)',
      subtle: '#f5f7ff',
      shadow: 'rgba(0, 0, 0, 0.1)',
      logoLight: '#87729d',
      logoDark: '#532582',
      syntaxBg: '#151628',
      syntaxFg: '#a2a3aa',
      syntaxHighlight: '#330033',
      syntaxTxt: '#c6797e',
      syntaxComment: '#5d636e',
      syntaxProp: '#d7a1a5',
      syntaxPunctuation: '#5d5d6b',
      syntaxBool: '#f0b7a7',
      syntaxVal: '#969e92',
      syntaxVar: '#db6375',
      syntaxKeyword: '#8283a1',
      syntaxStr: '#969e92',
      syntaxName: '#dbcdab',
      syntaxDel: '#db6375',
      syntaxRegex: '#969e92',
      syntaxFn: '#d7a1a5',
    },
    fonts: {
      inter:
        '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono: '"MonoLisa", "Fira Mono", monospace',
    },
    fontSizes: {
      1: '0.8125rem',
      2: '1rem',
      3: '1.25rem',
      4: '1.5rem',
      5: '2rem',
      6: '3rem',
    },
    fontWeights: {
      light: 400,
      medium: 500,
      bold: 700,
    },
    zIndices: {
      hero: 1,
      mainContent: 10,
      header: 100,
    },
  },
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 540px)',
    bp3: '(min-width: 900px)',
    bp4: '(min-width: 1024px)',
    bp5: '(min-width: 1440px)',
  },
});

export const darkTheme = theme('dark', {
  colors: {
    text: 'hsl(0, 0%, 95%)',
    background: '#0e0e1a',
    primary: '#C6797E',
    secondary: '#969E92',
    gray100: 'hsl(210, 15%, 20%)',
    gray200: 'hsl(210, 15%, 25%)',
    gray300: 'hsl(210, 10%, 40%)',
    gray400: 'hsl(210, 9%, 45%)',
    gray500: 'hsl(210, 8%, 50%)',
    gray600: 'hsl(210, 12%, 55%)',
    gray700: 'hsl(210, 14%, 66%)',
    gray900: 'hsl(210, 25%, 88%)',
    gray1000: 'hsl(210, 25%, 96%)',
    subtle: '#151628',
    shadow: 'rgba(0, 0, 0, 0.4)',
    logoLight: '#D7A1A5',
    logoDark: '#9C5F63',
  },
});
