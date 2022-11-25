import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className='sidebarTitle'>DashBoard</h3>
              <ul className='sidebarList'>               
                <li className='sidebarListItem active'>
                  <LineStyle className='sidebarIcon'/>
                    Home
                </li>
                <li className='sidebarListItem'>
                  <Timeline className='sidebarIcon'/>
                    Analytics                  
                </li>
                <li className='sidebarListItem'>
                  <TrendingUp className='sidebarIcon'/>
                    Sales
                </li>
              </ul>
          </div>
        </div>
    </div>
  )
}
