import { Routes, Route } from 'react-router-dom'
import MainPage from './component/MainPage/MainPage'
import WritePost from './component/WritePost/WritePost'
import ShowPost from './component/ShowPost/ShowPost'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/new-story' element={<WritePost />}></Route>
        <Route path='/show-post' element={<ShowPost />}></Route>
      </Routes>
    </div>
  )
}

export default App
