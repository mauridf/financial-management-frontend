import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Menu from '../components/Menu'; // Importa o componente de Menu

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Validação do login
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token na Home:', token); // Log do token
    if (!token) {
      navigate('/'); // Redireciona para a tela de login se não houver token
    } else {
      setLoading(false); // Marca como carregado quando o token está presente
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redireciona para a tela de login após logout
  };

  if (loading) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">Carregando...</Typography>
      </Box>
    );
  }

  return (
    <div>
      <Menu /> {/* Adiciona o Menu */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f3e5f5 30%, #f5f5f5 90%)',
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Gestão Financeira
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Bem-vindo ao sistema de Gestão Financeira
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{
            mt: 2,
            py: 1.5,
            px: 4,
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
          }}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default Home;