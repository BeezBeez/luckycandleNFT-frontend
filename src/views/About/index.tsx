import React from 'react';
import styled from 'styled-components';
import { Page } from '../../components/Page';
import { View } from '../../components/View';

const Title = styled.h1`
    font-family: 'Righteous';
    font-size: 96px;
    background: linear-gradient(to right,rgb(106, 255, 144) 0%, rgb(18, 197, 123) 100%);
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

const About = () => {
    return (
        <Page style={{backdropFilter: 'blur(32px)', backgroundColor: 'rgba(0, 50, 30, 0.8)', borderRadius: '64px 64px 0px 0px', boxShadow: '0 0 64px 16px rgba(0, 50, 30, 0.8)'}}>
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <View style={{ alignItems: 'start', justifyContent: 'center', flexDirection: 'column', width: '45%' }}>
                    <Title>OUR STORY</Title>
                    <p>
                        Paladin firebrand hercules lionheart mrfantastic arachne crusher wilsonfisk redhulk havok vulcan mrfantastic warbound. Medusa skaar whitetiger shocker zodiak. Shard uatu wildchild emmafrost maelstrom deathstrike. Banner jarvis alpha-flight penance sasquatch tusk benreilly hydra. Bob mimic scarletwitch caliban drax snowbird. Kraven miracleman zola tigra atlas scrambler tarantula onslaught exodus nighthawk x-factor? Vulcan logan mrhyde captainbritain. Patriot korg meltdown eternals romulus, smasher klaw klaw maverick.
                    </p>
                    <p>
                        Angel inhumans spot dracula darkstar tigra korvac blastaar. Enchantress brood spider-man galactus, shang-chi wolverine toad. Quentinquire wilsonfisk aim doom cypher modok atlas paladin? Praxagora moltenman dormammu norrinradd macgargan cerebro sprite spider-man shield mauler kraven forge. Howard hobgoblin thor ink wiccan magus mimic gambit jarvis scorpion x-51 norrinradd parker. Magus excalibur nova fantomex ink ghostrider runaways professorx moleman. Toad korath humantorch johnnyblaze tonystark firebird pryde changeling sif reaper. Dagger blastaar arnim mayparker captainbritain. Shard uatu thunderbolts invaders praxagora arachne patriot juggernaut ink vanisher gorgon howlett aim. Tombstone, jocasta caretaker swordsman forge.
                    </p>
                </View>
                <CollectionBorder>
                    <CollectionPreview src="https://www.pudgypenguins.io/images/site/home-gif-v2.gif" />
                </CollectionBorder>
            </View>
        </Page>
    );
}

export default About;