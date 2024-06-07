import classNames from 'classnames/bind';
import styles from './Exercise.module.sass';
import Status from '../../../components/Status';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/Card';

const cx = classNames.bind(styles);

function Exercise() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <h2 className={cx('heading-text')}>
                    Quản lý KPI
                    <Link to={config.routes.manage} className={cx('overlay-link')}></Link>
                </h2>
                <FontAwesomeIcon icon={faChevronRight} />
                <h2 className={cx('heading-text')}>Rèn luyện</h2>
            </div>
            <div className={cx('exercise')}>
                    <Card rightIllus={<img src={import.meta.env.BASE_URL + 'images/illustration3.png'} />}>
                        <div>
                            <h2>RÈN LUYỆN</h2>
                            <p>Chăm chỉ rèn luyện mỗi ngày</p>
                        </div>
                        <Status option3="true" title="7 Mục tiêu" />
                    </Card>
                    <Link to={config.routes.exercise} className={cx('overlay-link')}></Link>
                </div>
        </div>
    );
}

export default Exercise;
