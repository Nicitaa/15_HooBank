/* react */
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
/* context */
import { NumbersProvider,MessageProvider,ModalState } from './context';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     
<BrowserRouter>
    <ModalState>
        <MessageProvider>
            <NumbersProvider>
                <App />  
            </NumbersProvider>
        </MessageProvider>
    </ModalState>
</BrowserRouter>
    
);