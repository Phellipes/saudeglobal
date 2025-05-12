import React from 'react';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao SaúdeGlobal</h1>
      <p>Selecione uma opção no menu à esquerda.</p>
      <Dashboard />
    </div>
  );
};

export default Home;