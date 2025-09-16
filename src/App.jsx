import Welcome from './components/welcome'
import Alumnilogin from './components/alumnilogin'
import Studentlogin from './components/studentlogin'
import Collegelogin from './components/collegelogin'
import Alumnilogin2 from './components/Alumnilogin2'
import Alumnimain from './components/Alumnimain'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 
  return (
    <>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/alumni-login' element={<Alumnilogin/>}></Route>
     
      <Route path='/student-login' element={<Studentlogin/>}></Route>
      <Route path='/college-login' element={<Collegelogin/>}></Route>
       <Route path='/alumni-login2' element={<Alumnilogin2/>}></Route>
       <Route path='/alumni-main' element={<Alumnimain/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
