import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);
export default App;
