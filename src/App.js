import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="title">New arrival</h2>
      <ItemListContainer />
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
