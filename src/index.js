import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
<<<<<<< HEAD
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
=======
import './index.css';

>>>>>>> main
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
