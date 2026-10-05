import HomePage from './assets/componnents/pages/HomePage'
import NewAlert from './assets/componnents/pages/NewAlert'
import DeleteAlert from './assets/componnents/pages/DeleteAlert.tsx'
import {Routes, Route} from "react-router"
import './App.css'

function App() {

  return (
    <>
     <Routes>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/newalert' element={<NewAlert/>}/>
        <Route path='/deletealert' element={<DeleteAlert/>}/>
     </Routes>
    </>
  )
}

export default App