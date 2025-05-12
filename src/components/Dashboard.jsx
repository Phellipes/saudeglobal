import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Dengue', 'Covid-19', 'Zika'],
    datasets: [
      {
        label: 'Casos Confirmados',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: [1200, 900, 400],
      },
    ],
  };

  return (
    <div>
      <h2>Casos de Doenças</h2>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;