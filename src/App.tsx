import React from 'react';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { DAppProvider } from '@usedapp/core';
import { View } from './components/View';
import { appRoutes, rightLinks } from './routes/routes';
import { NavigationBar } from './components/NavigationBar';
import WalletConnectButton from './components/WalletConnectButton';
import NotificationContainer from './components/NotificationsContainer';

import Dashboard from './views/Dashboard';

const PageContainer = styled(View)`
  flex: 1;
  flex-direction: column;
`

function App() {
  const errorHandler = (error: Error, info: { componentStack: string }) => {
    console.warn(error);
  }

  return (
    <>
      <ErrorBoundary fallbackRender={() => (<></>)} onError={errorHandler}>
        <DAppProvider config={{ supportedChains: [1, 3, 4] }}>
          <Router>
            <NavigationBar items={appRoutes} rightItems={rightLinks}>
              <WalletConnectButton connected={false} />
            </NavigationBar>

            <Switch>
              <Route exact path='/'>
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
              </Route>

              <Route path='/dashboard'>
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </DAppProvider>
        <NotificationContainer />
      </ErrorBoundary>
    </>
  );
}

export default App;
