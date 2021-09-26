import React, { useState } from 'react';
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
        top: 70vh;
        opacity: 0;
    }
    50% {
        top: 85vh;
        opacity: 1;
    }
    75% {
        top: 85vh;
        opacity: 1;
        transform: scale(1.25);
    }
    100% {
        top: 85vh;
        opacity: 0;
        transform: scale(0);
    }
`

const ChevronDown = styled.img`
    position: absolute;
    z-index: -1;
    height: 10vh;
    animation: ${ChevronAnimation} 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`

const ButtonView = styled(View)`
    margin: 32px 0px;
    flex-direction: row;
    gap: 32px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const HomeContent: React.FC<{ onMintButtonClick: () => void }> = (props) => {
    return (
        <>
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
                        <ButtonView>
                            <Button onClick={props.onMintButtonClick}>Mint your LuckyCandle.</Button>
                            <PurpleButton onClick={() => window.open('https://discord.gg/3jTTMx8D3j', '_blank')}>Join our discord!</PurpleButton>
                        </ButtonView>
                    </DropCountdown>
                </View>
            </View>
            <ChevronDown src={`${process.env.PUBLIC_URL}/assets/images/icons/chevron-down.png`} />
        </>
    )
}

const Content = styled(View)`
    opacity: 1;
`

const Overlay = styled.div<{expand?: boolean}>`
    position: absolute;
    width: 128px;
    height: 128px;
    background-color: rgb(80, 200, 90);
    border-radius: 9999px;
    z-index: 999;
    transform: ${props => props.expand ? 'scale(25)' : 'scale(0)'};
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
`

const MintPage: React.FC<{ onBackButtonClick: () => void }> = (props) => {
    return (
        <Content>
            <Clover position={{ left: `${Math.random() * 20}%`, top: `${Math.random() * 80}%` }} />
            <Clover position={{ right: `${Math.random() * 50}%`, top: `${Math.random() * 30}%` }} />
            <Clover position={{ right: `${Math.random() * 20}%`, top: `${Math.random() * 60}%` }} />
            <BackgroundVideo blurAnim brightness="0.7" name="red_blobs" />
            <View style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <Button onClick={props.onBackButtonClick}>{"< Back"}</Button>
            </View>
        </Content>
    )
}

const Home = () => {
    const [showMintPage, setShowMintPage] = useState(false);
    const [expandOverlay, setExpandOverlay] = useState(false);
    const handleMintClick = () => {
        setExpandOverlay(true);
        setTimeout(() => {
            setShowMintPage(true);
            setTimeout(() => {
                setExpandOverlay(false);
            }, 500);
        }, 500);
    }
    
    const handleBackClick = () => {
        setExpandOverlay(true);
        setTimeout(() => {
            setShowMintPage(false);
            setTimeout(() => {
                setExpandOverlay(false);
            }, 500);
        }, 500);
    }

    return (
        <Page style={{ alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Overlay expand={expandOverlay}/>
            {
                showMintPage ?
                    <MintPage onBackButtonClick={handleBackClick} />
                    :
                    <HomeContent onMintButtonClick={handleMintClick} />
            }
        </Page>
    );
}

export default Home;