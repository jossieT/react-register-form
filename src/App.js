import React from 'react';
import './App.css';
import RegisterItemForm from './components/RegisterItemForm';
import { Roboto } from 'google-fonts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-container">
          <h3>New Dress</h3>
          <span className="emoji" role="img" aria-label="dress emoji">👗</span>
        </div>
      </header>
      <main>
        <RegisterItemForm />
      </main>
    </div>
  );
}

export default App;