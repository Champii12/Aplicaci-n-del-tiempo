import React from 'react';
import ReactDOM from 'react-dom/client';
import  App from './App.jsx';
import './App.css';
import 'react-clock/dist/Clock.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
)