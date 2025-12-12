import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Root variables */
  :root {
    --max-width: 1280px;
    --header-height: 80px;
  }

  /* HTML & Body */
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme, isDark }) => isDark ? theme.colors.text.dark : theme.colors.text.light};
    background-color: ${({ theme, isDark }) => isDark ? theme.colors.background.dark : theme.colors.background.light};
    transition: background-color ${({ theme }) => theme.transitions.normal},
                color ${({ theme }) => theme.transitions.normal};
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme, isDark }) => isDark ? theme.colors.text.dark : theme.colors.text.light};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme, isDark }) => isDark ? theme.colors.text.darkSecondary : theme.colors.text.lightSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }

  /* Code blocks */
  code, pre {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  pre {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme, isDark }) => 
      isDark ? theme.colors.neutral[800] : theme.colors.neutral[100]};
    overflow-x: auto;
  }

  code {
    padding: 0.2em 0.4em;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: ${({ theme, isDark }) => 
      isDark ? theme.colors.neutral[800] : theme.colors.neutral[100]};
    color: ${({ theme }) => theme.colors.primary.main};
  }

  /* Selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: white;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme, isDark }) => 
      isDark ? theme.colors.neutral[900] : theme.colors.neutral[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme, isDark }) => 
      isDark ? theme.colors.neutral[700] : theme.colors.neutral[300]};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    &:hover {
      background: ${({ theme, isDark }) => 
        isDark ? theme.colors.neutral[600] : theme.colors.neutral[400]};
    }
  }

  /* Focus visible (accessibility) */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }

  /* Utilities */
  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      padding: 0 ${({ theme }) => theme.spacing.xl};
    }
  }

  .section {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      padding: ${({ theme }) => theme.spacing['4xl']} 0;
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }

  .animate-slideUp {
    animation: slideUp 0.6s ease-out;
  }

  .animate-slideDown {
    animation: slideDown 0.6s ease-out;
  }

  .animate-scaleIn {
    animation: scaleIn 0.5s ease-out;
  }
`;