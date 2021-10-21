import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import { View } from '../../components/View';
import { Page } from '../../components/Page';

import Statistics from './Statistics';
import Wallet from './Wallet';

const Content = styled(Page)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    background-color: #181818;
    
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
`

const TabsContainer = styled(View)`
    width: auto;
    height: 100%;
    background: #101010;
    flex-direction: column;
    padding: 8px;
    padding-top: 256px;
    justify-content: start;
    
    @media (max-width: 500px) {
        flex-direction: row;
        margin: 0px 80px;
        padding: 8px;
        width: 100%;
        height: 48px;
        margin-top: 96px;
        justify-content: center;
    }
`

export const NavButton = styled.button<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.active ? '#ffffff' : "transparent"};
    color: ${props => props.active ? 'rgb(30, 30, 30)' : "#fff"};
    padding: 16px 32px;
    font-size: 1vw;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    margin: 8px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    border: none;
    border-radius: 16px;
    
    &:hover {
        background: rgba(255,255,255, 1);
        color: rgb(30, 30, 30);
        cursor: pointer;
    }
    
    &:active {
        background: rgba(255,255,255, 1);
        opacity: 0.5;
    }
    
    &:disabled {
        pointer-events: none;
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    @media (max-width: 500px) {
    background: ${props => props.active ? '#ffffff' : "rgb(50, 50, 50)"};
        margin: 0px;
        padding: 8px 16px;
        border-radius: 0px;
        font-size: 3vw;

        &:first-child {
            border-radius: 16px 0px 0px 16px;
        }
        
        &:last-child {
            border-radius: 0px 16px 16px 0px;
        }
    }
`;

const SubpageContainer = styled(View)`
    width: 100%;
    height: 100%;
    padding: 32px;
    padding-top: 272px;
    
    @media (max-width: 500px) {
        margin-left: 16px;
        padding: 16px;
    }
`

const Dashboard = () => {
    const history = useHistory();
    const [dummy, setDummy] = useState(false);

    const navigateTo = (target: string) => {
        history.push(`/dashboard/${target}`);
        setDummy(!dummy);
    }

    const shouldBeActive = (target: string) => {
        return history.location.pathname.includes(target);
    }

    return (
        <Content>
            <TabsContainer>
                {/* <NavButton onClick={() => navigateTo('statistics')} active={shouldBeActive('statistics')} >Statistics</NavButton> */}
                <NavButton onClick={() => navigateTo('wallet')} active={shouldBeActive('wallet')}>Wallet</NavButton>
                <NavButton onClick={() => navigateTo('royalties')} disabled active={shouldBeActive('royalties')}>Royalties</NavButton>
            </TabsContainer>

            <SubpageContainer>
                <Switch>
                    <Route path='/dashboard/statistics'>
                        <Statistics/>
                    </Route>

                    <Route path='/dashboard/wallet'>
                        <Wallet/>
                    </Route>
                </Switch>
            </SubpageContainer>
        </Content>
    )
}

export default Dashboard;