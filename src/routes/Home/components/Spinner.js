import React from 'react';
import './Spinner.scss'

const Spinner = (props) => {
    const {display, size} = props;
    const style = {
        display: display,
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${Math.max(Math.round(size / 10), 2)}px`
    };

    return (
        <div className="o-spinner" style={style}></div>
    );
};

Spinner.propTypes = {
    display: React.PropTypes.string,
    size: React.PropTypes.number
};

Spinner.defaultProps = {
    display: 'inline-block',
    size: 60
};

export default Spinner;
