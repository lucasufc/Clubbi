import { Rotas } from "./app/routes";
import { Area, Navbar } from "./app/shared/Components"
import './App.css'

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Area>
            <Rotas />   
        </Area>
         
    </div>
  );
}

export default App;
