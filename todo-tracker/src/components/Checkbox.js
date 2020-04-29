import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    static defaultProps = {
        onChange: () => Promise.resolve(),
        checked: false,
    }

    static propTypes = { 
        onChange: PropTypes.func,
        checked: PropTypes.bool,
    }

    render() {
        return (
            <input type="checkbox" onChange={this.handleChange}></input>
        )
    }

    handleChange = (e) => {
        const { onChange } = this.props;

        onChange(e);
    }
}

export default Checkbox;