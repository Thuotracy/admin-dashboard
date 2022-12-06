import './widgetLg.css'

export default function widgetLg() {
  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Recent Transactions</h3>
        <table className='widgetLgTable'>
            <tr className='widgetLgTr'>
                <th className='widgetLgTh'>Customer</th>
                <th className='widgetLgTh'>Date</th>
                <th className='widgetLgTh'>Amount</th>
                <th className='widgetLgTh'>Status</th>
            </tr>
        </table>
    </div>
  )
}
