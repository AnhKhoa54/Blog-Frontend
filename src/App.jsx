import { Routes, Route } from 'react-router-dom'
import MainPage from './component/MainPage/MainPage'
import WritePost from './component/WritePost/WritePost'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/new-story' element={<WritePost />}></Route>
      </Routes>
    </div>
  )
}

export default App
