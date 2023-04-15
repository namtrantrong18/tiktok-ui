import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountPreview } from '~/components/SuggestedAccounts/AccountPreview';
import { LocationIcon, VolumeIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Video from '~/components/Video';
import Image from '~/components/Image';
import Action from '~/components/Action';

const cx = classNames.bind(styles);

function PostItem({ data }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef();

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    const handlePlayVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy interactive delay={[1000, 200]} offset={[115, 0]} placement="bottom" render={renderPreview}>
                    <Link to="/@iamdiu">
                        <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                    </Link>
                </Tippy>
            </div>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('intro')}>
                        <div>
                            <Tippy
                                interactive
                                delay={[1000, 200]}
                                offset={[-120, 26]}
                                placement="bottom"
                                render={renderPreview}
                            >
                                <Link to="/@iamdiu" className={cx('info')}>
                                    <h3 className={cx('nickname')}>{data.nickName}</h3>
                                    <h4 className={cx('fullname')}>{data.fullName}</h4>
                                </Link>
                            </Tippy>
                        </div>
                        <div className={cx('description')}>
                            <span className={cx('caption')}>{data.caption}</span>
                            <br />
                            <strong className={cx('hashtag')}>
                                {data.hashtags.map((hashtag, index) => (
                                    <a href="/" key={index}>
                                        {hashtag}
                                    </a>
                                ))}
                            </strong>
                        </div>
                        <div className={cx('location')}>
                            <LocationIcon className={cx('location-icon')} />
                            <span className={cx('location-name')}>{data.location}</span>
                        </div>
                        <Link to="/live" className={cx('music')}>
                            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                            <span className={cx('music-name')}>{data.song}</span>
                        </Link>
                    </div>
                    <div className={cx('follow-btn')}>
                        <Button outlinePrimary small>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('video')}>
                        <Video ref={videoRef} src={data.src} />
                        <div className={cx('controls')} onClick={handlePlayVideo}>
                            <FontAwesomeIcon className={cx('icon')} icon={playing ? faPause : faPlay} />
                        </div>
                        <div className={cx('volume')}>
                            <VolumeIcon className={cx('volume-icon')} />
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <Action />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
