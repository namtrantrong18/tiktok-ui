import PostItem from '~/components/PostItem';
import image1 from '~/assets/images/image1.png';
import image2 from '~/assets/images/image2.png';
import image3 from '~/assets/images/image3.png';
import video1 from '~/assets/video/video1.mp4';
import video2 from '~/assets/video/video2.mp4';
import video3 from '~/assets/video/video3.mp4';

const posts = [
    {
        avatar: image1,
        fullName: 'Be Fit With Me',
        nickName: 'i.am.diu',
        caption: 'Summer body',
        location: 'Vung Tau Beach',
        song: 'Obsessed With You x All About Him - ARNEL REMIX',
        hashtags: ['#gymgirl', '#gymlifestyle', '#lifestyle'],
        src: video1,
    },
    {
        avatar: image2,
        fullName: 'Dims_home',
        nickName: 'dims_home',
        caption: 'Huhu có ai chỉ tui cách luộc cái bột bánh này khum',
        location: 'Hanoi',
        song: 'time machine -  apany',
        hashtags: ['#dimshome', '#ancungtiktok', '#cooking', '#xuhuong', '#vtvcab'],
        src: video2,
    },
    {
        avatar: image3,
        fullName: 'Hannah',
        nickName: 'ballerinafarm',
        caption:
            'Introducing homemade mozzarella-topped meatballs paired with warm sourdough baguette. So fun to make!',
        location: 'Netherlands',
        song: 'Mambo Italiano - Dean Martin',
        hashtags: ['#dimshome', '#ancungtiktok', '#cooking', '#xuhuong', '#vtvcab'],
        src: video3,
    },
];

function PostList() {
    return (
        <>
            {posts.map((post, index) => (
                <PostItem key={index} data={post} />
            ))}
        </>
    );
}

export default PostList;
