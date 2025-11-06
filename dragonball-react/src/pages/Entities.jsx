import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/dragonballApi";
import CharacterCard from "../components/CharacterCard";

function Entities() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchCharacters({ limit: 20 });
        setCharacters(data);
      } catch (err) {
        setError("Error loading entities.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section>
      <h2 className="section-title">Entities</h2>
      <p className="section-subtitle">
        Listado de personajes con nombre, raza y ki.
      </p>

      {loading && <p>Cargando entidades...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} mode="detailed" />
        ))}
      </div>
    </section>
  );
}

export default Entities;
