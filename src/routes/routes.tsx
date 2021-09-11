import Home from '../views/Home';
import About from '../views/About';
import Roadmap from '../views/Roadmap';
import { RouteEntry } from './types';

export const appRoutes: RouteEntry[] = [
    {
        to: '#home',
        name: 'home-logo',
        displayName: 'Home-Logo',
        content: null
    },
    {
        to: '#home',
        name: 'home',
        displayName: 'Home',
        content: <Home />
    },
    {
        to: '#about',
        name: 'about',
        displayName: 'About',
        content: <About />
    },
    {
        to: '#roadmap',
        name: 'roadmap',
        displayName: 'Roadmap',
        content: <Roadmap />
    },
]