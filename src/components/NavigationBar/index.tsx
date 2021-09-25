import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { NavigationBarProps, NavigationItemProps } from './types';
import Logo from "../Logo";

const NavigationContainer = styled.nav`
    display: inline;
    padding: 16px 32px;
    position: fixed;
    top: 16px;
    left: 16px;
    right: 16px;
    border-radius: 16px;
    max-width: 100vw;
    height: 3vw;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    z-index: 1;
    list-style: none;
    box-shadow: 0px 16px 24px -12px rgba(0,0,0,0.2);
    transition: all 0.35s cubic-bezier(0.77, 0, 0.175, 1);
    
    @media (max-width: 500px) {
        display: inline-flex;
        background-color: rgba(0, 40, 0, 0.8);
        backdrop-filter: none;
        height: 7vw;
    }
`


const MobileMenu = styled.nav<{ menuOpened: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 16px 32px;
    position: fixed;
    pointer-events: ${props => props.menuOpened ? 'all' : 'none'};
    top: ${props => props.menuOpened ? '96px' : '0px'};
    opacity: ${props => props.menuOpened ? '1' : '0'};
    left: 16px;
    right: 16px;
    border-radius: 16px;
    max-width: 100vw;
    height: auto;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
    list-style: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 16px 24px -12px rgba(0,0,0,0.2);
    transition: all 0.35s cubic-bezier(0.77, 0, 0.175, 1);

    @media (max-width: 500px) {
        display: inline-flex;
        background-color: rgba(0, 40, 0, 0.9);
        backdrop-filter: none;
    }
`

const NavUL = styled.ul`
    display: flex;
    margin: 0px;
    padding: 0px;
    list-style: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    float: left;
`

const NavLI = styled.li`
    display: flex;
    height: 100%;

    @media (max-width: 500px) {
        display: none;
    }
`

const StyledLink = styled(Link) <{ noHoverEffect?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #fff;
    padding: 8px 16px;
    font-size: 1vw;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    border: none;
    border-radius: 128px;

    &:hover {
        border-radius: 16px;
        background: ${props => !props.noHoverEffect ? 'rgba(255,255,255, 1)' : 'transparent'};
        color: rgb(30, 30, 30);
        margin: ${props => !props.noHoverEffect ? '-8px 0px' : '0px'};
        transform: ${props => !props.noHoverEffect ? 'scale(1.0)' : 'scale(1.1)'};

        @media (max-width: 500px) {
            border-radius: 16px;
            margin: auto;
            transform: scale(1.2);
        }
    }
    
    &:active {
        margin: 0px;
        border-radius: 32px;
        transform: scale(0.9);
    }
    
    @media (max-width: 500px) {
        font-size: 5vw;
    }
`;

const StyledAnchor = styled.a<{ noHoverEffect?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #999;
    padding: 0px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    border: none;
    border-radius: 128px;
    height: 70%;

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

    @media (max-width: 500px) {
        height: 100%;
    }
`;

const MenuButton = styled.img`
    display: none;
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
    height: 100%;

    @media (max-width: 500px) {
        display: block;
    }
`

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
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (menuOpened) {
                setMenuOpened(false);
            }
        });
    }, [menuOpened])

    return (
        <>
            <NavigationContainer>
                <MenuButton onClick={() => setMenuOpened(!menuOpened)} src={`${process.env.PUBLIC_URL}/assets/images/icons/menu.png`} alt="Menu icon" />
                <NavUL>
                    <Logo />
                    {
                        props.items.map((entry) => {
                            return (
                                <NavLI>
                                    {entry.to !== "" && <NavigationItem key={`items_${entry.name}`} name={entry.name} path={entry.to} displayName={entry.displayName} />}
                                </NavLI>
                            );
                        })
                    }
                </NavUL>
                <NavUL style={{ float: 'right' }}>
                    {
                        props.rightItems && props.rightItems.map((entry) => {
                            return (
                                <NavLI style={{ alignItems: 'center' }}>
                                    <NavigationItem key={`rightItems_${entry.name}`} name={entry.name} path={entry.to} displayName={entry.displayName} />
                                </NavLI>
                            );
                        })
                    }
                    {
                        props.children
                    }
                </NavUL>
            </NavigationContainer>
            <MobileMenu menuOpened={menuOpened}>
                <NavUL style={{ flexDirection: 'column' }}>
                    <Logo style={{ display: "block" }} />
                    {
                        props.items.map((entry) => {
                            return (
                                <NavLI style={{ display: 'flex' }}>
                                    {entry.to !== "" && <NavigationItem key={`items_${entry.name}`} name={entry.name} path={entry.to} displayName={entry.displayName} />}
                                </NavLI>
                            );
                        })
                    }
                </NavUL>
                <NavUL style={{ marginTop: 32 }}>
                    {
                        props.rightItems && props.rightItems.map((entry) => {
                            return (
                                <NavLI style={{ alignItems: 'center', display: 'flex', height: '9vw' }}>
                                    <NavigationItem key={`rightItems_${entry.name}`} name={entry.name} path={entry.to} displayName={entry.displayName} />
                                </NavLI>
                            );
                        })
                    }
                </NavUL>
            </MobileMenu>
        </>
    );
}