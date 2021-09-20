import React from 'react';
import styled from 'styled-components';
import { Page } from '../../components/Page';

const Title = styled.h1`
    position: relative;
    top: 128px;
    padding: 24px 64px;
    background: linear-gradient(345deg,#78ffd7 0%, rgb(35, 231, 123) 100%);
    border-radius: 12px 48px;
    text-shadow: 0px 8px 8px #65cca1;
    box-shadow: 0 12px 24px rgba(0,0,0,0.5), 0 32px 64px 0px #28a173;
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
`;

const Point = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 999px;
    background-color: #3fbb68;
    box-shadow: 0px 0px 2px 8px rgba(60, 190, 125, 0.5);
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    
    &:hover {
        width: 96px;
        height: 96px;
        box-shadow: 0px 0px 16px 12px rgba(60, 190, 125, 0.5);
    }
`

const DescriptionContainer = styled.div<{inverseDirection?: boolean}>`
    position: absolute;
    display: flex;
    left: ${props => props.inverseDirection ? 'auto' : '128px'};
    right: ${props => props.inverseDirection ? '128px' : 'auto'};
    width: 256px;
    padding: 4px 32px;
    border-radius: 16px;
    background: linear-gradient(150deg, rgba(60, 190, 80, 0.4), rgba(60, 790, 80, 0.05) 70%);
`

const Roadmap = () => {
    return (
        <Page style={{ backgroundColor: 'rgb(0,80,50)' }}>
            <Title>Roadmap</Title>
            <CenterLine>
                <Point>
                    <h5>20%</h5>
                    <DescriptionContainer>
                        <p>Exemple roadmap description.</p>
                    </DescriptionContainer>
                </Point>
                <Point>
                    <h5>40%</h5>
                    <DescriptionContainer inverseDirection>
                        <p>Exemple roadmap progression point description.</p>
                    </DescriptionContainer>
                </Point>
                <Point>
                    <h5>60%</h5>
                    <DescriptionContainer>
                        <p>Exemple roadmap progression point description. This one is a little bit longer.</p>
                    </DescriptionContainer>
                </Point>
                <Point>
                    <h5>80%</h5>
                    <DescriptionContainer inverseDirection>
                        <p>Exemple roadmap progression point description.</p>
                    </DescriptionContainer>
                </Point>
                <Point>
                    <h5>100%</h5>
                    <DescriptionContainer>
                        <p>Exemple roadmap progression point description.</p>
                    </DescriptionContainer>
                </Point>
            </CenterLine>
        </Page>
    );
}

export default Roadmap;