import React, { useState } from 'react';
import './agregarMulta.css';

const AgregarMulta = () => {
  const [multaData, setMultaData] = useState({
    monto: '',
    descripcion: '',
    fecha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMultaData({ ...multaData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/agregar_multa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(multaData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Multa agregada exitosamente');
      } else {
        alert(result.message || 'Error al agregar multa');
      }
    } catch (error) {
      console.error('Error al agregar multa:', error);
      alert('Error al agregar multa');
    }
  };

  return (
    <div className="agregar-multa-container">
      <h1>Agregar Multa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="monto">Monto</label>
        <input
          type="text"
          id="monto"
          name="monto"
          value={multaData.monto}
          onChange={handleChange}
        />
        <label htmlFor="descripcion">Descripción</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={multaData.descripcion}
          onChange={handleChange}
        />
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={multaData.fecha}
          onChange={handleChange}
        />
        <button type="submit">Agregar Multa</button>
      </form>
    </div>
  );
};

export default AgregarMulta;
