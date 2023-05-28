import {useState} from 'react';
import s from './Header.module.scss'
import BurgerIcon from "../../UI/Images/BurgerIcon.jsx";
import LogoIcon from "../../UI/Images/LogoIcon.jsx";
import Input from "./Input/Input.jsx";
import AddVideoIcon from "../../UI/Images/AddVideoIcon.jsx";
import NotificationIcon from "../../UI/Images/NotificationIcon.jsx";
import ProfileIcon from "../../UI/Profile/ProfileIcon.jsx";
import NotificationBlock from "./NotificationBlock/NotificationBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleNotification} from "../../store/notificationSlice.js";

const Header = () => {
    const dispatch = useDispatch()
    const notificationBlock = useSelector((state) => state.notification.notification)

    const handleNotificationBlock = () => {
        dispatch(toggleNotification())
    }

    return (
        <div className={s.container} onMouseLeave={handleNotificationBlock}>
            <div className={s.left}>
                <BurgerIcon size={'40px'}/>
                <LogoIcon size={'40px'}/>
            </div>
            <div className={s.center}>
                <Input/>
            </div>
            <div className={s.right}>
                <AddVideoIcon size={'30px'}/>
                <div style={{position: "relative"}} onClick={handleNotificationBlock}>
                    <NotificationIcon size={'30px'}/>
                    {notificationBlock && <NotificationBlock/>}
                </div>
                <ProfileIcon/>
            </div>
        </div>
    );
};

export default Header;