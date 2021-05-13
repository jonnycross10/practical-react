import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class P extends Component {
    render() {
        return (
            <p>
                {this.props.Title} {this.props.num} 
            
            <div>
                And: 9 + 10 = {this.props.myFunc(11, 10)}
            </div>
            </p>
        );
    }
}

const A = () => (
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn to code React
    </a>
    );



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

        <A></A>
      </header>
    </div>
  );
}

export default App;
