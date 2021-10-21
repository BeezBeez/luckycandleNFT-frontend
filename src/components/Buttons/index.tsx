import styled from "styled-components";

export const Button = styled.button<{small?: boolean}>`
    display: flex;
    border: none;
    padding: ${props => props.small ? '8px 16px' : '16px 32px'};
    border-radius: ${props => props.small ? '8px' : '12px'};
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 210, 80);
    color: white;
    font-weight: bold;
    font-size: 1.5vw;
    font-size: ${props => props.small ? '1.5vw' : '1.75vw'};
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    box-shadow: 0 0 32px rgba(15, 210, 80, 0.5), 0px 4px 4px -4px rgba(0, 0, 0, 0.4), 0px 16px 8px -8px rgba(0, 0, 0, 0.4);
    
    &:hover {
        background-color: rgb(173, 245, 197);
        color: rgb(15, 210, 80);
        cursor: pointer;
        transform: translateY(-4px);
        box-shadow: 0 0 32px 8px rgba(15, 210, 80, 0.5), 0px 8px 8px -8px rgba(0, 0, 0, 0.4), 0px 28px 24px -12px rgba(0, 0, 0, 0.4), inset 0px 8px 16px rgba(255, 255, 255, 0.5);
    }
    
    &:active {
        background-color: rgb(173, 245, 197);
        color: rgb(15, 210, 80);
        cursor: pointer;
        transform: translateY(0px);
        box-shadow: 0 0 32px 8px rgb(15, 210, 80, 0.5), 0px 8px 8px -8px rgba(0, 0, 0, 0.4), 0px 28px 24px -12px rgba(0, 0, 0, 0.4), inset 0px 8px 24px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 500px) {
        padding: ${props => props.small ? '8px 16px' : '12px 24px'};
        font-size: ${props => props.small ? '3vw' : '4vw'};
    }
`

export const PurpleButton = styled(Button)`
    background-color: rgb(100, 15, 210);
    box-shadow: 0 0 32px rgba(106, 15, 210, 0.5), 0px 4px 4px -4px rgba(0, 0, 0, 0.4), 0px 16px 8px -8px rgba(0, 0, 0, 0.4);
    
    &:hover {
        background-color: rgb(210, 180, 255);
        color: rgb(100, 15, 210);
        box-shadow: 0 0 32px 8px rgba(100, 15, 210, 0.5), 0px 8px 8px -8px rgba(0, 0, 0, 0.4), 0px 28px 24px -12px rgba(0, 0, 0, 0.4), inset 0px 8px 16px rgba(255, 255, 255, 0.5);
    }

    &:active {
        background-color: rgb(210, 180, 255);
        color: rgb(100, 15, 210);
        box-shadow: 0 0 32px 8px rgb(100, 15, 210, 0.5), 0px 8px 8px -8px rgba(0, 0, 0, 0.4), 0px 28px 24px -12px rgba(0, 0, 0, 0.4), inset 0px 8px 24px rgba(0, 0, 0, 0.2);
    }
`