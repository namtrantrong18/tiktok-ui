import classNames from "classnames/bind";
import styles from './Action.module.scss'

const cx = classNames.bind(styles)

function ActionButton( {children, onClick, className} ) {
    console.log(className)
    return ( 
        <div onClick={onClick} className={cx('wrapper')}>
            <div className={cx('icon', {[className] : className})}>{children}</div>
            <strong className={cx('data-count')}>36.4K</strong>
        </div> 
    );
}

export default ActionButton;