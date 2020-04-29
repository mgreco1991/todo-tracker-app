import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static defaultProps = {
        onClick: () => Promise.resolve(),
    }

    static propTypes = {
        onClick: PropTypes.func,
    }

    render() {
        return (
            <button onClick={this.handleClick}>Add Todo</button>
        )
    }

    handleClick = (e) => {
        const { onClick } = this.props;

        onClick(e);
    }
}

export default Button;