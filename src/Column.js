import React from 'react';

function Column(props) {
    return (
        <>
         {
            props.row.map(element => (
               <React.Fragment key={element}>
                    <td>{element}</td>
                </React.Fragment>
            ))
        }
        </>
    );
}

export default Column;