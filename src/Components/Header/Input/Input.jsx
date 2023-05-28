import React, {useState} from 'react';
import s from './Input.module.scss'
import SearchIcon from "../../../UI/Images/SearchIcon.jsx";

const Input = () => {
    const [inputState, setInputState] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const handleInputFocus = () => {
        setInputState(true)
    }
    const handleInputBlur = () => {
        setInputState(false)
    }
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className={s.container}>
            {inputState && <SearchIcon size={'20px'}/>}
            <input
                type="text"
                className={s.input}
                placeholder={'Введите запрос'}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInput}
                value={inputValue}
            />
        </div>
    );
};

export default Input;