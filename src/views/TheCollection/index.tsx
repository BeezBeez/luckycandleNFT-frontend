import React from 'react';
import styled from 'styled-components';
import { Page } from '../../components/Page';
import { Title } from '../../components/Text';
import { CollectionBorder, CollectionPreview } from '../../components/CollectionItems';

const Sample = styled(CollectionPreview)`
    width: 12vw;
    height: 12vw;
    margin: 0vw;
    border-radius: 16%;

    @media (max-width: 500px) {
        width: 25vw;
        height: 25vw;
    }
`

const Grid = styled(CollectionBorder)`
    display: grid;
    width: auto;
    height: auto;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
    padding: 1.5vw;
    
    @media (max-width: 500px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 2vw;
        grid-row-gap: 2vw;
        padding: 2vw;
    }
`

const TheCollection = () => {
    return (
        <Page style={{ backgroundColor: 'rgb(0, 50, 20)', justifyContent: 'space-evenly' }}>
            <Title>COLLECTION SAMPLES</Title>
            <Grid>
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/3.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/8.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/6.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/9.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/13.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/67.jpg`} />
            </Grid>
            <Grid>
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/103.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/85.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/1.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/4.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/11.jpg`} />
                <Sample src={`${process.env.PUBLIC_URL}/assets/images/NFTs/5.jpg`} />
            </Grid>
        </Page>
    );
}

export default TheCollection;