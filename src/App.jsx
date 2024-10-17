import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/View/ItemListView/ItemListContainer'
import ItemDetailContainer from './components/View/ItemDetailView/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='app-container'>
          <header className='app-header'>
            <h1 className='app-header__title'>QueBuenaPINTA</h1>
            <NavBar />
          </header>
          <main className='app-main'>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
          </main>
          <footer className='app-footer'>
            <Footer />
          </footer>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
