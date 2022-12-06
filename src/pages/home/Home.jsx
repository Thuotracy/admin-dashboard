import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummydata';

export default function Home (){
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title='User Analyses' grid dataKey='Active User'/>
        <div className='homeWidget'>

        </div>
    </div>
  )
}
