import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.sass';
import Button from '../../../components/Button';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import PopperItem from '../../../components/PopperItem';
import config from '../../../config';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('language')}>
                    <Tippy
                        visible={visible}
                        onClickOutside={hide}
                        placement="bottom-end"
                        interactive
                        render={(attrs) => (
                            <div className={cx('user-menu')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <PopperItem>Tiếng Việt</PopperItem>
                                    <PopperItem>English</PopperItem>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('username')} onClick={visible ? hide : show}>
                            <p>Tiếng Việt</p>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </Tippy>
                </div>
                <span className={cx('notifi')}>
                    <FontAwesomeIcon icon={faBell} />
                </span>
                <div className={cx('user')}>
                    {currentUser ? (
                        <>
                            <img className={cx('avatar')} src="./src/assets/ava.png" alt="avatar" />
                            <Tippy
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('user-menu')} tabIndex={-1} {...attrs}>
                                        <PopperWrapper>
                                            <PopperItem icon={<FontAwesomeIcon icon={faUser} />}>Profile</PopperItem>
                                            <PopperItem
                                                to={config.routes.login}
                                                icon={<FontAwesomeIcon icon={faRightFromBracket} />}
                                            >
                                                Log out
                                            </PopperItem>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('username')}>
                                    <p>HI_20</p>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* <FontAwesomeIcon icon={faPlus} /> */}
                            <Button to={config.routes.login}>Login</Button>
                            <Button to={config.routes.register} secondary="true">
                                Sign up
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
