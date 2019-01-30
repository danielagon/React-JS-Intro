import React from 'react';

export class Todo extends React.Component {

    render() {
        return (
            //Add your code here to represent a TODO
            <tr>
                <th>{this.props.text}</th>
                <th>{this.props.priority}</th>
                <th>{this.props.dueDate}</th>
            </tr>
        );
    }
}
