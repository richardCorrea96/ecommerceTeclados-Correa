import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainter from './components/ItemDetailContainter';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <h2 className="title">New arrival</h2> */}
      {/* <ItemListContainer /> */}
      <ItemDetailContainter />
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
