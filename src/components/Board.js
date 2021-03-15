import React from 'react';
import List from './List';
import data from '../sampleData'



class Board extends React.Component
{
    state = {
        currentList: []
    }
    componentDidMount()
    {
        this.setState({ currentList: data.lists })
    }
    createNewList  = () =>
    {
        const list = 
        {
            id: Math.random(),
            title: "My List",
            board: 300,
            creadedAt: new Date()

        }
        this.setState({ currentList:[...this.state.currentList, list]})
    }
    render()
    {
        return(

            <div className = "lists-wrapper">
                <button onClick = {this.createNewList}>New List</button>
                {Object.keys(this.state.currentList).map(key => (

                    <List key = {this.state.currentList[key].id}
                    list = {this.state.currentList[key]} />
                ))}
            </div>
        )
    }
}

export default Board