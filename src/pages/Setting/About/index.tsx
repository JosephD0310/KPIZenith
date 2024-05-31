import classNames from "classnames/bind";
import styles from './About.module.sass'

const cx = classNames.bind(styles)

function About() {
    return ( 
        <div className={cx('wrapper')}></div>
     );
}

export default About;