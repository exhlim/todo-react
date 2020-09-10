import React from 'react'
import Form from './Form'
import List from './List'


export default class TodoList extends React.Component {
    constructor() {
        super()
        this.state= {
            List: [],
            defaultValue: "",
            className: "inactive"
        }
    }
    getInput=(event)=> {
        this.setState({
            className: "inactive"
        })
        if(event.keyCode === 13 && this.state.className === 'inactive') {
            this.setState((prevState)=>({
                List:[...prevState.List,event.target.value],
                defaultValue: ""
            }))
        } else if(event.type === 'click' && this.state.className === 'inactive') {
            this.setState((prevState)=>({
                List:[...prevState.List,this.state.defaultValue],
                defaultValue: ""
            }))
        } else if(event.target.value.length === 1 || event.target.value.length > 200) {
            this.setState({
                className: "active"
            })
        }
    }
    deleteItem=(event)=> {
        this.state.List.splice(event,1)
        this.setState({
            List: this.state.List
        })
    }
    onChange=(event)=> {
        this.setState({
            defaultValue: event.target.value
        })
    }
    render() {
        return(
            <div>
                <Form getInput={this.getInput} value={this.state.defaultValue} onChange={this.onChange} newClass={this.state.className}/>
                <List populateItems={this.state.List} deleteItem={this.deleteItem}/>
            </div>
            )
    }
}