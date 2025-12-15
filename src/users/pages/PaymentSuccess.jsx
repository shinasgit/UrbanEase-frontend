import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import UrbanFooter from '../../components/UrbanFooter';


function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className='text-center'>
      <div className='flex justify-center align-items-center mt-5'>
        <img src="https://i.pinimg.com/originals/f0/2a/f5/f02af5201c305c0960eea6d4f297fcbf.gif" alt="" height={'300px'} width={'400px'}/>
        
      </div>
      <div className='my-5'>
        <h1 className='my-3 text-2xl text-lime-600'>Payment Successfull</h1>
        <p  className='my-3'>Thanks for trusting us</p>
        {/* <Link to={'/'}><button type='button' className='bg-orange-300 rounded p-3'>Keep Shopping</button></Link> */}
      </div>
    </div>
    <UrbanFooter/>
    </>
  )
}

export default PaymentSuccess