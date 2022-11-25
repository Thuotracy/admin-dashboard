import { ArrowDownward } from '@material-ui/icons'
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
           <span className="featuredTitle">Revenue</span>
           <div className="featuredMoneyConatiner">
            <span className="featuredMoney">$1,678</span>
            <span className="featuredMoneyRate">-9.7
                <ArrowDownward/>
            </span>
           </div> 
           <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

