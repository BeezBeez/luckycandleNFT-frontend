import React from 'react';
import styled from 'styled-components';
import { BackgroundVideo } from '../../components/BackgroundVideo';
import { View } from '../../components/View';
import { Page } from '../../components/Page';
import { Button } from '../../components/Buttons';
import DropCountdown from '../../components/DropCountdown';

const Title = styled.h1`
    font-family: 'Righteous';
    font-size: 96px;
    background: linear-gradient(120deg,#e5d4ff 0%, rgb(162, 122, 255) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h5`
`;

const Home = () => {
    return (
        <Page style={{ alignItems: 'center', justifyContent: 'center' }}>
            <BackgroundVideo brightness="0.7" name="red_blobs" />
            <View style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <Title>LuckyCandle</Title>
                <Subtitle><span style={{color: 'rgb(255, 70, 120)'}}>GENESIS </span>- DECEMBER 32 @ 12PM CET</Subtitle>
                <View>
                    <DropCountdown date="09/20/2021 22:00">
                        <View>
                            Countdown completed !
                        </View>
                    </DropCountdown>
                </View>
                <View>
                    <Button onClick={() => window.location.href = 'https://discord.gg/3jTTMx8D3j'}>Join our discord!</Button>
                </View>
            </View>
        </Page>
    );
}

export default Home;