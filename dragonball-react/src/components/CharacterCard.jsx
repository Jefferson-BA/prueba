function CharacterCard({ character, mode = "simple" }) {
  const { name, race, ki, image } = character;

  return (
    <article className="card">
      {image && (
        <img
          src={image}
          alt={name}
          className="card-image"
          loading="lazy"
        />
      )}
      <div className="card-body">
        <h3 className="card-title">{name}</h3>

        {mode === "detailed" && (
          <ul className="card-list">
            <li><strong>Race:</strong> {race || "Unknown"}</li>
            <li><strong>Ki:</strong> {ki || "N/A"}</li>
          </ul>
        )}
      </div>
    </article>
  );
}

export default CharacterCard;
