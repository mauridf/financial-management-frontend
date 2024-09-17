import React, { useState } from 'react';
import { login } from '../api/api';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(email, senha);
      console.log('Login successful:', response.data);
      
      localStorage.setItem('token', response.data.token);
      
      console.log('Navegando para /home');
      navigate('/home'); // Redireciona para a página inicial
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Login falhou! Verifique suas credenciais.');
    }
};  

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f3e5f5 30%, #f5f5f5 90%)',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          borderRadius: '12px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button
            onClick={handleLogin}
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            Login
          </Button>

          <Button
            onClick={() => navigate('/register')}
            fullWidth
            variant="text"
            sx={{
              mt: 2,
              color: 'primary.main',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Cadastrar Novo Usuário
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
