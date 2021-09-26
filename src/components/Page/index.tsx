import React, { HTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";
import { View } from "../View";

const blurOut = () => keyframes`
    from {
        filter: blur(64px);
    }
    to {
        filter: blur(0px);
    }
`;

const Container = styled(View) <{ rounded?: boolean }>`
    position: sticky;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    top: 0px;
    filter: blur(64px);
    border-radius: ${props => props.rounded ? "4vw 4vw 0px 0px" : "0px"};
    padding: 3vw;
    animation: ${blurOut} 0.5s 2s alternate forwards;

    @media (max-width: 500px) {
        position: static;
        border-radius: 0px;
    }
`;

export const Page: React.FC<HTMLAttributes<HTMLDivElement> & { rounded?: boolean }> = (props) => {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

export const Subpage = styled(View)`
    flex-direction: row;
    
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

export const TextContainer = styled(View)`
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    
    @media (max-width: 500px) {
        width: 80%;
    }
`