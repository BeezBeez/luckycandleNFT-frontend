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

const Container = styled(View)`
    position: sticky;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    top: 0px;
    filter: blur(64px);
    animation: ${blurOut} 0.5s 2s alternate forwards;
`;

export const Page: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}