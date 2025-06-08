import React from 'react'
import UserItem from './UserItem'

function Sidebar() {
  return (
    <div className='min-w-[300px] flex flex-col border-r-2 min-h-screen p-4'>
      <div>
        <UserItem/>
      </div>
      <div className='grow bg-red-300'>Menu</div>
      <div>Settings</div>
    </div>
  )
}

export default Sidebar
