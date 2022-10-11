import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainter';
import CartContainer from './components/CartContainer/CartContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import {ToastContainer} from 'react-toastify'

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
          <Footer/>
        </div>
        <ToastContainer/>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
