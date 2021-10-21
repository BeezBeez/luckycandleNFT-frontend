import React, { useState } from 'react';
import styled from 'styled-components';
import { useEthers } from '@usedapp/core';
import { View } from '../../components/View';
import { Button, PurpleButton } from '../../components/Buttons';

const Container = styled(View)`
    align-items: center;
    margin-top: 2vh;
    width: 87vw;
    height: 47vh;
    /* background: purple; */
    overflow-x: auto;
    
    @media (max-width: 500px) {
        height: 40vh;
        width: 95vw;
    }
`

const Card = styled(View)`
    flex-direction: column;
    background-color: #051a15;
    border-radius: 16px;
    margin: 8px;
    padding: 16px;
    border: 2px solid #d0fff4;
    box-shadow: 0 0 24px #51f5ce;
    
    @media (max-width: 500px) {
        border-radius: 16px;
        border: 1px solid #d0fff4;
        box-shadow: 0 0 16px #51f5ce;
    }
`

const UpperStats = styled(View)`
    /* background-color: red; */
    justify-content: space-around;
    margin-right: 16px;
`

const HotBidsContainer = styled(View)`
    flex-direction: column;
    margin-top: 16px;
    /* background-color: red; */
    
    @media (max-width: 500px) {
        margin-top: 16px;
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
        transform: perspective(256px) scale(0.9) translateZ(8px) rotateX(2deg) rotateY(0deg) translateY(-16px);
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

const NFTCardElement: React.FC<{ id: number, price: number, onStakeClicked: (id: number) => void }> = (props) => {
    const cardRef = React.createRef<HTMLDivElement>();
    const onStakeClicked = () => {
        if (props.onStakeClicked) {
            props.onStakeClicked(props.id);
        }
    }

    return (
        <NFTCard ref={cardRef}>
            <NFTImage src={`${process.env.PUBLIC_URL}/assets/images/NFTs/6.jpg`} />
            <NFTDetails>
                <NFTDetailText>#{props.id}</NFTDetailText>
                <Button small onClick={onStakeClicked}>STAKE</Button>
            </NFTDetails>
        </NFTCard>
    )
}

const Overlay = styled(View)`
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(32px);
    z-index: 9999;
    width: 100vw;
    overflow: hidden;
`

const DurationCard = styled(Card)`
    @media (max-width: 500px) {
        width: 75%;
        margin-top: 48px;
    }
`;

const DurationView = styled(View)`
    margin-top: 2vh;
    flex-direction: row;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const StakeDurationDialog: React.FC<{ id: number, onRequestClose: () => void }> = (props) => {
    const onValidate = (index: number) => {
        switch (index) {
            case 0: {
                break;
            }
            case 1: {
                break;
            }
            default: {
                break;
            }
        }

        if (props.onRequestClose) {
            props.onRequestClose();
        }
    }

    return (
        <Overlay>
            <DurationCard>
                <h4>LuckyCandle #{props.id}</h4>
                <h3>Staking duration</h3>
                <DurationView>
                    <PurpleButton style={{margin: 16}} onClick={() => { onValidate(0) }}>1 minute</PurpleButton>
                    <PurpleButton style={{margin: 16}} onClick={() => { onValidate(1) }}>1 day</PurpleButton>
                    <PurpleButton style={{margin: 16}} onClick={() => { onValidate(2) }}>3 days</PurpleButton>
                    <PurpleButton style={{margin: 16}} onClick={() => { onValidate(3) }}>1 week</PurpleButton>
                    <PurpleButton style={{margin: 16}} onClick={() => { onValidate(4) }}>2 week</PurpleButton>
                    <PurpleButton style={{margin: 16}} onClick={() => { onValidate(5) }}>1 month</PurpleButton>
                </DurationView>
            </DurationCard>
        </Overlay>
    )
}

const Wallet: React.FC = () => {
    const [dialogData, setDialogData] = useState({
        showDialog: false,
        id: 0
    });

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const handleStakeClicked = (id: number) => {
        setDialogData({
            showDialog: true,
            id: id
        });
    }

    return (
        <View style={{ flexDirection: 'column', width: '100%' }}>
            {dialogData.showDialog && <StakeDurationDialog onRequestClose={() => { setDialogData({ showDialog: false, id: 0 }) }} id={dialogData.id} />}
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
                <h3>In your pocket</h3>
                <Container>
                    {
                        data.map((value) => {
                            return (
                                <NFTCardElement onStakeClicked={handleStakeClicked} id={value} price={value * 5} />
                            )
                        })
                    }
                </Container>
            </HotBidsContainer>
        </View>
    )
}

export default Wallet;