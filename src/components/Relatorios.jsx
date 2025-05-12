import React from 'react';
import * as XLSX from 'xlsx';

const Relatorios = () => {
  const exportToExcel = () => {
    const data = [
      { Doença: "Dengue", Casos: 1200, Óbitos: 10 },
      { Doença: "Covid-19", Casos: 900, Óbitos: 15 }
    ];
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Dados");
    XLSX.writeFile(wb, "relatorio.xlsx");
  };

  return (
    <div>
      <h2>Exportar Relatório</h2>
      <button onClick={exportToExcel}>Baixar Excel</button>
    </div>
  );
};

export default Relatorios;