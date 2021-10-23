import React, { useState } from 'react';
import styled from 'styled-components';
import { View } from '../View';

const Background = styled.div`
    flex-direction: row;
    width: 85%;
    height: 8px;
    margin-right: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    border-radius: 8px;
`

const Foreground = styled.div<{ value: number }>`
    /* overflow: hidden; */
    width: ${props => props.value * 100}%;
    height: 8px;
    border-radius: 8px;
    background: linear-gradient(90deg, rgb(30, 200, 80), rgb(10, 150, 50));
    border: 1px solid rgb(210, 250, 220);
    transition: all 0.3s ease-in-out;
    box-shadow: 
        0 0 2px rgb(100, 255, 140),
        0 0px 4px rgb(100, 255, 140),
        0 0px 8px rgb(30, 220, 80);
`

const ProgressBar: React.FC<{ min: number, max: number, value: number }> = (props) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column', marginBottom: 1, marginTop: 8 }}>
            <h5>{props.value} / {props.max}</h5>
            <Background>
                <Foreground value={props.value / (props.max - props.min)} />
            </Background>
        </View>
    )
}

export default ProgressBar;