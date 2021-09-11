import styled from "styled-components";
import { View } from "../View";

import { PageProps } from "./types";

const Container = styled(View)`
    height: 100vh;
`;

export const Page: React.FC<PageProps> = (props) => {
    return (
        <Container id={props.anchor}>
            {props.children}
        </Container>
    )
}