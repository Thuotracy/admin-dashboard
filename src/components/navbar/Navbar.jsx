import './navbar.css';
import {NotificationsNone} from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarwrapper">
            <div className="topLeft">
                <span className='logo'>Admin</span>
            </div>
            <div className="topRight">
                <div className="navbarIconContainer">
                    <NotificationsNone/>
                    <span className='topiconBadge'>3</span>
                </div>
            </div>
        </div>
    </div>
  )
}
