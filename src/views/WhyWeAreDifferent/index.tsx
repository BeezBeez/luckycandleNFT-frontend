import React from 'react';
import styled from 'styled-components';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const MobileTextContainer = styled(TextContainer)`
    display: none;
    margin-top: 32px;

    @media (max-width: 500px) {
        display: flex;
    }
`

const WhyWeAreDifferent = () => {
    return (
        <Page rounded style={{ backgroundColor: 'rgb(0, 80, 50)', boxShadow: '0 0 64px 16px rgba(0, 80, 50, 0.8)', height: '120vh' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder>
                    <CollectionPreview src={process.env.PUBLIC_URL + '/assets/images/NFTs/pfp1.png'} />
                </CollectionBorder>
                <TextContainer style={{ alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <Title>WHY WE ARE DIFFERENT</Title>
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
                </TextContainer>
                <MobileTextContainer style={{ backgroundColor: 'rgb(0, 80, 50)', alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <Title>ROYALTIES SYSTEM</Title>
                    <p>
                        We want to put 5% of secondary market sales directly back into your pockets. We want that holding
                        our NFT and helping the project to grow. We want to make sure that keeping our NFTs in your
                        possession and supporting the project can be of maximum benefit to you.
                    </p>
                    <p>
                        Our roadmap is here to let you see what we are planning to do for the community. Why we will be
                        useful to you in the future. You deserve to be threated well.
                    </p>
                </MobileTextContainer>
            </Subpage>
        </Page>
    );
}

export default WhyWeAreDifferent;