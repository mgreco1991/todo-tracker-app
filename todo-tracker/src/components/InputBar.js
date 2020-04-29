import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBar extends Component {
    static defaultProps = {
        onChange: () => Promise.resolve(),
        value: undefined,
    }

    static propTypes = {
        onChange: PropTypes.func,
        value: PropTypes.string,
    }

    render() {
        const { value } = this.props;
        return (
            <input type="text" onChange={this.handleChange} value={value}></input>
        )
    }

    handleChange = (e) => {
        const { onChange } = this.props;

        onChange(e);
    }
}

export default InputBar;