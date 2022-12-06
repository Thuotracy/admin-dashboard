import './widgetSm.css'

export default function widgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>John Doe</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
            </li>
        </ul>
    </div>
  )
}
