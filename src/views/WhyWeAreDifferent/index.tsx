import React from 'react';
import styled from 'styled-components';
import { Page } from '../../components/Page';
import { View } from '../../components/View';

const Title = styled.h1`
    font-family: 'Righteous';
    font-size: 72px;
    background: linear-gradient(345deg,#78fff4 0%, rgb(35, 231, 133) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const CollectionBorder = styled.div`
    display: flex;
    height: 368px;
    border: solid 2px rgb(170, 255, 196);
    border-radius: 64px;
    box-shadow: 0px 0px 6px 2px rgb(126, 255, 154), 0px 0px 24px 4px rgb(40, 255, 112), inset 0px 0px 24px 4px rgb(40, 255, 112);
    transition: height 1s cubic-bezier(0.77, 0, 0.175, 1);

    &:hover {
        height: 400px;
    }
`;

const CollectionPreview = styled.img`
    flex: 1;
    padding: 24px;
    border-radius: 64px;
`

const WhyWeAreDifferent = () => {
    return (
        <Page style={{backdropFilter: 'blur(64px)', backgroundColor: 'rgba(0, 80, 50, 0.8)', borderRadius: '64px 64px 0px 0px', boxShadow: '0 0 64px 16px rgba(0, 80, 50, 0.8)'}}>
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <CollectionBorder>
                    <CollectionPreview src={process.env.PUBLIC_URL + '/assets/images/NFTs/pfp1.png'} />
                </CollectionBorder>
                <View style={{ alignItems: 'start', textAlign: 'start', justifyContent: 'center', flexDirection: 'column', width: '50%' }}>
                    <Title>WHY WE ARE DIFFERENT</Title>
                    <p>
                        Angel inhumans spot dracula darkstar tigra korvac blastaar. Enchantress brood spider-man galactus, shang-chi wolverine toad. Quentinquire wilsonfisk aim doom cypher modok atlas paladin? Praxagora moltenman dormammu norrinradd macgargan cerebro sprite spider-man shield mauler kraven forge. Howard hobgoblin thor ink wiccan magus mimic gambit jarvis scorpion x-51 norrinradd parker. Magus excalibur nova fantomex ink ghostrider runaways professorx moleman. Toad korath humantorch johnnyblaze tonystark firebird pryde changeling sif reaper. Dagger blastaar arnim mayparker captainbritain. Shard uatu thunderbolts invaders praxagora arachne patriot juggernaut ink vanisher gorgon howlett aim. Tombstone, jocasta caretaker swordsman forge.
                    </p>
                </View>
            </View>
        </Page>
    );
}

export default WhyWeAreDifferent;