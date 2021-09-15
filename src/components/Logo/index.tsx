import React from 'react';
import styled from 'styled-components';
import { View } from '../View';

const LogoImage = styled.img`
`;

const Logo = () => {
    return (
        <View>
            <LogoImage width={256} src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} />
        </View>
    );
};

export default Logo;