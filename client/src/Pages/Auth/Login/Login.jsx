import React, {useState} from 'react';
import s from './Login.module.scss'
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Войти</h2>
                <label className={s.inputLabel}>
                    Введите почту
                    <input
                        type="text"
                        className={s.inputField}
                        onChange={handleEmail}
                        value={email}
                    />
                </label>
                <button className={s.acceptBtn} disabled={email.length < 3}>Продолжить</button>
                <div className={s.noAccount}>
                    <p className={s.text}>Нет аккаунта?</p>
                    <Link to={'/register'} className={s.register}>Зарегистрируйтесь</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;