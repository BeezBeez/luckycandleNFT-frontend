import React from 'react';
import styled from 'styled-components';
import { Page, Subpage, TextContainer } from '../../components/Page';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const MobilePage = styled(Page)`
    display: flex;

    @media (max-width: 500px) {
        display: none;
    }
`

const Royalties = () => {
    return (
        <MobilePage rounded style={{ backgroundColor: 'transparent', height: '100vh', top: 64 }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly', transform: 'translateY(-25%)' }}>
                <CollectionBorder style={{ opacity: 0 }}>
                    <CollectionPreview src={process.env.PUBLIC_URL + '/assets/images/NFTs/pfp1.png'} />
                </CollectionBorder>
                <TextContainer style={{ backgroundColor: 'rgb(0, 80, 50)', alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column', height: '140%' }}>
                    <Title>ROYALTIES SYSTEM</Title>
                    <p>
                        <strong>We want to put 5% of secondary market sales directly back into your pockets.</strong> We want that holding
                        our NFT and helping the project to grow. We want to make sure that keeping our NFTs in your
                        possession and supporting the project can be of maximum benefit to you.
                    </p>
                    <p>
                        <strong>Our roadmap</strong> is here to let you see what we are planning to do for the community. <strong>Why we will be
                        useful to you in the future.</strong> You deserve to be threated well.
                    </p>
                </TextContainer>
            </Subpage>
        </MobilePage>
    );
}

export default Royalties;