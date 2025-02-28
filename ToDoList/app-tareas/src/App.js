// src/App.js
import React, { useState, useEffect } from 'react';
import { getTareas, createTarea, updateTarea, deleteTarea } from './services/TareasService';

function App() {
  const [tareas, setTareas] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    // Cargar tareas al inicio
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    const data = await getTareas();
    setTareas(data);
  };

  const handleCreateTarea = async () => {
    const nuevaTarea = { descripcion, completado };
    const tareaCreada = await createTarea(nuevaTarea);
    setTareas([...tareas, tareaCreada]);
  };

  const handleUpdateTarea = async (id) => {
    const tareaActualizada = { descripcion, completado };
    const updatedTarea = await updateTarea(id, tareaActualizada);
    setTareas(tareas.map((tarea) => (tarea.id === id ? updatedTarea : tarea)));
  };

  const handleDeleteTarea = async (id) => {
    await deleteTarea(id);
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción de la tarea"
      />
      <button onClick={handleCreateTarea}>Crear Tarea</button>

      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.descripcion} - {tarea.completado ? 'Completada' : 'Pendiente'}
            <button onClick={() => handleUpdateTarea(tarea.id)}>Actualizar</button>
            <button onClick={() => handleDeleteTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
