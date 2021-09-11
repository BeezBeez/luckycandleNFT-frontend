import React from "react";
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { View } from '../View';
import { NavigationBarProps, NavigationItemProps } from './types';

const NavigationContainer = styled.nav`
    flex:1;
    display: inline-flex;
    justify-content: space-between;
    padding: 16px 32px;
    position: fixed;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    list-style: none;
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #999;
    padding: 8px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    border: none;
    border-radius: 128px;

    &:hover {
        border-radius: 0px;
        background: rgba(255,255,255,0.85);
        color: rgb(30, 30, 30);
        margin: -16px 0px;
    }
    
    &:active {
        margin: 0px;
        border-radius: 32px;
        transform: scale(0.9);
    }
`;

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    const onLinkClicked = () => {

    }

    return (
        <StyledLink onClick={onLinkClicked} to={props.path}>{props.displayName}</StyledLink>
    );
}

export const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    return (
        <View>
            <NavigationContainer>
                <View>
                    {
                        props.items.map((entry) => {
                            return (
                                <NavigationItem key={`items_${entry.name}`} path={entry.to} displayName={entry.displayName} />
                            );
                        })
                    }
                </View>
                <View>
                    {
                        props.rightItems && props.rightItems.map((entry) => {
                            return (
                                <NavigationItem key={`rightItems_${entry.name}`} path={entry.to} displayName={entry.displayName} />
                            );
                        })
                    }
                </View>
            </NavigationContainer>
        </View>
    );
}