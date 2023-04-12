import PostItem from '~/components/PostItem';
import video1 from '~/assets/video/video1.mp4';
import video2 from '~/assets/video/video2.mp4';
import video3 from '~/assets/video/video3.mp4';

const posts = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fea025e112f9238d17eccb81f1ecf9b0~c5_100x100.jpeg?x-expires=1681239600&x-signature=2qauZd9Rk4GKN3uIHBN8pWkzWmU%3D',
        fullName: 'Be Fit With Me',
        nickName: 'i.am.diu',
        caption: 'Summer body',
        location: 'Vung Tau Beach',
        song: 'Obsessed With You x All About Him - ARNEL REMIX',
        hashtags: ['#gymgirl', '#gymlifestyle', '#lifestyle'],
        src: video1,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ab2a631718269b1b67e24f14581b9266~c5_100x100.jpeg?x-expires=1681401600&x-signature=516H8UInSL19T%2B8RdJFIOTdnScI%3D',
        fullName: 'Dims_home',
        nickName: 'dims_home',
        caption: 'Huhu có ai chỉ tui cách luộc cái bột bánh này khum',
        location: 'Hanoi',
        song: 'time machine -  apany',
        hashtags: ['#dimshome', '#ancungtiktok', '#cooking', '#xuhuong', '#vtvcab'],
        src: video2,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/99a8e3a5ada6a41492653ba8fa555d49~c5_100x100.jpeg?x-expires=1681448400&x-signature=3TU1PzA3O6FAsdh9UwSWmMqmjfE%3D',
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
