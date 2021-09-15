import React from 'react';
import styled from 'styled-components';
import { BackgroundVideo } from '../../components/BackgroundVideo';
import { View } from '../../components/View';
import { Page } from '../../components/Page';
import { Button } from '../../components/Buttons';
import DropCountdown from '../../components/DropCountdown';

const Home = () => {
    return (
        <Page style={{ alignItems: 'center', justifyContent: 'center' }}>
            <BackgroundVideo />
            <View style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <h1>LuckyCandle NFT</h1>
                <View>
                    <DropCountdown date="09/15/2021 22:00">
                        <View>
                            Countdown completed !
                        </View>
                    </DropCountdown>
                </View>
                <View>
                    <Button>join our discord</Button>
                </View>
            </View>
        </Page>
    );
}

export default Home;