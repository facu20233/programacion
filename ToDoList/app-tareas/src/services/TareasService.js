// src/services/TareasService.js
import axios from 'axios';

const API_URL = 'https://localhost:5096/api/tareas'; // URL de tu API

export const getTareas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener tareas', error);
    throw error;
  }
};

export const createTarea = async (nuevaTarea) => {
    try {
        const response = await axios.post(API_URL, nuevaTarea, {
            headers: { 'Content-Type': 'application/json' } // Asegúrate de enviar el header correcto
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        throw error;
    }
};

export const updateTarea = async (id, tarea) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, tarea);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar tarea', error);
    throw error;
  }
};

export const deleteTarea = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar tarea', error);
    throw error;
  }
};
