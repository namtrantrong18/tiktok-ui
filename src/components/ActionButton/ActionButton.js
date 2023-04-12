import classNames from "classnames/bind";
import styles from './ActionButton.module.scss'

const cx = classNames.bind(styles)

function ActionButton( {children, onClick} ) {
    return ( 
        <div onClick={onClick} className={cx('wrapper')}>
            <div className={cx('icon')}>{children}</div>
            <strong className={cx('data-count')}>36.4K</strong>
        </div> 
    );
}

export default ActionButton;