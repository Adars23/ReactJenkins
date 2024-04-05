import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Welcome to my app!" // Bug: Missing semicolon

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
        </p>
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Welcome to my app!" // Bug: Missing semicolon

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
        </p>
        <a
OAOAOA          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
export default App // Bug: Missing semicolon

// Bugs added below

const users = ['Alice', 'Bob', 'Charlie'] // Bug: Missing semicolon
console.log(users[3]) // Bug: Array index out of bounds

