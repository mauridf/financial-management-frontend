import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({ nome, email, senha });
      alert('Usuário registrado com sucesso!');
      navigate('/');
    } catch (error) {
      alert('Erro no cadastro');
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
          Cadastro de Usuário
        </Typography>
        
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />

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
            onClick={handleRegister}
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
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
