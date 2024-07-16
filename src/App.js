import React, { useState } from 'react';
import './styles/App.css';  
import ChallengeForm from './components/ChallengeForm';
import ChallengeList from './components/ChallengeList';

function App() {
  const [challenges, setChallenges] = useState([]);

  const addChallenge = (challenge) => {
    setChallenges([...challenges, challenge]);
  };

  const editChallenge = (index, updatedChallenge) => {
    const updatedChallenges = challenges.map((challenge, i) => 
      i === index ? updatedChallenge : challenge
    );
    setChallenges(updatedChallenges);
  };

  const removeChallenge = (index) => {
    setChallenges(challenges.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Lista de Desafios Pessoais</h1>
      <ChallengeForm addChallenge={addChallenge} />
      <ChallengeList 
        challenges={challenges} 
        editChallenge={editChallenge} 
        removeChallenge={removeChallenge} 
      />
    </div>
  );
}

export default App;
