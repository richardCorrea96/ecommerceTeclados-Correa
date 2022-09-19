import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainter from './components/ItemDetailContainter';
import CartContainer from './components/CartContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/item/:productId" element={<ItemDetailContainter/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
