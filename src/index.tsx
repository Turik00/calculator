import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator/Calculator';
import './index.css';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  </Provider>
);
