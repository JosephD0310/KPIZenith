import classNames from 'classnames/bind';
import styles from './Sidebar.module.sass';
import Menu, { MenuItem } from '../Menu';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faChartPie,
    faChevronDown,
    faCircleInfo,
    faGear,
    faHome,
    faKey,
    faRocket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

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
