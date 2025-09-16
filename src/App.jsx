import Welcome from './components/welcome'
import Alumnilogin from './components/alumnilogin'
import Studentlogin from './components/studentlogin'
import Collegelogin from './components/collegelogin'
import Alumnilogin2 from './components/Alumnilogin2'
import Alumnimain from './components/Alumnimain'
import Community from './components/Community'
import Post from './components/post'
import Events from './components/Events'
import Fund from './components/fund'
import Studentlogin2 from './components/Studentlogin2'
import Studentmain from './components/Studentmain'
import Collegelogin2 from './components/Collegelogin2'
import Collegemain from './components/collegemain'
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
       <Route path='/student-login2' element={<Studentlogin2/>}></Route>
       <Route path='/alumni-main' element={<Alumnimain/>}></Route>
        <Route path='/alumni-community' element={<Community/>}></Route>
        <Route path='/alumni-post' element={<Post/>}></Route>
        <Route path='/alumni-events' element={<Events/>}></Route>
        <Route path='/alumni-fund' element={<Fund/>}></Route>
        <Route path='/student-main' element={<Studentmain/>}></Route>
         <Route path='/college-login2' element={<Collegelogin2/>}></Route>
<Route path='/college-main' element={<Collegemain/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
