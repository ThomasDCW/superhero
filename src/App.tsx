import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles/theme';

function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className='App'>
        <GlobalStyles />
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label='Light mode' role='img'>
              🌞
            </span>
          ) : (
            <span aria-label='Dark mode' role='img'>
              🌜
            </span>
          )}
        </button>
        <p>COUCOU</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
