// usuarioService.jsx

import api from "./api";
import React, { useEffect, useState } from "react";

// Obtener todos los usuarios
export const getUsuarios = async () => {
    try {
        const response = await api.get("usuarios"); // Llamada a la API
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error; 
    }
};


