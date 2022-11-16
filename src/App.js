import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chicken is mushy</h1>
        <p>
        React is so cool!
        </p>
        <p>
          steak is fake
        </p>
        <ul>
          <li>cat</li>
          <li>hat</li>
          <li>tat</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
