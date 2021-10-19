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
    padding-top: 192px;
    background: linear-gradient(rgba(255,255,255, 0) 0%, white 25%, white 75%, rgba(255,255,255, 0) 100%);
    
    @media (max-width: 500px) {
        padding-top: 128px;
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

        @media (max-width: 500px) {
            width: 64px;
            height: 64px;
        }
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
    width: 20vw;
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

const LittleCandle = styled.img`

`

const Roadmap = () => {
    return (
        <Page rounded style={{ backgroundColor: 'rgb(0,80,50)', height: '130vh' }}>
            <Clover position={{ right: "128px" }} />
            <Clover position={{ left: "128px" }} />
            <Title>Roadmap</Title>
            <CenterLine>
                <Point>
                    <h5>25%</h5>
                    <DescriptionContainer>
                        <p>
                            A trip to El Salvador to be won will be unlocked
                            for 4 lucky investors
                        </p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>
                        A trip to El Salvador to be won will be unlocked
                        for 4 lucky investors
                    </p>
                </MDescriptionContainer>
                <Point>
                    <h5>50%</h5>
                    <DescriptionContainer inverseDirection>
                        <p>Unlocking a world tour for 4 people</p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>Unlocking a world tour for 4 people</p>
                </MDescriptionContainer>
                <Point>
                    <h5>75%</h5>
                    <DescriptionContainer>
                        <p>Make a wish, we will make it come true</p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>Make a wish, we will make it come true</p>
                </MDescriptionContainer>
                <Point>
                    <h5>100%</h5>
                    <DescriptionContainer inverseDirection>
                        <p>
                            A surprise will be revealed a few days before the drop !
                        </p>
                    </DescriptionContainer>
                </Point>
                <MDescriptionContainer>
                    <p>
                        A surprise will be revealed a few days before the drop !
                    </p>
                </MDescriptionContainer>
            </CenterLine>
            <LittleCandle />
        </Page>
    );
}

export default Roadmap;