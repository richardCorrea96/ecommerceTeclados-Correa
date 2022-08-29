import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Productos PROXIMAMENTE ( ͡° ͜ʖ ͡°)"/>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
