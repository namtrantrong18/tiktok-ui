import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { OnlyHeader } from '~/components/Layout';

// Public Routes
const publicRoutes = [
    { path : '/' ,component : Home },
    { path : '/following' ,component : Following },
    { path : '/@:nickname' ,component : Profile },
    { path : '/upload' ,component : Upload, layout : OnlyHeader },
    { path : '/search' ,component : Search, layout : null },
]

// Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }