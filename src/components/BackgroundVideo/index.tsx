import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = (x: string) => keyframes`
    from {
        filter: brightness(0.0);
    }
    to {
        filter: brightness(${x});
    }
`;

const VideoComponent = styled.video<{ brightness: string }>`
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    user-select: none;
    pointer-events: none;
    opacity: 1.0;
    width: 100%;
    height: auto;
    filter: brightness(0.0);
    animation: ${props => fadeIn(props.brightness)} 0.5s 2s alternate forwards;
`;

export const BackgroundVideo = (props: { name: string, brightness: string }) => {
    return (
        <VideoComponent brightness={props.brightness} loop autoPlay muted>
            <source src={`${process.env.PUBLIC_URL}/assets/videos/${props.name}.mp4`} type="video/mp4" />
        </VideoComponent>
    )
}