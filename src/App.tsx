import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from "react-router-dom";

import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

import WalletConnectButton from './components/WalletConnectButton';
import { View } from './components/View';
import { appRoutes, rightLinks } from './routes/routes';
import { NavigationBar } from './components/NavigationBar';

const PageContainer = styled(View)`
  flex: 1;
  flex-direction: column;
`

function App() {
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
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
    </Web3ReactProvider>
  );
}

export default App;
