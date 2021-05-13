import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class P extends Component {
    render() {
        return (
            <p>
                {this.props.Title} {this.props.num}
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <P Title="This is the title"></P>
              <P Title="I learn more from personal projects"></P>
              <P Title="Number of days wasted on degree: " num={720}></P>
        <A></A>
      </header>
    </div>
  );
}

export default App;
