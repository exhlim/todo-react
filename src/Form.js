import React from 'react'

const Form =({value, onChange, getInput, newClass})=> {
    return (
        <div>
            <input type="text" value={value} onChange={(e)=>{onChange(e)}} onKeyUp={(e)=>{
                e.persist()
                getInput(e)}}/>
            <input type="submit" value="Add to List" onClick={(e)=>{getInput(e)}}/>
            <br/>
            <span style={{color: "red"}} className={newClass}>Input must be at least 1 or up to 200 characters long</span>
        </div>
        )
}

export default Form