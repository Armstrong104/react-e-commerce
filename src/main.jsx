import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider, FilterProvider } from './contexts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </StrictMode>
);
