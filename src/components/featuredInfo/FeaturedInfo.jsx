import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
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

        <div className="featuredItem">
           <span className="featuredTitle">Sales</span>
           <div className="featuredMoneyConatiner">
            <span className="featuredMoney">$4,631</span>
            <span className="featuredMoneyRate">-4.9
                <ArrowDownward/>
            </span>
           </div> 
           <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
           <span className="featuredTitle">Cost</span>
           <div className="featuredMoneyConatiner">
            <span className="featuredMoney">$3,659</span>
            <span className="featuredMoneyRate">+4.0
                <ArrowUpward/>
            </span>
           </div> 
           <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

