import classNames from "classnames/bind";
import styles from './LandingPage.module.sass'
import { Link } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles)

function LandingPage() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('background')} src={import.meta.env.BASE_URL + 'images/landing-page.png'} alt="" />
            <Link className={cx('button')} to={config.routes.home}>Bắt đầu</Link>
        </div>
     );
}

export default LandingPage;