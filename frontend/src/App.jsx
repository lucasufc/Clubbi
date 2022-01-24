import { Rotas } from "./app/routes";
import { Area, PageHeader } from "./app/shared/Components"
import './App.css'

const App = () => {
  return (
    <div className="App">
        <PageHeader />
        <Area>
            <Rotas />   
        </Area>
         
    </div>
  );
}

export default App;
