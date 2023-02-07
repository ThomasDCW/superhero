import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#eeeeee',
  text: '#1f397c',
  border: '#1f397c',
};
export const darkTheme = {
  body: '#1b2130',
  text: '#eeeeee',
  border: '#eeeeee',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.border};;

    transition: background 0.3s ease-in, color 0.3s ease-in;
  }
`;
