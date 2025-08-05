import cursorLogo from './cursor-logo.svg';
import './App.css';
import ThemeToggler from './ThemeToggler';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import WeatherWidget from './components/WeatherWidget';

function greetUser(name) {
  return `Hello, ${name}!`;
}

function App() {
  const userName = "Bharathwaj";
  const greeting = greetUser(userName);

  return (
    <div className="App">
      <ThemeToggler />
      
      <header className="App-header">
        <img src={cursorLogo} className="App-logo" alt="Cursor AI Logo" />
        <h1>{greeting}</h1>
        <p>
          Welcome to your personalized dashboard!
        </p>
        <a
          className="App-link"
          href="https://cursor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Cursor AI
        </a>
      </header>

      <main className="App-main">
        <div className="components-grid">
          <UserProfile />
          <TodoList />
          <WeatherWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
