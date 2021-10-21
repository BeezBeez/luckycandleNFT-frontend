import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BackgroundVideo } from '../../components/BackgroundVideo';
import { View } from '../../components/View';
import { Page, Subpage } from '../../components/Page';
import { Button, PurpleButton } from '../../components/Buttons';
import DropCountdown from '../../components/DropCountdown';
import Clover from '../../components/Clover';
import { CollectionPreview, CollectionBorder } from '../../components/CollectionItems';
import { MintSlider } from '../../components/MintSlider';
import { useEthers } from '@usedapp/core';
import { useBuyCandle, useEarlyBuyCandle, useWhitelisted } from '../../hooks';
import { utils, BigNumber } from 'ethers';

const Title = styled.h1`
    font-family: 'Righteous';
    font-size: 7vw;
    background: linear-gradient(120deg,#bfffc3 0%, rgb(45, 211, 161) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const Subtitle = styled.h5`
    font-size: 1.5vw;
    
    @media (max-width: 500px) {
        font-size: 2.5vw;
    }
`;

const ChevronAnimation = keyframes`
    0% {
        top: 70vh;
        opacity: 0;
    }
    50% {
        top: 85vh;
        opacity: 1;
    }
    75% {
        top: 85vh;
        opacity: 1;
        transform: scale(1.25);
    }
    100% {
        top: 85vh;
        opacity: 0;
        transform: scale(0);
    }
`

const ChevronDown = styled.img`
    position: absolute;
    z-index: -1;
    height: 10vh;
    animation: ${ChevronAnimation} 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`

const ButtonView = styled(View)`
    margin: 32px 0px;
    flex-direction: row;
    gap: 32px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const HomeContent: React.FC<{ onMintButtonClick: () => void }> = (props) => {
    const { account, chainId } = useEthers();

    const isConnected = (account !== "" && account ? true : false);

    return (
        <>
            <Clover position={{ left: `${Math.random() * 20}%`, top: `${Math.random() * 80}%` }} />
            <Clover position={{ right: `${Math.random() * 50}%`, top: `${Math.random() * 30}%` }} />
            <Clover position={{ right: `${Math.random() * 20}%`, top: `${Math.random() * 60}%` }} />
            <BackgroundVideo brightness="0.7" name="red_blobs" />
            <View style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <Title>Lucky Candle</Title>
                <Subtitle><span style={{ color: 'rgb(70, 255, 153)' }}>DROP 1/4 (3 250 NFTs) </span>- OCTOBER 23 @ 9PM GMT</Subtitle>
                <View>
                    <DropCountdown date={`Sat, 23 Oct ${isConnected && chainId === 3 ? '1407' : '2021'} 21:00:00 GMT`}>
                        {/* Date du drop : Samedi 23 Octobre 23h */}
                        <ButtonView>
                            <Button onClick={props.onMintButtonClick}>Mint your LuckyCandle.</Button>
                            <PurpleButton onClick={() => window.open('https://discord.gg/3jTTMx8D3j', '_blank')}>Join our discord!</PurpleButton>
                        </ButtonView>
                    </DropCountdown>
                </View>
            </View>
            <ChevronDown src={`${process.env.PUBLIC_URL}/assets/images/icons/chevron-down.png`} />
        </>
    )
}

const Content = styled(View)`
    opacity: 1;
`

const Overlay = styled.div<{ expand?: boolean }>`
    position: absolute;
    width: 128px;
    height: 128px;
    background-color: rgb(80, 200, 90);
    border-radius: 9999px;
    z-index: 999;
    transform: ${props => props.expand ? 'scale(25)' : 'scale(0)'};
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
`

const RareEffect = keyframes`
    0% {
        opacity: 0;
        filter: hue-rotate(0deg);
    }
    25% {
        opacity: 1;
        filter: hue-rotate(180deg);
    }
    50% {
        opacity: 1;
        filter: hue-rotate(360deg);
    }
    75% {
        opacity: 1;
        filter: hue-rotate(540deg);
    }
    100% {
        opacity: 0;
        filter: hue-rotate(720deg);
    }
`

const NFTRare = styled(CollectionPreview)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    animation: ${RareEffect} 2s ease-in-out infinite;
`

const NFTBorder = styled(CollectionBorder)`
    position: relative;
    width: 22vw;
    height: 22vw;
    overflow: hidden;
    
    @media (max-width: 500px) {
        width: 45vw;
        height: 45vw;
    }
`

const lerp = (a: number, b: number, t: number) => {
    return a + t * (b - a);
}

const MintTitle = styled(Title) <{ chance: number, intensity: number }>`
    font-size: ${props => lerp(6, 4.5, props.chance / 6)}vw;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    text-align: center;

    text-shadow:
        0 0 ${props => 4 + props.intensity / 3 * 5}px #fff,
        0 0 ${props => 4 + props.intensity / 3 * 10}px #fff,
        0 0 ${props => 4 + props.intensity / 3 * 20}px #fff,
        0 0 ${props => 4 + props.intensity / 3 * 40}px #00ff73,
        0 0 ${props => props.intensity / 3 * 80}px #00ff73,
        0 0 ${props => props.intensity / 3 * 90}px #00ffd5,
        0 0 ${props => props.intensity / 3 * 100}px #00ffd5,
        0 0 ${props => props.intensity / 3 * 150}px #00ffd5;

    @media (max-width: 500px) {
        font-size: ${props => lerp(7, 5.5, props.chance / 6)}vw;
    }
