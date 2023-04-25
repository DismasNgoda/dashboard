import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">ADMIN</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='title'>MAIN</p>
          <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
          <p className='title'>LISTS</p>
          <li><PeopleOutlinedIcon className='icon'/><span>Users</span></li>
          <li><Inventory2OutlinedIcon className='icon'/> <span>Products</span></li>
          <li><ProductionQuantityLimitsIcon className='icon'/><span>Orders</span></li>
          <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
          <p className='title'>MAIN</p>
          <li><InsertChartIcon className='icon'/><span>Stats</span></li>
          <li><NotificationsNoneIcon className='icon'/><span>Notifications</span></li>
          <p className='title'>SERVICE</p>
          <li><SettingsSystemDaydreamIcon className='icon'/><span>System Health</span></li>
          <li><PsychologyIcon className='icon'/><span>Logs</span></li>
          <li><SettingsApplicationsIcon className='icon'/><span>Settings</span></li>
          <p className='title'>USER</p>
          <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
          <li><ExitToAppIcon className='icon'/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <span className='color'>Color Options</span>
      </div>
    </div>
  )
}

export default Sidebar