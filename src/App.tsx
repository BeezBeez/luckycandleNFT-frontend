import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from "react-router-dom";

import { DAppProvider } from '@usedapp/core';
import WalletConnectButton from './components/WalletConnectButton';
import { View } from './components/View';
import { appRoutes, rightLinks } from './routes/routes';
import { NavigationBar } from './components/NavigationBar';
import NotificationContainer from './components/NotificationsContainer';

const AnimatedCursor = require('react-animated-cursor');

const PageContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  `

function App() {
  return (
    <>
      <DAppProvider config={{ supportedChains: [1, 3] }}>
        {/* <AnimatedCursor style={{zIndex: 1001}} color="255, 255, 255"/> */}
        <Router>
          <NavigationBar items={appRoutes} rightItems={rightLinks}>
            <WalletConnectButton connected={false} />
          </NavigationBar>

          <PageContainer>
            {
              appRoutes.map((route) => {
                return (
                  <>
                    <View id={route.name} />
                    {
                      route.content
                    }
                  </>
                )
              })
            }
          </PageContainer>
        </Router>
      </DAppProvider>
      <NotificationContainer />
    </>
  );
}

export default App;
