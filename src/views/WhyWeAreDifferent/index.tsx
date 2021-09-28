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

const MSubpage = styled(Subpage)`
    transform: translateY(-25%);

    @media (max-width: 500px) {
        transform: translateY(0%);
    }
`

const WhyWeAreDifferent = () => {
    return (
        <Page rounded style={{ backgroundColor: 'rgb(0, 80, 50)', boxShadow: '0 0 64px 16px rgba(0, 80, 50, 0.8)', height: '120vh' }}>
            <MSubpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder>
                    <CollectionPreview src={process.env.PUBLIC_URL + '/assets/images/NFTs/pfp1.png'} />
                </CollectionBorder>
                <TextContainer style={{ alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <Title>WHY WE ARE DIFFERENT</Title>
                    <p>
                        <strong>We want to build a community</strong> where the chance to be succesfull in the project is equal for
                        everybody. <strong>Even if you have a big or a small wallet.</strong>
                    </p>
                    <p>
                        Being part of the <strong>Lucky Candle project</strong> will let you participate in <strong>crazy events</strong>, have the chance to
                        <strong>make your wishes becoming true</strong>, feeling real connections with other investors and feeling lucky. For us the
                        <strong>community is the most important thing</strong>, we want you to feel confortable around our beautiful
                        candles.
                    </p>
                </TextContainer>
                <MobileTextContainer style={{ backgroundColor: 'rgb(0, 80, 50)', alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <Title>ROYALTIES SYSTEMS</Title>
                    <p>
                        <strong>We want to put 5% of secondary market sales directly back into your pockets.</strong> We want that holding
                        our NFT and helping the project to grow. We want to make sure that keeping our NFTs in your
                        possession and supporting the project can be of maximum benefit to you.
                    </p>
                    <p>
                        <strong>Our roadmap</strong> is here to let you see what we are planning to do for the community. <strong>Why we will be
                        useful to you in the future.</strong> You deserve to be threated well.
                    </p>
                </MobileTextContainer>
            </MSubpage>
        </Page>
    );
}

export default WhyWeAreDifferent;