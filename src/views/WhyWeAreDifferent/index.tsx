import React from 'react';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { View } from '../../components/View';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const WhyWeAreDifferent = () => {
    return (
        <Page style={{ backgroundColor: 'rgb(0, 80, 50)', boxShadow: '0 0 64px 16px rgba(0, 80, 50, 0.8)' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder>
                    <CollectionPreview src={process.env.PUBLIC_URL + '/assets/images/NFTs/pfp1.png'} />
                </CollectionBorder>
                <TextContainer style={{ alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <Title>WHY WE ARE DIFFERENT</Title>
                    <h2>The community</h2>
                    <p>
                        We want to grow a community where the chance to be succesfull in the project is equal for
                        everybody. Even if you have a big or a small wallet.
                    </p>
                    <p>
                        Being part of the Lucky Candles project will let you participate in crazy events, have a chance to
                        make your wish come true, feeling real connections with other investors and feeling lucky. For us the
                        community is the most important thing, we want you to feel confortable around our beautiful
                        candles.
                    </p>
                    <h2>The royalties</h2>
                    <p>
                        We want to put 5% of secondary market sales directly back into your pockets. We want that holding
                        our NFT and helping the project to grow. We want to make sure that keeping our NFTs in your
                        possession and supporting the project can be of maximum benefit to you.
                    </p>
                    <p>
                        Our roadmap is here to let you see what we are planning to do for the community. Why we will be
                        useful to you in the future. You deserve to be threated well.
                    </p>
                </TextContainer>
            </Subpage>
        </Page>
    );
}

export default WhyWeAreDifferent;