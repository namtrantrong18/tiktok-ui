import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './Action.module.scss';
import ActionButton from './ActionButton';

const cx = classNames.bind(styles);

function Action() {
    const [liked, setLiked] = useState(false);

    const handleLikeVideo = () => {
        setLiked(!liked);
    };
    console.log(liked);

    return (
        <React.Fragment>
            <ActionButton className={liked ? 'active' : ''} onClick={handleLikeVideo}>
                <FontAwesomeIcon icon={faHeart} />
            </ActionButton>
            <ActionButton>
                <FontAwesomeIcon icon={faCommentDots} />
            </ActionButton>
            <ActionButton>
                <FontAwesomeIcon icon={faShare} />
            </ActionButton>
        </React.Fragment>
    );
}

export default Action;


