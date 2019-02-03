import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: '', dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDueDateChange = this.handleDueDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e) {
        this.setState(
            { text: e.target.value }
        );
    }

    handlePriorityChange(e) {
        this.setState(
            {priority: e.target.value}
        );
    }

    handleDueDateChange(date) {
        this.setState(
            {dueDate: date}
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">TODO React App</h1>
                    <br/>
                    <br/>
                    <form onSubmit={this.handleSubmit} className="App-form">
                        <label htmlFor="new-text" >Text: </label>
                        <input
                            id="new-text"
                            onChange={this.handleTextChange}
                            value={this.state.text}
                        />
                        <br/>
                        <br/>
                        <label htmlFor="new-priority" >Priority: </label>
                        <input
                            id="new-priority"
                            type="number"
                            onChange={this.handlePriorityChange}
                            value={this.state.priority}
                        />
                        <br/>
                        <br/>
                        <label htmlFor="new-date" >Date: </label>
                        <DatePicker
                            id="new-date"
                            selected={this.state.dueDate}
                            placeholderText="Due date"
                            onChange={this.handleDueDateChange}
                            dropdownMode={this.state.dueDate}
                        />
                        <br/>
                        <br/>
                        <button>
                            Add #{this.state.items.length + 1}
                        </button>
                        <br/>
                        <br/>
                    </form>
                    <TodoList todoList={this.state.items} />
                </header>
            </div>
        );
    }
}

export default App;