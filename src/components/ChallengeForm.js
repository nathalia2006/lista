import React, { useState } from 'react';
import '../styles/ChallengeForm.css'; // Caminho atualizado

function ChallengeForm({ addChallenge }) {
  const [challenge, setChallenge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addChallenge(challenge);
    setChallenge('');
  };

  return (
    <form onSubmit={handleSubmit} className="ChallengeForm">
      <input 
        type="text" 
        value={challenge} 
        onChange={(e) => setChallenge(e.target.value)} 
        placeholder="Novo Desafio"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default ChallengeForm;
