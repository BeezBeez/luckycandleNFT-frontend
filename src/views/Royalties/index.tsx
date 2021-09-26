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
        <MobilePage rounded style={{ backgroundColor: 'rgb(0, 80, 50)', height: '100vh', background: 'transparent' }}>
            <Subpage style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder style={{opacity: 0}}>
                    <CollectionPreview src={process.env.PUBLIC_URL + '/assets/images/NFTs/pfp1.png'} />
                </CollectionBorder>
                <TextContainer style={{ backgroundColor: 'rgb(0, 80, 50)', alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column', height: '140%' }}>
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
                </TextContainer>
            </Subpage>
        </MobilePage>
    );
}

export default Royalties;