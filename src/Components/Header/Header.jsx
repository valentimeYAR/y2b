import s from './Header.module.scss'
import BurgerIcon from "../../UI/Images/BurgerIcon.jsx";
import LogoIcon from "../../UI/Images/LogoIcon.jsx";
import Input from "./Input/Input.jsx";
import AddVideoIcon from "../../UI/Images/AddVideoIcon.jsx";
import NotificationIcon from "../../UI/Images/NotificationIcon.jsx";
import ProfileIcon from "../../UI/Profile/ProfileIcon.jsx";
import NotificationBlock from "./NotificationBlock/NotificationBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {toggleNotification} from "../../store/Slices/notificationSlice.js";

const Header = () => {
    const dispatch = useDispatch()
    const notificationBlock = useSelector((state) => state.notification.notification)

    const handleNotificationBlock = (state) => {
        dispatch(toggleNotification({notification: state}))
    }

    return (
        <div className={s.container} onMouseLeave={() => handleNotificationBlock(false)}>
            <div className={s.left}>
                <BurgerIcon size={'40px'}/>
                <LogoIcon size={'40px'}/>
            </div>
            <div className={s.center}>
                <Input/>
            </div>
            <div className={s.right}>
                <Link to={'/add-video'}>
                    <AddVideoIcon size={'30px'}/>
                </Link>
                <div style={{position: "relative"}} onClick={(e) => {
                    e.stopPropagation()
                    handleNotificationBlock(true)
                }}>
                    <NotificationIcon size={'30px'}/>
                    {notificationBlock && <NotificationBlock/>}
                </div>
                <ProfileIcon/>
            </div>
        </div>
    );
};

export default Header;