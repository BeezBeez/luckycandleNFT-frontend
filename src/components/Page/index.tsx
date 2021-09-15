import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { View } from "../View";

const Container = styled(View)`
    height: 100vh;
`;

export const Page: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}