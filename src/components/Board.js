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

    addBoardInput = React.createRef()

    createNewList  = (e) =>
    {
        e.preventDefault();
        const list = 
        {
            id: Math.random(),
            title: this.addBoardInput.current.value,
            board: 300,
            creadedAt: new Date(),
            cards: [
                {
                    id: 1,
                    text: 'card 1'
                },
                {
                    id: 2,
                    text: 'card 2'
                }
            ]

        }
        //Does not allow you to create an empty list/ it checks if input is not empty
        if(list.title)
        {
            this.setState({ currentList:[...this.state.currentList, list]})
        }
        // Clears the input after submit
        this.addBoardInput.current.value = '';
        
    }
    render()
    {
        return(
            <div>
                <div className="lists-wrapper">
                    {Object.keys(this.state.currentList).map(key => (

                        <List key = {this.state.currentList[key].id}
                        list = {this.state.currentList[key]} />
                    ))}
                </div>
                <form onSubmit={this.createNewList}
                className="new-list-wrapper">
                    <input type="text"
                    ref = {this.addBoardInput}
                    name="name"
                    placeholder="+ New List"/>
                </form>
            </div>
        )
    }
}

export default Board