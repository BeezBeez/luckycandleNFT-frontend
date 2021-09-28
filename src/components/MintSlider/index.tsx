import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
    display: flex;
    align-items: center;
`

const RangeInput = styled.input`
    appearance: none;
    outline: none;
    width: 30vw;
    height: 12px;
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.7);
    
    &::-webkit-slider-thumb {
        appearance: none;
        background-color: rgb(146, 146, 146);
        width: 24px;
        height: 24px;
        outline: none;
        border-radius: 999px;
        transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
        border: 1px solid rgb(204, 204, 204);
        box-shadow: inset 0 6px 8px rgba(255, 255, 255, 0.8);
        
        &:hover {
            transform: scale(1.2);
            background-color: rgb(202, 202, 202);
            border: 1px solid rgb(245, 245, 245);
            box-shadow: inset 0 4px 6px rgba(255, 255, 255, 1), 0 0 16px rgb(255, 255, 255);
        }
    }

    &::-moz-range-thumb {
        appearance: none;
        background-color: rgb(146, 146, 146);
        width: 24px;
        height: 24px;
        outline: none;
        border-radius: 999px;
        transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
        border: 1px solid rgb(204, 204, 204);
        box-shadow: inset 0 6px 8px rgba(255, 255, 255, 0.8);
        
        &:hover {
            transform: scale(1.2);
            background-color: rgb(202, 202, 202);
            border: 1px solid rgb(245, 245, 245);
            box-shadow: inset 0 4px 6px rgba(255, 255, 255, 1), 0 0 16px rgb(255, 255, 255);
        }
    }

    @media (max-width: 500px) {
        width: 40vw;
    }
`

export const MintSlider: React.FC<{ value?: number, min?: number, max?: number, onChange?: React.ChangeEventHandler<HTMLInputElement> }> = (props) => {
    const [value, setValue] = useState(props.value || props.min || 0);
    return (
        <Slider>
            <RangeInput type="range" value={value} onChange={(event) => {
                if (props.onChange) {
                    props.onChange(event);
                }

                setValue(event.target.valueAsNumber);
            }} min={props.min || 0} max={props.max || 100} />
        </Slider>
    )
}