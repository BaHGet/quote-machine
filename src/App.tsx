import { Route, Routes } from 'react-router-dom'
import './App.css'
import { QuoteProvider } from './Context/QuoteContext'
import { Main } from './Pages/Main/MainPage'

function App() {

  return (
    <Routes>
      <Route path='quote-machine' element={
        <QuoteProvider>
          <Main />
          <div className='bg'></div>
        </QuoteProvider>}
      />
    </Routes>
    
  )
}

export default App
