import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return (
    <div className='home'>
        {/* <h1 className="title">Admin Dashboard</h1> */}
        <Sidebar />
        <div className="container">Container</div>
        
        </div>
  )
}

export default Home