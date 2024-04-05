import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Welcome to my app!" // Bug: Missing semicolon

  // Bug: Using dangerouslySetInnerHTML can lead to XSS vulnerabilities
  const htmlContent = "<script>alert('Vulnerability!');</script>";
  const dangerouslySetInnerHTML = { __html: htmlContent };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
OAOAOA        <p>
          {greeting}
        </p>
        {/* Bug: Using dangerouslySetInnerHTML without proper sanitization */}
        <div dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
OAOAOA        >
          Learn React
        </a>
      </header>
    </div>
  )
}
export default App; // Bug: Missing semicolon

// Bugs added below

const users = ['Alice', 'Bob', 'Charlie']; // Bug: Missing semicolon
console.log(users[3]); // Bug: Array index out of bounds

