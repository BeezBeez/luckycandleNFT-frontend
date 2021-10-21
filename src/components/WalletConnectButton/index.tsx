import { useHistory } from 'react-router';
import { useEthers } from '@usedapp/core'
import styled from "styled-components";
import { useState } from 'react';

export const StyledConnectButton = styled.button<{ connected: boolean }>`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    border: none;
    color: white;
    background-color: ${props => props.connected ? "rgba(0,255,90,0.3)" : "rgba(255,50,90,0.3)"};
    border-radius: 12px;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        background-color:  ${props => props.connected ? "rgba(0,255,90,0.4)" : "rgba(255,50,90,0.4)"};
        cursor: pointer;
    }
    
    &:active {
        background-color:  ${props => props.connected ? "rgba(0,255,90,0.3)" : "rgba(255,50,90,0.3)"};
        transform: scale(0.95);
    }
    
    @media (max-width: 500px) {
        position: absolute;
        right: 0px;
        padding: 12px 16px;
        height: 100%;
    }
`

const ConnectionStatusDot = styled.div<{ connected: boolean }>`
    width: 12px;
    height: 12px;
    margin-right: 12px;
    background-color:  ${props => props.connected ? "rgba(0, 255, 90, 1)" : "rgba(255, 50, 90, 1)"};
    border-radius: 12px;
    box-shadow: inset 0px 2px 4px rgba(255,255,255,0.3), 0 0 6px 3px  ${props => props.connected ? "rgba(0,255,90,0.7)" : "rgba(255,50,90,0.7)"};
`

const WalletConnectButton: React.FC<{ connected: boolean }> = (props) => {
    const { activateBrowserWallet, account } = useEthers();
    const history = useHistory();
    const [dummyState, setDummyState] = useState(false);

    const isConnected = (account !== "" && account ? true : false);
    const onConnectClicked = (connected: boolean) => {
        if (!connected) {
            activateBrowserWallet(undefined, true);
        } else {
            setDummyState(!dummyState)
            if (history.location.pathname.includes('dashboard')) {
                history.push('/');
            } else {
                history.push('/dashboard/wallet');
            }
        }
    }

    return (
        <StyledConnectButton connected={isConnected} onClick={() => {
            onConnectClicked(isConnected);
        }}>
            <ConnectionStatusDot connected={isConnected} />
            {
                isConnected && account ?
                    <span>Dashboard</span> :
                    <span>Connect wallet</span>
            }
        </StyledConnectButton>
    );
}

export default WalletConnectButton;