import React from 'react';
import {TodoIcon} from './index.js';

function CompleteIcon({completed , onComplete}) {
    return (
        <TodoIcon 
        type='check'
        color={completed ? '#3c763d' : 'gray'}
        onClick={onComplete}
        />
    )
}

export {CompleteIcon};