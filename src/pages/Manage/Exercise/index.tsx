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
            <div className={cx('education')}>
                <Card >
                    <div>
                        <h2>HỌC TẬP</h2>
                        <p>Hãy sắp xếp thời gian học hợp lý và hiệu quả</p>
                    </div>
                    <Status option1="true" title="7 Mục tiêu" />
                </Card>
            </div>
        </div>
    );
}

export default Exercise;
