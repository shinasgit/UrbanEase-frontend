
import './App.css'
import UrbanFooter from './components/UrbanFooter'
import { Routes, Route } from 'react-router-dom'
import Home from './users/pages/Home'
import HouseBooking from './users/pages/HouseBooking'
import Appliances from './users/pages/Appliances'
import Helpline from './users/pages/Helpline'
import Services from './users/pages/Services'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import HomeSP from './ServiceProvider/pages/HomeSP'
import HouseBookSP from './ServiceProvider/pages/HouseBookSP'

// import ConnectionPage from './users/pages/ConnectionPage'




function App() {
  
  return (
    <>
    <Routes>
      <Route path={""} element={<Home/>}/>
      <Route path={"/housebook"} element={<HouseBooking/>}/>
      <Route path={"/appliancesbook"} element={<Appliances/>}/>
      <Route path={"/services"} element={<Services/>}/>
      <Route path={"/helpline"} element={<Helpline/>}/>
      <Route path={'/login'} element={<Auth/>}/>
      <Route path='register' element={<Auth register/>}/>
      <Route path={"/pnf"} element={<Pnf/>}/>
      {/* <Route path={"/ConnectionPage"} element={<ConnectionPage/>}/> */}

      {/* servise provider module 2 */}
      <Route path={"/housebookSP"} element={<HouseBookSP/>}/>
      <Route path={"/homesp"} element={<HomeSP/>}/>
    </Routes>
    </>
  )
}

export default App
