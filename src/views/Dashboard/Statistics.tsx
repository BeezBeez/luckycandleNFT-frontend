import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { View } from '../../components/View';

const Container = styled(View)`
    align-items: center;
    margin-top: 2vh;
    width: 87vw;
    height: 50vh;
    /* background: purple; */
    overflow-x: auto;
    
    @media (max-width: 500px) {
        width: 95vw;
    }
`

const Card = styled(View)`
    flex-direction: column;
    background-color: #083b30;
    border-radius: 16px;
    margin: 8px;
    padding: 24px;
    padding: 16px 24px;
    border: 2px solid #d0fff4;
    box-shadow: 0 0 24px #51f5ce;
    
    @media (max-width: 500px) {
        padding: 8px 12px;
        border-radius: 12px;
        border: 1px solid #d0fff4;
        box-shadow: 0 0 12px #51f5ce;
    }
`

const UpperStats = styled(View)`
    /* background-color: red; */
    justify-content: space-around;
`

const HotBidsContainer = styled(View)`
    flex-direction: column;
    margin-top: 72px;
    /* background-color: red; */
    
    @media (max-width: 500px) {
        margin-top: 32px;
    }
`

const HotBidsTitle = styled.h3`
    font-size: 3vw;

    @media (max-width: 500px) {
        font-size: 4vw;
    }
`

const NFTCard = styled(View)`
    flex-direction: column;
    padding: 8px;
    margin-left: 0vw;
    width: 15vw;
    height: 20vw;
    background: linear-gradient(#033b2f, #089475);
    border: 2px solid #59e4c3;
    border-radius: 16px;
    perspective: 24px;
    transform: perspective(256px) scale(0.9) translateZ(0px) rotateX(0deg) rotateY(0deg);
    transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    
    &:hover {
        border: 2px solid #aff7e6;
        box-shadow: 0 12px 16px rgba(30, 100, 50, 0.5), 0 0 8px #51f5ce;
        transform: perspective(256px) scale(0.9) translateZ(8px) rotateX(2deg) rotateY(0deg) translateY(-1vh);
    }

    @media (max-width: 500px) {
        width: 40vw;
        height: 50vw;
        padding: 4px;
        border-radius: 8px;
    }
`

const NFTImage = styled.img`
    width: 15vw;
    height: 15vw;
    border-radius: 16px;

    @media (max-width: 500px) {
        width: 40vw;
        height: 40vw;
        border-radius: 8px;
    }
`

const NFTDetails = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
`

const NFTDetailText = styled.h3`
    background-color: #002000;
    border-radius: 8px;
    padding: 8px;
    font-size: 1.5vw;
    
    @media (max-width: 500px) {
        font-size: 3vw;
    }
`

const NFTCardElement: React.FC<{ id: number, price: number }> = (props) => {
    const cardRef = React.createRef<HTMLDivElement>();
    const onCardClicked = () => {
        window.location.assign('https://opensea.io/');
    }

    return (
        <NFTCard ref={cardRef} onClick={onCardClicked}>
            <NFTImage src={`${process.env.PUBLIC_URL}/assets/images/NFTs/6.jpg`} />
            <NFTDetails>
                <NFTDetailText>#{props.id}</NFTDetailText>
                <NFTDetailText>{props.price.toFixed(2)} ETH</NFTDetailText>
            </NFTDetails>
        </NFTCard>
    )
}

const Statistics: React.FC = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <View style={{ flexDirection: 'column', width: '100%' }}>
            <UpperStats>
                <Card style={{ alignItems: 'center' }}>
                    <h2>Weekly Volume</h2>
                    <h4 style={{ marginTop: 12 }}>??? ETH</h4>
                </Card>

                <Card style={{ alignItems: 'center' }}>
                    <h2>Floor price</h2>
                    <h4 style={{ marginTop: 12 }}>0.1 ETH</h4>
                </Card>
            </UpperStats>
            <HotBidsContainer>
                <HotBidsTitle>Hot bids</HotBidsTitle>
                <Container>
                    {
                        data.map((value) => {
                            return (
                                <NFTCardElement id={value} price={value * 5} />
                            )
                        })
                    }


                </Container>
            </HotBidsContainer>
        </View>
    )
}

export default Statistics;