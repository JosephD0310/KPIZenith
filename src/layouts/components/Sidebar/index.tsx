import classNames from 'classnames/bind';
import styles from './Sidebar.module.sass';
import Menu, { MenuItem } from '../Menu';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartPie, faChevronDown, faCircleInfo, faGear, faHome, faKey, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';
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
                    <img src="./src/assets/logoText.png" alt="logo" />
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
                        <Tippy
                            offset={[0, 5]}
                            visible={visible}
                            onClickOutside={hide}
                            placement="bottom-end"
                            interactive
                            render={(attrs) => (
                                <div className={cx('setting-menu')} tabIndex={-1} {...attrs}>
                                    <MenuItem
                                        lefticon={<FontAwesomeIcon icon={faUser} />}
                                        title="Hồ sơ"
                                        url={config.routes.profile}
                                    />
                                    <MenuItem
                                        lefticon={<FontAwesomeIcon icon={faKey} />}
                                        title="Mật khẩu"
                                        url={config.routes.password}
                                    />
                                    <MenuItem
                                        lefticon={<FontAwesomeIcon icon={faBell} />}
                                        title="Thông báo"
                                        url={config.routes.notification}
                                    />
                                    <MenuItem
                                        lefticon={<FontAwesomeIcon icon={faCircleInfo} />}
                                        title="Về chúng tui"
                                        url={config.routes.about}
                                    />
                                </div>
                            )}
                        >
                            <div className={cx('setting-dropdown')} onClick={visible ? hide : show}>
                                <MenuItem
                                    lefticon={<FontAwesomeIcon icon={faGear} />}
                                    title="Cài đặt"
                                    url={config.routes.profile}
                                    righticon={<FontAwesomeIcon icon={faChevronDown} />}
                                />
                            </div>
                        </Tippy>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
