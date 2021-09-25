import React from 'react';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const Philosophy = () => {
    return (
        <Page style={{ backgroundColor: 'rgb(0, 80, 50)', boxShadow: '0 0 64px 16px rgba(0, 80, 50, 0.8)' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder>
                    <CollectionPreview src={`${process.env.PUBLIC_URL}/assets/images/NFTs/6.jpg`} />
                </CollectionBorder>
                <TextContainer style={{ textAlign: 'start' }}>
                    <Title>PROJECT'S PHILOSOPHY</Title>
                    <p>
                        Lucky Candles is a collection of <strong>13 000 unique NFT’s</strong> on the Ethereum Blockchain that can be
                        mint for <strong>0.1 ETH</strong>. It’s an NFT project based on the Japanese candles that you all love to see on your
                        charts. More likely when they are green.
                    </p>
                    <p>
                        We are a project that feels that it’s important for us to put the community first.
                    </p>
                    <p>
                        We want to give you access to a variety of things, to build a close-knit community who’s bringing you
                        luck.
                    </p>
                    <p>
                        <strong>Lucky Candles is not only an NFT project it’s also an experience, a chance.</strong>
                    </p>
                </TextContainer>
            </Subpage>
        </Page>
    );
}

export default Philosophy;