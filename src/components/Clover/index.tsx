import React from 'react';
import styled, { keyframes } from 'styled-components';

const seed = function (s: number) {
    var mask = 0xffffffff;
    var m_w = (123456789 + s) & mask;
    var m_z = (987654321 - s) & mask;

    return function () {
        m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

        var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
    }
};

const flow = (randFunc: () => number) => keyframes`
    0% {
        transform: translateX(0%) translateY(0%) rotate(0deg);
    },
    30% {
        transform: translateX(${randFunc() * 150}%) translateY(${randFunc() * 150}%) rotate(50deg);
    }
    50% {
        transform: translateX(${randFunc() * -200}%) translateY(${randFunc() * 200}%) rotate(100deg);
    }
    80% {
        transform: translateX(${randFunc() * 100}%) translateY(${randFunc() * 100}%) rotate(50deg);
    }
    100% {
        transform: translateX(0%) translateY(0%) rotate(0deg);
    }
`

const Image = styled.img<{ randFunc: () => number, position: { left?: string, right?: string, top?: string, bottom?: string } }>`
    width: 96px;
    height: 96px;
    position: absolute;
    left: ${props => props.position.left || "auto"};
    right: ${props => props.position.right || "auto"};
    top: ${props => props.position.top || "auto"};
    bottom: ${props => props.position.bottom || "auto"};
    transition: all 1.0s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation: ${props => flow(props.randFunc)} ${props => 10 + props.randFunc() * 20}s ease-in-out infinite alternate;
    z-index: -1;
    opacity: 0.7;
    
    &:hover {
        width: 128px;
        height: 128px;
        filter: drop-shadow(0px 0px 8px rgba(0, 255, 255, 0.5));
    }
    
    @media (max-width: 500px) {
        width: 64px;
        height: 64px;
        
        &:hover {
            width: 96px;
            height: 96px;
        }
    }
`;

const Clover: React.FC<{ position: { left?: string, right?: string, top?: string, bottom?: string } }> = (props) => {
    const randFunc = seed(Math.floor(Math.random() * 50000));
    return (
        <Image randFunc={randFunc} position={props.position} src={`${process.env.PUBLIC_URL}/assets/images/clover.png`} />
    )
}

export default Clover;