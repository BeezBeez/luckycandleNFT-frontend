import styled from "styled-components";

export const CollectionBorder = styled.div`
    display: flex;
    width: 22vw;
    height: 22vw;
    margin: 32px;
    border: solid 2px rgb(170, 255, 196);
    border-radius: 64px;
    box-shadow: 0px 0px 6px 2px rgb(126, 255, 154), 0px 0px 24px 4px rgb(40, 255, 112);
    overflow: hidden;
    
    @media (max-width: 500px) {
        border-radius: 16px;
    }
`;

export const CollectionPreview = styled.img`
    flex: 1;
    padding: 0px;
    border-radius: 0px;
    width: 100%;
    height: 100%;

    @media (max-width: 500px) {
        border-radius: 0px;
    }
`