import React, { useState } from 'react';
import '../styles/ChallengeItem.css'; // Caminho atualizado

function ChallengeItem({ index, challenge, editChallenge, removeChallenge }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newChallenge, setNewChallenge] = useState(challenge);

  const handleEdit = () => {
    editChallenge(index, newChallenge);
    setIsEditing(false);
  };

  return (
    <li className="ChallengeItem">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newChallenge} 
            onChange={(e) => setNewChallenge(e.target.value)} 
          />
          <button onClick={handleEdit}>Salvar</button>
        </>
      ) : (
        <>
          <span>{challenge}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => removeChallenge(index)}>Remover</button>
        </>
      )}
    </li>
  );
}

export default ChallengeItem;
