import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    border: none;
    padding: 16px 32px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 20, 110);
    color: white;
    font-weight: bold;
    font-size: 24px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    box-shadow: 0 0 32px rgba(255, 20, 110, 0.5), 0px 4px 4px -4px rgba(0, 0, 0, 0.4), 0px 16px 8px -8px rgba(0, 0, 0, 0.4);
    
    &:hover {
        background-color: rgb(255, 140, 230);
        color: rgb(255, 20, 110);
        cursor: pointer;
        transform: translateY(-4px);
        box-shadow: 0 0 32px 8px rgba(255, 20, 110, 0.5), 0px 8px 8px -8px rgba(0, 0, 0, 0.4), 0px 28px 24px -12px rgba(0, 0, 0, 0.4), inset 0px 8px 16px rgba(255, 255, 255, 0.5);
    }

    &:active {
        background-color: rgb(255, 140, 230);
        color: rgb(255, 20, 110);
        cursor: pointer;
        transform: translateY(0px);
        box-shadow: 0 0 32px 8px rgba(255, 20, 110, 0.5), 0px 8px 8px -8px rgba(0, 0, 0, 0.4), 0px 28px 24px -12px rgba(0, 0, 0, 0.4), inset 0px 8px 24px rgba(0, 0, 0, 0.2);
    }
`