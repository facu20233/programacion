import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuarioService"; // Importa el servicio

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsuarios(); // Obtener los usuarios
                console.log("Datos obtenidos:", data);
                setUsuarios(data);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };

        fetchData();
    }, []); // Solo se ejecuta una vez al montar el componente

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

