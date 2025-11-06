import axios from "axios";

const api = axios.create({
  baseURL: "https://dragonball-api.com/api",
});

// Obtiene personajes; limit y page son configurables
export async function fetchCharacters({ page = 1, limit = 12 } = {}) {
  const response = await api.get("/characters", {
    params: { page, limit },
  });

  // La API puede devolver {items, meta} o directamente un array
  const data = response.data;
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.items)) return data.items;
  return [];
}
