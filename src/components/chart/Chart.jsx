import './chart.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


export default function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 1000,
        },
        {
            name: 'Feb',
            "Active User": 2500,
        },
        {
            name: 'March',
            "Active User": 3000,
        },
        {
            name: 'April',
            "Active User": 3000,
        },
        {
            name: 'May',
            "Active User": 4000,
        },
        {
            name: 'June',
            "Active User": 3000,
        },
        {
            name: 'July',
            "Active User": 1000,
        },
        {
            name: 'Aug',
            "Active User": 4000,
        },
        {
            name: 'Sept',
            "Active User": 3000,
        },
        {
            name: 'Oct',
            "Active User": 4000,
        },
        {
            name: 'Nov',
            "Active User": 3000,
        },
        {
            name: 'Dec',
            "Active User": 4000,
        },
      ];

  return (
    <div className='chart'>
        <h3 className="chartTitle">User Analyses</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='green'/>
                <Line type='monotone' dataKey="Active User" stroke='#555'/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
