import React from 'react';


class BoardPreview extends React.Component
{
    render()
    {
        return(
            <div>
            <p>{this.props.board.title}</p>
            <p>{this.props.board.id}</p>
            </div>
            
        )
    }
}

export default BoardPreview