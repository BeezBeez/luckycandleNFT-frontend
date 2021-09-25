import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Righteous';
    font-size: 4vw;
    background: linear-gradient(345deg,#78fff4 0%, rgb(35, 231, 133) 100%);
    background-clip: text;
    margin-bottom: 32px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 500px) {
        font-size: 9vw;
        text-align: center;
    }
`;