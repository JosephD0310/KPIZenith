import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
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

    const [language, setLanguage] = useState('Tiếng Việt');

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [userMenu, setUserMenu] = useState(false);
    const showUser = () => setUserMenu(true);
    const hideUser = () => setUserMenu(false);

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
                                    <PopperItem
                                        onClick={() => {
                                            setLanguage('Tiếng Việt');
                                            setVisible(false);
                                        }}
                                    >
                                        Tiếng Việt
                                    </PopperItem>
                                    <PopperItem
                                        onClick={() => {
                                            setLanguage('English');
                                            setVisible(false);
                                        }}
                                    >
                                        English
                                    </PopperItem>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('username')} onClick={visible ? hide : show}>
                            <p>{language}</p>
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
                            <img
                                className={cx('avatar')}
                                src={import.meta.env.BASE_URL + 'images/ava.png'}
                                alt="avatar"
                            />
                            <Tippy
                                visible={userMenu}
                                onClickOutside={hideUser}
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('user-menu')} tabIndex={-1} {...attrs}>
                                        <PopperWrapper>
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
                                <div className={cx('username')} onClick={ userMenu ? hideUser : showUser}>
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
