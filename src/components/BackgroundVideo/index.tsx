import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = (x: string, y?: string) => keyframes`
    0% {
        filter: brightness(${x}) hue-rotate(${y || '160deg'});
    }
    75% {
        filter: brightness(${x}) hue-rotate(${y || '160deg'});
    }
    100% {
        filter: brightness(${x}) hue-rotate(${y || '160deg'});
    }
`;

const blurOut = (x: string) => keyframes`
    0% {
        filter: blur(${parseInt(x) * 8}px) hue-rotate(160deg);
    }
    75% {
        filter: blur(${parseInt(x) * 8}px) hue-rotate(160deg);
    }
    100% {
        filter: blur(0px) hue-rotate(160deg);
    }
`;

const VideoComponent = styled.video<{ brightness: string, hue?: string, blurAnim?: boolean }>`
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
    filter: brightness(${props => props.brightness}) hue-rotate(${props => props.hue || '160deg'});
    animation: ${props => props.blurAnim ? blurOut(props.brightness) : fadeIn(props.brightness, props.hue)} 2.5s 0s alternate forwards;
    overflow: hidden;
    
    @media (max-width: 1000px) {
        position: fixed;
        height: 100vh;
        width: 177.77777778vh;
        min-width: 100%;
        min-height: 56.25vw;
        left: -50%;
    }
`;

export const BackgroundVideo = (props: { name: string, brightness: string, hue?: string, blurAnim?: boolean, style?: React.CSSProperties }) => {
    return (
        <VideoComponent style={props.style} hue={props.hue} blurAnim={props.blurAnim} brightness={props.brightness} loop autoPlay muted playsInline>
            <source src={`${process.env.PUBLIC_URL}/assets/videos/${props.name}.mp4`} type="video/mp4" />
        </VideoComponent>
    )
}