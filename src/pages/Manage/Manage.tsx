import classNames from 'classnames/bind';
import styles from './Manage.module.sass';
import Card from '../../components/Card';
import Status from '../../components/Status';
import { Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(styles);

function Manage() {
    return (
        <div className={cx('wrapper')}>
            <h2>Quản lý KPI</h2>
            <div className={cx('banner')}>
                <div className={cx('banner-bg')}>
                    <img src="./src/assets/banner2.png" alt="" />
                </div>
                <div className={cx('banner-content')}>
                    <div className={cx('illustrator')}>
                        <img src="./src/assets/illus-banner2.png" alt="illustrator" />
                    </div>
                    <div className={cx('title')}>
                        <h2 className={cx('heading')}>
                            <div className={cx('hl-bg')}>
                                <img src="./src/assets/logoText.png" alt="logo" />
                            </div>
                        </h2>
                        <h2 className={cx('heading')}>Quản lý thông minh - Thành công bền vững!</h2>
                        <p>Bước đi nhỏ - Thành công lớn</p>
                    </div>
                </div>
            </div>
            <div className={cx('semeter')}>
                <h2>Học kỳ</h2>
                <div> 20232</div>
            </div>
            <div className={cx('goal')}>
                <div className={cx('education')}>
                    <Card
                        rightIllus={
                            <img src='./src/assets/illustration1.png' />
                        }
                    >
                        <div>
                            <h2>HỌC TẬP</h2>
                            <p>Hãy sắp xếp thời gian học hợp lý và hiệu quả</p>
                        </div>
                        <Status option2='true' title='7 Mục tiêu' />
                    </Card>
                    <Link to={config.routes.education} className={cx('overlay-link')}></Link>
                </div>
                <div className={cx('skill')}>
                    <Card
                        rightIllus={
                            <img src='./src/assets/illustration2.png' />
                        }
                    >
                        <div>
                            <h2>KỸ NĂNG</h2>
                            <p>Thường xuyên rèn luyện kỹ năng nâng cao bản thân</p>
                        </div>
                        <Status option1='true' title='7 Mục tiêu' />
                    </Card>
                    <Link to={config.routes.skill} className={cx('overlay-link')}></Link>
                </div>
                <div className={cx('exercise')}>
                    <Card
                        rightIllus={
                            <img src='./src/assets/illustration3.png' />
                        }
                    >
                        <div>
                            <h2>RÈN LUYỆN</h2>
                            <p>Chăm chỉ rèn luyện mỗi ngày</p>
                        </div>
                        <Status option3='true' title='7 Mục tiêu' />
                    </Card>
                    <Link to={config.routes.exercise} className={cx('overlay-link')}></Link>
                </div>
            </div>
        </div>
    );
}

export default Manage;
