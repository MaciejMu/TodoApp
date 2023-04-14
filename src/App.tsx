import { createContext, useState } from "react";
import TodosList from "./components/TodosList";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <h1>Todo List</h1>
        <div className="theme__switch">
          <p>Dark mode</p>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
        </div>
        <TodosList />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
