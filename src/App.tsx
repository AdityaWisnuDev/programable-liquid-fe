import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Trading from './components/trading/trading'
import CreateForm from './components/create/create'

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={ <Trading/> }/> {/** sementara */}
          <Route path='/trading' element={ <Trading/> }/>
          <Route path='/create' element={ <CreateForm/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
