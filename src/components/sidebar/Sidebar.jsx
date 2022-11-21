import { LineStyle } from '@material-ui/icons';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className='sidebarTitle'>DashBoard</h3>
              <ul className='sidebarList'>
                <li className='sidebarListItem'>
                  <LineStyle/>
                    Home
                </li>
                <li className='sidebarListItem'>
                  <LineStyle/>
                    Analytics
                </li>
                <li className='sidebarListItem'>
                  <LineStyle/>
                    Sales
                </li>
              </ul>
          </div>
        </div>
    </div>
  )
}
