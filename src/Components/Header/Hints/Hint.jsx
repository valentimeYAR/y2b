import React from 'react';
import s from './Hint.module.scss'

const Hint = ({text}) => {
    return (
        <div className={s.container}>
            {text}
        </div>
    );
};

export default Hint;