import classNames from 'classnames/bind'
import styles from './Button.module.sass'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

type ButtonProps = {
    children? : ReactNode
    lefticon? : ReactNode
    righticon? : ReactNode
    to? : string
    primary? : string
    secondary? : string
    light? : string
    green? : string
    none? : string
    disabled? : string
    onClick? : () => void
}


function Button({ primary, secondary, light, green, none, disabled,lefticon, righticon, children, to, onClick} : ButtonProps) {

    const props = {to, onClick}
    
    let Comp: React.ElementType = 'button';
    
    const classes = cx('button', {
        primary: primary,
        secondary: secondary,
        light: light,
        green: green,
        none: none,
        disabled: disabled
    })

    if (to) {
        Comp = Link;
    }

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    )
}

export default Button;