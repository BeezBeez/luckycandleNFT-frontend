import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from "react-router-dom";

import { DAppProvider } from '@usedapp/core';

import WalletConnectButton from './components/WalletConnectButton';
import { View } from './components/View';
import { appRoutes, rightLinks } from './routes/routes';
import { NavigationBar } from './components/NavigationBar';

const PageContainer = styled(View)`
  flex: 1;
  flex-direction: column;
`

function App() {
  return (
    <DAppProvider config={{supportedChains: [1, 3]}}>
      {/* <AnimatedCursor color="255,255,255"/> */}
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
  );
}

export default App;
