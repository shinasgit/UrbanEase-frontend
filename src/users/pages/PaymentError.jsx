import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import UrbanFooter from '../../components/UrbanFooter';


function PaymentError() {
  return (
    <>
    <Header/>
    <div className='mt-5 text-center'>
      <div className='flex justify-center align-items-center mt-5'>
        <img src="https://cdn.dribbble.com/userupload/23003310/file/original-6396208ee0571627a9e2e9987dcc1974.gif" alt="" height={'300px'} width={'400px'}/>
        
      </div>
      <div className='mt-5 my-5'>
        <h1 className='my-3 text-3xl text-red-600'>Oh No...!</h1>
        <h4 className='my-3'>Your Payment was Failed</h4>
        <p  className='my-3'>We apologize for the inconvenience caused and appreciate your visit to our website</p>
        {/* <Link to={'/allbooks'}><button type='button' className='bg-orange-300 rounded p-3'>Explore More</button></Link> */}
      </div>
    </div>
    <UrbanFooter
/>
    </>
  )
}

export default PaymentError