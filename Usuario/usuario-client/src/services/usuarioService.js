import api from "./api";

import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuarioService";

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsuarios();
                console.log("Datos obtenidos:", data); // Mostrar los datos en la consola
                if (Array.isArray(data)) {
                    setUsuarios(data);
                } else {
                    console.error("Error: La respuesta no es un arreglo de usuarios.");
                }
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Lista de Usuarios</h1>
            <ul className="user-list">
                {usuarios.length === 0 ? (
                    <li>No hay usuarios disponibles</li>
                ) : (
                    usuarios.map((usuario) => (
                        <li key={usuario.id}>
                            <strong>{usuario.nombre}</strong> - {usuario.correo}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default UsuarioList;


// ------------
// export const getUsuarios = async () => {
//     try {
//         const response = await api.get("/Usuario");
//         console.log("Respuesta de la API:", response.data); // Verificar la respuesta
//         return response.data;
//     } catch (error) {
//         console.error("Error al obtener usuarios:", error);
//         throw error; // Re-throw the error to be caught in UsuarioList
//     }
// };

// ------------
// // Obtener todos los usuarios
// export const getUsuarios = async () => {
//     const response = await api.get("/Usuario");
//     return response.data;
// };

// // Obtener un usuario por ID
// export const getUsuarioById = async (id) => {
//     const response = await api.get(`/Usuario/${id}`);
//     return response.data;
// };

// // Crear un nuevo usuario
// export const createUsuario = async (usuario) => {
//     const response = await api.post("/Usuario", usuario);
//     return response.data;
// };

// // Actualizar un usuario
// export const updateUsuario = async (id, usuario) => {
//     await api.put(`/Usuario/${id}`, usuario);
// };

// // Eliminar un usuario
// export const deleteUsuario = async (id) => {
//     await api.delete(`/Usuario/${id}`);
// };
