import React from 'react';
import './App.css';
import Heading from './components/heading';
import PersonalCard from './components/PersonalCard';
import Categories from './components/Categories';


function App() {
  return (
    <div className="App">

      <Heading/>
      <PersonalCard/>
      <Categories/>
    </div>
  );
}

export default App;
