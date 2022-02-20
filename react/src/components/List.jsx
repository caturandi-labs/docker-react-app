import React from 'react'
import ListItem from './ListItem';

class List extends React.Component {
    render (){
        return (
            <div>
                <h2>List Component</h2>
                {this.props.books.map(item => 
                    <ListItem key={item.title} item={item}/>
                )}
            </div>
        )
    }
}

export default List;