import React, {useState} from 'react';
import Hint from "../../Components/Header/Hints/Hint.jsx";

const AddVideoIcon = ({size}) => {
    const [hintState, setHintState] = useState(false)
    const handleHint = () => {
        setHintState(!hintState)
    }
    return (
        <div style={{
            position: 'relative',
            cursor: 'pointer'
        }}
             onMouseEnter={handleHint}
             onMouseLeave={handleHint}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path
                    d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7V18C21 19.6569 19.6569 21 18 21H7" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M9 12V8L12.1429 10L9 12Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <deepl-alert xmlns=""/>
                <deepl-alert xmlns=""/>
                <deepl-alert xmlns=""/>
                <deepl-alert xmlns=""/>
            </svg>
            {hintState && <Hint text={'Создать'}/>}
        </div>
    );
};

export default AddVideoIcon;