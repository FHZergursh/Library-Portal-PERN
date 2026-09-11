import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [guest, setGuest] = React.useState()


  return (
    <div>
      <div className='flex justify-center items-center h-[7vh] bg-[#ce5246] gap-[20%]'>
        <Link to ="/" className='text-3xl'>Home</Link>
        <div className='flex justify-center  text-lg gap-10'>
          <Link to="/books/overview">Overview</Link>
          <Link to="/books/search">Search</Link>
        </div>
        <div className='flex gap-4'>
          <div>Username here</div>
          <button>Log out</button>

        </div>
      </div>
      


    </div>
  )
}

export default Header