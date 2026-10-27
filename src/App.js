import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerfilProfissional from './pages/perfilProfissional';
import Home from './pages/home';

function App() {


    return (
        <BrowserRouter basename="/lacrei-na-saude">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/perfil/:id"
                    element={<PerfilProfissional />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

