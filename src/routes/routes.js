import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

//Public routes
const publicRoutes = [
    { patch: config.routes.home, component: Home },
    { patch: config.routes.following, component: Following },
    { patch: config.routes.profile, component: Profile },
    { patch: config.routes.live, component: Live },
    { patch: config.routes.upload, component: Upload, layout: HeaderOnly },
    { patch: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
