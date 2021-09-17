import React from "react";
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { View } from '../View';
import { NavigationBarProps, NavigationItemProps } from './types';

const NavigationContainer = styled.nav`
    position: absolute;
    flex:1;
    display: inline-flex;
    justify-content: space-between;
    padding: 16px 32px;
    position: fixed;
    top: 16px;
    left: 16px;
    right: 16px;
    border-radius: 16px;
    max-height: 48px;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    z-index: 1;
    list-style: none;
    box-shadow: 0px 16px 24px -12px rgba(0,0,0,0.2);
    transition: all 0.35s cubic-bezier(0.77, 0, 0.175, 1);

    &:hover {
        box-shadow: 0px 24px 32px -12px rgba(0,0,0,0.2);
    }
`

const StyledLink = styled(Link) <{ noHoverEffect?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    border: none;
    border-radius: 128px;

    &:hover {
        border-radius: 0px;
        background: ${props => !props.noHoverEffect ? 'rgb(255,255,255)' : 'transparent'};
        color: rgb(30, 30, 30);
        margin: ${props => !props.noHoverEffect ? '-16px 0px' : '0px'};
        transform: ${props => !props.noHoverEffect ? 'scale(1.0)' : 'scale(1.1)'};
    }
    
    &:active {
        margin: 0px;
        border-radius: 32px;
        transform: scale(0.9);
    }
`;

const StyledAnchor = styled.a<{ noHoverEffect?: boolean }>`
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
        background: ${props => !props.noHoverEffect ? 'rgb(255,255,255)' : 'transparent'};
        color: rgb(30, 30, 30);
        margin: ${props => !props.noHoverEffect ? '-16px 0px' : '0px'};
        transform: ${props => !props.noHoverEffect ? 'scale(1.0)' : 'scale(1.1)'};
    }
    
    &:active {
        margin: 0px;
        border-radius: 32px;
        transform: scale(0.9);
    }
`;

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    const LinkRender = () => {
        return (
            props.path.includes('https://') ?
                <StyledAnchor noHoverEffect={props.name.includes('$')} href={props.path} target="_blank">{props.displayName}</StyledAnchor>
                :
                <StyledLink noHoverEffect={props.name.includes('$')} to={props.path}>{props.displayName}</StyledLink>
        )
    }
    return (
        <LinkRender />
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
                                entry.to !== "" && <NavigationItem key={`items_${entry.name}`} name={entry.name} path={entry.to} displayName={entry.displayName} />
                            );
                        })
                    }
                </View>
                <View style={{justifyContent: 'end'}}>
                    {
                        props.rightItems && props.rightItems.map((entry) => {
                            return (
                                <NavigationItem key={`rightItems_${entry.name}`} name={entry.name} path={entry.to} displayName={entry.displayName} />
                            );
                        })
                    }
                    {
                        props.children
                    }
                </View>
            </NavigationContainer>
        </View>
    );
}