import s from './Profile.module.scss'
import {Link} from "react-router-dom";

const ProfileIcon = ({link = '/'}) => {
    return (
        <Link to={link} className={s.container}>

        </Link>
    );
};

export default ProfileIcon;