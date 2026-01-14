import React from 'react'

function Preloader() {
  return (
   <div>
     <div className='flex flex-col gap-20 fixed inset-0 items-center justify-center z-50'>
        <img src="../public/Loading.gif" alt="" />
    </div>
   </div>
  )
}

export default Preloader