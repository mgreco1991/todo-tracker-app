import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Checkbox from './Checkbox'

class Todo extends Component {
    static defaultProps = {
        onChange: () => Promise.resolve(),
    }

    static propTypes = {
        onChange: PropTypes.func,
        text: PropTypes.string,
        id: PropTypes.number,
    }

    constructor() {
        super()
        this.state = {
            completed: false,
            removed: false,
        }
    }

    render() {
        const { text } = this.props;
        const { completed, removed } = this.state;

        const style = {
            "color": "green"
        }

        return (
            <div>
                <Checkbox onChange={this.markComplete} />
                <span>{text}</span>
                {completed && <span style={style}>  DONE</span>}
                <Checkbox onChange={this.handleChange}/>
            </div>
        )
    }

    markComplete = () => {
        const { completed } = this.state;
        
        this.setState((prevState) => ({
            completed: !prevState.completed,
        }))
    }

    handleChange = (e) => {
        const { onChange } = this.props;

        onChange(e);
    }
}

export default Todo;