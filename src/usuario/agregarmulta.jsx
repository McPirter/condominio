import React, { useState, useEffect } from 'react';
import './agregarMulta.css';

const AgregarMulta = () => {
  const [multaData, setMultaData] = useState({
    monto: '',
    descripcion: '',
    fecha: '',
    departamento: '', // Nuevo campo para el departamento
  });

  const [departamentos, setDepartamentos] = useState([]); // Estado para los departamentos

  // Obtener los departamentos disponibles
  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await fetch('https://apicondominio-p4vc.onrender.com/api/obtener_departamentos');
        const result = await response.json();
        setDepartamentos(result);
      } catch (error) {
        console.error('Error al obtener departamentos:', error);
      }
    };

    fetchDepartamentos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMultaData({ ...multaData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://apicondominio-p4vc.onrender.com/api/agregar_multa', {
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
        <label htmlFor="departamento">Departamento</label>
        <select
  id="departamento"
  name="departamento"
  value={multaData.departamento}
  onChange={handleChange}
>
  <option value="">Selecciona un departamento</option>
  {departamentos.map((dep) => (
    <option key={dep._id} value={dep._id}>
      {dep.numero} {dep.lugar}  {/* Mostrar departamento como "666 Casa" */}
    </option>
  ))}
</select>

        <button type="submit">Agregar Multa</button>
      </form>
    </div>
  );
};

export default AgregarMulta;
