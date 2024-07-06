import React from 'react';
import FamilyTree from './components/FamilyTree';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Árvore Genealógica Interativa da Família</h1>
      <FamilyTree />
    </div>
  );
}

export default App;