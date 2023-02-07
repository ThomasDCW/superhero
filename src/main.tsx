import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './App';
import Layout from './styles/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Layout>
    <Reset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Layout>
);
