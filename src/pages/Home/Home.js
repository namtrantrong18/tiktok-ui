import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import PostList from '~/components/PostList';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <PostList />
        </div>
    )
}

export default Home;
