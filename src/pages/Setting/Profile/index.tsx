import classNames from "classnames/bind";
import styles from './Profile.module.sass'

const cx = classNames.bind(styles)

function Profile() {
    return ( 
        <div className={cx('wrapper')}></div>
     );
}

export default Profile;