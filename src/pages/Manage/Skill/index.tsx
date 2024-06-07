import classNames from 'classnames/bind';
import styles from './Skill.module.sass';
import Status from '../../../components/Status';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/Card';

const cx = classNames.bind(styles);

function Skill() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <h2 className={cx('heading-text')}>
                    Quản lý KPI
                    <Link to={config.routes.manage} className={cx('overlay-link')}></Link>
                </h2>
                <FontAwesomeIcon icon={faChevronRight} />
                <h2 className={cx('heading-text')}>Kỹ Năng</h2>
            </div>
            <div className={cx('skill')}>
                <Card rightIllus={<img src={import.meta.env.BASE_URL + 'images/illustration2.png'} />}>
                    <div>
                        <h2>KỸ NĂNG</h2>
                        <p>Thường xuyên rèn luyện kỹ năng nâng cao bản thân</p>
                    </div>
                    <Status option1="true" title="7 Mục tiêu" />
                </Card>
                <Link to={config.routes.skill} className={cx('overlay-link')}></Link>
            </div>
        </div>
    );
}

export default Skill;
