import React from 'react';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const Philosophy = () => {
    return (
        <Page rounded style={{ backgroundColor: 'rgb(0, 80, 50)', boxShadow: '0 0 64px 16px rgba(0, 80, 50, 0.8)' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder>
                    <CollectionPreview src={`${process.env.PUBLIC_URL}/assets/images/NFTs/6.jpg`} />
                </CollectionBorder>
                <TextContainer style={{ textAlign: 'start' }}>
                    <Title>PROJECT'S PHILOSOPHY</Title>
                    <p>
                        <strong>Lucky Candle</strong> is a collection of <strong>13 000 unique NFT’s</strong> on the Ethereum Blockchain that can be
                        mint for <strong>0.1 ETH</strong>. It’s an NFT project based on the <strong>Japanese candles</strong> that you love to see on the 
                        charts. Most likely when they are green.
                    </p>
                    <p>
                        For us the most important part of the project is <strong>putting the community first.</strong>
                    </p>
                    <p>
                        We want to give you access to a variety of things, to <strong>build a close-knit community who’s bringing you
                        luck.</strong>
                    </p>
                    <p>
                        <strong>Lucky Candle is not only an NFT project it’s also an experience, a chance.</strong>
                    </p>
                </TextContainer>
            </Subpage>
        </Page>
    );
}

export default Philosophy;