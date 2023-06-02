import React, {useState} from 'react';
import s from './Register.module.scss'
import {Link} from "react-router-dom";
import {Checkbox, ConfigProvider} from "antd";

const Register = () => {
    const [email, setEmail] = useState('')
    const [accept, setAccept] = useState(false)
    const [acceptMailing, setAcceptMailing] = useState(false)
    const [acceptedMail, setAcceptedMail] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)
        handleAcceptEmail()
    }
    const handleAccept = () => setAccept(!accept)
    const handleMailing = () => setAcceptMailing(!acceptMailing)

    const handleAcceptEmail = () => {
        if(email.includes("@")){
            setAcceptedMail(true)
        }else setAcceptedMail(false)
    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Регистрация</h2>
                <label className={s.inputLabel}>
                    Введите почту
                    <input
                        type="text"
                        className={s.inputField}
                        onChange={handleEmail}
                        value={email}
                    />
                    <ConfigProvider theme={{
                        token: {
                            colorBorder: '#5A6877',
                            colorBgContainer: "#29333D",
                            colorPrimary: "#5A6877",
                        }
                    }}>
                        <Checkbox onChange={handleAccept} value={accept} className={s.test}>Даю согласие на обработку персональных данных</Checkbox>
                        <Checkbox onChange={handleMailing} value={acceptMailing} className={s.test}>Хочу получать рассылку</Checkbox>
                    </ConfigProvider>
                </label>
                <button className={s.acceptBtn} disabled={!accept || !acceptedMail}>Продолжить</button>
                <div className={s.noAccount}>
                    <p className={s.text}>Уже зарегистрированы?</p>
                    <Link to={'/login'} className={s.register}>Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;