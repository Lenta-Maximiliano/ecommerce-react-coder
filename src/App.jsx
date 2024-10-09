import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/View/ItemListView/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <header className='app-header'>
          <h1 className='app-header__title'>QueBuenaPINTA</h1>
          <NavBar />
        </header>
        <main className='app-main'>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  
  )
}

export default App
