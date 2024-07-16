import React from 'react';
import '../styles/ChallengeList.css'; // Caminho atualizado
import ChallengeItem from './ChallengeItem';

function ChallengeList({ challenges, editChallenge, removeChallenge }) {
  return (
    <ul className="ChallengeList">
      {challenges.map((challenge, index) => (
        <ChallengeItem 
          key={index} 
          index={index} 
          challenge={challenge} 
          editChallenge={editChallenge} 
          removeChallenge={removeChallenge} 
        />
      ))}
    </ul>
  );
}

export default ChallengeList;
