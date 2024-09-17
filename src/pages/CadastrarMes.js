import React, { useEffect, useState } from 'react';
import { getMeses, createMes } from '../api/api';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import Menu from '../components/Menu';

const CadastrarMes = () => {
  const [meses, setMeses] = useState([]);
  const [novoMes, setNovoMes] = useState('');

  useEffect(() => {
    fetchMeses();
  }, []);

  const fetchMeses = async () => {
    const response = await getMeses();
    setMeses(response.data);
  };

  const handleCreateMes = async () => {
    await createMes({ nome: novoMes });
    fetchMeses(); // Atualiza a listagem
  };

  return (
    <div>
      <Menu />
      <TextField
        label="Novo Mês"
        value={novoMes}
        onChange={(e) => setNovoMes(e.target.value)}
      />
      <Button onClick={handleCreateMes} variant="contained">Novo</Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Mês/Ano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meses.map((mes) => (
            <TableRow key={mes.id}>
              <TableCell>{mes.id}</TableCell>
              <TableCell>{mes.mesAno}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CadastrarMes;
