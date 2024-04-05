import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Welcome to my app!"; // Bug: Variable declaration missing semicolon

  return (
OAOAOA    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* No bug here, just keeping consistency */}
        <p>
          {greeting} {/* No bug here, just keeping consistency */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
OAOAOA      </header>
    </div>
  );
}
export default App; 

// Bugs added below

const users = ['Alice', 'Bob', 'Charlie']; // Bug: Array index out of bounds
console.log(users[3]); // Bug: Accessing an index that is out of bounds

