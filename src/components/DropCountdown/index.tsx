import Countdown, { CountdownRendererFn } from "react-countdown";
import styled from "styled-components";
import { View } from "../View";
import { PurpleButton } from "../Buttons";

const TimeSuperContainer = styled(View)`
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const TimeContainer = styled(View)`
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 24px;
`;

const TimeText = styled.span`
    font-family: 'Major Mono Display', monospace;
    margin: 0;
    font-weight: bold;
    font-size: 5vw;
    text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 40px #00ff73,
        0 0 80px #00ff73,
        0 0 90px #00ffd5,
        0 0 100px #00ffd5,
        0 0 150px #00ffd5;
`;

const OverlayTimeContainer = styled(View)`
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 24px;

    @media (max-width: 500px) {
        display: none;
    }
`;

const OverlayTimeText = styled.span`
    user-select: none;
    position: relative;
    top: 64px;
    font-size: 10vw;
    font-family: 'Major Mono Display', monospace;
    font-weight: bolder;
    opacity: 0.2;
    letter-spacing: 40px;
    z-index: -1;
`;

const countdownRenderer: CountdownRendererFn = ({ days, hours, minutes, seconds, milliseconds, completed, props }) => {
    if (completed) {
        return (
            <>
                {
                    props.children
                }
            </>
        )
    } else {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <TimeSuperContainer>
                    <OverlayTimeContainer>
                        <OverlayTimeText>
                            {milliseconds}
                        </OverlayTimeText>
                    </OverlayTimeContainer>
                    <TimeContainer>
                        <TimeText>
                            {days}
                        </TimeText>
                        <h3>Days</h3>
                    </TimeContainer>
                    <TimeContainer>
                        <TimeText>
                            {hours}
                        </TimeText>
                        <h3>Hours</h3>
                    </TimeContainer>
                    <TimeContainer>
                        <TimeText>
                            {minutes}
                        </TimeText>
                        <h3>Minutes</h3>
                    </TimeContainer>
                    <TimeContainer>
                        <TimeText>
                            {seconds}
                        </TimeText>
                        <h3>Seconds</h3>
                    </TimeContainer>
                </TimeSuperContainer>
                <PurpleButton onClick={() => window.location.href = 'https://discord.gg/3jTTMx8D3j'}>Join our discord!</PurpleButton>
            </View>
        )
    }
};

export interface DropCountdownProps {
    date: string;
}

const DropCountdown: React.FC<DropCountdownProps> = (props) => {
    return (
        <Countdown precision={3} intervalDelay={78} date={new Date(props.date)} renderer={countdownRenderer} children={<>{props.children}</>} />
    );
}

export default DropCountdown;