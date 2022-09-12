import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainter from './components/ItemDetailContainter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:productId" element={<ItemDetailContainter/>}/>
            {/* 
            <ItemListContainer />
            <ItemDetailContainter /> */}
          </Routes>
      </div>
    </BrowserRouter>

  );
}
export default App;
