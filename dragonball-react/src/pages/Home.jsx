import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/dragonballApi";
import CharacterCard from "../components/CharacterCard";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchCharacters({ limit: 8 });
        setCharacters(data);
      } catch (err) {
        setError("Error loading characters.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section>
      <section className="hero">
        <h2>Dragon Ball Explorer</h2>
        <p>
          Explora personajes del universo Dragon Ball usando una API pública.
        </p>
      </section>

      <h2 className="section-title">Personajes destacados</h2>

      {loading && <p>Cargando personajes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} mode="simple" />
        ))}
      </div>
    </section>
  );
}

export default Home;
