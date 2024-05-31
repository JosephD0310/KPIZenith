import classNames from "classnames/bind";
import styles from './Password.module.sass'

const cx = classNames.bind(styles)

function Password() {
    return ( 
        <div className={cx('wrapper')}></div>
     );
}

export default Password;