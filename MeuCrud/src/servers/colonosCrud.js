import { API_URL } from "./configApi";

export async function getColonos() {

    const response = await fetch(`${API_URL}/colonos`);
    const data = await response.json();
    return data;
}

export async function createColono(colono) {
    
    const response = await fetch(`${API_URL}/colonos`, {
        method: "POST", // método HTTP
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(colono)
    });

    return response.json();
}

export async function updateColono(id, colono) {
    
    const response = await fetch(`${API_URL}/colonos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(colono)
    });

    return response.json();
}

export async function deleteColono(id) {
    
    await fetch(`${API_URL}/colonos/${id}`, {
        method: "DELETE"
    });
}