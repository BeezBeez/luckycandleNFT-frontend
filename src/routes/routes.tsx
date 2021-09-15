import Logo from '../components/Logo';
import Home from '../views/Home';
import About from '../views/About';
import Roadmap from '../views/Roadmap';
import { RouteEntry } from './types';

export const appRoutes: RouteEntry[] = [
    {
        to: '#home',
        name: '$home-logo',
        displayName: <Logo/>,
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
        displayName: 'Our Story',
        content: <About />
    },
    {
        to: '#about',
        name: 'about',
        displayName: 'The Collection',
        content: <About /> // TODO : Replace with Collection view
    },
    {
        to: '#roadmap',
        name: 'roadmap',
        displayName: 'Roadmap',
        content: <Roadmap />
    },
]