`

const MintDescription = styled.h5`
    @media (max-width: 500px) {
        text-align: center;
    }
`

const MintSpan = styled.span<{ chance: number }>`
    font-family: 'Righteous';
    font-size: ${props => lerp(1, 3, props.chance / 6)}em;
`

const MintView: React.FC<{ chance: number, onAmountChanged: React.ChangeEventHandler<HTMLInputElement> }> = (props) => {
    const [amount, setAmount] = useState(1);
    const { chainId, account } = useEthers();
    const { send: buyCandle, state: candleState } = useBuyCandle(chainId!);
    const { send: earlyBuyCandle, state: earlyCandleState } = useEarlyBuyCandle(chainId!);
    const isWhitelisted = useWhitelisted(chainId!, account!);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onAmountChanged) {
            props.onAmountChanged(event);
        }

        setAmount(event.target.valueAsNumber);
    }

    const OnMintClicked = async () => {
        console.log('Mint', amount, 'NFT');
        if (isWhitelisted) {
            if (isWhitelisted[0]) {
                await earlyBuyCandle(BigNumber.from(amount.toString()), { value: BigNumber.from(utils.parseEther((amount * 0.01).toString())) });
                return;
            } else {
                await buyCandle(BigNumber.from(amount.toString()), { value: BigNumber.from(utils.parseEther((amount * 0.01).toString())) });
                return;
            }
        } else {
            await buyCandle(BigNumber.from(amount.toString()), { value: BigNumber.from(utils.parseEther((amount * 0.01).toString())) });
        }
    }

    return (
        <>
            <MintTitle style={{ filter: `hue-rotate(${lerp(0, 240, amount / 50)}deg)` }} intensity={lerp(-1, 1, props.chance / 6)} chance={props.chance}>Chance of RARE : <MintSpan chance={props.chance}>x{props.chance}</MintSpan></MintTitle>
            <MintDescription>Mint more NFT in a transaction to increase your chances to get a fuc**** rare LuckyCandle !</MintDescription>
            <View style={{ marginTop: 24 }}>
                <MintSlider min={1} max={isWhitelisted && (isWhitelisted[0] ? 2 : 50)} value={amount} onChange={onChange} />
                <Button onClick={OnMintClicked} style={{ marginLeft: 32, filter: `hue-rotate(${lerp(0, 240, amount / 50)}deg)` }}>MINT {amount} NFT</Button>
            </View>
        </>
    )
}

const PriceRibbon = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, rgb(30, 190, 70), rgb(10, 120, 60));
    color: white;
    margin: 0;
    padding: 12px 48px;
    text-align: center;
    font-family: 'Righteous';
    font-size: 1.25vw;
    border-radius: 8px;
    z-index: 4;
    
    @media (max-width: 500px) {
        padding: 8px 16px;
        font-size: 4vw;
    }
`

const MintPage: React.FC<{ onBackButtonClick: () => void }> = (props) => {
    const [chance, setChance] = useState(1);
    const [amount, setAmount] = useState(1);
    const { activateBrowserWallet, account } = useEthers();

    const isConnected = (account !== "" && account ? true : false);

    const handleAmountChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChance(Math.floor(lerp(1, 6, event.target.valueAsNumber / 50)));
        setAmount(event.target.valueAsNumber);
    }

    return (
        <Content>
            <BackgroundVideo blurAnim={false} hue={`${lerp(160, 360, amount / 50)}deg`} brightness="0.7" name="red_blobs" />
            <Subpage>
                <View style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                    <Button style={{ filter: `hue-rotate(${lerp(0, 240, amount / 50)}deg)` }} onClick={props.onBackButtonClick}>{"< Back"}</Button>
                    <NFTBorder style={{ filter: `hue-rotate(${lerp(0, 240, amount / 50)}deg)` }}>
                        <CollectionPreview src={`${process.env.PUBLIC_URL}/assets/images/NFTs/mint_unknown.gif`} />
                        {chance > 1 && <NFTRare src={`${process.env.PUBLIC_URL}/assets/images/NFTs/67.jpg`} />}
                    </NFTBorder>
                    <PriceRibbon style={{ filter: `hue-rotate(${lerp(0, 10, amount / 50)}deg)` }}>0.1 ETH/NFT</PriceRibbon>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 16 }}>
                    {
                        isConnected ?
                            <MintView chance={chance} onAmountChanged={handleAmountChanged} />
                            :
                            <Button onClick={() => activateBrowserWallet(undefined, true)}>Connect your wallet</Button>
                    }
                </View>
            </Subpage>
        </Content>
    )
}

const Home = () => {
    const [showMintPage, setShowMintPage] = useState(false);
    const [expandOverlay, setExpandOverlay] = useState(false);
    const handleMintClick = () => {
        setExpandOverlay(true);
        setTimeout(() => {
            setShowMintPage(true);
            setTimeout(() => {
                setExpandOverlay(false);
            }, 500);
        }, 500);
    }

    const handleBackClick = () => {
        setExpandOverlay(true);
        setTimeout(() => {
            setShowMintPage(false);
            setTimeout(() => {
                setExpandOverlay(false);
            }, 500);
        }, 500);
    }

    return (
        <Page style={{ alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Overlay expand={expandOverlay} />
            {
                showMintPage ?
                    <MintPage onBackButtonClick={handleBackClick} />
                    :
                    <HomeContent onMintButtonClick={handleMintClick} />
            }
        </Page>
    );
}

export default Home;