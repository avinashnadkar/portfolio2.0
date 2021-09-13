import './App.css';
import { ThemeContextProvider } from "./Context/ThemeContextProvider";
import Routes from './Routes/Routes';


function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
         <Routes/>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
