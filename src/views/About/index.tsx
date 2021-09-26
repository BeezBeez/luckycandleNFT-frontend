import React from 'react';
import styled from 'styled-components';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { View } from '../../components/View';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const About = () => {
    return (
        <Page rounded style={{ backgroundColor: 'rgb(0, 50, 30)', boxShadow: '0 0 64px 16px rgba(0, 50, 30, 0.8)' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TextContainer>
                    <Title>OUR STORY</Title>
                    <p>
                        2021 was so crazy for the moment that the candles also wanted to participate in the market
                        euphoria, the candlestick has broken his resistance, 13 000 candles managed to escaped the
                        cryptocurrency charts.
                    </p>
                    <p>
                        They comed to us, we still don’t know why, but we had to capture them for our safety. They told us
                        to do it. We had no choice. We have enclosed each of them in individual cards. We felt that some of
                        these candles contained a great power... stronger and more powerful than the others.
                    </p>
                    <p>
                        But before capturing them, they asked us one thing in particular. To distribute them throughout the
                        world so that they can, each on their own, share luck and equality.
                    </p>
                    <p>
                        It looks like the crypto universe is giving us a mission.
                    </p>
                    <p style={{fontStyle: 'italic'}}>
                        Are you guys ready to participate in this mission with us and spray your knowledge and luck through
                        the world ?
                    </p>
                </TextContainer>
                <CollectionBorder>
                    <CollectionPreview src={`${process.env.PUBLIC_URL}/assets/images/Lucky_candle_expo_lite.gif`} />
                </CollectionBorder>
            </Subpage>
        </Page>
    );
}

export default About;