import cursorLogo from './cursor-logo.svg';
import styles from './App.module.css';
import ThemeToggler from './ThemeToggler';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import WeatherWidget from './components/WeatherWidget';

/**
 * Returns a greeting message for the given user name.
 * @param {string} name - The name of the user to greet.
 * @returns {string} The greeting message.
 */
function greetUser(name) {
  return `Hello, ${name}!`;
}

/**
 * Main application component for the dashboard.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const userName = "Bharathwaj";
  const greeting = greetUser(userName);

  return (
    <div className={styles.app}>
      <ThemeToggler />
      
      <header className={styles.appHeader}>
        <img src={cursorLogo} className={styles.appLogo} alt="Cursor AI Logo" />
        <h1>{greeting}</h1>
        <p>
          Welcome to your personalized dashboard!
        </p>
        <a
          className={styles.appLink}
          href="https://cursor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Cursor AI
        </a>
      </header>

      <main className={styles.appMain}>
        <div className={styles.componentsGrid}>
          <UserProfile />
          <TodoList />
          <WeatherWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
