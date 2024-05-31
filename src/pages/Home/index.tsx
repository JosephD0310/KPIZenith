import classNames from 'classnames/bind';
import styles from './Home.module.sass';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import BoxList from '../../components/BoxList';
import ItemList from '../../components/BoxList/ItemList';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h2>Trang chủ</h2>
            <div className={cx('banner')}>
                <div className={cx('banner-bg')}>
                    <img src="./src/assets/banner1.png" alt="" />
                </div>
                <div className={cx('banner-content')}>
                    <div className={cx('title')}>
                        <div>
                            <h2 className={cx('heading')}>
                                Đưa ra quyết định sáng suốt với <span className={cx('hl-text1')}>KPI</span>
                                <span className={cx('hl-text2')}>Zenith</span>
                            </h2>
                            <p>Định hướng mục tiêu - Nâng cao hiệu quả</p>
                        </div>
                        <Button green='true' righticon={<FontAwesomeIcon icon={faArrowRight}/>} to={config.routes.manage} >Khám phá ngay</Button>
                    </div>
                    <div className={cx('illustrator')}>
                        <img src="./src/assets/illus-banner1.png" alt="illustrator" />
                    </div>
                </div>
            </div>
            <div className={cx('statistic')}>
                <div className={cx('heading')}>
                    <h3>Số liệu thống kê mới nhất - Tháng 5 năm 2024</h3>
                    <Button none="true" to={config.routes.statistic}>
                        Chi tiết
                    </Button>
                </div>
                <div className={cx('inner')}>
                    <div className={cx('item')}>
                        <div className={cx('item-bg')}>
                            <img src="./src/assets/secondaryBG.png" alt="" />
                        </div>
                        <div className={cx('item-content')}>
                            <div className={cx('title')}>
                                <h2>Học tập</h2>
                                {/* <Status title="7 Mục tiêu" option2="true" /> */}
                            </div>
                            <div className={cx('chart')}>
                                <img src="./src/assets/chart.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-bg')}>
                            <img src="./src/assets/secondaryBG.png" alt="" />
                        </div>
                        <div className={cx('item-content')}>
                            <div className={cx('title')}>
                                <h2>Học tập</h2>
                                {/* <Status title="7 Mục tiêu" option2="true" /> */}
                            </div>
                            <div className={cx('chart')}>
                                <img src="./src/assets/chart.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-bg')}>
                            <img src="./src/assets/secondaryBG.png" alt="" />
                        </div>
                        <div className={cx('item-content')}>
                            <div className={cx('title')}>
                                <h2>Học tập</h2>
                                {/* <Status title="7 Mục tiêu" option2="true" /> */}
                            </div>
                            <div className={cx('chart')}>
                                <img src="./src/assets/chart.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('box-item')}>
                    <BoxList heading="Nhắc nhở">
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                    </BoxList>
                </div>
                <div className={cx('box-item')}>
                    <BoxList heading="Theo dõi tiến độ">
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                    </BoxList>
                </div>
            </div>
        </div>
    );
}

export default Home;
