import React from "react";

class ListItem extends React.Component {
    render(){
        return (
            <div>
                <h2>
                    {this.props.item.title}
                </h2>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

export default ListItem