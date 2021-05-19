import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import P from './Components/P';
import A from './Components/A';
import Counter from './Components/Counter';
import ImageSlider from './Components/ImageSlider';






function App() {

   
  const add = (a, b) => a + b;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <P Title="Number of days wasted on irrelevant classes: "
                  num={720}
                  myFunc={add}
              ></P>
              <Counter> </Counter>

        <A></A>
          </header>
          <ImageSlider></ImageSlider>
    </div>
  );
}

export default App;
