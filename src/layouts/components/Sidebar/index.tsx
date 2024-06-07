import classNames from 'classnames/bind';
import styles from './Sidebar.module.sass';
import Menu, { MenuItem } from '../Menu';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faGear,
    faHome,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={import.meta.env.BASE_URL + 'images/logoText.png'} alt="logo" />
                </div>
                <div className={cx('menu')}>
                    <Menu column>
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faHome} />}
                            title="Trang chủ"
                            url={config.routes.home}
                        />
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faRocket} />}
                            title="Quản lý KPI"
                            url={config.routes.manage}
                        />
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faChartPie} />}
                            title="Thống kê"
                            url={config.routes.statistic}
                        />
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faGear} />}
                            title="Cài đặt"
                            url={config.routes.setting}
                        />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
