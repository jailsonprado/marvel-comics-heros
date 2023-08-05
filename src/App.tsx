import "./App.css";
import { AppProvider } from "./hooks/request-data";
import { List } from "./pages/List";

function App() {
  return (
    <AppProvider>
      <List />
    </AppProvider>
  );
}

export default App;
