import React from 'react';
import styled from 'styled-components';
import Clover from '../../components/Clover';
import { Page } from '../../components/Page';

const Title = styled.h1`
    position: relative;
    top: 128px;
    padding: 24px 64px;
    background: linear-gradient(345deg,#78ffd7 0%, rgb(35, 231, 123) 100%);
    border-radius: 12px 48px;
    text-shadow: 0px 8px 8px #65cca1;
    box-shadow: 0 12px 24px rgba(0,0,0,0.5), 0 32px 64px 0px #28a173;
    
    @media (max-width: 500px) {
        font-size: 10vw;
        padding: 16px 48px;
        border-radius: 6px 24px;
    }
`;

const CenterLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 2px;
    height: 100%;
    padding-top: 128px;
    background-color: white;
    
    @media (max-width: 500px) {
        justify-content: start;
    }
`;

const Point = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 32px;
    border-radius: 999px;
    background-color: #3fbb68;
    box-shadow: 0px 0px 2px 8px rgba(60, 190, 125, 0.5);
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    
    &:hover {
        width: 96px;
        height: 96px;
        box-shadow: 0px 0px 16px 12px rgba(60, 190, 125, 0.5);
    }

    @media (max-width: 500px) {
        width: 48px;
        height: 48px;
    }
`

const DescriptionContainer = styled.div<{ inverseDirection?: boolean }>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${props => props.inverseDirection ? 'auto' : '128px'};
    right: ${props => props.inverseDirection ? '128px' : 'auto'};
    width: 256px;
    padding: 4px 32px;
    border-radius: 16px;
    background: linear-gradient(150deg, rgba(60, 190, 80, 0.4), rgba(60, 790, 80, 0.05) 70%);
    text-align: center;

    @media (max-width: 500px) {
        display: none;
    }
`

const MDescriptionContainer = styled.div`
    position: static;
    display: none;
    align-items: center;
    justify-content: center;
    width: 50vw;
    padding: 4px 32px;
    border-radius: 8px;
    background: linear-gradient(150deg, rgb(60, 150, 80), rgb(30, 90, 40) 70%);
    text-align: center;
    
    @media (max-width: 500px) {
        display: flex;
    }
`

const Roadmap = () => {
    return (
        <Page style={{ backgroundColor: 'rgb(0,80,50)' }}>
            <Clover position={{ right: "128px" }} />
            <Clover position={{ left: "128px" }} />
            <Title>Roadmap</Title>
            <CenterLine>
                <Point>
                    <h5>25%</h5>
                    <DescriptionContainer>
                        <p>
                            A trip to El Salvador to be won will be unlocked
                            for some lucky investors
                        </p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>
                        A trip to El Salvador to be won will be unlocked
                        for some lucky investors
                    </p>
                </MDescriptionContainer>
                <Point>
                    <h5>50%</h5>
                    <DescriptionContainer inverseDirection>
                        <p>Make a wish, we make it come true</p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>Make a wish, we make it come true</p>
                </MDescriptionContainer>
                <Point>
                    <h5>75%</h5>
                    <DescriptionContainer>
                        <p>Unlocking a world tour</p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>Unlocking a world tour</p>
                </MDescriptionContainer>
                <Point>
                    <h5>100%</h5>
                    <DescriptionContainer inverseDirection>
                        <p>
                            The candles are coming to you, your NFTs in trading card format in a protective
                            case
                        </p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>
                        The candles are coming to you, your NFTs in trading card format in a protective
                        case
                    </p>
                </MDescriptionContainer>
            </CenterLine>
        </Page>
    );
}

export default Roadmap;