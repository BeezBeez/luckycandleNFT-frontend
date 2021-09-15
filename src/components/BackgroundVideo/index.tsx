import React from 'react';
import styled from 'styled-components';

const VideoComponent = styled.video`
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
`;

export const BackgroundVideo = () => {
    return (
        <VideoComponent loop autoPlay muted>
            <source src={`${process.env.PUBLIC_URL}/assets/videos/earth_loop.mp4`} type="video/mp4" />
        </VideoComponent>
    )
}