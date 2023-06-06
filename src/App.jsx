import { Routes, Route } from 'react-router-dom'
import MainPage from './component/mainPage/MainPage'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/new-story'></Route>
      </Routes>
    </div>
  )
}

export default App
