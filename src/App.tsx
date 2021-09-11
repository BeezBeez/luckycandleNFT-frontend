import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from "react-router-dom";

import { View } from './components/View';
import { appRoutes } from './routes/routes';
import { NavigationBar } from './components/NavigationBar';

const PageContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  background-color: rgba(255,10,70,0.2);
`

function App() {
  return (
    <Router>
      <NavigationBar items={appRoutes} />
      <PageContainer>
        {
          appRoutes.map((route) => {
            return (
              <>
                <View id={route.name}/>
                {
                  route.content
                }
              </>
            )
          })
        }
      </PageContainer>
    </Router>
  );
}

export default App;
