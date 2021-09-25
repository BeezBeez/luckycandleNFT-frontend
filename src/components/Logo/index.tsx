import React from 'react';
import styled from 'styled-components';
import { View } from '../View';

const LogoImage = styled.img`
    width: 15vw;
    
    @media (max-width: 1400px) {
        display: none;
    }
    
    @media (max-width: 500px) {
        display: none;
        height: 10vw;
        width: auto;
    }
`;

const Logo: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
    return (
        <View>
            <LogoImage style={style} src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} />
        </View>
    );
};

export default Logo;