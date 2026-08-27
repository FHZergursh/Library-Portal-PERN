import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-[7vh] bg-[#ce5246] gap-[20%]'>
        <div className='text-3xl'>Home</div>
        <div className='flex justify-center  text-lg gap-10'>
          <Link to="/books/overview">Overview</Link>
          <div>Books</div>
        </div>
        <div className=''>Account details</div>
      </div>
      


    </div>
  )
}

export default Header