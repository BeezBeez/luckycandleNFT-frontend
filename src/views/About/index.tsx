import React from 'react';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const About = () => {
    return (
        <Page rounded style={{ backgroundColor: 'rgb(0, 50, 30)', boxShadow: '0 0 64px 16px rgba(0, 50, 30, 0.8)' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TextContainer>
                    <Title>OUR STORY</Title>
                    <p>
                        2021 is crazy as of right now, which is why the <strong>candles also wanted to participate in the market
                        euphoria</strong>, the candlestick has broken its resistance, 13 000 candles managed to <strong>escape the
                            cryptocurrency charts.</strong>
                    </p>
                    <p>
                        They came to us, we still don’t know why, but we had to capture them for our safety. They told us
                        to do it. We had no choice. We have enclosed each of them in individual cards. <strong>We felt that some of
                        these candles contained a great power... stronger and more powerful than the others.</strong>
                    </p>
                    <p>
                        But before capturing them, they asked us one particular thing: to distribute them throught the world, so that 
                        each of them <strong>share luck and equality.</strong>
                    </p>
                    <p>
                        It looks like the crypto universe is <strong>giving us a mission.</strong>
                    </p>
                    <p style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                        Are you guys ready to join this mission with us and spray your knowledge and luck throughout
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