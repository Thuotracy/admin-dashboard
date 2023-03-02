import './widgetLg.css'

export default function widgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    };

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
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <span className='widgetLgName'>John Doe</span>
                    </td>
                    <td className='widgetLgDate'>21 Aug 2022</td>
                    <td className='widgetLgAmount'>$83.99</td>
                    <td className='widgetLgStatus'><Button type="Approved"/></td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <span className='widgetLgName'>John Doe</span>
                    </td>
                    <td className='widgetLgDate'>21 Aug 2022</td>
                    <td className='widgetLgAmount'>$83.99</td>
                    <td className='widgetLgStatus'><Button type="Approved"/></td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <span className='widgetLgName'>John Doe</span>
                    </td>
                    <td className='widgetLgDate'>21 Aug 2022</td>
                    <td className='widgetLgAmount'>$83.99</td>
                    <td className='widgetLgStatus'><Button type="Pending"/></td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <span className='widgetLgName'>John Doe</span>
                    </td>
                    <td className='widgetLgDate'>21 Aug 2022</td>
                    <td className='widgetLgAmount'>$83.99</td>
                    <td className='widgetLgStatus'><Button type="Declined"/></td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <span className='widgetLgName'>John Doe</span>
                    </td>
                    <td className='widgetLgDate'>21 Aug 2022</td>
                    <td className='widgetLgAmount'>$83.99</td>
                    <td className='widgetLgStatus'><Button type="Pending"/></td>
                </tr>
            </table>
        </div>
    );
}
