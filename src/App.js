import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica se o usuário está autenticado

  return (
    <Router>
      <Routes>
        {/* Rota para login */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Rota para home, só acessível se o usuário estiver autenticado */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        {/* Redireciona para a tela de login se a rota não for encontrada */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
