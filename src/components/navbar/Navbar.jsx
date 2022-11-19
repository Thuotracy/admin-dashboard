import './navbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarwrapper">
            <div className="topLeft">
                <span className='logo'>Adminnnnn</span>
            </div>
            <div className="topRight">
                <div className="navbarIconContainer">
                    <NotificationsNone/>
                    <span className='topiconBadge'>3</span>
                </div>
                <div className="navbarIconContainer">
                    <Language/>
                </div>
                <div className="navbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaDDGGIr4sAZpBErSsljP5LBAm2QQFguzhA&usqp=CAU" alt="" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
