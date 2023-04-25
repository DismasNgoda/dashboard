import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">ADMIN</span>
      </div>
      <div className="center">
        <ul>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
        </ul>
      </div>
      <div className="bottom">
        <span className='color'>Color Options</span>
      </div>
    </div>
  )
}

export default Sidebar