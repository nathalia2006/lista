# Lista de Desafios Pessoais

Esta é uma aplicação para gerenciar uma lista de desafios pessoais, desenvolvida utilizando a biblioteca React. A aplicação permite adicionar, editar e remover desafios, além de exibir uma lista dos desafios adicionados de forma dinâmica.

## Índice
- [Instalação](#instalação)
- [Uso](#uso)
- [Componentes](#componentes)
- [Estilização](#estilização)
- [Publicação](#publicação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação

### Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm instalados em sua máquina.

### Passos para Instalação

1. **Clone o repositório**

    Clone o repositório para a sua máquina local usando o seguinte comando:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

    Navegue até o diretório do projeto:

    ```bash
    cd personal-challenges-list
    ```

2. **Instale as dependências**

    Instale todas as dependências necessárias usando o npm:

    ```bash
    npm install
    ```

3. **Inicie a aplicação**

    Após a instalação das dependências, você pode iniciar a aplicação com o comando:

    ```bash
    npm start
    ```

    A aplicação estará disponível no endereço [http://localhost:3000](http://localhost:3000).

## Uso

### Adicionando um Novo Desafio

1. Digite o nome do desafio no campo de entrada.
2. Clique no botão "Adicionar".
3. O desafio será adicionado à lista exibida abaixo do formulário.

### Editando um Desafio

1. Clique no botão "Editar" ao lado do desafio que deseja modificar.
2. Atualize o texto do desafio.
3. Clique no botão "Salvar" para aplicar as alterações.

### Removendo um Desafio

1. Clique no botão "Remover" ao lado do desafio que deseja excluir.
2. O desafio será removido da lista.

## Componentes

### App.js

O componente principal que gerencia o estado da aplicação e renderiza os componentes filhos. Ele contém o estado dos desafios e as funções para adicionar, editar e remover desafios.

```javascript
import React, { useState } from 'react';
import ChallengeForm from './components/ChallengeForm';
import ChallengeList from './components/ChallengeList';
import './styles/App.css';

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
