import Countdown, { CountdownRendererFn } from "react-countdown";
import styled from "styled-components";
import { View } from "../View";

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
    font-size: 96px;
      text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #ff0077,
    0 0 80px #ff0077,
    0 0 90px #ff0077,
    0 0 100px #ff0077,
    0 0 150px #ff0077;
`;

const OverlayTimeContainer = styled(View)`
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 24px;
`;

const OverlayTimeText = styled.span`
    user-select: none;
    position: relative;
    top: 64px;
    font-family: 'Major Mono Display', monospace;
    font-weight: bolder;
    opacity: 0.2;
    font-size: 162px;
    letter-spacing: 40px;
    filter: blur(4px);
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
        )
    }
};

export interface DropCountdownProps {
    date: string;
}

const DropCountdown: React.FC<DropCountdownProps> = (props) => {
    return (
        <Countdown precision={3} intervalDelay={0} date={new Date(props.date)} renderer={countdownRenderer} children={<>{props.children}</>} />
    );
}

export default DropCountdown;