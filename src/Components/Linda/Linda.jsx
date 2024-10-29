import React from 'react';
import PropTypes from 'prop-types';
const Linda = ({route}) => {
    return (
        <li className='font-semibold mr-4'> <a href={`${route.path}`}>{route.name}</a></li>
    );;
};

export default Linda;