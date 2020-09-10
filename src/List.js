import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const List = ({deleteItem, populateItems})=> {
    return (
        <ol>
            {populateItems.map((item,index)=> {
                return <li key={index}>{item}<DeleteIcon style={{width:"50px"}} onClick={()=> deleteItem(index)}/></li>})}
        </ol>
        )
}

export default List