import React from 'react';
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ButtonsState } from './context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     
<BrowserRouter>
    <ButtonsState>
        <App />
    </ButtonsState>
</BrowserRouter>
    
);