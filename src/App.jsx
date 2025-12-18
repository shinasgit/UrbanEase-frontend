
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
import AdminHome from './admin/pages/AdminHome'
import AdminUsers from './admin/pages/AdminUsers'
import AdminProviders from './admin/pages/AdminProviders'
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentError from './users/pages/PaymentError'
import AdminProfile from './admin/pages/AdminProfile'
import Profile from './users/pages/Profile'
import EditProf from './users/components/EditProf'
import AdminBooking from './admin/pages/AdminBooking'


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
      <Route path='/register' element={<Auth register/>}/>
      <Route path={"/pnf"} element={<Pnf/>}/>
      <Route path={"/profile"} element={<Profile/>}/>
      <Route path={"/payment-success"} element={<PaymentSuccess/>}/>
      <Route path={"/payment-error"} element={<PaymentError/>}/>
      <Route path={"/editprof"} element={<EditProf/>}/>
      {/* <Route path={"/ConnectionPage"} element={<ConnectionPage/>}/> */}

      {/* servise provider module 2 */}
      <Route path={"/housebookSP"} element={<HouseBookSP/>}/>
      <Route path={"/homesp"} element={<HomeSP/>}/>

      {/* admin mod 3 */}
      <Route path={"/admin-home"} element={<AdminHome/>}/>
      <Route path={"/admin-users"} element={<AdminUsers/>}/>
      <Route path={"/admin-providers"} element={<AdminProviders/>}/>
      <Route path={"/admin-profile"} element={<AdminProfile/>}/>
      <Route path={"/admin-booking"} element={<AdminBooking/>}/>

      
    </Routes>
    </>
  )
}

export default App
