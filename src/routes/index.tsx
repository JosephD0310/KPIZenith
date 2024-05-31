import { ComponentType } from 'react';
import Home from '../pages/Home'
import { Manage , Education, Skill, Exercise, DetailTrack} from '../pages/Manage';
import Statistic from '../pages/Statistic';
import { Profile, Password, Notification, About } from '../pages/Setting';
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import { DefaultLayout } from '../layouts';
import config from '../config';

interface IRoute {
    path : string;
    component: ComponentType<any>;
    layout? : ComponentType<any>;
}

const publicRoutes : IRoute[]  = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.manage, component: Manage, layout: DefaultLayout },
    { path: config.routes.education, component: Education, layout: DefaultLayout },
    { path: config.routes.skill, component: Skill, layout: DefaultLayout },
    { path: config.routes.exercise, component: Exercise, layout: DefaultLayout },
    { path: config.routes.statistic, component: Statistic, layout: DefaultLayout },
    { path: config.routes.details, component: DetailTrack, layout: DefaultLayout },
    { path: config.routes.profile, component: Profile, layout: DefaultLayout },
    { path: config.routes.password, component: Password, layout: DefaultLayout },
    { path: config.routes.notification, component: Notification, layout: DefaultLayout },
    { path: config.routes.about, component: About, layout: DefaultLayout },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
]

const privateRoutes : IRoute[] = []

export {publicRoutes, privateRoutes}