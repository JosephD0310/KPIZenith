import classNames from 'classnames/bind';
import styles from './Statistic.module.sass';

const cx = classNames.bind(styles);

import { LineChart, RadarChart } from '../../components/Chart';
import Status from '../../components/Status';

function Statistic() {
    const data = [
        {
            labels: ['Tiếng Nhật', 'UIUX', 'ITSS', 'Lịch sử Đảng', 'Nhập môn AI', 'OOP'],
            datasets: [
                {
                    label: 'Tiêu chí học tập',
                    data: [65, 59, 90, 81, 80, 75],
                    fill: true,
                    backgroundColor: 'rgba(255, 112, 57, 0.3)',
                    borderColor: 'rgb(255, 112, 57)',
                    pointBackgroundColor: 'rgb(255, 112, 57)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 112, 57)',
                },
            ],
        },
        {
            labels: ['Chuyên môn', 'Ngoại ngữ', 'Tin học', 'Tài chính', 'Sáng tạo'],
            datasets: [
                {
                    label: 'Tiêu chí kỹ năng',
                    data: [65, 77, 70, 83, 88],
                    fill: true,
                    backgroundColor: 'rgba(15, 209, 134, 0.3)',
                    borderColor: 'rgb(15, 209, 134)',
                    pointBackgroundColor: 'rgb(15, 209, 134)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(15, 209, 134)',
                },
            ],
        },
        {
            labels: ['Thể thao', 'Hoạt động XH', 'Lối sống'],
            datasets: [
                {
                    label: 'Tiêu chí rèn luyện',
                    data: [79, 90, 95],
                    fill: true,
                    backgroundColor: 'rgba(212, 204, 175, 0.3)',
                    borderColor: 'rgb(212, 204, 175)',
                    pointBackgroundColor: 'rgb(212, 204, 175)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(212, 204, 175)',
                },
            ],
        },
    ];

    const options = [
        {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    position: 'bottom' as const,
                    display: true,
                    text: 'Biểu đồ tính đên thời điểm hiện tại',
                },
            },
        },
        {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    position: 'bottom' as const,
                    display: true,
                    text: 'Biểu đồ tính đên thời điểm hiện tại',
                },
            },
        },
        {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    position: 'bottom' as const,
                    display: true,
                    text: 'Biểu đồ tính đên thời điểm hiện tại',
                },
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <h2>Thống kê</h2>
            <div className={cx('overview')}>
                <LineChart />
            </div>
            <div className={cx('card')}>
                <div className={cx('card-item')}>
                    <div className={cx('item-header', 'education')}>
                        <div className={cx('header-title')}>
                            <h3>Học Tập</h3>
                            <Status option2="true" title="Hoàn thành 50%" />
                        </div>
                        <div className={cx('header-image')}>
                            <img src={import.meta.env.BASE_URL + 'images/illustration1.png'} alt="" />
                        </div>
                    </div>
                    <div className={cx('item-content')}>
                        <RadarChart data={data[0]} options={options[0]} />
                    </div>
                </div>
                <div className={cx('card-item')}>
                    <div className={cx('item-header', 'skill')}>
                        <div className={cx('header-title')}>
                            <h3>Kỹ Năng</h3>
                            <Status option1="true" title="Hoàn thành 50%" />
                        </div>
                        <div className={cx('header-image')}>
                            <img src={import.meta.env.BASE_URL + 'images/illustration2.png'} alt="" />
                        </div>
                    </div>
                    <div className={cx('item-content')}>
                        <RadarChart data={data[1]} options={options[1]} />
                    </div>
                </div>
                <div className={cx('card-item')}>
                    <div className={cx('item-header', 'exercise')}>
                        <div className={cx('header-title')}>
                            <h3>Rèn Luyện</h3>
                            <Status option3="true" title="Hoàn thành 50%" />
                        </div>
                        <div className={cx('header-image')}>
                            <img src={import.meta.env.BASE_URL + 'images/illustration3.png'} alt="" />
                        </div>
                    </div>
                    <div className={cx('item-content')}>
                        <RadarChart data={data[2]} options={options[2]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
