import React from 'react';
import Column from './Column';

function Table(props) {
    const row1 = ["Superman" , "USA"]
    const row2 = ["CC" , "India"]
    const row3 = ["Krishh" , "India"]
    return (
        <table>
            <tbody>
                <tr>
                    <Column row={row1}/>
                </tr>
                <tr>
                    <Column row={row2}/>
                </tr>
                <tr>
                    <Column row={row3}/>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;