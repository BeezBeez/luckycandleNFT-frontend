import React from 'react';
import { useNotifications } from '@usedapp/core';
import styled from 'styled-components';
import { View } from '../View';

const Container = styled(View)`
    position: absolute;
    top: 96px;
    right: 32px;
    flex-direction: column;
    z-index: 100;
    width: 20vw;
    background-color: red;
    
    @media (max-width: 500px) {
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
        width: 75vw;
    }
`

const Notification: React.FC = (props) => {
    return (
        <View style={{ padding: 12, margin: '12px 0px', background: 'rgb(30, 200, 80)', color: 'white', borderRadius: 8 }}>
            {props.children}
        </View>
    )
}

const NotificationContainer: React.FC = () => {
    const { notifications } = useNotifications();

    return (
        <Container>
            {notifications.map((notification) => {
                if ('transaction' in notification) {
                    return (
                        <Notification key={notification.id}>{notification.transactionName}</Notification>
                    )
                } else {
                    return (
                        <Notification key={notification.id}>{notification.submittedAt}</Notification>
                    )
                }
            })}
        </Container>
    )
}

export default NotificationContainer;