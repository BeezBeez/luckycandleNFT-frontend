import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BackgroundVideo } from '../../components/BackgroundVideo';
import { View } from '../../components/View';
import { Page } from '../../components/Page';
import { Button, PurpleButton } from '../../components/Buttons';
import DropCountdown from '../../components/DropCountdown';
import Clover from '../../components/Clover';

const Title = styled.h1`
    font-family: 'Righteous';
    font-size: 7vw;
    background: linear-gradient(120deg,#bfffc3 0%, rgb(45, 211, 161) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const Subtitle = styled.h5`
    font-size: 1.5vw;
    
    @media (max-width: 500px) {
        font-size: 2.5vw;
    }
`;

const ChevronAnimation = keyframes`
    0% {
        bottom: 64px;
        opacity: 0;
    }
    50% {
        bottom: 32px;
        opacity: 1;
    }
    100% {
        bottom: 32px;
        opacity: 1;
    }
`

const ChevronDown = styled.img`
    position: absolute;
    bottom: 32px;
    animation: ${ChevronAnimation} 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`

const Home = () => {
    return (
        <Page style={{ alignItems: 'center', justifyContent: 'center', overflowX: 'hidden' }}>
            <Clover position={{ left: `${Math.random() * 20}%`, top: `${Math.random() * 80}%` }} />
            <Clover position={{ right: `${Math.random() * 50}%`, top: `${Math.random() * 30}%` }} />
            <Clover position={{ right: `${Math.random() * 20}%`, top: `${Math.random() * 60}%` }} />
            <BackgroundVideo brightness="0.7" name="red_blobs" />
            <View style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <Title>LuckyCandle</Title>
                <Subtitle><span style={{ color: 'rgb(70, 255, 153)' }}>LUCKY MINT </span>- OCTOBER 16 @ 9PM GMT</Subtitle>
                <View>
                    <DropCountdown date="Sat, 16 Oct 2021 21:00:00 GMT">
                        {/* Date du drop : Samedi 16 Octobre 23h */}
                        <View style={{margin: '32px 0', flexDirection: 'row', gap: 24}}>
                            <Button onClick={() => window.location.href = 'https://discord.gg/3jTTMx8D3j'}>Mint your LuckyCandle.</Button>
                            <PurpleButton onClick={() => window.location.href = 'https://discord.gg/3jTTMx8D3j'}>Join our discord!</PurpleButton>
                        </View>
                    </DropCountdown>
                </View>
            </View>
            <ChevronDown src={`${process.env.PUBLIC_URL}/assets/images/icons/chevron-down.png`} />
        </Page>
    );
}

export default Home;