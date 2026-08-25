import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-[7vh] bg-gray-400 gap-[20%]'>
        <div className='text-3xl'>Home</div>
        <div className='flex justify-center  text-lg gap-10'>
          <div>Overview</div>
          <div>Books</div>
        </div>
        <div className=''>Account details</div>
      </div>
      


    </div>
  )
}

export default Header