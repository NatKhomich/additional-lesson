import React from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton';
import {Test} from './components/Test';

function App() {

  const prices = [
    {id: 1, model: 'html', price: 100200},
    {id: 2, model: 'js', price: 200500},
    {id: 3, model: 'react', price: 120000},
    {id: 4, model: '44444', price: 120000}
  ]

  return (
      <div className="App">
        <div> Доп понедельник 4 неделя </div>

        <Test prices={prices} >
          <SuperButton callBack={ ()=> {} } color={'red'}> RedButton </SuperButton>
          <SuperButton callBack={ ()=> {} } color={'secondary'}> SecondaryButton </SuperButton>
          <SuperButton callBack={ ()=> {} } disabled> DefaultButton </SuperButton>
        </Test>
        <Test prices={prices} >
          <input type="text"/>
          <SuperButton callBack={ ()=> {} } color={'red'}> RedButton </SuperButton>
        </Test>
      </div>
  );
}

export default App;

