import styled from 'styled-components';
import Logo from '../components/Logo';
import Home from '../views/Home';
import About from '../views/About';
import TheCollection from '../views/TheCollection';
import Roadmap from '../views/Roadmap';
import WhyWeAreDifferent from '../views/WhyWeAreDifferent';

import { RouteEntry } from './types';

const Icon = styled.img`
    height: 100%;
    opacity: 0.7;
`;

export const appRoutes: RouteEntry[] = [
    {
        to: '#home',
        name: '$home-logo',
        displayName: <Logo />,
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
        to: '',
        name: 'why',
        displayName: 'Why We Are Different',
        content: <WhyWeAreDifferent />
    },
    {
        to: '#collection',
        name: 'collection',
        displayName: 'The Collection',
        content: <TheCollection />
    },
    {
        to: '#roadmap',
        name: 'roadmap',
        displayName: 'Roadmap',
        content: <Roadmap />
    },
]

export const rightLinks: RouteEntry[] = [
    {
        to: "https://opeansea.io/collection/luckycandle",
        name: '$opensea',
        displayName: <Icon src={`${process.env.PUBLIC_URL}/assets/images/icons/opensea.png`} alt="opensea" />,
        content: null
    },
    {
        to: "https://discord.gg/3jTTMx8D3j",
        name: '$discord-server',
        displayName: <Icon src={`${process.env.PUBLIC_URL}/assets/images/icons/discord.png`} alt="discord" />,
        content: null
    },
    {
        to: "https://telegram/luckycandle_nft",
        name: '$telegram-group',
        displayName: <Icon src={`${process.env.PUBLIC_URL}/assets/images/icons/telegram.png`} alt="telegram" />,
        content: null
    },
]