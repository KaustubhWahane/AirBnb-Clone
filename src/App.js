import React from 'react';
import './App.css';
import Heading from './components/heading';
import PersonalCard from './components/CardApi'
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Categories/>
      <PersonalCard/>
    </div>
  );
}

export default App;
