import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useImperativeHandle, useRef } from 'react';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Video({ src, alt, className, onClick, ...props }, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return <video loop ref={videoRef} src={src} className={cx('wrapper', { className })} onClick={onClick} {...props} />;
}

export default forwardRef(Video);
